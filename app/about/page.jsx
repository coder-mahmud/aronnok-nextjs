import Image from "next/image"
import AnimationScroll from "@/components/ScrollAnimation"




const page = () => {
  return (
    <>
      <section className='sec_hero'>
        <div className="container  mx-auto flex justify-between h-[350px] lg:h-[500px]">
          <div className="hero_wrap relative w-full ">
            <Image className="w-full max-h-full object-cover" src="/images/about-hero.webp" height={737} width={1723} alt="about image"  />
            <h1 className="about_hero_text absolute bottom-14 left-14 font-medium text-3xl md:text-5xl text-white z-20">
              
              <AnimationScroll direction="up">
                Crafting Art of Living
              </AnimationScroll>
              
              
            </h1>
            <div className="overlay absolute bg-black opacity-50 w-full h-full top-0 left-0 z-10"></div>
          </div>
        </div>
      </section>

      <section className="about_desc mt-20">
        <div className="container  mx-auto justify-between my-16">

          <AnimationScroll direction="up">
            <div className="section_title_wrap flex items-center gap-10 mb-14">
              <div className="line h-[1px] w-[100px] bg-[#9F4F20]"></div>
              <h2 className="text-3xl md:text-5xl font-medium text-golden">Who we are</h2>
            </div>
          </AnimationScroll>

          <AnimationScroll direction="up">
            <p className="text-lg mb-10">Aronnok Developments Ltd. was founded with a clear vision—to become one of Bangladesh's most trusted, innovative, and admired real estate companies. We specialize in modern, eco-friendly architecture, high-quality construction, and exceptional customer service.</p>
          </AnimationScroll>

          <AnimationScroll direction="up">
            <p className="text-lg mb-10">At Aronnok, we believe every project should be a perfect blend of function and design. We focus on the details, ensuring that every home we build meets the unique needs and lifestyle of each client.</p>
          </AnimationScroll>

          <AnimationScroll direction="up">
            <p className="text-lg mb-10">From concept to completion, we work closely with our clients to ensure transparency, quality, and satisfaction at every step. Our commitment to excellence, integrity, and long-term relationships sets us apart in the real estate industry.</p>
          </AnimationScroll>
          
        </div>
      </section>

      <section className="philosophy">
        <div className="container  mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 ">
          
              <div className="xl:col-span-2 ">
                <AnimationScroll direction="right">
                  <div className="relative pr-4 pt-4">
                    <div className="top_right_horizontal_border absolute w-[100px] h-[1px] right-0 top-0 bg-golden"></div>
                    <div className="top_right_vertical_border absolute w-[1px] h-[100px] right-0 top-0 bg-golden"></div>
                    <Image src="/images/philosophy.webp" alt="" width={1920} height={1080} />
                  </div>
                </AnimationScroll>
              </div>

              
              <div className="flex gap-4 xl:gap-6">
                
                <div className="hidden xl:block">
                  <div className="min-w-[50px] 2xl:min-w-[100px] w-full h-[1px] right-0 top-0 bg-golden mt-4"></div>
                </div>

                <div>
                  <AnimationScroll direction="up">
                    <h2 className="text-4xl text-golden">Our<br />Philosophy</h2>
                    <p className="mt-4">We create more than just buildings—we craft living spaces where nature, design, and comfort come together. Inspired by timeless architecture and driven by modern needs, our homes are built to grow with you. With a deep respect for nature and a commitment to quality, every project reflects top-tier construction, elegant finishes, and thoughtful design. From architecture to interiors, we deliver excellence you can see and feel.</p>
                  </AnimationScroll>
                </div>
              </div>
              
              
          </div>
        </div>
      </section>


      <section className="design_excellence mt-20">
        <div className="container  mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
          
             
              <div className="flex gap-4 xl:gap-6 order-2  xl:order-1">
                
                <div className="hidden xl:block">
                  <div className="min-w-[50px] 2xl:min-w-[100px] w-full h-[1px] right-0 top-0 bg-golden mt-4"></div>
                </div>

                <div>
                  <AnimationScroll direction="up">
                    <h2 className="text-4xl text-golden">Design<br />Excellence</h2>
                    <p className="mt-4">Our in-house team of architects, engineers, and design experts ensures design excellence in every project. Concern of <a href="https://groundone.net/">Ground One</a> with 20+ years of award-winning architectural experience, we prioritize functionality, durability, comfort, and sustainability to reduce environmental impact and elevate modern living.</p>
                  </AnimationScroll>
                </div>
              </div>

              <div className="xl:col-span-2 order-1  xl:order-2">
                <AnimationScroll direction="right">
                  <div className="relative pl-4 pb-4">
                    <div className="top_right_horizontal_border absolute w-[100px] h-[1px] left-0 bottom-0 bg-golden"></div>
                    <div className="top_right_vertical_border absolute w-[1px] h-[100px] left-0 bottom-0 bg-golden"></div>
                    <Image src="/images/excellence.webp" alt="" width={1920} height={1080} />
                  </div>
                </AnimationScroll>
              </div>



              
          </div>
        </div>
      </section>

      <section className="philosophy mt-20 hidden">
        <div className="container  mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
          
              <div className="xl:col-span-2 ">
                <AnimationScroll direction="right">
                  <div className="relative pr-4 pt-4">
                    <div className="top_right_horizontal_border absolute w-[100px] h-[1px] right-0 top-0 bg-golden"></div>
                    <div className="top_right_vertical_border absolute w-[1px] h-[100px] right-0 top-0 bg-golden"></div>
                    <Image src="/images/philosophy.jpg" alt="" width={1920} height={1080} />
                  </div>
                </AnimationScroll>
              </div>

              
              <div className="flex gap-4 xl:gap-6">
                
                <div className="hidden xl:block">
                  <div className="min-w-[50px] 2xl:min-w-[100px] w-full h-[1px] right-0 top-0 bg-golden mt-4"></div>
                </div>

                <div>
                  <AnimationScroll direction="up">
                    <h2 className="text-4xl text-golden">Our<br />Philosophy</h2>
                    <p className="mt-4">We create more than just buildings—we craft living spaces where nature, design, and comfort come together. Inspired by timeless architecture and driven by modern needs, our homes are built to grow with you. With a deep respect for nature and a commitment to quality, every project reflects top-tier construction, elegant finishes, and thoughtful design. From architecture to interiors, we deliver excellence you can see and feel.</p>
                  </AnimationScroll>
                </div>
              </div>
              
              
          </div>
        </div>
      </section>




    </>
  )
}

export default page