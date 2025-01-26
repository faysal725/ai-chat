'use client'
import React, { useContext, useEffect } from "react";
import { ConversationContext } from "../../context/ConversationContext";
import { Button } from "./button";
import { BeakerIcon, PencilSquareIcon } from '@heroicons/react/24/solid'

export default function Sidebar() {

  const {conversations, activeConversation, loadConversation, clearConversation } = useContext(ConversationContext)

  function initiateNewChat() {
    let newChatObj = {
      conversation: []
    }
    console.log('asdfsdf')
    loadConversation(newChatObj, true)
  }
  console.log(conversations, activeConversation)

  function clear(){
    console.log(conversations, activeConversation)
    clearConversation()
  }

  useEffect(() => {
    console.log(activeConversation);
    console.log(conversations);
  }, [activeConversation]);
  
  return (
    <aside className="w-64 bg-gray-800 text-white flex flex-col pb-10">
      <div className="flex justify-between items-center p-4 ">
        <p className="text-lg font-bold">History</p>
        <Button variant="default" size="sm" className="" onClick={() => clear()}>
        <PencilSquareIcon className="size-6 text-white" />
      </Button>
      </div>
      <nav className="flex flex-col gap-2 p-4 max-h-[80vh] overflow-y-scroll scrollbar-style">
        {
          conversations.length > 0 ?conversations.map((conversation) => (
            <Button key={conversation.id} variant="ghost" onClick={() => loadConversation(conversation.id)}>{conversation.title}</Button>
          )) : <p className="text-xs">No Previous Chat Found</p>
        }
      </nav>
    </aside>
  );
}
