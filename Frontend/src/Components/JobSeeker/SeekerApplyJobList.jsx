import axios from "axios";
import { useState, useEffect } from "react";

function SeekerApplyJobList() {
  const [dataId, setData] = useState(null);
  const [jobData, setJobData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const temData = JSON.parse(localStorage.getItem("data"));
    setData(temData);
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:9000/api/seeker-joblist", {
        headers: { "Content-Type": "application/json" },
      });
      if (response.data.code === 200) {
        setJobData(response.data.data);
      }
    } catch (err) {
      console.error("Error fetching jobs:", err);
      setError("Failed to load job list.");
    } finally {
      setLoading(false);
    }
  };

  const handleApply = async (element) => {
    try {
      const payload = {
        companyId: element.companyId,
        userId: dataId?._id,
        jobId: element._id,
      };

      const response = await axios.post("http://localhost:9000/api/seeker-apply", payload, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.data.code === 200) {
        alert("Job Applied Successfully ✅");
      } else if (response.data.code === 301) {
        alert("You have already applied for this role ⚠️");
      }
    } catch (err) {
      console.error("Error applying for job:", err);
      alert("Something went wrong while applying ❌");
    }
  };

  if (loading) {
    return <div className="text-center my-5">Loading jobs...</div>;
  }

  if (error) {
    return <div className="text-center my-5 text-danger">{error}</div>;
  }

  return (
    <div className="container my-3">
      {jobData.length === 0 ? (
        <div className="text-center">No jobs available right now 🚀</div>
      ) : (
        jobData.map((el) => (
          <div className="card p-3 mb-3 postedjob_card" key={el._id}>
            <div className="row d-flex justify-content-center align-items-center">
              {/* Logo */}
              <div className="col-md-3 d-flex justify-content-center align-items-center">
                <img
                  src={`http://localhost:9000/upload/${el.logo}`}
                  alt="Company Logo"
                  className="img-fluid bg-dark"
                  style={{ maxHeight: "100px" }}
                />
              </div>

              {/* Company Info */}
              <div className="col-md-3 d-flex justify-content-start flex-column my-3">
                <h5 className="postedjob_h">{el.name}</h5>
                <div className="postedjob_p2 mb-2">
                  <span className="postedjob_p1">{el.jobTitle}</span>
                </div>
                <div className="postedjob_p2 mb-2">
                  <span className="postedjob_p1">{el.jobType}</span>
                </div>
              </div>

              {/* Job Details */}
              <div className="col-md-3">
                <div className="postedjob_p2 mb-2">
                  Category: <span className="postedjob_p1">{el.category}</span>
                </div>
                <div className="postedjob_p2 mb-2">
                  Location: <span className="postedjob_p1">{el.jobLocation}</span>
                </div>
                <div className="postedjob_p2 mb-2">
                  Salary: <span className="postedjob_p1">{el.salary}</span>
                </div>
              </div>

              {/* Apply Section */}
              <div className="col-md-3">
                <div className="postedjob_p2 mb-2">
                  Vacancies: <span className="postedjob_p1">{el.vacancies}</span>
                </div>
                <div className="postedjob_p2 mb-2">
                  Apply By: <span className="postedjob_p1">{el.applyDate}</span>
                </div>
                <input
                  className="form_button mt-3"
                  onClick={() => handleApply(el)}
                  type="submit"
                  value="APPLY NOW"
                  style={{ width: "150px", fontSize: "0.8em" }}
                />
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default SeekerApplyJobList;
