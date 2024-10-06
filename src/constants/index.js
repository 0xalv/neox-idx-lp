import {
  idxLogoNT,
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitIcon5,
  benefitIcon6,
  benefitIcon7,
  benefitIcon8,
  benefitIcon9,
  benefitIcon10,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  oneinch,
  bat,
  chainlink,
  ethereum,
  sui,
  usdc,
  xrp,
  polygon,
  solana,
  icp,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "2",
    title: "Launch app",
    url: "#app",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const idxServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const idxServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Market research and analysis",
    text: "Test existing platforms to understand their strengths and weaknesses, helping us design a more user-friendly and improved solution.",
    date: "Q2 2024",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Prototype development",
    text: "IDX was a winner of the Encode's Canto Hackathon. We started developing a first prototype of our platform.",
    date: "Q3 2024",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "2",
    title: "Visual Performance Tracking",
    text: "Implement visual graphics to provide clear, real-time insights into index performance, making it easier for users to track their portfolio’s progress and trends at a glance.",
    date: "Q4 2024",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "3",
    title: "Social Profiles & Interaction",
    text: "Introduce user social profiles, enabling users to share their index portfolios, interact with the community, and collaborate on investment strategies for a more engaging experience.",
    date: "Q4 2024",
    status: "progress",
    imageUrl: roadmap3,
  },
  {
    id: "4",
    title: "Product Testing & Refinement",
    text: "Perform extensive testing with early adopters to collect feedback on functionality and user experience. Refine the product based on real-world usage.",
    date: "Q4 2024",
    status: "progress",
    imageUrl: roadmap4,
  },
  {
    id: "5",
    title: "Official Product Launch",
    text: "Launch the platform to Dymension mainnet, including all major features like real-time tracking, transparent asset allocation, and community-driven insights.",
    date: "Q1 2025",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "Track and monitor your index in real-time with integrated automation and enhanced visibility, empowering users to make informed decisions instantly.";

export const collabContent = [
  {
    id: "0",
    title: "Informed Decision Making",
    text: "Track and monitor your index in real-time with integrated automation and enhanced visibility, empowering users to make informed decisions instantly.",
  },
  {
    id: "1",
    title: "Live Transaction Tracking",
    text: "Monitor every transaction in and out of your index as it happens, ensuring full transparency and oversight of your assets.",
  },
  {
    id: "2",
    title: "Historical Data Comparison",
    text: "Compare your index's current performance against historical data, identifying trends and patterns to guide future decisions.",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Icp",
    icon: icp,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Polygon",
    icon: polygon,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Bat",
    icon: bat,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Ethereum",
    icon: ethereum,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Usdc",
    icon: usdc,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "1inch",
    icon: oneinch,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Solana",
    icon: solana,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Sui",
    icon: sui,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Diversification Made Easy",
    text: "Create a diversified index token with ease, combining your chosen assets for a balanced investment strategy.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon5,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Shareable Index Portfolios",
    text: "Share your indices, compare performances, and collaborate effortlessly with our social investment tools.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon6,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Simplified Security",
    text: "Enhance your portfolio's safety by trading numerous tokens for one secure, easily monitored index.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon7,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Automated Rebalancing",
    text: "Keep your portfolio optimized with our automated rebalancing feature that adjusts asset weights according to market performance.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon8,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Community Driven Insights",
    text: "Leverage the power of collective intelligence by accessing community-generated indexes and market insights.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon9,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Transparent Asset Allocation",
    text: "Get a clear breakdown of your portfolio’s assets with complete transparency, so you know exactly what you own and how it's performing.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon10,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
