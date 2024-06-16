import React from 'react';
import "./styles.css";
import Spin_bar from './Spin_bar';

function Skills() {
  const progressValues = [75, 50, 90, 60];

  return (
    <div className="mt-20">
      <div className="text-6xl ml-[-100px]">
        <span className="font-bold mr-5">My</span>
        <span className="text-teal-600 font-bold">Skills</span>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-10 w-[1250px] h-[500px] rounded-full shadow-2xl shadow-gray-900 mt-24 bg-[#081b38]">
        {progressValues.map((value, index) => (
          <Spin_bar key={index} percentage={value} />
        ))}
      </div>
    </div>
  );
}

export default Skills;
