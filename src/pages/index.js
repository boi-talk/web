import ExampleComponent from "../components/ExampleComponent";
import Post from "../components/Post";

export default function Home() {
  return (
    <main>
      <p>Hello planet!</p>
      <ExampleComponent />
      <br />
      <Post />
      <br />
      <Post />
    </main>
  );
}
