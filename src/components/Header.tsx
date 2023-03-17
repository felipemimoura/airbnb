import Image from "next/image";
import {
  MagnifyingGlassIcon,
  GlobeAltIcon,
  Bars3Icon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-lg p-5 md:p-10 ">
      {/* left */}
      <div className="relative flex items-baseline h-10 cursor-pointer my-auto ">
        <Image
          src="https://links.papareact.com/qd3"
          alt="Image escrito AirBNB"
          objectFit="contain"
          objectPosition="left"
          fill
        />
      </div>
      {/* midle */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          type="text"
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
          placeholder="Start your search"
        />
        <MagnifyingGlassIcon className="hidden h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:inline-flex md:mx-2" />
      </div>
      {/* right */}
      <div className="flex items-center justify-end text-gray-500 space-x-4">
        <p className="hidden md:inline">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer-" />

        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <Bars3Icon  className="h-6"/>
          <UserCircleIcon  className="h-6"/>
        </div>
      </div>
    </header>
  );
};
