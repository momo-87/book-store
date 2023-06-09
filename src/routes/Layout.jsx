import Navbar from 'components/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => (
  <div>
    <Navbar />
    <Outlet />
  </div>
);
export default Layout;
