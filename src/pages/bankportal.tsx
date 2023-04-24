import BarChart1 from "@/components/dashboard/BarChart1";
import BarChart2 from "@/components/dashboard/BarChart2";
import BarChart3 from "@/components/dashboard/BarChart3";
import Sidebar from "@/components/dashboard/Sidebar";
import { Select } from "@chakra-ui/select";
import Head from "next/head";
import React from "react";

function dashboard() {
  return (
    <div className="flex w-full">
      <Head>
        <title>Bankportal Dashboard</title>
      </Head>
      <Sidebar />
      <div className="bg-[#F1F4FA] w-full flex justify-center">
        <div className="w-full flex flex-col items-center">
          <div className="bg-white px-10 pt-3 pb-3 w-full flex justify-between">
            <img width={120} src="../logo.svg" alt="" />
            <img src="../avatar.svg" alt="" />
          </div>
          <div className="w-full px-10 bg-[#F1F4FA] h-full mt-5">
            <div className="flex justify-between">
              <h1 className="font-gola text-2xl font-bold">Dashboard</h1>
              <div className="flex w-2/5">
                <div className="w-full">
                  <Select bg="white">
                    <option selected value="option1">
                      2023
                    </option>
                    <option value="option2">2022</option>
                    <option value="option3">2021</option>
                  </Select>
                </div>
                <div className="w-full" style={{ marginLeft: "1rem" }}>
                  <Select bg="white">
                    <option selected value="option1">
                      Yearly
                    </option>
                    <option value="option2">Monthly</option>
                    <option value="option3">Weekly</option>
                  </Select>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-5 mt-7">
              <div className="block max-w-sm px-6 py-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-gola">All Offers</p>
                  <div className="flex items-center">
                    <h1 className="text-[20px] font-gola font-medium mr-3">
                      112
                    </h1>
                    <svg
                      width="9"
                      height="15"
                      viewBox="0 0 9 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.32666 12.9866L1.50666 14.1666L8.17333 7.49998L1.50666 0.833313L0.32666 2.01331L5.81333 7.49998L0.32666 12.9866Z"
                        fill="#C9C9C9"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="block max-w-sm px-6 py-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-gola">Outstanding Offers</p>
                  <div className="flex items-center">
                    <h1 className="text-[20px] font-gola font-medium mr-3">
                      21
                    </h1>
                    <svg
                      width="9"
                      height="15"
                      viewBox="0 0 9 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.32666 12.9866L1.50666 14.1666L8.17333 7.49998L1.50666 0.833313L0.32666 2.01331L5.81333 7.49998L0.32666 12.9866Z"
                        fill="#C9C9C9"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="block max-w-sm px-6 py-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-gola">Not Yet Accepted</p>
                  <div className="flex items-center">
                    <h1 className="text-[20px] font-gola font-medium mr-3">
                      06
                    </h1>
                    <svg
                      width="9"
                      height="15"
                      viewBox="0 0 9 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.32666 12.9866L1.50666 14.1666L8.17333 7.49998L1.50666 0.833313L0.32666 2.01331L5.81333 7.49998L0.32666 12.9866Z"
                        fill="#C9C9C9"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="block max-w-sm px-6 py-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-gola">Accepted offers</p>
                  <div className="flex items-center">
                    <h1 className="text-[20px] font-gola font-medium mr-3">
                      06
                    </h1>
                    <svg
                      width="9"
                      height="15"
                      viewBox="0 0 9 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.32666 12.9866L1.50666 14.1666L8.17333 7.49998L1.50666 0.833313L0.32666 2.01331L5.81333 7.49998L0.32666 12.9866Z"
                        fill="#C9C9C9"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-5">
              <div className="px-3 pl-5 py-5 block bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                <h1 className="font-gola font-sm uppercase font-semibold">
                  Average Offer acceptance
                </h1>
                <BarChart1 />
              </div>
              <div className="px-3 pl-5 py-5 block bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                <div className="flex justify-between">
                  <h1 className="font-gola font-sm uppercase font-semibold">
                    Average Processing Time
                  </h1>
                  <p>23% higher than prev. year</p>
                </div>

                <BarChart2 />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-5 mb-5">
              <div className="px-3 pl-5 py-5 block bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                <h1 className="font-gola font-sm uppercase font-semibold">
                  Average - Offered time vs Accepted time
                </h1>
                <BarChart3 />
              </div>
              <div className="block px-6 py-3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default dashboard;
