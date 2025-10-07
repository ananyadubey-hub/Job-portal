import axios from "axios";
import { useState, useEffect } from "react";

function SeekerAppliedJob() {
  const [jobData, setJobData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const temData = JSON.parse(localStorage.getItem("data"));
    if (!temData) return;

    const payload = {
      userId: temData._id,
    };

    try {
      const response = await axios.post(
        "http://localhost:9000/api/seeker-applied",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.code === 200) {
        setJobData(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching applied jobs:", error);
    }
  };

  return (
    <>
      <div className="container my-3">
        {jobData.map((el, index) => {
          return (
            <div
              className="card p-3 mb-3 postedjob_card"
              key={el._id || index} // 🔑 key prop add kiya
            >
              <div className="row d-flex justify-content-center align-items-center">
                {/* Logo Column */}
                <div className="col-md-3 d-flex justify-content-center align-items-center">
                  <img
                    src={`http://localhost:9000/upload/${el.logo}`}
                    alt="Company Logo"
                    className="img-fluid bg-dark"
                    style={{ maxHeight: "100px" }}
                  />
                </div>

                {/* Company Name, Job Title, and Job Type Column */}
                <div className="col-md-3 d-flex justify-content-start flex-column my-3">
                  <h5 className="postedjob_h"> {el.name}</h5>
                  <div className="postedjob_p2 mb-2">
                    <span className="postedjob_p1"> {el.jobTitle}</span>
                  </div>
                  <div className="postedjob_p2 mb-2">
                    <span className="postedjob_p1"> {el.jobType}</span>
                  </div>
                </div>

                {/* Job Category, Location, and Salary Column */}
                <div className="col-md-3">
                  <div className="postedjob_p2 mb-2">
                    Category: <span className="postedjob_p1"> {el.category}</span>
                  </div>
                  <div className="postedjob_p2 mb-2">
                    Location: <span className="postedjob_p1"> {el.jobLocation}</span>
                  </div>
                  <div className="postedjob_p2 mb-2">
                    Salary: <span className="postedjob_p1"> {el.salary}</span>
                  </div>
                </div>

                {/* Apply Date and Vacancies Column */}
                <div className="col-md-3">
                  <div className="postedjob_p2 mb-2">
                    Vacancies: <span className="postedjob_p1"> {el.vacancies}</span>
                  </div>
                  <div className="postedjob_p2 mb-2">
                    Apply By: <span className="postedjob_p1"> {el.applyDate}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default SeekerAppliedJob;
