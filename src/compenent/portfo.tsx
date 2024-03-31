import Image from "next/image";
import Link from "next/link";
const Portfo=()=>{
    return(

        <div id="2">
            <div className="flex flex-col w-full h-max justify-center items-center p-10 bg-slate-900 gap-6 border-dotted border-y-2 border-black">
        
        <div className="md:text-5xl text-2xl font-bold">My Achievements</div>
        <div className="text-red-600 md:text-xl text-md"> Some of my achievements</div>
        <div className="flex md:flex-row flex-col md:gap-4 gap-6 m-4">
           
                <div className="flex flex-col md:w-1/3 w-full">
                 <Link href={"https://talha-hackathon-website.vercel.app/"}>
                <Image src={"/cloth.jpg"} alt="cloth" width={"400"} height={"400"} className="w-96 h-80 hover:h-96"/>
                </Link>
                <h1 className="py-2 font-bold text-center">E-Commerce Website</h1>
                <p className="text-center">It is build on next js and used all modern tools such as sanity,drizzle,dynamic routing,tailwind and shadcn ui</p>
                
            </div>
            
            <div className="flex flex-col md:w-1/3 w-full ">
                <Link href={"https://q2-quiz-ap.vercel.app/"}>
                <Image src={"/quiz2.png"} alt="cloth" width={"500"} height={"500"} className="w-96 h-80 hover:h-96"/>
                </Link>
                <h1 className="py-2 font-bold text-center">Quiz Application</h1>
                <p className="text-center">It is build on next js and used all modern tools such as sanity,drizzle,dynamic routing,tailwind and shadcn ui.Moreover it fetches data through API</p>

            </div>
            
             <div className="flex flex-col md:w-1/3 w-full ">
                <Link href={"https://q2-quiz-ap.vercel.app/"}>
                <Image src={"/todo.jpg"} alt="cloth" width={"400"} height={"400"} className="w-96 h-80 hover:h-96"/>
                </Link>
                <h1 className="py-2 font-bold text-center">Todo List</h1>
                <p className="text-center">It is build on next js and used all modern tools such as sanity,drizzle,dynamic routing,tailwind and shadcn ui. Also, Vercel database is used for storing data</p>

            </div>
            
        </div>
        <div>
                <h1 className="text-red-600 text-3xl hover:text-blue-700">And many more to come...</h1>
        </div>

    </div>

        </div>
    )
}
export default Portfo