import StudentPortalTopbar from "@/components/reusable/StudentPortalTopbar";
import Head from "next/head";
import React from "react";

function studentprofile() {
  return (
    <div className="w-full">
      <Head>
        <title>Profile</title>
      </Head>
      <StudentPortalTopbar />
      <div className="w-full h-full bg-[#F1F4FA] p-[24px] min-h-[calc(100vh-64px)]">
        <div className="bg-white  min-h-[calc(100vh-112px)] rounded-md p-[24px]">
          <h1 className="font-gola text-2xl font-bold">Profile</h1>
          <div className="w-full flex justify-center items-center h-full mt-[70px]">
            <div
              className="rounded-md p-[20px] w-[40%]"
              style={{ border: "1px solid #E4E4E4" }}
            >
              <div className="border-b-[1px] border-[#E4E4E4] pb-5 flex items-center justify-between">
                <div>
                  <h1 className="font-gola text-[14px] text-[#8B8B8B] font-normal">
                    Name
                  </h1>
                  <h1 className="font-gola text-base font-bold text-[#2F2F2F] mt-1">
                    Nikhil Mathew
                  </h1>
                </div>
                <button
                  type="button"
                  className="h-10 ml-5 font-gola border border-[#D5D5D5] text-[#0057E4] bg-[#F5F9FF] font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                >
                  Edit
                </button>
              </div>
              <div className="flex items-center justify-between border-b-[1px] border-[#E4E4E4] pb-5 pt-5">
                <div>
                  <h1 className="font-gola text-[14px] text-[#8B8B8B] font-normal">
                    Email address
                  </h1>
                  <h1 className="font-gola text-base font-bold text-[#2F2F2F] mt-1">
                    nikhilmathew@gmail.com
                  </h1>
                </div>
                <div className="flex items-center">
                    <img src="menu_dots.svg" alt="" />
                    <button
                  type="button"
                  className="h-10 ml-5 font-gola border border-[#D5D5D5] text-[#0057E4] bg-[#F5F9FF] font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                >
                  Edit
                </button>
                </div>
                
              </div>
              <div className="flex items-center justify-between border-b-[1px] border-[#E4E4E4] pb-5 pt-5">
                <div>
                  <h1 className="font-gola text-[14px] text-[#8B8B8B] font-normal">
                    Phone number
                  </h1>
                  <h1 className="font-gola text-base font-bold text-[#2F2F2F] mt-1">
                    +91 9787665432
                  </h1>
                </div>
                <button
                  type="button"
                  className="h-10 ml-5 font-gola border border-[#D5D5D5] text-[#0057E4] bg-[#F5F9FF] font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                >
                  Edit
                </button>
              </div>
              <div className="flex items-center justify-between border-b-[1px] border-[#E4E4E4] pb-5 pt-5">
                <div>
                  <h1 className="font-gola text-base font-bold text-[#2F2F2F]">
                    Change Passoword
                  </h1>
                </div>
                <img src="rightIconGray.svg" alt="" />
              </div>
              <div className="flex items-center justify-between pb-5 pt-5">
                <div>
                  <h1 className="font-gola text-base font-bold text-[#2F2F2F]">
                  Log Out
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default studentprofile;
