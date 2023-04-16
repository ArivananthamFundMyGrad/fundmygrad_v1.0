import React from "react";

function Stats() {
  return (
    <div className="w-full flex flex justify-center">
      <div className="desktop:w-3/4 tablet:width95	flex flex-col items-center">
        <h1 className="mt-12 text-2xl text-primary-color font-semibold font-gola">
          STATS SO FAR
        </h1>
        <div className="w-full grid tabanddesk:grid-cols-4 mt-10 mb-16">
          <div className="flex flex-col w-full items-center">
            <h1 className="font-gola text-4xl font-medium">400+</h1>
            <h1 className="font-gola text-base font-normal mt-2">
              Loan processed
            </h1>
          </div>
          <div className="mobile:mt-8 flex flex-col w-full items-center">
            <h1 className="font-gola text-4xl font-medium">121 Cr+</h1>
            <h1 className="font-gola text-base font-normal mt-2">
              Rupees processed
            </h1>
          </div>
          <div className="mobile:mt-8 flex flex-col w-full items-center">
            <h1 className="font-gola text-4xl font-medium">{"<12hrs"}</h1>
            <h1 className="font-gola text-base font-normal mt-2">
              Average turn around time
            </h1>
          </div>
          <div className="mobile:mt-8 flex flex-col w-full items-center">
            <h1 className="font-gola text-4xl font-medium">25+</h1>
            <h1 className="font-gola text-base font-normal mt-2">
              Partner banks
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
