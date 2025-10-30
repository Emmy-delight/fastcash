import Image from "next/image";
import Link from "next/link";

export default function HomePage () {
  return (
       <main>
         <div className="bg-[url(/mybg.png)] h-screen bg-right bg-no-repeat bg-indigo-500">
            <h1>Welcome to Fastcash</h1>
         </div>
         <div className="mt-10 grid grid-cols-4">
            <Link href="https://www.earlycode.net"> <div className="w-[300px] h-[300px] rounded-lg shadow-md ">
              <Image
              src="/mybg.png"
              alt="my-image"
              width={300}
              height={300}/>
            </div>
           </Link>
            <div className="w-[300px] h-[300px] rounded-lg shadow-md ">
              <Image
              src="/mybg.png"
              alt="my-image"
              width={300}
              height={300}/>
           </div>
            <div className="w-[300px] h-[300px] rounded-lg shadow-md ">
              <Image
              src="/mybg.png"
              alt="my-image"
              width={300}
              height={300}/>
           </div>
            <div className="w-[300px] h-[300px] rounded-lg shadow-md ">
              <Image
              src="/mybg.png"
              alt="my-image"
              width={300}
              height={300}/>
           </div>
         </div>
       </main>
  )

}
//authentication, authorization, 