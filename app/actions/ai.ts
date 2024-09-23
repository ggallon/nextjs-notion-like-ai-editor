"use server";

import { openai } from "@ai-sdk/openai";
import { type CoreMessage, streamText } from "ai";
import { createStreamableValue } from "ai/rsc";
import { aiModel } from "../config";

// Send messages to AI and stream a result back
export async function continueConversation(messages: CoreMessage[]) {
  const result = await streamText({
    model: openai(aiModel),
    messages,
  });

  const stream = createStreamableValue(result.textStream);
  return stream.value;
}
