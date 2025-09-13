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
      "Resolved critical frontend issues and optimized Next.js build process, reducing production deployment costs by 20%.",
      "Developed and integrated reusable React components with Tailwind CSS, improving user experience and reducing page load time by 30%.",
      "Collaborated with backend engineers to refine API integration, enhancing data flow efficiency and reducing response latency.",
      "Conducted debugging and implemented performance monitoring tools, resulting in 40% fewer user-reported bugs post-release.",
    ],
    fromDate: "08-2025",
    toDate: "Present",
  },
  {
    company: "The Spark Foundation",
    deliverable: [
      "Developed a full-stack e-commerce platform with product listings, cart functionality, and payment integration.",
      "Integrated a payment gateway for seamless transactions.",
    ],
    fromDate: "05-2023",
    toDate: "07-2023",
  },
];
