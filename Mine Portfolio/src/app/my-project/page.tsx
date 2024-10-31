import Image from "next/image";
import Link from "next/link";

export default function Projects() {
	return (
      
      <div>
      	<section className="text-gray-600 body-font">
           <h1 className=" text-4xl font-bold font-serif mb-2 text-gray-600 text-center mt-20">
                     𝕸𝖞 𝕻𝖗𝖔𝖏𝖊𝖈𝖙𝖘 𝕮𝖔𝖑𝖑𝖊𝖈𝖙𝖎𝖔𝖓
           </h1>
           <div className="container px-5 py-24 mx-auto">
   
           <div className="flex flex-wrap -m-4">
           <div className="xl:w-1/2 md:w-1/2 p-4">
           <div className="p-6 shadow-xl">
           <Image
            className="h-[90] rounded w-full object-cover object-center mb-6"
            src={require("../../../img/project_01.png")}
            alt="project_img"
           />
           <h3 className="tracking-widest text-black font-bold font-serif text-xs  title-font">
                    𝕻𝖗𝖔𝖏𝖊𝖈𝖙_𝟎𝟏         
           </h3>
           <Link href = "https://my-portfolio-plum-eight-12.vercel.app/" target = "blank">
           <h2 className="text-lg text-gray-900 font-medium title-font mb-4 mt-4">
                   𝕸𝖞 𝕻𝖔𝖗𝖙𝖋𝖔𝖑𝖎𝖔
           </h2>
           </Link>
           <p className="leading-relaxed text-justify font-serif">
                   A dynamic portfolio showcasing my skills in modern web development and interaction design, including projects built with Next.js, TypeScript, and responsive design principles.
           </p>
           </div>
           </div>
           <div className="xl:w-1/2 md:w-1/2 p-4">
           <div className="p-6 shadow-xl">
           <Image
            className="h-[90] rounded w-full object-cover object-center mb-6"
            src={require("../../../img/project_02.png")}
            alt="project_img"
           />
           <h3 className="tracking-widest text-black font-bold font-serif text-xs  title-font">
                    𝕻𝖗𝖔𝖏𝖊𝖈𝖙_𝟎𝟐
           </h3>

           <Link href = "https://clevora-shopping-store.vercel.app/" target = "blank">
           <h2 className="text-lg text-gray-900 font-medium title-font mb-4 mt-6">
                    𝕮𝖑𝖊𝖛𝖔𝖗𝖆
           </h2>
           </Link>
           <p className="leading-relaxed text-base">
                  Clevora is a modern shopping site that offers a smooth and seamless experience. Offers a curated selection of products with intuitive navigation and secure ordering.
           </p>
           </div>
           </div>
           <div className="xl:w-1/2 md:w-1/2 p-4">
           <div className="p-6 shadow-xl">
           <Image
            className="h-[90] rounded w-full object-cover object-center mb-6"
            src={require("../../../img/project_03.png")}
            alt="project_img"
           />
           <h3 className="tracking-widest text-black font-bold font-serif text-xs  title-font">
                  𝕻𝖗𝖔𝖏𝖊𝖈𝖙_𝟎𝟑
           </h3>

           <Link href = "https://sizzelsserve.vercel.app/" target = "blank">
           <h2 className="text-lg text-gray-900 font-medium title-font mb-4 mt-4">
                  𝕾𝖎𝖟𝖟𝖊𝖑𝖘_𝕾𝖊𝖗𝖛𝖊
           </h2>
           </Link>
           <p className="leading-relaxed text-base">
                 Sizzels_Serve is a dynamic restaurant website designed to make ordering easy, featuring delicious menu items with easy navigation and fast, secure checkout.
           </p>
           </div>
           </div>
           <div className="xl:w-1/2 md:w-1/2 p-4">
           <div className="p-6 shadow-xl">
           <Image
            className="h-[90] rounded w-full object-cover object-center mb-6"
            src={require("../../../img/project_04.png")}
            alt="project_img"
           />
           <h3 className="tracking-widest text-black font-bold font-serif text-xs  title-font">
                         𝕻𝖗𝖔𝖏𝖊𝖈𝖙_𝟎𝟒
           </h3>

           <Link href = "https://berrylicious-one.vercel.app/" target = "blank">
           <h2 className="text-lg text-gray-900 font-medium title-font mb-4 mt-4">
                          𝕭𝖊𝖗𝖗𝖞𝖑𝖎𝖈𝖎𝖔𝖚𝖘
           </h2>
           </Link>
           <p className="leading-relaxed text-base">
                Berrylicious a fresh fruits offering a vibrant selection of quality berries and more, with easy browsing and secure checkout for a delightful shopping experience.

           </p>
           </div>
           </div>
           </div>
           </div>
         </section>

         </div>


	);
}