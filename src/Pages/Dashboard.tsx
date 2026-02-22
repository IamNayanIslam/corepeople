import type { JSX } from "react";
import Header from "../Components/Header";
import SideBar from "../Components/SideBar";
import { LuTreePalm } from "react-icons/lu";
import { GoUnlock } from "react-icons/go";
import { CiWallet } from "react-icons/ci";
import { TbArrowsUpDown } from "react-icons/tb";
import { DiVim } from "react-icons/di";

const Dashboard = () => {
  const requests: {
    id: string;
    label: string;
    icon: JSX.Element;
  }[] = [
    {
      id: "leave",
      label: "request leave",
      icon: <LuTreePalm />,
    },
    {
      id: "accesses",
      label: "request accesses",
      icon: <GoUnlock />,
    },
    {
      id: "expenses",
      label: "request expenses",
      icon: <CiWallet />,
    },
    {
      id: "late-early",
      label: "Late Arival/Early Departure",
      icon: <TbArrowsUpDown />,
    },
  ];

  return (
    <div className="flex bg-white">
      <SideBar />
      <main className="w-full flex flex-col">
        <Header />
        <div className="m-4 bg-gray-100 rounded-xl p-4 flex-1">
          <div className="space-y-6">
            <div className="bg-white w-full rounded-xl flex flex-col md:flex-row justify-center md:justfity-between p-4 gap-4">
              {requests.map((request) => (
                <div
                  className="flex flex-col justify-center items-center px-6 py-4 rounded-xl border-2 border-gray-200 w-full md:w-1/6 transition-all duration-300 hover:bg-gray-100"
                  key={request.id}
                >
                  <p className="text-center">{request.icon}</p>
                  <p className="text-center capitalize">{request.label}</p>
                </div>
              ))}
            </div>
            <div className="flex gap-4">
              <div className="w-1/2 rounded-xl bg-white shadow-xl"></div>
              <div className="w-1/2 rounded-xl bg-white shadow-xl"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
