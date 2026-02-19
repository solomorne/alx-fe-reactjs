import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { QueryClient, QueryClientProvider } from 'react-query';
import PostsComponent from './components/PostsComponent';

const queryClient = new QueryClient();

function App() {
  const [showPosts, setShowPosts] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ padding: '20px' }}>
        <h1>React Query Demo</h1>
        <button onClick={() => setShowPosts(!showPosts)}>
          {showPosts ? 'Hide Posts (Unmount)' : 'Show Posts (Mount)'}
        </button>
        <hr />
        {showPosts && <PostsComponent />}
      </div>
    </QueryClientProvider>
  );
}

export default App;