import React, { useContext, useState } from "react";
import "./Dashboard.css";
import { useAuth0 } from "@auth0/auth0-react";
import { MdDashboard } from "react-icons/md";
import { MdDiscount } from "react-icons/md";
import { BiSolidTimeFive } from "react-icons/bi";
import { MdOutlineAccountCircle } from "react-icons/md";
import { AiTwotoneSetting } from "react-icons/ai";
import { MdNotificationsNone } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { PiUsersBold } from "react-icons/pi";
import { BiLike } from "react-icons/bi";
import { CiMoneyBill } from "react-icons/ci";
import { GrAddCircle } from "react-icons/gr";
import { BsWhatsapp } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { GrYoutube } from "react-icons/gr";
import BarGraph from "../../components/BarGraph/BarGraph";
import DoughnutChart from "../../DoughnutChart/DoughnutChart";
import { DataContext } from "../../context/DataContext";
import AddProfile from "../../components/AddProfile/AddProfile";

const Dashboard = ({ userDetails }) => {
  const { logout, user, isAuthenticated } = useAuth0();
  const localStorageData = JSON.parse(localStorage.getItem("loginDetails"));

  const [currentUser, setCurrentUser] = useState(localStorageData?.user);
  console.log(currentUser);
  const { profileDetails } = useContext(DataContext);
  const [showAddProfilePopup, setShowAddProfilePopup] = useState(false);

  const handleAddProfile = () => {
    setShowAddProfilePopup(!showAddProfilePopup);
    setShowProfile(true);
  };
  const [showProfile, setShowProfile] = useState(false);
  console.log("ppppp", profileDetails);

  const handleLogout = async () => {
    try {
      await logout({ logoutParams: { returnTo: window.location.origin } });
      localStorage.removeItem("loginDetails");
      setCurrentUser(null);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };
  return (
    <div>
      <div className="dashboard-container">
        <div className="left-menu-side">
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
        <div className="right-side">
          <div className="nav">
            <div className="nav-heading">Dashboard</div>
            <div className="nav-right">
              <div className="search-input">
                <input className="inp" type="text" placeholder="Search..." />
                <span className="search-icon">
                  <FiSearch />
                </span>
              </div>
              <div className="noti-icon">
                <MdNotificationsNone />
              </div>
              <div>
                <img
                  className="avatar"
                  src={currentUser?.picture}
                  alt={currentUser?.nickname}
                />
              </div>
              <button className="login-button" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>
          <div className="card">
            <div className="card-items">
              <div>
                <span className="total-rev">
                  <MdDiscount />
                </span>
              </div>
              <div>Total Revenues</div>
              <div className="sp-btw-flx">
                <div className="bold">$22,5656</div>
                <div>
                  <span className="round">+2.5%</span>
                </div>
              </div>
            </div>

            <div className="card-items">
              <div>
                <span className="total-tran">
                  <CiMoneyBill />
                </span>
              </div>
              <div>Total Transactions</div>
              <div className="sp-btw-flx">
                <div className="bold">1,520</div>
                <div>
                  <span className="round">+1.75%</span>
                </div>
              </div>
            </div>

            <div className="card-items">
              <div>
                <span className="total-likes">
                  <BiLike />
                </span>
              </div>
              <div>Total Likes</div>
              <div className="sp-btw-flx">
                <div className="bold">9,721</div>
                <div>
                  <span className="round">+1.4%</span>
                </div>
              </div>
            </div>

            <div className="card-items">
              <div>
                <span className="total-users">
                  <PiUsersBold />
                </span>
              </div>
              <div>Total Users</div>
              <div className="sp-btw-flx">
                <div className="bold">9,721</div>
                <div>
                  <span className="round">+4.5%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="activities-graph">
            <div className="b-g-flx">
              <div className="bar-g-left">
                <div className="acti">Activities</div>
                <div>May - June 2023</div>
              </div>
              <div className="bar-g-right">
                <div className="dot-flx">
                  {" "}
                  <div class="g-dot"></div>Guest
                </div>
                <div className="dot-flx">
                  <div class="u-dot"></div>User
                </div>
              </div>
            </div>
            <div
              style={{ width: "80%", margin: "0 auto" }}
              className="bar-chart"
            >
              <BarGraph />
            </div>
          </div>
          <div className="pie">
            <div className="pie-chart">
              <div className="pie-flx">
                <div>Top Products</div>
                <div>May June 2021</div>
              </div>
              <div className="dough">
                <div>
                  {" "}
                  <DoughnutChart />
                </div>
                <div className="label">
                  <div>
                    <div className="bitcoin"></div> Bitcoin
                  </div>
                  <div>
                    <div className="Ethereum"></div>Ethereum
                  </div>
                  <div>
                    <div className="Cardano"></div> Cardano
                  </div>
                  <div>
                    <div className="Solana"></div>Solana
                  </div>
                </div>
              </div>
            </div>

            <div className="profile-conatiner">
              {showProfile && Object.keys(profileDetails).length !== 0 ? (
                <div className="wi">
                  <div className="bold">{profileDetails?.name}</div>
                  <div className="flx">
                    <div className="cont">
                      <div className="cont-socil">
                        {" "}
                        <span className="wa">
                          <BsWhatsapp />
                        </span>
                        {profileDetails?.phone}
                      </div>
                      <div className="cont-socil">
                        <span className="em">
                          <MdEmail />
                        </span>
                        {profileDetails?.email}
                      </div>
                    </div>
                    <div className="cont">
                      {profileDetails?.instagram && (
                        <div className="cont-socil">
                          <span className="inst">
                            <FaInstagram />
                          </span>
                          {profileDetails?.instagram}
                        </div>
                      )}
                      {profileDetails?.youtube && (
                        <div className="cont-socil">
                          <span className="yt">
                            <GrYoutube />
                          </span>
                          {profileDetails?.youtube}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div onClick={handleAddProfile}>
                  <span className="add-icon">
                    <GrAddCircle />
                  </span>
                </div>
              )}

              {showAddProfilePopup && (
                <AddProfile onClose={() => setShowAddProfilePopup(false)} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
