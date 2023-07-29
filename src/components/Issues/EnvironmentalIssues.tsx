import React from 'react'
import {
  TrashIcon,
  PresentationChartBarIcon,
  ArrowDownCircleIcon,
  GlobeEuropeAfricaIcon,
  PaperAirplaneIcon,
  UsersIcon
} from "@heroicons/react/24/outline";

interface IssueInter {
  icon: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
    title?: string | undefined;
    titleId?: string | undefined;
  } & React.RefAttributes<SVGSVGElement>>,
  title: string,
  text: string,
  link: string,
}
const issues: IssueInter[] = [
  {
    icon: TrashIcon,
    title: "Litter and waste management",
    text: "As the island's population and tourism industry have grown, there has been a trend towards overdevelopment and loss of natural habitat. One solution to this problem is to implement more stringent zoning laws and development regulations that prioritize the protection of natural areas.",
    link: '',
  },
  {
    icon: PresentationChartBarIcon,
    title: "Litter and waste management",
    text: "As the island's population and tourism industry have grown, there has been a trend towards overdevelopment and loss of natural habitat. One solution to this problem is to implement more stringent zoning laws and development regulations that prioritize the protection of natural areas.",
    link: '',
  },
  {
    icon: ArrowDownCircleIcon,
    title: "Litter and waste management",
    text: "As the island's population and tourism industry have grown, there has been a trend towards overdevelopment and loss of natural habitat. One solution to this problem is to implement more stringent zoning laws and development regulations that prioritize the protection of natural areas.",
    link: '',
  },
  {
    icon: GlobeEuropeAfricaIcon,
    title: "Litter and waste management",
    text: "As the island's population and tourism industry have grown, there has been a trend towards overdevelopment and loss of natural habitat. One solution to this problem is to implement more stringent zoning laws and development regulations that prioritize the protection of natural areas.",
    link: '',
  },
  {
    icon: PaperAirplaneIcon,
    title: "Litter and waste management",
    text: "As the island's population and tourism industry have grown, there has been a trend towards overdevelopment and loss of natural habitat. One solution to this problem is to implement more stringent zoning laws and development regulations that prioritize the protection of natural areas.",
    link: '',
  },
  {
    icon: UsersIcon,
    title: "Litter and waste management",
    text: "As the island's population and tourism industry have grown, there has been a trend towards overdevelopment and loss of natural habitat. One solution to this problem is to implement more stringent zoning laws and development regulations that prioritize the protection of natural areas.",
    link: '',
  },
]

const renderIssues = () => {
  return issues.map((issue) => {
    return(
      <div className="space-y-3 shadow-xl p-6 rounded-lg">
        <issue.icon className="inline-block p-2 text-blue-500 bg-blue-100 rounded-full h-[50px] w-[50px] dark:text-white dark:bg-blue-500"/>
        <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
          {issue.title}
        </h1>
        <p className="text-gray-500 dark:text-gray-300">
          {issue.text}
        </p>
        <a href={issue.link} className="inline-flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
          <span className="mx-1">read more</span>
          <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
      </div>
    );
  }, [])
}

const EnvironmentalIssues = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
          What are some <span className="underline decoration-blue-500">Environmental Problems</span> and <span className="underline decoration-blue-500">Solutions</span>
        </h1>
        <p className="mt-4 text-gray-500 xl:mt-6 dark:text-gray-300">
          Jeju Island is a beautiful place with a unique natural environment, but like many areas, it faces a number of environmental challenges. Here is a list of some of the major environmental issues facing Jeju Island, along with potential solutions:
        </p>
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
          {renderIssues()}
        </div>
      </div>   
    </section>
  )
}

export default EnvironmentalIssues