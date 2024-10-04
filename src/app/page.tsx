import Image from "next/image";
import Link from "next/link";
import ProfileImage from "./images/Circle Profile Pic.png";
import { SocialIcon } from 'react-social-icons'
export default function Home() {
  return (
    <section className="bg-gradient-to-br from-blue-500 via-black to-blue-500 blackTextShadow">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="flex md:flex-col md:space-y-7 md:mx-5 space-x-2 md:space-x-0">
        <SocialIcon className=" rounded-full hover:scale-105 smBoxShadow transition-all duration-200" href="https://github.com/AliyanJabbar" target="_blank" url="https://github.com/"/>
        <SocialIcon className=" rounded-full hover:scale-105 smBoxShadow transition-all duration-200" href="https://www.linkedin.com/in/aliyan-jabbar/" target="_blank" url="https://www.linkedin.com/"/>
        <SocialIcon className=" rounded-full hover:scale-105 smBoxShadow transition-all duration-200" href="https://discordapp.com/users/1209465617053122560" target="_blank" url="https://discord.com/"/>
        <SocialIcon className=" rounded-full hover:scale-105 smBoxShadow transition-all duration-200" href="https://www.facebook.com/AliyanJabbarKhan" target="_blank" url="https://www.facebook.com/"/>
        <SocialIcon className=" rounded-full hover:scale-105 smBoxShadow transition-all duration-200" href="https://wa.me/+923199289177" target="_blank" url="https://www.whatsapp.com/"/>
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pr-5 flex flex-col md:items-center md:text-center mb-16 md:mb-2 items-center text-center">
          <div className="m-10">
            <h1 className="lg:mt-16 lg:ml-20 font-sans text-3xl lg:text-4xl font-extrabold text-white text-center ">
              Hi, I'm <span className="text-blue-500 "> ALIYAN JABBAR KHAN</span>
            </h1>
            <h1 className="mt-2 lg:mt-1 lg:ml-20 text-[28px] text-center font-extrabold font-sans text-blue-500">
              Frontend Developer
            </h1>
            <h3 className="mt-2 lg:mt-3 lg:ml-20 font-serif font-extrabold text-blue-400">
              "
              <span className="text-slate-200">
                As a passionate Frontend Developer, I thrive on creating
                engaging and user-friendly web experiences. With a strong
                foundation in JavaScript, TypeScript, HTML, CSS, React.js,
                Tailwind CSS and frameworks like Next.js. Eager To Learn & Earn With My Passion!
              </span>
              "
            </h3>
          </div>
          <div className="my-7 flex justify-center lg:ml-20">
            <Link href="/contact">
            <button className="smBoxShadow mx-5 inline-flex text-white bg-blue-500 border-0 py-2 px-6 text-2xl focus:outline-none hover:bg-white hover:text-blue-500 rounded font-serif transition-all duration-300">
              Hire Me
            </button>
            </Link>
            <Link href="/portfolio">
            <button className="smBoxShadow mx-5 inline-flex text-blue-500 bg-white border-0 py-2 px-6 text-2xl focus:outline-none hover:bg-blue-500 hover:text-white rounded font-serif transition-all duration-300">
              Projects
            </button>
            </Link>
          </div>
        </div>
        <div className="md:w-[300px] lg:w-[330px] xl:w-[360px] 2xl:w-[400px] md:mx-3 lg:mr-20 w-[60%]">
          <Image
            className="rounded-full lgBoxShadow "
            alt="Profile Image"
            src={ProfileImage}
          />
        </div>
      </div>
    </section>
  );
}
