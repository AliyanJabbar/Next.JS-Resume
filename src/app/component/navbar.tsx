import Link from "next/link";
import Image from "next/image";
import ProfileImg from "../images/Circle Profile Pic.png"

export default function NavBar() {
  return (
    <nav className="bg-gray-900 h-auto p-3">
      <div className="flex flex-col sm:flex-row justify-between items-center m-3 sm:m-2">
        <Link href="/">
          <div className="flex items-center group mb-4 sm:mb-0 md:mb-0">
            <div className="transition-all duration-300 group-hover:scale-110">
              <Image 
                className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full" 
                loading="lazy" 
                src={ProfileImg} 
                width={100} 
                height={100} 
                alt="ProfilePic" 
              />
            </div>
            <span className="ml-2 text-amber-400 font-bold text-xl md:text-2xl lg:text-3xl transition-all duration-300 group-hover:text-emerald-300 group-hover:text-2xl md:group-hover:text-3xl lg:group-hover:text-4xl ">
              ALIYAN JABBAR
            </span>
          </div>
        </Link>

        <div className="flex flex-col sm:flex-row mt-5 sm:mt-0 space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-8 lg:space-x-14">
        {/* using custom css (made in globals.css) in navBar page Buttons */}
          <Link className="navBarPageBtns" href="/">Home</Link>
          <Link className="navBarPageBtns" href="/about">About</Link>
          <Link className="navBarPageBtns" href="/skills">Skills</Link>
          <Link className="navBarPageBtns" href="/portfolio">Portfolio</Link>
          <Link className="navBarPageBtns" href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}