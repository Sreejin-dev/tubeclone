const Navbar = () => (
  <div className="py-2 px-5">
    <div className="flex justify-between">
      <a
        href="#"
        className="w-28 h-14"
        style={{
          backgroundImage:
            "url('https://vectorseek.com/wp-content/uploads/2021/01/YouTube-Logo-Vector.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      ></a>
      <Searcharea />
      <div className="flex gap-3 ">
        {["video", "bell", "user"].map((icon, index) => (
          <div
            key={index}
            style={{
              backgroundImage: `url('src/assets/icons/${icon}.png')`,
              backgroundSize: "30px",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
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
    <div className="flex h-10 border border-gray-400 rounded-s-3xl border-gray-400 rounded-e-3xl">
      <input
        type="text"
        className="border border-r-gray-400 rounded-e-none p-1.5 pl-3 rounded-3xl text-base w-[30rem]"
        placeholder="Search"
      />
      <div className="w-10">
        <button
          style={{
            backgroundImage: "url('src/assets/icons/search.png')",
            backgroundSize: "20px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          className="w-10 h-8 pr-16"
        ></button>
      </div>
      <button
        style={{
          backgroundImage: "url('src/assets/icons/voice.png')",
          backgroundSize: "17px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="w-8 h-8 border border-none bg-gray-200 rounded-full relative left-10"
      ></button>
    </div>
  );
}

export default Navbar;
