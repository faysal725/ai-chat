import Image from "next/image";
import { Button } from "@/components/ui/button";
import InputBox from "@/components/InputBox";
import ConversationBox from "@/components/ConversationBox";

export default function Home() {
  return (
    <main className="m-auto text-base py-[18px] px-3 md:px-4 w-full md:px-5 lg:px-4 xl:px-5 relative  ">
      <ConversationBox />

      <section className=" m-auto text-base sticky bottom-0 left-0  w-full ">
        <InputBox />
      </section>
    </main>
  );
}
