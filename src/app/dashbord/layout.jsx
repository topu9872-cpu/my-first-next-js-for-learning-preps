import Link from "next/link";

const DashBordLayout = ({ children }) => {
  return (
    <div className="drawer drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        {/* Navbar */}
        <nav className="navbar w-full">

        </nav>
        {/* Page content here */}
        {children}
        
      </div>

      <div className="drawer-side is-drawer-close:overflow-visible">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-26 is-drawer-open:w-full">
          {/* Sidebar content here */}
          <ul className="menu w-full ">
            {/* List item */}
            
            <li>
              <Link href="/dashbord">DashBord</Link>
            </li>
            <li>
  <Link href="/dashbord/revenue">Revenue</Link>
</li>
<li>
  <Link href="/dashbord/profile">Profile</Link>
</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBordLayout;
