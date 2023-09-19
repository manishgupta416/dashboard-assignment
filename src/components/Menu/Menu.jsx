import React from "react";
import "./Menu.css";
import { MdDashboard } from "react-icons/md";
import { MdDiscount } from "react-icons/md";
import { BiSolidTimeFive } from "react-icons/bi";
import { MdOutlineAccountCircle } from "react-icons/md";
import { AiTwotoneSetting } from "react-icons/ai";
const Menu = ({ onClose }) => {
  const handleClose = () => {
    onClose();
  };
  return (
    <div className=" add-task-container popup-background">
      <div className=" popup-content pop-width">
        <div className="add-flx">
          <button className="login-button" onClick={handleClose}>
            X
          </button>
        </div>

        <div className="flx-row flex-inp-column menu-width">
          <div className="left-menu-side">
            <div className="menu-contain">
              <div className="board">Board</div>
              <div className="sp-btw">
                <div className="align-c gap">
                  <span className="span-icon">
                    <MdDashboard />
                  </span>
                  <span>Dashboard</span>
                </div>
                <div className="align-c  gap">
                  <span className="span-icon">
                    <MdDiscount />
                  </span>
                  <span>Transactions</span>
                </div>
                <div className="align-c gap">
                  <span className="span-icon">
                    <BiSolidTimeFive />
                  </span>
                  <span> Sechdules</span>
                </div>
                <div className="align-c gap">
                  <span className="span-icon">
                    {" "}
                    <MdOutlineAccountCircle />
                  </span>
                  <span>Users</span>
                </div>
                <div className="align-c gap">
                  <span className="span-icon">
                    <AiTwotoneSetting />
                  </span>
                  <span> Settings</span>
                </div>
              </div>
            </div>
            <div className="left-bottm">
              <div>Help</div>
              <div className="cont">Contact Us</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
