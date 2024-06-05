import { useState } from "react";
import {
  BsFillCaretRightSquareFill,
  BsFillCaretLeftSquareFill,
} from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

export const Heroes = () => {
  return (
    <>
      <div
        id="heroes"
        className="w-full pt-[15px] pb-28 bg-section2 rounded-t-[30px] xl:hidden backdrop-blur-sm"
      >
        <div id="heroes">
          <div className="w-[345px] h-[49px] bg-[#D9D9D9] px-1 mx-auto flex justify-between gap-2 items-center rounded-[20px]">
            <img
              src="/assets/img/search.png"
              alt="Search Icon"
              className="w-[20px] h-[20px]"
            />
            <input
              type="text"
              placeholder="Character Name"
              className="w-[317px] h-[45px] bg-[#D9D9D9] rounded-[20px] px-1"
            />
          </div>
          <h1 className="font-bold text-[20px] my-8 text-white text-center">
            Character List
          </h1>
          <div className="py-2 flex gap-1 flex-wrap w-full justify-center">
            <a href="/hero/character-a.png/albatros/5">
              <Characters
                src={"/assets/img/character-a.png"}
                name={"Albatros"}
                star={5}
              />
            </a>
            <a href="/hero/character-b.png/breaker/4">
              <Characters
                src={"/assets/img/character-b.png"}
                name={"Breaker"}
                star={4}
              />
            </a>
            <a href="/hero/character-c.png/footslam/3">
              <Characters
                src={"/assets/img/character-c.png"}
                name={"Footslam"}
                star={3}
              />
            </a>
            <a href="/hero/character-d.png/schizo/5">
              <Characters
                src={"/assets/img/character-d.png"}
                name={"Schizo"}
                star={5}
              />
            </a>
            <a href="/hero/character-e.png/ironsides/4">
              <Characters
                src={"/assets/img/character-e.png"}
                name={"Ironsides"}
                star={4}
              />
            </a>
            <a href="/hero/character-f.png/geronimo/5">
              <Characters
                src={"/assets/img/character-f.png"}
                name={"Geronimo"}
                star={5}
              />
            </a>
            <a href="/hero/character-g.png/dozkiller/4">
              <Characters
                src={"/assets/img/character-g.png"}
                name={"Doz Killer"}
                star={4}
              />
            </a>
            <a href="/hero/character-h.png/zelda/5">
              <Characters
                src={"/assets/img/character-h.png"}
                name={"Zelda"}
                star={5}
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export function Characters({ src, name, star }) {
  const stars = Array.from({ length: star }).map((_, index) => (
    <img
      key={index}
      src="/assets/img/star.png"
      alt="Star"
      className="w-[20px]"
    />
  ));
  return (
    <>
      <div className="w-[170px] h-[201px] rounded-[30px] border border-white border-opacity-60 bg-[#2E2925] bg-opacity-70 relative flex justify-center">
        <img src={src} alt={name} className="h-[200px] mx-auto absolute" />
        <div className="w-full h-[70px] rounded-t-[10px] rounded-b-[30px] bg-[#322c29] bg-opacity-50 self-end z-10 flex flex-col justify-center items-center backdrop-blur-sm border-t-2 border-[#322c29] border-opacity-10">
          <h3 className="font-bold text-[15px] text-white">{name}</h3>
          <div className="w-full flex justify-center gap-0.5">{stars}</div>
        </div>
      </div>
    </>
  );
}

export const Profile = () => {
  return (
    <>
      <div
        id="get-heroes"
        className="w-full pt-[15px] pb-10 mt-3 bg-section2 rounded-t-[50px] xl:hidden min-h-screen"
      >
        <div id="profile" className="">
          <div className="flex justify-between px-5">
            <span className="text-[15px] font-bold text-white">My Account</span>
            <img
              src="/assets/img/menu.png"
              alt="Menu"
              className="w-[20px] h-[20px] opacity-80"
            />
          </div>
          <img
            src="/assets/img/profile.jpg"
            alt="Profile"
            className="h-[80px] w-[80px] rounded-[40px] border-2 border-[#E93830] my-2 mx-auto"
          />
          <span className="text-[15px] font-bold text-center block text-white">
            Varker Klay
          </span>
          <span className="text-[10px] text-[#8C8888] font-bold text-center w-full block">
            Player Newbie
          </span>
          <div className="flex justify-center py-3">
            <div className="flex flex-col w-1/3 items-center">
              <span className="text-[15px] font-bold text-[#E93830]">Rank</span>
              <span className="text-[10px] text-[#8C8888]">Master</span>
            </div>
            <div className="flex flex-col w-1/3 items-center">
              <span className="text-[15px] font-bold text-[#E93830]">
                Highest Rank
              </span>
              <span className="text-[10px] text-[#8C8888]">Legends</span>
            </div>
            <div className="flex flex-col w-1/3 items-center">
              <span className="text-[15px] font-bold text-[#E93830]">
                Role Play
              </span>
              <span className="text-[10px] text-[#8C8888]">Mage</span>
            </div>
          </div>
          <a href="#profile" className="flex justify-between px-3 mt-8">
            <div className="w-fit flex">
              <img
                src="/assets/img/user.png"
                alt="User"
                className="h-[20px] w-[20px]"
              />
              <span className="ml-3 font-bold text-[15px] text-[#FFFFFF]">
                Personal Info
              </span>
            </div>
            <img
              src="/assets/img/arrow.png"
              alt="Arrow"
              className="h-[20px] w-[11.56px]"
            />
          </a>
          <a href="#profile" className="flex justify-between px-3 mt-8">
            <div className="w-fit flex">
              <img
                src="/assets/img/quest.png"
                alt="User"
                className="h-[20px] w-[20px]"
              />
              <span className="ml-3 font-bold text-[15px] text-[#FFFFFF]">
                Quest
              </span>
            </div>
            <img
              src="/assets/img/arrow.png"
              alt="Arrow"
              className="h-[20px] w-[11.56px]"
            />
          </a>
          <a href="#profile" className="flex justify-between px-3 mt-8">
            <div className="w-fit flex">
              <img
                src="/assets/img/hero.png"
                alt="User"
                className="h-[20px] w-[20px]"
              />
              <span className="ml-3 font-bold text-[15px] text-[#FFFFFF]">
                Character
              </span>
            </div>
            <img
              src="/assets/img/arrow.png"
              alt="Arrow"
              className="h-[20px] w-[11.56px]"
            />
          </a>
          <a href="#profile" className="flex justify-between px-3 mt-8">
            <div className="w-fit flex">
              <img
                src="/assets/img/awards.png"
                alt="User"
                className="h-[20px] w-[20px]"
              />
              <span className="ml-3 font-bold text-[15px] text-[#FFFFFF]">
                Awards
              </span>
            </div>
            <img
              src="/assets/img/arrow.png"
              alt="Arrow"
              className="h-[20px] w-[11.56px]"
            />
          </a>
          <a href="#profile" className="flex justify-between px-3 mt-8">
            <div className="w-fit flex">
              <img
                src="/assets/img/setting.png"
                alt="User"
                className="h-[20px] w-[20px]"
              />
              <span className="ml-3 font-bold text-[15px] text-[#FFFFFF]">
                Setting
              </span>
            </div>
            <img
              src="/assets/img/arrow.png"
              alt="Arrow"
              className="h-[20px] w-[11.56px]"
            />
          </a>
          <a href="#profile" className="flex justify-between px-3 mt-8">
            <div className="w-fit flex">
              <img
                src="/assets/img/logout.png"
                alt="User"
                className="h-[20px] w-[20px]"
              />
              <span className="ml-3 font-bold text-[15px] text-[#FFFFFF]">
                Logout
              </span>
            </div>
            <img
              src="/assets/img/arrow.png"
              alt="Arrow"
              className="h-[20px] w-[11.56px]"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export const Console = () => {
  const slides = [
    {
      url: "/assets/img/console1.png",
    },
    {
      url: "/assets/img/console2.png",
    },
    {
      url: "/assets/img/console3.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <>
      <div className="min-h-screen bg-section2 rounded-t-[30px] py-3">
        <h1 className="text-[20px] font-bold text-white text-center shadowtext">
          Chose Your Console
        </h1>
        <div className="w-full py-8 overflow-scroll flex flex-row justify-evenly gap-3">
          <div className="w-full h-auto pt-10 relative group">
            <div
              style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
              className="w-[300px] mx-auto rounded-2xl bg-center bg-cover duration-500"
            >
              <img
                className="opacity-0"
                src="/assets/img/console3.png"
                alt=""
              />
            </div>
            {/* left arrow */}
            <div
              onClick={prevSlide}
              className="tablet:hidden opacity-60 tablet:opacity-100 group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-lg p-2 bg-black/20 text-white cursor-pointer"
            >
              <BsFillCaretLeftSquareFill size={30} />
            </div>
            {/* right arrow */}
            <div
              onClick={nextSlide}
              className="tablet:hidden opacity-60 tablet:opacity-100 group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-lg p-2 bg-black/20 text-white cursor-pointer"
            >
              <BsFillCaretRightSquareFill size={30} />
            </div>
            <div className="flex top-4 text-white justify-center py-2">
              {slides.map((slide, slideIndex) => (
                <div
                  key={slideIndex}
                  onClick={() => goToSlide(slideIndex)}
                  className="text-2xl cursor-pointer"
                >
                  <RxDotFilled />
                </div>
              ))}
            </div>
          </div>
        </div>

        <a
          href="#buyconsole"
          className="w-[209px] h-[50px] rounded-[25px] flex justify-center items-center border border-[#E93830] bg-gradient-to-b from-[#EFD0CF] to-[#E21000] text-white font-bold hover:scale-105 duration-150 mx-auto shadow-black shadow-xl"
        >
          Buy
        </a>
      </div>
    </>
  );
};
