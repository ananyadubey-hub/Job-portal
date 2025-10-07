import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';    // Form Validation
import { yupResolver } from '@hookform/resolvers/yup';   // Form Validation
import * as yup from 'yup';   // Form Validation
import axios from 'axios';  // fetch data

// form validation schema
const schema = yup
  .object()
  .shape({
    jobTitle: yup.string().required(),
    experience: yup.number().required().min(0).max(35),
    jobType: yup.string().required(),
    vacancies: yup.string().required().min(1).max(100),
    jobLocation: yup.string().required(),
    salary: yup.number().required().min(5000).max(250000),
    applyDate: yup.string().required(),
    category: yup.string().required()
  })
const Postjob = () => {
      const [dataId,setData]=useState("")
      useEffect(()=>{
         const temData=JSON.parse(localStorage.getItem("data"));
         setData(temData)
             },[])
// form validation useform Hook
const { register, handleSubmit,reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const handleData = async(data) =>{
    
      const payload={
        companyId:dataId._id,
        jobTitle:data.jobTitle,
        experience:data.experience,
        jobType:data.jobType,
        vacancies:data.vacancies,
        jobLocation:data.jobLocation,
        salary:data.salary,
        applyDate:data.applyDate,
        category:data.category
      }
   const response=await axios.post("http://localhost:9000/api/recruiter-jobpost",payload,{
      headers: {
        "Content-Type":"application/json"
      }
    })  
    if(response.data.code==200){

      alert("Job posted successfully");
      reset()
    }
  }

  return (
    <>
     <div className="container my-5">
  <div className="row justify-content-center">
    <div className="col-md-10 col-lg-8">
      <div className="card shadow-sm">
        <div className="card-header text-center">
          <h4 className="mb-0 form_h2">Post a New Job</h4>
        </div>
        <div className="card-body p-4">
          <form onSubmit={handleSubmit(handleData)}>
            {/* Job Category & Job Title */}
            <div className="row mb-3">
              <div className="col-md-6">
                <div className="form-group">
                  <label className="mb-2 ms-1 mt-1">Job Category:</label>
                  <input
                    {...register('category')}
                    type="text"
                    className="form-control"
                    placeholder="Enter Job Category"
                  />
                  {errors.category?.message && (
                    <span className='err_span'>{errors.category?.message}</span>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label className="mb-2 ms-1 mt-1">Job Title:</label>
                  <input
                    {...register('jobTitle')}
                    type="text"
                    className="form-control"
                    placeholder="Enter Job Title"
                  />
                  {errors.jobTitle?.message && (
                    <span className='err_span'>{errors.jobTitle?.message}</span>
                  )}
                </div>
              </div>
            </div>

            {/* Experience & Job Type */}
            <div className="row mb-3">
              <div className="col-md-6">
                <div className="form-group">
                  <label className="mb-2 ms-1 mt-1">Experience (in years):</label>
                  <input
                    {...register('experience')}
                    type="number"
                    className="form-control"
                    placeholder="Enter Experience Needed To Apply"
                  />
                  {errors.experience?.message && (
                    <span className='err_span'>{errors.experience?.message}</span>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label className="mb-2 ms-1 mt-1">Job Type:</label>
                  <input
                    {...register('jobType')}
                    type="text"
                    className="form-control"
                    placeholder="Enter Job Type"
                  />
                  {errors.jobType?.message && (
                    <span className='err_span'>{errors.jobType?.message}</span>
                  )}
                </div>
              </div>
            </div>

            {/* Vacancies & Job Location */}
            <div className="row mb-3">
              <div className="col-md-6">
                <div className="form-group">
                  <label className="mb-2 ms-1 mt-1">Number of Vacancies:</label>
                  <input
                    {...register('vacancies')}
                    type="number"
                    className="form-control"
                    placeholder="Enter Number of Vacancies"
                  />
                  {errors.vacancies?.message && (
                    <span className='err_span'>{errors.vacancies?.message}</span>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label className="mb-2 ms-1 mt-1">Job Location:</label>
                  <input
                    {...register('jobLocation')}
                    type="text"
                    className="form-control"
                    placeholder="Enter Job Location"
                  />
                  {errors.jobLocation?.message && (
                    <span className='err_span'>{errors.jobLocation?.message}</span>
                  )}
                </div>
              </div>
            </div>

            {/* Salary & Last Apply Date */}
            <div className="row mb-3">
              <div className="col-md-6">
                <div className="form-group">
                  <label className="mb-2 ms-1 mt-1">Salary:</label>
                  <input
                    {...register('salary')}
                    type="number"
                    className="form-control"
                    placeholder="Enter Salary"
                  />
                  {errors.salary?.message && (
                    <span className='err_span'>{errors.salary?.message}</span>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label className="mb-2 ms-1 mt-1">Last Apply Date:</label>
                  <input
                    {...register('applyDate')}
                    type="date"
                    className="form-control"
                  />
                  {errors.applyDate?.message && (
                    <span className='err_span'>{errors.applyDate?.message}</span>
                  )}
                </div>
              </div>
            </div>

            <div className="d-grid ms-1 gap-2 d-md-flex justify-content-md-start">
              <input
                type="submit"
                value='Post Job'
                className="btn btn-outline-primary"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Postjob