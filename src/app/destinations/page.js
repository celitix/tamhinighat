import Hero from '../components/hero'
import Image from 'next/image'
import Link from 'next/link'

const destinationspage = () => {

  return (
    <>
    {/*================ Hero section =================*/}
    <Hero title="Destinations" image="hero1.jpg" />

    {/*================ Destinations section =================*/}
 <section className="px-6 md:px-16 py-12 bg-white text-gray-800 leading-relaxed">
      <div className="max-w-5xl mx-auto">
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-900 text-center">
          Places to visit in Pune near Tamhini
        </h2>

        {/* Intro Paragraph */}
        <p className="mb-4 text-gray-700">
          Places to visit in Pune and the Ghats in Maharashtra are absolutely amazing.
          Especially in the season of monsoon places near Pune cover themselves in green velvet.
          This belt in the Indian state of Maharashtra is blessed with the mountainous rocky range
          and hence the Ghats and scenic places are sure to woo you.
        </p>

        <p className="mb-4 text-gray-700">
          Mulshi and Tamhini are totally covered by the Tamhini ghat mountain passage.
          The Western Ghats mountain range presents this yet another amazing tourist{" "}
          <Link href="/attractions" className="text-blue-600 hover:text-blue-700 font-semibold transition-all duration-300 cursor-pointer">attraction</Link> for Maharashtra tourism.
        </p>

        {/* Mulshi Dam */}
        <h3 className="text-2xl font-semibold mt-10 mb-3 text-gray-900">
          Mulshi dam
        </h3>
        <p className="mb-4 text-gray-700">
          As the name suggests it is one of the major dams situated on the{" "}
          <Link href="https://en.wikipedia.org/wiki/Mula_River_(India)" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-semibold transition-all duration-300 cursor-pointer">river Mula</Link>.
          The Mulshi dam (places to visit in pune) is located in the{" "}
          <Link href="https://en.wikipedia.org/wiki/Mulshi_taluka" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-semibold transition-all duration-300 cursor-pointer">Mulshi Taluka</Link> (smaller then a district).
        </p>

        <p className="mb-4 text-gray-700">
          The Mulshi dam is not just one of the monsoon places near Pune but also serves many economical purposes.
        </p>

        <ul className="list-disc ml-6 mb-4 text-gray-700">
          <li>This is an important project for the Bhima hydroelectric power plant.</li>
        </ul>

        <p className="mb-6 text-gray-700">
          48.8 m high dam is located at a distance of 54 km (approx.) from the city of Pune.
        </p>

        <div className="w-full flex justify-center mb-10">
          <Image
            src="/assets/mulshi.jpg"
            alt="Mulshi Dam"
            width={800}
            height={500}
            className="rounded-xl shadow-lg object-cover w-full md:w-3/5"
          />
        </div>

        <p className="mb-12 text-gray-700">
          The Dam attracts tourists and localities. This is an important weekend gateway for the happening crowd of Pune.
        </p>

        {/* Sinhagarh Fort */}
        <h3 className="text-2xl font-semibold mb-3 text-gray-900">
          Sinhagarh fort
        </h3>
        <p className="mb-4 text-gray-700">
          The literal meaning of the name is ‘Lion’s’ fort. The Sinhagarh fort is a remarkable place
          in the history of Maharashtra. Marely at a distance of 30 km from the city of Pune,
          the Sinhagarh is a must among places to visit in Pune.
        </p>

        <p className="mb-4 text-gray-700">
          The fortified construction is on the Sahyadri range or mountains. At a height of 1312 m above
          the sea level, the fort stands proud of the{" "}
          <Link href="https://en.wikipedia.org/wiki/Marathi_people" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-semibold transition-all duration-300 cursor-pointer">Maratha</Link> history. Kalyan Darwaza and the
          Pune Darwaza are the two main gates of the fort.
        </p>

        <div className="w-full flex justify-center mb-10">
          <Image
            src="/assets/sinha.jpg"
            alt="Sinhagarh Fort"
            width={800}
            height={500}
            className="rounded-xl shadow-lg object-cover w-full md:w-3/5"
          />
        </div>

        <p className="mb-12 text-gray-700">
          Everyday visitors and tourists sprawl to the Sinhagarh fort to relish the ancient monument
          and feel the victory of Maratha. Many battles were won at this fort. The natural{" "}
         location has always safeguarded the fort.
        </p>

        {/* Lavasa International Convention Center */}
        <h3 className="text-2xl font-semibold mb-3 text-gray-900">
          Lavasa International convention center
        </h3>

        <p className="mb-4 text-gray-700">
          The Lavasa international convention center needs no introduction. Apart from the number of
          monsoon places near Pune this project has out shone any other project.
        </p>

        <ul className="list-disc ml-6 mb-4 text-gray-700">
          <li>
            This is India’s step towards a globally acknowledged planned city. 2000 ft. above the sea level
            this project is a result of huge investment at the public private sector.
          </li>
          <li>
            Lavasa city is 59 km away from the city of Pune with a pleasant drive way amidst mountains.
          </li>
        </ul>

        <div className="w-full flex justify-center mb-10">
          <Image
            src="/assets/lavasa.jpg"
            alt="Lavasa International Convention Center"
            width={800}
            height={500}
            className="rounded-xl shadow-lg object-cover w-full md:w-3/5"
          />
        </div>

        <p className="mb-12 text-gray-700">
          Corporate meetings and all such activities are hosted at Lavasa convention center at international standards.
          The unique amalgamation of ultra-modern and Indian architecture at a point where land water meet is truly a treat to one’s eyes and soul.
        </p>

        {/* Rajgarh Fort */}
        <h3 className="text-2xl font-semibold mb-3 text-gray-900">Rajgarh fort</h3>

        <p className="mb-4 text-gray-700">
          1400 meter above the sea level the Rajgarh fort literally means the royal fort.
          During the rule of <Link href="https://en.wikipedia.org/wiki/Shivaji" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-semibold transition-all duration-300 cursor-pointer">chattrapati shivaji</Link> this fort
          remained the ruling capital for good sixteen years.
        </p>

        <ul className="list-disc ml-6 mb-4 text-gray-700">
          <li>
            The unique fact is that the diameter of the fort at the base is forty kilometers.
          </li>
        </ul>

        <p className="mb-6 text-gray-700">
          While you are on a trip to the beautiful Ghats in Maharashtra a visit to the Rajgarh fort is advised.
          60 km from the city of Pune this fort was always safeguarded against enemies.
        </p>

        <div className="w-full flex justify-center mb-10">
          <Image
            src="/assets/Rajgarh_fort.jpg"
            alt="Rajgarh Fort"
            width={800}
            height={500}
            className="rounded-xl shadow-lg object-cover w-full md:w-3/5"
          />
        </div>
      </div>
    </section>
    </>
  )
}

export default destinationspage