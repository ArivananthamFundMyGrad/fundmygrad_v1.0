import StudentPortalTopbar from "@/components/reusable/StudentPortalTopbar";
import Head from "next/head";
import React from "react";

function studentportaldashboard() {
  return (
    <div className="w-full">
      <Head>
        <title>Student Portal</title>
      </Head>
      <StudentPortalTopbar />
      <div className="w-full px-10 bg-[#F1F4FA] min-h-screen">
        <div className="flex items-center justify-between pt-[24px] ">
          <h1 className="text-2xl font-gola font-bold">Dashboard</h1>
          <button
            type="button"
            className="h-10 font-gola	text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
          >
            <div className="flex items-center">
              <img className="pr-3" src="../AddIcon.svg" alt="Add Icon" />
              {"New University"}
            </div>
          </button>
        </div>
        <div
          className="rounded-md mt-10 bg-white flex items-center justify-between"
          style={{
            border: "1px solid #F0EFEF",
            padding: "16px 24px",
            boxShadow: "0px 4px 4px rgba(226, 226, 226, 0.25)",
          }}
        >
          <div className="flex items-center">
            <img src="/univ_logo.svg" alt="University Logo" />
            <h1 className="pl-[12px] font-gola font-semibold text-base">
              University of California
            </h1>
            <h1 className="ml-[40px] bg-[#EEEEEE] px-[12px] py-[2.5px] rounded-full font-gola text-sm text-[#254472] font-medium">
              Yet to apply
            </h1>
          </div>
          <div className="flex items-center">
            <h1 className="font-gola text-sm font-semibold">20 Offers </h1>
            <p className="ml-[12px] font-gola text-sm font-medium text-[#6B37FF] px-[12px] py-[2.5px] rounded-full bg-[#FBEFFF]">
              2 New
            </p>
            <p className="ml-[12px] font-gola text-sm font-medium text-[#ED3B3B] px-[12px] py-[2.5px] rounded-full bg-[#FFECEC]">
              2 Upload pending
            </p>
            <h1 className="font-gola text-[20px] font-semibold ml-[40px]">
              ₹40,00,000
            </h1>
            <button
              type="button"
              className="h-10 ml-[40px] font-gola border border-[#D5D5D5] text-[#0057E4] bg-[#F5F9FF] font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
            >
              View
            </button>
          </div>
        </div>
        <div
          className="rounded-md mt-5 bg-white flex items-center justify-between"
          style={{
            border: "1px solid #F0EFEF",
            padding: "16px 24px",
            boxShadow: "0px 4px 4px rgba(226, 226, 226, 0.25)",
          }}
        >
          <div className="flex items-center">
            <img src="/univ_logo.svg" alt="University Logo" />
            <h1 className="pl-[12px] font-gola font-semibold text-base">
              University of Texas
            </h1>
            <h1 className="ml-[40px] bg-[#EEEEEE] px-[12px] py-[2.5px] rounded-full font-gola text-sm text-[#254472] font-medium">
              Yet to apply
            </h1>
          </div>
          <div className="flex items-center">
            <h1 className="font-gola text-sm font-semibold">20 Offers </h1>
            <p className="ml-[12px] font-gola text-sm font-medium text-[#6B37FF] px-[12px] py-[2.5px] rounded-full bg-[#FBEFFF]">
              2 New
            </p>
            <p className="ml-[12px] font-gola text-sm font-medium text-[#ED3B3B] px-[12px] py-[2.5px] rounded-full bg-[#FFECEC]">
              2 Upload pending
            </p>
            <h1 className="font-gola text-[20px] font-semibold ml-[40px]">
              ₹37,00,000
            </h1>
            <button
              type="button"
              className="h-10 ml-[40px] font-gola border border-[#D5D5D5] text-[#0057E4] bg-[#F5F9FF] font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
            >
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default studentportaldashboard;
