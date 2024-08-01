import Image from "next/image";

export default function Home() {
  return (
    <main className=" grad flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <div>Introducing</div>
        <Image src="/capital quest outlined logo.png" width={500} height={500} alt="Capital Quest logo image"/>
        <div>LEARN FINANCIAL LITERACY WITH CAPITAL ONE! </div>
      </div>
    </main>
  );
}
