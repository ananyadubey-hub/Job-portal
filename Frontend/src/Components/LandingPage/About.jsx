function About(){

    const about_arr=[
        {
            img:"job-list1.png",
            name: 'Arlene McCoy',
            title: 'Frontend Devloper',
            location: 'New Yark, US',
            review: '$3500 - $4000',
           
        },
        {
            img:"job-list2.png",
            name: 'Floyed Milws',
            title: 'UI/UX designer',
            location: 'Athens, Greece',
            review: '$3500 - $4000',
           
        },
        {
            img:"job-list1.png",
            name: 'Devon Lane',
            title: 'Frontend Devloper',
            location: 'Chicago, US',
            review: '$3500 - $4000',
           
        },
        {
            img:"job-list2.png",
            name: 'Jerome Bell',
            title: 'Backend Devloper',
            location: 'Mumbai, India',
            review: '$3500 - $4000',
           
        }
    ]




    return (
        <>
        <div className="container-fluid about_header">
    <div className="row about_header_content text-center pt-5">
        <h1>About Us</h1>
        <h5>Get the latest jobs, updates, and tips</h5>
    </div>
</div>

<div className="row">
    <div className="col-0 col-sm-2"></div>
    <div className="col-12 col-sm-8">
        <div className="row about_intro pt-4 text-center text-md-start">
            <span>OUR COMPANY</span>
            <h2><b>About Our Company</b></h2>
            <p>
                TalentHunt Job Portal is a specialized platform designed to connect job seekers with potential employers. 
                It serves as a bridge between professionals looking for new opportunities and companies searching for skilled talent. 
                TalentHunt streamlines the job search and recruitment process, making it easier for both sides to find the perfect match efficiently.
            </p>
            <br />
            <div className="about_image text-center">
                <img src="img-about1.png" alt="About Company" className="img-fluid" />
            </div>
        </div>

        <div className="row pt-3">
            <h2>What we can do?</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id voluptas vel voluptatem nobis, quod commodi velit, 
                assumenda laudantium sint quos sapiente, suscipit deleniti laboriosam facilis iste earum alias dicta quo repellat accusamus nemo ipsum!
            </p>
            <p>
                Doloremque quo sapiente accusantium, aut tempora, incidunt nulla iusto magni ex maiores qui nemo consectetur voluptate.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id voluptas vel voluptatem nobis, quod commodi velit, 
                assumenda laudantium sint quos sapiente, suscipit deleniti laboriosam facilis iste earum alias dicta quo repellat accusamus nemo ipsum!
            </p>
        </div>
    </div>
    <div className="col-0 col-sm-2"></div>
</div>

<br />

<div className="row">
    <div className="col-0 col-sm-2"></div>
    <div className="col-12 col-sm-8 ps-3 team_header">
        <span>OUR COMPANY</span>
        <h2>Meet Our Team</h2>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id voluptas vel voluptatem nobis, quod commodi velit, 
            assumenda laudantium sint quos sapiente, suscipit deleniti laboriosam facilis iste earum alias dicta quo repellat accusamus nemo ipsum!
        </p>

        <div className="row">
            {about_arr.map((card) => {
                return (
                    <div className="col-12 col-md-5 ms-md-2 mt-5 team_card">
                        <div className="teamchild_div text-center">
                            <div className="team_icon">
                                <img src={card.img} alt="Team Member" className="img-fluid" />
                            </div>
                            <div className="team_name">{card.name}</div>
                            <div className="team_content">{card.title}</div>
                            <div className="team_content">{card.location}</div>
                            <div className="team_review">{card.review}</div>
                        </div>
                    </div>
                );
            })}
        </div>
    </div>
    <div className="col-0 col-sm-2"></div>
</div>

<div className="row">
    <div className="col-0 col-sm-2"></div>
    <div className="col-12 col-sm-8 ps-3 pt-5">
        <h2>News and Blog</h2>
        <p>Get the latest news, updates, and blogs</p>
        <div className="row blog_row">
            <div className="col-12 col-md-6">
                <div className="img_content">24 <br /> Now</div>
                <img src="home-blog1.jpg" alt="Blog" className="img-fluid" />
                <p className="pt-3">| Properties</p>
                <h2>Footprints in Time is the perfect House in Kurashiki</h2>
                <button className="blog_btn mt-3" type="button">READ MORE</button>
            </div>
            <div className="col-12 col-md-6">
                <div className="img_content">24 <br /> Now</div>
                <img src="home-blog2.jpg" alt="Blog" className="img-fluid" />
                <p className="pt-3">| Properties</p>
                <h2>Footprints in Time is the perfect House in Kurashiki</h2>
                <button className="blog_btn mt-3" type="button">READ MORE</button>
            </div>
        </div>
    </div>
    <div className="col-0 col-sm-2"></div>
</div>

        
        </>
    )
}

export default About