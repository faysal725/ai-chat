'use client'
import React from "react";
import { Button } from "./button";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white flex flex-col pb-10">
      <div className="flex justify-between items-center p-4 ">
        <p className="text-lg font-bold">asdf</p>
        <Button variant="default" size="sm" className="" onClick={() => console.log('asdfsdf')}>
        Sendssdf
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
