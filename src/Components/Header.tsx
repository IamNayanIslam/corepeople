import { VscLayoutSidebarLeftOff } from "react-icons/vsc";
import { MdArrowForwardIos } from "react-icons/md";
import { useLocation } from "react-router-dom";


const Header = () => {
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
            default:
                return path;
        }
    }
    
  return (
    <div>
       <button> <VscLayoutSidebarLeftOff /></button>
       <p className="capitalize">User name <MdArrowForwardIos /> {getPath(pathname)}</p>
    </div>
  )
}

export default Header