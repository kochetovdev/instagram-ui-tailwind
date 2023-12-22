import Image from "next/image";
import myPhoto from "../../public/images/my-photo.jpg";

const suggestionData = [
  { username: "john26375", jobTitle: "Manager", img: 14 },
  { username: "nadya123", jobTitle: "Designer", img: 16 },
  { username: "patricia345", jobTitle: "Developer", img: 23 },
];

const Aside = () => {
  return (
    <article className="hidden md:inline-grid md:col-span-1">
      <div className="fixed w-[380px]">
        <div className="flex items-center justify-between mt-14 ml-10">
          <Image
            width={40}
            height={40}
            src={myPhoto}
            alt="user-image"
            className="rounded-full border p-[2px]"
          />
          <div className="flex-1 ml-4">
            <h2 className="font-bold">yevhen2575</h2>
            <h3 className="text-gray-400 text-sm">Welcome to instagram</h3>
          </div>
          <button className="font-smibold text-blue-400 text-sm">
            Switch out
          </button>
        </div>
        <div className="mt-4 ml-10">
          <div className="flex justify-between mb-5 text-sm">
            <h3 className="font-bold text-gray-400">Suggestions for you</h3>
            <button className="text-gray-600 font-semibold">See all</button>
          </div>
          {suggestionData.map(({ username, jobTitle, img }) => (
            <div key={img} className="flex items-center justify-between mt-3">
              <Image
                src={`https://i.pravatar.cc/150?img=${img}`}
                alt="user-image"
                width={30}
                height={30}
                className="rounded-full p-[2px]"
              />
              <div className="flex-1 ml-4">
                <h2 className="font-semibold text-sm">{username}</h2>
                <h3 className="text-sm text-gray-400">{jobTitle}</h3>
              </div>
              <button className="font-semibold text-blue-400 text-sm">
                Follow
              </button>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

export default Aside;
