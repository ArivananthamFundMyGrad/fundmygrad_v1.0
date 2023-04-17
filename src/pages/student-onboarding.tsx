import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

function StudentOnboarding() {
  const [currentStep, setCurrentStep] = useState("1");
  const [option, setOption] = useState("1");
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Student Onboarding</title>
      </Head>
      <div className="w-screen h-screen flex">
        <div className="tablet:hidden mobile:hidden w-4/12 desktop:min-w-[350px] relative overflow-hidden desktop:max-w-custom460 bg-light-color h-full">
          <img
            onClick={() => router.push("/")}
            className="pl-12 pt-6"
            width={160}
            src="./logo.svg"
            alt="fundmygrad logo"
          />
          <div className=" w-full pt-10 flex justify-center">
            <div className="h-full" style={{ width: "250px" }}>
              <h1 className="text-4xl font-gola font-semibold text-onboarding-text">
                Let's Get Started
              </h1>
              <div className="ml-5 mt-5">
                <ol className="relative text-gray-500 border-l border-gray-200">
                  <li className="mb-10 ml-6">
                    <span
                      className={`${
                        currentStep === "1"
                          ? "bg-primary-color text-white"
                          : "bg-white"
                      } absolute font-gola flex items-center justify-center w-8 h-8 rounded-full -left-4 `}
                    >
                      {currentStep !== "1" && parseInt(currentStep) > 1 ? (
                        <img src="../GreenTick.svg" />
                      ) : (
                        "1"
                      )}
                    </span>
                    <h3 className="pl-2 pt-1 text-base font-gola font-normal text-black leading-tight">
                      Admission Status
                    </h3>
                  </li>
                  <li className="mb-10 ml-6">
                    <span
                      className={`${
                        currentStep === "2"
                          ? "bg-primary-color text-white"
                          : "bg-white"
                      } absolute font-gola flex items-center justify-center w-8 h-8 rounded-full -left-4 `}
                    >
                      {currentStep !== "2" && parseInt(currentStep) > 2 ? (
                        <img src="../GreenTick.svg" />
                      ) : (
                        "2"
                      )}
                    </span>
                    <h3 className="pl-2 pt-1 text-base font-gola font-normal text-black leading-tight">
                      Course Details
                    </h3>
                  </li>
                  <li className="mb-10 ml-6">
                    <span
                      className={`${
                        currentStep === "3"
                          ? "bg-primary-color text-white"
                          : "bg-white"
                      } absolute font-gola flex items-center justify-center w-8 h-8 rounded-full -left-4 `}
                    >
                      {currentStep !== "3" && parseInt(currentStep) > 3 ? (
                        <img src="../GreenTick.svg" />
                      ) : (
                        "3"
                      )}
                    </span>
                    <h3 className="pl-2 pt-1 text-base font-gola font-normal text-black leading-tight">
                      Loan Details
                    </h3>
                  </li>
                  <li className="mb-10 ml-6">
                    <span
                      className={`${
                        currentStep === "4"
                          ? "bg-primary-color text-white"
                          : "bg-white"
                      } absolute font-gola flex items-center justify-center w-8 h-8 rounded-full -left-4 `}
                    >
                      {currentStep !== "4" && parseInt(currentStep) > 4 ? (
                        <img src="../GreenTick.svg" />
                      ) : (
                        "4"
                      )}
                    </span>
                    <h3 className="pl-2 pt-1 text-base font-gola font-normal text-black leading-tight">
                      Co-applicant Details
                    </h3>
                  </li>
                  <li className="mb-10 ml-6">
                    <span
                      className={`${
                        currentStep === "5"
                          ? "bg-primary-color text-white"
                          : "bg-white"
                      } absolute font-gola flex items-center justify-center w-8 h-8 rounded-full -left-4 `}
                    >
                      {currentStep !== "5" && parseInt(currentStep) > 5 ? (
                        <img src="../GreenTick.svg" />
                      ) : (
                        "5"
                      )}
                    </span>
                    <h3 className="pl-2 pt-1 text-base font-gola font-normal text-black leading-tight">
                      Education Qualification
                    </h3>
                  </li>
                  <li className="mb-10 ml-6">
                    <span
                      className={`${
                        currentStep === "6"
                          ? "bg-primary-color text-white"
                          : "bg-white"
                      } absolute font-gola flex items-center justify-center w-8 h-8 rounded-full -left-4 `}
                    >
                      {currentStep !== "6" && parseInt(currentStep) > 6 ? (
                        <img src="../GreenTick.svg" />
                      ) : (
                        "6"
                      )}
                    </span>
                    <h3 className="pl-2 pt-1 text-base font-gola font-normal text-black leading-tight">
                      Test Scores
                    </h3>
                  </li>
                  <li className="ml-6">
                    <span
                      className={`${
                        currentStep === "7"
                          ? "bg-primary-color text-white"
                          : "bg-white"
                      } absolute font-gola flex items-center justify-center w-8 h-8 rounded-full -left-4 `}
                    >
                      {false ? <img src="../GreenTick.svg" /> : "7"}
                    </span>
                    <h3 className="pl-2 pt-1 text-base font-gola font-normal text-black leading-tight">
                      Work Experience
                    </h3>
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <img
            style={{ width: "500px", bottom: "-100px", left: "-100px" }}
            className="absolute"
            src="./OnboardingPattern.svg"
          />
          <img
            style={{ width: "200px", bottom: "20px", right: "30px" }}
            className="absolute"
            src="./StudentOnboarding.svg"
          />
        </div>
        <div className="tablet:pt-32 mobile:pt-32 relative w-full h-full flex tablet:flex-col mobile:flex-col desktop:justify-center items-center">
          <img
            onClick={() => router.push("/")}
            className="absolute pt-2 top-5 left-10 desktop:hidden mobile:hidden"
            width={160}
            src="./logo.svg"
            alt="fundmygrad logo"
          />
          <div
            style={{ width: "188px" }}
            className="absolute top-5 right-10 bg-secondary-color flex items-center border border-button-text rounded-lg py-2 px-3"
          >
            <img src="../Assitance.svg" alt="Contact Image" />
            <h1 className="ml-3 font-gola text-white font-semibold text-base">
              Need Guidance?
            </h1>
          </div>

          <div>
            <ol
              style={{
                minHeight: "40px",
                maxHeight: "40px",
                marginBottom: "80px",
              }}
              className="desktop:hidden mobile:hidden flex items-center tabanddesk:min-w-custom600 mobile:w-full ml-10"
            >
              <li className="relative flex w-full items-center text-blue-600 after:content-[''] after:w-full after:h-1 after:border-b after:border-light-color after:border-4 after:inline-block ">
                <span
                  className={`${
                    currentStep === "1"
                      ? "bg-primary-color text-white"
                      : "bg-light-color text-black"
                  } flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-22 shrink-0 `}
                >
                  {currentStep !== "1" && parseInt(currentStep) > 1 ? (
                    <img src="../GreenTick.svg" />
                  ) : (
                    "1"
                  )}
                </span>
                {currentStep === "1" && (
                  <div className="absolute text-center -bottom-10 -left-12">
                    Admission Status
                  </div>
                )}
              </li>
              <li className="relative flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-light-color after:border-4 after:inline-block ">
                <span
                  className={`${
                    currentStep === "2"
                      ? "bg-primary-color text-white"
                      : "bg-light-color text-black"
                  } flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-22 shrink-0 `}
                >
                  {currentStep !== "2" && parseInt(currentStep) > 2 ? (
                    <img src="../GreenTick.svg" />
                  ) : (
                    "2"
                  )}
                </span>
                {currentStep === "2" && (
                  <div className="absolute text-primary-color text-center -bottom-10 -left-8">
                    Course Details
                  </div>
                )}
              </li>
              <li className="relative flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-light-color after:border-4 after:inline-block ">
                <span
                  className={`${
                    currentStep === "3"
                      ? "bg-primary-color text-white"
                      : "bg-light-color text-black"
                  } flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-22 shrink-0 `}
                >
                  {currentStep !== "3" && parseInt(currentStep) > 3 ? (
                    <img src="../GreenTick.svg" />
                  ) : (
                    "3"
                  )}
                </span>
                {currentStep === "3" && (
                  <div className="absolute  text-primary-color text-center -bottom-10 -left-8">
                    Loan Details
                  </div>
                )}
              </li>
              <li className="relative flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-light-color after:border-4 after:inline-block ">
                <span
                  className={`${
                    currentStep === "4"
                      ? "bg-primary-color text-white"
                      : "bg-light-color text-black"
                  } flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-22 shrink-0 `}
                >
                  {currentStep !== "4" && parseInt(currentStep) > 4 ? (
                    <img src="../GreenTick.svg" />
                  ) : (
                    "4"
                  )}
                </span>
                {currentStep === "4" && (
                  <div className="absolute  text-primary-color text-center -bottom-14 -left-8">
                    Co-applicant Details
                  </div>
                )}
              </li>
              <li className="relative flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-light-color after:border-4 after:inline-block ">
                <span
                  className={`${
                    currentStep === "5"
                      ? "bg-primary-color text-white"
                      : "bg-light-color text-black"
                  } flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-22 shrink-0 `}
                >
                  {currentStep !== "5" && parseInt(currentStep) > 5 ? (
                    <img src="../GreenTick.svg" />
                  ) : (
                    "5"
                  )}
                </span>
                {currentStep === "5" && (
                  <div className="absolute  text-primary-color text-center -bottom-14 -left-8">
                    Education Qualification
                  </div>
                )}
              </li>
              <li className="relative flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-light-color after:border-4 after:inline-block ">
                <span
                  className={`${
                    currentStep === "6"
                      ? "bg-primary-color text-white"
                      : "bg-light-color text-black"
                  } flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-22 shrink-0 `}
                >
                  {currentStep !== "6" && parseInt(currentStep) > 6 ? (
                    <img src="../GreenTick.svg" />
                  ) : (
                    "6"
                  )}
                </span>
                {currentStep === "6" && (
                  <div className="absolute  text-primary-color text-center -bottom-10 -left-8">
                    Test Scores
                  </div>
                )}
              </li>
              <li className="relative flex items-center w-full">
                <span
                  className={`${
                    currentStep === "7"
                      ? "bg-primary-color text-white"
                      : "bg-light-color text-black"
                  } flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-22 shrink-0 `}
                >
                  {currentStep !== "7" && parseInt(currentStep) > 7 ? (
                    <img src="../GreenTick.svg" />
                  ) : (
                    "7"
                  )}
                </span>
                {currentStep === "7" && (
                  <div className="absolute  text-primary-color text-center -bottom-14 -left-8">
                    Work Experience
                  </div>
                )}
              </li>
            </ol>
          </div>

          <div className="desktop:hidden tablet:hidden w-4/5 mb-10">
            <ol className=" flex items-center w-full">
              {parseInt(currentStep) < 4 && (
                <>
                  <li className="relative flex w-full items-center text-blue-600 after:content-[''] after:w-full after:h-1 after:border-b after:border-light-color after:border-4 after:inline-block ">
                    <span
                      className={`${
                        currentStep === "1"
                          ? "bg-primary-color text-white"
                          : "bg-light-color text-black"
                      } flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-22 shrink-0 `}
                    >
                      {currentStep !== "1" && parseInt(currentStep) > 1 ? (
                        <img src="../GreenTick.svg" />
                      ) : (
                        "1"
                      )}
                    </span>
                  </li>
                  <li className="relative flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-light-color after:border-4 after:inline-block ">
                    <span
                      className={`${
                        currentStep === "2"
                          ? "bg-primary-color text-white"
                          : "bg-light-color text-black"
                      } flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-22 shrink-0 `}
                    >
                      {currentStep !== "2" && parseInt(currentStep) > 2 ? (
                        <img src="../GreenTick.svg" />
                      ) : (
                        "2"
                      )}
                    </span>
                  </li>
                  <li className="relative flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-light-color after:border-4 after:inline-block ">
                    <span
                      className={`${
                        currentStep === "3"
                          ? "bg-primary-color text-white"
                          : "bg-light-color text-black"
                      } flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-22 shrink-0 `}
                    >
                      {currentStep !== "3" && parseInt(currentStep) > 3 ? (
                        <img src="../GreenTick.svg" />
                      ) : (
                        "3"
                      )}
                    </span>
                  </li>
                  <li className="relative flex items-center">
                    <span
                      className={`${
                        currentStep === "4"
                          ? "bg-primary-color text-white"
                          : "bg-light-color text-black"
                      } flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-22 shrink-0 `}
                    >
                      {currentStep !== "4" && parseInt(currentStep) > 4 ? (
                        <img src="../GreenTick.svg" />
                      ) : (
                        "4"
                      )}
                    </span>
                  </li>
                </>
              )}

              {parseInt(currentStep) >= 4 && (
                <>
                  <li className="relative flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-light-color after:border-4 after:inline-block ">
                    <span
                      className={`${
                        currentStep === "4"
                          ? "bg-primary-color text-white"
                          : "bg-light-color text-black"
                      } flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-22 shrink-0 `}
                    >
                      {currentStep !== "4" && parseInt(currentStep) > 4 ? (
                        <img src="../GreenTick.svg" />
                      ) : (
                        "4"
                      )}
                    </span>
                  </li>
                  <li className="relative flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-light-color after:border-4 after:inline-block ">
                    <span
                      className={`${
                        currentStep === "5"
                          ? "bg-primary-color text-white"
                          : "bg-light-color text-black"
                      } flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-22 shrink-0 `}
                    >
                      {currentStep !== "5" && parseInt(currentStep) > 5 ? (
                        <img src="../GreenTick.svg" />
                      ) : (
                        "5"
                      )}
                    </span>
                  </li>
                  <li className="relative flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-light-color after:border-4 after:inline-block ">
                    <span
                      className={`${
                        currentStep === "6"
                          ? "bg-primary-color text-white"
                          : "bg-light-color text-black"
                      } flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-22 shrink-0 `}
                    >
                      {currentStep !== "6" && parseInt(currentStep) > 6 ? (
                        <img src="../GreenTick.svg" />
                      ) : (
                        "6"
                      )}
                    </span>
                  </li>
                  <li className="relative flex items-center">
                    <span
                      className={`${
                        currentStep === "7"
                          ? "bg-primary-color text-white"
                          : "bg-light-color text-black"
                      } flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-22 shrink-0 `}
                    >
                      {currentStep !== "7" && parseInt(currentStep) > 7 ? (
                        <img src="../GreenTick.svg" />
                      ) : (
                        "7"
                      )}
                    </span>
                  </li>
                </>
              )}
            </ol>
          </div>

          {currentStep === "1" && (
            <div className="tabanddesk:max-w-custom600 tabanddesk:min-w-custom600 mobile:w-4/5">
              <div className="w-full">
                <h1 className="text-2xl font-gola font-semibold text-button-text">
                  Select your admission status
                </h1>
                <p className="text-sm font-gola font-normal opacity-50 mt-2">
                  This will help us tailor fundmygrad for you
                </p>
                <ul className="mt-6 grid w-full">
                  <li onClick={() => setOption("1")}>
                    <input
                      type="radio"
                      id="option-1"
                      name="hosting"
                      value="option-1"
                      className="hidden peer"
                      required
                    />
                    <label
                      style={{ height: "64px" }}
                      htmlFor="option-1"
                      className={`${
                        option === "1"
                          ? "bg-tab-background border border-primary-color"
                          : "bg-white"
                      } inline-flex items-center justify-between w-full p-5 border border-gray-200 rounded-lg cursor-pointer  hover:text-gray-600 hover:bg-gray-100`}
                    >
                      <div className="block">
                        <div
                          className={`${
                            option === "1" ? "text-primary-color" : "text-black"
                          } w-full text-base font-medium font-gola`}
                        >
                          Yet to apply for colleges
                        </div>
                      </div>
                      {option === "1" && <img src="../Tick.svg" alt="Tick" />}
                    </label>
                  </li>
                  <li onClick={() => setOption("2")} className="mt-3">
                    <input
                      type="radio"
                      id="option-2"
                      name="hosting"
                      value="option-2"
                      className="hidden peer"
                    />
                    <label
                      style={{ height: "64px" }}
                      htmlFor="option-2"
                      className={`${
                        option === "2"
                          ? "bg-tab-background border border-primary-color"
                          : "bg-white"
                      } inline-flex items-center justify-between w-full p-5 border border-gray-200 rounded-lg cursor-pointer  hover:text-gray-600 hover:bg-gray-100`}
                    >
                      <div className="block">
                        <div
                          className={`${
                            option === "2" ? "text-primary-color" : "text-black"
                          } w-full text-base font-medium font-gola`}
                        >
                          In the process of applying to colleges
                        </div>
                      </div>
                      {option === "2" && <img src="../Tick.svg" alt="Tick" />}
                    </label>
                  </li>
                  <li onClick={() => setOption("3")} className="mt-3">
                    <input
                      type="radio"
                      id="option-3"
                      name="hosting"
                      value="option-3"
                      className="hidden peer"
                    />
                    <label
                      style={{ height: "64px" }}
                      htmlFor="option-3"
                      className={`${
                        option === "3"
                          ? "bg-tab-background border border-primary-color"
                          : "bg-white"
                      } inline-flex items-center justify-between w-full p-5 border border-gray-200 rounded-lg cursor-pointer  hover:text-gray-600 hover:bg-gray-100`}
                    >
                      <div className="block">
                        <div
                          className={`${
                            option === "3" ? "text-primary-color" : "text-black"
                          } w-full text-base font-medium font-gola`}
                        >
                          Awaiting response from colleges
                        </div>
                      </div>
                      {option === "3" && <img src="../Tick.svg" alt="Tick" />}
                    </label>
                  </li>
                  <li onClick={() => setOption("4")} className="mt-3">
                    <input
                      type="radio"
                      id="option-4"
                      name="hosting"
                      value="option-4"
                      className="hidden peer"
                    />
                    <label
                      style={{ height: "64px" }}
                      htmlFor="option-4"
                      className={`${
                        option === "4"
                          ? "bg-tab-background border border-primary-color"
                          : "bg-white"
                      } inline-flex items-center justify-between w-full p-5 border border-gray-200 rounded-lg cursor-pointer  hover:text-gray-600 hover:bg-gray-100`}
                    >
                      <div className="block">
                        <div
                          className={`${
                            option === "4" ? "text-primary-color" : "text-black"
                          } w-full text-base font-medium font-gola`}
                        >
                          Admission received
                        </div>
                      </div>
                      {option === "4" && <img src="../Tick.svg" alt="Tick" />}
                    </label>
                  </li>
                </ul>
              </div>
              <div className="w-full flex justify-end	">
                <button
                  onClick={() => setCurrentStep("2")}
                  type="button"
                  className="h-10 max-w-custom120 mt-6 w-full font-gola text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                >
                  Next
                </button>
              </div>
            </div>
          )}
          {currentStep === "2" && (
            <div className="tabanddesk:max-w-custom600 tabanddesk:min-w-custom600 mobile:w-4/5">
              <div className="w-full">
                <h1 className="text-2xl font-gola font-semibold text-button-text">
                  Course Details
                </h1>
                <p className="text-sm font-gola font-normal opacity-50 mt-2">
                  This will help us tailor fundmygrad for you
                </p>
                <p className="text-sm font-gola	font-normal text-subtext opacity-70 mt-5">
                  When does the program start?
                </p>
                <div className="relative mt-3">
                  <input
                    type="text"
                    id="input-group-1"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="name@flowbite.com"
                  />
                  <div className="absolute inset-y-0 right-3 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <div>
                    <p className="text-sm font-gola	font-normal text-subtext opacity-70 mt-3">
                      Select University
                    </p>
                    <div style={{ height: "48px" }} className="flex mt-1.5">
                      <select
                        id="countries"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      >
                        <option selected>Select</option>
                        {/* <option value="US">United States</option> */}
                      </select>
                    </div>
                  </div>

                  <div className="w-full justify-between flex items-center">
                    <div style={{ width: "49%" }}>
                      <p className="font-gola text-sm	font-normal text-subtext opacity-70 mt-5">
                        Select Program
                      </p>
                      <div style={{ height: "48px" }} className="flex mt-1.5">
                        <select
                          id="countries"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-10"
                        >
                          <option selected>Select</option>
                          {/* <option value="US">United States</option> */}
                        </select>
                      </div>
                    </div>
                    <div style={{ width: "49%" }}>
                      <p className="text-sm font-normal text-subtext opacity-70 mt-5">
                        Enter Course Name
                      </p>
                      <div style={{ height: "48px" }} className="flex mt-1.5">
                        <input
                          type="text"
                          id="website-admin"
                          className="rounded-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  "
                          placeholder="MBA"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="font-gola text-sm	font-normal text-subtext opacity-70 mt-5">
                      Course Duration (in months)
                    </p>
                    <div style={{ height: "48px" }} className="flex mt-1.5">
                      <input
                        type="text"
                        id="website-admin"
                        className="rounded-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  "
                        placeholder="Ex: 2 Months"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-between	">
                <button
                  onClick={() => setCurrentStep("1")}
                  type="button"
                  className="h-10 max-w-custom120 mt-6 w-full font-gola text-primary-color bg-light-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                >
                  Back
                </button>
                <button
                  onClick={() => setCurrentStep("3")}
                  type="button"
                  className="h-10 max-w-custom120 mt-6 w-full font-gola text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                >
                  Next
                </button>
              </div>
            </div>
          )}
          {currentStep === "3" && (
            <div className="tabanddesk:max-w-custom600 tabanddesk:min-w-custom600 mobile:w-4/5">
              <div className="w-full">
                <h1 className="text-2xl font-gola font-semibold text-button-text">
                  Loan Details
                </h1>
                <p className="text-sm font-gola font-normal opacity-50 mt-2">
                  This will help us tailor fundmygrad for you
                </p>
                <div>
                  <p className="font-gola text-sm	font-normal text-subtext opacity-70 mt-5">
                    Loan Requirement (in rupees)
                  </p>
                  <div className="mt-2">
                    <input
                      type="text"
                      id="input-group-1"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="₹ 100000"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-sm	font-normal text-subtext opacity-70 mt-3">
                    Pincode
                  </p>
                  <div className="mt-2">
                    <input
                      type="text"
                      id="input-group-1"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="608876"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex flex-col">
                    <h1 className="font-gola text-base font-medium mt-3">
                      Collateral:
                    </h1>
                    <div className="flex items-center mt-3">
                      <input
                        checked
                        id="checked-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                      />
                      <label
                        htmlFor="checked-checkbox"
                        className="ml-2 text-sm font-medium text-gray-900 "
                      >
                        Yes, able to provide a collateral
                      </label>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-sm	font-normal text-subtext opacity-70 mt-3">
                    Collateral Type
                  </p>
                  <div style={{ height: "48px" }} className="flex mt-1.5">
                    <select
                      id="countries"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    >
                      <option selected>Residential Property</option>
                      {/* <option value="US">United States</option> */}
                    </select>
                  </div>
                </div>
                <div>
                  <p className="text-sm	font-normal text-subtext opacity-70 mt-3">
                    Collateral Value
                  </p>
                  <div className="mt-2">
                    <input
                      type="text"
                      id="input-group-1"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="₹12,00,000"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-between	">
                <button
                  onClick={() => setCurrentStep("2")}
                  type="button"
                  className="h-10 max-w-custom120 mt-6 w-full font-gola text-primary-color bg-light-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                >
                  Back
                </button>
                <button
                  onClick={() => setCurrentStep("4")}
                  type="button"
                  className="h-10 max-w-custom120 mt-6 w-full font-gola text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                >
                  Next
                </button>
              </div>
            </div>
          )}
          {currentStep === "4" && (
            <div className="tabanddesk:max-w-custom600 tabanddesk:min-w-custom600 mobile:w-4/5">
              <div className="w-full">
                <h1 className="text-2xl font-gola font-semibold text-button-text">
                  Co-applicant Details
                </h1>
                <p className="text-sm font-gola font-normal opacity-50 mt-2">
                  This will help us tailor fundmygrad for you
                </p>
                <div>
                  <p className="font-gola text-sm	font-normal text-subtext opacity-70 mt-5">
                    Co-applicant relation
                  </p>
                  <div style={{ height: "48px" }} className="flex mt-1.5">
                    <select
                      id="countries"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    >
                      <option selected>Father</option>
                      {/* <option value="US">United States</option> */}
                    </select>
                  </div>
                </div>
                <div>
                  <p className="text-sm	font-normal text-subtext opacity-70 mt-3">
                    Income Type
                  </p>
                  <div style={{ height: "48px" }} className="flex mt-1.5">
                    <select
                      id="countries"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    >
                      <option selected>Salaried</option>
                      {/* <option value="US">United States</option> */}
                    </select>
                  </div>
                </div>
                <div>
                  <p className="text-sm	font-normal text-subtext opacity-70 mt-3">
                    Income (per annum){" "}
                  </p>
                  <div className="mt-2">
                    <input
                      type="text"
                      id="input-group-1"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="₹ 100000"
                    />
                  </div>
                </div>
                <div>
                  <p className="font-gola text-sm	font-normal text-subtext opacity-70 mt-5">
                    Enter mobile number
                  </p>
                  <div style={{ height: "48px" }} className="flex mt-1.5">
                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                      INR (+91)
                    </span>
                    <input
                      value={9876544213}
                      type="text"
                      id="website-admin"
                      className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  "
                    />
                  </div>
                </div>
                <div>
                  <p className="text-sm	font-normal text-subtext opacity-70 mt-3">
                    Email
                  </p>
                  <div className="mt-2">
                    <input
                      type="text"
                      id="input-group-1"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="mugilanelango123@gmail.com"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-between	">
                <button
                  onClick={() => setCurrentStep("3")}
                  type="button"
                  className="h-10 max-w-custom120 mt-6 w-full font-gola text-primary-color bg-light-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                >
                  Back
                </button>
                <button
                  onClick={() => setCurrentStep("5")}
                  type="button"
                  className="h-10 max-w-custom120 mt-6 w-full font-gola text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                >
                  Next
                </button>
              </div>
            </div>
          )}
          {currentStep === "5" && (
            <div className="tabanddesk:max-w-custom600 tabanddesk:min-w-custom600 mobile:w-4/5">
              <div className="w-full">
                <h1 className="text-2xl font-gola font-semibold text-button-text">
                  Education details{" "}
                </h1>
                <p className="text-sm font-gola font-normal opacity-50 mt-2">
                  This will help us tailor fundmygrad for you
                </p>
                <div>
                  <p className="font-gola text-sm	font-normal text-subtext opacity-70 mt-5">
                    School / College Name
                  </p>
                  <div className="mt-2">
                    <input
                      type="text"
                      id="input-group-1"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="Vishveswara College of engineering"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-sm	font-normal text-subtext opacity-70 mt-3">
                    Highest Level of Previous education details{" "}
                  </p>
                  <div style={{ height: "48px" }} className="flex mt-1.5">
                    <select
                      id="countries"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    >
                      <option selected>B.E</option>
                      {/* <option value="US">United States</option> */}
                    </select>
                  </div>
                </div>

                <div>
                  <p className="text-sm	font-normal text-subtext opacity-70 mt-3">
                    Degree Name
                  </p>
                  <div className="mt-2">
                    <input
                      type="text"
                      id="input-group-1"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="Computer Science"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-sm	font-normal text-subtext opacity-70 mt-3">
                    Scores (CGPA 10 or 4point / in percentage)
                  </p>
                  <div className="mt-2">
                    <input
                      type="text"
                      id="input-group-1"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="9"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-sm	font-normal text-subtext opacity-70 mt-3">
                    Backlogs, if any{" "}
                  </p>
                  <div style={{ height: "48px" }} className="flex mt-1.5">
                    <select
                      id="countries"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    >
                      <option selected>Yes</option>
                      {/* <option value="US">United States</option> */}
                    </select>
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-between	">
                <button
                  onClick={() => setCurrentStep("4")}
                  type="button"
                  className="h-10 max-w-custom120 mt-6 w-full font-gola text-primary-color bg-light-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                >
                  Back
                </button>
                <button
                  onClick={() => setCurrentStep("6")}
                  type="button"
                  className="h-10 max-w-custom120 mt-6 w-full font-gola text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                >
                  Next
                </button>
              </div>
            </div>
          )}
          {currentStep === "6" && (
            <div className="tabanddesk:max-w-custom600 tabanddesk:min-w-custom600 mobile:w-4/5">
              <div className="w-full">
                <h1 className="text-2xl font-gola font-semibold text-button-text">
                  Education details{" "}
                </h1>
                <p className="text-sm font-gola font-normal opacity-50 mt-2">
                  This will help us tailor fundmygrad for you
                </p>
                <div className="mt-5">
                  <h1 className="text-base font-gola font-medium">Test 1</h1>
                  <div className="w-full justify-between flex items-center">
                    <div style={{ width: "49%" }}>
                      <p className="text-sm	font-normal text-subtext opacity-70 mt-3">
                        Test
                      </p>
                      <div style={{ height: "48px" }} className="flex mt-1.5">
                        <select
                          id="countries"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-10"
                        >
                          <option selected>GRE</option>
                          {/* <option value="US">United States</option> */}
                        </select>
                      </div>
                    </div>
                    <div style={{ width: "49%" }}>
                      <p className="text-sm font-normal text-subtext opacity-70 mt-3">
                        Score
                      </p>
                      <div style={{ height: "48px" }} className="flex mt-1.5">
                        <input
                          type="text"
                          id="website-admin"
                          className="rounded-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  "
                          placeholder="179"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <h1 className="text-base font-gola font-medium">Test 2</h1>
                  <div className="w-full justify-between flex items-center">
                    <div style={{ width: "49%" }}>
                      <p className="text-sm	font-normal text-subtext opacity-70 mt-3">
                        Test
                      </p>
                      <div style={{ height: "48px" }} className="flex mt-1.5">
                        <select
                          id="countries"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-10"
                        >
                          <option selected>GMAT</option>
                          {/* <option value="US">United States</option> */}
                        </select>
                      </div>
                    </div>
                    <div style={{ width: "49%" }}>
                      <p className="text-sm font-normal text-subtext opacity-70 mt-3">
                        Score
                      </p>
                      <div style={{ height: "48px" }} className="flex mt-1.5">
                        <input
                          type="text"
                          id="website-admin"
                          className="rounded-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  "
                          placeholder="189"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <h1 className="text-base font-gola font-medium">Test 3</h1>
                  <div className="w-full justify-between flex items-center">
                    <div style={{ width: "49%" }}>
                      <p className="text-sm	font-normal text-subtext opacity-70 mt-3">
                        Test
                      </p>
                      <div style={{ height: "48px" }} className="flex mt-1.5">
                        <select
                          id="countries"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-10"
                        >
                          <option selected>IELTS</option>
                          {/* <option value="US">United States</option> */}
                        </select>
                      </div>
                    </div>
                    <div style={{ width: "49%" }}>
                      <p className="text-sm font-normal text-subtext opacity-70 mt-3">
                        Score
                      </p>
                      <div style={{ height: "48px" }} className="flex mt-1.5">
                        <input
                          type="text"
                          id="website-admin"
                          className="rounded-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  "
                          placeholder="159"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h1 className="text-base font-gola font-semibold text-primary-color mt-3">
                Add one more test score
              </h1>
              <div className="w-full flex justify-between	">
                <button
                  onClick={() => setCurrentStep("5")}
                  type="button"
                  className="h-10 max-w-custom120 mt-6 w-full font-gola text-primary-color bg-light-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                >
                  Back
                </button>
                <button
                  onClick={() => setCurrentStep("7")}
                  type="button"
                  className="h-10 max-w-custom120 mt-6 w-full font-gola text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                >
                  Next
                </button>
              </div>
            </div>
          )}
          {currentStep === "7" && (
            <div className="tabanddesk:max-w-custom600 tabanddesk:min-w-custom600 mobile:w-4/5">
              <div className="w-full">
                <h1 className="text-2xl font-gola font-semibold text-button-text">
                  Work Experience
                </h1>
                <p className="text-sm font-gola font-normal opacity-50 mt-2">
                  This will help us tailor fundmygrad for you
                </p>
                <div>
                  <p className="font-gola text-sm	font-normal text-subtext opacity-70 mt-5">
                    Previous Work Experience (in months)
                  </p>
                  <div className="mt-2">
                    <input
                      type="text"
                      id="input-group-1"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="8"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-sm	font-normal text-subtext opacity-70 mt-3">
                    Salary (in rupees){" "}
                  </p>
                  <div className="mt-2">
                    <input
                      type="text"
                      id="input-group-1"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="₹3,00,000"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-between">
                <button
                  onClick={() => setCurrentStep("6")}
                  type="button"
                  className="h-10 max-w-custom120 mt-6 w-full font-gola text-primary-color bg-light-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                >
                  Back
                </button>
                <button
                  // onClick={() => setCurrentStep("6")}
                  type="button"
                  className="h-10 max-w-custom120 mt-6 w-full font-gola text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                >
                  Submit
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default StudentOnboarding;
