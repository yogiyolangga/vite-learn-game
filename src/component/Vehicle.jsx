export const Vehicle = ({
  fcarA,
  fcarB,
  fcarC,
  fcarD,
  fcarE,
  fcarF,
  fcarG,
  fcarH,
}) => {
  return (
    <>
      <div className="w-full flex flex-wrap justify-evenly gap-3 z-20">
        <div className="cursor-pointer" onMouseEnter={fcarA}>
          <Vehicles src={"car-a.png"} />
        </div>
        <div className="cursor-pointer" onMouseEnter={fcarB}>
          <Vehicles src={"car-b.png"} />
        </div>
        <div className="cursor-pointer" onMouseEnter={fcarC}>
          <Vehicles src={"car-c.png"} />
        </div>
        <div className="cursor-pointer" onMouseEnter={fcarD}>
          <Vehicles src={"car-d.png"} />
        </div>
        <div className="cursor-pointer" onMouseEnter={fcarE}>
          <Vehicles src={"car-e.png"} />
        </div>
        <div className="cursor-pointer" onMouseEnter={fcarF}>
          <Vehicles src={"car-f.png"} />
        </div>
        <div className="cursor-pointer" onMouseEnter={fcarG}>
          <Vehicles src={"car-g.png"} />
        </div>
        <div className="cursor-pointer" onMouseEnter={fcarH}>
          <Vehicles src={"car-h.png"} />
        </div>
      </div>
    </>
  );
};

export function Vehicles({ src }) {
  return (
    <>
      <div className="w-[200px] h-[140px] rounded-[30px] border border-white border-opacity-60 bg-[#2E2925] bg-opacity-70 relative flex justify-center">
        <img
          src={`/assets/img/${src}`}
          alt="Vehicle"
          className="h-[160px] mx-auto absolute"
        />
      </div>
    </>
  );
}
