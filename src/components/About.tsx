import React, { useState } from "react";

function About() {
  const [currentTab, setCurrentTab] = useState("1");
  return (
    <div className="w-full flex flex justify-center relative">
      <div className="aboutblob"></div>
      <div className="desktop:w-10/12 desktop:max-w-custom1300 tablet:w-11/12 mobile:w-11/12	flex flex-col items-center">
        <h1 className="mt-12 text-primary-color text-2xl font-semibold font-gola">
          HOW IT WORKS
        </h1>
        <div className="flex w-full my-20">
          <div className="desktop:w-1/2 tablet:w-1/2 w-full tabanddesk:mr-10">
            <div
              onClick={() => setCurrentTab("1")}
              className={`transition-all cursor-pointer opacity-100 duration-200 w-full flex items-center py-5 px-5 tababdedesk:mr-16 ${
                currentTab === "1"
                  ? "bg-tab-color border border-tab-border-color rounded-md"
                  : ""
              }`}
            >
              <h1
                className={`transition-all duration-200 font-gola desktop:text-2xl tablet:text-xl font-semibold rounded-full bg-grey-bg tabanddesk:w-14 tabanddesk:h-14 flex items-center justify-center
                ${
                  currentTab === "1"
                    ? "bg-primary-color text-white"
                    : "bg-grey-bg text-black"
                }
                `}
                style={{ minWidth: "55px", height: "55px" }}
              >
                01
              </h1>
              <div className="ml-6">
                <h1 className="font-gola desktop:text-size28 tablet:text-xl font-semibold">
                  Fill the application
                </h1>
                <h1 className="font-gola text-base font-light">
                  Sign up and create your profile
                </h1>
              </div>
            </div>
            <div
              onClick={() => setCurrentTab("2")}
              className={`transition-all opacity-100 cursor-pointer duration-200 flex items-center py-5 px-5 tababdedesk:mr-16 ${
                currentTab === "2"
                  ? "bg-tab-color border border-tab-border-color rounded-md"
                  : ""
              }`}
            >
              <h1
                className={`transition-all duration-200 font-gola desktop:text-2xl tablet:text-xl font-semibold rounded-full bg-grey-bg tabanddesk:w-14 tabanddesk:h-14 flex items-center justify-center
                ${
                  currentTab === "2"
                    ? "bg-primary-color text-white"
                    : "bg-grey-bg text-black"
                }
                `}
                style={{ minWidth: "55px", height: "55px" }}
              >
                02
              </h1>
              <div className="ml-6">
                <h1 className="font-gola desktop:text-size28 tablet:text-xl font-semibold">
                  Let the banks bid
                </h1>
                <h1 className="font-gola text-base font-light">
                  Wait for the banks to bid for your application
                </h1>
              </div>
            </div>
            <div
              onClick={() => setCurrentTab("3")}
              className={`transition-all duration-200 opacity-100 cursor-pointer flex items-center py-5 px-5 tababdedesk:mr-16 ${
                currentTab === "3"
                  ? "bg-tab-color border border-tab-border-color rounded-md"
                  : ""
              }`}
            >
              <h1
                className={`transition-all duration-200 font-gola desktop:text-2xl tablet:text-xl font-semibold rounded-full bg-grey-bg tabanddesk:w-14 tabanddesk:h-14 flex items-center justify-center
                ${
                  currentTab === "3"
                    ? "bg-primary-color text-white"
                    : "bg-grey-bg text-black"
                }
                `}
                style={{ minWidth: "55px", height: "55px" }}
              >
                03
              </h1>
              <div className="ml-6">
                <h1 className="font-gola desktop:text-size28 tablet:text-xl font-semibold">
                  Accept a bid
                </h1>
                <h1 className="font-gola text-base font-light">
                  Choose from various loan offers from banks
                </h1>
              </div>
            </div>
            <div
              onClick={() => setCurrentTab("4")}
              className={`transition-all duration-200 opacity-100 cursor-pointer flex items-center py-5 px-5 tababdedesk:mr-16 ${
                currentTab === "4"
                  ? "bg-tab-color border border-tab-border-color rounded-md"
                  : ""
              }`}
            >
              <h1
                className={`transition-all duration-200 font-gola desktop:text-2xl tablet:text-xl font-semibold rounded-full bg-grey-bg tabanddesk:w-14 tabanddesk:h-14 flex items-center justify-center
                ${
                  currentTab === "4"
                    ? "bg-primary-color text-white"
                    : "bg-grey-bg text-black"
                }
                `}
                style={{ minWidth: "55px", height: "55px" }}
              >
                04
              </h1>
              <div className="ml-6">
                <h1 className="font-gola desktop:text-size28 tablet:text-xl font-semibold">
                  Choose Best Offers
                </h1>
                <h1 className="font-gola text-base font-light">
                  Choose from various loan offers from banks
                </h1>
              </div>
            </div>
          </div>
          <div className="desktop:w-1/2 tablet:w-1/2 flex items-center h-full mobile:hidden opacity-100">
            <img
              className="transition-all duration-200 opacity-100"
              src={`${currentTab === "1" ? "./tab1.png" : "./tab2.png"}`}
              alt="Tab 1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
