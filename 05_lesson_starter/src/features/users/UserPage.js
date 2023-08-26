import { useSelector } from "react-redux";
import { selectUserById } from "./usersSlice";
import { selectAllPosts } from "../posts/postsSlice";
import { Link, useParams } from "react-router-dom";

const UserPage = () => {
  const { userId } = useParams();
  const user = useSelector((state) => selectUserById(state, Number(userId)));

  // The UserPage renders everytime the count in the header changes is due to this block of code :
  const postsForUser = useSelector((state) => {
    const allPosts = selectAllPosts(state);
    // Everytime the incrementCount action is dispatched, this useSelector is executed, it forces a re-render because a new value is returned from the filter
    return allPosts.filter((post) => post.userId === Number(userId));
  });

  const postTitles = postsForUser.map((post) => (
    <li key={post.id}>
      <Link to={`/post/${post.id}`}>{post.title}</Link>
    </li>
  ));

  return (
    <section>
      <h2>{user?.name}</h2>

      <ol>{postTitles}</ol>
    </section>
  );
};

export default UserPage;
