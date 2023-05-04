import StudentPortalTopbar from "@/components/reusable/StudentPortalTopbar";
import Head from "next/head";
import React from "react";

function mydocuments() {
  return (
    <div className="w-full">
      <Head>
        <title>My Documents</title>
      </Head>
      <StudentPortalTopbar />
      <div className="w-full h-full bg-[#F1F4FA] p-[24px] min-h-[calc(100vh-64px)]">
        <div className="bg-white  min-h-[calc(100vh-112px)] rounded-md p-[24px]">
          <h1 className="font-gola text-2xl font-bold">My Documents</h1>
          <div className="flex justify-between mt-[36px]">
            <div className="w-[30%]">
              <div
                style={{
                  border: "1.2px solid #0057FF",
                }}
                className="flex justify-between items-center rounded-md bg-[#F7FAFF] p-[16px]"
              >
                <h1 className="font-gola text-base font-semibold">
                  Aadhar Card
                </h1>
                <div className="flex items-center">
                  <p className="mr-3 font-gola text-[#8F8F8F] text-sm font-normal">
                    1/2 files
                  </p>
                  <img src="/warning.svg" alt="Warning Icon" />
                </div>
              </div>
              <div
                style={{
                  border: "1px solid #E8E8E8",
                }}
                className="flex mt-3 justify-between items-center rounded-md p-[16px]"
              >
                <h1 className="font-gola text-base font-semibold">PAN Card</h1>
                <div className="flex items-center">
                  <p className="mr-3 font-gola text-[#8F8F8F] text-sm font-normal">
                    2/2 files
                  </p>
                  <img src="/check.svg" alt="Correct Icon" />
                </div>
              </div>
              <div
                style={{
                  border: "1px solid #E8E8E8",
                }}
                className="flex mt-3 justify-between items-center rounded-md p-[16px]"
              >
                <h1 className="font-gola text-base font-semibold">
                  Birth Certificate
                </h1>
                <div className="flex items-center">
                  <p className="mr-3 font-gola text-[#8F8F8F] text-sm font-normal">
                    2/2 files
                  </p>
                  <img src="/check.svg" alt="Correct Icon" />
                </div>
              </div>
              <div
                style={{
                  border: "1px solid #E8E8E8",
                }}
                className="flex mt-3 justify-between items-center rounded-md p-[16px]"
              >
                <h1 className="font-gola text-base font-semibold">
                  Marksheets
                </h1>
                <div className="flex items-center">
                  <p className="mr-3 font-gola text-[#8F8F8F] text-sm font-normal">
                    1/2 files
                  </p>
                  <img src="/warning.svg" alt="Warning Icon" />
                </div>
              </div>
              <div
                style={{
                  border: "1px solid #E8E8E8",
                }}
                className="flex mt-3 justify-between items-center rounded-md p-[16px]"
              >
                <h1 className="font-gola text-base font-semibold">
                  Graduation Certificate
                </h1>
                <div className="flex items-center">
                  <p className="mr-3 font-gola text-[#8F8F8F] text-sm font-normal">
                    2/2 files
                  </p>
                  <img src="/check.svg" alt="Correct Icon" />
                </div>
              </div>
            </div>
            <div
              style={{
                border: "1px solid #E6E6E6",
              }}
              className="w-[70%] py-10 rounded-md flex items-center justify-center ml-10"
            >
              <div className="w-[70%]">
                <h1 className="font-gola text-[20px] font-bold text-[#222222]">
                  Aadhar Card
                </h1>
                <p className="mt-5 font-gola text-[14px] text-[#0E0E0E]">
                  Upload Documents
                </p>
                <p className="text-[#8F8F8F] font-gola text-[14px] font-normal">
                  Size should be less than 1mb (.jpg, .png, .svg,.pdf)
                </p>
                <h1 className="text-[14px] font-gola font-bold mt-5">
                  Front Side:
                </h1>
                <div
                  style={{ border: "0.5px solid #CBCBCB" }}
                  className="mt-2 px-[32px] py-[20px] rounded-md flex justify-between items-center"
                >
                  <div className="flex items-center">
                    <img src="/pdf.svg" alt="PDF Icon" />
                    <h1 className="font-gola text-sm font-medium text-[#2B2B2B] ml-3">
                      Filename001.pdf
                    </h1>
                  </div>
                  <div className="flex items-center">
                    <img src="/menu_dots.svg" alt="Menu Icon" />
                    <img
                      className="ml-5"
                      src="/file_download.svg"
                      alt="Download Icon"
                    />
                    <button
                      type="button"
                      className="h-10 ml-5 font-gola border border-[#D5D5D5] text-[#0057E4] bg-[#F5F9FF] font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                    >
                      View
                    </button>
                  </div>
                </div>
                <h1 className="text-[14px] font-gola font-bold mt-5">
                  Back Side:
                </h1>
                <div
                  style={{ border: "0.5px solid #CBCBCB" }}
                  className="mt-2 px-[32px] py-[20px] rounded-md flex flex-col justify-center items-center"
                >
                  <h1 className="font-gola text-[#8E8E8E] text-[14px] font-normal">
                    No file has uploaded yet
                  </h1>
                  <button
                    type="button"
                    className="h-10 mt-3 font-gola	text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                  >
                    Upload
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default mydocuments;
