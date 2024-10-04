export default function Contact() {
  return (
    <main>
        <form action="https://api.web3forms.com/submit" method="POST">
        <input type="hidden" name="access_key" value="162e04fa-6b5a-44ed-835c-6a1f4167d345"></input>
          <div className="bg-gradient-to-r from-emerald-400 to-yellow-300 border-[5px] border-amber-400 rounded-3xl w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] flex items-center mx-auto my-10 shadow-2xl shadow-slate-800 flex-col mt-20 py-10 space-y-7">
            <h1 className="font-sans font-extrabold text-4xl bg-gradient-to-r from-red-500 via-pink-500 to-blue-700 text-transparent bg-clip-text mb-5">
              Get In Touch:
                <div className="bg-gradient-to-r from-blue-700 via-pink-500 to-red-500 mt-2 h-2 rounded-full underLineDesign"></div>
            </h1>
            <input
              className="input"
              type="text"
              name="name"
              id="name"
              placeholder="Name..."
              required
            />
            <input
              className="input"
              type="email" 
              name="email"
              id="email"
              placeholder="Email..."
              required
            />
            <textarea
              className="w-[256px] h-12 sm:w-[320px] lg:w-[350px] sm:h-[64px] rounded-full px-2 sm:px-5 outline-none border-4 border-white focus:shadow-xl focus:shadow-slate-800 hover:border-blue-700 focus:border-blue-700 focus:w-[270px] sm:focus:w-[330px] focus:h-14 sm:focus:h-[75px] lg:focus:w-[370px] transition-all duration-300 font-serif font-semibold text-xl"
              name="message"
              id="message"
              placeholder="Message..."
              required
            ></textarea>

            <button type="submit" className="w-40 lg:w-44 lg:hover:w-52 hover:w-48 h-10 hover:h-12 rounded-full bg-gradient-to-r from-blue-700 via-pink-600 to-red-600 bg-clip-text text-transparent border-4 border-blue-700 font-bold text-xl hover:text-2xl lg:text-2xl lg:hover:text-3xl hover:shadow-xl hover:shadow-slate-900 transition-all duration-300 ">Submit Form</button>
          </div>
        </form>
    </main>
  );
}
