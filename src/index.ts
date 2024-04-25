import { Bot, InputFile, webhookCallback } from "grammy";
import { env } from "@/env";

const bot = new Bot(env.BOT_TOKEN);

bot.command("start", (ctx) => ctx.reply(`Welcome, ${ctx.from?.username}. \nSend /receipt reference_number your_account_last_7_digit`,));

bot.command("receipt", async (ctx) => {
  const reference = ctx.match;

  console.log(reference);

  if (reference.split(" ").length != 2) {
    await ctx.reply(
      "Invalid receipt format. Send /receipt reference_number last_7_digit_of_account.",
      {
        reply_parameters: { message_id: ctx.msgId },
      },
    );
  } else {
    try {
    
      const tx = reference.split(" ").join("");

      let pdf = new InputFile(new URL(`https://apps.cbe.com.et:100/?id=${tx}`), "Receipt.pdf")
      
      bot.api.sendDocument(ctx.chat.id, pdf)

    } catch (error) {
      console.log(error);
    }
  }
});

const handleUpdate = webhookCallback(bot, "std/http");

Bun.serve({
  async fetch(req) {
    try {
      const url = new URL(req.url);
      if (url.searchParams.get("secret") !== bot.token) {
        return new Response("not allowed", { status: 403 });
      }
      return await handleUpdate(req);
    } catch (err) {
      console.log(err);
    }
    return new Response();
  },
});

