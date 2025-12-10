import Hero from '../components/hero'
import Image from 'next/image'
import Link from 'next/link'

const howtogettherepage = () => {
  return (
    <>
    {/*=============== Hero section ===============*/}
    <Hero title="How to get there" image="hero1.jpg" />

    {/*=============== How to get there section ===============*/}
     <section className="px-6 md:px-18 py-12 bg-white text-gray-800 leading-relaxed">
      <div className="max-w-5xl mx-auto">
        {/* Main Heading */}
        <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-gray-900 text-center">
          How to reach Tamhini Ghat from Pune
        </h2>

        {/* Introduction */}
        <p className="mb-4 text-gray-700">
          Tamhini ghat from Pune is easily reachable through road. Places to visit near Pune in monsoon are many
          and Tamhini ghat is one of the main Ghats of Pune. Khandala is yet another monsoon spot near the city
          of Pune at a distance of 69 km.
        </p>

        <ul className="list-disc ml-6 mb-4 text-gray-700">
          <li>
            While taking the road way to Tamhini Ghat from Pune you should opt for the Mumbai-Bangalore highway
            or the Mumbai-Pune highway. It is around 70 kilometer of distance.
          </li>
          <li>Tamhini Ghat is just beyond the Mulshi Dam.</li>
        </ul>

        {/* Subheading */}
        <h3 className="text-2xl font-semibold mt-10 mb-3 text-gray-900">
          A beautiful drive to Tamhini (Places to visit near Pune in Monsoon)
        </h3>

        <p className="mb-4 text-gray-700">
          There is an abundance of natural beauty around the city of Pune. The city has emerged as one of India’s
          most loved job hub and at the same time has seen influx of residents from all over the country.
        </p>

        <p className="mb-4 text-gray-700">
          The beautiful and historic city has become an inevitable part of the{" "}
          <Link href="https://en.wikipedia.org/wiki/Economy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-semibold transition-all duration-300 cursor-pointer">economy</Link> of country. The tourism of the state also
          contributes to the revenue of state.
        </p>

        {/* Image 1 */}
        <div className="w-full flex justify-center mb-10">
          <Image
            src="/assets/reach1.jpg"
            alt="Tamhini Ghat milestone"
            width={800}
            height={500}
            className="rounded-xl shadow-lg object-cover w-full md:w-3/5"
          />
        </div>

        <p className="mb-4 text-gray-700">
          Khandala and Lonavala have always been an attractive point in the Maharashtra tourism. Now with the
          increased accessibility and technology people have become aware of various sprawling destinations.
        </p>

        <ul className="list-disc ml-6 mb-6 text-gray-700">
          <li>
            Sight-seeing and a smooth drive; if these are your preferences head to the several places to visit
            near pune in Monsoon.
          </li>
        </ul>

        {/* Nearest Airport */}
        <p className="font-semibold mb-2 text-gray-900">Nearest Airport</p>
        <ul className="list-disc ml-6 mb-6 text-gray-700">
          <li>
            The nearest airport is the Pune Airport. From here you can take a cab, taxi or public transport towards
            Mulshi dam and Tamhini ghat.
          </li>
        </ul>

        {/* Nearest Railway Station */}
        <p className="font-semibold mb-2 text-gray-900">Nearest railway station</p>
        <ul className="list-disc ml-6 mb-6 text-gray-700">
          <li>
            The nearest railway station to the Tamhini ghat is Pune railway station.
          </li>
        </ul>

        <p className="mb-4 text-gray-700">
          While you take the road to our beautiful and picturesque destination you would have an urge to stop at
          each point and capture memories in your camera. The entire drive way is so mesmerizing that you won’t
          forget the experience. What you get is a change in the monotonous city life and bringing home memories.
        </p>

        {/* Point to remember */}
        <p className="font-semibold mb-2 text-gray-900">Point to remember</p>
        <p className="mb-4 text-gray-700">
          Since you are taking the road way to Tamhini ghat from Pune there are certain points that you should tick
          on your checklist. Let us have a look at the same.
        </p>

        <ul className="list-disc ml-6 mb-10 text-gray-700">
          <li>
            Since this is one of the most beautiful places to visit near pune in monsoon the amount of tourist
            influx is generally high.
          </li>
          <li>
            You should always have prior information about the drive way because the route is hilly and rocky.
          </li>
          <li>Your vehicle should have the perfect re-filling if needed.</li>
          <li>
            The drive way will pass through Mulshi dam and hence you can check the route beforehand.
          </li>
        </ul>

        {/* Khandala Section */}
        <h3 className="text-2xl font-semibold mb-3 text-gray-900">
          Khandala - the abode of clouds
        </h3>

        <p className="mb-4 text-gray-700">
          This is yet another hill station in the Western Ghats and hence a mention here is worth it.
          Ghats means ‘valley’ in Marathi (Maharashtra state of India). Khandala has emerges as a common area
          for hiking and biking.
        </p>

        <p className="mb-4 text-gray-700">
          The state of Maharashtra has many such destinations that woo the youth and the people living nearby.
        </p>

        {/* Image 2 */}
        <div className="w-full flex justify-center mb-10">
          <Image
            src="/assets/khandala.jpg"
            alt="Khandala valley"
            width={800}
            height={500}
            className="rounded-xl shadow-lg object-cover w-full md:w-3/5"
          />
        </div>

        <p className="text-gray-700">
          The best way to reach all these destinations is to take the road ways.
          It keeps your heart and mind away from the chaos of city life.
          See our <Link href="/destinations" className="text-blue-600 hover:text-blue-700 font-semibold transition-all duration-300 cursor-pointer">destinations</Link> page for more such places.
        </p>
      </div>
    </section>
    </>
  )
}

export default howtogettherepage