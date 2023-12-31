
import Home from './Home';
import NewPost from './NewPost';
import EditPost from './EditPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import Layout from './Layout';
import { Routes, Route } from 'react-router-dom';
import useAxiosFetch from './hooks/useAxiosFetch';
import { useEffect } from 'react';
import { useStoreActions } from 'easy-peasy';


function App() {
  const setPosts = useStoreActions((actions) => actions.setPosts);

  const { data, fetchError, isLoading} = useAxiosFetch("http://localhost:3500/posts");

  useEffect(() => {
      setPosts(data);
  }, [data, setPosts])

  return (
    <Routes>
      <Route path="/" Component={Layout}>
        <Route index element={<Home isLoading={isLoading} fetchError={fetchError} />} />
        <Route path="/post">
          <Route index Component ={NewPost} />
          <Route path=":id">
            <Route index Component={PostPage} />
            <Route path="edit" Component={EditPost} />
          </Route>
        </Route>
        <Route path="/about" Component={About} />
        <Route path="*" Component={Missing} />
      </Route>
    </Routes>
  );
}

export default App;
