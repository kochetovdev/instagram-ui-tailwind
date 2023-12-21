import Image from "next/image";
import { IoSearchSharp } from "react-icons/io5";
import { IoHome } from "react-icons/io5";
import { FiPlusCircle } from "react-icons/fi";
import myPhoto from "../../public/images/my-photo.jpg";

const Header = () => {
  return (
    <article className="sticky top-0 border-b shadow-sm bg-white z-30">
      <div className="flex justify-between items-center h-24 mx-4 xl:max-w-6xl xl:mx-auto">
        <div className="hidden lg:inline-grid cursor-pointer">
          <Image
            className="object-cover"
            width={100}
            height={100}
            src="https://www.jennexplores.com/wp-content/uploads/2015/09/Instagram_logo_black.png"
            alt="Instagram"
          />
        </div>
        <div className="lg:hidden cursor-pointer">
          <Image
            className="object-cover"
            width={40}
            height={40}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png"
            alt="Instagram logo"
          />
        </div>

        <div className="relative mt-1">
          <div className="absolute top-2.5 left-2">
            <IoSearchSharp className="h-5 w-5 text-gray-500" />
          </div>
          <input
            type="text"
            className="pl-10 rounded-md focus:ring-black focus:border-black bg-gray-50 border-gray-500 text-sm"
          />
        </div>
        <div className="flex space-x-4 items-center">
          <IoHome className="w-6 h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out hidden md:inline-flex" />
          <FiPlusCircle className="w-6 h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out" />
          <Image
            src={myPhoto}
            alt="my-photo"
            width={40}
            height={40}
            className="object-cover rounded-full cursor-pointer"
          />
        </div>
      </div>
    </article>
  );
};

export default Header;
