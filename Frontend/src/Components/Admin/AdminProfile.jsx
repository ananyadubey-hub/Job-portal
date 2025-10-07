import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';    // Form Validation
import { yupResolver } from '@hookform/resolvers/yup';   // Form Validation
import * as yup from 'yup';   // Form Validation
import '../../app.css'
import axios from 'axios';

const schema = yup
    .object()
    .shape({
        name: yup.string().required().min(2).max(30),
        email: yup.string().required().email(),
        contact: yup.string().required(),
        password: yup.string().required(),
        location: yup.string().required(),
        img: yup.mixed().required()
    })


const AdminUpdate = () => {
      useEffect(()=>{
        const userdetails= JSON.parse(localStorage.getItem("data"));
        if(userdetails){
          setValue("name",userdetails.name);
          setValue("email",userdetails.email);
          setValue("contact",userdetails.contact);
          setValue("password",userdetails.password);
          setValue("location",userdetails.location)
        }
      },[])
    
    const { register, handleSubmit,setValue, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const handleData = async (data) => {
         if(!data || data.img.length==0){
          alert("Please select an image"); 
          return ;
         } 
      const temData=JSON.parse(localStorage.getItem("data"));
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('contact', data.contact);
        formData.append('password', data.password);
        formData.append('location', data.location);
        formData.append('img', data.img[0]);
        const response=await axios.put(`http://localhost:9000/api/admin-update/${temData._id}`,formData,{
          headers:{
            "Content-Type":"multipart/form-data"
          }
        })
        if(response.data.code==200){
          alert("Admin Updated Successfully");
        }
    }


    return(
        <div className="container my-5">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card shadow-sm form_card">
                <div className="card-header form_cardheader text-center">
                  <h4 className="mb-0 form_h2">Admin Profile Update</h4>
                </div>
                <div className="card-body p-4">
                  <form onSubmit={handleSubmit(handleData)}>
                    <div className="row mb-3">
                      <div className="col-md-6">
                      <div className="form-group">
                          <label className="mb-2 ms-1 mt-1 form_label">Name :</label>
                          <input {...register('name')} type="text" className="form-control" placeholder="Enter Your Name" />
                          {errors.name?.message && <span className='err_span'>{errors.name?.message}</span>}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="mb-2 ms-1 mt-1 form_label">Email :</label>
                          <input {...register('email')} type="text" readOnly={true} className="form-control" placeholder="Enter Your Email" />
                          {errors.email?.message && <span className='err_span'>{errors.email?.message}</span>}
                        </div>
                      </div>
                    </div>
    
                    <div className="row mb-3">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="mb-2 ms-1 mt-1 form_label">Contact :</label>
                          <input {...register('contact')} type="number" className="form-control" placeholder="Enter Your Contact"/>
                          {errors.contact?.message && <span className='err_span'>{errors.contact?.message}</span>}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="mb-2 ms-1 mt-1 form_label">Password :</label>
                          <input type='password' {...register('password')} className="form-control" placeholder='Enter Your Password'/>
                          {errors.password?.message && <span className='err_span'>{errors.password?.message}</span>}
    
                        </div>
                      </div>
                    </div>
    
                    <div className="row mb-3">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="mb-2 ms-1 mt-1 form_label">Location :</label>
                          <input {...register('location')} type="text" className="form-control" placeholder="Enter Your Password"/>
                          {errors.location?.message && <span className='err_span'>{errors.location?.message}</span>}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="mb-2 ms-1 mt-1 form_label">img :</label>
                          <input {...register('img')} type="file" className="form-control" accept='img/*' />
                          {errors.img?.message && <span className='err_span'>{errors.img?.message}</span>}
                        </div>
                      </div>
                    </div>
                    <div className="d-grid">
                      <input type="submit" value='UPDATE PROFILE' className="form_button"/>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    )


    
}

export default AdminUpdate