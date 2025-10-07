import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Route, Routes,useLocation } from "react-router-dom";
import "./App.css";
import AdminLogin from "./Components/Admin/AdminLogin";
import AdminSeeker from "./Components/Admin/AdminSeekerList";
import AdminRecruiter from "./Components/Admin/AdminRecruiterList";
import SeekerLogin from "./Components/JobSeeker/SeekerLogin";
import SeekerRegister from "./Components/JobSeeker/SeekerRegister";
import About from "./Components/LandingPage/About";
import Contact from "./Components/LandingPage/Contact";
import FindJob from "./Components/LandingPage/FindJob";
import Footer from "./Components/LandingPage/Footer";
import Home from "./Components/LandingPage/Home";
import NavBar from "./Components/LandingPage/NavBar";
import PostJob from "./Components/Recruiter/PostJob";
import RecruiterLogin from "./Components/Recruiter/RecruiterLogin";
import RecruiterRegister from "./Components/Recruiter/RecruiterRegiter";

import RecruiterPostedJobs from "./Components/Recruiter/PostedJobs"
import  Rprofile from "./Components/Recruiter/RecruiterProfile";
import SeekerApplyJobList from './Components/JobSeeker/SeekerApplyJobList'
import AdminUpdate from './Components/Admin/AdminProfile'
import SeekerUpdate from "./Components/JobSeeker/SeekerProfile";
import SeekerAppliedJob from './Components/JobSeeker/SeekerAppliedJob';
import RecruiterAppliedJob from './Components/Recruiter/RecruiterAppliedJob';
import { useEffect, useState } from "react";
// import ListApplier from "./Components/Recruiter/ListofAppliers"
function App(){
  const location=useLocation();
  const[role,setRole]=useState('')
  useEffect(()=>{
const userType=JSON.parse(localStorage.getItem("userType"));
setRole(userType)
  },[role,location])
 return (
  <> 

<NavBar />
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/findjob" element={<FindJob/>} />
<Route path="/about" element={<><About/></>}/>
<Route path="/contact" element={<><Contact/></>} />
<Route path="/admin/login" element={<><AdminLogin/></>}/>
<Route path="/seeker/login" element={<><SeekerLogin/></>} />
<Route path="/seeker/register" element={<><SeekerRegister/></>}/> 
<Route  path="/recruiter/register" element={<RecruiterRegister/>}/>  
<Route  path="/recruiter/login" element={<><RecruiterLogin/></>}/>  
{/* admin routes */}
{role=="admin" &&(<>

  <Route path="/admin" element={<AdminUpdate/>} />
<Route path="/admin/seekerlist" element={<><AdminSeeker/></>} />
<Route path="/admin/recruiterlist" element={<><AdminRecruiter/></>} />
</>)}
  {/* Seeker */}
  {role=="seeker" &&(<>
 <Route path="/seeker/login" element={<><SeekerLogin/></>} />
 <Route path="/seeker" element={<SeekerUpdate/>}/>
 <Route path="/seeker/jobapply" element={<SeekerApplyJobList/>} />
 <Route  path="/seeker/update" element={<SeekerUpdate/>}/>
 <Route path="/seeker/appliedjob" element={<SeekerAppliedJob/>} />
 </>)}
   {/* Recruiter */}  
   {role=="recruiter" &&(<>
 <Route  path="/recruiter" element={<Rprofile/>}/> 
 <Route path="/recruiter/postedjob" element={<RecruiterPostedJobs/>}/> 
 <Route  path="/recruiter/postjob" element={<><PostJob/></>}/>
 <Route  path="/recruiter/appliedjob" element={<RecruiterAppliedJob/>}/>
 </>)}
<Route path="*" element={<h1>404 Page not found</h1>}/>    
</Routes>
<Footer/>
</>
)
}
function  WrapperRouter(){
return(
<BrowserRouter>
<App/>
</BrowserRouter>

)
  }

export default  WrapperRouter