import { useEffect, useRef } from "react";

function Bar({ percent }) {
  const fillRef = useRef();
  useEffect(() => {
    fillRef.current.style.height = percent + "%";
    console.log(fillRef.current.style.height);

    if (percent > 100) {
      fillRef.current.classList += " bg-red-300";
    } else {
      fillRef.current.classList.remove("bg-red-300");
    }
  }, [percent]);

  return (
    <div className="fixed right-0 top-0 h-full w-14 bg-white">
      <div
        className={`absolute right-0 bottom-0 w-full transition-all h-0 bg-green-300`}
        ref={fillRef}
      ></div>
    </div>
  );
}

export default Bar;
