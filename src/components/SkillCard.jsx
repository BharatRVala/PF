import React from 'react';

const SkillCard = ({ title, items }) => {
  return (
    <div className="dbox w-full max-w-xs bg-gray-700 text-white p-4 rounded-lg shadow-md transition-transform hover:scale-105">
      <h3 className="text-yellow-400 text-lg sm:text-xl font-bold text-center mb-2 sm:mb-3">
        {title}
      </h3>
      <ul className="pl-4 sm:pl-5">
        {items.map((item, index) => (
          <li
            key={index}
            className="text-sm sm:text-base my-1 sm:my-2 relative pl-4 before:content-['•'] before:absolute before:left-0 hover:text-blue-400 transition-all"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCard;
