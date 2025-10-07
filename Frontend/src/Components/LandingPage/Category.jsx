import { FaUserSecret } from "react-icons/fa";
 import { TbDeviceDesktopStar } from "react-icons/tb";
import { BsFillFileEarmarkBarGraphFill } from "react-icons/bs";
import { TbDeviceMobileCog } from "react-icons/tb";
import { GrUserWorker } from "react-icons/gr";
import { GiCircuitry } from "react-icons/gi";
import { BsFillBuildingsFill } from "react-icons/bs";
import { MdOutlineLibraryBooks } from "react-icons/md";


function Category(){

    const category_arr=[
        {
            img:<FaUserSecret/>,
            title:"Design & Creative",
            count:"(653)"
        },
        {
            img:<TbDeviceDesktopStar/>,
            title:"Design & Devlopment",
            count:"(658)"
        },
        {
            img:<BsFillFileEarmarkBarGraphFill/>,
            title:"Sales & Marketing",
            count:"(658)"
        },
        {
            img:<TbDeviceMobileCog/>,
            title:"Mobile Application",
            count:"(658)"
        },
        {
            img:<GrUserWorker/>,
            title:"Construction",
            count:"(658)"
        },
        {
            img:<GiCircuitry/>,
            title:"Information Technology",
            count:"(658)"
        },
        {
            img:<BsFillBuildingsFill/>,
            title:"Real Estate",
            count:"(658)"
        },
        {
            img:<MdOutlineLibraryBooks/>,
            title:"Content Writing",
            count:"(658)"
        }
    ]
 return(<>
 <div className="row categoty_outer ps-5 pe-5">
  <div className="col-12 ps-5 pe-5">
    <div className="row child_row ps-5 pe-5 pt-5">
    
        <div className="category_feature mb-3 text-center">FEATURED TOUR PACKAGES</div>
        <div className="h1 category_h1 text-center">Browse Top Categories</div>
        <div className="row category_outer_box pt-5 text-center">
          {category_arr.map((Category) => {
            return (
              <div key={Category.title} className="col-sm-3 text-center card_category">
                <div className="child_div">
                  <div className="category_icon mt-2">{Category.img}</div>
                  <div className="category_content mt-2">{Category.title}</div>
                  <div className="category_num mt-2">{Category.count}</div>
                </div>
              </div>
            );
          })}
        </div>
 
    </div>
  </div>
</div>

 </>)
}

export default Category;