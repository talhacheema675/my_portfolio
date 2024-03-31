import Image from "next/image"
const Hero=()=>
{
    return(
        <div className=" w-full h-max bg-hero-iamge">
           
            <div className="flex md:flex-row flex-col justify-center items-center py-20">
                <div className=" w-max h-full">
                    <Image src={"/profile5.jpg"} alt="profile" width={"400"} height={"400"} className="rounded-3xl"/>
                </div>
                <div className="ml-2 flex flex-col justify-center items-center">
                    <h1 className="md:text-7xl text-5xl font-extrabold font-mono py-2">Passionate</h1>
                    <h1 className="md:text-7xl text-5xl font-extrabold font-mono py-2">Developer</h1>
                    <h1 className="md:text-3xl text-xl font-extrabold text-gray-400 py-2"> Adept in Full Stack Development</h1>
                    <div className="flex flex-row  m-2 gap-4">
                    <Image src={"/next.png"} alt="profile" width={"50"} height={"50"} className="rounded-full"/>
                    <Image src={"/nextauth.jpeg"} alt="profile" width={"50"} height={"50"} className="rounded-full"/>
                    <Image src={"/vercel.png"} alt="profile" width={"50"} height={"50"} className="rounded-full"/>
                    <Image src={"/sanity.webp"} alt="profile" width={"50"} height={"50"} className="rounded-full"/>
                    <Image src={"/shadcn.png"} alt="profile" width={"50"} height={"50"} className="rounded-full"/>
                    <Image src={"/postman.png"} alt="profile" width={"50"} height={"50"} className="rounded-full"/>
                    <Image src={"/drizzle.png"} alt="profile" width={"50"} height={"50"} className="rounded-full"/>
                    </div>
                </div>
            </div>
        
        </div>
    )
}
export default Hero