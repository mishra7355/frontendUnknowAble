import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/ui/Header";
import Breadcrumb from "../../components/ui/Breadcrumb";
import Icon from "../../components/AppIcon";
import Button from "../../components/ui/Button";
import HeroSection from "./components/HeroSection";
import ServiceCard from "./components/ServiceCard";
import ServiceFilter from "./components/ServiceFilter";
import CaseStudyCard from "./components/CaseStudyCard";
import ServiceComparison from "./components/ServiceComparison";

const ServicesProductsShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedIndustry, setSelectedIndustry] = useState("all");
  const [selectedProjectSize, setSelectedProjectSize] = useState("all");
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Mock data for services
  // const services = [
  //   {
  //     id: 1,
  //     title: "Web Development",
  //     subtitle: "Custom websites & web applications",
  //     description:
  //       "Build modern, responsive websites and web applications using cutting-edge technologies. Our team specializes in React, Node.js, and cloud deployment.",
  //     category: "Development",
  //     industry: "technology",
  //     projectSize: "medium",
  //     price: "$5,000+",
  //     duration: "4-8 weeks",
  //     icon: "Code",
  //     image:
  //       "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
  //     benefits: [
  //       "Responsive design for all devices",
  //       "SEO optimized structure",
  //       "Fast loading performance",
  //       "Modern UI/UX design",
  //       "Cross-browser compatibility",
  //       "Security best practices",
  //     ],
  //     deliverables: [
  //       "Fully functional website",
  //       "Source code & documentation",
  //       "Hosting setup assistance",
  //       "3 months free support",
  //       "Training materials",
  //     ],
  //     process: [
  //       {
  //         title: "Discovery & Planning",
  //         description:
  //           "Understanding requirements and creating project roadmap",
  //       },
  //       {
  //         title: "Design & Prototyping",
  //         description: "Creating wireframes and visual designs",
  //       },
  //       {
  //         title: "Development & Testing",
  //         description: "Building and testing the application",
  //       },
  //       {
  //         title: "Deployment & Launch",
  //         description: "Going live with full support",
  //       },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     title: "Digital Marketing",
  //     subtitle: "SEO, PPC & social media marketing",
  //     description:
  //       "Comprehensive digital marketing strategies to increase your online visibility, drive traffic, and convert visitors into customers.",
  //     category: "Marketing",
  //     industry: "retail",
  //     projectSize: "large",
  //     price: "$2,500+",
  //     duration: "3-6 months",
  //     icon: "TrendingUp",
  //     image:
  //       "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
  //     benefits: [
  //       "Increased online visibility",
  //       "Higher search rankings",
  //       "Better ROI on ad spend",
  //       "Brand awareness growth",
  //       "Lead generation",
  //       "Analytics & reporting",
  //     ],
  //     deliverables: [
  //       "SEO audit & strategy",
  //       "PPC campaign setup",
  //       "Social media management",
  //       "Monthly performance reports",
  //       "Keyword research",
  //     ],
  //     process: [
  //       {
  //         title: "Market Research",
  //         description: "Analyzing competitors and target audience",
  //       },
  //       {
  //         title: "Strategy Development",
  //         description: "Creating comprehensive marketing plan",
  //       },
  //       {
  //         title: "Campaign Execution",
  //         description: "Implementing across all channels",
  //       },
  //       {
  //         title: "Optimization",
  //         description: "Continuous improvement based on data",
  //       },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     title: "Mobile App Development",
  //     subtitle: "iOS & Android applications",
  //     description:
  //       "Native and cross-platform mobile applications that provide exceptional user experience and drive business growth.",
  //     category: "Development",
  //     industry: "technology",
  //     projectSize: "large",
  //     price: "$15,000+",
  //     duration: "12-20 weeks",
  //     icon: "Smartphone",
  //     image:
  //       "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
  //     benefits: [
  //       "Native performance",
  //       "App store optimization",
  //       "Push notifications",
  //       "Offline functionality",
  //       "User analytics",
  //       "Regular updates",
  //     ],
  //     deliverables: [
  //       "iOS & Android apps",
  //       "App store submission",
  //       "Backend API development",
  //       "Admin dashboard",
  //       "User documentation",
  //     ],
  //     process: [
  //       {
  //         title: "Concept & Planning",
  //         description: "Defining app features and user flows",
  //       },
  //       {
  //         title: "UI/UX Design",
  //         description: "Creating intuitive app interfaces",
  //       },
  //       { title: "Development", description: "Building native applications" },
  //       {
  //         title: "Testing & Launch",
  //         description: "Quality assurance and store submission",
  //       },
  //     ],
  //   },
  //   {
  //     id: 4,
  //     title: "Brand Identity Design",
  //     subtitle: "Logo, branding & visual identity",
  //     description:
  //       "Create a memorable brand identity that resonates with your target audience and sets you apart from competitors.",
  //     category: "Design",
  //     industry: "creative",
  //     projectSize: "small",
  //     price: "$1,500+",
  //     duration: "2-4 weeks",
  //     icon: "Palette",
  //     image:
  //       "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=300&fit=crop",
  //     benefits: [
  //       "Professional brand image",
  //       "Consistent visual identity",
  //       "Brand recognition",
  //       "Marketing materials",
  //       "Brand guidelines",
  //       "Trademark assistance",
  //     ],
  //     deliverables: [
  //       "Logo design variations",
  //       "Brand style guide",
  //       "Business card design",
  //       "Letterhead template",
  //       "Social media assets",
  //     ],
  //     process: [
  //       {
  //         title: "Brand Discovery",
  //         description: "Understanding brand values and vision",
  //       },
  //       {
  //         title: "Concept Development",
  //         description: "Creating initial design concepts",
  //       },
  //       {
  //         title: "Refinement",
  //         description: "Perfecting chosen design direction",
  //       },
  //       {
  //         title: "Final Delivery",
  //         description: "Providing all brand assets and guidelines",
  //       },
  //     ],
  //   },
  //   {
  //     id: 5,
  //     title: "E-commerce Solutions",
  //     subtitle: "Online stores & payment integration",
  //     description:
  //       "Complete e-commerce solutions with secure payment processing, inventory management, and customer analytics.",
  //     category: "Development",
  //     industry: "retail",
  //     projectSize: "medium",
  //     price: "$8,000+",
  //     duration: "6-10 weeks",
  //     icon: "ShoppingCart",
  //     image:
  //       "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
  //     benefits: [
  //       "Secure payment processing",
  //       "Inventory management",
  //       "Order tracking",
  //       "Customer accounts",
  //       "Mobile optimization",
  //       "Analytics dashboard",
  //     ],
  //     deliverables: [
  //       "E-commerce website",
  //       "Payment gateway setup",
  //       "Admin panel",
  //       "Product catalog",
  //       "Shipping integration",
  //     ],
  //     process: [
  //       {
  //         title: "Requirements Analysis",
  //         description: "Understanding business needs and goals",
  //       },
  //       {
  //         title: "Platform Setup",
  //         description: "Configuring e-commerce platform",
  //       },
  //       {
  //         title: "Customization",
  //         description: "Tailoring to specific requirements",
  //       },
  //       {
  //         title: "Testing & Launch",
  //         description: "Ensuring everything works perfectly",
  //       },
  //     ],
  //   },
  //   {
  //     id: 6,
  //     title: "Cloud Solutions",
  //     subtitle: "AWS, Azure & cloud migration",
  //     description:
  //       "Migrate your infrastructure to the cloud for better scalability, security, and cost-effectiveness.",
  //     category: "Technology",
  //     industry: "technology",
  //     projectSize: "large",
  //     price: "$10,000+",
  //     duration: "8-16 weeks",
  //     icon: "Cloud",
  //     image:
  //       "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
  //     benefits: [
  //       "Scalable infrastructure",
  //       "Cost optimization",
  //       "Enhanced security",
  //       "Disaster recovery",
  //       "24/7 monitoring",
  //       "Automated backups",
  //     ],
  //     deliverables: [
  //       "Cloud architecture design",
  //       "Migration strategy",
  //       "Security implementation",
  //       "Monitoring setup",
  //       "Documentation",
  //     ],
  //     process: [
  //       {
  //         title: "Assessment",
  //         description: "Evaluating current infrastructure",
  //       },
  //       { title: "Planning", description: "Creating migration roadmap" },
  //       { title: "Migration", description: "Moving systems to cloud" },
  //       {
  //         title: "Optimization",
  //         description: "Fine-tuning performance and costs",
  //       },
  //     ],
  //   },
  // ];

  const services = [
    {
      id: 1,
      title: "Web Development",
      subtitle: "Custom websites & web applications",
      description:
        "Build modern, responsive websites and web applications using cutting-edge technologies like React, Node.js, TypeScript, and Tailwind CSS.",
      category: "Development",
      industry: "Technology",
      projectSize: "medium",
      price: "$1,500+",
      duration: "4-8 weeks",
      icon: "Code",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      benefits: [
        "Responsive design for all devices",
        "SEO optimized structure",
        "Fast loading performance",
        "Modern UI/UX design",
        "Cross-browser compatibility",
        "Security best practices",
      ],
      deliverables: [
        "Fully functional website",
        "Source code & documentation",
        "Hosting setup assistance",
        "3 months free support",
        "Training materials",
      ],
      process: [
        {
          title: "Discovery & Planning",
          description:
            "Understanding requirements and creating project roadmap",
        },
        {
          title: "Design & Prototyping",
          description: "Creating wireframes and visual designs",
        },
        {
          title: "Development & Testing",
          description: "Building and testing the application",
        },
        {
          title: "Deployment & Launch",
          description: "Going live with full support",
        },
      ],
    },
    {
      id: 2,
      title: "Mobile App Development",
      subtitle: "Cross-platform iOS & Android apps",
      description:
        "Build high-performance mobile apps using React Native and TypeScript with native-like experience for both iOS and Android.",
      category: "Development",
      industry: "Technology",
      projectSize: "large",
      price: "$1,000+",
      duration: "10–20 weeks",
      icon: "Smartphone",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
      benefits: [
        "Single codebase for iOS & Android",
        "Push notifications",
        "Offline functionality",
        "Fast performance",
        "App store optimization",
        "User analytics",
      ],
      deliverables: [
        "iOS & Android apps",
        "App store submission",
        "Backend API integration",
        "Admin dashboard",
        "Documentation",
      ],
      process: [
        {
          title: "Concept & Planning",
          description: "Defining app features and user flows",
        },
        {
          title: "UI/UX Design",
          description: "Creating intuitive app interfaces",
        },
        {
          title: "Development",
          description: "Building cross-platform apps with React Native",
        },
        {
          title: "Testing & Launch",
          description: "Quality assurance and store submission",
        },
      ],
    },
    {
      id: 3,
      title: "AI Automation Solutions",
      subtitle: "Smart assistants & workflow automation",
      description:
        "Leverage AI tools like OpenAI (ChatGPT), LangChain, and custom LLMs to automate business workflows, customer support, and content creation.",
      category: "AI & Automation",
      industry: "All",
      projectSize: "variable",
      price: "$1,000+",
      duration: "4–10 weeks",
      icon: "Bot",
      image:
        "https://images.unsplash.com/photo-1689383498363-42c78e4b8d7f?w=400&h=300&fit=crop",
      benefits: [
        "Increased efficiency through automation",
        "24/7 smart chatbot integration",
        "AI-generated summaries and insights",
        "Reduced operational costs",
        "Improved customer experience",
        "Custom trained AI solutions",
      ],
      deliverables: [
        "Custom AI chatbot or assistant",
        "API integration",
        "Automation scripts",
        "Prompt engineering support",
        "Monitoring dashboard",
      ],
      process: [
        {
          title: "AI Use Case Discovery",
          description: "Identifying key automation opportunities",
        },
        {
          title: "Design & Prompt Training",
          description: "Crafting effective prompts and models",
        },
        {
          title: "Integration & Automation",
          description: "Connecting AI tools with business workflows",
        },
        {
          title: "Monitoring & Optimization",
          description: "Ongoing improvement of AI responses",
        },
      ],
    },
    {
      id: 4,
      title: "E-commerce Solutions",
      subtitle: "Online stores & product platforms",
      description:
        "Launch scalable and secure e-commerce stores with custom checkout, inventory tracking, and analytics dashboards.",
      category: "Development",
      industry: "Retail",
      projectSize: "medium",
      price: "$1,800+",
      duration: "6–10 weeks",
      icon: "ShoppingCart",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      benefits: [
        "Custom product catalogs",
        "Secure payment integration",
        "Mobile-friendly storefront",
        "Inventory & order management",
        "Analytics dashboard",
        "Scalable backend",
      ],
      deliverables: [
        "E-commerce web app",
        "Admin panel",
        "Payment gateway integration",
        "Product management system",
        "Customer account system",
      ],
      process: [
        {
          title: "Requirements Gathering",
          description: "Understanding business needs",
        },
        {
          title: "Design & Setup",
          description: "Visual design and platform integration",
        },
        {
          title: "Development",
          description: "Custom backend and frontend implementation",
        },
        {
          title: "Launch & Handover",
          description: "Deployment and final documentation",
        },
      ],
    },
    {
      id: 5,
      title: "Cloud Infrastructure & DevOps",
      subtitle: "Scalable, secure cloud architecture",
      description:
        "Build and deploy apps on cloud platforms (AWS, Vercel, Firebase) with CI/CD, monitoring, and auto-scaling systems.",
      category: "Technology",
      industry: "Technology",
      projectSize: "large",
      price: "$1000+",
      duration: "8–16 weeks",
      icon: "Cloud",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
      benefits: [
        "CI/CD pipelines setup",
        "Scalable architecture",
        "Secure serverless deployment",
        "Monitoring & logging",
        "Disaster recovery planning",
        "Optimized cost management",
      ],
      deliverables: [
        "Cloud-ready application",
        "CI/CD setup",
        "Monitoring & alerts",
        "Infrastructure documentation",
        "Post-deployment support",
      ],
      process: [
        {
          title: "Assessment",
          description: "Evaluating infrastructure needs",
        },
        {
          title: "Setup & Configuration",
          description: "Cloud services & CI/CD pipelines",
        },
        {
          title: "Security & Optimization",
          description: "Best practices & cost efficiency",
        },
        {
          title: "Launch & Maintenance",
          description: "Support and updates",
        },
      ],
    },
    {
      id: 7,
      title: "CRM Development",
      subtitle: "Customer Relationship Management Systems",
      description:
        "Custom CRM platforms tailored to your workflow — manage leads, customer interactions, deals, follow-ups, and analytics.",
      category: "Business Tools",
      industry: "All",
      projectSize: "medium-large",
      price: "$1,500+",
      duration: "6-10 weeks",
      icon: "Users",
      image:
        "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=400&h=300&fit=crop",
      benefits: [
        "Lead and contact management",
        "Custom deal stages",
        "Team access control",
        "Sales and activity tracking",
        "Automation and reminders",
        "Integrated email & communication",
      ],
      deliverables: [
        "Custom CRM dashboard",
        "Admin panel",
        "Reports & analytics",
        "User roles & permissions",
        "Training material",
      ],
      process: [
        {
          title: "Planning",
          description: "Understanding your sales and support process",
        },
        { title: "Design", description: "Wireframes and dashboard UI" },
        { title: "Development", description: "CRM logic and integrations" },
        { title: "Testing & Launch", description: "QA and deployment" },
      ],
    },
    {
      id: 8,
      title: "ERP Software",
      subtitle: "Enterprise Resource Planning System",
      description:
        "Streamline your operations, HR, finance, inventory, and projects with a robust ERP platform tailored to your business.",
      category: "Business Tools",
      industry: "Creative",
      projectSize: "large",
      price: "$2,000+",
      duration: "12–20 weeks",
      icon: "Layers",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
      benefits: [
        "Unified system for all departments",
        "Inventory & order tracking",
        "Financial & HR management",
        "Custom reporting",
        "Workflow automation",
        "Role-based dashboards",
      ],
      deliverables: [
        "ERP software",
        "Employee & Admin panels",
        "Reports engine",
        "Data migration",
        "User manuals",
      ],
      process: [
        {
          title: "Requirement Analysis",
          description: "Understanding your business operations",
        },
        {
          title: "Module Design",
          description:
            "Designing separate modules for HR, Finance, Inventory, etc.",
        },
        {
          title: "Integration",
          description: "Centralized database and workflows",
        },
        { title: "Launch", description: "Go live with training and support" },
      ],
    },
    {
      id: 9,
      title: "Billing & Invoicing Software",
      subtitle: "Automated GST billing and invoice solutions",
      description:
        "Build secure billing systems with multi-tax support, invoice templates, recurring payments, and client management.",
      category: "Finance",
      industry: "Finance",
      projectSize: "small-medium",
      price: "$1,200+",
      duration: "3–6 weeks",
      icon: "FileText",
      image:
        "https://images.unsplash.com/photo-1588776814546-ec7fbc4463f3?w=400&h=300&fit=crop",
      benefits: [
        "GST-enabled invoicing",
        "Recurring bills & payments",
        "Customer tracking",
        "Inventory integration",
        "PDF/Email invoices",
        "Analytics & reports",
      ],
      deliverables: [
        "Billing dashboard",
        "Invoice templates",
        "Export features",
        "API for integration",
        "Mobile app (optional)",
      ],
      process: [
        {
          title: "Setup",
          description: "Basic structure for invoice & client management",
        },
        { title: "Template Design", description: "Customizing invoice views" },
        { title: "Payment Integration", description: "Razorpay/Stripe/etc." },
        { title: "Launch", description: "Go live with support" },
      ],
    },
    {
      id: 10,
      title: "Booking Platform",
      subtitle: "Appointment, ride & delivery scheduling system",
      description:
        "Booking systems for doctors, salons, taxis, deliveries, etc. Includes calendar view, admin panel, customer app.",
      category: "Operations",
      industry: "All",
      projectSize: "medium-large",
      price: "$1,800+",
      duration: "6–10 weeks",
      icon: "Calendar",
      image:
        "https://images.unsplash.com/photo-1549921296-3c4b1d6dc192?w=400&h=300&fit=crop",
      benefits: [
        "Real-time slot availability",
        "Admin & vendor dashboards",
        "Auto-reminders",
        "Payment gateway",
        "Ratings & reviews",
        "Mobile-friendly",
      ],
      deliverables: [
        "Customer booking app",
        "Admin panel",
        "Vendor dashboard",
        "Email/SMS notification setup",
        "Reporting module",
      ],
      process: [
        {
          title: "Requirement Mapping",
          description: "Define types of bookings and stakeholders",
        },
        { title: "UX Design", description: "Calendar + search UI" },
        { title: "Development", description: "Customer, vendor, admin panels" },
        { title: "Launch", description: "Hosting, support, training" },
      ],
    },
    {
      id: 11,
      title: "Taxi/Delivery Platform",
      subtitle: "Ola, Uber, Porter-style real-time services",
      description:
        "Real-time geolocation-based ride hailing, delivery, and tracking platforms with driver-partner onboarding and payouts.",
      category: "Logistics",
      industry: "Creative",
      projectSize: "large",
      price: "$2,200+",
      duration: "12–20 weeks",
      icon: "MapPin",
      image:
        "https://images.unsplash.com/photo-1517976487492-5750f3195933?w=400&h=300&fit=crop",
      benefits: [
        "Real-time geolocation",
        "Driver & user apps",
        "Route optimization",
        "In-app chat & support",
        "Commission system",
        "Payouts & analytics",
      ],
      deliverables: [
        "Driver & customer apps",
        "Admin dashboard",
        "Payout management",
        "Geo API integration",
        "Support tools",
      ],
      process: [
        {
          title: "Planning & Wireframing",
          description: "User journeys for driver, admin, and customer",
        },
        {
          title: "System Design",
          description: "Backend architecture with sockets, GPS APIs",
        },
        { title: "Development", description: "iOS + Android + Admin Web" },
        { title: "Launch & Scale", description: "Cloud scaling and analytics" },
      ],
    },
    {
      id: 12,
      title: "Real Estate Portal",
      subtitle: "Property listing, agent CRM, and lead tracking",
      description:
        "End-to-end real estate web/app portals for brokers and buyers with listings, filters, maps, and contact tools.",
      category: "Real Estate",
      industry: "All",
      projectSize: "medium-large",
      price: "$1,500+",
      duration: "6–10 weeks",
      icon: "Home",
      image:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=300&fit=crop",
      benefits: [
        "Property listings",
        "Map view integration",
        "Agent CRM",
        "Lead form & inquiries",
        "Admin panel",
        "SEO-friendly",
      ],
      deliverables: [
        "Buyer & agent interfaces",
        "Admin dashboard",
        "Search filters",
        "Favorite listings",
        "Contact forms",
      ],
      process: [
        {
          title: "Market Analysis",
          description: "Understanding listing types & user flow",
        },
        { title: "Design & Layout", description: "Web & app views" },
        {
          title: "Development",
          description: "Frontend + backend + deployment",
        },
        { title: "Go-Live", description: "Launch & support" },
      ],
    },
    {
      id: 13,
      title: "Healthcare Platform",
      subtitle: "Appointment booking, e-prescriptions, pharmacy integration",
      description:
        "Custom digital healthcare solutions with doctor listing, video consults, patient dashboard, lab integration, etc.",
      category: "Healthcare",
      industry: "Healthcare",
      projectSize: "large",
      price: "$2,000+",
      duration: "10–16 weeks",
      icon: "Activity",
      image:
        "https://images.unsplash.com/photo-1588776814546-ec7fbc4463f3?w=400&h=300&fit=crop",
      benefits: [
        "Doctor appointment booking",
        "Video call consults",
        "Medical history records",
        "e-Prescription generation",
        "Pharmacy API integration",
        "Mobile & Web app",
      ],
      deliverables: [
        "Doctor & patient app",
        "Admin panel",
        "Lab integration",
        "Notification system",
        "Analytics dashboard",
      ],
      process: [
        {
          title: "Health Domain Research",
          description: "Compliance & flow planning",
        },
        { title: "Design", description: "User-friendly and accessible UI" },
        { title: "Development", description: "Multi-role app + integrations" },
        { title: "Launch", description: "Testing + deployment + training" },
      ],
    },
    {
      id: 1001,
      title: "Dating App Development",
      subtitle: "Secure, scalable matchmaking platforms",
      description:
        "We design and develop dating apps that include smart matchmaking, real-time chat, location discovery, and gamified experiences tailored for modern users.",
      category: "Development",
      industry: "Technology",
      projectSize: "large",
      price: "$1,300+",
      duration: "8-14 weeks",
      icon: "Heart",
      image:
        "https://images.unsplash.com/photo-1616594028212-2c8f0ee6e63b?w=400&h=300&fit=crop",
      benefits: [
        "Smart matchmaking algorithms",
        "Location-based discovery",
        "Real-time chat and video call",
        "User safety and reporting features",
        "Admin dashboard with analytics",
        "Monetization with subscriptions",
      ],
      deliverables: [
        "iOS and Android apps",
        "Admin panel with user controls",
        "Cloud-based backend",
        "Push notifications",
        "App store deployment",
      ],
      process: [
        {
          title: "Discovery & Strategy",
          description: "Define user goals, features, and architecture",
        },
        {
          title: "UX & UI Design",
          description: "Design wireframes and engaging interfaces",
        },
        {
          title: "Development",
          description: "Build secure and scalable app with backend",
        },
        {
          title: "Launch & Support",
          description: "Deploy to app stores and offer post-launch support",
        },
      ],
    },

    {
      id: 1002,
      title: "Pandit Ji / Astrology App",
      subtitle: "Spiritual consultations and puja bookings",
      description:
        "This app enables users to book astrologers or pandits for live consultations, puja services, horoscope reading, and more with real-time scheduling and in-app payments.",
      category: "Spiritual",
      industry: "Creative",
      projectSize: "medium",
      price: "$1,000+",
      duration: "6-10 weeks",
      icon: "Star",
      image:
        "https://images.unsplash.com/photo-1607976529687-e3c8fc0a58a3?w=400&h=300&fit=crop",
      benefits: [
        "Live astrologer video/audio calls",
        "Horoscope generation & reports",
        "Puja and event booking system",
        "Wallet and payment gateway integration",
        "Daily predictions and content",
        "Admin dashboard for services and users",
      ],
      deliverables: [
        "React Native or Flutter app",
        "Admin dashboard",
        "Custom calendar scheduler",
        "Astrology engine API integration",
        "Multi-language support",
      ],
      process: [
        {
          title: "Planning",
          description: "Define categories of spiritual services",
        },
        {
          title: "Design & Flow Mapping",
          description: "Craft engaging, trustworthy UI",
        },
        {
          title: "App Development",
          description: "Integrate custom astrology features and booking logic",
        },
        {
          title: "Launch & Analytics",
          description: "Deploy app and track consultations & payments",
        },
      ],
    },
    {
      id: 14,
      title: "UI/UX Design (Figma)",
      subtitle: "Web & App Prototyping and Visual Design",
      description:
        "We craft beautiful, intuitive, and conversion-driven designs for mobile and web using Figma. Our design process focuses on user-centered thinking, branding consistency, and seamless developer handoff.",
      category: "Design",
      industry: "All",
      projectSize: "small-medium-large",
      price: "$500+",
      duration: "2–6 weeks",
      icon: "PenTool",
      image:
        "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=400&h=300&fit=crop",
      benefits: [
        "Interactive Figma prototypes",
        "Responsive web & mobile layouts",
        "User-centered approach",
        "Design systems & component libraries",
        "Brand consistency",
        "Developer handoff with specs",
      ],
      deliverables: [
        "Wireframes and user flows",
        "High-fidelity mockups",
        "Clickable Figma prototype",
        "Design tokens and stylesheets",
        "Exportable assets for dev",
      ],
      process: [
        {
          title: "Discovery & Research",
          description:
            "Understand your audience, competitors, and project goals",
        },
        {
          title: "Wireframing",
          description:
            "Low-fidelity layout design to map structure and content",
        },
        {
          title: "High-Fidelity UI",
          description: "Pixel-perfect interface design in Figma",
        },
        {
          title: "Prototype & Handoff",
          description: "Interactive demos + dev-ready specs and components",
        },
      ],
    },
  ];

  // Filter categories
  // const categories = [
  //   { id: "development", name: "Development", icon: "Code" },
  //   { id: "marketing", name: "Marketing", icon: "TrendingUp" },
  //   { id: "design", name: "Design", icon: "Palette" },
  //   { id: "technology", name: "Technology", icon: "Settings" },
  // ];

  // Industries
  // const industries = [
  //   { id: "technology", name: "Technology", icon: "Monitor" },
  //   { id: "retail", name: "Retail", icon: "ShoppingBag" },
  //   { id: "healthcare", name: "Healthcare", icon: "Heart" },
  //   { id: "finance", name: "Finance", icon: "DollarSign" },
  //   { id: "creative", name: "Creative", icon: "Palette" },
  // ];

  // Project sizes
  // const projectSizes = [
  //   { id: "small", name: "Small ($1K-$5K)", icon: "Circle" },
  //   { id: "medium", name: "Medium ($5K-$15K)", icon: "Square" },
  //   { id: "large", name: "Large ($15K+)", icon: "Hexagon" },
  // ];

  const categories = [
    { id: "development", name: "Development", icon: "Code" },
    { id: "marketing", name: "Marketing", icon: "TrendingUp" },
    { id: "design", name: "Design", icon: "Palette" },
    { id: "technology", name: "Technology", icon: "Settings" },
    { id: "business tools", name: "Business Tools", icon: "Briefcase" },
    { id: "finance", name: "Finance", icon: "DollarSign" },
    { id: "operations", name: "Operations", icon: "Calendar" },
    { id: "logistics", name: "Logistics", icon: "Truck" },
    { id: "real estate", name: "Real Estate", icon: "Home" },
    { id: "healthcare", name: "Healthcare", icon: "Activity" },
    { id: "spiritual", name: "Spiritual", icon: "Star" },
  ];

  // Industries
  const industries = [
    { id: "technology", name: "Technology", icon: "Monitor" },
    { id: "retail", name: "Retail", icon: "ShoppingBag" },
    { id: "healthcare", name: "Healthcare", icon: "Heart" },
    { id: "finance", name: "Finance", icon: "DollarSign" },
    { id: "creative", name: "Creative", icon: "Palette" },
  ];

  // Project sizes
  const projectSizes = [
    { id: "small", name: "Small ($500-$1,000)", icon: "Circle" },
    { id: "medium", name: "Medium ($1,200-$2,000)", icon: "Square" },
    { id: "large", name: "Large ($2,500+)", icon: "Hexagon" },
  ];
  // Case studies
  const caseStudies = [
    {
      id: 1,
      title: "E-commerce Platform Transformation",
      client: "TechRetail Inc.",
      category: "Development",
      industry: "Retail",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      challenge:
        "TechRetail needed to modernize their outdated e-commerce platform to handle increased traffic and provide better user experience.",
      solution:
        "We rebuilt their entire platform using modern technologies, implemented advanced search functionality, and optimized for mobile users.",
      timeline: "12 weeks",
      metrics: [
        { label: "Sales Increase", value: "+250%" },
        { label: "Page Load Time", value: "-60%" },
        { label: "Mobile Conversion", value: "+180%" },
        { label: "Customer Satisfaction", value: "98%" },
      ],
      achievements: [
        "Reduced cart abandonment by 45%",
        "Improved search functionality with AI-powered recommendations",
        "Implemented real-time inventory management",
        "Enhanced mobile user experience",
      ],
      processSteps: [
        {
          title: "Platform Analysis",
          description: "Comprehensive audit of existing system",
          duration: "1 week",
        },
        {
          title: "Architecture Design",
          description: "Designing scalable solution",
          duration: "2 weeks",
        },
        {
          title: "Development",
          description: "Building new platform",
          duration: "8 weeks",
        },
        {
          title: "Testing & Launch",
          description: "Quality assurance and deployment",
          duration: "1 week",
        },
      ],
    },
    {
      id: 2,
      title: "Digital Marketing Campaign Success",
      client: "GrowthCorp",
      category: "Marketing",
      industry: "Technology",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      challenge:
        "GrowthCorp struggled with low online visibility and needed to increase qualified leads for their B2B software solution.",
      solution:
        "We implemented a comprehensive digital marketing strategy including SEO, PPC, content marketing, and social media campaigns.",
      timeline: "6 months",
      metrics: [
        { label: "Organic Traffic", value: "+320%" },
        { label: "Lead Quality", value: "+150%" },
        { label: "Cost per Lead", value: "-40%" },
        { label: "ROI", value: "450%" },
      ],
      achievements: [
        "Achieved #1 ranking for 15 target keywords",
        "Generated 500+ qualified leads",
        "Increased brand awareness by 200%",
        "Built strong social media presence",
      ],
      processSteps: [
        {
          title: "Market Research",
          description: "Analyzing target audience and competitors",
          duration: "2 weeks",
        },
        {
          title: "Strategy Development",
          description: "Creating comprehensive marketing plan",
          duration: "1 week",
        },
        {
          title: "Campaign Launch",
          description: "Implementing across all channels",
          duration: "1 week",
        },
        {
          title: "Optimization",
          description: "Continuous improvement and scaling",
          duration: "22 weeks",
        },
      ],
    },
  ];

  // Service comparison data
  const comparisonData = {
    tiers: [
      {
        id: "basic",
        name: "Basic",
        price: "$1000+",
        billing: "per project",
        icon: "Circle",
        popular: false,
      },
      {
        id: "professional",
        name: "Professional",
        price: "$1500+",
        billing: "per project",
        icon: "Square",
        popular: true,
      },
      {
        id: "enterprise",
        name: "Enterprise",
        price: "$3000+",
        billing: "per project",
        icon: "Hexagon",
        popular: false,
      },
    ],
    features: [
      {
        name: "Project Consultation",
        description: "Initial planning and strategy session",
        icon: "MessageCircle",
        values: { basic: true, professional: true, enterprise: true },
      },
      {
        name: "Custom Development",
        description: "Tailored solutions for your needs",
        icon: "Code",
        values: { basic: "Limited", professional: true, enterprise: true },
      },
      {
        name: "Design Iterations",
        description: "Number of design revisions included",
        icon: "Palette",
        values: { basic: "3", professional: "5", enterprise: "Unlimited" },
      },
      {
        name: "Testing & QA",
        description: "Quality assurance and testing",
        icon: "CheckCircle",
        values: {
          basic: "Basic",
          professional: "Comprehensive",
          enterprise: "Advanced",
        },
      },
      {
        name: "Post-Launch Support",
        description: "Support period after project completion",
        icon: "Headphones",
        values: {
          basic: "1 month",
          professional: "3 months",
          enterprise: "6 months",
        },
      },
      {
        name: "Training & Documentation",
        description: "User training and project documentation",
        icon: "BookOpen",
        values: { basic: false, professional: true, enterprise: true },
      },
      {
        name: "Priority Support",
        description: "24/7 priority support channel",
        icon: "Zap",
        values: { basic: false, professional: false, enterprise: true },
      },
      {
        name: "Dedicated Account Manager",
        description: "Personal project manager",
        icon: "User",
        values: { basic: false, professional: false, enterprise: true },
      },
    ],
  };

  // Filter services based on selected filters
  const filteredServices = services.filter((service) => {
    const categoryMatch =
      selectedCategory === "all" ||
      service.category.toLowerCase() === selectedCategory;
    const industryMatch =
      selectedIndustry === "all" ||
      service.industry.toLocaleLowerCase() === selectedIndustry;
    const sizeMatch =
      selectedProjectSize === "all" ||
      service.projectSize === selectedProjectSize;

    return categoryMatch && industryMatch && sizeMatch;
  });

  const handleGetQuote = (service) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      // Redirect to contact form with service pre-selected
      window.location.href = `/contact-form-information?service=${service.id}`;
    }, 1000);
  };

  const handleSelectPlan = (tier) => {
    // Redirect to contact form with tier pre-selected
    window.location.href = `/contact-form-information?tier=${tier.id}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-16">
        {/* Hero Section */}
        <HeroSection />

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
          <Breadcrumb />

          {/* Services Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Our Services & Solutions
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Discover our comprehensive range of services designed to help
                your business grow and succeed in today's digital landscape.
              </p>
            </div>

            {/* Filters */}
            <div className="mb-8">
              {isMobile ? (
                <ServiceFilter
                  categories={categories}
                  selectedCategory={selectedCategory}
                  onCategoryChange={setSelectedCategory}
                  industries={industries}
                  selectedIndustry={selectedIndustry}
                  onIndustryChange={setSelectedIndustry}
                  projectSizes={projectSizes}
                  selectedProjectSize={selectedProjectSize}
                  onProjectSizeChange={setSelectedProjectSize}
                  isMobile={true}
                />
              ) : (
                <div className="grid lg:grid-cols-4 gap-8">
                  <div className="lg:col-span-1">
                    <ServiceFilter
                      categories={categories}
                      selectedCategory={selectedCategory}
                      onCategoryChange={setSelectedCategory}
                      industries={industries}
                      selectedIndustry={selectedIndustry}
                      onIndustryChange={setSelectedIndustry}
                      projectSizes={projectSizes}
                      selectedProjectSize={selectedProjectSize}
                      onProjectSizeChange={setSelectedProjectSize}
                      isMobile={false}
                    />
                  </div>

                  <div className="lg:col-span-3">
                    {/* Results Count */}
                    <div className="flex items-center justify-between mb-6">
                      <p className="text-sm text-muted-foreground">
                        Showing {filteredServices.length} of {services.length}{" "}
                        services
                      </p>
                      {/* <div className="flex items-center space-x-2">
                        <Icon
                          name="LayoutGrid"
                          size={16}
                          color="var(--color-muted-foreground)"
                        />
                        <span className="text-sm text-muted-foreground">
                          Grid View
                        </span>
                      </div> */}
                    </div>

                    {/* Services Grid */}
                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                      {filteredServices.map((service) => (
                        <ServiceCard
                          key={service.id}
                          service={service}
                          onGetQuote={handleGetQuote}
                        />
                      ))}
                    </div>

                    {filteredServices.length === 0 && (
                      <div className="text-center py-12">
                        <Icon
                          name="Search"
                          size={48}
                          color="var(--color-muted-foreground)"
                          className="mx-auto mb-4"
                        />
                        <h3 className="text-lg font-medium text-foreground mb-2">
                          No services found
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          Try adjusting your filters to see more results
                        </p>
                        <Button
                          variant="outline"
                          onClick={() => {
                            setSelectedCategory("all");
                            setSelectedIndustry("all");
                            setSelectedProjectSize("all");
                          }}
                        >
                          Clear Filters
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Mobile Services Grid */}
              {isMobile && (
                <div className="mt-8">
                  <div className="flex items-center justify-between mb-6">
                    <p className="text-sm text-muted-foreground">
                      {filteredServices.length} services found
                    </p>
                  </div>

                  <div className="space-y-6">
                    {filteredServices.map((service) => (
                      <ServiceCard
                        key={service.id}
                        service={service}
                        onGetQuote={handleGetQuote}
                      />
                    ))}
                  </div>

                  {filteredServices.length === 0 && (
                    <div className="text-center py-12">
                      <Icon
                        name="Search"
                        size={48}
                        color="var(--color-muted-foreground)"
                        className="mx-auto mb-4"
                      />
                      <h3 className="text-lg font-medium text-foreground mb-2">
                        No services found
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Try adjusting your filters to see more results
                      </p>
                      <Button
                        variant="outline"
                        onClick={() => {
                          setSelectedCategory("all");
                          setSelectedIndustry("all");
                          setSelectedProjectSize("all");
                        }}
                      >
                        Clear Filters
                      </Button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </section>

          {/* Service Comparison */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Choose Your Service Tier
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Compare our service tiers to find the perfect fit for your
                project requirements and budget.
              </p>
            </div>

            <ServiceComparison
              comparisonData={comparisonData}
              onSelectPlan={handleSelectPlan}
            />
          </section>

          {/* Case Studies */}
          {/* <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Success Stories
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                See how we've helped businesses like yours achieve remarkable
                results through our expert services and solutions.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {caseStudies.map((caseStudy) => (
                <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
              ))}
            </div>
          </section>   */}

          {/* CTA Section */}
          <section className="text-center py-16 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl">
            <div className="max-w-3xl mx-auto px-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's discuss your project requirements and create a solution
                that drives results for your business.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="default"
                  size="lg"
                  iconName="Calendar"
                  iconPosition="left"
                  asChild
                >
                  <Link to="/meeting-scheduling-integration">
                    Schedule Consultation
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  iconName="Mail"
                  iconPosition="left"
                  asChild
                >
                  <Link to="/contact-form-information">Get Quote</Link>
                </Button>
              </div>

              <div className="flex items-center justify-center space-x-8 mt-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={16} />
                  <span>Free consultation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Shield" size={16} />
                  <span>No commitment required</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Zap" size={16} />
                  <span>Quick response</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Loading Overlay */}
      {loading && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-card border border-border rounded-lg p-6 flex items-center space-x-3">
            <div className="animate-spin">
              <Icon name="Loader2" size={20} color="var(--color-primary)" />
            </div>
            <span className="text-foreground">Processing your request...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesProductsShowcase;
