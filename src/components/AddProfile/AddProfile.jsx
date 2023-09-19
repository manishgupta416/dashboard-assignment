import React, { useContext, useState } from "react";
import "./AddProfile.css";
import { DataContext } from "../../context/DataContext";

const AddProfile = ({ onClose }) => {
  const { profileDetails, setProfileDetails } = useContext(DataContext);
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
    instagram: "",
    youtube: "",
  });
  console.log(userDetails);
  const handleClose = () => {
    onClose();
  };

  const handleAddTask = () => {
    if (
      userDetails.name !== "" ||
      userDetails.phone !== "" ||
      userDetails.email !== ""
    ) {
      setProfileDetails(userDetails);
      onClose();
    } else {
      alert("Please Enter All Required fields");
    }
  };
  const [currentStep, setCurrentStep] = useState("basic");

  const handleNext = () => {
    if (currentStep === "basic") {
      setCurrentStep("social");
    }
  };

  return (
    <div className=" add-task-container popup-background">
      <div className=" popup-content pop-width">
        <div className="add-flx">
          <strong>Add New Profile</strong>
          <button className="login-button" onClick={handleClose}>
            X
          </button>
        </div>

        <div className="flx-row flex-inp-column">
          <div className="step-header">
            <div
              className={`step ${currentStep === "basic" ? "active" : ""}`}
              onClick={() => setCurrentStep("basic")}
            >
              Basic
            </div>
            <div
              className={`step ${currentStep === "social" ? "active" : ""}`}
              onClick={() => setCurrentStep("social")}
            >
              Social
            </div>
          </div>
          {currentStep === "basic" && (
            <div className="flx-col pd">
              <div className="sp-even  pd">
                <div>
                  <label htmlFor="name">Enter Name*</label>
                </div>
                <div>
                  <input
                    className="inp-pd"
                    type="text"
                    placeholder="Eg. Manish Gupta"
                    required
                    onChange={(e) =>
                      setUserDetails({ ...userDetails, name: e.target.value })
                    }
                    value={userDetails.name}
                  />
                </div>
              </div>
              <div className="sp-even  pd">
                <div>
                  <label htmlFor="assignee">Enter Email*</label>
                </div>
                <div>
                  <input
                    placeholder="Eg. manish.info2020@gmail.com"
                    className="inp-pd"
                    type="text"
                    required
                    onChange={(e) =>
                      setUserDetails({
                        ...userDetails,
                        email: e.target.value,
                      })
                    }
                    value={userDetails.email}
                  />
                </div>
              </div>
              <div className="sp-even  pd">
                <div>
                  <label htmlFor="type">Enter Phone*</label>
                </div>
                <div>
                  <input
                    placeholder="Eg. 7739464193"
                    className="inp-pd"
                    type="number"
                    required
                    onChange={(e) =>
                      setUserDetails({ ...userDetails, phone: e.target.value })
                    }
                    value={userDetails.phone}
                  />
                </div>
              </div>
            </div>
          )}
          {currentStep === "basic" && (
            <div className="flx-end">
              <button className="login-button" onClick={handleNext}>
                Next
              </button>
            </div>
          )}
          {currentStep === "social" && (
            <div className="flx-col pd">
              <div className="sp-even  pd">
                <div>
                  <label htmlFor="insta-link">Instagram Link(Optional) </label>
                </div>
                <div>
                  <input
                    className="inp-pd"
                    type="text"
                    required
                    placeholder="Eg. https://www.instagram.com/manish_gupta416/"
                    onChange={(e) =>
                      setUserDetails({
                        ...userDetails,
                        instagram: e.target.value,
                      })
                    }
                    value={userDetails.effortSpent}
                  />
                </div>
              </div>
              <div className="sp-even  pd">
                <div>
                  <label htmlFor="youtube-link">Youtube Link(Optional) </label>
                </div>
                <div>
                  <input
                    placeholder="Eg. https://www.youtube.com/manish_gupta416/"
                    type="text"
                    className="inp-pd"
                    required
                    onChange={(e) =>
                      setUserDetails({
                        ...userDetails,
                        youtube: e.target.value,
                      })
                    }
                    value={userDetails.youtube}
                  />
                </div>
              </div>

              <div className="sp-btw sp-even">
                <button className="login-button" onClick={handleAddTask}>
                  Save
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default AddProfile;
