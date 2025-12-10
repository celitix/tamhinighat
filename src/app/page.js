import Hero from "./components/hero";
import Link from "next/link";
import Image from "next/image";
import FeaturesSection from "./components/cards";
import ParadiseSection from "./components/paradise";

export default function Home() {
  return (
<>
<Hero title="Tamhini Ghat" image="hero1.jpg"/>

{/*================= Welcome Section =================*/}
   <section className="w-full bg-white py-12 px-4 md:px-8 lg:px-16 text-center overflow-hidden">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
        About Tamhini Ghat
      </h2>
      <div className="border-t border-gray-300 my-4"></div>

      <p className="text-gray-700 text-sm md:text-base leading-relaxed max-w-5xl mx-auto">
         The majestic Tamhini Ghat is one of the most beautiful Ghats in Maharashtra India. They are serene Ghats near Pune. Like the well-known Khandala Ghat the
Tamhini is equally tempting and attractive. The curvy roads the dense woods, green forests and quaint water falls, all together form the aura of the Tamhini Ghat.
They are a favorite when it comes to weekend gateways. The western Ghat <Link href="https://en.wikipedia.org/wiki/Western_Ghats" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:text-blue-700 transition-all duration-300">Shahyadri mountain range</Link> has best owed the state of Maharashtra with ample of Ghats
and mountain passes. Tamhini is actually a mountain passage between the <Link href="https://en.wikipedia.org/wiki/Mulshi_Dam" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:text-blue-700 transition-all duration-300">Mulshi Dam</Link> and Tamhini. Once you cross the famous Mulshi Dam you reach around
Tamhini. Since the terrain is rocky and the roads are curvy like the khandala ghats, during monsoon it is advised to have proper drive guidance. The Tamhini Ghat is
a much sought after monsoon <Link href="/destinations"  className="text-blue-600 font-semibold hover:text-blue-700 transition-all duration-300">destination</Link>. It seems like one of the many wonderful ghats near Pune that the Western Ghats has. {" "}
      </p>

<Link href="/about"><button className="bg-[#58B451] mt-4 cursor-pointer text-white px-6 py-2 rounded-full font-semibold hover:bg-[#7FCA79] transition-all duration-300">Read More</button></Link>

    </section>


{/*================= Overlay section =================*/}
      <section className="relative w-full h-[40vh] md:h-[30vh] lg:h-[50vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/assets/hero1.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        {/* Glass Box */}
        <div className=" relative z-10 max-w-5xl bg-white/10 backdrop-blur-md text-white p-6 mx-4 md:p-10 rounded-[50px] border border-white/20 shadow-lg text-center">
{/* <div className="absolute left-0 inset-0  my-4 font-semibold text-red-800 text-[100px]">"</div> */}

          <p className="text-base md:text-xl font-semibold mb-3">
           On earth there is no heaven, but there are pieces of it. The attention of a
           traveller, should be particularly turned, in the first place, to the various
           works of Nature, to mark the distinctions of the climates he may explore,
           and to offer such useful observations on the different productions as may
           occur.
          </p>
        
        </div>

        {/* Overlay for better contrast */}
        <div className="absolute inset-0 bg-black/40"></div>
      </section>  

{/*================= Cards section =================*/}
      <FeaturesSection />

      {/*================= Paradise section =================*/}
      <ParadiseSection />
</>
  );
}
