import { VscLayoutSidebarLeftOff } from "react-icons/vsc";
import { MdArrowForwardIos } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { SidebarContext } from "../Contexts/SidebarContext";


const Header = () => {
    const {sidebarDispatch} = useContext(SidebarContext);

    const toggleSidebar = () =>{
        sidebarDispatch({type: "TOGGLE_IS_COLLAPSED"})
    }
    const location = useLocation();

    const pathname = location.pathname;

    const getPath = (path: string): string => {
        switch (path) {
            case "/":
                return "Dashboard";
            case "/today":
                return "Today";
            case "/leaves":
                return "Leaves";
            case "/presence":
                return "Presence";
            case "/accesses":
                return "Accesses";
            case "/expenses":
                return "Expenses";
            case "/yearinreview":
                return "Year In Review";
            case "/account/profile":
                return "";
            default:
                return path;
        }
    }
    
  return (
    <div className="flex gap-4 px-4 py-6">
       <button onClick={toggleSidebar}> <VscLayoutSidebarLeftOff /></button>
       <p className="capitalize flex gap-2 items-center">User name <MdArrowForwardIos /> {getPath(pathname)}</p>
    </div>
  )
}

export default Header