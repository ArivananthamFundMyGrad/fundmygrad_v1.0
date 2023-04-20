import React, { useState } from "react";
import Head from "next/head";

function offers() {
  const [activeTab, setActiveTab] = useState("1");
  return (
    <div className="w-full flex justify-center">
      <Head>
        <title>Loan Offers</title>
      </Head>
      <div className="w-10/12 mt-5">
        <div style={{ height: "30px" }} className="w-full flex justify-between">
          <img width={100} src="../logo.svg" alt="" />
          <img src="../avatar.svg" alt="" />
        </div>
        <div className="flex items-center mt-10">
          <h1 className="font-gola text-[28px] font-bold">Loan Offers</h1>
          <div className="flex items-center bg-[#F0F0F0] p-1 rounded-md ml-10">
            <div
              onClick={() => setActiveTab("1")}
              className={`${
                activeTab === "1" ? "bg-white p-1.5 rounded-md" : "p-1.5"
              } cursor-pointer flex items-center`}
            >
              <div className="flex px-2">
                <h1 className="text-sm font-gola text-[#202020] pl-2">
                  All Offers &nbsp;
                  <span className="font-gola text-sm text-[#A3A3A3]">(28)</span>
                </h1>
                <h1 className="ml-[10px] text-[10px] font-gola text-[#6B37FF] bg-[#F8E2FF] px-[6px] py-[2px] rounded-lg">
                  7 New
                </h1>
              </div>
            </div>
            <div
              onClick={() => setActiveTab("2")}
              className={`${
                activeTab === "2" ? "bg-white p-1.5 rounded-md" : "p-1.5"
              } cursor-pointer flex items-center ml-3`}
            >
              <div className="flex px-2">
                <h1 className="text-sm font-gola text-[#202020]">
                  Applied &nbsp;
                  <span className="font-gola text-sm text-[#A3A3A3]">(03)</span>
                </h1>
                <h1 className="ml-[10px] text-[10px] font-gola text-[#FE4646] bg-[#FFE9E9] px-[6px] py-[2px] rounded-lg">
                  2!
                </h1>
              </div>
            </div>
          </div>
          <div className="ml-5 relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_56_3185)">
                  <rect
                    width="14"
                    height="14"
                    fill="white"
                    fill-opacity="0.01"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.47653 10.8907C8.49572 11.5892 7.29583 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6C12 7.29583 11.5892 8.49572 10.8907 9.47653L13.7071 12.2929C14.0976 12.6834 14.0976 13.3166 13.7071 13.7071C13.3166 14.0976 12.6834 14.0976 12.2929 13.7071L9.47653 10.8907ZM10 6C10 8.20914 8.20914 10 6 10C3.79086 10 2 8.20914 2 6C2 3.79086 3.79086 2 6 2C8.20914 2 10 3.79086 10 6Z"
                    fill="#6B778C"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_56_3185">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <input
              type="text"
              id="input-group-1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
              placeholder="Search"
            />
          </div>
          <div className="ml-5 relative">
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.70639 6.8275L10.9464 2.5875C11.0401 2.49454 11.1145 2.38394 11.1653 2.26208C11.216 2.14022 11.2422 2.00951 11.2422 1.8775C11.2422 1.74549 11.216 1.61478 11.1653 1.49292C11.1145 1.37107 11.0401 1.26046 10.9464 1.1675C10.759 0.98125 10.5056 0.876709 10.2414 0.876709C9.9772 0.876709 9.72375 0.98125 9.53639 1.1675L5.99639 4.7075L2.45639 1.1675C2.26903 0.98125 2.01557 0.876709 1.75139 0.876709C1.4872 0.876709 1.23375 0.98125 1.04639 1.1675C0.953708 1.26094 0.880383 1.37176 0.830618 1.49359C0.780853 1.61543 0.755629 1.74589 0.75639 1.8775C0.755629 2.00911 0.780853 2.13957 0.830618 2.26141C0.880382 2.38324 0.953708 2.49406 1.04639 2.5875L5.28639 6.8275C5.37935 6.92123 5.48995 6.99562 5.61181 7.04639C5.73367 7.09716 5.86438 7.1233 5.99639 7.1233C6.1284 7.1233 6.25911 7.09716 6.38097 7.04639C6.50282 6.99562 6.61343 6.92123 6.70639 6.8275Z"
                  fill="#989898"
                />
              </svg>
            </div>
            <input
              type="text"
              id="input-group-1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Latest"
            />
          </div>
          <div className="flex items-center ml-5">
            <input
              checked
              id="checked-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="checked-checkbox"
              className="ml-2 text-sm font-medium text-[#202020] font-gola"
            >
              No Collateral
            </label>
          </div>
        </div>
        <div>
          <div>
            <div className="flex">
              <img src="../axis.svg" alt="" />
              <div className="pl-4">
                <h1 className="text-[#292929] text-xl font-gola font-semibold">
                  Axis Bank
                </h1>
                <div className="flex">
                  <img src="../bolt.svg" alt="" />
                  <p className="text-xs font-gola text-[#2E2E2E]">
                    High Success Rate
                  </p>
                </div>
              </div>
            </div>
            <div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default offers;
