import React from "react";
import { Button } from "@/components/ui/button";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white flex flex-col pb-10">
      <div className="p-4 text-lg font-bold">My Sidebar</div>
      <nav className="flex flex-col gap-2 p-4 ">
        <Button variant="ghost">Dashboard</Button>
        <Button variant="ghost">Profile</Button>
        <Button variant="ghost">Settings</Button>
      </nav>

      <Button variant="ghost" className="mt-auto">
        Logout
      </Button>
    </aside>
  );
}
