// @ts-nocheck
import React from 'react';
import bankImg from '../public/assets/projects/bank.png';
import managementImg from '../public/assets/projects/management.png';
import realestateImg from '../public/assets/projects/realestate.png';
import weatherImg from '../public/assets/projects/weather.png';
import workoutImg from '../public/assets/projects/workout.png';
import movieImg from '../public/assets/projects/movie.png';

import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Workout App'
            backgroundImg={workoutImg}
            projectUrl='/workout'
            tech='React JS'
          />
          <ProjectItem
            title='Movie App'
            backgroundImg={movieImg}
            projectUrl='/movie'
            tech='React JS'
          />
          <ProjectItem
            title='Management App'
            backgroundImg={managementImg}
            projectUrl='/management'
            tech='React JS'
          />
          <ProjectItem
            title='Property App'
            backgroundImg={realestateImg}
            projectUrl='/property'
            tech='React JS'
          />
          <ProjectItem
            title='Bank UI'
            backgroundImg={bankImg}
            projectUrl='/bank'
            tech='React JS'
          />
          <ProjectItem
            title='Weather App'
            backgroundImg={weatherImg}
            projectUrl='/weather'
            tech='Javascript'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
