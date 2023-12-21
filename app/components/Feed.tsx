import Image from "next/image";
import myPhoto from "../../public/images/my-photo.jpg";
import { USERS } from "./_utils";

const Feed = () => {
  console.log(USERS[0].avatar)
  return (
    <article>
      <section>
        <div className="flex space-x-2 p-6 border overflow-x-scroll scrollbar-none rounded-sm">
          <div className="cursor-pointer">
            <Image
              src={myPhoto}
              alt="photo"
              width={40}
              height={40}
              className="rounded-full p-[1.5px] border-2 border-red-500 hover:scale-110 transition-transform duration-200 ease-out"
            />
            <p className="text-xs w-14 truncate text-center">yevhen2575</p>
          </div>
          {USERS.map(({ userId, username, avatar }) => (
            <div key={userId} className="cursor-pointer">
              <Image
                src={avatar}
                alt={`photo${username}`}
                width={40}
                height={40}
                className="rounded-full p-[1.5px] border-2 border-red-500 hover:scale-110 transition-transform duration-200 ease-out"
              />
              <p className="text-xs w-14 truncate text-center">{username}</p>
            </div>
          ))}
        </div>
      </section>
      <section></section>
    </article>
  );
};

export default Feed;
