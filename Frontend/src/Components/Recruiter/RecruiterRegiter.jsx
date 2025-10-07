import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
const schema = yup
  .object()
  .shape({
    name: yup.string().required().min(2).max(15),
    email: yup.string().required().email(),
    contact: yup.string().required(),
    password: yup.string().required(),
    location: yup.string().required(),
    logo: yup.mixed().required(),
  })

 function RecruiterRegister(){

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
      });
      const handleData=async(data)=>{
         const formData=new FormData();
         formData.append("name",data.name);
         formData.append("email",data.email)
         formData.append("contact",data.contact)
         formData.append("password",data.password)
         formData.append("location",data.location)
         formData.append("logo",data.logo[0])
         await   axios.post("http://localhost:9000/api/recruiter-register",formData,{
            headers:{
                "Content-Type":"multipart/form-data"
            }
           })
    alert("Registation SuccessFull !.")
      
      }

    return(<>
    <div className="row">
        <div className="col-sm-1"></div>
        <div className="col-sm-10">
            <div className="row">
                <div className="col-sm-6 form_div_register recuiter_register">
                 <div className="register_img"></div>
                </div>
                <div className="col-sm-6 form_div_register ">
                    <h2 className="recruiter_signUp_text">Recruiter <span style={{color: "#db0249"}}>SingUp</span></h2>
                <div className="p-4">
                <form onSubmit={handleSubmit(handleData)}>
                <div className="row mb-4">
                    <input  className="form-control " 
                    placeholder="Enter Your Name"
                    type="text"
                    {...register('name')}
                    />
                     {errors.name?.message && <span  className='error_msg'>{errors.name?.message}</span>}
                </div>
                <div className="row mb-4 ">
                    <input  className="form-control " 
                    placeholder="Enter Your email"
                    type="text"
                    {...register('email')}
                    />
                     {errors.email?.message && <span  className='error_msg'>{errors.email?.message}</span>}
                </div>
                <div className="row mb-4">
                    <input  className="form-control " 
                    placeholder="Enter Your contact"
                    type="number"
                    {...register('contact')}/>
                    {errors.contact?.message && <span  className='error_msg'>{errors.contact?.message}</span>}
                </div>
                <div className="row mb-4">
                    <input  className="form-control " 
                    placeholder="Enter Your password"
                    type="password"
                    {...register('password')}
                    />
                    {errors.password?.message && <span  className='error_msg'>{errors.password?.message}</span>}
                </div>
                <div className="row mb-4">
                    <input  className="form-control " 
                    placeholder="Enter Your location"
                    type="text"
                    {...register('location')}/>
                    {errors.location?.message && <span  className='error_msg'>{errors.location?.message}</span>}
                </div>
                <div className="row mb-4">
                    <input  className="form-control " 
                    type="file"
                    {...register('logo')}
                    />
                    {errors.logo?.message && <span  className='error_msg'>{errors.logo?.message}</span>}
                </div>
                <div className="row mb-4">
                    <input  className="register_submit form-control " 
                    type="submit"
                    value="SignUp"
                    />
                </div>
                </form>     
                </div>
                </div>
            </div>
        </div>
        <div className="col-sm-1"></div>
    </div>
    <br />
    <br />
    </>)
 }

 export default RecruiterRegister;