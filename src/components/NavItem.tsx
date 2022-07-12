import Link from "next/link";

interface NavItemProps {
  name: string;
  path: string;
  icon: string;
}

const NavItem = ({ name, path, icon }: NavItemProps) => {
  return (
    <ul className="nav nav-treeview">
      <li className="nav-item">
        <Link href={path}>
          <a className="nav-link">
            <i className={`nav-icon ${icon}`}></i>
            <p>{name}</p>
          </a>
        </Link>
      </li>
    </ul>
  );
};

export default NavItem;
