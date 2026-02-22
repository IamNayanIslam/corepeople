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
import type { JSX } from "react";

const SideBar = () => {
    const menueItems: {
        id: string,
        label: string,
        path: string,
        icon: JSX.Element
    }[] = [
        {id: "dashboard",
            label: "dashboard",
            path: "/",
            icon: <IoHomeOutline />

        },
        {id: "today",
            label: "today",
            path: "/today",
            icon: <HiOutlineBolt />
        },
        {id: "presence",
            label: "presence",
            path: "/presence",
            icon: <RiRobot2Line />

        },
        {id: "leaves",
            label: "leaves",
            path: "/leaves",
            icon: <LuTreePalm />

        },
        {id: "accesses",
            label: "accesses",
            path: "/accesses",
            icon: <GoUnlock />
        },
        {id: "expenses",
            label: "expenses",
            path: "/expenses",
            icon: <CiWallet />

        },
        {id: "year in review",
            label: "year in review",
            path: "/yearinreview",
            icon: <MdOutlineDateRange />

        }
    ]
  return (
        <div className="flex flex-col p-2 bg-slate-50 h-screen">
        <div className="flex gap-2 items-center mb-4 p-2 rounded-md hover:bg-gray-100">
            <div className="text-4xl text-amber-400">
                <SiSemanticuireact />
            </div>

            <div className="flex flex-col items-start justify-center">
                <p className="font-medium text-sm">CorePeople</p>
                <p className="truncate text-xs">@nCoded Solutions</p>
            </div>
        </div>
        <ul className="flex flex-col gap-1">
            {
                menueItems.map((item)=> <li className="capitalize text-sm p-2 rounded-md hover:bg-gray-100" key={item.id}><NavLink className="flex gap-1 items-center" to={item.path}>{item.icon}{item.label}</NavLink></li>)
            }
        </ul>
        <div className="flex-1">

        </div>
        <div className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-md">
            <div className="w-[32px] h-[32px] rounded-xl bg-gray-200"></div>
            <div>
                <p className="font-medium text-sm">User Name</p>
                <p className="text-xs">user@corepeople.com</p>
            </div>
            <RiArrowUpDownLine />

        </div>
    </div>
  )
}

export default SideBar