import Aside from "./components/Aside";
import Post from "./components/Post";
import Story from "./components/Story";

export default function Home() {
  return (
    <article className="grid grid-cols-1 md:grid-cols-3 mx-auto md:max-w-6xl">
      <div className="md:col-span-2">
        <Story />
        <Post />
      </div>
      <Aside />
    </article>
  );
}
