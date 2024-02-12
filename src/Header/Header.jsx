import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router DOM
import "../style.css"; // Import your CSS file

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const bodyRef = useRef(null);
  const darkLightRef = useRef(null);
  const sidebarRef = useRef(null);
  const submenuItemsRef = useRef([]);

  useEffect(() => {
    const handleWindowResize = () => {
      setIsSidebarOpen(window.innerWidth >= 768);
    };

    handleWindowResize(); // Call initially to set sidebar state based on window width
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleDarkLightClick = () => {
    bodyRef.current.classList.toggle("dark");
    if (bodyRef.current.classList.contains("dark")) {
      darkLightRef.current.classList.replace("bx-sun", "bx-moon");
    } else {
      darkLightRef.current.classList.replace("bx-moon", "bx-sun");
    }
  };

  const handleSubmenuItemToggle = (index) => {
    submenuItemsRef.current.forEach((item, index2) => {
      if (index !== index2) {
        item.classList.remove("show_submenu");
      }
    });
    submenuItemsRef.current[index].classList.toggle("show_submenu");
  };

  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="logo_item">
          <i
            className="bx bx-menu text-light"
            id="sidebarOpen"
            onClick={toggleSidebar}
          ></i>
          Web Synergies
        </div>
        <div className="search_bar">
          <input type="text" placeholder="Search" />
        </div>
        <div className="navbar_content">
          <i className="bi bi-grid text-light"></i>
          <i
            className="bx bx-sun text-light"
            id="darkLight"
            onClick={handleDarkLightClick}
            ref={darkLightRef}
          ></i>
          <i className="bx bx-bell text-light"></i>
          {/* Remove the image tag for profile picture */}
        </div>
      </nav>
      <nav
        className={`sidebar ${isSidebarOpen ? "" : "close"}`}
        ref={sidebarRef}
      >
        <div className="menu_content">
          <ul className="menu_items">
            <li className="item">
              <Link
                to="/dashboard/employee"
                className="nav_link submenu_item"
                onClick={() => handleSubmenuItemToggle(0)}
              >
                <span className="navlink_icon">
                  <i className="bx bx-home-alt"></i>
                </span>
                <span className="navlink">Manage Employees</span>
                <i className="bx bx-chevron-right arrow-left"></i>
              </Link>
              <Link
                to="/dashboard/category"
                className="nav_link submenu_item"
                onClick={() => handleSubmenuItemToggle(0)}
              >
                <span className="navlink_icon">
                  <i className="bx bx-home-alt"></i>
                </span>
                <span className="navlink">Category</span>
                <i className="bx bx-chevron-right arrow-left"></i>
              </Link>
            </li>
            <li className="item">
              <div
                className="nav_link submenu_item"
                onClick={() => handleSubmenuItemToggle(1)}
              >
                <span className="navlink_icon">
                  <i className="bx bx-grid-alt"></i>
                </span>
                <span className="navlink">Overview</span>
                <i className="bx bx-chevron-right arrow-left"></i>
              </div>
              <ul
                className="menu_items submenu"
                ref={(el) => (submenuItemsRef.current[1] = el)}
              ></ul>
            </li>
          </ul>
          {/* Additional menu items go here */}
          <ul className="menu_items">
            <div className="menu_title menu_editor"></div>
            <li className="item">
              <a href="#" className="nav_link">
                <span className="navlink_icon">
                  <i className="bx bxs-magic-wand"></i>
                </span>
                <span className="navlink">Magic build</span>
              </a>
            </li>
          </ul>
          {/* Additional menu items go here */}
        </div>
      </nav>
    </>
  );
}

export default Header;
