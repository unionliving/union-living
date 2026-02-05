import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'

const MainChannelPartnerForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        referralcode:'',
        college:'',
        property:''
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
                "Value": "channer_partner"
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
                    "Attribute": "mx_College_or_Company_Name",
                    "Value": formData.college
                    },
                    {
                        "Attribute": "mx_Property_Name",
                        "Value": formData.property
                        },
             
            
            {
            "Attribute": "SearchBy",
            "Value": "Phone"
            }
            ]
            if(formData.name.length !==0 && formData.email.length !==0 && formData.phone.length !==0 && formData.college.length !== 0 && formData.property.length !== 0 && formData.referralcode.length !== 0){
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
                        referralcode:'',
                        college:'',
                        property:''
                    })
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
         <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"

/>
    <div className='md:px-12 mx-4 lg:mx-12 my-3 w-full rounded-lg px-4 py-12 shadow-lg bg-[#ebe3d654]'>
        <h3 className='lg:text-[2.5rem] text-[1.5rem] text-center uppercase  text-[#272727] font-[NeueMedium] font-[600]' >Channel Partner  <br />
      
              </h3>
              <div className='lg:mt-12 mt-3 lg:px-[250px] px-[15px] '>
                <div className='flex flex-col lg:flex-row gap-4 lg:gap-6 my-4 lg:my-6 w-full items-center justify-center' >
                    <input  value={formData.name} onChange={(e)=>{setFormData({...formData,name:e.target.value})}} placeholder='Lead Name' className='border-[1px] border-[#e0e0e0] shadow-md w-full px-3 py-3 rounded-[10px]' />
                    <input value={formData.email} onChange={(e)=>{setFormData({...formData,email:e.target.value})}} placeholder='Lead Email' type='email'  className='border-[1px] border-[#e0e0e0] shadow-md w-full px-3 py-3 rounded-[10px]' />
                </div>
                <div className='flex flex-col lg:flex-row gap-4 lg:gap-6 my-4 lg:my-6 w-full items-center justify-center' >
                    <input value={formData.phone} onChange={(e)=>{setFormData({...formData,phone:e.target.value})}} placeholder='Lead Number' className='border-[1px] border-[#e0e0e0] shadow-md w-full px-3 py-3 rounded-[10px]' />
                    <input  value={formData.college} onChange={(e)=>{setFormData({...formData,college:e.target.value})}} placeholder='College Name' className='border-[1px] border-[#e0e0e0] shadow-md w-full px-3 py-3 rounded-[10px]' />
                </div>
              
                <div className='flex flex-col lg:flex-row gap-4 lg:gap-6 my-4 lg:my-6 w-full items-center justify-center' >
                <select  onChange={(e)=>{setFormData({...formData,property:e.target.value})}}  className='border-[1px] border-[#e0e0e0] shadow-md w-full px-3 py-3 rounded-[10px]' >
                        <option  value="">I want to Move to</option>
                        <option value="Southside">Southside, Mahalaxmi(Mumbai)</option>
                        <option value="Terra">Terra, Juhu (Mumbai)</option>
                        <option value="Varsity">Varsity, Juhu (Mumbai)</option>
                        <option value="Hamlet">Hamlet, Baner (Pune)</option>
                        <option value="Casa">Casa, Andheri (Mumbai)</option>
                        <option value="Chapter 1">Chapter 1, Belapur (Navi Mumbai)</option>
                        <option value="Abode">Abode, Dhankawadi (Pune)</option>
                             </select>
                    <input value={formData.referralcode} onChange={(e)=>{setFormData({...formData,referralcode:e.target.value})}} placeholder='Channel partner code' className='border-[1px] border-[#e0e0e0] shadow-md w-full px-3 py-3 rounded-[10px]' />
                </div>
                <div className='flex flex-col lg:flex-row gap-4 lg:gap-6 my-6 w-full items-center justify-center'>
            <button onClick={handleMainForm} className="uppercase flex items-center justify-center gap-3 rounded-lg shadow-md  font-[NeueMedium] ease-in duration-300  text-[12px] md:text-[16px]  hover:shadow-none hover:bg-[#272727] tracking-wider py-[8px] px-[24px] md:py-[12px] md:px-[24px] text-[#FFFEFC] bg-[#D64C27]" >Book Now  </button>
                </div>
              </div>
    </div>
</div>
  )
}

export default MainChannelPartnerForm