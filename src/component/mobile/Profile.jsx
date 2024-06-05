export const Profile = () => {
  return (
    <>
      <div id="profile" className="pt-4 pb-28 bg-section2 rounded-t-[50px] xl:hidden mt-3">
        <div className="flex justify-between px-5">
            <span className="text-[15px] font-bold text-white">My Account</span>
            <img src="../src/assets/img/menu.png" alt="Menu" className="w-[20px] h-[20px] opacity-80" />
        </div>
        <img src="../src/assets/img/profile.jpg" alt="Profile" className="h-[80px] w-[80px] rounded-[40px] border-2 border-[#E93830] my-2 mx-auto" />
        <span className="text-[15px] font-bold text-center block text-white">Varker Klay</span>
        <span className="text-[10px] text-[#8C8888] font-bold text-center w-full block">Player Newbie</span>
        <div className="flex justify-center py-3">
            <div className="flex flex-col w-1/3 items-center">
                <span className="text-[15px] font-bold text-[#E93830]">Rank</span>
                <span className="text-[10px] text-[#8C8888]">Master</span>
            </div>
            <div className="flex flex-col w-1/3 items-center">
                <span className="text-[15px] font-bold text-[#E93830]">Highest Rank</span>
                <span className="text-[10px] text-[#8C8888]">Legends</span>
            </div>
            <div className="flex flex-col w-1/3 items-center">
                <span className="text-[15px] font-bold text-[#E93830]">Role Play</span>
                <span className="text-[10px] text-[#8C8888]">Mage</span>
            </div>
        </div>
        <a href="#profile" className="flex justify-between px-3 mt-8">
            <div className="w-fit flex">
            <img src="../src/assets/img/user.png" alt="User" className="h-[20px] w-[20px]" />
            <span className="ml-3 font-bold text-[15px] text-[#FFFFFF]">Personal Info</span>
            </div>
            <img src="../src/assets/img/arrow.png" alt="Arrow" className="h-[20px] w-[11.56px]" />
        </a>
        <a href="#profile" className="flex justify-between px-3 mt-8">
            <div className="w-fit flex">
            <img src="../src/assets/img/quest.png" alt="User" className="h-[20px] w-[20px]" />
            <span className="ml-3 font-bold text-[15px] text-[#FFFFFF]">Quest</span>
            </div>
            <img src="../src/assets/img/arrow.png" alt="Arrow" className="h-[20px] w-[11.56px]" />
        </a>
        <a href="#profile" className="flex justify-between px-3 mt-8">
            <div className="w-fit flex">
            <img src="../src/assets/img/hero.png" alt="User" className="h-[20px] w-[20px]" />
            <span className="ml-3 font-bold text-[15px] text-[#FFFFFF]">Character</span>
            </div>
            <img src="../src/assets/img/arrow.png" alt="Arrow" className="h-[20px] w-[11.56px]" />
        </a>
        <a href="#profile" className="flex justify-between px-3 mt-8">
            <div className="w-fit flex">
            <img src="../src/assets/img/awards.png" alt="User" className="h-[20px] w-[20px]" />
            <span className="ml-3 font-bold text-[15px] text-[#FFFFFF]">Awards</span>
            </div>
            <img src="../src/assets/img/arrow.png" alt="Arrow" className="h-[20px] w-[11.56px]" />
        </a>
        <a href="#profile" className="flex justify-between px-3 mt-8">
            <div className="w-fit flex">
            <img src="../src/assets/img/setting.png" alt="User" className="h-[20px] w-[20px]" />
            <span className="ml-3 font-bold text-[15px] text-[#FFFFFF]">Setting</span>
            </div>
            <img src="../src/assets/img/arrow.png" alt="Arrow" className="h-[20px] w-[11.56px]" />
        </a>
        <a href="#profile" className="flex justify-between px-3 mt-8">
            <div className="w-fit flex">
            <img src="../src/assets/img/logout.png" alt="User" className="h-[20px] w-[20px]" />
            <span className="ml-3 font-bold text-[15px] text-[#FFFFFF]">Logout</span>
            </div>
            <img src="../src/assets/img/arrow.png" alt="Arrow" className="h-[20px] w-[11.56px]" />
        </a>
      </div>
    </>
  );
};
