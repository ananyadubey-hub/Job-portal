



function BlogSection(){
    return (
        <>
      <div className="container blog-container">
  <div className="row text-center">
    <p className="blog-subheading">OUR LATEST BLOG</p>
    <h1 className="blog-heading">Our recent news</h1>
  </div>
  <div className="row blog-row">
  <div className="col-md-2 col-sm-12 blog-card"></div>
    <div className="col-md-4 col-sm-12 blog-card">
      <div className="blog-image-wrapper">
        <div className="date-badge1 w-25">
          <p className="mt-2">24</p>
          <p>Now</p>
        </div>
        <img src="/home-blog1.jpg" alt="Blog 1" className="blog-img" />
      </div>
      <p className="blog-category ms-5 mt-2">| Properties</p>
      <h3 className="blog-title ms-5">
        Footprints in Time is perfect House in Kurashiki
      </h3>
      <button className="blog-btn">READ MORE</button>
    </div>
    <div className="col-md-4 col-sm-12 blog-card">
      <div className="blog-image-wrapper">
        <div className="date-badge1 w-25">
          <p className="mt-2">24</p>
          <p>Now</p>
        </div>
        <img src="home-blog2.jpg" alt="Blog 2" className="blog-img" />
      </div>
      <p className="blog-category ms-5 mt-2">| Properties</p>
      <h2 className="blog-title ms-5">
        Footprints in Time is perfect House in Kurashiki
      </h2>
      <button className="blog-btn">READ MORE</button>
    </div>
    <div className="col-md-2 col-sm-12 blog-card"></div>
  </div>
</div>



        </>
    )
}

export default BlogSection