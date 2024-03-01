
const Navbar = () => (
  <div className="py-2 px-5">
    <div className="flex justify-between">
      <a
        href="#"
        className="w-28 h-14"
        style={{
          backgroundImage: "url('src/assets/icons/Ytlogo.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      ></a>
      <Searcharea />
      <div className="flex gap-3">
        {["video", "bell", "user"].map((icon, index) => (
          <div
            key={index}
            style={{
              backgroundImage: `url('../../assets/icons/${icon}.png')`,
              backgroundSize: "25px",
              backgroundRepeat: "no-repeat",
            }}
            className="w-10 h-10 hover:cursor-pointer"
          ></div>
        ))}
      </div>
    </div>
  </div>
);

function Searcharea() {
  return (
    <div className="flex h-10 border border-gray-800 rounded-s-3xl  rounded-e-3xl">
      <input
        type="text"
        className="border bg-transparent border-gray-800 focus:border-[#1E90FF]  focus:outline-none   rounded-e-none p-1.5 pl-3 rounded-3xl text-base w-[30rem]"
        placeholder="Search"
      />
      <div className="w-10">
        <button className="w-10 h-8 pl-5  text-center text-sm text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0,0,256,256"
            width="25px"
            height="25px"
          >
            <g
              fill="#ffffff"
              fill-rule="nonzero"
              stroke="none"
              stroke-width="1"
              stroke-linecap="butt"
              stroke-linejoin="miter"
              stroke-miterlimit="10"
              stroke-dasharray=""
              stroke-dashoffset="0"
              font-family="none"
              font-weight="none"
              font-size="none"
              text-anchor="none"
            >
              <g transform="scale(5.12,5.12)">
                <path d="M21,3c-9.37891,0 -17,7.62109 -17,17c0,9.37891 7.62109,17 17,17c3.71094,0 7.14063,-1.19531 9.9375,-3.21875l13.15625,13.125l2.8125,-2.8125l-13,-13.03125c2.55469,-2.97656 4.09375,-6.83984 4.09375,-11.0625c0,-9.37891 -7.62109,-17 -17,-17zM21,5c8.29688,0 15,6.70313 15,15c0,8.29688 -6.70312,15 -15,15c-8.29687,0 -15,-6.70312 -15,-15c0,-8.29687 6.70313,-15 15,-15z"></path>
              </g>
            </g>
          </svg>
        </button>
      </div>
      <button className="w-9 h-9 border border-none bg-[rgb(49,48,48)] p-2 rounded-full relative left-14">
        <svg
          viewBox="-5 0 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          fill="#ffffff"
          stroke="#ffffff"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <title>microphone</title>
            <desc>Created with Sketch Beta.</desc>
            <defs></defs>
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g
                id="Icon-Set-Filled"
                transform="translate(-107.000000, -309.000000)"
                fill="#ffffff"
              >
                <path
                  d="M118,333 C121.866,333 125,329.866 125,326 L125,316 C125,312.134 121.866,309 118,309 C114.134,309 111,312.134 111,316 L111,326 C111,329.866 114.134,333 118,333 L118,333 Z M129,328 L127,328 C126.089,332.007 122.282,335 118,335 C113.718,335 109.911,332.007 109,328 L107,328 C107.883,332.799 112.063,336.51 117,336.955 L117,339 L116,339 C115.448,339 115,339.448 115,340 C115,340.553 115.448,341 116,341 L120,341 C120.552,341 121,340.553 121,340 C121,339.448 120.552,339 120,339 L119,339 L119,336.955 C123.937,336.51 128.117,332.799 129,328 L129,328 Z"
                  id="microphone"
                ></path>
              </g>
            </g>
          </g>
        </svg>
      </button>
    </div>
  );
}

export default Navbar;
