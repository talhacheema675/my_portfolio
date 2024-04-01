import Image from "next/image";
import Link from "next/link";
const About=()=>
{
    return(
        <div id="1" className="flex md:flex-row flex-col md:items-start items-center bg-slate-950 h-max w-full p-4 ">
            <div className="w-1/3 h-full flex justify-center">
                <Image src={"/profile5.jpg"} alt="profile5" width={"300"} height={"300"} className="rounded-full"/>
            </div>
            <div className=" flex flex-col gap-3 md:w-2/3 w-full h-full md:items-start md:text-start items-center text-center">
                <h1 className="text-6xl">About Me</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur earum et neque tempore ea cupiditate praesentium esse dignissimos itaque iure quos fuga mollitia ullam, debitis quisquam velit dolores aliquid voluptatum?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel obcaecati dolor, at rem recusandae ex fugiat praesentium quaerat tempora numquam repellat perferendis earum accusamus, nemo pariatur beatae repudiandae consequatur? Repellendus Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem in explicabo, sed minus voluptatem animi dolores. Enim provident omnis nesciunt consectetur porro voluptate inventore corrupti repellendus eligendi. Deleniti, iste sit.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur earum et neque tempore ea cupiditate praesentium esse dignissimos itaque iure quos fuga mollitia ullam, debitis quisquam velit dolores aliquid voluptatum?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel obcaecati dolor, at rem recusandae ex fugiat praesentium quaerat tempora numquam repellat perferendis earum accusamus, nemo pariatur beatae repudiandae consequatur? Repellendus Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem in explicabo, sed minus voluptatem animi dolores. Enim provident omnis nesciunt consectetur porro voluptate inventore corrupti repellendus eligendi. Deleniti, iste sit.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur earum et neque tempore ea cupiditate praesentium esse dignissimos itaque iure quos fuga mollitia ullam, debitis quisquam velit dolores aliquid voluptatum?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel obcaecati dolor, at rem recusandae ex fugiat praesentium quaerat tempora numquam repellat perferendis earum accusamus, nemo pariatur beatae repudiandae consequatur? Repellendus Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem in explicabo, sed minus voluptatem animi dolores. Enim provident omnis nesciunt consectetur porro voluptate inventore corrupti repellendus eligendi. Deleniti, iste sit.</p>
                <div className="flex md:flex-row flex-col">
                    <Link href={"https://drive.google.com/file/d/1YCljKierZ3aQs2UbvYvkig1W-OrMgZly/view?usp=drive_link"}><button className="bg-blue-800 w-48 h-12 rounded-3xl mx-24 my-6 font-bold text-xl hover:bg-gray-800">Download CV</button></Link>
                    <Link href={"#3"}><button className="bg-gray-900 border border-white w-48 h-12 rounded-3xl mx-24 my-6 font-bold text-xl hover:text-2xl">Contact ME</button></Link>

                </div>

            </div>
        </div>
    )
}
export default About
