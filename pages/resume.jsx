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
        For the past two years, I have self-taught, been skilled and
        self-motivated to become knowledgeable in the user interface, testing,
        and debugging processes. I have proactively equipped with a diverse and
        promising skill-set in designing, installing, testing and maintaining
        web systems. I am able to effectively self-manage independent projects
        and collaboratively work in a team setting. I am proficient in an
        assortment of technologies and would like to become a senior web
        developer and a professional in my chosen practice field.
      </p>
      {/* Skills */}
      <div className='text-center py-4'>
        <h5 className='text-center text-[18px] py-2'>Skills</h5>
        <p className='py-2'>
          <span className='font-bold'>Technical Skills</span>
          <span className='px-2'>|</span> JavaScript
          <span className='px-2'>|</span> Node Js
          <span className='px-2'>|</span> React
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
          <li>Boning and slicing processed poultry;</li>
          <li>Packing boned and sliced meat into cartons;</li>
          <li>
            Operating tools and machines that skin, bone and slice poultry;
          </li>
          <li>Cleaning and sanitizing equipment and work areas.</li>
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
          <li>Boning and slicing processed poultry;</li>
          <li>Packing boned and sliced meat into cartons;</li>
          <li>
            Operating tools and machines that skin, bone and slice poultry;
          </li>
          <li>Cleaning and sanitizing equipment and work areas.</li>
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
            Overseeing and coordinating the daily operations of a worksite to
            ensure a high level of performance and compliance with health and
            safety guidelines;
          </li>
          <li>
            Developing and implementing systems and procedures that enable
            tradespeople and employees to carry out their tasks in the most
            efficient way;
          </li>
          <li>
            Working closely with senior management and stakeholders to ensure a
            safe and efficient operation of the site;
          </li>
          <li>
            Being equipped with solid leadership and communication skills and
            project management skills;
          </li>
          <li>
            Possesses a good understanding of relevant legislation regulations
            and protocols concerning the construction, building, health and
            safety.
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
            Overseeing and coordinating the daily operations of a worksite to
            ensure a high level of performance and compliance with health and
            safety guidelines;
          </li>
          <li>
            Developing and implementing systems and procedures that enable
            tradespeople and employees to carry out their tasks in the most
            efficient way;
          </li>
          <li>
            Working closely with senior management and stakeholders to ensure a
            safe and efficient operation of the site;
          </li>
          <li>
            Being equipped with solid leadership and communication skills and
            project management skills;
          </li>
          <li>
            Possesses a good understanding of relevant legislation regulations
            and protocols concerning the construction, building, health and
            safety.
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
