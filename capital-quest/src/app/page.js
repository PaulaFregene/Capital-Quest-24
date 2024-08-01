import { Button } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" grad flex min-h-screen flex-col items-center justify-between p-24">
      <div className= 'text-center' >
        <div>Introducing</div>
        <Image src="/capital quest outlined logo.png" width={500} height={500} alt="Capital Quest logo image"/>
        <div>LEARN FINANCIAL LITERACY WITH CAPITAL ONE! </div>
      </div>
      <div>
        <Button variant="contained" color="error" size="large" href="#contained-buttons"> Begin</Button>
      </div>
      
      <Image src="/capital one logo.png" width={200} height={200} alt="Capital One logo image"/>
      
    </main>
  );
}
