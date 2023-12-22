import Image from "next/image";
import myPhoto from "../../public/images/my-photo.jpg";
import { USERS } from "../_utils";
import { GoPlus } from "react-icons/go";

const Story = () => {
  return (
    <article>
    <div className="flex space-x-2 p-6 border overflow-x-scroll scrollbar-none rounded-sm">
      <div className="cursor-pointer relative group">
        <Image
          src={myPhoto}
          alt="photo"
          width={50}
          height={50}
          className="rounded-full p-[1.5px] border-2 border-red-500 group-hover:scale-110 transition-transform duration-200 ease-out"
        />
        <p className="text-xs w-14 truncate text-center">yevhen2575</p>
        <GoPlus className="text-3xl absolute text-white top-2.5 left-2.5" />
      </div>
      {USERS.map(({ userId, username, avatar }) => (
        <div key={userId} className="cursor-pointer group">
          <Image
            src={avatar}
            alt={`photo${username}`}
            width={50}
            height={50}
            className="rounded-full p-[1.5px] border-2 border-red-500 hover:scale-110 transition-transform duration-200 ease-out"
          />
          <p className="text-xs w-14 truncate text-center">{username}</p>
        </div>
      ))}
    </div>
  </article>
  )
}

export default Story