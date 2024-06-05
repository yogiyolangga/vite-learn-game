import { useEffect, useState } from "react";
import $ from "jquery";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Heroes } from "./component/mobile/SectionTwoMobile";
import { Profile, Console } from "./component/mobile/SectionTwoMobile";
import { Vehicle } from "./component/Vehicle";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <>
        <MobileHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vehicle" element={<CarSection />} />
          <Route path="/heroes" element={<Heroes />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/console" element={<Console />} />
          <Route path="/hero/:src/:name/:star" element={<SelectedHero />} />
        </Routes>
        <MobileMenuBottom />
      </>
    </Router>
  );
}

export function Home() {
  return (
    <>
      <div className="max-w-[1237px] rounded-[50px] mx-auto shadow-lg shadow-black bg-gradient-to-br from-[#4C4744] to-[#231E1B] bg-section1">
        <Header />
        <Hero />
      </div>
      <SectionTwo />
    </>
  );
}

export function MobileHeader() {
  useEffect(() => {
    const mobileMenu = document.getElementById("mobile-menu");
    const mobileMenuButton = document.getElementById("mobile-menu-button");
    const closeMenuMobile = document.getElementById("close-menu-mobile");

    function showMenu() {
      mobileMenu.classList.remove("bg-opacity-0", "-translate-y-[85vh]");
      mobileMenu.classList.add("backdrop-blur-sm", "bg-opacity-15", "h-full");
      mobileMenuButton.classList.add("hidden");
      closeMenuMobile.classList.remove("hidden");
    }

    function hideMenu() {
      mobileMenu.classList.add("bg-opacity-0", "-translate-y-[85vh]");
      mobileMenu.classList.remove(
        "backdrop-blur-sm",
        "bg-opacity-15",
        "h-full"
      );
      mobileMenuButton.classList.remove("hidden");
      closeMenuMobile.classList.add("hidden");
    }

    mobileMenuButton.addEventListener("click", showMenu);
    closeMenuMobile.addEventListener("click", hideMenu);
  });

  return (
    <>
      <div
        id="mobile-menu"
        className="top-0 z-50 w-full bg-black bg-opacity-0 -translate-y-[85vh] transition-all duration-700 fixed"
      >
        <div className="flex bg-nav flex-col items-center w-full h-[85vh] rounded-b-[80px] bg-gradient-to-tr  from-slate-400 to-black p-4">
          <div className="h-[20%]">
            <a href="/">
              <img
                src="/assets/img/gameover-logo.png"
                alt="Game Over"
                className="h-[60px]"
              />
            </a>
          </div>
          <div className="h-[40%] flex flex-col justify-evenly text-[25px] font-bold text-center">
            <a
              href="/"
              className="w-full flex items-center gap-2 text-white shadowtext"
            >
              Home{" "}
              <img
                src="/assets/img/arrow-link.png"
                alt="Home"
                className="h-5"
              />
            </a>
            <a
              href="/heroes"
              className="w-full flex items-center gap-2 text-white shadowtext"
            >
              Heroes{" "}
              <img
                src="/assets/img/arrow-link.png"
                alt="Home"
                className="h-5"
              />
            </a>
            <a
              href="/console"
              className="w-full flex items-center gap-2 text-white shadowtext"
            >
              Console{" "}
              <img
                src="/assets/img/arrow-link.png"
                alt="Home"
                className="h-5"
              />
            </a>
            <a
              href="/profile"
              className="w-full flex items-center gap-2 text-white shadowtext"
            >
              Profile{" "}
              <img
                src="/assets/img/arrow-link.png"
                alt="Home"
                className="h-5"
              />
            </a>
          </div>
          <div className="h-[40%] flex flex-col items-center gap-3 justify-end">
            <a href="#login" className="text-white font-semibold shadowtext">
              Login
            </a>
            <a
              href="#start"
              className="h-[40px] w-[130px] rounded-[30px] flex items-center justify-center text-white border border-[#D13E2A] bg-opacity-60 font-semibold bg-gradient-to-b from-[#ff5c57] to-zinc-300"
            >
              Start Now
            </a>
          </div>
        </div>
        <div className="w-full py-3 xl:hidden">
          <div
            id="mobile-menu-button"
            className="w-[50px] p-1 bg-slate-50 rounded-xl mx-auto"
          ></div>
          <div
            id="close-menu-mobile"
            className="w-[50px] p-1 bg-slate-50 rounded-xl mx-auto hidden"
          ></div>
        </div>
      </div>
    </>
  );
}

export function MobileMenuBottom() {
  const [menuOpacity, setMenuOpacity] = useState("opacity-60");
  const [menuHomeOpacity, setMenuHomeOpacity] = useState("opacity-60");
  const [menuConsoleOpacity, setMenuConsoleOpacity] = useState("opacity-60");
  const [menuProfileOpacity, setMenuProfileOpacity] = useState("opacity-60");

  useEffect(() => {
    if (window.location.href.indexOf("heroes") > -1) {
      setMenuOpacity("opacity-100");
      setMenuHomeOpacity("opacity-60");
      setMenuConsoleOpacity("opacity-60");
      setMenuProfileOpacity("opacity-60");
    } else if (window.location.href.indexOf("console") > -1) {
      setMenuOpacity("opacity-60");
      setMenuHomeOpacity("opacity-60");
      setMenuConsoleOpacity("opacity-100");
      setMenuProfileOpacity("opacity-60");
    } else if (window.location.href.indexOf("profile") > -1) {
      setMenuOpacity("opacity-60");
      setMenuHomeOpacity("opacity-60");
      setMenuConsoleOpacity("opacity-60");
      setMenuProfileOpacity("opacity-100");
    } else {
      setMenuOpacity("opacity-60");
      setMenuHomeOpacity("opacity-100");
      setMenuConsoleOpacity("opacity-60");
      setMenuProfileOpacity("opacity-60");
    }
  });

  useEffect(() => {
    const mb = document.getElementById("menu-bottom");

    $(window).scroll(function () {
      let wS = $(this).scrollTop();
      if (wS >= 20) {
        mb.classList.remove("translate-y-[75px]");
      } else {
        mb.classList.add("translate-y-[75px]");
      }
    });
  });
  return (
    <>
      <div
        id="menu-bottom"
        className="w-full px-2 fixed z-40 bottom-1 translate-y-[75px] transition-all duration-500 xl:hidden"
      >
        <div className="flex flex-row justify-evenly items-center w-full rounded-[50px] h-[70px] bg-gradient-to-r from-[#777474] to-black">
          <a href="/">
            <img
              src="/assets/img/home.png"
              alt="Home"
              className={`w-[30px] h-[30px] ${menuHomeOpacity}`}
              onClick={() => setMenuHomeOpacity("opacity-100")}
            />
          </a>
          <a href="/heroes">
            <img
              src="/assets/img/menu.png"
              alt="Menu"
              className={`w-[30px] h-[30px] ${menuOpacity}`}
              onClick={() => setMenuOpacity("opacity-100")}
            />
          </a>
          <a href="/console">
            <img
              src="/assets/img/console.png"
              alt="Console"
              className={`w-[30px] h-[30px] ${menuConsoleOpacity}`}
              onClick={() => setMenuConsoleOpacity("opacity-100")}
            />
          </a>
          <a href="/profile">
            <img
              src="/assets/img/user.png"
              alt="Profile"
              className={`w-[30px] h-[30px] ${menuProfileOpacity}`}
              onClick={() => setMenuProfileOpacity("opacity-100")}
            />
          </a>
        </div>
      </div>
    </>
  );
}

export function Header() {
  return (
    <>
      <div className="hidden xl:flex w-full py-5 px-24 justify-between items-center">
        <div className="flex items-center w-1/4">
          <a href="/">
            <img
              src="/assets/img/gameover-logo.png"
              alt="Game Over"
              className="h-[60px]"
            />
          </a>
        </div>
        <ul className="flex w-fit justify-evenly gap-3 items-center text-white">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#hero">Hero</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="flex w-1/4 justify-end gap-5 items-center">
          <a href="#login" className="text-white font-semibold">
            Login
          </a>
          <a
            href="#start"
            className="h-[40px] w-[130px] rounded-[30px] flex items-center justify-center text-white border border-[#D13E2A] bg-[#3A1914] bg-opacity-60 font-semibold hover:bg-[#ff5c57] hover:scale-105 duration-150"
          >
            Start Now
          </a>
        </div>
      </div>
    </>
  );
}

export function Hero() {
  return (
    <>
      <div className="w-full flex flex-wrap">
        <div className="xl:hidden w-full px-4 py-2 flex justify-between items-center h-[55px]">
          <a href="/">
            <img
              src="/assets/img/gameover-logo.png"
              alt="Logo Game Over"
              className="h-[50px]"
            />
          </a>
          <a href="#search">
            <img
              src="/assets/img/search.png"
              alt="Search Icon"
              className="h-4"
            />
          </a>
        </div>
        <div className="flex flex-col xl:w-1/2 w-full justify-center items-center gap-10 p-3 xl:p-0 xl:pl-24">
          <h1 className="text-[30px]  xl:text-[45px] font-semibold text-white w-full xl:w-[434px] xl:h-[165px] text-center xl:text-left xl:pt-0">
            New Character Arrived & All Skins Discount
          </h1>
          <p className="w-full xl:w-[434px] text-center xl:text-left px-3 xl:p-0 h-[56px] xl:h-[48px] font-semibold text-[15px] text-[#868686]">
            Welcome here to you all our gamers Here you can find, to improve
            your character looks
          </p>
          <a
            href="/heroes"
            className="w-[209px] h-[50px] rounded-[25px] flex justify-center items-center border border-[#E93830] bg-gradient-to-b from-[#EFD0CF] to-[#E21000] text-white font-bold hover:scale-105 duration-150"
          >
            Get New Character
          </a>
        </div>
        <div className="xl:w-1/2 w-full">
          <img
            src="/assets/img/woman-armor.png"
            alt="Woman With Armor"
            className="w-[600px] mx-auto"
          />
        </div>
      </div>
    </>
  );
}

export function SectionTwo() {
  const characterA = "/assets/img/character-a.png";
  const characterB = "/assets/img/character-b.png";
  const characterC = "/assets/img/character-c.png";
  const characterD = "/assets/img/character-d.png";
  const characterE = "/assets/img/character-e.png";
  const characterF = "/assets/img/character-f.png";
  const characterG = "/assets/img/character-g.png";
  const characterH = "/assets/img/character-h.png";

  const [srcHero, setSrcHero] = useState("/assets/img/character-1.png");
  const [nameHero, setNameHero] = useState("Annihilator");
  const [starHero, setStarHero] = useState(5);
  const [durability, setDurability] = useState(80);
  const [offense, setOffense] = useState(70);
  const [ability, setAbility] = useState(90);
  const [difficulty, setDifficulty] = useState(60);

  useEffect(() => {
    const bigHero = document.getElementById("big-hero");
    const dc = document.getElementById("detail-character");

    $(window).scroll(function () {
      let hT = $("#section2").offset().top,
        hH = $("#section2").outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop() + 350;
      if (wS > hT + hH - wH) {
        bigHero.classList.remove("opacity-0", "-translate-x-96");
        bigHero.classList.add("-translate-x-36");
        dc.classList.remove("opacity-0", "translate-x-20");
      } else {
        bigHero.classList.remove("-translate-x-36");
        bigHero.classList.add("opacity-0", "-translate-x-96");
        dc.classList.add("opacity-0", "translate-x-20");
      }
    });
  });

  function heroA() {
    setSrcHero(characterA);
    setNameHero("Albatros");
    setStarHero(5);
    setDurability(80);
    setOffense(75);
    setAbility(90);
    setDifficulty(60);
  }
  function heroB() {
    setSrcHero(characterB);
    setNameHero("Breaker");
    setStarHero(4);
    setDurability(90);
    setOffense(80);
    setAbility(75);
    setDifficulty(60);
  }
  function heroC() {
    setSrcHero(characterC);
    setNameHero("Footslam");
    setStarHero(3);
    setDurability(50);
    setOffense(85);
    setAbility(60);
    setDifficulty(70);
  }
  function heroD() {
    setSrcHero(characterD);
    setNameHero("Schizo");
    setStarHero(5);
    setDurability(85);
    setOffense(80);
    setAbility(75);
    setDifficulty(70);
  }
  function heroE() {
    setSrcHero(characterE);
    setNameHero("Ironsides");
    setStarHero(4);
    setDurability(85);
    setOffense(70);
    setAbility(65);
    setDifficulty(70);
  }
  function heroF() {
    setSrcHero(characterF);
    setNameHero("Geronimo");
    setStarHero(5);
    setDurability(75);
    setOffense(80);
    setAbility(75);
    setDifficulty(80);
  }
  function heroG() {
    setSrcHero(characterG);
    setNameHero("Doz Killer");
    setStarHero(4);
    setDurability(65);
    setOffense(80);
    setAbility(75);
    setDifficulty(80);
  }
  function heroH() {
    setSrcHero(characterH);
    setNameHero("Zelda");
    setStarHero(5);
    setDurability(95);
    setOffense(80);
    setAbility(75);
    setDifficulty(90);
  }

  return (
    <>
      <div id="section2">
        <div className="max-w-[1237px] h-[738px] px-3 rounded-[50px] mx-auto shadow-lg shadow-black bg-gradient-to-br from-[#4C4744] to-[#231E1B] my-10 xl:grid grid-cols-[70px,400px,auto,260px] grid-rows-2 gap-2 relative border border-gray-500 hidden bg-section2">
          <div className="row-span-2 py-2 z-10">
            <SideMenu />
          </div>
          <div className="h-[715px]">
            <img
              id="big-hero"
              src={srcHero}
              alt="Character"
              className="w-[600px] h-[738px] absolute duration-700 transition-all opacity-0 -translate-x-96"
            />
          </div>
          <div
            className={`h-[575px] z-10 flex justify-center items-center transition-all duration-500`}
          >
            <CharacterList
              clickHeroA={heroA}
              clickHeroB={heroB}
              clickHeroC={heroC}
              clickHeroD={heroD}
              clickHeroE={heroE}
              clickHeroF={heroF}
              clickHeroG={heroG}
              clickHeroH={heroH}
            />
          </div>

          <div className="row-span-2 py-1">
            <Account />
          </div>
          <div
            id="detail-character"
            className="border border-white border-opacity-60 bg-opacity-50 bg-[#2e2925] backdrop-blur-sm rounded-[50px] col-span-2 h-[155px] self-end mb-4 z-10 px-5 py-2 opacity-0 translate-x-20 transition-all duration-500"
          >
            <Detail
              nameHero={nameHero}
              starHero={starHero}
              durabilityRate={durability}
              offenseRate={offense}
              abilityRate={ability}
              difficultyRate={difficulty}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export function CarSection() {
  const carA = "/assets/img/car-a.png";
  const carB = "/assets/img/car-b.png";
  const carC = "/assets/img/car-c.png";
  const carD = "/assets/img/car-d.png";
  const carE = "/assets/img/car-e.png";
  const carF = "/assets/img/car-f.png";
  const carG = "/assets/img/car-g.png";
  const carH = "/assets/img/car-h.png";

  const [srcHero, setSrcHero] = useState("/assets/img/car-a.png");

  function fcarA() {
    setSrcHero(carA);
  }
  function fcarB() {
    setSrcHero(carB);
  }
  function fcarC() {
    setSrcHero(carC);
  }
  function fcarD() {
    setSrcHero(carD);
  }
  function fcarE() {
    setSrcHero(carE);
  }
  function fcarF() {
    setSrcHero(carF);
  }
  function fcarG() {
    setSrcHero(carG);
  }
  function fcarH() {
    setSrcHero(carH);
  }

  return (
    <>
      <div className="max-w-[1237px] rounded-[50px] mx-auto shadow-lg shadow-black bg-gradient-to-br from-[#4C4744] to-[#231E1B] bg-section1">
        <Header />
        <Hero />
      </div>
      <div id="section2">
        <div className="max-w-[1237px] h-[738px] px-3 rounded-[50px] mx-auto shadow-lg shadow-black bg-gradient-to-br from-[#4C4744] to-[#231E1B] my-10 xl:grid grid-cols-[70px,auto,260px] grid-rows-2 gap-2 relative border border-gray-500 hidden bg-section2">
          <div className="row-span-2 py-2 z-10">
            <SideMenu />
          </div>
          <div className="h-[400px] flex justify-center items-center">
            <img
              id="big-hero"
              src={srcHero}
              alt="Character"
              className="w-[600px] h-[343px] absolute duration-700 transition-all"
            />
          </div>
          <div className="row-span-3 py-1 h-full">
            <AccountVehicle />
          </div>
          <div className="h-[400px] flex justify-center items-center  mt-10">
            <Vehicle
              fcarA={fcarA}
              fcarB={fcarB}
              fcarC={fcarC}
              fcarD={fcarD}
              fcarE={fcarE}
              fcarF={fcarF}
              fcarG={fcarG}
              fcarH={fcarH}
            />
          </div>

          <div
            id="detail-character"
            className="border border-white border-opacity-60 bg-opacity-50 bg-[#2e2925] backdrop-blur-sm rounded-[50px] col-span-2 h-[155px] self-end mb-4 z-10 px-5 py-2 opacity-0 translate-x-20 transition-all duration-500"
          ></div>
        </div>
      </div>
    </>
  );
}

export function SideMenu() {
  const [menuHeroOpacity, setMenuHeroOpacity] = useState("opacity-60");
  const [menuCarOpacity, setMenuCarOpacity] = useState("opacity-60");

  useEffect(() => {
    if (window.location.href.indexOf("/vehicle") > -1) {
      setMenuHeroOpacity("opacity-60");
      setMenuCarOpacity("opacity-100");
    } else {
      setMenuHeroOpacity("opacity-100");
      setMenuCarOpacity("opacity-60");
    }
  });
  return (
    <>
      <div className="flex flex-col items-center justify-evenly h-[717px] w-[66px] rounded-[50px] bg-[#2D2824] bg-opacity-80">
        <a href="/">
          <img
            src="/assets/img/home.png"
            alt="Home"
            className="w-[30px] opacity-50 hover:opacity-100 duration-150 rounded-[50px]"
          />
        </a>
        <Link to="/">
          <img
            src="/assets/img/menu.png"
            alt="Menu"
            className={`w-[30px] hover:opacity-100 duration-150 rounded-[50px] ${menuHeroOpacity}`}
          />
        </Link>
        <Link to="/vehicle">
          <img
            src="/assets/img/vehicle.png"
            alt="Console"
            className={`w-[30px] hover:opacity-100 duration-150 rounded-[50px] ${menuCarOpacity}`}
          />
        </Link>
        {/* <div className="cursor-pointer">
          <img
            src="/assets/img/user.png"
            alt="User"
            className="w-[30px] opacity-50 hover:opacity-100 duration-150 rounded-[50px]"
          />
        </div> */}
      </div>
    </>
  );
}

export function CharacterList({
  clickHeroA,
  clickHeroB,
  clickHeroC,
  clickHeroD,
  clickHeroE,
  clickHeroF,
  clickHeroG,
  clickHeroH,
}) {
  useEffect(() => {
    const character1 = document.getElementById("character1");
    const character2 = document.getElementById("character2");
    const character3 = document.getElementById("character3");
    const character4 = document.getElementById("character4");
    const character5 = document.getElementById("character5");
    const character6 = document.getElementById("character6");
    const character7 = document.getElementById("character7");
    const character8 = document.getElementById("character8");
    const search = document.getElementById("search");
    const judul = document.getElementById("judul");

    $(window).scroll(function () {
      let hT = $("#section2").offset().top,
        hH = $("#section2").outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop() + 350;
      if (wS > hT + hH - wH) {
        character1.classList.remove("opacity-0", "translate-x-56");
        character2.classList.remove("opacity-0", "translate-x-56");
        character3.classList.remove("opacity-0", "translate-x-56");
        character4.classList.remove("opacity-0", "translate-x-56");
        character5.classList.remove("opacity-0", "translate-x-56");
        character6.classList.remove("opacity-0", "translate-x-56");
        character7.classList.remove("opacity-0", "translate-x-56");
        character8.classList.remove("opacity-0", "translate-x-56");
        search.classList.remove("opacity-0", "-translate-y-40");
        judul.classList.remove("opacity-0");
      } else {
        character1.classList.add("opacity-0", "translate-x-56");
        character2.classList.add("opacity-0", "translate-x-56");
        character3.classList.add("opacity-0", "translate-x-56");
        character4.classList.add("opacity-0", "translate-x-56");
        character5.classList.add("opacity-0", "translate-x-56");
        character6.classList.add("opacity-0", "translate-x-56");
        character7.classList.add("opacity-0", "translate-x-56");
        character8.classList.add("opacity-0", "translate-x-56");
        search.classList.add("opacity-0", "-translate-y-40");
        judul.classList.add("opacity-0");
      }
    });
  });

  return (
    <>
      <div className="">
        <div
          id="search"
          className="w-[365px] h-[50px] rounded-[20px] border border-[#ffffff] border-opacity-60 bg-[#2E2925] bg-opacity-70 flex justify-between items-center pr-2 mx-auto opacity-0 -translate-y-40 transition-all duration-500"
        >
          <input
            type="text"
            placeholder="Character Name"
            className="w-[300px] h-[45px] rounded-[20px] bg-[#2E2925] bg-opacity-0 px-1"
          />
          <a href="#search">
            <img
              src="/assets/img/search.png"
              alt="Searc"
              className="w-[30px] h-auto opacity-60"
            />
          </a>
        </div>
        <h2
          id="judul"
          className="text-white font-semibold text-[15px] my-3 mx-14 opacity-0 duration-500 transition-all"
        >
          Top Character
        </h2>
        <div className="flex flex-wrap gap-4 h-[420px] overflow-scroll no-scrollbar justify-center">
          <div
            id="character1"
            className="cursor-pointer opacity-0 translate-x-56 duration-[700ms] transition-all"
            onMouseEnter={clickHeroA}
          >
            <Character
              src={"/assets/img/character-a.png"}
              name={"Albatros"}
              star={5}
            />
          </div>
          <div
            id="character2"
            className="cursor-pointer opacity-0 translate-x-56 duration-[800ms] transition-all"
            onMouseEnter={clickHeroB}
          >
            <Character
              src={"/assets/img/character-b.png"}
              name={"Breaker"}
              star={4}
            />
          </div>
          <div
            id="character3"
            className="cursor-pointer opacity-0 translate-x-56 duration-[900ms] transition-all"
            onMouseEnter={clickHeroC}
          >
            <Character
              src={"/assets/img/character-c.png"}
              name={"Footslam"}
              star={3}
            />
          </div>
          <div
            id="character4"
            className="cursor-pointer opacity-0 translate-x-56 duration-[1000ms] transition-all"
            onMouseEnter={clickHeroD}
          >
            <Character
              src={"/assets/img/character-d.png"}
              name={"Schizo"}
              star={5}
            />
          </div>
          <div
            id="character5"
            className="cursor-pointer opacity-0 translate-x-56 duration-[1200ms] transition-all"
            onMouseEnter={clickHeroE}
          >
            <Character
              src={"/assets/img/character-e.png"}
              name={"Ironsides"}
              star={4}
            />
          </div>
          <div
            id="character6"
            className="cursor-pointer opacity-0 translate-x-56 duration-[1200ms] transition-all"
            onMouseEnter={clickHeroF}
          >
            <Character
              src={"/assets/img/character-f.png"}
              name={"Geronimo"}
              star={5}
            />
          </div>
          <div
            id="character7"
            className="cursor-pointer opacity-0 translate-x-56 duration-[1300ms] transition-all"
            onMouseEnter={clickHeroG}
          >
            <Character
              src={"/assets/img/character-g.png"}
              name={"Doz Killer"}
              star={4}
            />
          </div>
          <div
            id="character8"
            className="cursor-pointer opacity-0 translate-x-56 duration-[1400ms] transition-all"
            onMouseEnter={clickHeroH}
          >
            <Character
              src={"/assets/img/character-h.png"}
              name={"Zelda"}
              star={5}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export function Character({ src, name, star }) {
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
      <div className="w-[175px] h-[201px] rounded-[30px] border border-white border-opacity-60 bg-[#2E2925] bg-opacity-70 relative flex justify-center">
        <img src={src} alt={name} className="h-[200px] mx-auto absolute" />
        <div className="w-full h-[70px] rounded-t-[10px] rounded-b-[30px] bg-[#322c29] bg-opacity-50 self-end z-10 flex flex-col justify-center items-center backdrop-blur-sm border-t-2 border-[#322c29] border-opacity-10">
          <h3 className="font-bold text-[15px] text-white">{name}</h3>
          <div className="w-full flex justify-center gap-0.5">{stars}</div>
        </div>
      </div>
    </>
  );
}

export function Account() {
  useEffect(() => {
    const profile = document.getElementById("profile");

    $(window).scroll(function () {
      let hT = $("#section2").offset().top,
        hH = $("#section2").outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop() + 350;
      if (wS > hT + hH - wH) {
        profile.classList.remove("opacity-0", "scale-y-0", "-translate-y-56");
      } else {
        profile.classList.add("opacity-0", "scale-y-0", "-translate-y-56");
      }
    });
  });
  return (
    <>
      <div
        id="profile"
        className="w-full h-full flex flex-col justify-between border  rounded-[50px] origin-top scale-y-0 opacity-0 -translate-y-56 transition-all duration-[800ms]"
      >
        <div className="h-[240px] flex flex-col justify-evenly">
          <div className="w-full flex justify-between px-4">
            <h2 className="text-white font-semibold">My Account</h2>
            <a href="#menu">
              <img src="/assets/img/menu.png" alt="Menu" className="w-5 h-5" />
            </a>
          </div>
          <div>
            <img
              src="/assets/img/profile.jpg"
              alt="Profile"
              className="w-[80px] h-[80px] mx-auto rounded-full border-2 border-[#DA5E52]"
            />
          </div>
          <div className="flex justify-center gap-x-3 items-center flex-wrap">
            <p className="font-bold text-[15px] text-white">Varker Klay</p>
            <img
              src="/assets/img/arrow.png"
              alt="Arrow"
              className="h-[20px] rotate-90"
            />
            <p className="text-[10px] text-[#8C8888] font-bold w-full text-center">
              Player Newbie
            </p>
          </div>
          <div className="flex">
            <div className="w-1/2 flex flex-col justify-center items-center">
              <p className="text-[#DA5E52] text-[10px] font-bold">
                Highest Rank
              </p>
              <p className="text-[#8C8888] text-[10px] font-bold">Legends</p>
            </div>
            <div className="w-1/2 flex flex-col justify-center items-center">
              <p className="text-[#DA5E52] text-[10px] font-bold">Role Play</p>
              <p className="text-[#8C8888] text-[10px] font-bold">Mage</p>
            </div>
          </div>
        </div>
        <div className="h-[240px]">
          <a
            href="#profile"
            className="w-full flex items-center justify-between p-3 group"
          >
            <img
              src="/assets/img/user.png"
              alt="User"
              className="opacity-60 h-[20px] w-[20px] group-hover:opacity-100 duration-150"
            />
            <p className="font-bold text-[10px] text-[#8C8888] group-hover:text-white duration-150">
              Personal Info
            </p>
            <img
              src="/assets/img/arrow.png"
              alt="Arrow"
              className="opacity-60 h-[20px] group-hover:opacity-100 duration-150"
            />
          </a>
          <a
            href="#quest"
            className="w-full flex items-center justify-between p-3 group"
          >
            <img
              src="/assets/img/quest.png"
              alt="Quest"
              className="opacity-60 h-[20px] w-[20px] group-hover:opacity-100 duration-150"
            />
            <p className="font-bold text-[10px] text-[#8C8888] group-hover:text-white duration-150">
              Quest
            </p>
            <img
              src="/assets/img/arrow.png"
              alt="Arrow"
              className="opacity-60 h-[20px] group-hover:opacity-100 duration-150"
            />
          </a>
          <a
            href="#character"
            className="w-full flex items-center justify-between p-3 group"
          >
            <img
              src="/assets/img/hero.png"
              alt="Character"
              className="opacity-60 h-[20px] w-[20px] group-hover:opacity-100 duration-150"
            />
            <p className="font-bold text-[10px] text-[#8C8888] group-hover:text-white duration-150">
              Character
            </p>
            <img
              src="/assets/img/arrow.png"
              alt="Arrow"
              className="opacity-60 h-[20px] group-hover:opacity-100 duration-150"
            />
          </a>
          <a
            href="#awards"
            className="w-full flex items-center justify-between p-3 group"
          >
            <img
              src="/assets/img/awards.png"
              alt="Awards"
              className="opacity-60 h-[20px] w-[20px] group-hover:opacity-100 duration-150"
            />
            <p className="font-bold text-[10px] text-[#8C8888] group-hover:text-white duration-150">
              Awards
            </p>
            <img
              src="/assets/img/arrow.png"
              alt="Arrow"
              className="opacity-60 h-[20px] group-hover:opacity-100 duration-150"
            />
          </a>
        </div>
        <div className="h-[240px] flex flex-col items-center justify-end pb-5">
          <div className="w-[228px] h-[3px] rounded-md bg-[#8C8888]"></div>
          <a
            href="#setting"
            className="w-full flex items-center justify-between p-3 group"
          >
            <img
              src="/assets/img/setting.png"
              alt="Setting"
              className="opacity-60 h-[20px] w-[20px] group-hover:opacity-100 duration-150"
            />
            <p className="font-bold text-[10px] text-[#8C8888] group-hover:text-white duration-150">
              Setting
            </p>
            <img
              src="/assets/img/arrow.png"
              alt="Arrow"
              className="opacity-60 h-[20px] group-hover:opacity-100 duration-150"
            />
          </a>
          <a
            href="#help"
            className="w-full flex items-center justify-between p-3 group"
          >
            <img
              src="/assets/img/help.png"
              alt="Help & Center"
              className="opacity-60 h-[20px] w-[20px] group-hover:opacity-100 duration-150"
            />
            <p className="font-bold text-[10px] text-[#8C8888] group-hover:text-white duration-150">
              Help & Center
            </p>
            <img
              src="/assets/img/arrow.png"
              alt="Arrow"
              className="opacity-60 h-[20px] group-hover:opacity-100 duration-150"
            />
          </a>
          <a
            href="#logout"
            className="w-full flex items-center justify-between p-3 group"
          >
            <img
              src="/assets/img/logout.png"
              alt="logout"
              className="opacity-60 h-[20px] w-[20px] group-hover:opacity-100 duration-150"
            />
            <p className="font-bold text-[10px] text-[#8C8888] group-hover:text-white duration-150">
              Logout
            </p>
            <img
              src="/assets/img/arrow.png"
              alt="Arrow"
              className="opacity-60 h-[20px] group-hover:opacity-100 duration-150"
            />
          </a>
        </div>
      </div>
    </>
  );
}

export function AccountVehicle() {
  return (
    <>
      <div
        id="profile"
        className="w-full h-full flex flex-col justify-between border  rounded-[50px]"
      >
        <div className="h-[240px] flex flex-col justify-evenly">
          <div className="w-full flex justify-between px-4">
            <h2 className="text-white font-semibold">My Account</h2>
            <a href="#menu">
              <img src="/assets/img/menu.png" alt="Menu" className="w-5 h-5" />
            </a>
          </div>
          <div>
            <img
              src="/assets/img/profile.jpg"
              alt="Profile"
              className="w-[80px] h-[80px] mx-auto rounded-full border-2 border-[#DA5E52]"
            />
          </div>
          <div className="flex justify-center gap-x-3 items-center flex-wrap">
            <p className="font-bold text-[15px] text-white">Varker Klay</p>
            <img
              src="/assets/img/arrow.png"
              alt="Arrow"
              className="h-[20px] rotate-90"
            />
            <p className="text-[10px] text-[#8C8888] font-bold w-full text-center">
              Player Newbie
            </p>
          </div>
          <div className="flex">
            <div className="w-1/2 flex flex-col justify-center items-center">
              <p className="text-[#DA5E52] text-[10px] font-bold">
                Highest Rank
              </p>
              <p className="text-[#8C8888] text-[10px] font-bold">Legends</p>
            </div>
            <div className="w-1/2 flex flex-col justify-center items-center">
              <p className="text-[#DA5E52] text-[10px] font-bold">Role Play</p>
              <p className="text-[#8C8888] text-[10px] font-bold">Mage</p>
            </div>
          </div>
        </div>
        <div className="h-[240px]">
          <a
            href="#profile"
            className="w-full flex items-center justify-between p-3 group"
          >
            <img
              src="/assets/img/user.png"
              alt="User"
              className="opacity-60 h-[20px] w-[20px] group-hover:opacity-100 duration-150"
            />
            <p className="font-bold text-[10px] text-[#8C8888] group-hover:text-white duration-150">
              Personal Info
            </p>
            <img
              src="/assets/img/arrow.png"
              alt="Arrow"
              className="opacity-60 h-[20px] group-hover:opacity-100 duration-150"
            />
          </a>
          <a
            href="#quest"
            className="w-full flex items-center justify-between p-3 group"
          >
            <img
              src="/assets/img/quest.png"
              alt="Quest"
              className="opacity-60 h-[20px] w-[20px] group-hover:opacity-100 duration-150"
            />
            <p className="font-bold text-[10px] text-[#8C8888] group-hover:text-white duration-150">
              Quest
            </p>
            <img
              src="/assets/img/arrow.png"
              alt="Arrow"
              className="opacity-60 h-[20px] group-hover:opacity-100 duration-150"
            />
          </a>
          <a
            href="#character"
            className="w-full flex items-center justify-between p-3 group"
          >
            <img
              src="/assets/img/hero.png"
              alt="Character"
              className="opacity-60 h-[20px] w-[20px] group-hover:opacity-100 duration-150"
            />
            <p className="font-bold text-[10px] text-[#8C8888] group-hover:text-white duration-150">
              Character
            </p>
            <img
              src="/assets/img/arrow.png"
              alt="Arrow"
              className="opacity-60 h-[20px] group-hover:opacity-100 duration-150"
            />
          </a>
          <a
            href="#awards"
            className="w-full flex items-center justify-between p-3 group"
          >
            <img
              src="/assets/img/awards.png"
              alt="Awards"
              className="opacity-60 h-[20px] w-[20px] group-hover:opacity-100 duration-150"
            />
            <p className="font-bold text-[10px] text-[#8C8888] group-hover:text-white duration-150">
              Awards
            </p>
            <img
              src="/assets/img/arrow.png"
              alt="Arrow"
              className="opacity-60 h-[20px] group-hover:opacity-100 duration-150"
            />
          </a>
        </div>
        <div className="h-[240px] flex flex-col items-center justify-end pb-5">
          <div className="w-[228px] h-[3px] rounded-md bg-[#8C8888]"></div>
          <a
            href="#setting"
            className="w-full flex items-center justify-between p-3 group"
          >
            <img
              src="/assets/img/setting.png"
              alt="Setting"
              className="opacity-60 h-[20px] w-[20px] group-hover:opacity-100 duration-150"
            />
            <p className="font-bold text-[10px] text-[#8C8888] group-hover:text-white duration-150">
              Setting
            </p>
            <img
              src="/assets/img/arrow.png"
              alt="Arrow"
              className="opacity-60 h-[20px] group-hover:opacity-100 duration-150"
            />
          </a>
          <a
            href="#help"
            className="w-full flex items-center justify-between p-3 group"
          >
            <img
              src="/assets/img/help.png"
              alt="Help & Center"
              className="opacity-60 h-[20px] w-[20px] group-hover:opacity-100 duration-150"
            />
            <p className="font-bold text-[10px] text-[#8C8888] group-hover:text-white duration-150">
              Help & Center
            </p>
            <img
              src="/assets/img/arrow.png"
              alt="Arrow"
              className="opacity-60 h-[20px] group-hover:opacity-100 duration-150"
            />
          </a>
          <a
            href="#logout"
            className="w-full flex items-center justify-between p-3 group"
          >
            <img
              src="/assets/img/logout.png"
              alt="logout"
              className="opacity-60 h-[20px] w-[20px] group-hover:opacity-100 duration-150"
            />
            <p className="font-bold text-[10px] text-[#8C8888] group-hover:text-white duration-150">
              Logout
            </p>
            <img
              src="/assets/img/arrow.png"
              alt="Arrow"
              className="opacity-60 h-[20px] group-hover:opacity-100 duration-150"
            />
          </a>
        </div>
      </div>
    </>
  );
}

export function Detail({
  nameHero,
  starHero,
  durabilityRate,
  offenseRate,
  abilityRate,
  difficultyRate,
}) {
  const stars = Array.from({ length: starHero }).map((_, index) => (
    <img
      key={index}
      src="/assets/img/star.png"
      alt="Star"
      className="w-[20px] h-[20px]"
    />
  ));

  return (
    <>
      <div className="px-4 flex flex-col gap-y-5">
        <div className="flex justify-between">
          <div className="flex gap-x-2">
            <h1 className="text-white text-[25px] font-bold">{nameHero}</h1>
            <div className="flex flex-row">{stars}</div>
          </div>
          <a
            href="#getcharacter"
            className="w-[209px] h-[50px] border border-b-[5px] border-[#E93830] text-white font-bold flex justify-center items-center rounded-[25px] bg-gradient-to-b from-[#efd0cf] to-[#E21000] hover:scale-105 duration-150"
          >
            Get Character
          </a>
        </div>
        <div className="w-full justify-evenly flex">
          <div className="flex flex-col items-center justify-evenly gap-3">
            <p className="text-[#E93830] font-bold text-[15px]">
              Durability :{" "}
              <span className="text-yellow-400">{durabilityRate}</span>
            </p>
            <div className="bg-[#D9D9D9] rounded-[10px] bg-opacity-80 h-[14px] w-[150px]">
              <div
                style={{ width: `${durabilityRate * 1.5}px` }}
                className={`h-[14px] bg-[#E93830] duration-700 transition-all rounded-[10px] bg-opacity-80`}
              ></div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-evenly gap-3">
            <p className="text-[#E93830] font-bold text-[15px]">
              Offense : <span className="text-yellow-400">{offenseRate}</span>
            </p>
            <div className="bg-[#D9D9D9] rounded-[10px] bg-opacity-80 h-[14px] w-[150px]">
              <div
                style={{ width: `${offenseRate * 1.5}px` }}
                className={`h-[14px] bg-[#E93830] duration-700 transition-all rounded-[10px] bg-opacity-80`}
              ></div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-evenly gap-3">
            <p className="text-[#E93830] font-bold text-[15px]">
              Ability Effects :{" "}
              <span className="text-yellow-400">{abilityRate}</span>
            </p>
            <div className="bg-[#D9D9D9] rounded-[10px] bg-opacity-80 h-[14px] w-[150px]">
              <div
                style={{ width: `${abilityRate * 1.5}px` }}
                className={`h-[14px] bg-[#E93830] duration-700 transition-all rounded-[10px] bg-opacity-80`}
              ></div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-evenly gap-3">
            <p className="text-[#E93830] font-bold text-[15px]">
              Difficulty :{" "}
              <span className="text-yellow-400">{difficultyRate}</span>
            </p>
            <div className="bg-[#D9D9D9] rounded-[10px] bg-opacity-80 h-[14px] w-[150px]">
              <div
                style={{ width: `${difficultyRate * 1.5}px` }}
                className={`h-[14px] bg-[#E93830] duration-700 transition-all rounded-[10px] bg-opacity-80`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function SelectedHero() {
  const value = {
    durability: {
      albatros: "80",
      breaker: "90",
      footslam: "50",
      schizo: "85",
      ironsides: "85",
      geronimo: "75",
      dozkiller: "65",
      zelda: "95",
    },
    offense: {
      albatros: "75",
      breaker: "80",
      footslam: "85",
      schizo: "80",
      ironsides: "70",
      geronimo: "80",
      dozkiller: "80",
      zelda: "80",
    },
    ability: {
      albatros: "90",
      breaker: "75",
      footslam: "60",
      schizo: "75",
      ironsides: "65",
      geronimo: "75",
      dozkiller: "75",
      zelda: "75",
    },
    difficulty: {
      albatros: "60",
      breaker: "60",
      footslam: "70",
      schizo: "70",
      ironsides: "70",
      geronimo: "80",
      dozkiller: "80",
      zelda: "90",
    },
  };
  const { src, name, star } = useParams();
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
      <div className="min-h-screen bg-section2 rounded-[30px]">
        <img
          src={`/assets/img/${src}`}
          alt={name}
          className="mx-auto w-[354px] h-[541px] mt-[30px]"
        />
        <div className="w-full h-[318px] rounded-t-[20px] bg-[#8C8888] backdrop-blur-sm fixed bottom-0 bg-opacity-50 p-8">
          <div className="w-[103px] mx-auto bg-[#D9D9D9] border-2 border-[#D9D9D9] rounded-md"></div>
          <div className="text-[20px] font-bold text-white text-center mt-5">
            {name.toUpperCase()}
          </div>
          <div className="w-full flex justify-center">{stars}</div>
          <div className="grid grid-rows-2 grid-flow-col gap-7 justify-center items-center py-4">
            <div className="flex flex-col justify-center items-center">
              <span className="text-[15px] text-[#E93830] font-bold">
                Durability{" "}
                <span className="text-yellow-400">
                  {value.durability[name]}
                </span>
              </span>
              <div className="w-[100px] h-[9px] rounded-[5px] bg-[#D9D9D9]">
                <div
                  style={{ width: `${value.durability[name]}px` }}
                  className={`h-[9px] rounded-[5px] bg-[#E93830]`}
                ></div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <span className="text-[15px] text-[#E93830] font-bold">
                Offense{" "}
                <span className="text-yellow-400">{value.offense[name]}</span>
              </span>
              <div className="w-[100px] h-[9px] rounded-[5px] bg-[#D9D9D9]">
                <div
                  style={{ width: `${value.offense[name]}px` }}
                  className={`h-[9px] rounded-[5px] bg-[#E93830]`}
                ></div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <span className="text-[15px] text-[#E93830] font-bold">
                Ability Effects{" "}
                <span className="text-yellow-400">{value.ability[name]}</span>
              </span>
              <div className="w-[100px] h-[9px] rounded-[5px] bg-[#D9D9D9]">
                <div
                  style={{ width: `${value.ability[name]}px` }}
                  className={`h-[9px] rounded-[5px] bg-[#E93830]`}
                ></div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <span className="text-[15px] text-[#E93830] font-bold">
                Difficulty{" "}
                <span className="text-yellow-400">
                  {value.difficulty[name]}
                </span>
              </span>
              <div className="w-[100px] h-[9px] rounded-[5px] bg-[#D9D9D9]">
                <div
                  style={{ width: `${value.difficulty[name]}px` }}
                  className={`h-[9px] rounded-[5px] bg-[#E93830]`}
                ></div>
              </div>
            </div>
          </div>
          <a
            href="#get-character"
            className="w-[209px] h-[50px] rounded-[25px] bg-gradient-to-b from-[#EFD0CF] to-[#E21000] border border-[#E93830] text-white font-bold text-[20px] flex justify-center items-center mx-auto mt-3"
          >
            Get Character
          </a>
        </div>
      </div>
    </>
  );
}
