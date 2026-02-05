import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import "./Form.css"
const MainFormBox = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        property:'',
        discovery:'',
        referralcode:'',
        workstudyat:'',
        moveInDate:''
    })
    const handleMainForm = async  () =>{
        console.log(formData)
        const dataMain = [
            {
            "Attribute": "EmailAddress",
            "Value": formData.email
            },
            {
            "Attribute": "FirstName",
            "Value": formData.name
            },
            {
            "Attribute": "LastName",
            "Value": ""
            },
            {
                "Attribute": "source",
                "Value": "The Commune"
                },
                {
                    "Attribute": "mx_Referral_Code",
                    "Value": formData.referralcode
                    },
            {
            "Attribute": "Phone",
            "Value": formData.phone
            },
            {
                "Attribute": "mx_Property_Name",
                "Value": formData.property
                },
                {
                "Attribute": "mx_How_did_you_hear_about_us",
                "Value": formData.discovery
                },
                {
                    "Attribute": "mx_College_or_Company_Name",
                    "Value": formData.workstudyat
                    },
                  
                
                {
                        "Attribute": "mx_Move_in_Date_Time",
                        "Value": formData.moveInDate
                },
                 
                
            
            {
            "Attribute": "SearchBy",
            "Value": "Phone"
            }
            ]
            if(formData.name.length !==0 && (formData.phone.length !==0  && formData.phone.length === 10)  && formData.property.length !== 0){
                try {

                    const response = await fetch(`https://api-in21.leadsquared.com/v2/LeadManagement.svc/Lead.CreateOrUpdate?postUpdatedLead=false&accessKey=u$r0346498d5d8a9d49fab725f28c83a03a&secretKey=bf008a0ca47aab2824e794e0e435193da2a473f2`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json'
                        },
                        body: JSON.stringify(dataMain)
                    });
            
                    const result = await response.json();
                    setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        property:'',
                        discovery:'',
                        referralcode:'',
                        workstudyat:''
                    })
                    console.log("done")
                    toast.success("Form Submitted Successfully")
                    setTimeout(location.reload(), 6000)
                   
                } catch (error) {
                    console.log(error)
                    toast.error("There is some error in submitting")
                }      
                
            }
            else{
                toast.error("Please enter all the details")
            }
            
    }
  return (
    <div className='flex items-center justify-center' >
         <ToastContainer />
        <div className='md:px-12 mx-4 lg:mx-[450px] lg:my-12 my-3 w-full rounded-lg px-4 py-12 shadow-lg bg-[#ebe3d654]'>
            <h3 className='lg:text-[2rem] text-[1.5rem] text-left uppercase  text-[#272727] font-[NeueMedium] font-[600]' >⁠Union X <br />
            <span
              style={{
                background:
                  "linear-gradient(to right, #ee0979 0%, #ff6a00 100%)",
                "-webkit-background-clip": "text",
                "-webkit-text-fill-color": "transparent",
              }}
              className="py-2 inline"
            >
    The Commune
            </span>
                  </h3>
                  <p>Discover your dream home with us! Share your details, and let’s begin the journey to finding the perfect place for you.</p>
                  <div className='lg:mt-12 mt-3 lg:px-[00px] px-[15px] '>
                    <div className='flex flex-col  gap-2 lg:gap-2 my-4 lg:my-6 w-full items-start justify-center' >
                        <label className='font-[NeueRegular] text-[1.2rem]'>Name:<span className='text-red-500'>*</span></label>
                        <input value={formData.name} onChange={(e)=>{setFormData({...formData,name:e.target.value})}} placeholder='Enter Your Name' className='border-[1px] border-[#e0e0e0] shadow-md w-full px-3 py-3 rounded-[10px]' />
                       
                    </div>
                    <div className='flex flex-col relative gap-2 lg:gap-2 my-4 lg:my-6 w-full items-start justify-center'>
                    <label className='font-[NeueRegular] text-[1.2rem]'>Phone Number:<span className='text-red-500'>*</span></label>
                    <div className='relative w-full' >
                    
                    {/* <input value={formData.email} onChange={(e)=>{setFormData({...formData,email:e.target.value})}} placeholder='Enter Your Email' type='email'  className='border-[1px] border-[#e0e0e0] shadow-md w-full px-3 py-3 rounded-[10px]' /> */}
                    <p className='absolute left-[3%] top-[16%] bg-gray-200 rounded-full px-3 py-2 text-[.8rem] text-gray-600 z-[888]' >+91</p>
                        <input value={formData.phone} onChange={(e)=>{setFormData({...formData,phone:e.target.value})}} placeholder='Enter Your Phone' className='border-[1px] border-[#e0e0e0] shadow-md w-full px-16 py-3 rounded-[10px]' />
                        {/* <input placeholder='I Work/Study At' value={formData.workstudyat} onChange={(e)=>{setFormData({...formData,workstudyat:e.target.value})}} className='border-[1px] border-[#e0e0e0] shadow-md w-full px-3 py-3 rounded-[10px]' /> */}
                    </div>
                    </div>
                    
                    <div className='flex flex-col relative  gap-2 lg:gap-2 my-4 lg:my-6 w-full items-start justify-center' >
                    <label className='font-[NeueRegular] text-[1.2rem]'>Email:</label>
                    <input value={formData.email} onChange={(e)=>{setFormData({...formData,email:e.target.value})}} placeholder='Enter Your Email' type='email'  className='border-[1px] border-[#e0e0e0] shadow-md w-full px-3 py-3 rounded-[10px]' />
                   
                    </div>
                    <div className='flex flex-col  gap-2 lg:gap-2 my-4 lg:my-6 w-full items-start justify-center' >
                    <label className='font-[NeueRegular] text-[1.2rem]'>Property Name:<span className='text-red-500'>*</span></label>
                        {/* <select  onChange={(e)=>{setFormData({...formData,discovery:e.target.value})}}  className='border-[1px] border-[#e0e0e0] shadow-md w-full px-3 py-3 rounded-[10px]' >
                        <option  value="">How did you hear about us?</option>
                        <option value="Google">Google</option>
                        <option value="Flyer">Flyer</option>
                        <option value="Facebook">Facebook</option>
                        <option value="Instagram">Instagram</option>
                        <option value="Campus Ambassador">Campus Ambassador</option>
                        <option value="From a Friend">From a Friend</option>
                             </select> */}
                             <select  onChange={(e)=>{setFormData({...formData,property:e.target.value})}}  className='border-[1px] round border-[#e0e0e0] shadow-md w-full px-3 py-3 rounded-[10px]' >
                        <option  value="">I want to Move to</option>
                      
                        <option value="Terra">Terra, Juhu (Mumbai)</option>
                        <option value="Varsity">Varsity, Juhu (Mumbai)</option>

                             </select>
                    </div>
                    <div className='flex flex-col  gap-2 lg:gap-2 my-4 lg:my-6 w-full items-start justify-center' >
                    <label className='font-[NeueRegular] text-[1.2rem]'>College Name:</label>
                        
                             <select  onChange={(e)=>{setFormData({...formData,property:e.target.value})}}  className='border-[1px] round border-[#e0e0e0] shadow-md w-full px-3 py-3 rounded-[10px]' >
                        <option  value="">Choose a College</option>
                      
                        <option value="NMIMS">NMIMS</option>
                        <option value="Mithibai">Mithibai</option>
                        <option value="DJ Sanghavi">DJ Sanghavi</option>
                        <option value="SNDT">SNDT</option>

                             </select>
                    </div>
                    <div className='flex flex-col  gap-2 lg:gap-2 my-4 lg:my-6 w-full items-start justify-center' >
                    <label className='font-[NeueRegular] text-[1.2rem]'>Year:</label>
                       
                             <select  onChange={(e)=>{setFormData({...formData,property:e.target.value})}}  className='border-[1px] round border-[#e0e0e0] shadow-md w-full px-3 py-3 rounded-[10px]' >
                        <option  value="">Select a Year</option>
                      
                        <option value="1st">1st Year</option>
                        <option value="2nd">2nd Year</option>
                        <option value="3rd">3rd Year</option>
                   

                             </select>
                    </div>
                  
                    <div className='flex flex-col lg:flex-row gap-4 lg:gap-6 my-6 w-full items-center justify-center'>
                <button onClick={handleMainForm} className="uppercase flex items-center justify-center gap-3 rounded-lg shadow-md  font-[NeueMedium] ease-in duration-300  text-[12px] md:text-[16px]  hover:shadow-none hover:bg-[#272727] tracking-wider py-[8px] px-[24px] md:py-[12px] md:px-[24px] text-[#FFFEFC] bg-[#D64C27]" >Book Now  </button>
                    </div>
                  </div>
        </div>
    </div>
  )
}

export default MainFormBox