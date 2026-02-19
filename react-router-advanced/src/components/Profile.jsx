import { Link, Outlet } from 'react-router-dom';

const Profile = () => (
  <div style={{ padding: '20px', border: '1px solid #ccc' }}>
    <h2>User Profile</h2>
    <nav>
      <Link to="details">Profile Details</Link> | {" "}
      <Link to="settings">Profile Settings</Link>
    </nav>
    <hr />
    {/* This is where Nested Routes render */}
    <Outlet />
  </div>
);

export const ProfileDetails = () => <div><h3>Details: User Info and Bio</h3></div>;
export const ProfileSettings = () => <div><h3>Settings: Privacy and Security</h3></div>;