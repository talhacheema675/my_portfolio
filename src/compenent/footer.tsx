import Image from "next/image"
import { PhoneCallIcon,Mail,LocateFixed } from "lucide-react"
const Footer=()=>
{
return (
    <div id="3" className="w-full p-6 bg-slate-950">
        <div className="flex flex-col justify-center items-center gap-4 rounded-e-3xl">
        <h1 className="text-4xl text-yellow-400 font-bold">Get in Touch</h1>
        <input type="text" placeholder="Name" className="md:w-1/3 w-1/2 h-8  p-2"/>
        <input type="email" placeholder="Email" className="md:w-1/3 w-1/2 h-8  p-2"/>
        <input type="text" placeholder="Mobile Number" className="md:w-1/3 w-1/2 h-8  p-2"/>
        <input type="text" placeholder="Address" className="md:w-1/3 w-1/2 h-20 p-2"/>
        <button  className="md:w-1/3 w-1/2 h-8 bg-yellow-400 ">Submit</button>
        </div>
        <div className="flex md:flex-row flex-col md:justify-between   md:gap-0 gap-8 md:m-6 m-10">
                    <div >
                        <LocateFixed className="text-yellow-400"/>
                        <h1 className="font-bold text-lg">Address</h1>
                    <p>XYZ block Postal code 38000 Faisalabad Punjab Pakistan</p>
                    </div>
                    <div>
                        <PhoneCallIcon className="text-yellow-400"/>
                        <h1 className="font-bold text-lg">Phone</h1>
                        <p>+923012775555</p>
                    </div>
                    <div>
                        <Mail className="text-yellow-400"/>
                        <h1 className="font-bold text-lg">Email</h1>
                        <p>talhacheema675@gmail.com</p>
                    </div>
        </div>
    </div>
)
}
export default Footer