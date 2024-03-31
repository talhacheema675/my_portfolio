import Image from "next/image"
import Link from "next/link"
const Header=()=>
{
    return(
        <div className="flex flex-row justify-between p-4 bg-black text-white">
           <Link href={"#"}> <div className="flex flex-row gap-1">
                <Image src={"/logo1.png"} alt="logo1" width="40" height="40"/>
                <h1 className="text-2xl">Talha cheema</h1>
            </div>
            </Link>
            <div className="flex flex-row gap-8 text-xl">
                    <Link href={"#1"}><h1>About</h1></Link>
                    <Link href={"#2"}><h1>Portfolio</h1></Link>
                    <Link href={"#4"}><h1>Skills</h1></Link> 
                    <Link href={"#3"}><h1>contact</h1></Link>
                    <Link href={"#"}><h1>Login</h1></Link>
            </div>
        </div>
    )
}
export default Header