import Head from 'next/head';
import {FaGithub, FaLinkedinIn} from 'react-icons/fa';

const resume = () => (
  <>
    <Head>
      <title>Hurley | Resume</title>
      <meta
        name='description'
        content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
      />
      <link rel='icon' href='/fav.png' />
    </Head>

    <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
      <h2 className='text-center'>Resume</h2>
      <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
        <h2 className='text-center'>Hurley Nguyen</h2>
        <div className='flex'>
          <a
            href='https://www.linkedin.com/in/hurley-nguyen-477346228/'
            target='_blank'
            rel='noreferrer'>
            <FaLinkedinIn size={20} style={{marginRight: '1rem'}} />
          </a>
          <a
            href='https://github.com/Hurleywflow'
            target='_blank'
            rel='noreferrer'>
            <FaGithub size={20} style={{marginRight: '1rem'}} />
          </a>
        </div>
      </div>
      <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
        <div className='hidden sm:block'>
          <p>
            Proven Leadership <span className='px-1'>|</span> Web Development{' '}
            <span className='px-1'>|</span> Complex Problem Solving
          </p>
        </div>
        <div className='block sm:hidden'>
          <p>Proven Leadership</p>
          <p className='py-2'>Web Development</p>
          <p>Complex Problem Solving</p>
        </div>
      </div>
      <p>
        Versatile and accomplished web designer with expertise creating new
        websites and applications. Proven success leading and driving
        enterprise-wide projects towards completion within agreed timelines and
        budgetary constraints in Agile environments. Good understanding of
        relevant legislation regulations and protocols concerning construction,
        building, health, and safety. Adept at improving network performance,
        creating backups, and enhancing network speed. Demonstrated ability to
        determine complex technical issues through root cause analysis and offer
        robust solutions to minimize system downtime. Track record of diagnosing
        and troubleshooting problems in response to customer reported incident
        via trouble tickets. Talent for coordinating, implementing, and
        maintaining installation and operation of customer application systems.
      </p>
      {/* Skills */}
      <div className='text-center py-4'>
        <h5 className='text-center text-[18px] py-2'>Skills</h5>
        <p className='py-2'>
          <span className='font-bold'>Technical Skills</span>
          <span className='px-2'>|</span> JavaScript
          <span className='px-2'>|</span> React
          <span className='px-2'>|</span> Node Js
          <span className='px-2'>|</span> Next Js
          <span className='px-2'>|</span> HTML
          <span className='px-2'>|</span>CSS
          <span className='px-2'>|</span>Tailwind
          <span className='px-2'>|</span>Bootstrap
          <span className='px-2'>|</span> Firebase
          <span className='px-2'>|</span> MongoDB
          <span className='px-2'>|</span> MySQL
        </p>
        <p className='py-2'>
          <span className='font-bold'>Amazon Web Services</span>
          <span className='px-2'>|</span>AWS
        </p>
      </div>
      <h5 className='text-center text-[18px] py-4'>Professional Experience</h5>
      {/* Experience */}
      <div className='py-6'>
        <p className='italic'>
          <span className='font-bold italic'>
            Casual Poultry Process Worker
          </span>
          <span className='px-2'>|</span>Poultry N More Pty Ltd
        </p>
        <p className='py-1 italic'>Worker (2018 - Current)</p>
        <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
          <li>
            Manage boning and slicing process of poultry. Administer operating
            tools and machines to skin, bone, and slice poultry. Move carcasses
            to chillers and freezers.
          </li>
          <li>• Oversaw packing of boned and slicing of meat into cartons.</li>
          <li>
            • Ensured cleanliness and sanitization of equipment as well as work
            areas.
          </li>
        </ul>
      </div>{' '}
      {/* Experience */}
      <div className='py-6'>
        <p className='italic'>
          <span className='font-bold italic'>
            Full-time Poultry Process Worker
          </span>
          <span className='px-2'>|</span>Ideal Food Supplies Pty Ltd.
        </p>
        <p className='py-1 italic'>Worker (2013 - 2017)</p>
        <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
          <li>
            Severed jugular veins of poultry and removed viscera/residual
            material from poultry carcasses. Separated organs and glands, such
            as sweetbreads, livers, hearts, and spleens from poultry carcasses.
            Inspected and graded poultry for size and quality. Operated
            machines, including slice, peel, skin, and crumb.
          </li>
          <li>
            • Understood specifications for each line of products required by
            strict retailers and processed products tailored to retailers'
            customers' demand.
          </li>
          <li>
            • Achieved appreciation from factory supervisors and company
            director for working efficiently and processing high quality
            products at less time with less waste.
          </li>
        </ul>
      </div>
      {/* Experience */}
      <div className='py-6'>
        <p className='italic'>
          <span className='font-bold'>Site Supervisor</span>
          <span className='px-2'>|</span>Me Linh Engineer Co. Ltd.
        </p>
        <p className='py-1 italic'>Engineer (2011 - 2013)</p>
        <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
          <li>
            Ensured safe and efficient operation of site through collaboration
            with senior management and stakeholders. Utilized solid leadership,
            communication, and project management skills for operational
            excellence. Supervised materials and employee at site. Steered
            various activities regarding implementation and completion of
            project.
          </li>
          <li>
            • Designed and executed systems as well as procedures to enable
            tradespeople and employees to manage tasks in efficient way.
          </li>
          <li>
            • Verified high level of performance and compliance with health and
            safety guidelines by leading and coordinating day-to-day functions
            of worksite.
          </li>
        </ul>
      </div>{' '}
      {/* Experience */}
      <div className='py-6'>
        <p className='italic'>
          <span className='font-bold'>Site Supervisor</span>
          <span className='px-2'>|</span>Southern Environment Co. Ltd.
        </p>
        <p className='py-1 italic'>Engineer (2009 - 2011)</p>
        <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
          <li>
            Ensured safe and efficient operation of site through collaboration
            with senior management and stakeholders. Utilized solid leadership,
            communication, and project management skills for operational
            excellence. Supervised materials and employee at site. Steered
            various activities regarding implementation and completion of
            project.
          </li>
          <li>
            • Designed and executed systems as well as procedures to enable
            tradespeople and employees to manage tasks in efficient way.
          </li>
          <li>
            • Verified high level of performance and compliance with health and
            safety guidelines by leading and coordinating day-to-day functions
            of worksite.
          </li>
        </ul>
      </div>
    </div>
    <div className='btn flex justify-center mb-20'>
      <a href='../public/assets/Hurley-Resume.docx' download>
        <button
          type='button'
          className='text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>
          Download CV
        </button>
      </a>
    </div>
  </>
);

export default resume;
