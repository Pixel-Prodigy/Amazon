import { SearchBar } from "./SearchBar";

export function TopSection() {
  return (
    <div
      className={`h-[121px] gap-6 px-3 items-center w-full py-9 flex bg-[#0e1116]`}
    >
      <div>
        <span className="text-3xl text-white font-bold">amazon.in</span>
      </div>

      <div className="flex items-center gap-2">
        <span className="flex flex-col ">
          <span className="text-white whitespace-nowrap">Deliver to john</span>
          <span className="text-white text-lg whitespace-nowrap font-semibold">
            <span className="">Banglore</span> 56004
          </span>
        </span>
      </div>
      <SearchBar />
      <div className="flex gap-1">
        <select name="" className="border-none bg-transparent" id=""></select>
      </div>
    </div>
  );
}
