import React from "react";

const [currentIndex, setCurrentIndex] = useState(0);

const goToNext = () => {
  setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
};

const goToPrev = () => {
  setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
};

useEffect(() => {
  setCurrentIndex(0);
}, []);

const autoScroll = true;
let slideInterval;
let slideIntervalTime = 10000;

function auto() {
  slideInterval = setInterval(goToNext, slideIntervalTime);
}

useEffect(() => {
  if (autoScroll) {
    auto();
  }
  return () => clearInterval(slideInterval);
}, [currentIndex]);

const slides = [
  {
    id: 1,
    url: "Images/pic1.jpg",
    name: "Italian",
  },
  {
    id: 2,
    url: "Images/pic2.jpg",
    name: "Italian",
  },
  {
    id: 3,
    url: "Images/pic3.jpg",
    name: "Italian",
  },
  {
    id: 4,
    url: "Images/pic7.jpg",
    name: "Italian",
  },
  {
    id: 5,
    url: "Images/pic1.jpg",
    name: "Italian",
  },
  {
    id: 6,
    url: "Images/pic2.jpg",
    name: "Italian",
  },
  {
    id: 7,
    url: "Images/photo1.jpg",
    name: "Italian",
  },
];

<div className=" mt-[70px] w-full h-full relative  overflow-hidden ">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={index === currentIndex ? "slide current" : "slide "}
            >
              {index === currentIndex && (
                <div className="w-4/4">
                  <figure className="w-full h-[400px] md:h-[550px]">
                    <img src={slide.url} className="w-full h-full" />
                  </figure>
                </div>
              )}
            </div>
          ))}
          <div className="absolute w-full h-full">
            <div className="flex justify-between mt-[-250px] md:mt-[-300px]">
              <div
                className="md:text-3xl ml-2 md:ml-10 text-white bg-black/50 rounded-full p-2  "
                onClick={goToPrev}
              >
                <AiFillCaretLeft />
              </div>
              <div
                className="md:text-3xl mr-2 md:mr-10 text-white  bg-black/50 rounded-full p-2"
                onClick={goToNext}
              >
                <AiFillCaretRight />
              </div>
            </div>
    </div>
          </div>