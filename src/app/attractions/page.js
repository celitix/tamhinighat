import Image from "next/image"
import Hero from "../components/hero"
import Link from "next/link"

const attractionspage = () => {
  return (
   <>
   {/*================ Hero section =================*/}
<Hero title="Attractions" image="hero1.jpg"/>

     {/*================ attractions section =================*/}
     <section className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6 text-center">
        Attractions for Tamhini Ghat
      </h2>

      <p className="text-gray-600 leading-relaxed mb-4">
        The Tamhini Ghat waterfalls are a rhythmical and sublime tourist place.
        Like the <Link href="https://en.wikipedia.org/wiki/Lonavla" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-semibold transition-all duration-300 cursor-pointer">Khandala</Link> Ghat, the Tamhini Ghat as well is a pleasing and poetic boon to Maharashtra tourism.
        The stories of the Tamhini Ghat haunted places also attract quite a good amount of tourists.
      </p>

      <p className="text-gray-600 leading-relaxed mb-4">
        The entire <Link href="https://en.wikipedia.org/wiki/Western_Ghats" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-semibold transition-all duration-300 cursor-pointer">Western Ghat</Link> region is blessed with such small and large waterfalls and trekking places.
        Some are widely known, others not. So let us take a look at the real attractions of Tamhini Ghat.
      </p>

      {/* 1️⃣ Tamhini Mountain Trekking */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Tamhini mountain trekking
        </h3>
        <p className="text-gray-600 leading-relaxed mb-3">
          The sahyadri range welcomes the trekking lovers to the Tamhini Ghats. The rocky{" "}
          <Link href="https://en.wikipedia.org/wiki/Terrain" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-semibold transition-all duration-300 cursor-pointer">terrain</Link> and narrow and steep slopes are perfect for trekking. The forests at Tamhini often welcome trekkers.
        </p>
        <p className="text-gray-600 leading-relaxed mb-6">
          Trekking is a fun activity and people in this part of the country have so many options to go trekking.
        </p>
        <div className="flex justify-center mb-8">
          <div className="relative w-full max-w-md h-64 rounded-lg overflow-hidden shadow-md">
            <Image
              src="/assets/trekking.jpg"
              alt="Tamhini mountain trekking"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* 2️⃣ Tamhini Ghat Haunted */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Tamhini Ghat haunted
        </h3>
        <p className="text-gray-600 leading-relaxed mb-3">
          India is an amazing country and here we find amalgamation of attractions all across the country. 
          It is so said that the Tamhini Ghat haunted places gives you a chance to encounter ghosts or spirits.
        </p>
        <p className="text-gray-600 leading-relaxed mb-6">
          While on a bike ride or other drives the enthusiasts look for ghosts and supernatural signs in and around Tamhini Ghat.
        </p>
        <div className="flex justify-center mb-8">
          <div className="relative w-full max-w-md h-64 rounded-lg overflow-hidden shadow-md">
            <Image
              src="/assets/haunted.jpg"
              alt="Tamhini Ghat haunted"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* 3️⃣ Wildlife Sanctuary */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Tamhini wildlife sanctuary
        </h3>
        <p className="text-gray-600 leading-relaxed mb-3">
          The latest <Link href="https://en.wikipedia.org/wiki/Wildlife" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-semibold transition-all duration-300 cursor-pointer">wildlife</Link> sanctuary in Maharashtra is the Tamhini wildlife sanctuary.
          The govt. has taken the pleasure of reserving forests for the flora and fauna of the area.
        </p>
        <p className="text-gray-600 leading-relaxed mb-6">
          This is a strong step toward conserving the wildlife.
        </p>
        <div className="flex justify-center mb-8">
          <div className="relative w-full max-w-md h-64 rounded-lg overflow-hidden shadow-md">
            <Image
              src="/assets/wild.jpg"
              alt="Tamhini wildlife sanctuary"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* 4️⃣ Tamhini Road Trip */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Tamhini road trip
        </h3>
        <p className="text-gray-600 leading-relaxed mb-3">
          A road trip is the best way of a fun-filled relaxing activity. 
          A Tamhini Ghat to Khandala Ghat road trip can be as thrilling as the natural beauty they possess.
        </p>
        <p className="text-gray-600 leading-relaxed mb-6">
          Several bikers head towards the Tamhini Ghat Waterfalls and bring back heartwarming and mind-chilling memories.
        </p>
        <div className="flex justify-center mb-8">
          <div className="relative w-full max-w-md h-64 rounded-lg overflow-hidden shadow-md">
            <Image
              src="/assets/road.jpg"
              alt="Tamhini road trip"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* 5️⃣ Tamhini Ghat Waterfalls */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Tamhini Ghat waterfalls
        </h3>
        <p className="text-gray-600 leading-relaxed mb-3">
          Tamhini Ghat is a mountain passage near Tamhini and Mulshi Dam. 
          During the monsoon, the scene of these waterfalls is totally amazing and capturing.
        </p>
        <p className="text-gray-600 leading-relaxed mb-6">
          The water is as pure and beautiful as it can be. The fall of the water on the rocks is dramatically guided by nature.
        </p>
        <div className="flex justify-center mb-8">
          <div className="relative w-full max-w-md h-64 rounded-lg overflow-hidden shadow-md">
            <Image
              src="/assets/waterfall.jpg"
              alt="Tamhini Ghat waterfalls"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>
            Like the Lonavala and Khandala Ghats the Tamhini too is getting its much deserved recognition.
          </li>
          <li>
            For more thrills refer to our{" "}
            <Link href="/destinations" className="text-blue-600 hover:text-blue-700 font-semibold transition-all duration-300 cursor-pointer">
              destinations
            </Link>{" "}
            page and direct your trips wisely.
          </li>
          <li>
            The lush greenery spread over the sahyadri range makes it all the more interesting to travel on these beautiful terrains.
          </li>
        </ul>
      </div>
    </section>
   </>
  )
}

export default attractionspage