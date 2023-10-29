import { useState } from "react";

function App() {
  const [Color, setColor] = useState("slate");

  const colors = [
    "green",
    "blue",
    "white",
    "orange",
    "violet",
    "yellow",
    "red",
    "gray",
  ];

  return (
    <>
      <div className={`bg-${Color}-900 h-screen w-full duration-500`} id="mainbg">
        <div
          className="h-10 ml-10 mr-10 w-[-webkit-fill-available] p-7 pt-8 pb-7 bg-white rounded-xl fixed bottom-[15%] flex items-center justify-around"
          id="buttons"
        >
          {colors.map((item, index) => (
            <button
              key={index}
              className={`bg-${item}-400 m-1 p-1 rounded-xl ring-2 hover:ring-${item}-800 w-[7em]`}
              id={`${item}`}
              onClick={() => setColor(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
