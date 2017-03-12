import FaSignOut from 'react-icons/lib/fa/sign-out'
import FaLock from 'react-icons/lib/fa/lock'
import FaEnvelope from 'react-icons/lib/fa/envelope'
import MdColorLens from 'react-icons/lib/md/color-lens'



export const Settings = () => (
  <section className="settings">
    <h2 className="settings-heading">Settings</h2>
    <ul className="settings-list">
      <li className="settings-listItem">
<<<<<<< HEAD
        <a href="javascript:void(0)" className="settings-link"><MdColorLens /> Colour blindness options</a>
      </li>
      <li className="settings-listItem">
        <a href="javascript:void(0)" className="settings-link"><FaEnvelope /> Change Email Address</a>
      </li>
      <li className="settings-listItem">
        <a href="javascript:void(0)" className="settings-link"><FaLock /> Change Password</a>
      </li>
      <li className="settings-listItem">
        <a href="javascript:void(0)" className="settings-link"><FaSignOut/> Logout</a>
      </li>
    </ul>
  </section>
)