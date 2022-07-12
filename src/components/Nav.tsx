import Link from "next/link";
import { MouseEvent, useCallback, useState } from "react";

interface NavProps {
  name: string;
  path: string;
  icon: string;
  angle: boolean;
  children?: React.ReactNode;
}

const Nav = ({ name, path, icon, angle, children }: NavProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const onClickAngleBtn = useCallback(
    (event: MouseEvent<HTMLLIElement, globalThis.MouseEvent>) => {
      if (open) {
        event.currentTarget.className = "nav-item"; // close
        setOpen(!open);
      } else {
        event.currentTarget.className = "nav-item menu-is-opening menu-open"; // open
        setOpen(!open);
      }
    },
    [open]
  );

  return (
    <li className="nav-item" onClick={onClickAngleBtn}>
      <Link href={path}>
        <a className="nav-link">
          <i className={`nav-icon ${icon}`}></i>
          <p>
            {name}
            {angle ? <i className="fas fa-angle-left right"></i> : ""}
          </p>
        </a>
      </Link>
      {children ?? ""}
    </li>
  );
};

export default Nav;
