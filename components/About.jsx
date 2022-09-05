// @ts-nocheck
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/AboutImg.svg';

function About() {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-5 gap-8'>
        <div className='col-span-3'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>I am a Jr Web Developer.</p>
          <p className='py-2 text-gray-600'>
            Versatile and accomplished web designer with expertise creating new
            websites and applications. Proven success leading and driving
            enterprise-wide projects towards completion within agreed timelines
            and budgetary constraints in Agile environments.
          </p>
          <p className='py-2 text-gray-600'>
            Good understanding of relevant legislation regulations and protocols
            concerning construction, building, health, and safety. Adept at
            improving network performance, creating backups, and enhancing
            network speed. Demonstrated ability to determine complex technical
            issues through root cause analysis and offer robust solutions to
            minimize system downtime. Track record of diagnosing and
            troubleshooting problems in response to customer reported incident
            via trouble tickets. Talent for coordinating, implementing, and
            maintaining installation and operation of customer application
            systems.
          </p>
          <Link href='/#projects'>
            <p className='py-4 text-gray-900 text-2xl underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-full m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center hover:scale-105 ease-in duration-300 col-span-2'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
}

export default About;
