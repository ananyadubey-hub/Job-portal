import { useEffect ,useState} from "react"
import axios from "axios"
function AdminRecruiter(){
    const [recruiter, setrecruiter] = useState([])
    useEffect(()=>{
        fetchData()
       
    },[])

    const fetchData=async()=>{
         const response=await axios.get("http://localhost:9000/api//admin-recruiterlist",{
            headers:{
                "Content-Type":"application/json"
            }
          })
        if(response.data.code==200){
            setrecruiter(response.data.data)        
        }
        }
 
        const handleBlock=async(item)=>{
            const payload={
                status:item.isBlock ? false : true
            }
            const response=await axios.put(`http://localhost:9000/api/admin-recruiterblock/${item._id}`,payload,{
                headers:{
                    "Content-Type":"application/json"
                }
            })
           if(response.data.code==200){
            fetchData()
            alert("Status Updaetd Successfully..")
           } 
           }

    return (
        <>
        <div className="container">
            <div className="row justify-content-center">
                {
                    recruiter.map((item, index) => (
                        <div className="col-12 col-md-6 col-lg-4 seeker_list my-2 mx-2" key={index}>
                            <div className="card p-2 h-100">
                                <div className="text-center">
                                    <img className="seeker_img img-fluid rounded-circle" src={`http://localhost:9000/upload/${item?.logo}`} alt={item.name} style={{ maxWidth: '100px', height: '100px' }} />
                                </div>
                                <div className="seeker_name text-center mt-2 font-weight-bold">{item.name}</div>
                                <table className="table table-borderless mt-3">
                                    <tbody>
                                        <tr>
                                            <td className="text-right font-weight-bold">Email:</td>
                                            <td className="text-left">{item.email}</td>
                                        </tr>
                                        <tr>
                                            <td className="text-right font-weight-bold">Contact:</td>
                                            <td className="text-left">{item.contact}</td>
                                        </tr>
                                        <tr>
                                            <td className="text-right font-weight-bold">Location:</td>
                                            <td className="text-left">{item.location}</td>
                                        </tr>
                                        <tr>
                                           <div className="row">
                                           <td className="text-right font-weight-bold"> 
                                          <center> 
                                            
                                            <div className="btn  btn_block_unblock" onClick={()=>handleBlock(item)} >{item.isBlock ? "UnBlock" :"Block"}</div>
                                            
                                            </center>
                                            </td>
                                           </div>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="text-center mt-auto">
                                    {/* <button className=" seeker_btn ">{item.blockBtn}</button> */}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        </>
    )
}

export default AdminRecruiter
