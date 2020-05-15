import React from "react";
import { Link } from "gatsby";
import navbarStyles from "./navbar.module.css";

export default function Navbar({ children }) {
    let pages = ['home', 'projects', 'articles', 'education'];

    return (
        <div className={navbarStyles.container}>
          <div className={navbarStyles.leftContainer}>
           <Link to='/'><p className={navbarStyles.title}>Nolan Freeman</p></Link>
            <div className={navbarStyles.breadcrumbContainer}>
              <span className={navbarStyles.breadcrumbItem}>Developer / Learner / Human</span>;
            </div>
          </div>
        <div className={navbarStyles.navContainer}>
          <ul className={navbarStyles.list}>
            {
                pages.map(page => {
                    return (<li className={navbarStyles.link}>
                            <Link to={page === 'home' ? '' : `/${page}/` }>
                                    <p className={navbarStyles.linktext}>{`/${page}`}</p>
                                </Link>
                            </li>);
                })
            }
            </ul>
        </div>
        </div>
    );
}
// display a link to the coresponding page for each level in the breadcrumb
