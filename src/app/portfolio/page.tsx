import Image from "next/image";
import Link from "next/link";
import Calculator from "../images/calculator.png";
import Resume from "../images/resume.png";
import ResumeBuilder from "../images/resume builder.png";
import StdManagementSys from "../images/Student Management System.jpeg"
import CurrencyConverter from "../images/Currency Converter.png"
import Bank from "../images/My Bank.jpeg"

export default function Portfolio() {
  return (
    <main className="bg-gradient-to-r from-emerald-400 to-yellow-300 border-[8px] border-amber-400 rounded-3xl w-[300px] sm:w-[470px] md:w-[600px] lg:w-[800px] xl:w-[1100px] mx-auto my-10  shadow-2xl shadow-slate-800 mt-20 py-5">
      <section className="text-gray-400 bg-transparent font-serif">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="md:text-5xl sm:text-3xl font-sans text-2xl font-extrabold mb-4 text-blue-700">
              PROJECTS
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-slate-900">
             Following are some projects I made using HTML, CSS & TypeScript
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="Calculator"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={Calculator}
                />
               <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-90 transition-all duration-300">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-400 mb-1">
                    HTML CSS TS
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    Calculator
                  </h1>
                  <p className="leading-relaxed">
                  used basic HTML for Structure, vanilla CSS for Styling and TypeScript/JavaScript for functionality.
                  </p>
                  <Link className="underline text-blue-500" href="https://html-css-five-sigma.vercel.app/" target="_blank">View Project</Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
                <Image
                  alt="Resume"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={Resume}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-90 transition-all duration-300">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-400 mb-1">
                    HTML CSS TS
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    Resume
                  </h1>
                  <p className="leading-relaxed">
                  Simple Resume With basic information about my Education and Skills.Similarly, used HTML, CSS & TS/JS
                  </p>
                  <Link className="underline text-blue-500" href="https://hackathonmilestone12-sigma.vercel.app/" target="_blank">View Project</Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
                <Image
                  alt="Dynamic Resume"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={ResumeBuilder}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-90 transition-all duration-300">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-400 mb-1">
                    HTML CSS TS
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    Resume
                  </h1>
                  <p className="leading-relaxed">
                  Dynamic Resume Builder Which comes with Editing feature, after generating resume, and download feature with unique link
                  </p>
                  <Link className="underline text-blue-500" href="https://hackathonmilestone345.vercel.app/" target="_blank">View Project</Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
                <Image
                  alt="Student Management System"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={StdManagementSys}
                />
               <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-90 transition-all duration-300">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-400 mb-1">
                    CLI Based
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    Student Management System
                  </h1>
                  <p className="leading-relaxed">
                  Student Management System based on OOP concepts and made with the help of npm package "Inquirer".
                  </p>
                  <Link className="underline text-blue-500" href="https://www.npmjs.com/package/coding-with-aliyan-student-management-system" target="_blank">View Project</Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
                <Image
                  alt="Student Management System"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={CurrencyConverter}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-90 transition-all duration-300">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-400 mb-1">
                    CLI Based
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    Currency Converter
                  </h1>
                  <p className="leading-relaxed">
                  Currency Converter based on API fetching and made with the help of npm package "Inquirer".
                  </p>
                  <Link className="underline text-blue-500" href="https://www.npmjs.com/package/code_with_aliyan_currency_convertor" target="_blank">View Project</Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
                <Image
                  alt="Student Management System"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={Bank}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-90 transition-all duration-300">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-400 mb-1">
                    CLI Based
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    OOP My Bank
                  </h1>
                  <p className="leading-relaxed">
                  OOP My Bank based on OOP Concept and made with the help of npm packages "Inquirer" & "Chalk".
                  </p>
                  <Link className="underline text-blue-500" href="https://www.npmjs.com/package/coding-with-aliyan-oop-my-bank" target="_blank">View Project</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
