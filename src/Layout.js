import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import useWindowSize from './hooks/useWindowSize';
import { useStoreState, useStoreActions } from 'easy-peasy';


const Layout = () => {
  const search = useStoreState((state) => state.search);
  const setSearch = useStoreActions((actions) => actions.search);
  const {width} = useWindowSize();
  
  return (
    <div className='App'>
        <Header title="React JS Blog" width={width}/>
        <Nav search={search} setSearch={setSearch}/>
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout