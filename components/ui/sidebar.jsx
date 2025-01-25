'use client'
import React, { useContext } from "react";
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
  return (
    <aside className="w-64 bg-gray-800 text-white flex flex-col pb-10">
      <div className="flex justify-between items-center p-4 ">
        <p className="text-lg font-bold">History</p>
        <Button variant="default" size="sm" className="" onClick={() => clear()}>
        <PencilSquareIcon className="size-6 text-white" />
      </Button>
      </div>
      <nav className="flex flex-col gap-2 p-4 ">
        <Button variant="ghost">Dashboard</Button>
        <Button variant="ghost">Profile</Button>
        <Button variant="ghost">Settings</Button>
      </nav>
    </aside>
  );
}
