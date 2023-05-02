import { Drawer, DrawerContent, DrawerOverlay } from "@chakra-ui/modal";
import { useRouter } from "next/router";
import React from "react";

interface TelemarketingSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

function TelemarketingMobileSidebar({ isOpen, onClose }: TelemarketingSidebarProps) {
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <Drawer
      variant="sidebardrawer"
      isOpen={isOpen}
      placement="left"
      onClose={onClose}
      size={"xs"}
    >
      <DrawerOverlay />
      <DrawerContent>
        <div>
          <div
            style={{ border: "1px solid #E3E3E3" }}
            className="flex flex-col items-center h-screen w-[80px]"
          >
            <div className="flex flex-col items-center mt-[30px]">
              <div
                onClick={() => router.push("/telemarketing")}
                className={`${
                  currentRoute.includes("/telemarketing")
                    ? "bg-[#EBEBFF] pt-[11px] pb-[11px] pl-[16px] pr-[16px] rounded-lg"
                    : ""
                } cursor-pointer`}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    opacity={`${
                      currentRoute.includes("/telemarketing") ? "1" : "0.3"
                    }`}
                  >
                    <path
                      d="M15.29 10.29L12.51 13.07C12.3436 13.0257 12.1723 13.0022 12 13C11.4696 13 10.9609 13.2107 10.5858 13.5858C10.2107 13.9609 10 14.4696 10 15C10.0023 15.1722 10.0258 15.3435 10.07 15.51L9.29003 16.29C9.1963 16.383 9.12191 16.4936 9.07114 16.6154C9.02037 16.7373 8.99423 16.868 8.99423 17C8.99423 17.132 9.02037 17.2627 9.07114 17.3846C9.12191 17.5064 9.1963 17.617 9.29003 17.71C9.38299 17.8037 9.49359 17.8781 9.61545 17.9289C9.73731 17.9797 9.86802 18.0058 10 18.0058C10.132 18.0058 10.2627 17.9797 10.3846 17.9289C10.5065 17.8781 10.6171 17.8037 10.71 17.71L11.49 16.93C11.6565 16.9743 11.8278 16.9978 12 17C12.5305 17 13.0392 16.7893 13.4142 16.4142C13.7893 16.0391 14 15.5304 14 15C13.9978 14.8278 13.9743 14.6565 13.93 14.49L16.71 11.71C16.8983 11.5217 17.0041 11.2663 17.0041 11C17.0041 10.7337 16.8983 10.4783 16.71 10.29C16.5217 10.1017 16.2663 9.99591 16 9.99591C15.7337 9.99591 15.4783 10.1017 15.29 10.29ZM12 4C10.6868 4 9.38645 4.25866 8.1732 4.7612C6.95994 5.26375 5.85755 6.00035 4.92896 6.92893C3.0536 8.8043 2.00003 11.3478 2.00003 14C1.99511 15.9806 2.58375 17.9172 3.69003 19.56C3.83855 19.7801 4.06844 19.9322 4.32911 19.9829C4.58979 20.0335 4.8599 19.9785 5.08003 19.83C5.30016 19.6815 5.45227 19.4516 5.50291 19.1909C5.55354 18.9302 5.49855 18.6601 5.35003 18.44C4.54455 17.2355 4.08131 15.8349 4.00978 14.3877C3.93826 12.9405 4.26113 11.501 4.94392 10.223C5.62671 8.94501 6.64378 7.87643 7.88653 7.13139C9.12928 6.38634 10.5511 5.99281 12 5.99281C13.449 5.99281 14.8708 6.38634 16.1135 7.13139C17.3563 7.87643 18.3734 8.94501 19.0561 10.223C19.7389 11.501 20.0618 12.9405 19.9903 14.3877C19.9188 15.8349 19.4555 17.2355 18.65 18.44C18.5763 18.5489 18.5248 18.6714 18.4985 18.8002C18.4722 18.9291 18.4716 19.0619 18.4966 19.191C18.5217 19.3201 18.572 19.443 18.6447 19.5527C18.7173 19.6623 18.8109 19.7566 18.92 19.83C19.0856 19.9412 19.2806 20.0004 19.48 20C19.6438 20.0002 19.8052 19.9603 19.9499 19.8835C20.0946 19.8068 20.2183 19.6957 20.31 19.56C21.4163 17.9172 22.005 15.9806 22 14C22 11.3478 20.9465 8.8043 19.0711 6.92893C17.1957 5.05357 14.6522 4 12 4Z"
                      fill={`${
                        currentRoute.includes("/telemarketing")
                          ? "#205ED7"
                          : "#676767"
                      }`}
                    />
                  </g>
                </svg>
              </div>
              <h1
                className={`${
                  currentRoute.includes("/telemarketing")
                    ? "font-semibold"
                    : "font-normal"
                } mt-[14px] text-[11px] font-gola`}
              >
                Dashboard
              </h1>
            </div>
            <div className="flex flex-col items-center mt-[36px]">
              <div
                onClick={() => router.push("/calllogs")}
                className={`${
                  currentRoute.includes("/calllogs")
                    ? "bg-[#EBEBFF] pt-[11px] pb-[11px] pl-[16px] pr-[16px] rounded-lg"
                    : ""
                } cursor-pointer`}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.54 2C3.6 2.89 3.75 3.76 3.99 4.59L2.79 5.79C2.38 4.59 2.12 3.32 2.03 2H3.54ZM13.4 14.02C14.25 14.26 15.12 14.41 16 14.47V15.96C14.68 15.87 13.41 15.61 12.2 15.21L13.4 14.02ZM4.5 0H1C0.45 0 0 0.45 0 1C0 10.39 7.61 18 17 18C17.55 18 18 17.55 18 17V13.51C18 12.96 17.55 12.51 17 12.51C15.76 12.51 14.55 12.31 13.43 11.94C13.33 11.9 13.22 11.89 13.12 11.89C12.86 11.89 12.61 11.99 12.41 12.18L10.21 14.38C7.38 12.93 5.06 10.62 3.62 7.79L5.82 5.59C6.1 5.31 6.18 4.92 6.07 4.57C5.7 3.45 5.5 2.25 5.5 1C5.5 0.45 5.05 0 4.5 0Z"
                    fill={`${
                      currentRoute.includes("/calllogs")
                        ? "#205ED7"
                        : "#676767"
                    }`}
                  />
                </svg>
              </div>
              <h1
                className={`${
                  currentRoute.includes("/calllogs") ||
                  currentRoute.includes("/viewapplication")
                    ? "font-semibold"
                    : "font-normal"
                } mt-[14px] text-[11px] font-gola`}
              >
                Call logs
              </h1>
            </div>
            <div className="flex flex-col items-center mt-[36px]">
              <div
                onClick={() => router.push("/calltracking")}
                className={`${
                  currentRoute.includes("/calltracking") ||
                  currentRoute.includes("/viewapplicationstatus")
                    ? "bg-[#EBEBFF] pt-[11px] pb-[11px] pl-[16px] pr-[16px] rounded-lg"
                    : ""
                } cursor-pointer`}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    opacity={`${
                      currentRoute.includes("/calltracking") ||
                      currentRoute.includes("/viewapplicationstatus")
                        ? "1"
                        : "0.3"
                    }`}
                  >
                    <path
                      d="M20 4H4C2.9 4 2 4.9 2 6V9H4V6H20V9H22V6C22 4.9 21.1 4 20 4Z"
                      fill={`${
                        currentRoute.includes("/calltracking") ||
                        currentRoute.includes("/viewapplicationstatus")
                          ? "#205ED7"
                          : "#676767"
                      }`}
                    />
                    <path
                      d="M20 18H4V15H2V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V15H20V18Z"
                      fill={`${
                        currentRoute.includes("/calltracking") ||
                        currentRoute.includes("/viewapplicationstatus")
                          ? "#205ED7"
                          : "#676767"
                      }`}
                    />
                    <path
                      d="M14.89 7.55C14.55 6.87 13.44 6.87 13.1 7.55L10 13.76L8.89 11.55C8.72 11.21 8.38 11 8 11H2V13H7.38L9.1 16.45C9.28 16.79 9.62 17 10 17C10.38 17 10.72 16.79 10.89 16.45L14 10.24L15.11 12.45C15.28 12.79 15.62 13 16 13H22V11H16.62L14.89 7.55Z"
                      fill={`${
                        currentRoute.includes("/calltracking") ||
                        currentRoute.includes("/viewapplicationstatus")
                          ? "#205ED7"
                          : "#676767"
                      }`}
                    />
                  </g>
                </svg>
              </div>
              <h1
                className={`${
                  currentRoute.includes("/calltracking") ||
                  currentRoute.includes("/viewapplicationstatus")
                    ? "font-semibold"
                    : "font-normal"
                } mt-[14px] text-[11px] font-gola`}
              >
                Tracking
              </h1>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default TelemarketingMobileSidebar;
