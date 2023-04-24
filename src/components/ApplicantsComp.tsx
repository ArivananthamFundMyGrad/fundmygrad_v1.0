import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

function ApplicantsComp() {
  const router = useRouter();
  return (
    <div className="w-full flex justify-center">
      <Head>
        <title>Bank Applications</title>
      </Head>
      <div className="relative w-11/12 mb-20">
        <div className="flex items-center mt-10">
          <h1 className="font-gola text-[28px] font-bold">Applications</h1>
          <div className="ml-5 relative">
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
              defaultChecked
              id="checked-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="checked-checkbox"
              className="ml-2 text-sm font-medium text-[#202020] font-gola"
            >
              Only show ‘With Collateral’
            </label>
          </div>
        </div>
        <div className="mt-10 relative overflow-x-auto">
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
                      Loan Amount
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
                      Collateral
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
                      Admit status
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
                      Opt. College
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
                      Opt. Country
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
                  ₹40,00,000
                </td>
                <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                  Yes
                </td>
                <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                  Yet to apply
                </td>
                <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                  University of California Midtown
                </td>
                <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                  USA
                </td>
                <td>
                  <button
                    onClick={() => router.push("/viewapplication")}
                    type="button"
                    className="h-10 font-gola	text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
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
                  ₹40,00,000
                </td>
                <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                  Yes
                </td>
                <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                  Yet to apply
                </td>
                <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                  University of California Midtown
                </td>
                <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                  USA
                </td>
                <td>
                  <button
                    onClick={() => router.push("/viewapplication")}
                    type="button"
                    className="h-10 font-gola	text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
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
                  ₹40,00,000
                </td>
                <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                  Yes
                </td>
                <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                  Yet to apply
                </td>
                <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                  University of California Midtown
                </td>
                <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                  USA
                </td>
                <td>
                  <button
                    onClick={() => router.push("/viewapplication")}
                    type="button"
                    className="h-10 font-gola	text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
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
                  ₹40,00,000
                </td>
                <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                  Yes
                </td>
                <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                  Yet to apply
                </td>
                <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                  University of California Midtown
                </td>
                <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                  USA
                </td>
                <td>
                  <button
                    onClick={() => router.push("/viewapplication")}
                    type="button"
                    className="h-10 font-gola	text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
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
                  ₹40,00,000
                </td>
                <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                  Yes
                </td>
                <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                  Yet to apply
                </td>
                <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                  University of California Midtown
                </td>
                <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                  USA
                </td>
                <td>
                  <button
                    type="button"
                    className="h-10 font-gola	text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
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
                  ₹40,00,000
                </td>
                <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                  Yes
                </td>
                <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                  Yet to apply
                </td>
                <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                  University of California Midtown
                </td>
                <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                  USA
                </td>
                <td>
                  <button
                    onClick={() => router.push("/viewapplication")}
                    type="button"
                    className="h-10 font-gola	text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
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
                  ₹40,00,000
                </td>
                <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                  Yes
                </td>
                <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                  Yet to apply
                </td>
                <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                  University of California Midtown
                </td>
                <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                  USA
                </td>
                <td>
                  <button
                    onClick={() => router.push("/viewapplication")}
                    type="button"
                    className="h-10 font-gola	text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
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
                  ₹40,00,000
                </td>
                <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                  Yes
                </td>
                <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                  Yet to apply
                </td>
                <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                  University of California Midtown
                </td>
                <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                  USA
                </td>
                <td>
                  <button
                    onClick={() => router.push("/viewapplication")}
                    type="button"
                    className="h-10 font-gola	text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
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
                  ₹40,00,000
                </td>
                <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                  Yes
                </td>
                <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                  Yet to apply
                </td>
                <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                  University of California Midtown
                </td>
                <td className="px-6 py-4 font-gola text-sm font-medium text-black">
                  USA
                </td>
                <td>
                  <button
                    onClick={() => router.push("/viewapplication")}
                    type="button"
                    className="h-10 font-gola	text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                  >
                    View
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ApplicantsComp;
