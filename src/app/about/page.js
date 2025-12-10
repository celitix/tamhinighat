import Image from 'next/image';
import Hero from '../components/hero';
import Link from 'next/link';

const aboutpage = () => {
  return (
   <>
   <Hero title="About" image="tamhi.jpg"/>

   {/*================= about section =================*/}
<div className='bg-white'>
 <section className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 py-10  text-gray-800">
      {/* Heading */}
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-center">Gold Valley Tamhini Ghat</h2>
        <p className="text-gray-600 leading-relaxed">
          The gold valley Tamhini Ghat is a pride of the Western Ghats. For all tamhini ghat information
          and know about refer our <Link href="/how-to-get-there" className="text-blue-600 hover:text-blue-700 font-semibold transition-all duration-300 cursor-pointer">how to get there</Link> page.
          Tamhini ghat Pune is a mountain passage between Mulshi dam and Tamhini. 20–25 kilometres ahead of the grand
          Mulshi dam, are situated the Tamhini Ghat Pune.
        </p>
      </div>

      {/* Western Ghats highlights */}
      <div className="mt-5">
        <h3 className="text-xl font-semibold mb-3 mt-4">Western ghats highlights</h3>
        <p className="text-gray-600 mb-4">
          Biker on their throbbing bikes and tourists mesmerized in the views of the vivid waterfall is a common
          scene here. High mountains, lush greenery, lakes and waterfalls are the main{" "}
          <Link href="/attractions" className="text-blue-600 hover:text-blue-700 font-semibold transition-all duration-300 cursor-pointer">attractions</Link>.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-gray-600">
          <li>The roads are curvy and narrow, as they are expected to be on hilly terrains.</li>
          <li>The drive way is beautiful with each step as picturesque as the destination.</li>
          <li>The destination is just ahead of the Mulshi Dam and hence you cover 2 amazing places in one way.</li>
        </ul>
        <p className="mt-4 text-gray-600">
          As the journey begins, the dense clouds keep reaching for the high and low hills. The sight of 2–3 waterfalls
          originating from a single source is common in the Western Ghats. Tamhini Ghat information is displayed on sign boards at regular intervals. </p>

        <p className="mt-4 text-gray-600">Tea stalls and food joints are not available in good numbers at tamhini ghat pune. The visitors feed their soul with overwhelming natural beauty. It isn’t wrong to call this place as gold valley tamhini ghat.</p>

        <p className="mt-4 text-gray-600">The sound that the waterfall makes while
          falling on the <Link href="https://en.wikipedia.org/wiki/Rock_(geology)" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-semibold transition-all duration-300 cursor-pointer">rocks</Link> is so serene. Ears and
          heart get that soothing feeling which isn’t available in the daily life. Away from the city life these tamhini ghat Pune are a must visit.
        </p>
      </div>

      {/* Scenic Beauty + Curvy Roads */}
      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <div>
          <h3 className="text-2xl font-semibold mb-3">Scenic beauty</h3>
          <p className="text-gray-600 leading-relaxed">
            A lot has been said and written about the scenic beauty of the Tamhini Ghat and Western Ghats. The best is
            yet to come! The best description comes when you personally feel the ghats. Grab your car steering and head
            towards the green and dense woods. A family outing or a friend’s getaway to Tamhini promises a great
            experience.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-3">Curvy roads</h3>
          <p className="text-gray-600 leading-relaxed">
            All across the country such destinations which are at the lap of hills and mountains have curvy roads.
            Maharashtra India is famous for its tunnels and curvy roads. Towards Mulshi and Tamhini expect the roads to
            be curvy. Long queues of cars and bikes are common. While driving back to the city these curves are felt
            intensely.
          </p>
        </div>
      </div>

    {/* Image */}
      <div className="mt-6 flex justify-center">
        <div className="flex items-center justify-center w-full md:w-3/4 lg:w-2/3 h-64 md:h-96 rounded-lg overflow-hidden ">
          <Image
            src="/assets/tamhi.jpg"
            alt="Tamhini Ghat"
            width={500}
            height={500}
            className="object-cover rounded-lg"
            priority
          />
        </div>
      </div>

      {/* Dark Clouds + Dense Woods */}
      <div className="grid md:grid-cols-2 gap-8 items-center mt-6">
        <div>
          <h3 className="text-2xl font-semibold mb-3">Dark clouds</h3>
          <p className="text-gray-600 leading-relaxed mb-3">
            Clouds mean rains, monsoon, mist, fog, pleasant weather and what not. Gold valley Tamhini Ghat serves you
            dense and dark clouds that make the ambience all the more enjoyable and romantic. You can feel the clouds
            touching you and literally you can claim yourself on cloud 9!
          </p>
          <p className="text-gray-600">
            It so seems that the hill tops own a crown each of dark and dense clouds.
          </p>
        </div>
        <div className="flex flex-col md:items-end">
          <h3 className="text-2xl font-semibold mb-3">Densed woods</h3>
          <p className="text-gray-600 leading-relaxed mb-3">
            This part of the Shayadri range on the Western Ghats has forests reserves. The wildlife sanctuary has been
            possible because of the presence of variety of flora and fauna. The dense woods and the wild life make it a
            natural habitat for these creatures.
          </p>
          <p className="text-gray-600">
            Various trees that are unique to these terrains are easily available and restored here.
          </p>
        </div>
      </div>

  
    </section>
</div>

   </>
  )
}

export default aboutpage