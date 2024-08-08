import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { FiSearch } from "react-icons/fi";
import { BiSolidOffer } from "react-icons/bi";
import { MdHelpOutline } from "react-icons/md";
import { LiaSignOutAltSolid } from "react-icons/lia";
import { CiShoppingCart } from "react-icons/ci";

export default function Header() {
  const [toggle, settoggle] = useState(false);
   const [liHover, setliHover] = useState(false);

  const showSideMenu = () => {
    settoggle(true);
  };
  const hideSideMenu = (e) => {
    settoggle(false);
  };

  const navLinks = [
    {
      icons: <FiSearch />,
      name: "Search",
    },
    {
      icons: <BiSolidOffer />,
      name: "Offers",
      sup:"new",
    },
    {
      icons: <MdHelpOutline />,
      name: "Help",
    },
    {
      icons: <LiaSignOutAltSolid />,
      name: "SignIn",
    },
    {
      icons: <CiShoppingCart />,
      name: "Cart",
      sup:"0",
    },
  ];

  return (
    <>
      <div
        className="black-overlay w-full h-full fixed duration-500"
        onClick={hideSideMenu}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="h-full w-[35%] bg-white duration-[300ms]"
          style={{
            left: toggle ? "0%" : "-100%",
          }}
        ></div>
      </div>

      <header className="p-[15px] shadow-xl text-[#686b78] z-1 border-b border-b-[rgb(0,0,0,0.5)] border-b-[2px] ">
        <div className="mx-w-[1200px] mx-auto flex items-center gap-4">
          <div className="w-[50px] ">
            <img
              src="../public/images/swiggylogoSecond.png"
              alt="swiggy-logo"
              className="w-full"
            />
          </div>
          <div className=" cursor-pointer">
            <span className="font-bold  border-b-[2px]  text-[0.9rem] text-[black]  hover:text-[rgb(0,0,0,0.6)] mr-[8px]">
              Others
            </span>
            <RxCaretDown
              onClick={showSideMenu}
              fontSize={25}
              className="inline text-[#fc8019] duration-500 hover:text-[Black] hover:font-extrabold "
            />
          </div>

          <nav className=" flex list-none gap-5 ml-auto font-semibold text-[18px] mr-[20px] ">
            <ul className="flex items-center gap-5 ">
              {navLinks.map((navLink, index) => (
                <li key={index} className=" cursor-pointer flex items-center gap-[10px] " 
                onMouseEnter={()=>setliHover(index)}
                onMouseLeave={()=>setliHover(false)}
                 style={{
                    color:liHover === index ? '#fc8019' :'#686b78'
                }}>
                  {navLink.icons}
                  {navLink.name}
                  <sup className="" style={{
                      color:liHover === index ? '#6bd06b': '#fc8019',
                      fontSize:liHover === index ? '13px' : '10px',
                      opacity:toggle ? 0 : 1,
                      visibility: toggle ? "hidden" : "visible",

                  }}>{navLink.sup}</sup>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

