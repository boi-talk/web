import ExampleComponent from '../components/ExampleComponent';
import Post from '../components/Post';
import CreatePost from '../components/CreatePost';
import Protected from '../components/Protected';

export default function Home() {
  return (
    <Protected>
      <main>
        <p>whats happening</p>
        <CreatePost />
        <p>Hello planet!</p>
        <ExampleComponent />
        <br />
        <Post />
        <br />
        <Post />
      </main>
    </Protected>
  );
}
