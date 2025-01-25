"use client";
import React, { useRef } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function InputBox() {
  const queryTextRef = useRef(null);
  // console.log(process.env.NEXT_PUBLIC_API_URL);
  // console.log(process.env.NEXT_PUBLIC_OPENAI_MOCK_API);
  // console.log(process.env.NEXT_PUBLIC_OPENAI_API_KEY);

  async function submit(event) {
    event.preventDefault();

    console.log(process.env["OPENAI_API_KEY"]);
    await sendingQuery(queryTextRef.current.value);
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
      console.log(data.choices[0].message.content);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form
      onSubmit={(e) => submit(e)}
      className="mx-auto flex flex-1 items-center  text-base md:gap-5 lg:gap-6 md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem] py-2 bg-white"
    >
      <Input type="text" placeholder="Write Something" ref={queryTextRef} />
      <Button variant="default" size="sm" className="" type="submit">
        Send
      </Button>
    </form>
  );
}
