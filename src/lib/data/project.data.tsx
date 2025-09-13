export type Projects = {
  title: string;
  description: string[]; // change to array of strings
  href: string;
};

export const projectsData: Projects[] = [
  {
    title: "Gulfin.ai",
    description: [
      "Contributed to the development and optimization of an AI-powered investment intelligence platform at Gulfin.ai, improving product performance and scalability.",
      "Resolved critical frontend and API integration issues, enhancing platform stability and reducing reported user bugs by 40%.",
      "Developed reusable Next.js components and improved page load speed, resulting in a smoother user experience across web and mobile devices.",
    ],
    href: "https://Gulfin.ai",
  },
  {
    title: "Company URL Checker",
    description: [
      "Verify whether a website’s URL matches a predefined list of companies",
      "Implemented efficient URL matching algorithms to ensure quick and accurate identification, enhancing user experience and security.",
      "Built the extension using JavaScript and browser-specific APIs, ensuring compatibility across major web browsers",
    ],
    href: "https://addons.mozilla.org/en-US/firefox/addon/check-company/",
  },
];
