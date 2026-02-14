export type Work = {
  company: string;
  deliverable: string[];
  fromDate: string;
  toDate: string;
};

export const worksData: Work[] = [
  {
    company: "Saral Tech",
    deliverable: [
      "Analyzed and resolved critical frontend issues in a production Next.js application, improving build reliability and deployment stability.",
      "Worked closely with backend engineers to integrate and validate RESTful APIs, ensuring consistent data flow and improved application responsiveness.",
      "Performed systematic debugging and implemented monitoring practices to enhance application stability and reduce post-release defects.",
       ],
    fromDate: "August 2025",
    toDate: "January 2026",
  },
  {
    company: "The Spark Foundation",
    deliverable: [
      "Developed a full-stack e-commerce platform with product listings, cart functionality, and payment integration.",
      "Integrated a payment gateway for seamless transactions.",
    ],
    fromDate: "May 2023",
    toDate: "July 2023",
  },
];
