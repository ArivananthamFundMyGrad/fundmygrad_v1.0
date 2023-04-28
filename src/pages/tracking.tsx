import Sidebar from "@/components/dashboard/Sidebar";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/tabs";
import Head from "next/head";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { useMediaQuery } from "@chakra-ui/react";
import MobileSidebar from "@/components/reusable/MobileSidebar";

function tracking() {
  const [isMobile] = useMediaQuery("(max-width: 767px)");
  const router = useRouter();
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
        <title>Tracking</title>
      </Head>
      {!isMobile && <Sidebar />}
      <div className="w-full flex justify-center">
        <div className="w-full min-h-screen flex flex-col items-center">
          <div className="bg-white px-10 pt-3 pb-3 w-full flex justify-between">
            <img width={120} src="../logo.svg" alt="" />
            <img src="../avatar.svg" alt="" />
          </div>
          <div className="w-full h-full p-[30px] bg-[#F2F2F2]">
            <div className="p-[15px] bg-white w-full h-full rounded-md">
            <div className="tabanddesk:hidden flex items-center mb-10">
              <img onClick={onOpen} src="../menu.svg" alt="Menu Icon" />
              <h1 className="ml-5 font-gola text-2xl font-bold">Tracking</h1>
            </div>
              <h1 className="mobile:hidden font-gola text-2xl font-bold mb-5">Tracking</h1>
              <Tabs>
                <TabList>
                  <Tab
                    _selected={{
                      color: "#0052CC",
                      borderBottom: "2px solid #0052CC",
                    }}
                  >
                    <h1 className="font-gola text-sm font-semibold">
                      1st Offer
                    </h1>
                  </Tab>
                  <Tab
                    _selected={{
                      color: "#0052CC",
                      borderBottom: "2px solid #0052CC",
                    }}
                  >
                    <h1 className="font-gola text-sm font-semibold">
                      2nd Offer
                    </h1>
                  </Tab>
                  <Tab
                    _selected={{
                      color: "#0052CC",
                      borderBottom: "2px solid #0052CC",
                    }}
                  >
                    <h1 className="font-gola text-sm font-semibold">
                      3rd Offer
                    </h1>
                  </Tab>
                </TabList>
                <TabPanels>
                  <TabPanel style={{ padding: "0" }}>
                    <div>
                      <div className="flex mt-5">
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 14 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0_56_3185)">
                                <rect
                                  width="14"
                                  height="14"
                                  fill="white"
                                  fillOpacity="0.01"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
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
                        <div className="flex items-center ml-5">
                          <input
                            id="checked-checkbox"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            htmlFor="checked-checkbox"
                            className="ml-2 text-sm font-medium text-[#202020] font-gola"
                          >
                            Show only ‘Accepted’
                          </label>
                        </div>
                      </div>
                      <div className="mobile:hidden tablet:hidden mt-10 relative overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-500">
                          <thead className="text-xs text-gray-700 uppercase border-b">
                            <tr>
                              <th scope="col" className=" px-6 py-3">
                                <div className="flex items-center">
                                  <h1 className="capitalize text-sm font-gola font-medium text-[#767676DE]/[.87] mr-3">
                                    Applicant Name
                                  </h1>
                                  <svg
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M12 6L10.9425 4.9425L6.75 9.1275V0H5.25V9.1275L1.065 4.935L0 6L6 12L12 6Z"
                                      fill="#767676"
                                      fillOpacity="0.87"
                                    />
                                  </svg>
                                </div>
                              </th>
                              <th scope="col" className=" px-6 py-3">
                                <div className="flex items-center">
                                  <h1 className="capitalize text-sm font-gola font-medium text-[#767676DE]/[.87] mr-3">
                                    Last Offer
                                  </h1>
                                  <svg
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M12 6L10.9425 4.9425L6.75 9.1275V0H5.25V9.1275L1.065 4.935L0 6L6 12L12 6Z"
                                      fill="#767676"
                                      fillOpacity="0.87"
                                    />
                                  </svg>
                                </div>
                              </th>
                              <th scope="col" className=" px-6 py-3">
                                <div className="flex items-center">
                                  <h1 className="capitalize text-sm font-gola font-medium text-[#767676DE]/[.87] mr-3">
                                    Documents
                                  </h1>
                                  <svg
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M12 6L10.9425 4.9425L6.75 9.1275V0H5.25V9.1275L1.065 4.935L0 6L6 12L12 6Z"
                                      fill="#767676"
                                      fillOpacity="0.87"
                                    />
                                  </svg>
                                </div>
                              </th>
                              <th scope="col" className=" px-6 py-3">
                                <div className="flex items-center">
                                  <h1 className="capitalize text-sm font-gola font-medium text-[#767676DE]/[.87] mr-3">
                                    Status
                                  </h1>
                                  <svg
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M12 6L10.9425 4.9425L6.75 9.1275V0H5.25V9.1275L1.065 4.935L0 6L6 12L12 6Z"
                                      fill="#767676"
                                      fillOpacity="0.87"
                                    />
                                  </svg>
                                </div>
                              </th>
                              <th scope="col" className=" px-6 py-3">
                                <div className="flex items-center">
                                  <h1 className="capitalize text-sm font-gola font-medium text-[#767676DE]/[.87] mr-3">
                                    Contact
                                  </h1>
                                  <svg
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M12 6L10.9425 4.9425L6.75 9.1275V0H5.25V9.1275L1.065 4.935L0 6L6 12L12 6Z"
                                      fill="#767676"
                                      fillOpacity="0.87"
                                    />
                                  </svg>
                                </div>
                              </th>
                              <th scope="col" className=" px-6 py-3">
                                <div className="flex items-center">
                                  <h1 className="capitalize text-sm font-gola font-medium text-[#767676DE]/[.87]">
                                    Action
                                  </h1>
                                </div>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="bg-white border-b">
                              <th scope="row" className="px-6 py-4">
                                <h1 className="font-gola text-sm font-medium text-black">
                                  Nikhil Mathew
                                </h1>
                                <h1 className="font-gola text-xs font-medium text-[#7E7E7E] mt-1">
                                  Coimbatore, TN
                                </h1>
                              </th>
                              <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                                <h1 className="font-gola text-sm font-medium text-black">
                                  ₹40,00,000
                                </h1>
                                <h1 className="font-gola text-xs font-medium text-[#7E7E7E] mt-1">
                                  9.85% | 24months
                                </h1>
                              </td>
                              <td className="px-6 py-4 ">
                                <h1 className="font-gola text-sm font-medium text-[#ED3B3B] bg-[#FFECEC] w-[94px] text-center rounded-lg">
                                  2 pending
                                </h1>
                              </td>
                              <td className="px-6 py-4">
                                <h1 className="font-gola text-sm font-medium text-[#C96D02] bg-[#FFF0D4] w-[160px] text-center rounded-lg">
                                  Not Yet Accepted
                                </h1>
                              </td>
                              <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                                -
                              </td>
                              <td>
                                <button
                                  onClick={() =>
                                    router.push("/viewapplicationstatus")
                                  }
                                  type="button"
                                  className="h-10 font-gola border border-[#D5D5D5] text-[#0057E4] bg-[#F5F9FF] font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                                >
                                  View
                                </button>
                              </td>
                            </tr>
                            <tr className="bg-white border-b">
                              <th scope="row" className="px-6 py-4">
                                <h1 className="font-gola text-sm font-medium text-black">
                                  Nikhil Mathew
                                </h1>
                                <h1 className="font-gola text-xs font-medium text-[#7E7E7E] mt-1">
                                  Coimbatore, TN
                                </h1>
                              </th>
                              <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                                <h1 className="font-gola text-sm font-medium text-black">
                                  ₹40,00,000
                                </h1>
                                <h1 className="font-gola text-xs font-medium text-[#7E7E7E] mt-1">
                                  9.85% | 24months
                                </h1>
                              </td>
                              <td className="px-6 py-4 ">
                                <h1 className="font-gola text-sm font-medium text-[#ED3B3B] bg-[#FFECEC] w-[94px] text-center rounded-lg">
                                  2 pending
                                </h1>
                              </td>
                              <td className="px-6 py-4">
                                <h1 className="font-gola text-sm font-medium text-[#C96D02] bg-[#FFF0D4] w-[160px] text-center rounded-lg">
                                  Not Yet Accepted
                                </h1>
                              </td>
                              <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                                -
                              </td>
                              <td>
                                <button
                                  onClick={() =>
                                    router.push("/viewapplicationstatus")
                                  }
                                  type="button"
                                  className="h-10 font-gola border border-[#D5D5D5] text-[#0057E4] bg-[#F5F9FF] font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                                >
                                  View
                                </button>
                              </td>
                            </tr>
                            <tr className="bg-white border-b">
                              <th scope="row" className="px-6 py-4">
                                <h1 className="font-gola text-sm font-medium text-black">
                                  Nikhil Mathew
                                </h1>
                                <h1 className="font-gola text-xs font-medium text-[#7E7E7E] mt-1">
                                  Coimbatore, TN
                                </h1>
                              </th>
                              <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                                <h1 className="font-gola text-sm font-medium text-black">
                                  ₹40,00,000
                                </h1>
                                <h1 className="font-gola text-xs font-medium text-[#7E7E7E] mt-1">
                                  9.85% | 24months
                                </h1>
                              </td>
                              <td className="px-6 py-4 ">
                                <h1 className="font-gola text-sm font-medium text-[#ED3B3B] bg-[#FFECEC] w-[94px] text-center rounded-lg">
                                  2 pending
                                </h1>
                              </td>
                              <td className="px-6 py-4">
                                <h1 className="font-gola text-sm font-medium text-[#C96D02] bg-[#FFF0D4] w-[160px] text-center rounded-lg">
                                  Not Yet Accepted
                                </h1>
                              </td>
                              <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                                -
                              </td>
                              <td>
                                <button
                                  onClick={() =>
                                    router.push("/viewapplicationstatus")
                                  }
                                  type="button"
                                  className="h-10 font-gola border border-[#D5D5D5] text-[#0057E4] bg-[#F5F9FF] font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                                >
                                  View
                                </button>
                              </td>
                            </tr>
                            <tr className="bg-white border-b">
                              <th scope="row" className="px-6 py-4">
                                <h1 className="font-gola text-sm font-medium text-black">
                                  Nikhil Mathew
                                </h1>
                                <h1 className="font-gola text-xs font-medium text-[#7E7E7E] mt-1">
                                  Coimbatore, TN
                                </h1>
                              </th>
                              <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                                <h1 className="font-gola text-sm font-medium text-black">
                                  ₹40,00,000
                                </h1>
                                <h1 className="font-gola text-xs font-medium text-[#7E7E7E] mt-1">
                                  9.85% | 24months
                                </h1>
                              </td>
                              <td className="px-6 py-4 ">
                                <h1 className="font-gola text-sm font-medium text-[#ED3B3B] bg-[#FFECEC] w-[94px] text-center rounded-lg">
                                  2 pending
                                </h1>
                              </td>
                              <td className="px-6 py-4">
                                <h1 className="font-gola text-sm font-medium text-[#C96D02] bg-[#FFF0D4] w-[160px] text-center rounded-lg">
                                  Not Yet Accepted
                                </h1>
                              </td>
                              <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                                -
                              </td>
                              <td>
                                <button
                                  onClick={() =>
                                    router.push("/viewapplicationstatus")
                                  }
                                  type="button"
                                  className="h-10 font-gola border border-[#D5D5D5] text-[#0057E4] bg-[#F5F9FF] font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                                >
                                  View
                                </button>
                              </td>
                            </tr>
                            <tr className="bg-white border-b">
                              <th scope="row" className="px-6 py-4">
                                <h1 className="font-gola text-sm font-medium text-black">
                                  Nikhil Mathew
                                </h1>
                                <h1 className="font-gola text-xs font-medium text-[#7E7E7E] mt-1">
                                  Coimbatore, TN
                                </h1>
                              </th>
                              <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                                <h1 className="font-gola text-sm font-medium text-black">
                                  ₹40,00,000
                                </h1>
                                <h1 className="font-gola text-xs font-medium text-[#7E7E7E] mt-1">
                                  9.85% | 24months
                                </h1>
                              </td>
                              <td className="px-6 py-4 ">
                                <h1 className="font-gola text-sm font-medium text-[#ED3B3B] bg-[#FFECEC] w-[94px] text-center rounded-lg">
                                  2 pending
                                </h1>
                              </td>
                              <td className="px-6 py-4">
                                <h1 className="font-gola text-sm font-medium text-[#C96D02] bg-[#FFF0D4] w-[160px] text-center rounded-lg">
                                  Not Yet Accepted
                                </h1>
                              </td>
                              <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                                -
                              </td>
                              <td>
                                <button
                                  onClick={() =>
                                    router.push("/viewapplicationstatus")
                                  }
                                  type="button"
                                  className="h-10 font-gola border border-[#D5D5D5] text-[#0057E4] bg-[#F5F9FF] font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                                >
                                  View
                                </button>
                              </td>
                            </tr>
                            <tr className="bg-white border-b">
                              <th scope="row" className="px-6 py-4">
                                <h1 className="font-gola text-sm font-medium text-black">
                                  Nikhil Mathew
                                </h1>
                                <h1 className="font-gola text-xs font-medium text-[#7E7E7E] mt-1">
                                  Coimbatore, TN
                                </h1>
                              </th>
                              <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                                <h1 className="font-gola text-sm font-medium text-black">
                                  ₹40,00,000
                                </h1>
                                <h1 className="font-gola text-xs font-medium text-[#7E7E7E] mt-1">
                                  9.85% | 24months
                                </h1>
                              </td>
                              <td className="px-6 py-4 ">
                                <h1 className="font-gola text-sm font-medium text-[#ED3B3B] bg-[#FFECEC] w-[94px] text-center rounded-lg">
                                  2 pending
                                </h1>
                              </td>
                              <td className="px-6 py-4">
                                <h1 className="font-gola text-sm font-medium text-[#C96D02] bg-[#FFF0D4] w-[160px] text-center rounded-lg">
                                  Not Yet Accepted
                                </h1>
                              </td>
                              <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                                -
                              </td>
                              <td>
                                <button
                                  onClick={() =>
                                    router.push("/viewapplicationstatus")
                                  }
                                  type="button"
                                  className="h-10 font-gola border border-[#D5D5D5] text-[#0057E4] bg-[#F5F9FF] font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                                >
                                  View
                                </button>
                              </td>
                            </tr>
                            <tr className="bg-white border-b">
                              <th scope="row" className="px-6 py-4">
                                <h1 className="font-gola text-sm font-medium text-black">
                                  Nikhil Mathew
                                </h1>
                                <h1 className="font-gola text-xs font-medium text-[#7E7E7E] mt-1">
                                  Coimbatore, TN
                                </h1>
                              </th>
                              <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                                <h1 className="font-gola text-sm font-medium text-black">
                                  ₹40,00,000
                                </h1>
                                <h1 className="font-gola text-xs font-medium text-[#7E7E7E] mt-1">
                                  9.85% | 24months
                                </h1>
                              </td>
                              <td className="px-6 py-4 ">
                                <h1 className="font-gola text-sm font-medium text-[#ED3B3B] bg-[#FFECEC] w-[94px] text-center rounded-lg">
                                  2 pending
                                </h1>
                              </td>
                              <td className="px-6 py-4">
                                <h1 className="font-gola text-sm font-medium text-[#C96D02] bg-[#FFF0D4] w-[160px] text-center rounded-lg">
                                  Not Yet Accepted
                                </h1>
                              </td>
                              <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                                -
                              </td>
                              <td>
                                <button
                                  onClick={() =>
                                    router.push("/viewapplicationstatus")
                                  }
                                  type="button"
                                  className="h-10 font-gola border border-[#D5D5D5] text-[#0057E4] bg-[#F5F9FF] font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                                >
                                  View
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="desktop:hidden mt-5 grid tablet:grid-cols-2 gap-5">
                        <div
                          className="cursor-pointer block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 "
                        >
                          <div className="flex item-center mb-2">
                            <h5 className=" mr-3 text-base font-semibold text-[#313131]">
                              Nikhil Mathew
                            </h5>
                            <img src="/rightIconGray.svg" alt="" />
                          </div>

                          <p className="font-gola text-sm text-[#7E7E7E]">
                            Coimbatore, TN - 641606
                          </p>
                          <div className="flex items-center justify-between mt-3">
                            <h1 className="text-[#000000]/[.30] font-medium text-base font-gola">
                              Last Offer
                            </h1>
                            <div className="flex flex-col items-end">
                              <h1 className="text-[#292929] font-medium text-base font-gola">
                                ₹40,00,000
                              </h1>
                              <p className="font-gola text-sm text-[#7E7E7E]">
                                9.85% | 24months
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center justify-between mt-4">
                            <h1 className="text-[#000000]/[.30] font-medium text-base font-gola">
                              Documents
                            </h1>
                            <h1 className="font-gola text-sm font-medium text-[#ED3B3B] bg-[#FFECEC] w-[94px] text-center rounded-lg">
                              2 pending
                            </h1>
                          </div>
                          <div className="flex items-center justify-between mt-4">
                            <h1 className="text-[#000000]/[.30] font-medium text-base font-gola">
                              Status
                            </h1>
                            <h1 className="font-gola text-sm font-medium text-[#C96D02] bg-[#FFF0D4] w-[160px] text-center rounded-lg">
                              Not Yet Accepted
                            </h1>
                          </div>
                          <div className="flex items-center justify-between mt-4">
                            <h1 className="text-[#000000]/[.30] font-medium text-base font-gola">
                              Contact
                            </h1>
                            <h1 className="text-right text-[#292929] font-medium text-base font-gola">
                              +91 9867676678
                            </h1>
                          </div>
                          <div className="flex items-center justify-end mt-5">
                            <button
                              onClick={() =>
                                router.push("/viewapplicationstatus")
                              }
                              type="button"
                              className="h-10 font-gola border border-[#D5D5D5] text-[#0057E4] bg-[#F5F9FF] font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                            >
                              View
                            </button>
                          </div>
                        </div>
                        <div
                          className="cursor-pointer block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 "
                        >
                          <div className="flex item-center mb-2">
                            <h5 className=" mr-3 text-base font-semibold text-[#313131]">
                              Nikhil Mathew
                            </h5>
                            <img src="/rightIconGray.svg" alt="" />
                          </div>

                          <p className="font-gola text-sm text-[#7E7E7E]">
                            Coimbatore, TN - 641606
                          </p>
                          <div className="flex items-center justify-between mt-3">
                            <h1 className="text-[#000000]/[.30] font-medium text-base font-gola">
                              Last Offer
                            </h1>
                            <div className="flex flex-col items-end">
                              <h1 className="text-[#292929] font-medium text-base font-gola">
                                ₹40,00,000
                              </h1>
                              <p className="font-gola text-sm text-[#7E7E7E]">
                                9.85% | 24months
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center justify-between mt-4">
                            <h1 className="text-[#000000]/[.30] font-medium text-base font-gola">
                              Documents
                            </h1>
                            <h1 className="font-gola text-sm font-medium text-[#ED3B3B] bg-[#FFECEC] w-[94px] text-center rounded-lg">
                              2 pending
                            </h1>
                          </div>
                          <div className="flex items-center justify-between mt-4">
                            <h1 className="text-[#000000]/[.30] font-medium text-base font-gola">
                              Status
                            </h1>
                            <h1 className="font-gola text-sm font-medium text-[#C96D02] bg-[#FFF0D4] w-[160px] text-center rounded-lg">
                              Not Yet Accepted
                            </h1>
                          </div>
                          <div className="flex items-center justify-between mt-4">
                            <h1 className="text-[#000000]/[.30] font-medium text-base font-gola">
                              Contact
                            </h1>
                            <h1 className="text-right text-[#292929] font-medium text-base font-gola">
                              +91 9867676678
                            </h1>
                          </div>
                          <div className="flex items-center justify-end mt-5">
                            <button
                              onClick={() =>
                                router.push("/viewapplicationstatus")
                              }
                              type="button"
                              className="h-10 font-gola border border-[#D5D5D5] text-[#0057E4] bg-[#F5F9FF] font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                            >
                              View
                            </button>
                          </div>
                        </div>
                        <div
                          className="cursor-pointer block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 "
                        >
                          <div className="flex item-center mb-2">
                            <h5 className=" mr-3 text-base font-semibold text-[#313131]">
                              Nikhil Mathew
                            </h5>
                            <img src="/rightIconGray.svg" alt="" />
                          </div>

                          <p className="font-gola text-sm text-[#7E7E7E]">
                            Coimbatore, TN - 641606
                          </p>
                          <div className="flex items-center justify-between mt-3">
                            <h1 className="text-[#000000]/[.30] font-medium text-base font-gola">
                              Last Offer
                            </h1>
                            <div className="flex flex-col items-end">
                              <h1 className="text-[#292929] font-medium text-base font-gola">
                                ₹40,00,000
                              </h1>
                              <p className="font-gola text-sm text-[#7E7E7E]">
                                9.85% | 24months
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center justify-between mt-4">
                            <h1 className="text-[#000000]/[.30] font-medium text-base font-gola">
                              Documents
                            </h1>
                            <h1 className="font-gola text-sm font-medium text-[#ED3B3B] bg-[#FFECEC] w-[94px] text-center rounded-lg">
                              2 pending
                            </h1>
                          </div>
                          <div className="flex items-center justify-between mt-4">
                            <h1 className="text-[#000000]/[.30] font-medium text-base font-gola">
                              Status
                            </h1>
                            <h1 className="font-gola text-sm font-medium text-[#C96D02] bg-[#FFF0D4] w-[160px] text-center rounded-lg">
                              Not Yet Accepted
                            </h1>
                          </div>
                          <div className="flex items-center justify-between mt-4">
                            <h1 className="text-[#000000]/[.30] font-medium text-base font-gola">
                              Contact
                            </h1>
                            <h1 className="text-right text-[#292929] font-medium text-base font-gola">
                              +91 9867676678
                            </h1>
                          </div>
                          <div className="flex items-center justify-end mt-5">
                            <button
                              onClick={() =>
                                router.push("/viewapplicationstatus")
                              }
                              type="button"
                              className="h-10 font-gola border border-[#D5D5D5] text-[#0057E4] bg-[#F5F9FF] font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                            >
                              View
                            </button>
                          </div>
                        </div>
                        <div
                          className="cursor-pointer block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 "
                        >
                          <div className="flex item-center mb-2">
                            <h5 className=" mr-3 text-base font-semibold text-[#313131]">
                              Nikhil Mathew
                            </h5>
                            <img src="/rightIconGray.svg" alt="" />
                          </div>

                          <p className="font-gola text-sm text-[#7E7E7E]">
                            Coimbatore, TN - 641606
                          </p>
                          <div className="flex items-center justify-between mt-3">
                            <h1 className="text-[#000000]/[.30] font-medium text-base font-gola">
                              Last Offer
                            </h1>
                            <div className="flex flex-col items-end">
                              <h1 className="text-[#292929] font-medium text-base font-gola">
                                ₹40,00,000
                              </h1>
                              <p className="font-gola text-sm text-[#7E7E7E]">
                                9.85% | 24months
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center justify-between mt-4">
                            <h1 className="text-[#000000]/[.30] font-medium text-base font-gola">
                              Documents
                            </h1>
                            <h1 className="font-gola text-sm font-medium text-[#ED3B3B] bg-[#FFECEC] w-[94px] text-center rounded-lg">
                              2 pending
                            </h1>
                          </div>
                          <div className="flex items-center justify-between mt-4">
                            <h1 className="text-[#000000]/[.30] font-medium text-base font-gola">
                              Status
                            </h1>
                            <h1 className="font-gola text-sm font-medium text-[#C96D02] bg-[#FFF0D4] w-[160px] text-center rounded-lg">
                              Not Yet Accepted
                            </h1>
                          </div>
                          <div className="flex items-center justify-between mt-4">
                            <h1 className="text-[#000000]/[.30] font-medium text-base font-gola">
                              Contact
                            </h1>
                            <h1 className="text-right text-[#292929] font-medium text-base font-gola">
                              +91 9867676678
                            </h1>
                          </div>
                          <div className="flex items-center justify-end mt-5">
                            <button
                              onClick={() =>
                                router.push("/viewapplicationstatus")
                              }
                              type="button"
                              className="h-10 font-gola border border-[#D5D5D5] text-[#0057E4] bg-[#F5F9FF] font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                            >
                              View
                            </button>
                          </div>
                        </div>
                        <div
                          className="cursor-pointer block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 "
                        >
                          <div className="flex item-center mb-2">
                            <h5 className=" mr-3 text-base font-semibold text-[#313131]">
                              Nikhil Mathew
                            </h5>
                            <img src="/rightIconGray.svg" alt="" />
                          </div>

                          <p className="font-gola text-sm text-[#7E7E7E]">
                            Coimbatore, TN - 641606
                          </p>
                          <div className="flex items-center justify-between mt-3">
                            <h1 className="text-[#000000]/[.30] font-medium text-base font-gola">
                              Last Offer
                            </h1>
                            <div className="flex flex-col items-end">
                              <h1 className="text-[#292929] font-medium text-base font-gola">
                                ₹40,00,000
                              </h1>
                              <p className="font-gola text-sm text-[#7E7E7E]">
                                9.85% | 24months
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center justify-between mt-4">
                            <h1 className="text-[#000000]/[.30] font-medium text-base font-gola">
                              Documents
                            </h1>
                            <h1 className="font-gola text-sm font-medium text-[#ED3B3B] bg-[#FFECEC] w-[94px] text-center rounded-lg">
                              2 pending
                            </h1>
                          </div>
                          <div className="flex items-center justify-between mt-4">
                            <h1 className="text-[#000000]/[.30] font-medium text-base font-gola">
                              Status
                            </h1>
                            <h1 className="font-gola text-sm font-medium text-[#C96D02] bg-[#FFF0D4] w-[160px] text-center rounded-lg">
                              Not Yet Accepted
                            </h1>
                          </div>
                          <div className="flex items-center justify-between mt-4">
                            <h1 className="text-[#000000]/[.30] font-medium text-base font-gola">
                              Contact
                            </h1>
                            <h1 className="text-right text-[#292929] font-medium text-base font-gola">
                              +91 9867676678
                            </h1>
                          </div>
                          <div className="flex items-center justify-end mt-5">
                            <button
                              onClick={() =>
                                router.push("/viewapplicationstatus")
                              }
                              type="button"
                              className="h-10 font-gola border border-[#D5D5D5] text-[#0057E4] bg-[#F5F9FF] font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                            >
                              View
                            </button>
                          </div>
                        </div>
                        <div
                          className="cursor-pointer block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 "
                        >
                          <div className="flex item-center mb-2">
                            <h5 className=" mr-3 text-base font-semibold text-[#313131]">
                              Nikhil Mathew
                            </h5>
                            <img src="/rightIconGray.svg" alt="" />
                          </div>

                          <p className="font-gola text-sm text-[#7E7E7E]">
                            Coimbatore, TN - 641606
                          </p>
                          <div className="flex items-center justify-between mt-3">
                            <h1 className="text-[#000000]/[.30] font-medium text-base font-gola">
                              Last Offer
                            </h1>
                            <div className="flex flex-col items-end">
                              <h1 className="text-[#292929] font-medium text-base font-gola">
                                ₹40,00,000
                              </h1>
                              <p className="font-gola text-sm text-[#7E7E7E]">
                                9.85% | 24months
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center justify-between mt-4">
                            <h1 className="text-[#000000]/[.30] font-medium text-base font-gola">
                              Documents
                            </h1>
                            <h1 className="font-gola text-sm font-medium text-[#ED3B3B] bg-[#FFECEC] w-[94px] text-center rounded-lg">
                              2 pending
                            </h1>
                          </div>
                          <div className="flex items-center justify-between mt-4">
                            <h1 className="text-[#000000]/[.30] font-medium text-base font-gola">
                              Status
                            </h1>
                            <h1 className="font-gola text-sm font-medium text-[#C96D02] bg-[#FFF0D4] w-[160px] text-center rounded-lg">
                              Not Yet Accepted
                            </h1>
                          </div>
                          <div className="flex items-center justify-between mt-4">
                            <h1 className="text-[#000000]/[.30] font-medium text-base font-gola">
                              Contact
                            </h1>
                            <h1 className="text-right text-[#292929] font-medium text-base font-gola">
                              +91 9867676678
                            </h1>
                          </div>
                          <div className="flex items-center justify-end mt-5">
                            <button
                              onClick={() =>
                                router.push("/viewapplicationstatus")
                              }
                              type="button"
                              className="h-10 font-gola border border-[#D5D5D5] text-[#0057E4] bg-[#F5F9FF] font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                            >
                              View
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel style={{ padding: "0" }}>
                    <div>
                      <div className="flex mt-5">
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 14 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0_56_3185)">
                                <rect
                                  width="14"
                                  height="14"
                                  fill="white"
                                  fillOpacity="0.01"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
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
                        <div className="flex items-center ml-5">
                          <input
                            id="checked-checkbox"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            htmlFor="checked-checkbox"
                            className="ml-2 text-sm font-medium text-[#202020] font-gola"
                          >
                            Show only ‘Accepted’
                          </label>
                        </div>
                      </div>
                      <div className="mobile:hidden tablet:hidden mt-10 relative overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-500">
                          <thead className="text-xs text-gray-700 uppercase border-b">
                            <tr>
                              <th scope="col" className=" px-6 py-3">
                                <div className="flex items-center">
                                  <h1 className="capitalize text-sm font-gola font-medium text-[#767676DE]/[.87] mr-3">
                                    Applicant Name
                                  </h1>
                                  <svg
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M12 6L10.9425 4.9425L6.75 9.1275V0H5.25V9.1275L1.065 4.935L0 6L6 12L12 6Z"
                                      fill="#767676"
                                      fillOpacity="0.87"
                                    />
                                  </svg>
                                </div>
                              </th>
                              <th scope="col" className=" px-6 py-3">
                                <div className="flex items-center">
                                  <h1 className="capitalize text-sm font-gola font-medium text-[#767676DE]/[.87] mr-3">
                                    Last Offer
                                  </h1>
                                  <svg
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M12 6L10.9425 4.9425L6.75 9.1275V0H5.25V9.1275L1.065 4.935L0 6L6 12L12 6Z"
                                      fill="#767676"
                                      fillOpacity="0.87"
                                    />
                                  </svg>
                                </div>
                              </th>
                              <th scope="col" className=" px-6 py-3">
                                <div className="flex items-center">
                                  <h1 className="capitalize text-sm font-gola font-medium text-[#767676DE]/[.87] mr-3">
                                    Documents
                                  </h1>
                                  <svg
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M12 6L10.9425 4.9425L6.75 9.1275V0H5.25V9.1275L1.065 4.935L0 6L6 12L12 6Z"
                                      fill="#767676"
                                      fillOpacity="0.87"
                                    />
                                  </svg>
                                </div>
                              </th>
                              <th scope="col" className=" px-6 py-3">
                                <div className="flex items-center">
                                  <h1 className="capitalize text-sm font-gola font-medium text-[#767676DE]/[.87] mr-3">
                                    Status
                                  </h1>
                                  <svg
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M12 6L10.9425 4.9425L6.75 9.1275V0H5.25V9.1275L1.065 4.935L0 6L6 12L12 6Z"
                                      fill="#767676"
                                      fillOpacity="0.87"
                                    />
                                  </svg>
                                </div>
                              </th>
                              <th scope="col" className=" px-6 py-3">
                                <div className="flex items-center">
                                  <h1 className="capitalize text-sm font-gola font-medium text-[#767676DE]/[.87] mr-3">
                                    Contact
                                  </h1>
                                  <svg
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M12 6L10.9425 4.9425L6.75 9.1275V0H5.25V9.1275L1.065 4.935L0 6L6 12L12 6Z"
                                      fill="#767676"
                                      fillOpacity="0.87"
                                    />
                                  </svg>
                                </div>
                              </th>
                              <th scope="col" className=" px-6 py-3">
                                <div className="flex items-center">
                                  <h1 className="capitalize text-sm font-gola font-medium text-[#767676DE]/[.87]">
                                    Action
                                  </h1>
                                </div>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="bg-white border-b">
                              <th scope="row" className="px-6 py-4">
                                <h1 className="font-gola text-sm font-medium text-black">
                                  Nikhil Mathew
                                </h1>
                                <h1 className="font-gola text-xs font-medium text-[#7E7E7E] mt-1">
                                  Coimbatore, TN
                                </h1>
                              </th>
                              <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                                <h1 className="font-gola text-sm font-medium text-black">
                                  ₹40,00,000
                                </h1>
                                <h1 className="font-gola text-xs font-medium text-[#7E7E7E] mt-1">
                                  9.85% | 24months
                                </h1>
                              </td>
                              <td className="px-6 py-4 ">
                                <h1 className="font-gola text-sm font-medium text-[#ED3B3B] bg-[#FFECEC] w-[94px] text-center rounded-lg">
                                  2 pending
                                </h1>
                              </td>
                              <td className="px-6 py-4">
                                <h1 className="font-gola text-sm font-medium text-[#C96D02] bg-[#FFF0D4] w-[160px] text-center rounded-lg">
                                  Not Yet Accepted
                                </h1>
                              </td>
                              <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                                -
                              </td>
                              <td>
                                <button
                                  onClick={() =>
                                    router.push("/viewapplicationstatus")
                                  }
                                  type="button"
                                  className="h-10 font-gola border border-[#D5D5D5] text-[#0057E4] bg-[#F5F9FF] font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                                >
                                  View
                                </button>
                              </td>
                            </tr>
                            <tr className="bg-white border-b">
                              <th scope="row" className="px-6 py-4">
                                <h1 className="font-gola text-sm font-medium text-black">
                                  Nikhil Mathew
                                </h1>
                                <h1 className="font-gola text-xs font-medium text-[#7E7E7E] mt-1">
                                  Coimbatore, TN
                                </h1>
                              </th>
                              <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                                <h1 className="font-gola text-sm font-medium text-black">
                                  ₹40,00,000
                                </h1>
                                <h1 className="font-gola text-xs font-medium text-[#7E7E7E] mt-1">
                                  9.85% | 24months
                                </h1>
                              </td>
                              <td className="px-6 py-4 ">
                                <h1 className="font-gola text-sm font-medium text-[#ED3B3B] bg-[#FFECEC] w-[94px] text-center rounded-lg">
                                  2 pending
                                </h1>
                              </td>
                              <td className="px-6 py-4">
                                <h1 className="font-gola text-sm font-medium text-[#C96D02] bg-[#FFF0D4] w-[160px] text-center rounded-lg">
                                  Not Yet Accepted
                                </h1>
                              </td>
                              <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                                -
                              </td>
                              <td>
                                <button
                                  onClick={() =>
                                    router.push("/viewapplicationstatus")
                                  }
                                  type="button"
                                  className="h-10 font-gola border border-[#D5D5D5] text-[#0057E4] bg-[#F5F9FF] font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                                >
                                  View
                                </button>
                              </td>
                            </tr>
                            <tr className="bg-white border-b">
                              <th scope="row" className="px-6 py-4">
                                <h1 className="font-gola text-sm font-medium text-black">
                                  Nikhil Mathew
                                </h1>
                                <h1 className="font-gola text-xs font-medium text-[#7E7E7E] mt-1">
                                  Coimbatore, TN
                                </h1>
                              </th>
                              <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                                <h1 className="font-gola text-sm font-medium text-black">
                                  ₹40,00,000
                                </h1>
                                <h1 className="font-gola text-xs font-medium text-[#7E7E7E] mt-1">
                                  9.85% | 24months
                                </h1>
                              </td>
                              <td className="px-6 py-4 ">
                                <h1 className="font-gola text-sm font-medium text-[#ED3B3B] bg-[#FFECEC] w-[94px] text-center rounded-lg">
                                  2 pending
                                </h1>
                              </td>
                              <td className="px-6 py-4">
                                <h1 className="font-gola text-sm font-medium text-[#C96D02] bg-[#FFF0D4] w-[160px] text-center rounded-lg">
                                  Not Yet Accepted
                                </h1>
                              </td>
                              <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                                -
                              </td>
                              <td>
                                <button
                                  onClick={() =>
                                    router.push("/viewapplicationstatus")
                                  }
                                  type="button"
                                  className="h-10 font-gola border border-[#D5D5D5] text-[#0057E4] bg-[#F5F9FF] font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                                >
                                  View
                                </button>
                              </td>
                            </tr>
                            <tr className="bg-white border-b">
                              <th scope="row" className="px-6 py-4">
                                <h1 className="font-gola text-sm font-medium text-black">
                                  Nikhil Mathew
                                </h1>
                                <h1 className="font-gola text-xs font-medium text-[#7E7E7E] mt-1">
                                  Coimbatore, TN
                                </h1>
                              </th>
                              <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                                <h1 className="font-gola text-sm font-medium text-black">
                                  ₹40,00,000
                                </h1>
                                <h1 className="font-gola text-xs font-medium text-[#7E7E7E] mt-1">
                                  9.85% | 24months
                                </h1>
                              </td>
                              <td className="px-6 py-4 ">
                                <h1 className="font-gola text-sm font-medium text-[#ED3B3B] bg-[#FFECEC] w-[94px] text-center rounded-lg">
                                  2 pending
                                </h1>
                              </td>
                              <td className="px-6 py-4">
                                <h1 className="font-gola text-sm font-medium text-[#C96D02] bg-[#FFF0D4] w-[160px] text-center rounded-lg">
                                  Not Yet Accepted
                                </h1>
                              </td>
                              <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                                -
                              </td>
                              <td>
                                <button
                                  onClick={() =>
                                    router.push("/viewapplicationstatus")
                                  }
                                  type="button"
                                  className="h-10 font-gola border border-[#D5D5D5] text-[#0057E4] bg-[#F5F9FF] font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                                >
                                  View
                                </button>
                              </td>
                            </tr>
                            <tr className="bg-white border-b">
                              <th scope="row" className="px-6 py-4">
                                <h1 className="font-gola text-sm font-medium text-black">
                                  Nikhil Mathew
                                </h1>
                                <h1 className="font-gola text-xs font-medium text-[#7E7E7E] mt-1">
                                  Coimbatore, TN
                                </h1>
                              </th>
                              <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                                <h1 className="font-gola text-sm font-medium text-black">
                                  ₹40,00,000
                                </h1>
                                <h1 className="font-gola text-xs font-medium text-[#7E7E7E] mt-1">
                                  9.85% | 24months
                                </h1>
                              </td>
                              <td className="px-6 py-4 ">
                                <h1 className="font-gola text-sm font-medium text-[#ED3B3B] bg-[#FFECEC] w-[94px] text-center rounded-lg">
                                  2 pending
                                </h1>
                              </td>
                              <td className="px-6 py-4">
                                <h1 className="font-gola text-sm font-medium text-[#C96D02] bg-[#FFF0D4] w-[160px] text-center rounded-lg">
                                  Not Yet Accepted
                                </h1>
                              </td>
                              <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                                -
                              </td>
                              <td>
                                <button
                                  onClick={() =>
                                    router.push("/viewapplicationstatus")
                                  }
                                  type="button"
                                  className="h-10 font-gola border border-[#D5D5D5] text-[#0057E4] bg-[#F5F9FF] font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                                >
                                  View
                                </button>
                              </td>
                            </tr>
                            <tr className="bg-white border-b">
                              <th scope="row" className="px-6 py-4">
                                <h1 className="font-gola text-sm font-medium text-black">
                                  Nikhil Mathew
                                </h1>
                                <h1 className="font-gola text-xs font-medium text-[#7E7E7E] mt-1">
                                  Coimbatore, TN
                                </h1>
                              </th>
                              <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                                <h1 className="font-gola text-sm font-medium text-black">
                                  ₹40,00,000
                                </h1>
                                <h1 className="font-gola text-xs font-medium text-[#7E7E7E] mt-1">
                                  9.85% | 24months
                                </h1>
                              </td>
                              <td className="px-6 py-4 ">
                                <h1 className="font-gola text-sm font-medium text-[#ED3B3B] bg-[#FFECEC] w-[94px] text-center rounded-lg">
                                  2 pending
                                </h1>
                              </td>
                              <td className="px-6 py-4">
                                <h1 className="font-gola text-sm font-medium text-[#C96D02] bg-[#FFF0D4] w-[160px] text-center rounded-lg">
                                  Not Yet Accepted
                                </h1>
                              </td>
                              <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                                -
                              </td>
                              <td>
                                <button
                                  onClick={() =>
                                    router.push("/viewapplicationstatus")
                                  }
                                  type="button"
                                  className="h-10 font-gola border border-[#D5D5D5] text-[#0057E4] bg-[#F5F9FF] font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                                >
                                  View
                                </button>
                              </td>
                            </tr>
                            <tr className="bg-white border-b">
                              <th scope="row" className="px-6 py-4">
                                <h1 className="font-gola text-sm font-medium text-black">
                                  Nikhil Mathew
                                </h1>
                                <h1 className="font-gola text-xs font-medium text-[#7E7E7E] mt-1">
                                  Coimbatore, TN
                                </h1>
                              </th>
                              <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                                <h1 className="font-gola text-sm font-medium text-black">
                                  ₹40,00,000
                                </h1>
                                <h1 className="font-gola text-xs font-medium text-[#7E7E7E] mt-1">
                                  9.85% | 24months
                                </h1>
                              </td>
                              <td className="px-6 py-4 ">
                                <h1 className="font-gola text-sm font-medium text-[#ED3B3B] bg-[#FFECEC] w-[94px] text-center rounded-lg">
                                  2 pending
                                </h1>
                              </td>
                              <td className="px-6 py-4">
                                <h1 className="font-gola text-sm font-medium text-[#C96D02] bg-[#FFF0D4] w-[160px] text-center rounded-lg">
                                  Not Yet Accepted
                                </h1>
                              </td>
                              <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                                -
                              </td>
                              <td>
                                <button
                                  onClick={() =>
                                    router.push("/viewapplicationstatus")
                                  }
                                  type="button"
                                  className="h-10 font-gola border border-[#D5D5D5] text-[#0057E4] bg-[#F5F9FF] font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                                >
                                  View
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel style={{ padding: "0" }}>
                    <div className="flex mt-5">
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_56_3185)">
                              <rect
                                width="14"
                                height="14"
                                fill="white"
                                fillOpacity="0.01"
                              />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
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
                      <div className="flex items-center ml-5">
                        <input
                          id="checked-checkbox"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="checked-checkbox"
                          className="ml-2 text-sm font-medium text-[#202020] font-gola"
                        >
                          Show only ‘Accepted’
                        </label>
                      </div>
                    </div>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
      <MobileSidebar isOpen={isOpen} onClose={onClose} />
    </div>
  );
}

export default tracking;
