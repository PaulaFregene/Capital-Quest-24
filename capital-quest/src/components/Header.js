import Image from "next/image"
import Link from "next/link"

export default function Header() {
    return (
        <div className= "flex min-h-screen flex-row items-start justify-between p-0">
            <button>
                <Link href="/" passHref>
                    <Image src="/Menu.png" width={200} height={200} alt="Menu button" />
                </Link>
            </button>
            <Image src="/capital quest outlined logo.png" width={300} height={300} alt="Capital One logo image"/>
        </div>
    )
}