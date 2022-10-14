import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Header({ width }) {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  const handleHamburgerClick = () => {
    setIsOpen(!isOpen);
    ref.current.classList.toggle("open");
  };

  useEffect(() => {
    console.log(location);
    setActiveBar(location.pathname);
  }, [location]);

  const [activeBar, setActiveBar] = useState("/");

  return (
    <header
      className={`h-24 flex absolute top-0 xl:top-10 sm:left-6 sm:right-0 items-center nav-bar justify-between px-5 sm:px-0`}
      style={{ "--window-w": `${width}px` }}
    >
      <div>
        <a href="#!">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
            <g fill="none" fill-rule="evenodd">
              <circle cx="24" cy="24" r="24" fill="#FFF" />
              <path
                fill="#0B0D17"
                d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
              />
            </g>
          </svg>
        </a>
      </div>
      <div className="h-[1px] hidden  2xl:block  xl:ml-36 opacity-25 sm:w-1/5 lg:w-1/4 xl:w-1/3 absolute bg-third z-20"></div>
      <div className=" h-full w-5/6  xl:w-3/5 bg-primary ml-0 mr-0 xl:mr-14 rounded-bl-md xl:rounded-md hidden sm:block">
        <div className="z-20 flex items-center h-full ml-auto mr-36 w-full justify-center">
          <ul className="flex gap-x-8 lg:gap-x-16 h-full">
            <li
              className={`h-full border-b-[3px] transition-all  border-b-third hover:border-opacity-60 border-opacity-0  ${
                activeBar === "/tourism-website"
                  ? "border-opacity-100 hover:border-opacity-100"
                  : ""
              } `}
            >
              <Link
                to={`/tourism-website`}
                className="h-full w-full flex items-center"
              >
                <span className="mr-3">00</span>
                <span className="tracking-widest">HOME</span>
              </Link>
            </li>
            <li
              className={`h-full border-b-[3px] transition-all  border-b-third hover:border-opacity-60 border-opacity-0  ${
                activeBar === "/tourism-website/destination"
                  ? "border-opacity-100"
                  : ""
              } `}
            >
              <Link
                to={`destination`}
                className="h-full w-full flex items-center"
              >
                <span className="mr-3">01</span>
                <span className="tracking-widest">DESTINATION</span>
              </Link>
            </li>
            <li
              className={`h-full border-b-[3px] transition-all border-b-third hover:border-opacity-60 border-opacity-0  ${
                activeBar === "/tourism-website/crew"
                  ? "border-opacity-100"
                  : ""
              } `}
            >
              <Link to={`crew`} className="h-full w-full flex items-center">
                <span className="mr-3">02</span>
                <span className="tracking-widest">CREW</span>
              </Link>
            </li>
            <li
              className={`h-full border-b-[3px] transition-all border-b-third hover:border-opacity-60 border-opacity-0  ${
                activeBar === "/tourism-website/technology"
                  ? "border-opacity-100"
                  : ""
              } `}
            >
              <Link
                to={`technology`}
                className="h-full w-full flex items-center"
              >
                <span className="mr-3">03</span>
                <span className="tracking-widest">TECHNOLOGY</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        id="nav-icon1"
        className="block sm:hidden z-50"
        onClick={handleHamburgerClick}
        ref={ref}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div
        className={` ${
          isOpen ? "right-0" : "-right-full"
        } transition-all duration-1000 absolute top-0 w-9/12 h-screen z-40 ease-in-out blur-box sm:-right-full`}
      >
        <ul className="absolute top-36 text-2xl pl-10 w-full flex flex-col gap-y-6">
          <li
            className={` border-r-4 transition-all duration-700 border-r-third hover:border-opacity-60 border-opacity-0 h-[36px] ${
              activeBar === "/tourism-website"
                ? "border-opacity-100 hover:border-opacity-100"
                : ""
            } `}
          >
            <Link
              to={`/tourism-website`}
              className="h-full w-full flex items-center leading-5"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="mr-3">00</span>
              <span className="tracking-widest">HOME</span>
            </Link>
          </li>
          <li
            className={` border-r-4 transition-all duration-700 border-r-third hover:border-opacity-60 border-opacity-0 h-[36px] ${
              activeBar === "/tourism-website/destination"
                ? "border-opacity-100 hover:border-opacity-100"
                : ""
            } `}
          >
            <Link
              to={`destination`}
              className="h-full w-full flex items-center leading-5"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="mr-3">01</span>
              <span className="tracking-widest">DESTINATION</span>
            </Link>
          </li>
          <li
            className={` border-r-4 transition-all duration-700 border-r-third hover:border-opacity-60 border-opacity-0 h-[36px] ${
              activeBar === "/tourism-website/crew"
                ? "border-opacity-100 hover:border-opacity-100"
                : ""
            } `}
          >
            <Link
              to={`crew`}
              className="h-full w-full flex items-center leading-5"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="mr-3">02</span>
              <span className="tracking-widest">CREW</span>
            </Link>
          </li>
          <li
            className={` border-r-4 transition-all duration-700 border-r-third hover:border-opacity-60 border-opacity-0 h-[36px] ${
              activeBar === "/tourism-website/technology"
                ? "border-opacity-100 hover:border-opacity-100"
                : ""
            } `}
          >
            <Link
              to={`technology`}
              className="h-full w-full flex items-center leading-5"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="mr-3">03</span>
              <span className="tracking-widest">TECHNOLOGY</span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
