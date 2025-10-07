import Testimonials from 'react-testimonials';
function Testimonial() {

    const img1 = 'testimonial-founder.png'; // Put the Image URLs
    const img2 = 'testimonial-founder.png'; // Put the Image URLs
    const img3 = 'testimonial-founder.png'; // Put the Image URLs
    const img4 = 'testimonial-founder.png'; // Put the Image URLs
    const img5 = 'testimonial-founder.png'; // Put the Image URLs
    

    const review1=[img1, "Margaret Lawson", "Creative Director", "I am at an age where I just want to be fit and healthy our bodies are our responsibility! So start caring for your body and it will care for you. Eat clean it will care for you and workout hard."];
    const review2=[img2, "Margaret Lawson", "Creative Director", "I am at an age where I just want to be fit and healthy our bodies are our responsibility! So start caring for your body and it will care for you. Eat clean it will care for you and workout hard."];
    const review3=[img3, "Margaret Lawson", "Creative Director", "I am at an age where I just want to be fit and healthy our bodies are our responsibility! So start caring for your body and it will care for you. Eat clean it will care for you and workout hard."];
    const review4=[img4, "Margaret Lawson", "Creative Director", "I am at an age where I just want to be fit and healthy our bodies are our responsibility! So start caring for your body and it will care for you. Eat clean it will care for you and workout hard."];
    const review5=[img5, "Margaret Lawson", "Creative Director", "I am at an age where I just want to be fit and healthy our bodies are our responsibility! So start caring for your body and it will care for you. Eat clean it will care for you and workout hard."];

  const items=[review1,review2,review3,review4,review5]
    return (<>
        <div className="row testimonial_outer" >
            <div className="col-sm-1"></div>
            <div className="col-sm-10">
                <div className="row main_testimonial">
                <Testimonials items={items} />

                </div>
            </div>
            <div className="col-sm-1"></div>
        </div>
    </>)
}

export default Testimonial;