import Image from "next/image";
import myPhoto from "../../public/images/my-photo.jpg";
import { HiDotsHorizontal } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { BsChatDots } from "react-icons/bs";
import { FaRegPaperPlane } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { HiOutlineEmojiHappy } from "react-icons/hi";

const Post = () => {
  return (
    <article>
      <section className="border my-7 bg-white rounded-md">
        <div className="flex items-center p-5">
          <Image
            src={myPhoto}
            alt="user-image"
            width={40}
            height={40}
            className="rounded-full border p-1 mr-3"
          />
          <p className="flex-1 font-bold text-sm">yevhen2575</p>
          <HiDotsHorizontal />
        </div>
        <Image
          src="https://images.unsplash.com/photo-1703001376280-fbd9fc684136?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D"
          alt="nature"
          width={400}
          height={300}
          layout="responsive"
        />
        <div className="flex justify-between px-4 pt-4">
          <div className="flex space-x-4">
            <FaRegHeart className="btn" />
            <BsChatDots className="btn" />
            <FaRegPaperPlane className="btn" />
          </div>
          <div className="">
            <FaRegBookmark className="btn" />
          </div>
        </div>
        <p className="p-5 truncate">
          <span className="font-bold mr-2">yevhen2575</span>
          nice picture
        </p>
        <div className="mx-10 max-h-24 overflow-y-scroll scrollbar-none">
          <div className="flex items-center space-x-2 mb-2">
            <Image
              src="https://i.pravatar.cc/150?img=3"
              alt="user-image"
              width={40}
              height={40}
              className="rounded-full"
            />
            <p className="font-semibold">Daniel</p>
            <p className="flex-1 truncate">nice</p>
            <p>2 hours ago</p>
          </div>
          <div className="flex items-center space-x-2 mb-2">
            <Image
              src="https://i.pravatar.cc/150?img=2"
              alt="user-image"
              width={40}
              height={40}
              className="rounded-full"
            />
            <p className="font-semibold">Nancy384</p>
            <p className="flex-1 truncate">amazing</p>
            <p>1 hours ago</p>
          </div>
          <div className="flex items-center space-x-2 mb-2">
            <Image
              src="https://i.pravatar.cc/150?img=4"
              alt="user-image"
              width={40}
              height={40}
              className="rounded-full"
            />
            <p className="font-semibold">Michael</p>
            <p className="flex-1 truncate">This is cool!</p>
            <p>1 hours ago</p>
          </div>
        </div>
        <form className="flex items-center p-4">
          <HiOutlineEmojiHappy className="h-7 w-7" />
          <input
            className="border-none flex-1 focus:ring-0"
            type="text"
            placeholder="Enter your comment"
          />
          <button className="font-bold text-blue-400">Post</button>
        </form>
      </section>
      <section className="border my-7 bg-white rounded-md">
        <div className="flex items-center p-5">
          <Image
            src={myPhoto}
            alt="user-image"
            width={40}
            height={40}
            className="rounded-full border p-1 mr-3"
          />
          <p className="flex-1 font-bold text-sm">yevhen2575</p>
          <HiDotsHorizontal />
        </div>
        <div>
          <Image
            src="https://images.unsplash.com/photo-1682687981630-cefe9cd73072?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D"
            alt="nature"
            width={400}
            height={300}
            layout="responsive"
          />
        </div>
        <div className="flex justify-between px-4 pt-4">
          <div className="flex space-x-4">
            <FaHeart className="btn text-red-500" />
            <BsChatDots className="btn" />
            <FaRegPaperPlane className="btn" />
          </div>
          <div className="">
            <FaBookmark className="btn" />
          </div>
        </div>
        <p className="p-5 truncate">
          <span className="font-bold">2 likes</span>
          <br />
          <span className="font-bold mr-2">yevhen2575</span>
          nice picture
        </p>
        <div className="mx-10 max-h-24 overflow-y-scroll scrollbar-none">
          <div className="flex items-center space-x-2 mb-2">
            <Image
              src="https://i.pravatar.cc/150?img=5"
              alt="user-image"
              width={40}
              height={40}
              className="rounded-full"
            />
            <p className="font-semibold">Daniel</p>
            <p className="flex-1 truncate">nice</p>
            <p>4 hours ago</p>
          </div>
          <div className="flex items-center space-x-2 mb-2">
            <Image
              src="https://i.pravatar.cc/150?img=2"
              alt="user-image"
              width={40}
              height={40}
              className="rounded-full"
            />
            <p className="font-semibold">Nancy384</p>
            <p className="flex-1 truncate">amazing</p>
            <p>2 hours ago</p>
          </div>
          <div className="flex items-center space-x-2 mb-2">
            <Image
              src="https://i.pravatar.cc/150?img=6"
              alt="user-image"
              width={40}
              height={40}
              className="rounded-full"
            />
            <p className="font-semibold">Michael</p>
            <p className="flex-1 truncate">This is cool!</p>
            <p>6 hours ago</p>
          </div>
        </div>
        <form className="flex items-center p-4">
          <HiOutlineEmojiHappy className="h-7 w-7" />
          <input
            className="border-none flex-1 focus:ring-0"
            type="text"
            placeholder="Enter your comment"
          />
          <button className="font-bold text-blue-400">Post</button>
        </form>
      </section>
    </article>
  );
};

export default Post;
