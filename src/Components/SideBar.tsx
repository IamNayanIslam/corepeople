import { SiSemanticuireact } from "react-icons/si";
import { NavLink } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { HiOutlineBolt } from "react-icons/hi2";
import { LuTreePalm } from "react-icons/lu";
import { RiRobot2Line } from "react-icons/ri";
import { GoUnlock } from "react-icons/go";
import { CiWallet } from "react-icons/ci";
import { MdOutlineDateRange } from "react-icons/md";
import { RiArrowUpDownLine } from "react-icons/ri";
import { useContext, type JSX } from "react";
import { SidebarContext } from "../Contexts/SidebarContext";

const SideBar = () => {
  const { sidebarState, sidebarDispatch } = useContext(SidebarContext);
  const menueItems: {
    id: string;
    label: string;
    path: string;
    icon: JSX.Element;
  }[] = [
    { id: "dashboard", label: "dashboard", path: "/", icon: <IoHomeOutline /> },
    { id: "today", label: "today", path: "/today", icon: <HiOutlineBolt /> },
    {
      id: "presence",
      label: "presence",
      path: "/presence",
      icon: <RiRobot2Line />,
    },
    { id: "leaves", label: "leaves", path: "/leaves", icon: <LuTreePalm /> },
    {
      id: "accesses",
      label: "accesses",
      path: "/accesses",
      icon: <GoUnlock />,
    },
    {
      id: "expenses",
      label: "expenses",
      path: "/expenses",
      icon: <CiWallet />,
    },
    {
      id: "year in review",
      label: "year in review",
      path: "/yearinreview",
      icon: <MdOutlineDateRange />,
    },
  ];
  return (
    <>
      {sidebarState.isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => sidebarDispatch({ type: "TOGGLE_IS_MOBILE_OPEN" })}
        ></div>
      )}
      <div
        className={`
    flex flex-col p-2 bg-slate-50 min-h-[100dvh] overflow-hidden border-r-2 border-r-gray-100 transition-all duration-200 ease-linear
    fixed md:relative z-50 ${sidebarState.isMobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"} ${sidebarState.isCollapsed ? "md:w-20 items-center" : "md:w-64"}
  `}
      >
        <div
          className={`flex items-center gap-2 p-2 hover:bg-slate-100 rounded-md`}
        >
          <div className="text-4xl text-amber-400">
            <SiSemanticuireact />
          </div>

          {(!sidebarState.isCollapsed || sidebarState.isMobileOpen) && (
            <div className="flex flex-col items-start justify-center">
              <p className="font-medium text-sm">CorePeople</p>
              <p className="truncate text-xs">@nCoded Solutions</p>
            </div>
          )}
        </div>
        <ul className="flex flex-col gap-1">
          {menueItems.map((item) => (
            <li
              className="capitalize text-md p-2 rounded-md hover:bg-gray-100"
              key={item.id}
            >
              <NavLink className="flex items-center" to={item.path}>
                <span
                  className={`text-xl shrink-0 ${sidebarState.isCollapsed ? "mx-auto" : "mr-3"}`}
                >
                  {item.icon}
                </span>

                {!sidebarState.isCollapsed && (
                  <span className="whitespace-nowrap transition-all duration-300">
                    {item.label}
                  </span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="flex-1"></div>
        <div className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-md">
          <div className="w-[32px] h-[32px] rounded-xl bg-gray-200"></div>
          {(!sidebarState.isCollapsed || sidebarState.isMobileOpen) && (
            <div>
              <p className="font-medium text-sm">User Name</p>
              <p className="text-xs">user@corepeople.com</p>
            </div>
          )}
          {(!sidebarState.isCollapsed || sidebarState.isMobileOpen) && (
            <RiArrowUpDownLine className="ml-auto" />
          )}
        </div>
      </div>
    </>
  );
};

export default SideBar;
