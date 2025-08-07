/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Shivam Sharma",
  title: "Hi all, I'm Shivam",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with JavaScript,Reactjs,Nodejs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1JQxPDhwNf7oNajvvXjWuNv-xYDZqBevW/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ShivamSharma43",
  linkedin: "https://www.linkedin.com/in/shivam-sharma-1ss/",
  gmail: "shivamsharmaxd43@gmail.com",
  codeforces: "https://codeforces.com/profile/shivam__sharma",
  leetcode: "https://leetcode.com/u/shivam_sharma10230/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for web applications"
    ),
    emoji("⚡ Building responsive websites using HTML, CSS, JavaScript, React"),
    emoji(
      "⚡ Strong grasp of data structures and algorithms and love to solve problems on Codeforces, Leetcode and different coding platforms"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JAVASCRIPT",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "REACTJS",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "NODEJS",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "NPM",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "PYTHON",
      fontAwesomeClassname: "fab fa-python"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Birla Institute of Technology,Mesra",
      logo: require("./assets/images/image.png"),
      subHeader: "BTech - CSE-AI/ML",
      duration: "2023-2027",
      desc: "A passionate CSE-AI/ML student who loves building apps, solving problems, and exploring new tech.",
      
    },
    {
      schoolName: "DAV Public School, Bariatu",
      logo: require("./assets/images/bariatu.png"),
      subHeader: "Standard 10th and 12th",
      duration: "2019-2022",
      desc: "10th - 94.6%    |     12th - 92%",
      
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME EXCITING PROJECTS THAT I HAVE MADE IN THE PROCESS OF LEARNING",
  projects: [
    {
      image: require("./assets/images/quickmart.png"),
      projectName: "QuickMart",
      projectDesc: "Built a full-featured e-commerce platform using the MERN stack with a RESTful API for seamless frontend-backend integration.",
      footerLink: [
        {
          name: "Github Repo Link",
          url: "https://github.com/ShivamSharma43/QuickMart"
        },
        {
          name: "Website Link",
          url: "https://quickmart-nine.vercel.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/numisnest.png"),
      projectName: "NumisNest",
      projectDesc: "NumisNest is a curated showcase of Indian historical and rare coins. Explore coinage across dynasties and decades, and connect with the collector to learn more or acquire a piece of history.",
      footerLink: [
        {
          name: "Github Repo Link",
          url: "https://github.com/ShivamSharma43/NumisNest"
        }
      ]
    },
    {
      image: require("./assets/images/Figure_1.png"),
      projectName: "Exploring-Club-Membership-Trends",
      projectDesc: "Exploring Club Membership Trends analyzes student participation in campus clubs using time series and regression techniques. It uncovers patterns in membership growth, seasonal involvement, and engagement drivers to support data-driven decision-making for student organizations using python.",
      footerLink: [
        {
          name: "Github Repo Link",
          url: "https://github.com/ShivamSharma43/Exploring-Club-Membership-Trends"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements and Certifications stuff that I have done !",

  achievementsCards: [
    {
      title: "GP Birla Scholorship",
      subtitle:
        "Awarded the prestigious GP Birla Scholarship with 100% coverage in recognition of outstanding academic excellence. Selected among top-performing students for consistently high scholastic achievements.",
      image: "https://scholarshiplearn.com/wp-content/uploads/2024/10/GP-Birla-Scholarship-.jpg",
      imageAlt: "Scholorship",
      footerLink: [
        
        {
          name: "Award List",
          url: "https://drive.google.com/file/d/1XNA35I3UWqLPVPL4vT0TTDmk8c9ZS63O/view?usp=drivesdk"
        }
      ]
    },
    {
      title: "CodeForces",
      subtitle:
        "Achieved Pupil (1200+) rating on Codeforces, demonstrating strong problem-solving skills and consistent performance in rated contests on one of the most competitive programming platforms.",
      image: "https://codeforces.org/s/29049/images/codeforces-sponsored-by-ton.png",
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Codeforces Profile",
          url: "https://codeforces.com/profile/shivam__sharma"
        }
      ]
    },

    {
      title: "LeetCode",
      subtitle: "Solved 100+ DSA problems on LeetCode, strengthening core concepts in arrays, strings, recursion, dynamic programming, trees, and graphs. Continuously improving problem-solving skills through daily practice and contest participation.",
      image: "https://miro.medium.com/v2/resize:fit:1400/1*gBkMCGTAdSk4tu17SCa7RQ.png",
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "LeetCode Profile",
          url: "https://leetcode.com/u/shivam_sharma10230/"
        }
      ]
    }
  ],
  display: true 
};


const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  
  display: true 
};

const contactInfo = {
  image: require("./assets/images/photo1.jpg"),
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9934368204",
  email_address: "shivamsharmaxd43@gmail.com"
};


const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  bigProjects,
  achievementSection,
  contactInfo,
  isHireable,
  resumeSection,
};
