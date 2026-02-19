import React from 'react';
import { useQuery } from 'react-query';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) throw new Error('Failed to fetch posts');
  return response.json();
};

const PostsComponent = () => {
  const { data, error, isLoading, isError, refetch, isFetching } = useQuery(
    'posts',
    fetchPosts,
    {
      // 1. How long the data stays in memory after the component unmounts (5 minutes)
      cacheTime: 300000, 
      
      // 2. Automatically refresh data when the user clicks back onto the browser tab
      refetchOnWindowFocus: true, 
      
      // 3. Keep old data on screen while fetching new data (prevents jarring layout shifts)
      keepPreviousData: true,
      
      // Bonus: staleTime determines when data is "old" enough to need a refresh
      staleTime: 5000, 
    }
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
        <h2>Posts</h2>
        <button onClick={() => refetch()} disabled={isFetching}>
          {isFetching ? 'Refreshing...' : 'Manual Refetch'}
        </button>
      </div>

      {/* Visual indicator of background fetching */}
      {isFetching && <p style={{ color: 'blue' }}>Updating in background...</p>}

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {data.slice(0, 5).map((post) => (
          <li key={post.id} style={postItemStyle}>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const postItemStyle = {
  borderBottom: '1px solid #ddd',
  marginBottom: '10px',
  paddingBottom: '10px'
};

export default PostsComponent;