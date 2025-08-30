'use client'
import AnimationScroll from "@/components/ScrollAnimation"



const page = () => {
  return (
    <div className="scroll-smooth">
      {/* <section className="bg-[url('/images/home_big_1.jpg')] bg-cover bg-center bg-no-repeat pt-40">
        <div className="container  mx-auto flex justify-between ">
          <div className="langowner_hero mx-auto w-full max-w-[1020px] p-10 bg-white">
            
            <div className="owner_hero_top">
                <div className="flex gap-4 xl:gap-6">
                  
                  <div className="hidden xl:block">
                    <div className="min-w-[50px] 2xl:min-w-[70px] w-full h-[1px] right-0 top-0 bg-golden mt-4"></div>
                  </div>

                  <div>
                    <AnimationScroll direction="up">
                      <h2 className="text-xl uppercase text-golden">Landowners</h2>
                    </AnimationScroll>
                  </div>
                </div>


            </div>

            <AnimationScroll direction="up">
              <div className="landowner_hero_bottom xl:pl-[100px] flex flex-col gap-6 mt-10">
                <h1 className="text-4xl text-golden">An Abode to Relish</h1>
                <p className="t">We offer you an abode that complements your privileged lifestyle. Be a full-time patron of the pursuit of perfection in modern architectural art. Are you ready to immerse yourself?</p>

                <a className="bg-golden rounded border border-golden px-6 py-3 text-white max-w-[200px] flex justify-center hover:bg-white hover:text-golden transition-all duration-300" href="#" onClick={(e) => {e.preventDefault(); document.getElementById('owner_form')?.scrollIntoView({ behavior: 'smooth' }); }}>View Form</a>
              </div>
            </AnimationScroll>


          </div>
        </div>
      </section> */}

      <section className="landowner_form mt-20 pt-30" id="owner_form">
        <div className="container  mx-auto">
            <div className="form_wrapper max-w-7xl mx-auto bg-gray-100 rounded p-6 md:p-10 xl:p-20 ">
              
              <div className="form_top">
                
                <div className="flex gap-4 xl:gap-6">
                  
                  <div className="hidden xl:block">
                    <div className="min-w-[50px] 2xl:min-w-[100px] w-full h-[1px] right-0 top-0 bg-golden mt-2"></div>
                  </div>

                  <div>
                    <AnimationScroll direction="up">
                      <h2 className="text-lg uppercase text-golden">CONNECT WITH OUR PROFESSIONALS TO ENTER A PROPOSITION</h2>
                    </AnimationScroll>
                  </div>

                </div>


              </div>

              <div className="form_body mt-10 xl:mt-20">
                <form action="">
                  <div className="flex gap-10 flex-col lg:flex-row justify-between">
                    <div className="form_left_col w-full">
                      <h2 className="text-golden text-lg lg:text-2xl font-medium uppercase mb-4 lg:mb-7">Land Information</h2>
                      
                      <div className="form_rows flex flex-col gap-6">
                        
                        <div className="form_row flex flex-col gap-2">
                          <label htmlFor="">Location*</label>
                          <input className="border border-golden rounded px-4 py-2 w-full" type="text" required placeholder="Area/neighbourhood the land is located"/>
                        </div>
                        
                        <div className="form_row flex flex-col gap-2">
                          <label htmlFor="">Address*</label>
                          <input className="border border-golden rounded px-4 py-2 w-full" type="text" required placeholder="Full Address of the land"/>
                        </div>
                        
                        <div className="form_row flex flex-col gap-2">
                          <label htmlFor="">Size of the land</label>
                          <input className="border border-golden rounded px-4 py-2 w-full" type="text"  placeholder="Size of the lands in kathas (rounded)"/>
                        </div>
                        
                        <div className="form_row flex flex-col gap-2">
                          <label htmlFor="">Width of the road in front</label>
                          <input className="border border-golden rounded px-4 py-2 w-full" type="text"  placeholder="In feet"/>
                        </div>
                        
                        <div className="form_row flex flex-col gap-2">
                          <label htmlFor="">Catagory of land</label>
                          
                          <select name="" className="border border-golden rounded px-4 py-2 w-full" id="">
                            <option value="">Choose One</option>
                            <option value="freehold">Free Hold</option>
                            <option value="leasehold">Lease Hold</option>
                          </select>
                        </div>

                        <div className="form_row flex flex-col gap-2">
                          <label htmlFor="">Facing</label>
                          
                          <select name="" className="border border-golden rounded px-4 py-2 w-full" id="">
                            <option value="">Choose One</option>
                            <option value="East">East</option>
                            <option value="North">North</option>
                            <option value="South">South</option>
                            <option value="West">West</option>
                          </select>
                        </div>

                        <div className="form_row flex flex-col gap-2">
                          <label htmlFor="">Attractive features (if any)</label>
                          
                          <select name="" className="border border-golden rounded px-4 py-2 w-full" id="">
                            <option value="">Choose One</option>
                            <option value="Lakeside">Lakeside</option>
                            <option value="Cornor plot">Cornor plot</option>
                            <option value="Park view">Park view</option>
                            <option value="Main road">Main road</option>
                            <option value="Other">Other</option>Other
                          </select>
                        </div>




                      </div>
                    </div>
                    <div className="form_right_col w-full">
                      
                      <h2 className="text-golden text-lg lg:text-2xl font-medium uppercase mb-4 lg:mb-7">Landowners Profile</h2>

                      <div className="form_rows flex flex-col gap-6">
                        
                        <div className="form_row flex flex-col gap-2">
                          <label htmlFor="">Name of the landowner*</label>
                          <input className="border border-golden rounded px-4 py-2 w-full" type="text" required placeholder="Full name of the registered landowner"/>
                        </div>

                        <div className="form_row flex flex-col gap-2">
                          <label htmlFor="">Contact person</label>
                          <input className="border border-golden rounded px-4 py-2 w-full" type="text" required placeholder="Name (if different from the landowner)"/>
                        </div>
                        
                        <div className="form_row flex flex-col gap-2">
                          <label htmlFor="">Email address</label>
                          <input className="border border-golden rounded px-4 py-2 w-full" type="email"  placeholder="Contact person's email address"/>
                        </div>
                        
                        <div className="form_row flex flex-col gap-2">
                          <label htmlFor="">Contact number*</label>
                          <input className="border border-golden rounded px-4 py-2 w-full" type="text"  required placeholder="Contact person's number"/>
                        </div>



                      </div>

                    </div>



                  </div>

                  <button className="mt-10 bg-golden rounded border border-golden px-6 py-3 text-white max-w-[300px] cursor-pointer w-full flex justify-center hover:bg-white hover:text-golden transition-all duration-300" >Submit</button>
                </form>
              </div>


            </div>
        </div>
      </section>
    </div>

  )
}

export default page