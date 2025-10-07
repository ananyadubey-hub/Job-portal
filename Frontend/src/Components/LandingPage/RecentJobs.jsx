

function RecentJobs(){

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
        }
    ]


    return (
        <>
       <div className="row jobs_outer">
    <div className="col-12 col-sm-2"></div>
    <div className="col-12 col-sm-8">
        <div className="row jobchild_row pt-3">
            <span className="jobs_feature mt-4 mb-3">RECENT JOB</span>
            <h1 className="jobs_h1 mb-4">Featured Jobs</h1>
            <div className="row job_outer_box ">
                {jobs_arr.map((item) => {
                    return (
                        <div className="col-12  jobcard_category pb-3" key={item.jobTitle}>
                            <div className="jobchild_div ">
                                <div className="row">
                                    <div className="col-12 col-sm-2 content_col text-center">
                                        <div className="jobs_icon">
                                            <img src={item.img} alt={item.jobTitle} />
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-8 content_col">
                                        <div className="h3 jobs_title mt-3">
                                            {item.jobTitle}
                                        </div>
                                        <div className="jobs_name mt-2 me-5">{item.companyName}</div>
                                        <div className="jobs_location mt-2 me-5">{item.location}</div>
                                        <div className="jobs_salary mt-2 me-5">{item.salary}</div>
                                    </div>
                                    <div className="col-12 col-sm-2 pe-2 content_col text-center">
                                        <div className="jobs_btn mt-4 ">{item.jobBtn}</div>
                                        <div className="jobs_time mt-4">{item.postedTime}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    </div>
    <div className="col-12 col-sm-2"></div>
</div>

        </>
    )
}

export default RecentJobs
