function FindJob(){

    const jobs_arr=[
        {
            img:"job-list1.png",
            jobTitle: 'Digital Marketer',
            companyName: 'Creative Agency',
            location: 'Athens, Greece',
            salary: '$3500 - $4000',
            jobBtn: 'Full Time',
            postedTime: '7 hours ago',
        },
        {
            img:"job-list2.png",
            jobTitle: 'Digital Marketer',
            companyName: 'Creative Agency',
            location: 'Athens, Greece',
            salary: '$3500 - $4000',
            jobBtn: 'Full Time',
            postedTime: '7 hours ago',
        },
        {
            img:"job-list3.png",
            jobTitle: 'Digital Marketer',
            companyName: 'Creative Agency',
            location: 'Athens, Greece',
            salary: '$3500 - $4000',
            jobBtn: 'Full Time',
            postedTime: '7 hours ago',
        },
        {
            img:"job-list4.png",
            jobTitle: 'Digital Marketer',
            companyName: 'Creative Agency',
            location: 'Athens, Greece',
            salary: '$3500 - $4000',
            jobBtn: 'Full Time',
            postedTime: '7 hours ago',
        },
        {
            img:"job-list1.png",
            jobTitle: 'Digital Marketer',
            companyName: 'Creative Agency',
            location: 'Athens, Greece',
            salary: '$3500 - $4000',
            jobBtn: 'Full Time',
            postedTime: '7 hours ago',
        },
        {
            img:"job-list2.png",
            jobTitle: 'Digital Marketer',
            companyName: 'Creative Agency',
            location: 'Athens, Greece',
            salary: '$3500 - $4000',
            jobBtn: 'Full Time',
            postedTime: '7 hours ago',
        }
    ]


    return (
        <>
        <div className="container-fluid findjob_header ">
        <div className="row blur p-5">
            <div className="col-sm-2"></div>
            <div className="col-sm-8 p-3">
                <div className=" p-5">
                <div className="h2 mb-4">Many jobs Available Here</div>
                <div className="p mb-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus nihil rerum sunt nemo at natus voluptates voluptatibus voluptatem similique deleniti?</div>
                <h4>Select your Prefrenced Job</h4>
                </div>
            </div>
            <div className="col-sm-2"></div>
        </div>
        </div>
        <div className="row">
            <div className="col-sm-2"></div>    
            <div className="col-sm-8 px-5">    
        <div className="row job_outer_box pt-3">
            { 
             jobs_arr.map((item)=>{
                return(<>
               <div className="jobcard_category mb-0 pb-3">
    <div className="jobchild_div ps-3">
    <div className="row">
    {/* Image Section */}
    <div className="col-12 col-sm-2 content_col text-center">
        <div className="jobs_icon">
            <img src={item.img} alt={item.jobTitle} className="img-fluid" />
        </div>
    </div>

    {/* Job Details Section */}
    <div className="col-12 col-sm-8 content_col">
        <div className="h3 jobs_title mt-3">
            {item.jobTitle}
        </div>
        <div className="jobs_name mt-2 me-5">{item.companyName}</div>
        <div className="jobs_location mt-2 me-5">{item.location}</div>
        <div className="jobs_salary mt-2 me-5">{item.salary}</div>
    </div>

    {/* Button and Time Section */}
    <div className="col-12 col-sm-2 content_col text-center">
        <div className="btn btn-outline-primary rounded-pill mt-4">
            {item.jobBtn}
        </div>
        <div className="jobs_time mt-4">
            {item.postedTime}
        </div>
    </div>
</div>

    </div>
</div>

              
                </>)
             })
             }
        </div>
        </div>
        <div className="col-sm-2"></div>
        </div>
        </>
    )
}

export default FindJob