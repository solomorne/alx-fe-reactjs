import React from 'react';
import { useQuery } from 'react-query';

// The fetcher function
const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const PostsComponent = () => {
  // useQuery(unique_key, fetcher_function)
  const { data, error, isLoading, isError, refetch, isFetching } = useQuery(
    'posts', 
    fetchPosts,
    {
      staleTime: 10000, // Data stays "fresh" for 10 seconds
    }
  );

  if (isLoading) return <div>Loading posts...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <h2>Posts</h2>
        <button onClick={() => refetch()}>Refetch Data</button>
        {isFetching && <span>Updating...</span>}
      </div>

      <ul style={{ maxHeight: '400px', overflowY: 'auto' }}>
        {data.slice(0, 10).map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;