import { Code2, Cpu, Database, FileJson, GitBranch, Sparkles,SquareCode,Eclipse,Hexagon,Bot     } from 'lucide-react'
import Image from 'next/image'

export default function SkillsAndTools() {
  const skills = [
    {
      icon: <SquareCode className="h-10 w-10 rounded-2xl p-0 bg-red-100  text-[#ff0000]" />,
      name: 'HTML & CSS'
    },
    {
      icon: <Eclipse className="h-10 w-10 rounded-2xl p-0 bg-red-100 text-[#ff0000]" />,
      name: 'Tailwind'
    },
    {
      icon: <Code2 className="h-10 w-10 text-[#ff0000] rounded-2xl p-0 bg-red-100" />,
      name: 'JavaScript'
    },
    {
      icon: <SquareCode className="h-10 w-10 text-[#ff0000] rounded-2xl bg-red-100" />,
      name: 'React'
    },
    {
      icon: <GitBranch className="h-10 w-10 text-[#ff0000] rounded-2xl bg-red-100" />,
      name: 'Redux'
    },
    {
      icon: <Hexagon className="h-10 w-10 text-[#ff0000] rounded-2xl bg-red-100" />,
      name: 'Node.js'
    },
    {
      icon: <Hexagon className="h-10 w-10 text-[#ff0000] rounded-2xl bg-red-100"  />,
      name: 'Express.js'
    },
    {
      icon: <Database className="h-10 w-10 text-[#ff0000] rounded-2xl bg-red-100" />,
      name: 'MongoDB'
    },
    {
      icon: <FileJson className="h-10 w-10 text-[#ff0000] rounded-2xl  bg-red-100" />,
      name: 'APIs'
    },
    {
      icon: <Sparkles className="h-10 w-10 text-[#ff0000] rounded-2xl bg-red-100" />,
      name: 'Latest gen AI tools'
    },
    {
      icon: <Cpu className="h-10 w-10 text-[#ff0000] rounded-2xl bg-red-100" />,
      name: 'DSA'
    },
    {
      icon: <Bot  className='h-10 w-10 text-[#ff0000] rounded-2xl bg-red-100' />,
      name: 'ChatGPT'
    }
  ]

  return (
    <div className='bg-gradient-to-br from-gray-50 via-black-50 to-red-50'>
    <div className="w-full pt-4 pb-4 max-w-6xl mx-auto px-4 ">
      <h2 className="text-3xl font-bold mb-8"> <span className='text-[#ff0000]'>Skills </span>and <span className='text-[#ff0000]'>tools </span> you will learn</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-8 rounded-lg border border-gray-200 bg-white hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex-shrink-0">
              {skill.icon}
            </div>
            <span className="text-gray-900 font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

