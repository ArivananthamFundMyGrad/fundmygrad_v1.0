import Bankportal from "@/components/ApplicantsComp";
import Sidebar from "@/components/dashboard/Sidebar";
import Head from "next/head";
import React from "react";

function applicants() {
  return (
    <div className="flex w-full">
      <Head>
        <title>Dashboard</title>
      </Head>
      <Sidebar />
      <div className="w-full flex justify-center">
        <div className="w-full min-h-screen flex flex-col items-center">
          <div className="bg-white px-10 pt-3 pb-3 w-full flex justify-between">
            <img width={120} src="../logo.svg" alt="" />
            <img src="../avatar.svg" alt="" />
          </div>
          <Bankportal/>
        </div>
      </div>
    </div>
  );
}

export default applicants;
