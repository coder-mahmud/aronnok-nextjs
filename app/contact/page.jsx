'use client'
import AnimationScroll from "@/components/ScrollAnimation"
import Image from "next/image"
import { useState } from "react";







const page = () => {

  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "", company: "", phone: "" });
  const [status, setStatus] = useState(null);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(form),
    });
    const result = await res.json();
    setStatus(result.success ? "Sent!" : "Failed");
  };



  return (
    <section className='sec_header'>
      <section className="philosophy py-10">
          <div className="container  mx-auto relative">
            
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 ">
            
                <div className="xl:col-span-2 ">
                  <AnimationScroll direction="right">
                    <div className="relative pr-4 pt-4">
                      <div className="top_right_horizontal_border absolute w-[100px] h-[1px] right-0 top-0 bg-golden"></div>
                      <div className="top_right_vertical_border absolute w-[1px] h-[100px] right-0 top-0 bg-golden"></div>
                      <Image src="/images/contact.webp" alt="" width={1920} height={1080} />
                    </div>
                  </AnimationScroll>
                </div>

                
                <div className="flex gap-4 xl:gap-6 relative overflow-hidden">
                  
                  <div className="hidden xl:block">
                    <div className="min-w-[50px] 2xl:min-w-[100px] w-full h-[1px] right-0 top-0 bg-golden mt-2 "></div>
                  </div>

                  <div className="w-full">
                    
                    <AnimationScroll direction="up">

                      <p className="uppercase font-thin text-golden mb-6">GET IN TOUCH</p>
                      <h2 className="text-3xl text-medium text-golden">We Would Love to Connect With You</h2>
                      <p className="office_name text-xl font-bold mt-6">Gulshan Office:</p>
                      <p className="text-lg font-medium"> House-11/B, Road-99,<br />Gulshan-2, Dhaka-1212, Bangladesh </p>
                      <p className="office_name text-xl font-bold mt-6">Aftabnagar Office:</p>
                      <p className="text-lg font-medium"> House-48, Road-2. Block-C, <br />Aftabnagar, Eastern Housing Limited, <br />Dhaka-1219, Bangladesh.</p>

                        <div className="flex gap-4 mt-6">
                          <button onClick={() => setShowForm(true)} className=" uppercase bg-golden px-6 py-3 rounded text-white cursor-pointer min-w-[130px]">Have a Query?</button>
                          {/* <button className=" uppercase bg-golden px-6 py-3 rounded text-white cursor-pointer min-w-[130px] ">View Map</button> */}
                        </div>

                    </AnimationScroll>

                    <div className={` contact_form_wrap relative h-0 xl:absolute top-0 left-0 w-full xl:h-full bg-white
                        transition-transform duration-700 ease-in-out ${showForm ? "translate-x-0 h-auto" : "translate-x-full"}  pt-10 `}
                    >
                      <img onClick={() => setShowForm(false)} src="/images/close.svg" className="w-8 absolute top-4 right-4 cursor-pointer" alt="" />
                       
                      <div className="form_header flex gap-4">
                        
                        <div className="hidden xl:block">
                          <div className="min-w-[50px] 2xl:min-w-[70px] w-full h-[1px] right-0 top-0 bg-golden mt-4 "></div>
                        </div>

                        <p className="text-5xl text-golden uppercase">Query</p>

                      </div>

                      <div className="form_wrap">

                        <form onSubmit={handleSubmit} className="space-y-4 pt-10">
                          <div className="flex flex-col xl:flex-row gap-4 xl:gap-2 justify-between">
                            <input className="border bg-gray-200 rounded px-4 py-2" type="text" placeholder="Full Name" onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                            <input  className="border bg-gray-200 rounded px-4 py-2" type="email" placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                          </div>

                          <div className="flex flex-col xl:flex-row gap-4 xl:gap-2 justify-between">
                            <input className="border bg-gray-200 rounded px-4 py-2" type="text" placeholder="Phone Number" onChange={(e) => setForm({ ...form, phone: e.target.value })} required />
                            <input  className="border bg-gray-200 rounded px-4 py-2" type="email" placeholder="Company Name" onChange={(e) => setForm({ ...form, company: e.target.value })} />                            
                          </div>

                          <textarea className="border bg-gray-200 rounded px-4 py-2 w-full" placeholder="Message" onChange={(e) => setForm({ ...form, message: e.target.value })} required />
                          <button className="bg-golden rounded px-6 py-3 flex justify-center text-white cursor-pointer hover:bg-white hover:text-golden border border-golden w-full font-medium" type="submit">Send</button>
                          {status && <p>{status}</p>}
                        </form>


                      </div>


                    </div>


                  </div>


                </div>
                
            </div>






          </div>
      </section>
    </section>
  )
}

export default page