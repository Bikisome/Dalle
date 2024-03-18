

import express from 'express';
import * as dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

import { OpenAI } from "openai";
const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY});

router.route('/').get((req, res) => {
  res.send("hello from Bikram");
})

router.route('/').post(async (req, res) => {
  try {
    const { prompt } = req.body;

    // if (!prompt || typeof prompt !== 'string' || prompt.trim() === '') {
    //   throw new Error('Prompt is missing or empty');
    // }
    const aiResponse = await openai.images.generate({
      prompt,
      n: 1,
      size: '1024x1024',
      response_format: 'b64_json',
    });

 

    const image =  aiResponse.data[0].b64_json;
    res.status(200).json({ photo: image });
  } catch (error) {
    console.error("Error:", error);
    //console.error("AI Response:", aiResponse); // Log the full response for debugging
    const errorMessage = error?.response?.data?.error?.message || "Internal Server Error";
    res.status(500).send(errorMessage);
  }
});

export default router;


