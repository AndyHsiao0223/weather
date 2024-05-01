import Image from "next/image";

const SearchBar: React.FC = () => {
  return (
    <div className="flex justify-center">
      <form className="flex h-10 w-[23rem] items-center bg-[#EBEBEB]">
        <input
          type="search"
          placeholder="未開放"
          className="h-10 w-[20.5rem] bg-inherit px-4"
        />
        <button
          type="submit"
          className="flex h-10 w-10 items-center justify-center focus:bg-slate-300"
        >
          <Image src="/search.svg" alt="search" width={19} height={18} />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
