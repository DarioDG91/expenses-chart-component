import { useState } from "react";

const date = new Date();
const dayOfWeek = date.getDay();
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const dayName = daysOfWeek[dayOfWeek].toLowerCase().substring(0,3);


export default function Bar({ amount, day, ...rest }) {
  const [isHovered, setIsHovered] = useState(false);

  const barClasses = `   rounded-md w-[33px] sm:w-[50px] ${dayName === day ? 'bg-cyan' : 'bg-softRed'} hover:opacity-50 hover:cursor-pointer`;
  const amountClasses = ` top-[-32px] left-[-9px] hidden  absolute  ${
    isHovered ? "active" : ''
  } text-veryPaleOrange bg-darkBrown rounded-md p-1 text-sm sm:p-2 sm:text-base sm:top-[-50px] sm:left-[-10px] `;

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <li {...rest} className="flex flex-col justify-end items-center  ">
      <div className="relative">
        <div className={amountClasses}>${amount}</div>
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={barClasses}
          style={{
            height: `${amount * 2.88}px`,
          }}
        ></div>
      </div>
      <div className=" mt-3 text-xs text-mediumBrown text-center ">{day}</div>
    </li>
  );
}
