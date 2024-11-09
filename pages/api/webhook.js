// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { sendMessage } from "@/utils/telegram";

// 1. /start, /help, 

export default async function handler(req, res) {
  if (req.method=="POST") {
    const chatId = req.body.message.chat.id;
    const text = req.body.message.text;
    console.log("ChatID", chatId);
    console.log("text", text);
    if (text=="ping") {
      await sendMessage(chatId,"pong");
    } else {
      await sendMessage(chatId,text);
    }
    res.status(200).send("OK")
  } else {
      res.setHeader('Allow', ['POST']);
      res.status(500).send('Method Not Allowed');
  }
}
