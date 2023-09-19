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
    setProfileDetails(userDetails);
    onClose();
  };

  const handleAddTask = () => {
    onClose();
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
                  <label htmlFor="name">Name</label>
                </div>
                <div>
                  <input
                    type="text"
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
                  <label htmlFor="assignee">Email</label>
                </div>
                <div>
                  <input
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
                  <label htmlFor="type">Phone</label>
                </div>
                <div>
                  <input
                    type="number"
                    required
                    onChange={(e) =>
                      setUserDetails({ ...userDetails, phone: e.target.value })
                    }
                    value={userDetails.type}
                  />
                </div>
              </div>
              <button className="btn btn-next cursor" onClick={handleNext}>
                Next
              </button>
            </div>
          )}
          <div className="flx-col pd"></div>

          {currentStep === "social" && (
            <div className="flx-col pd">
              <div className="sp-even  pd">
                <div>
                  <label htmlFor="insta-link">Instagram Link </label>
                </div>
                <div>
                  <input
                    type="text"
                    required
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
                  <label htmlFor="youtube-link">Youtube Link </label>
                </div>
                <div>
                  <input
                    type="text"
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
                <button className="btn btn-sv cursor" onClick={handleAddTask}>
                  Save
                </button>
                <button className="btn btn-x cursor" onClick={handleClose}>
                  Cancel
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
