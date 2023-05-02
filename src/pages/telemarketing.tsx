import TelemarketingBarChart1 from "@/components/dashboard/TelemarketingBarChart1";
import TelemarketingBarChart2 from "@/components/dashboard/TelemarketingBarChart2";
import TelemarketingSidebar from "@/components/dashboard/TelemarketingSidebar";
import MobileSidebar from "@/components/reusable/MobileSidebar";
import TelemarketingMobileSidebar from "@/components/reusable/TelemarketingMobileSidebar";
import {
  useMediaQuery,
} from "@chakra-ui/react";
import { Select } from "@chakra-ui/select";
import Head from "next/head";
import React, { useState } from "react";

function telemarketing() {
  const [isMobile] = useMediaQuery("(max-width: 767px)");
  const [isOpen, setIsOpen] = useState(false);
  const onOpen = () => {
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex w-full">
      <Head>
        <title>Telemarketing Dashboard</title>
      </Head>
      {!isMobile && <TelemarketingSidebar />}
      <div className="bg-[#F1F4FA] w-full tabanddesk:h-screen flex justify-center">
        <div className="w-full flex flex-col items-center">
          <div className="bg-white tabanddesk:px-10 mobile:pl-[16px] mobile:pr-[16px] pt-3 pb-3 w-full flex justify-between">
            <img width={120} src="../logo.svg" alt="" />
            <img src="../avatar.svg" alt="" />
          </div>
          <div className="w-full max-w-custom1500 tabanddesk:px-10 mobile:pl-[16px] mobile:pr-[16px]  bg-[#F1F4FA] h-full mt-5">
            <div className="tabanddesk:hidden">
              <div className="flex items-center mb-10">
                <img onClick={onOpen} src="../menu.svg" alt="Menu Icon" />
                <h1 className="ml-5 font-gola text-2xl font-bold">Dashboard</h1>
              </div>
            </div>
            <div className="flex justify-between">
              <h1 className="mobile:hidden font-gola text-2xl font-bold">
                Dashboard
              </h1>
              <div className="flex mobile:row-reverse mobile:w-full tabanddesk:w-2/5">
                <div className="w-full">
                  <Select bg="white">
                    <option value="option1">2023</option>
                    <option value="option2">2022</option>
                    <option value="option3">2021</option>
                  </Select>
                </div>
              </div>
            </div>
          
            <div className="grid desktop:grid-cols-2 gap-2 mt-5">
              <div className="w-full px-3 pl-5 py-5 block bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                <h1 className="font-gola font-sm uppercase font-semibold">
                CALLED VS ANSWERED 
                </h1>
                <TelemarketingBarChart1 />
              </div>
              <div className="w-full px-3 pl-5 py-5 block bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                <h1 className="font-gola font-sm uppercase font-semibold">
                  CONVERTED VS SUCCESSFUL
                </h1>
                <TelemarketingBarChart2 />
              </div>
            </div>
          </div>
        </div>
      </div>
      <TelemarketingMobileSidebar isOpen={isOpen} onClose={onClose} />
    </div>
  );
}

export default telemarketing;
