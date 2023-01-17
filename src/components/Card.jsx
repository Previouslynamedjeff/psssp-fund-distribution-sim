import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";

function Icon() {
  return (
    <div className="rounded-full bg-neutral-200 h-24 w-24 flex justify-center items-center">
      <FontAwesomeIcon icon={faUser} className="text-white text-5xl" />
    </div>
  );
}

function Card({ person, handleClick }) {
  const [height, setHeight] = useState(0);
  const fillRef = useRef();

  useEffect(() => {
    fillRef.current.style.height = height + "px";
  }, [height]);

  return (
    <div
      className="drop-shadow-sm rounded-xl px-4 py-6 bg-white hover:drop-shadow-lg transition-all duration-75 flex flex-col w-72 items-center select-none"
      onClick={(e) => {
        handleClick(e);

        const rect = e.target.getBoundingClientRect();
        setHeight(rect.bottom - e.clientY);
      }}
    >
      <div className="z-30 flex flex-col items-center">
        <Icon />
        <h2 className="text-lg mt-3 font-semibold">{person.name}</h2>
        <p>Age: {person.age}</p>
        <p>Household income: ${person.income.toLocaleString("en-US")}</p>
        <p>Program: {person.program}</p>
        <p>GPA: {person.gpa !== undefined ? person.gpa : "n/a"}</p>
      </div>
      <div
        className={`absolute left-0 bottom-0 w-full h-0 bg-green-200 z-10 rounded-lg transition-all`}
        ref={fillRef}
      ></div>
    </div>
  );
}

export default Card;
