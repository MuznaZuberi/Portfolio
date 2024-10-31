import Link from "next/link";

export default function Header() {
	return(
     
     <div>
     	
       <header className="text-gray-600 body-font">
         <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
         <a className="flex title-font font-medium items-center mb-4 md:mb-0">
         <span className="ml-6 text-4xl text-gray-600 font-bold font-serif">𝛀𝛍𝒛𝛈𝛂.</span>
         </a>
         <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
         <Link href = "/" className="mr-5 hover:text-gray-900 font-serif">𝞖𝞱𝙢𝞮</Link>
         <Link href = "/about" className="mr-5 hover:text-gray-900 font-serif">𝞓𝞫𝞱𝞵𝞽</Link>
         <Link href = "/skills" className="mr-5 hover:text-gray-900 font-serif">𝙎𝞳𝙞𝞲𝞲𝙨 </Link>
         <Link href = "/contact-us" className="mr-5 hover:text-gray-900 font-serif">𝘾𝞱𝞰𝞽𝞪𝞻𝞽</Link>
         </nav>
   
        </div>
      </header>


     </div>

	)
}