import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function RecruiterAppliedJob(){
    const [dataId,setData]=useState()
    const [jobData,setJobData]=useState([])
    useEffect(()=>{
        const temData=JSON.parse(localStorage.getItem("data"));
        setData(temData)
            getData()
         
    },[]) 

 
    const getData=async()=>{
        const temData=JSON.parse(localStorage.getItem("data"));
        const payload={
            companyId:temData._id
        }
     const response= await axios.post("http://localhost:9000/api/recruiter-applied",payload,{
            headers:{
                "Content-Type":"application/json"
            }
          })
        if(response.data.code==200){
            setJobData(response.data.data)
        }  

    }


    return (<>
        <div className="container my-3">
                
                {jobData.map((el) => {
                    console.log(el,"###########################################")
                    return (
                        <div className="card p-3 mb-3 postedjob_card">
                        <div className="row d-flex justify-content-center align-items-center">
                            {/* Logo Column */}
                            <div className="col-md-3 d-flex justify-content-center align-items-center">
                                <img src={`http://localhost:9000/upload/${el.img}`} alt="Company Logo" className="img-fluid bg-dark" style={{ maxHeight: '100px' }} />
                            </div>

                            {/* Company Name, Job Title, and Job Type Column */}
                            <div className="col-md-3 d-flex justify-content-start flex-column my-3">
                                <h5 className='postedjob_h'> {el.name}</h5>
                                <div className='postedjob_p2 mb-2'><span className='postedjob_p1'> {el.jobTitle}</span></div>
                                <div className='postedjob_p2 mb-2'><span className='postedjob_p1'> {el.jobType}</span></div>
                            </div>

                            {/* Job Category, Location, and Salary Column */}
                            <div className="col-md-3">
                                <div className='postedjob_p2 mb-2'>Category: <span className='postedjob_p1'> {el.category}</span></div>
                                <div className='postedjob_p2 mb-2'>Location: <span className='postedjob_p1'> {el.jobLocation}</span></div>
                                <div className='postedjob_p2 mb-2'>Salary: <span className='postedjob_p1'> {el.salary}</span></div>
                            </div>

                            {/* Apply Date and Vacancies Column */}
                            <div className="col-md-3">
                                <div className='postedjob_p2 mb-2'>Contact: <span className='postedjob_p1'> {el?.contact}</span></div>
                                <div className='postedjob_p2 mb-2'>Email: <span className='postedjob_p1'> {el?.email}</span></div>
                                <div className='postedjob_p2 mb-2'> 
                                <a href={`http://localhost:9000/upload/${el.resume}`} target="_blank">Download</a></div> 
                                </div>
                        </div>
                        </div>
                    )
                })}
            
        </div>
     </>)
}

export default RecruiterAppliedJob; 