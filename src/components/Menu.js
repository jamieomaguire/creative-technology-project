import { Link } from 'react-router'

import FaPieChart from 'react-icons/lib/fa/pie-chart'
import FaAreaChart from 'react-icons/lib/fa/area-chart'
import MdSettings from 'react-icons/lib/md/settings'


export const Menu = () => (
  <nav className="menu">
   <ul className="menu-nav-list">
     <li className="menu-nav-listItem">
       <Link to="/" activeClassName="menu-nav-selected">
         <FaPieChart />
         <h3 className="menu-nav-link-heading">Today</h3>
       </Link>
     </li>
     <li className="menu-nav-listItem">
       <Link to="/overview" activeClassName="menu-nav-selected">
         <FaAreaChart />
         <h3 className="menu-nav-link-heading">Overview</h3>
       </Link>
     </li>
    <li className="menu-nav-listItem">
       <Link to="/settings" activeClassName="menu-nav-selected">
         <MdSettings />
         <h3 className="menu-nav-link-heading">Settings</h3>
       </Link>
     </li>
   </ul>
  </nav>
)