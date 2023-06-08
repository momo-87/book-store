import { Link } from 'react-router-dom';
import { ImUser } from 'react-icons/im';

const Navbar = () => {
  const links = [
    { path: '/', text: 'BOOKS' },
    { path: 'categories', text: 'CATEGORIES' },
  ];
  return (
    <nav>
      <div>
        <div>BookStore CMS</div>
        <ul>
          {links.map((link) => (
            <li key={link.path}>
              <Link to={link.path}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ImUser />
      </div>
    </nav>
  );
};
export default Navbar;
