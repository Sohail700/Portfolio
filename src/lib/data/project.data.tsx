export type Projects = {
  title: string;
  description: string[]; // change to array of strings
  href: string;
};

export const projectsData: Projects[] = [
  {
    title: "Message web platform",
    description: [
      "Developed a production-ready anonymous messaging platform enabling users to receive messages via shareable links with a strong focus on privacy and usability.",
      "Designed and implemented a responsive UI using Next.js, TypeScript, and Tailwind CSS, ensuring fast load times and seamless cross-device experience",
    ],
    href: "https://github.com/Sohail700/Anoni-message",
  },
  {
    title: "Video Backend App",
    description: [
      "Built secure and scalable backend APIs for authentication, profile management, and session handling using JWT-based authorization and cookies.",
      "Implemented scalable image and video upload functionality using Multer and Cloudinary to manage avatars, cover photos, and media content.",
    ],
    href: "https://github.com/Sohail700/VideoGram",
  },
  {
    title: "FavWord Mobile   App",
    description: [
      "FavWord is here to make the process easy and exciting! This Flutter app generates random word pairs, lets you save your favorites, and keeps a history of previously generated words.",
      "Users can save their favorite word pairs and revisit them later. The app features a responsive design optimized.",
    ],
    href: "https://github.com/Sohail700/NamesIdea",
  },
  {
    title: "Website Blocker Tool",
    description: [
      "Developed a browser extension to validate website URLs against a predefined company list using efficient matching logic, enhancing browsing security. Built using JavaScript and browser-specific APIs with cross-browser compatibility."
    ],
    href: "https://addons.mozilla.org/en-US/firefox/addon/check-company/",
  },
];
