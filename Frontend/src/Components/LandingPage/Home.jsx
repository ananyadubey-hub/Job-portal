  import Typewriter from 'typewriter-effect';
  import Category from './Category';
  import Resumes from './Resumes';
  import  Apply from './Apply'; 
  import Testimonial from './Testimonial';
  import Support from './Support';
  import BlogSection from './BlogSection';
  import RecentJobs from './RecentJobs';
import { useEffect } from 'react';
function Home(){
   useEffect(()=>{
    localStorage.removeItem("data");
     localStorage.removeItem("userType");
   },[])

    return (<>
     <div className="container-fluid">
  {/* start of hero section */}
  <div className="row hero_section">
    <div className="col-lg-2 col-md-1 col-sm-12"></div>
    <div className="col-lg-5 col-md-6 col-sm-12 pt-5 text-center text-lg-start">
      <h1 className="typewriter_hero">
        <Typewriter
          options={{
            strings: ['Find the most exciting startup jobs...'],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
    </div>
    <div className="col-lg-5 col-md-5 col-sm-12"></div>
  </div>

  {/* category section */}
  <Category />
  
  {/* resume section */}
  <Resumes />
  
  {/* apply section */}
  <Apply />
  
  {/* recent jobs section */}
  <RecentJobs />
  
  {/* testimonial section */}
  <Testimonial />
  
  {/* support section */}
  <Support />
  
  {/* blog section */}
  <BlogSection />
</div>

    </>)
}

export default Home;