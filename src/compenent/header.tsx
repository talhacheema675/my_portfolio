"use client"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"
import { MenuIcon } from "lucide-react"
const Header=()=>
{
    const [showval,setval]=useState(2)
    return(
        <div className="flex flex-row justify-between p-4 bg-black text-white">
           <Link href={"#"}> <div className="flex flex-row gap-1">
                <Image src={"/logo1.png"} alt="logo1" width="40" height="40"/>
                <h1 className="text-2xl">Talha cheema</h1>
            </div>
            </Link>
            <div className={`flex md:flex-row flex-col gap-8 text-xl ${showval%2==0?"hidden md:flex  ":""}  `}>
                    <Link href={"#1"}><h1 className="md:pt-0 pt-20">About</h1></Link>
                    <Link href={"#2"}><h1>Portfolio</h1></Link>
                    <Link href={"#4"}><h1>Skills</h1></Link> 
                    <Link href={"#3"}><h1>contact</h1></Link>
                    <Link href={"#"}><h1>Login</h1></Link>
            </div>
            <div className="md:hidden"> <button onClick={()=>setval(showval+1)}><MenuIcon/></button></div>
        </div>
    )
}
export default Header