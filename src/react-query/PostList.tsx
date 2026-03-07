// import axios from 'axios';
// import { useEffect, useState } from 'react';
import React, { useState } from "react";
import usePosts from "./hooks/usePosts";

const PostList = () => {
  // const [posts, setPosts] = useState<Post[]>([]);
  // const [error, setError] = useState('');

  // const [userId, setUserId] = useState<number>();

  const pageSize = 10;
  // const [page, setPage] = useState(1);

  const { data, error, isLoading, fetchNextPage, isFetchingNextPage } =
    usePosts({ pageSize });

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
      {/* <select className="form-select mb-3" 
      onChange={(event) => setUserId(parseInt(event.target.value))} value={userId}>
      <option value=""></option>
      <option value="1">User 1</option>
      <option value="2">User 2</option>
      <option value="3">User 3</option>
    </select> */}
      <ul className="list-group">
        {data.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.map((post) => (
              <li key={post.id} className="list-group-item">
                {post.title}
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>
      {/* <button disabled={page === 1} onClick={() => setPage(page - 1)} 
            className="btn btn-primary my-3">Previous</button> */}
      <button
        onClick={() => fetchNextPage()}
        disabled={isFetchingNextPage}
        className="btn btn-primary my-3 ms-1"
      >
        {isFetchingNextPage ? "Loading..." : "Load More"}
      </button>
    </>
  );
};

export default PostList;
