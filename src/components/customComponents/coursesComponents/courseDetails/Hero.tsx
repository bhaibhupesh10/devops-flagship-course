// CourseHero.tsx
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import HeroImage from "../../../../../public/assets/heroImage.jpg"
import { MdOnlinePrediction } from "react-icons/md"
import { BsCalendarCheck } from "react-icons/bs"
import { FaMoneyBillWave } from "react-icons/fa"
import { TbCertificate } from "react-icons/tb"


const Hero = () => {
    return (
      <div className="mx-auto pb-12 md:pb-0">
        {/* Gradient Background */}
        <div className="bg-gradient-to-b from-red-900 to-red-700 h-[780px] md:h-[400px] lg:h-[400px] px-4 sm:px-6"> 
          <div className="max-w-6xl mx-auto py-4 md:py-8"> {/* Reduced from max-w-7xl */}
            {/* Top Badges */}
            <div className="flex flex-wrap gap-2 sm:gap-2 ">
              <Badge variant="secondary" className="bg-red-800 text-white text-xs sm:text-sm mb-4 md:mb-0 lg:mb-0">
                AI-Powered ✨
              </Badge>
            </div>
  
            {/* Main Content */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-8 lg:justify-between lg:items-center">
              <div className="max-w-xl"> {/* Reduced from max-w-2xl */}
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-400 mb-2">
                  DevOps <span className="text-white"> Course with</span>
                </h1>
                <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                  Guaranteed Placement
                </h2>
                <p className="text-base font-bold sm:text-lg lg:text-2xl text-white mb-6">
                  Get placed with ₹3-10 LPA salary
                </p>
                <Button variant="outline" className="rounded-full bg-transparent border-white text-white hover:bg-purple-700 text-sm sm:text-base">
                  Introducing Live Bootcamp
                </Button>
              </div>
  
              {/* Right Side Image */}
              <div className="relative w-full lg:w-[500px] h-[200px] lg:h-[250px]"> {/* Fixed height */}
                <Image 
                  src={HeroImage}
                  alt="Course illustration"
                  fill
                  className="object-contain rounded-lg"
                  priority
                />
              </div>
            </div>
  
            {/* Bottom Info Card */}
            <div className="relative mt-8">
              <div className="relative left-0 right-0 md:bottom-[0px]">
                <div className="bg-white rounded-lg p-4 shadow-lg max-w-5xl mx-auto"> {/* Reduced padding and added max-width */}
                  <div className="flex flex-col lg:flex-row justify-between items-center gap-4"> {/* Reduced gap */}
                    {/* Info Sections Container */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full"> {/* Reduced gap */}
                      {/* Online Section */}
                      <div className="flex items-center gap-2 justify-start sm:justify-center lg:justify-center">
                        <MdOnlinePrediction className="text-red-700 text-lg" />
                        <div>
                          <span className="text-red-700 text-xs font-medium">ONLINE</span>
                          <span className="font-bold text-xs block">6 months</span>
                        </div>
                      </div>
  
                      {/* Admission Section */}
                      <div className="flex items-center gap-2 justify-start sm:justify-center lg:justify-center">
                        <BsCalendarCheck className="text-red-700 text-lg" />
                        <div>
                          <span className="text-red-700 text-xs font-medium">ADMISSION CLOSES ON</span>
                          <span className="font-bold text-xs block">7th Jan</span>
                          <Badge variant="outline" className="text-yellow-600 border-yellow-600 text-[10px] mt-0.5">
                            Limited seats
                          </Badge>
                        </div>
                      </div>
  
                      {/* Course Fee Section */}
                      <div className="flex items-center gap-2 justify-start sm:justify-center lg:justify-center">
                        <FaMoneyBillWave className="text-red-700 text-lg" />
                        <div>
                          <span className="text-red-700 text-xs font-medium">COURSE FEE</span>
                          <div className="flex flex-col gap-0.5">
                            <span className="font-bold text-xs">₹42,000</span>
                            <span className="line-through text-gray-400 text-xs">₹50,000</span>
                          </div>
                          <Badge variant="outline" className="text-green-600 border-green-600 text-[10px] mt-0.5">
                            Save ₹8,000/-
                          </Badge>
                        </div>
                      </div>
  
                      {/* Guarantee Section */}
                      <div className="flex items-center gap-2 justify-start sm:justify-center lg:justify-center">
                        <TbCertificate className="text-red-700 text-lg" />
                        <div>
                          <span className="text-red-700 text-xs font-medium">GUARANTEE</span>
                          <div className="font-bold text-xs">100% refund if not hired*</div>
                        </div>
                      </div>
                    </div>
  
                    {/* Vertical Divider and Button Section */}
                    <div className="flex items-center gap-4 lg:border-l lg:pl-4 w-full lg:w-auto">
                      <div className="flex flex-col items-start sm:items-center lg:items-center w-full lg:w-auto">
                        <Button className="bg-[#ff0000] hover:bg-[#ff0000] hover:shadow-md hover:shadow-black w-full sm:w-auto text-sm">
                          Start your application
                        </Button>
                        <span className="text-[10px] sm:text-xs text-gray-600 mt-1">
                          186,044 already applied
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="h-[80px]"></div> {/* Reduced spacer height */}
      </div>
    )
  }
  
  export default Hero