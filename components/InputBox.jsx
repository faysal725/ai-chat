"use client";
import React, { useRef } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function InputBox() {
  const queryTextRef = useRef(null);

  function submit(event) {
    event.preventDefault();

    console.log(queryTextRef.current.value);
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
