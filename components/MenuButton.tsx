import React from 'react';
interface MenuButtonProps {
  isMenu: boolean;
  setIsMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

function MenuButton({ isMenu, setIsMenu }: MenuButtonProps) {
  return (
    <div
      className="relative z-50 flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-gradient-to-bl from-primary via-secondary to-background lg:hidden"
      onClick={() => {
        setIsMenu(!isMenu);
      }}
    >
      <div
        className={`group z-50  flex h-8 w-8 cursor-pointer flex-col items-center  justify-center gap-[3px]  rounded-full bg-black text-white transition-all duration-300 active:bg-black lg:hidden lg:hover:bg-black ${
          isMenu && ' bg-black'
        }`}
      >
        <div
          className={`h-[2px] w-[13.81px] rounded-full bg-white transition-all duration-300 lg:group-hover:bg-black ${
            isMenu && 'translate-y-[4.5px] -rotate-45 bg-black'
          }`}
        />
        <div
          className={`h-[2px] w-[13.81px] rounded-full bg-white transition-all duration-300 lg:group-hover:bg-black ${
            isMenu && 'rotate-45 bg-black'
          }`}
        />
        <div
          className={`h-[2px] w-[13.81px] rounded-full bg-white transition-all duration-300 lg:group-hover:bg-black ${
            isMenu && '-translate-y-[6px] rotate-45 bg-black'
          }`}
        />
      </div>
    </div>
  );
}

export default MenuButton;
