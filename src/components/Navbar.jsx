import { Link } from 'react-router-dom';
import { ImUser } from 'react-icons/im';
import 'styles/Navbar.scss';

const Navbar = () => {
  const links = [
    { path: '/', text: 'BOOKS' },
    { path: 'categories', text: 'CATEGORIES' },
  ];
  return (
    <nav>
      <div className="logo-menu-box">
        <div className="logo-box">Bookstore CMS</div>
        <ul>
          {links.map((link) => (
            <li key={link.path}>
              <Link to={link.path}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="user">
        <ImUser />
      </div>
    </nav>
  );
};
export default Navbar;
