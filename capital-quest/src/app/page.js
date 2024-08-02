"use client";

import { Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from 'next/link';
import Credit from "./credit/page";

export default function Home() {
    return (
        <main className="grad flex min-h-screen flex-col items-center justify-between pt-[-20px] p-0">
            <div className="flex flex-col items-center justify-center flex-grow text-center p-10 space-y-[-40px] mb-[200px]">
                <Typography variant="h4" style={{color:'white', fontWeight: 'bold'}}>Introducing</Typography>
                <Image src="/capital quest outlined logo.png" width={500} height={500} alt="Capital Quest logo image" />
                <Typography variant="h6" style={{ color: 'white', fontWeight: 'bold', fontSize: '28px' }}>LEARN FINANCIAL LITERACY WITH CAPITAL ONE!</Typography>  
            </div>
            <div className="text-center p-0 mb-[200px]">
                <Link href="/savings" passHref>
                    <Button variant="contained" 
                            color="error"
                            size="large"
                            sx = {{fontSize:'1.5rem', padding:'20px 94px', borderRadius: '40px' }}
                            > 
                        Begin
                    </Button>
                </Link>
            </div>
            <div className="flex justify-center mt-auto">
                <Image src="/capital one logo.png" width={200} height={200} alt="Capital One logo image"/>
            </div>
            <Credit />
        </main>
    );

