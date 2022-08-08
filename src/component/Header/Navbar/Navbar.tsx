import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <nav className="  bg-white  border-solid border-2 shadow-lg p-2 text-[25px] rounded-[40px] ml-5 ">
      <button className="flex " onClick={handleMenu}>
        <AiOutlineMenu />
        <FaUserCircle className="ml-2" />
        {openMenu && (
          <div className=" list-none absolute bottom-[7rem] right-48 bg-gray-500  shadow-lg text-left text-sm p-5 text-[10px] rounded-b-lg ">
            <li className="cursor-poiter my-5 text-[16px] ">Đăng Ký</li>
            <li className="cursor-poiter my-5 text-[16px]">Đăng Nhập</li>

            <hr />

            <li className="cursor-poiter my-5 text-[16px] ">Cho Thuê Nhà</li>
            <li className="cursor-poiter my-5 text-[16px]">
              Tổ Chức Trải Nghiệm
            </li>
            <li className="cursor-poiter my-5 text-[16px]">Trợ Giúp</li>
          </div>
        )}
      </button>
    </nav>
  );
};

export default Navbar;
