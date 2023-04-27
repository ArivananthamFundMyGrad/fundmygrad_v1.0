import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";
import { useDisclosure } from "@chakra-ui/react";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
} from "@chakra-ui/react";
import Sidebar from "@/components/dashboard/Sidebar";

function viewapplication() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const router = useRouter();
  return (
    <div className="flex w-full">
      <Head>
        <title>Application Status</title>
      </Head>
      <Sidebar />
      <div className="w-full flex flex-col">
        <div className="w-full px-10 flex flex-col ">
          <div className="bg-white pt-3 pb-3 w-full items-center flex justify-between">
            <img width={120} src="../logo.svg" alt="" />
            <img src="../avatar.svg" alt="" />
          </div>

          <div className=" mt-5 mb-20">
            <div className="mt-7 flex items-center justify-between">
              <div className="flex items-center">
                <img
                  className="cursor-pointer"
                  onClick={() => router.push("/applicants")}
                  src="arrow_back.svg"
                  alt="Back Arrow"
                />
                <h1 className="font-gola text-2xl text-[#252525] font-semibold ml-3">
                  Nikhil Mathew
                </h1>
              </div>
              <button
                onClick={onOpen}
                type="button"
                className="h-10 font-gola	text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
              >
                Send Offer
              </button>
            </div>
            <div className="grid grid-cols-3 gap-3 w-full mt-7">
              <div className="w-full">
                <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                  <h5 className="mb-2 uppercase text-sm font-semibold text-[#313131]">
                    Basic Info
                  </h5>
                  <div className="flex items-center justify-between mt-3">
                    <h1 className="text-[#000000]/[.30] font-medium text-base font-gola">
                      Loan amount requested
                    </h1>
                    <h1 className="text-[#292929] font-medium text-base font-gola">
                      ₹40,00,000
                    </h1>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <h1 className="text-[#000000]/[.30] font-medium text-base font-gola">
                      Able to provide collateral
                    </h1>
                    <h1 className="text-[#292929] font-medium text-base font-gola">
                      Yes
                    </h1>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <h1 className="text-[#000000]/[.30] font-medium text-base font-gola">
                      Admit Status
                    </h1>
                    <h1 className="text-[#292929] font-medium text-base font-gola">
                      Yet to apply
                    </h1>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <h1 className="text-[#000000]/[.30] font-medium text-base font-gola">
                      Opted College Name
                    </h1>
                    <h1 className="text-right text-[#292929] font-medium text-base font-gola">
                      University of California
                    </h1>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <h1 className="text-[#000000]/[.30] font-medium text-base font-gola">
                      Opted country
                    </h1>
                    <h1 className="text-right text-[#292929] font-medium text-base font-gola">
                      United States of America
                    </h1>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <h1 className="text-[#000000]/[.30] font-medium text-base font-gola">
                      City, State
                    </h1>
                    <h1 className="text-[#292929] font-medium text-base font-gola">
                      Coimbatore, 641606, TN
                    </h1>
                  </div>
                </div>
                <div className="mt-5 block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                  <h5 className="mb-2 uppercase text-sm font-semibold text-[#313131]">
                    Co-applicant
                  </h5>
                  <div className="flex items-center justify-between mt-3">
                    <h1 className="text-[#000000]/[.30] font-medium text-base font-gola">
                      Co-applicant
                    </h1>
                    <h1 className="text-[#292929] font-medium text-base font-gola">
                      Father
                    </h1>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <h1 className="text-[#000000]/[.30] font-medium text-base font-gola">
                      Collateral value
                    </h1>
                    <h1 className="text-[#292929] font-medium text-base font-gola">
                      Salaried
                    </h1>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <h1 className="text-[#000000]/[.30] font-medium text-base font-gola">
                      Income p.a
                    </h1>
                    <h1 className="text-[#292929] font-medium text-base font-gola">
                      ₹10,00,000
                    </h1>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <h1 className="text-[#000000]/[.30] font-medium text-base font-gola">
                      Phone number
                    </h1>
                    <h1 className="text-[#292929] font-medium text-base font-gola">
                      +91 9878675432
                    </h1>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <h1 className="text-[#000000]/[.30] font-medium text-base font-gola">
                      Email
                    </h1>
                    <h1 className="break-words text-right text-[#292929] font-medium text-base font-gola">
                      muruaganandham@gmzil.com
                    </h1>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                  <h5 className="mb-2 uppercase text-sm font-semibold text-[#313131]">
                    OTHER DETAILS
                  </h5>
                  <div className="flex items-center justify-between mt-3">
                    <h1 className="text-[#000000]/[.30] font-medium text-base font-gola">
                      Prog. start date
                    </h1>
                    <h1 className="text-[#292929] font-medium text-base font-gola">
                      1 Mar 2023
                    </h1>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <h1 className="text-[#000000]/[.30] font-medium text-base font-gola">
                      Course
                    </h1>
                    <h1 className="text-[#292929] font-medium text-base font-gola">
                      MS., Computer Science
                    </h1>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <h1 className="text-[#000000]/[.30] font-medium text-base font-gola">
                      Course duration
                    </h1>
                    <h1 className="text-[#292929] font-medium text-base font-gola">
                      2 years
                    </h1>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <h1 className="text-[#000000]/[.30] font-medium text-base font-gola">
                      Admit Status
                    </h1>
                    <h1 className="text-[#292929] font-medium text-base font-gola">
                      Yet to apply
                    </h1>
                  </div>
                </div>
                <div className="mt-5 block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                  <h5 className="mb-2 uppercase text-sm font-semibold text-[#313131]">
                    Education details
                  </h5>
                  <div className="flex items-center justify-between mt-3">
                    <h1 className="text-[#000000]/[.30] font-medium text-base font-gola">
                      Previous college
                    </h1>
                    <h1 className="break-words text-right text-[#292929] font-medium text-base font-gola">
                      Visveshwara College of Engineering
                    </h1>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <h1 className="break-words pr-2 text-[#000000]/[.30] font-medium text-base font-gola">
                      Highest degree
                    </h1>
                    <h1 className="break-words text-right text-[#292929] font-medium text-base font-gola">
                      BE., Computer Science
                    </h1>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <h1 className="text-[#000000]/[.30] font-medium text-base font-gola">
                      CGPA
                    </h1>
                    <h1 className="text-[#292929] font-medium text-base font-gola">
                      8.9
                    </h1>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <h1 className="text-[#000000]/[.30] font-medium text-base font-gola">
                      Backlog
                    </h1>
                    <h1 className="text-[#292929] font-medium text-base font-gola">
                      Yes
                    </h1>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                  <h5 className="mb-2 uppercase text-sm font-semibold text-[#313131]">
                    Collateral
                  </h5>
                  <div className="flex items-center justify-between mt-3">
                    <h1 className="text-[#000000]/[.30] font-medium text-base font-gola">
                      Collateral type
                    </h1>
                    <h1 className="text-[#292929] font-medium text-base font-gola">
                      1 Mar 2023
                    </h1>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <h1 className="text-[#000000]/[.30] font-medium text-base font-gola">
                      Collateral value
                    </h1>
                    <h1 className="text-[#292929] font-medium text-base font-gola">
                      ₹ 50,00,000
                    </h1>
                  </div>
                </div>
                <div className="mt-5 block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                  <h5 className="mb-2 uppercase text-sm font-semibold text-[#313131]">
                    Work Experience
                  </h5>
                  <div className="flex items-center justify-between mt-3">
                    <h1 className="text-[#000000]/[.30] font-medium text-base font-gola">
                      Previous work experience
                    </h1>
                    <h1 className="text-[#292929] font-medium text-base font-gola">
                      9 months
                    </h1>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <h1 className="text-[#000000]/[.30] font-medium text-base font-gola">
                      Salary
                    </h1>
                    <h1 className="text-[#292929] font-medium text-base font-gola">
                      ₹40,00,000
                    </h1>
                  </div>
                </div>
                <div className="mt-5 block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                  <h5 className="mb-2 uppercase text-sm font-semibold text-[#313131]">
                    Test Score
                  </h5>
                  <div className="flex items-center justify-between mt-3">
                    <h1 className="text-[#000000]/[.30] font-medium text-base font-gola">
                      GRE
                    </h1>
                    <h1 className="text-[#292929] font-medium text-base font-gola">
                      189
                    </h1>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <h1 className="text-[#000000]/[.30] font-medium text-base font-gola">
                      GMAT
                    </h1>
                    <h1 className="text-[#292929] font-medium text-base font-gola">
                      177
                    </h1>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <h1 className="text-[#000000]/[.30] font-medium text-base font-gola">
                      IELTS
                    </h1>
                    <h1 className="text-[#292929] font-medium text-base font-gola">
                      166
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            size={"md"}
          >
            <DrawerOverlay />
            <DrawerContent>
              <div className="p-5">
                <div className="w-full flex items-center justify-between">
                  <h1 className="text-2xl font-gola font-semibold">Offer</h1>
                  <img
                    onClick={onClose}
                    className="cursor-pointer"
                    src="../close.svg"
                    alt="Close Icon"
                  />
                </div>
                <div>
                  <p className="text-sm font-normal text-subtext opacity-70 mt-5">
                    Enter loan amount
                  </p>
                  <div style={{ height: "48px" }} className="flex mt-1.5">
                    <input
                      type="text"
                      id="website-admin"
                      className="rounded-lg bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                      placeholder="₹40,00,000"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-normal text-subtext opacity-70 mt-5">
                    Interest rate (p.a)
                  </p>
                  <div style={{ height: "48px" }} className="flex mt-1.5">
                    <input
                      type="text"
                      id="website-admin"
                      className="rounded-lg bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                      placeholder="9 %"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-normal text-subtext opacity-70 mt-5">
                    Tenure
                  </p>
                  <div style={{ height: "48px" }} className="flex mt-1.5">
                    <input
                      type="text"
                      id="website-admin"
                      className="rounded-lg bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                      placeholder="24 months"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-normal text-subtext opacity-70 mt-5">
                    Enter processing fee (GST not included)
                  </p>
                  <div style={{ height: "48px" }} className="flex mt-1.5">
                    <input
                      type="text"
                      id="website-admin"
                      className="rounded-lg bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                      placeholder="2%"
                    />
                  </div>
                </div>
                <p className="text-base font-semibold font-gola mt-5">
                  Repayment Type
                </p>
                <div className="flex items-center mt-3">
                  <input
                    defaultChecked
                    id="checked-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="checked-checkbox"
                    className="ml-3 text-sm font-medium text-[#202020] font-gola"
                  >
                    After Course Completion
                  </label>
                </div>
                <div className="flex items-center mt-3">
                  <input
                    defaultChecked
                    id="checked-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="checked-checkbox"
                    className="ml-3 text-sm font-medium text-[#202020] font-gola"
                  >
                    During the Course
                  </label>
                </div>
                <div className="flex items-center mt-3">
                  <input
                    defaultChecked
                    id="checked-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="checked-checkbox"
                    className="ml-3 text-sm font-medium text-[#202020] font-gola"
                  >
                    Type 3
                  </label>
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default viewapplication;
