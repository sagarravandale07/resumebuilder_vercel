import Header from '@/components/custom/Header'
import { Button } from '@/components/ui/button'
import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import ResumePreview from '@/Dashboard/resume/components/ResumePreview'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import GlobalApi from './../../../../service/GlobalApi'
import { RWebShare } from 'react-web-share'

function ViewResume() {

    const [resumeInfo, setResumeInfo]=useState();
    const {resumeId}=useParams();
    useEffect(()=>{
        GetResumeInfo();
    }),[]

    const GetResumeInfo=()=>{
        GlobalApi.GetResumeById(resumeId).then(resp=>{
            console.log(resp.data.data);
            setResumeInfo(resp.data.data);
        })
    }

    const HandleDownload=()=>{
        window.print();
    }


  return (
    <ResumeInfoContext.Provider value={{resumeInfo, setResumeInfo}}>
      <div id='no-print'>
      <Header/>
      
        <div className='my-10 my mx-10 md:mx-20 lg:mx-36'>
            <h2 className='text-center text-2xl font-medium'>Congrats! Your Ultimate AI generated Resume is ready..!!</h2>
            <p className='my-5 text-center text-gray-400'>Your Resume is Ready to Download, You can share it with your family and friends</p>
            <div className='flex justify-between px-45 my-10'>
               <Button className=' bg-indigo-600 text-white rounded-md hover:bg-gray-100 hover:text-black' onClick={HandleDownload}>Download</Button> 
               
            <RWebShare
                    data={{
                    text: "Take a look at this resume I created! 📄✨ I'd love to hear your thoughts. Check it out here",
                    url: import.meta.env.VITE_BASE_URL+"/my-resume/"+resumeId+"/view",
                    title: resumeInfo?.firstName+" "+resumeInfo?.lastName+" Resume",
                    }}
                    onClick={() => console.log("Shared Successfully!")}
                    >
                    <Button className=' bg-indigo-600 text-white rounded-md hover:bg-gray-100 hover:text-black' >Share</Button> 
            </RWebShare>

            </div>
        </div>
        <div>
            <p className='my-10 text-center text-gray-400'>This is a preview of resume generated </p>
            </div>
        </div>
        <div id='print-area' className='my-10 my mx-10 md:mx-20 lg:mx-36'>  
               <ResumePreview/>
            </div>
      </ResumeInfoContext.Provider>
  )
}

export default ViewResume
