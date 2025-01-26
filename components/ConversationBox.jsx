"use client";
import React, { useContext, useEffect } from "react";
import { ConversationContext } from "@/context/ConversationContext";
import { UserCircleIcon, CubeTransparentIcon } from '@heroicons/react/24/solid'

export default function ConversationBox() {
  const { conversations, activeConversation, loadConversation } =
    useContext(ConversationContext);

  // console.log(activeConversation);



  if (activeConversation == null) {
    return (
      <section className=" mx-auto flex flex-1 gap-4 justify-center items-center text-base md:gap-5 lg:gap-6 md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem] h-[85vh] overflow-y-scroll">
        <p className="text-5xl ">How can i help you? </p>
      </section>
    );
  }
  return (
    <section className=" mx-auto space-y-4 text-base md:gap-5 lg:gap-6 md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem] h-[85vh] overflow-y-scroll  scrollbar-style pr-5">
      {activeConversation["conversation"].map((chat, index) => (
        <section key={index} className=" space-y-10">
          <div className="flex flex-col ">
            <UserCircleIcon className="h-10 w-10 text-slate-800 ml-auto" />
            <p className="text-end">{chat.user}</p>
          </div>

          <div className="flex flex-col justify-start">
            
          <CubeTransparentIcon className="h-10 w-10 text-slate-800 mr-auto" />
          <p>{chat.system}</p>
          </div>
        </section>
      ))}
    </section>
  );
}
