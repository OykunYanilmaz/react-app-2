// import axios from 'axios';
// import { useEffect, useState } from 'react';
import { useState } from 'react';
import usePosts from './hooks/usePosts';

const PostList = () => {
  // const [posts, setPosts] = useState<Post[]>([]);
  // const [error, setError] = useState('');

  const [userId, setUserId] = useState<number>();

  const { data, error, isLoading } = usePosts(userId);

  // useEffect(() => {
  //   axios
  //     .get('https://jsonplaceholder.typicode.com/posts')
  //     .then((res) => setPosts(res.data))
  //     .catch((error) => setError(error));
  // }, []);

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <>
    <select className="form-select mb-3" 
      onChange={(event) => setUserId(parseInt(event.target.value))} value={userId}>
      <option value=""></option>
      <option value="1">User 1</option>
      <option value="2">User 2</option>
      <option value="3">User 3</option>
    </select>
    <ul className="list-group">
      {data?.map((post) => (
        <li key={post.id} className="list-group-item">
          {post.title}
        </li>
      ))}
    </ul>
    </>
  );
};

export default PostList;
