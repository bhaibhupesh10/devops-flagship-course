// "use client"

// import { useState } from "react";
// import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
// import { BriefcaseIcon } from "lucide-react";
// import ChartComponent from "./ChartComponent"; // Assuming the chart component is in the same folder

// // Define the types for your tab data
// type TabData = {
//   salary: { label: string; values: number[] };
//   companies: string[];
//   demand: number;
// };

// // Define the structure of the data for both "analyst" and "scientist" tabs
// const data: Record<string, TabData> = {
//   analyst: {
//     salary: { label: "Max (10L)", values: [1200, 2500, 1300] },
//     companies: ["Citibank", "Dell", "Deloitte", "Google", "IBM", "Infosys", "Intel", "JPMorgan"],
//     demand: 45,
//   },
//   scientist: {
//     salary: { label: "Max (15L)", values: [1500, 3000, 160] },
//     companies: ["Zoho", "Wipro", "TCS", "Syfe", "Searce", "Deloitte", "Redhat", "PwC"],
//     demand: 55,
//   },
// };

// const Analyst: React.FC = () => {
//   // Use state to manage the active tab
//   const [activeTab, setActiveTab] = useState<"analyst" | "scientist">("analyst");

//   // Get the corresponding data for the active tab
//   const { salary, companies, demand } = data[activeTab];

//   const chartData = {
//     salaryData: salary.values,
//     companiesData: companies,
//     demandData: demand,
//   };

//   return (
//     <div className="bg-white px-4 py-8 sm:px-6 lg:px-8">
//       <div className="max-w-6xl mx-auto space-y-8">
//         {/* Header */}
//         <div className="space-y-2">
//           <p className="text-xs sm:text-sm text-gray-700 font-semibold">
//             Why DS/ML/AI Industry & Why Data Science?
//           </p>
//           <h1 className="space-y-1">
//             <div className="text-2xl sm:text-3xl font-bold text-[#ff0000]">
//               Rising Demand
//             </div>
//             <div className="text-2xl sm:text-3xl font-bold">
//               for analytics and AI skills
//             </div>
//           </h1>
//         </div>

//         {/* Tabs */}
//         <Tabs defaultValue="analyst" className="w-full">
//           <TabsList className="h-auto p-0 bg-transparent flex space-x-4 sm:space-x-8">
//             <TabsTrigger
//               value="analyst"
//               className={`relative h-auto pb-2 bg-transparent transition duration-300 ${
//                 activeTab === "analyst" ? "text-red-500" : "text-gray-600"
//               }`}
//               onClick={() => setActiveTab("analyst")}
//             >
//               <span className="text-sm sm:text-base">Data Analyst</span>
//               <span
//                 className={`absolute bottom-0 left-0 w-full h-0.5 ${
//                   activeTab === "analyst" ? "bg-red-500" : "opacity-0"
//                 }`}
//               />
//             </TabsTrigger>
//             <TabsTrigger
//               value="scientist"
//               className={`relative h-auto pb-2 bg-transparent transition duration-300 ${
//                 activeTab === "scientist" ? "text-red-500" : "text-gray-600"
//               }`}
//               onClick={() => setActiveTab("scientist")}
//             >
//               <span className="text-sm sm:text-base">Data Scientist</span>
//               <span
//                 className={`absolute bottom-0 left-0 w-full h-0.5 ${
//                   activeTab === "scientist" ? "bg-red-500" : "opacity-0"
//                 }`}
//               />
//             </TabsTrigger>
//           </TabsList>
//         </Tabs>

//         {/* Main Content */}
//         <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
//           {/* Salary Chart */}
//           <Card className=" h-72">
//             <span className="font-semibold mb-6 text-base border-br-lg border-blue-500 border-2 sm:text-lg">
//               Annual Average Salaries
//             </span>
//             <div className="space-y-4 p-4">
//               <div className="text-xs sm:text-sm text-gray-600">
//                 No. of Learners
//               </div>
//               <div className="relative sm:h-64">
//                 {/* Bar Chart for Salary */}
//                 <ChartComponent data={chartData.salaryData} label={salary.label}  />
//               </div>
//               {/* <div className="text-xs sm:text-sm text-gray-600 mt-4 sm:mt-8">Salary</div> */}
//             </div>
//           </Card>

//           {/* Companies */}
//           <Card className="p-4 sm:p-6 h-72">
//             <h3 className="font-semibold mb-6 text-base sm:text-lg">Top Companies Hiring</h3>
//             <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
//               {companies.map((company) => (
//                 <img
//                   key={company}
//                   src={`/assets/companyLogo/${company}.png`}
//                   alt={company}
//                   className="h-6 sm:h-8 object-contain"
//                 />
//               ))}
//             </div>
//           </Card>

//           {/* Demand */}
//           <div className="flex flex-col space-y-2">
//             <Card className="p-4 sm:p-6 h-40 sm:h-48 md:h-72">
              
//               <CardContent className="flex flex-col items-center text-center justify-center h-full">
//               <div className="bg-red-50 rounded-full p-4 hover:shadow-md">
//                     <BriefcaseIcon className="w-10 h-10 sm:w-12 sm:h-12 text-red-500 " />
//                   </div>
//                 <div className="text-center mt-4">
                  
//                   <div className="text-3xl sm:text-4xl font-bold ">{demand}%</div>
//                   <p className="text-xs sm:text-sm text-gray-600">
//                     Year-On-Year<br />
//                     Growth in Job Postings
//                   </p>
//                 </div>
//               </CardContent>
//             </Card>

        
//           </div>
//         </div>

//         {/* Footer Text */}
//         <p className="text-gray-600 text-xs sm:text-sm max-w-4xl">
//           Data scientists are highly valued for their ability to analyze big
//           data, generate insights, and tackle everyday challenges, enhancing
//           business profitability and improving society.
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Analyst;




"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { BriefcaseIcon } from "lucide-react";
import ChartComponent from "./ChartComponent"; // Assuming the chart component is in the same folder

// Define the types for your tab data
type TabData = {
  salary: { label: string; values: number[] };
  companies: string[];
  demand: number;
};

// Define the structure of the data for both "analyst" and "scientist" tabs
const data: Record<string, TabData> = {
  analyst: {
    salary: { label: "Max (10L)", values: [1200, 2500, 1300] },
    companies: ["Citibank", "Dell", "Deloitte", "Google", "IBM", "Infosys", "Intel", "JPMorgan"],
    demand: 45,
  },
  scientist: {
    salary: { label: "Max (15L)", values: [1500, 3000, 1600] },
    companies: ["Zoho", "Wipro", "TCS", "Syfe", "Searce", "Deloitte", "Redhat", "PwC"],
    demand: 55,
  },
};

// Mapping for company logos
const companyLogos: Record<string, string> = {
  Citibank: "/assets/companyLogo/citibank.png",
  Dell: "/assets/companyLogo/dell.png",
  Deloitte: "/assets/companyLogo/deloitte.png",
  Google: "/assets/companyLogo/google.png",
  IBM: "/assets/companyLogo/ibm.png",
  Infosys: "/assets/companyLogo/infosys.png",
  Intel: "/assets/companyLogo/intel.png",
  JPMorgan: "/assets/companyLogo/jpmorgan.png",
  Zoho: "/assets/companyLogo/zoho.png",
  Wipro: "/assets/companyLogo/wipro.png",
  TCS: "/assets/companyLogo/tcs.png",
  Syfe: "/assets/companyLogo/syfe.png",
  Searce: "/assets/companyLogo/searce.png",
  Redhat: "/assets/companyLogo/redhat.png",
  PwC: "/assets/companyLogo/pwc.png",
};

const Analyst: React.FC = () => {
  // Use state to manage the active tab
  const [activeTab, setActiveTab] = useState<"analyst" | "scientist">("analyst");

  // Get the corresponding data for the active tab
  const { salary, companies, demand } = data[activeTab];

  const chartData = {
    salaryData: salary.values,
    companiesData: companies,
    demandData: demand,
  };

  return (
    <div className="bg-white px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <p className="text-xs sm:text-sm text-gray-700 font-semibold">
            Why DS/ML/AI Industry & Why Data Science?
          </p>
          <h1 className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold text-[#ff0000]">
              Rising Demand
            </div>
            <div className="text-2xl sm:text-3xl font-bold">
              for analytics and AI skills
            </div>
          </h1>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="analyst" className="w-full">
          <TabsList className="h-auto p-0 bg-transparent flex space-x-4 sm:space-x-8">
            <TabsTrigger
              value="analyst"
              className={`relative h-auto pb-2 bg-transparent transition duration-300 ${
                activeTab === "analyst" ? "text-red-500" : "text-gray-600"
              }`}
              onClick={() => setActiveTab("analyst")}
            >
              <span className="text-sm sm:text-base">Data Analyst</span>
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 ${
                  activeTab === "analyst" ? "bg-red-500" : "opacity-0"
                }`}
              />
            </TabsTrigger>
            <TabsTrigger
              value="scientist"
              className={`relative h-auto pb-2 bg-transparent transition duration-300 ${
                activeTab === "scientist" ? "text-red-500" : "text-gray-600"
              }`}
              onClick={() => setActiveTab("scientist")}
            >
              <span className="text-sm sm:text-base">Data Scientist</span>
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 ${
                  activeTab === "scientist" ? "bg-red-500" : "opacity-0"
                }`}
              />
            </TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Main Content */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Salary Chart */}
          <Card className="p-6 sm:p-6 h-72">
            <h3 className="font-semibold mb-6 text-base sm:text-lg">
              Annual Average Salaries
            </h3>
            <div className="space-y-4">
              <div className="text-xs sm:text-sm text-gray-600">
                No. of Learners
              </div>
              <div className="relative sm:h-64">
                {/* Bar Chart for Salary */}
                <ChartComponent data={chartData.salaryData} label={salary.label} />
              </div>
            </div>
          </Card>

          {/* Companies */}
          <Card className="p-4 sm:p-6 h-72">
            <h3 className="font-semibold mb-6 text-base sm:text-lg">Top Companies Hiring</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
              {companies.map((company) => {
                const logoPath = companyLogos[company];
                return (
                  <img
                    key={company}
                    src={logoPath.toString()}
                    alt={company}
                    className="h-6 sm:h-8 object-contain"
                  />
                );
              })}
            </div>
          </Card>

          {/* Demand */}
          <div className="flex flex-col space-y-2">
            <Card className="p-4 sm:p-6 h-40 sm:h-48 md:h-72">
              <CardContent className="flex flex-col items-center text-center justify-center h-full">
                <div className="bg-red-50 rounded-full p-4">
                  <BriefcaseIcon className="w-10 h-10 sm:w-12 sm:h-12 text-red-500" />
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold">{demand}%</div>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Year-On-Year
                    <br />
                    Growth in Job Postings
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer Text */}
        <p className="text-gray-600 text-xs sm:text-sm max-w-4xl">
          Data scientists are highly valued for their ability to analyze big
          data, generate insights, and tackle everyday challenges, enhancing
          business profitability and improving society.
        </p>
      </div>
    </div>
  );
};

export default Analyst;
