import Image from "next/image"
import Link from "next/link"

export default function Header() {
    return (
        <div>
            <div className= "flex flex-start flex-row p-10">
                <button>
                    <Link href="/game_home" passHref>
                        <Image src="/Menu.png" width={50} height={50} alt="Menu button" />
                    </Link>
                </button>
                <Image src="/capital quest outlined logo.png" width={300} height={300} alt="Capital One logo image" className="ml-auto mr-10"/>
            </div>
        </div>
    )
}