import { Outlet } from "react-router-dom";
import Header from "../component/Header";

const MainTemplate = () => {
  return (
    <div className="flex h-screen flex-col font-roboto">
      {/* Header  */}
      <Header />
      {/* Body  */}
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default MainTemplate;
