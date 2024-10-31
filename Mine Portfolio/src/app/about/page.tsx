"use client";
import Image from "next/image";
import Typewriter from 'typewriter-effect';

export default function About() {
	return (
      
      <div>
      	 
      	 <section className=" body-font">
           <div className="container mx-auto flex px-10 py-40 md:flex-row flex-col items-center">
           <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
           <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold font-serif text-gray-600">
            <Typewriter
             options={{
             strings: ["𝝜𝝴𝝸𝝸𝝷! 𝝞’𝗺 𝝮𝝻𝘇𝝶𝝰 𝝙𝗺𝗶𝝲|"],
             autoStart: true,
             loop: true,
                }}
           />
          <br className="hidden lg:inline-block font-serif" />
                    𝕻𝖆𝖘𝖘𝖎𝖔𝖓𝖆𝖙𝖊 𝖂𝖊𝖇 𝕯𝖊𝖛𝖊𝖑𝖔𝖕𝖊𝖗 𝖜𝖎𝖙𝖍 𝕰𝖝𝖕𝖊𝖗𝖙𝖎𝖘𝖊 𝖎𝖓 𝕴𝕿
          </h1>

           <p className="mb-8 leading-relaxed text-justify font-serif">
               Hello everyone! My name is Muzna Amir. I am an enthusiastic and dedicated web developer with a strong IT background. I am currently undergoing an IT specialization course with a focus on honing my skills in latest web technologies and development techniques. With the active eyes of design and the passion of creating a dynamic and friendly website, I am trying to create a transparent digital experience that resonates with the user. I promised to learn and adapt to a new industry trends, aimed at providing a solution that works hard in the technical landscape that has been evolving constantly.
           </p>
     
           </div>
           <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 px-10 ">
           <Image
             className="object-cover object-center rounded"
             alt="about_img"
             src={require("../../../img/about.jpg")}
           />
          </div>
          </div>
        </section>


      </div>

	);
}