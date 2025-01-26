"use client";
import React, { useContext, useEffect, useRef } from "react";
import { ConversationContext } from "@/context/ConversationContext";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function InputBox() {
  const { conversations, activeConversation, createNewConversation, insertConversation } =
    useContext(ConversationContext);
  const queryTextRef = useRef(null);

  async function submit(event) {
    event.preventDefault();

    let userText = queryTextRef.current.value

    if (userText == "") {
      return 
    }
    
    const response = await sendingQuery(userText);

    let chatObj = {}
    if (!activeConversation) {
      let newChatObj = {
        conversation: []
      }
      chatObj["conversation"] = [{user: userText, system:response}]
      chatObj["title"] = response

      createNewConversation(chatObj)
    }else{
      // loadConversation(chatObj, true)
      chatObj["user"] = userText
      chatObj["system"] = response
      insertConversation(chatObj)
    }

    queryTextRef.current.value = ""
  }

  async function sendingQuery(query) {
    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: query }],
      }),
    };

    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_OPENAI_MOCK_API,
        options
      );
      const data = await response.json();

      return data.choices[0].message.content
    } catch (error) {
      return error
    }
  }


  

  return (
    <form
      onSubmit={(e) => submit(e)}
      className="mx-auto flex flex-1 items-center  text-base md:gap-5 lg:gap-6 md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem] py-2 bg-white"
    >
      <Input type="text" placeholder="Write Something" ref={queryTextRef} />
      <Button variant="default" size="sm" className="h-9" type="submit">
        Send
      </Button>
    </form>
  );
}
