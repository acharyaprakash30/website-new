import React from 'react'
import './Dashboard.css'

function Sidebar() {
  return (
    <nav>
    <div className="logo-name">
        <div className="logo-image">
            logo here
            {/* <img src="images/logo.png" alt=""/> */}
        </div>

        <span className="logo_name">Ecommerce Website</span>
    </div>

    <div className="menu-items">
        <ul className="nav-links">
            <li>
                <i className="uil uil-estate"></i>
                <span className="link-name">Dashboard</span>
            </li>
            <li>
                <i className="uil uil-files-landscapes"></i>

                <span className="link-name">Content</span>
            </li>
            <li>
                <i className="uil uil-chart"></i>
                <span className="link-name">Analytics</span>
            </li>
            <li>
                <i className="uil uil-thumbs-up"></i>
                <span className="link-name">Like</span>
            </li>
            <li>
                <i className="uil uil-comments"></i>
                <span className="link-name">Comment</span>
            </li>
            <li>
                <i className="uil uil-share"></i>
                <span className="link-name">Share</span>
            </li>
        </ul>
        
        <ul className="logout-mode">
            <li>
                {/* <i className="uil uil-signout"></i> */}
                <span className="link-name">Logout</span>
            </li>

            <li className="mode">
                
                    {/* <i className="uil uil-moon"></i> */}
                <span className="link-name">Dark Mode</span>
            

            <div className="mode-toggle">
              <span className="switch"></span>
            </div>
        </li>
        </ul>
    </div>
</nav>
  )
}

export default Sidebar