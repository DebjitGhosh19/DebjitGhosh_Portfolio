import React from 'react'

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IoMdSchool } from "react-icons/io";

const dateClasses = "sm:text-orange-500 font-bold bg-white/20 px-3 py-1 rounded-lg";
const WorkExperience = () => {
  return (
    <div className="bg-[#f5f7fa] min-h-screen py-10" id="workexperience">
      <h2 className="text-center mb-8 text-[#22223b] font-bold text-4xl tracking-wide">
        Work Experience
      </h2>
      <VerticalTimeline lineColor='#8AC6F6'>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date={<span className={dateClasses}>Dec 2022</span>}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<IoMdSchool />}
        >
          <h3 className="text-xl font-semibold mb-2 text-white tracking-wide">
            Web Development Intern
          </h3>
          <h4 className="text-base font-normal mb-1 text-[#e3f2fd]">
            Topstack, Hooghly
          </h4>
          <p>
            Completed internship in web development, working on website design.
            
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default WorkExperience