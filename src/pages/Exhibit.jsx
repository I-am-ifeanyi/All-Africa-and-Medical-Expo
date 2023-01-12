import React from "react";

import exhibit1 from "../images/UNDER EXHIBIT/putyourproficiency.jpg";

const Exhibit = () => {
  return (
    <div className="md:p-10 p-5 relative top-36 md:top-0">
      <section>
        <div className="flex flex-col md:flex-row gap-5 md:gap-0 justify-around items-center" >
          <figure className="md:w-2/5 w-[80%]">
            <img src={exhibit1} alt="" className="md:w-full md:h-full rounded-lg" />
          </figure>
          <div className="w-full md:w-1/3 border-l-2 border-red-500 pl-2 ">
            <h1 className="md:text-2xl mb-5 font-bold text-center md:text-start text-xl">Put Your Proficiency Under The Spotlight</h1>
            <p><span className="font-bold">AMWE</span> gives you the greatest opportunity to put your abilities, good qualities, products and services under the spotlight. It is an opportunity to meet and interact with the movers and shakers of the health industry, establish the right connection with your target market and move your business to the desired level.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Exhibit;
