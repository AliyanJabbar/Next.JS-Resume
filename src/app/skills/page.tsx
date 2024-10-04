import Bar from "../component/skillsBar";
import ProfilePic from "../images/Circle Profile Pic.png";
import Image from "next/image";

export default function Skills() {
  return (
    <main>
      <Image
        className="ml-auto mr-auto w-48 sm:w-52 md:w-56 lg:w-64 h-48 sm:h-52 md:h-56 lg:h-64 mt-10 hover:scale-110 rounded-full  transition-all duration-500 hover:shadow-2xl hover:shadow-slate-900 border-4  border-amber-300 hover:border-slate-900 outline-4 outline-double hover:outline-amber-300 outline-slate-900"
        loading="eager"
        src={ProfilePic}
        alt="ProfilePic"
      ></Image>

      <div className="flex flex-col space-y-10 lg:space-y-0 lg:flex-row justify-between ml-auto lg:ml-14 lg:mr-14 mr-auto items-center mt-10 mb-14">
        {/* technical Skills */}
        <div className="group bg-gradient-to-r from-emerald-400 to-yellow-300 border-[5px] border-black rounded-lg shadow-black shadow-md w-[275px] sm:w-[330px] md:w-[350px] lg:w-[410px] xl:w-[450px] 2xl:w-[500px] h-[510px] space-y-7 hover:scale-110 hover:shadow-black hover:shadow-2xl transitioon-all duration-300 pl-5 pr-5">
          <h1 className="font-sans font-extrabold group-hover:underline text-center text-blue-600 group-hover:text-blue-700 text-3xl transition-all duration-300">
            TECHNICAL SKILLS
          </h1>
          <Bar name="HTML" percentage={80} />
          <Bar name="CSS" percentage={75} />
          <Bar name="JS/TS" percentage={90} />
          <Bar name="React.JS" percentage={75} />
          <Bar name="Next.JS" percentage={80} />
          <Bar name="Tailwind CSS" percentage={90} />
        </div>

        {/* Soft Skills */}
        <div className="group bg-gradient-to-r from-emerald-400 to-yellow-300 border-[5px] border-black rounded-lg shadow-black shadow-md w-[275px] sm:w-[330px] md:w-[350px] lg:w-[410px] xl:w-[450px] 2xl:w-[500px] h-[510px] space-y-7 hover:scale-110 hover:shadow-black hover:shadow-2xl transitioon-all duration-300 pl-5 pr-5">
          <h1 className="font-sans font-extrabold group-hover:underline text-center text-blue-600 group-hover:text-blue-700 text-3xl transition-all duration-300">
            SOFT SKILLS
          </h1>
          <Bar name="Problem Solving" percentage={90} />
          <Bar name="Time Management" percentage={80} />
          <Bar name="creativity" percentage={75} />
          <Bar name="Communication" percentage={90} />
          <Bar name="Styling" percentage={75} />
          <Bar name="Critical Thinking" percentage={80} />
        </div>
      </div>
    </main>
  );
}
