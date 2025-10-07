import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';

// Validation schema using Yup
const schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  contact: Yup.string().matches(/^[0-9]{10}$/, 'Contact must be 10 digits').required('Contact is required'),
  location: Yup.string().required('Location is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  qualification: Yup.string().required('Qualification is required'),
  preference: Yup.string().required('Preference is required'),
  img: Yup.mixed().required('Profile image is required'),
  resume: Yup.mixed().required('Resume is required'),
});

const SeekerUpdate = () => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const userdetails = JSON.parse(localStorage.getItem("data"));
    if (userdetails) {
      setValue("name", userdetails.name);
      setValue("email", userdetails.email);
      setValue("contact", userdetails.contact);
      setValue("location", userdetails.location);
      setValue("password", userdetails.password);
      setValue("qualification", userdetails.qualification);
      setValue("preference", userdetails.preference);
    }
  }, [setValue]);

  const handleData = async (data) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('contact', data.contact);
    formData.append('location', data.location);
    formData.append('password', data.password);
    formData.append('qualification', data.qualification);
    formData.append('preference', data.preference);
    formData.append('img', data.img[0]);
    formData.append('resume', data.resume[0]);

    if (!data.img || !data.resume) {
      alert("Please select both image and resume");
      return;
    }

    const temData = JSON.parse(localStorage.getItem("data"));
    try {
      const response = await axios.put(`http://localhost:9000/api/seeker-update/${temData._id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.code === 200) {
        alert("Profile updated successfully");
      }
    } catch (error) {
      console.error("Error updating profile", error);
    }
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-sm form_card">
            <div className="card-header form_cardheader text-center">
              <h4 className="mb-0 form_h2">Seeker Profile Update</h4>
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
                      <input {...register('email')} type="text" className="form-control" placeholder="Enter Your Email" />
                      {errors.email?.message && <span className='err_span'>{errors.email?.message}</span>}
                    </div>
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="mb-2 ms-1 mt-1 form_label">Contact :</label>
                      <input {...register('contact')} type="number" className="form-control" placeholder="Enter Your Contact" />
                      {errors.contact?.message && <span className='err_span'>{errors.contact?.message}</span>}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="mb-2 ms-1 mt-1 form_label">Password :</label>
                      <input {...register('password')} type='password' className="form-control" placeholder='Enter Your Password' />
                      {errors.password?.message && <span className='err_span'>{errors.password?.message}</span>}
                    </div>
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="mb-2 ms-1 mt-1 form_label">Location :</label>
                      <input {...register('location')} type="text" className="form-control" placeholder="Enter Your Location" />
                      {errors.location?.message && <span className='err_span'>{errors.location?.message}</span>}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="mb-2 ms-1 mt-1 form_label">Qualification :</label>
                      <input {...register('qualification')} type="text" className="form-control" placeholder="Enter Your Qualification" />
                      {errors.qualification?.message && <span className='err_span'>{errors.qualification?.message}</span>}
                    </div>
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="mb-2 ms-1 mt-1 form_label">Preference :</label>
                      <input {...register('preference')} type="text" className="form-control" placeholder="Enter Your Preference" />
                      {errors.preference?.message && <span className='err_span'>{errors.preference?.message}</span>}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="mb-2 ms-1 mt-1 form_label">Profile Image :</label>
                      <input {...register('img')} type="file" className="form-control" accept="image/*" />
                      {errors.img?.message && <span className='err_span'>{errors.img?.message}</span>}
                    </div>
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="mb-2 ms-1 mt-1 form_label">Resume :</label>
                      <input {...register('resume')} type="file" className="form-control"/>
                      {errors.resume?.message && <span className='err_span'>{errors.resume?.message}</span>}
                    </div>
                  </div>
                </div>

                <div className="d-grid">
                  <input type="submit" value='UPDATE PROFILE' className="form_button" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeekerUpdate;
