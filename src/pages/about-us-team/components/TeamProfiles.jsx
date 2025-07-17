import React, { useState } from "react";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";
import Button from "../../../components/ui/Button";
import { Navigate, useNavigate } from "react-router-dom";

const TeamProfiles = () => {
  const [expandedBio, setExpandedBio] = useState(null);
  const navigate = useNavigate();

  //   const teamMembers = [
  //     {
  //       id: 1,
  //       name: "Sarah Johnson",
  //       title: "CEO & Co-Founder",
  //       image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
  //       bio: "Sarah brings over 15 years of experience in startup ecosystem development and venture capital. She previously led growth initiatives at three successful tech startups and has a proven track record of scaling businesses from concept to IPO.",
  //       fullBio: `Sarah brings over 15 years of experience in startup ecosystem development and venture capital. She previously led growth initiatives at three successful tech startups and has a proven track record of scaling businesses from concept to IPO.

  // Before founding StartupHub Pro, Sarah was a Partner at Venture Growth Capital where she invested in over 50 early-stage companies. She holds an MBA from Stanford Graduate School of Business and a BS in Computer Science from MIT.

  // Sarah is passionate about empowering the next generation of entrepreneurs and frequently speaks at industry conferences about startup strategy and growth hacking.`,
  //       socialLinks: {
  //         linkedin: "https://linkedin.com/in/sarahjohnson",
  //         twitter: "https://twitter.com/sarahjohnson",
  //         email: "sarah@startuphubpro.com"
  //       }
  //     },
  //     {
  //       id: 2,
  //       name: "Michael Chen",
  //       title: "CTO & Co-Founder",
  //       image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  //       bio: "Michael is a seasoned technology leader with expertise in scalable architecture and product development. He has built and led engineering teams at multiple high-growth startups and has extensive experience in AI and machine learning.",
  //       fullBio: `Michael is a seasoned technology leader with expertise in scalable architecture and product development. He has built and led engineering teams at multiple high-growth startups and has extensive experience in AI and machine learning.

  // Prior to StartupHub Pro, Michael was the Head of Engineering at TechFlow Solutions, where he led a team of 50+ engineers and architected systems serving millions of users. He holds a PhD in Computer Science from Carnegie Mellon University.

  // Michael is an advocate for open-source technology and has contributed to several major projects. He enjoys mentoring young developers and speaking about emerging technologies.`,
  //       socialLinks: {
  //         linkedin: "https://linkedin.com/in/michaelchen",
  //         github: "https://github.com/michaelchen",
  //         email: "michael@startuphubpro.com"
  //       }
  //     },
  //     {
  //       id: 3,
  //       name: "Emily Rodriguez",
  //       title: "Head of Strategy",
  //       image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
  //       bio: "Emily specializes in business strategy and market analysis with a focus on helping startups identify and capitalize on growth opportunities. She has consulted for Fortune 500 companies and emerging startups alike.",
  //       fullBio: `Emily specializes in business strategy and market analysis with a focus on helping startups identify and capitalize on growth opportunities. She has consulted for Fortune 500 companies and emerging startups alike.

  // With an MBA from Wharton and 12 years of experience at McKinsey & Company, Emily brings deep analytical skills and strategic thinking to every client engagement. She has helped over 200 companies develop go-to-market strategies and optimize their business models.

  // Emily is passionate about data-driven decision making and frequently publishes insights on market trends and startup strategy.`,
  //       socialLinks: {
  //         linkedin: "https://linkedin.com/in/emilyrodriguez",
  //         twitter: "https://twitter.com/emilyrodriguez",
  //         email: "emily@startuphubpro.com"
  //       }
  //     },
  //     {
  //       id: 4,
  //       name: "David Kim",
  //       title: "Head of Operations",
  //       image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  //       bio: "David ensures operational excellence across all client engagements. With a background in process optimization and project management, he helps startups build scalable operational frameworks.",
  //       fullBio: `David ensures operational excellence across all client engagements. With a background in process optimization and project management, he helps startups build scalable operational frameworks.

  // Before joining StartupHub Pro, David was the VP of Operations at GrowthTech, where he streamlined operations for a portfolio of 30+ companies. He holds a Master's in Operations Management from Northwestern Kellogg.

  // David is certified in Six Sigma and Lean methodologies and enjoys helping startups build efficient, scalable processes from day one.`,
  //       socialLinks: {
  //         linkedin: "https://linkedin.com/in/davidkim",
  //         email: "david@startuphubpro.com"
  //       }
  //     },
  //     {
  //       id: 5,
  //       name: "Lisa Thompson",
  //       title: "Head of Marketing",
  //       image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
  //       bio: "Lisa leads our marketing initiatives and helps startups develop compelling brand narratives. She has over 10 years of experience in digital marketing and brand development across various industries.",
  //       fullBio: `Lisa leads our marketing initiatives and helps startups develop compelling brand narratives. She has over 10 years of experience in digital marketing and brand development across various industries.

  // Previously, Lisa was the Marketing Director at BrandForward Agency, where she managed campaigns for both B2B and B2C clients. She holds a Master's in Marketing from Columbia Business School. Lisa specializes in growth marketing, content strategy, and brand positioning. She's helped numerous startups achieve viral growth and build strong market presence.`,
  //       socialLinks: {
  //         linkedin: "https://linkedin.com/in/lisathompson",
  //         twitter: "https://twitter.com/lisathompson",
  //         email: "lisa@startuphubpro.com"
  //       }
  //     },
  //     {
  //       id: 6,
  //       name: "James Wilson",
  //       title: "Senior Business Advisor",
  //       image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
  //       bio: "James provides strategic guidance to our clients with his extensive experience in business development and fundraising. He has helped startups raise over $100M in funding collectively.",
  //       fullBio: `James provides strategic guidance to our clients with his extensive experience in business development and fundraising. He has helped startups raise over $100M in funding collectively.

  // With 20 years of experience in investment banking and venture capital, James brings deep financial expertise to every client relationship. He previously worked at Goldman Sachs and later founded his own investment firm.

  // James is passionate about helping entrepreneurs navigate the complex world of fundraising and business development. He serves on the boards of several successful startups.`,
  //       socialLinks: {
  //         linkedin: "https://linkedin.com/in/jameswilson",
  //         email: "james@startuphubpro.com"
  //       }
  //     }
  //   ];

  const techStack = [
    {
      id: 1,
      name: "React.js",
      title: "Frontend Library",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      bio: "React is a popular JavaScript library for building fast and interactive user interfaces.",
      fullBio: `React allows us to build scalable and responsive web applications. It's component-based, making the code maintainable and reusable. We use React for its strong ecosystem, speed, and seamless integration with APIs and third-party tools.

React is ideal for modern dashboards, CRMs, e-commerce websites, and admin panels where real-time updates and a smooth user experience are critical.`,
      socialLinks: {
        github: "https://github.com/facebook/react",
        website: "https://reactjs.org",
      },
    },
    {
      id: 2,
      name: "Node.js + Express",
      title: "Backend Runtime & Framework",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
      bio: "Node.js allows building scalable, high-performance backend APIs with JavaScript.",
      fullBio: `Node.js with Express.js is used to build the server side of applications. It's lightweight, fast, and efficient. Using a JavaScript-based backend means we share logic and types with the frontend, increasing consistency.

This stack is perfect for REST APIs, real-time systems, and microservices in web and mobile apps.`,
      socialLinks: {
        github: "https://github.com/expressjs/express",
        website: "https://nodejs.org",
      },
    },
    {
      id: 3,
      name: "MongoDB",
      title: "NoSQL Database",
      image:
        "https://webimages.mongodb.com/_com_assets/cms/mongodb-logo-rgb-j6w271g1xn.jpg",
      bio: "MongoDB is a flexible NoSQL database great for dynamic and fast-changing data.",
      fullBio: `MongoDB stores data in JSON-like documents, making it ideal for startups where data models evolve quickly. It's highly scalable and works well with Node.js-based apps.

We use MongoDB for CRM systems, real-time apps, and dashboards that need fast read/write operations.`,
      socialLinks: {
        website: "https://www.mongodb.com/",
      },
    },
    {
      id: 4,
      name: "Tailwind CSS",
      title: "CSS Utility Framework",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
      bio: "Tailwind helps create responsive and modern UIs with utility-first classes.",
      fullBio: `Tailwind CSS accelerates frontend development by providing low-level utility classes. It ensures design consistency and keeps styles within components (no more messy CSS files).

We use it for modern, clean interfaces—ideal for dashboards, forms, and responsive web layouts.`,
      socialLinks: {
        website: "https://tailwindcss.com/",
      },
    },
    {
      id: 5,
      name: "Firebase",
      title: "Authentication & Realtime Backend",
      image:
        "https://firebase.google.com/downloads/brand-guidelines/PNG/logo-vertical.png",
      bio: "Firebase provides real-time databases, auth, and hosting with zero backend setup.",
      fullBio: `We use Firebase for rapid MVPs, chat features, or auth systems that need quick integration. Its real-time sync and scalability make it ideal for messaging, live dashboards, or mobile apps with instant updates.`,
      socialLinks: {
        website: "https://firebase.google.com/",
      },
    },
    {
      id: 6,
      name: "OpenAI / ChatGPT API",
      title: "AI Automation & Intelligence",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/4/4b/OpenAI_Logo.svg",
      bio: "We use AI to enhance apps with smart suggestions, chatbots, and automation.",
      fullBio: `AI is integrated into apps to automate tasks, generate content, analyze data, and provide natural language support. We use the OpenAI/ChatGPT API to build intelligent systems that enhance user experiences and boost productivity.

Use cases include: smart customer support, document summarization, voice/chat assistants, auto-reply systems, and more.`,
      socialLinks: {
        website: "https://platform.openai.com/",
      },
    },

    {
      id: 7,
      name: "MySQL",
      title: "Relational Database",
      image: "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg",
      bio: "MySQL is a reliable open-source SQL database for structured data storage and reporting.",
      fullBio: `We use MySQL when structured data, relationships, and consistency are crucial — such as invoicing systems, product inventories, or analytics dashboards.

It’s widely supported, fast, and secure. With MySQL, we can run complex queries, generate detailed reports, and maintain clear data structure for scaling.`,
      socialLinks: {
        website: "https://www.mysql.com/",
        github: "https://github.com/mysql",
      },
    },
    {
      id: 8,
      name: "Prisma",
      title: "Modern ORM for Node.js",
      image: "https://avatars.githubusercontent.com/u/17219288?s=200&v=4",
      bio: "Prisma is a next-gen ORM that simplifies database access with type-safe queries.",
      fullBio: `Prisma acts as a smart layer between the app and database. It helps us write cleaner, safer, and more predictable database code. It works perfectly with both SQL (like MySQL) and NoSQL.

We use Prisma to speed up backend development, reduce bugs, and keep data access secure, especially in Node.js projects.`,
      socialLinks: {
        website: "https://www.prisma.io/",
        github: "https://github.com/prisma/prisma",
      },
    },
    {
      id: 9,
      name: "React Native",
      title: "Cross-Platform App Framework",
      image: "https://reactnative.dev/img/header_logo.svg",
      bio: "React Native lets us build native mobile apps for Android & iOS using JavaScript.",
      fullBio: `React Native enables us to create mobile apps for both Android and iOS using a single codebase. It speeds up development while providing native-like performance and UI.

This framework is ideal for startups needing MVPs, mobile-first platforms, or user apps that work across devices without the cost of building two separate apps.`,
      socialLinks: {
        website: "https://reactnative.dev/",
        github: "https://github.com/facebook/react-native",
      },
    },
  ];

  const toggleBio = (memberId) => {
    setExpandedBio(expandedBio === memberId ? null : memberId);
  };

  const getSocialIcon = (platform) => {
    const iconMap = {
      linkedin: "Linkedin",
      twitter: "Twitter",
      github: "Github",
      email: "Mail",
    };
    return iconMap[platform] || "Link";
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Our Tech Stack
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We use a powerful combination of modern technologies and AI tools to
            build fast, scalable, and intelligent web and mobile applications —
            all crafted by a Expert developer.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStack.map((member) => (
            <div
              key={member.id}
              className="bg-card rounded-lg shadow-card overflow-hidden hover:shadow-interactive transition-smooth"
            >
              {/* Member Image */}
              <div className="relative overflow-hidden">
                {/* <Image
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-fit"
                /> */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Member Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-4">{member.title}</p>

                {/* Bio */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {expandedBio === member.id ? member.fullBio : member.bio}
                </p>

                {/* Expand Bio Button */}
                <button
                  onClick={() => toggleBio(member.id)}
                  className="text-primary text-sm font-medium hover:text-primary/80 transition-smooth mb-4 flex items-center space-x-1"
                >
                  <span>
                    {expandedBio === member.id ? "Show Less" : "Read More"}
                  </span>
                  <Icon
                    name={
                      expandedBio === member.id ? "ChevronUp" : "ChevronDown"
                    }
                    size={16}
                  />
                </button>

                {/* Social Links */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {Object.entries(member.socialLinks).map(
                      ([platform, url]) => (
                        <a
                          key={platform}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-smooth"
                        >
                          <Icon name={getSocialIcon(platform)} size={16} />
                        </a>
                      )
                    )}
                  </div>

                  {/* Connect Button */}
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="MessageCircle"
                    iconPosition="left"
                    onClick={() => navigate("/meeting-scheduling-integration")}
                  >
                    Connect
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamProfiles;
