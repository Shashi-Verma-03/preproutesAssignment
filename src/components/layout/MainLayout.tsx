import { Outlet } from "react-router-dom";
// import Header from "./Header";
// import Sidebar from "./Sidebar";

const MainLayout = () => {
  return (
    <div className="main-layout">
      {/* <Sidebar /> */}

      <div  className="content">
        {/* <Header /> */}
        <h1>My App</h1>

        <main className="main">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
