/**
 * ISMAILIFY — central content file.
 * Everything the site displays lives here so it can be edited in one place:
 * bio, statistics, services, process, portfolio, testimonials, contact details.
 */

import workBrand from "@/assets/work-brand.jpg";
import workSocial from "@/assets/work-social.jpg";
import workSeo from "@/assets/work-seo.jpg";
import workAds from "@/assets/work-ads.jpg";
import workContent from "@/assets/work-content.jpg";
import workEcom from "@/assets/work-ecom.jpg";
import client1 from "@/assets/client-1.jpg";
import client2 from "@/assets/client-2.jpg";
import client3 from "@/assets/client-3.jpg";

export const BRAND = {
  name: "ISMAILIFY",
  tagline: "Turn Attention Into Growth.",
  supportingLine:
    "Digital strategies that build brands, attract customers, and drive measurable growth.",
};

/** Contact details — placeholders, replace with the real ones. */
export const CONTACT = {
  email: "hello@ismailify.com",
  instagram: { label: "@ismailify", href: "https://instagram.com/ismailify" },
  linkedin: { label: "Ismailify", href: "https://linkedin.com/in/ismailify" },
  location: "Available Worldwide",
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Results", href: "#results" },
  { label: "Contact", href: "#contact" },
];

/** Client logo placeholders — swap the text for real logo images later. */
export const CLIENT_LOGOS = [
  "NORTHPEAK",
  "AURELIA",
  "VELOCITY",
  "STUDIO NINE",
  "LUMEN CO.",
  "BRIGHTWAVE",
];

/** About statistics — editable placeholders. */
export const ABOUT_STATS = [
  { value: 50, suffix: "+", label: "Projects / Campaigns" },
  { value: 40, suffix: "%", label: "Average Growth" },
  { value: 25, suffix: "+", label: "Brands Supported" },
  { value: null, display: "24/7", label: "Digital Mindset" },
] as const;

export const SERVICES = [
  {
    icon: "share2",
    title: "Social Media Marketing",
    text: "Build an engaging social presence that attracts attention and creates a community around your brand.",
  },
  {
    icon: "search",
    title: "SEO",
    text: "Improve your search visibility and help the right people discover your business organically.",
  },
  {
    icon: "target",
    title: "Paid Advertising",
    text: "Create and optimize performance-focused campaigns designed to generate leads, sales, and measurable results.",
  },
  {
    icon: "penLine",
    title: "Content Strategy",
    text: "Turn ideas into strategic content that educates, builds authority, and drives action.",
  },
  {
    icon: "gem",
    title: "Brand Strategy",
    text: "Create a stronger digital identity, positioning, messaging, and visual direction for your business.",
  },
  {
    icon: "trendingUp",
    title: "Digital Growth Strategy",
    text: "Develop a customized roadmap that connects marketing channels, content, conversion, and business goals.",
  },
] as const;

export const WHY_ITEMS = [
  {
    number: "01",
    title: "Strategy First",
    text: "Every campaign starts with a clear objective and strategy.",
  },
  {
    number: "02",
    title: "Data Driven",
    text: "Use analytics and performance data to continuously improve results.",
  },
  {
    number: "03",
    title: "Creative Execution",
    text: "Combine strategy with creative content that people actually want to engage with.",
  },
  {
    number: "04",
    title: "Growth Focused",
    text: "Focus on business outcomes — not vanity metrics.",
  },
];

export const PROCESS_STEPS = [
  { number: "01", title: "Discover", text: "Understand your business, audience, competitors, and goals." },
  { number: "02", title: "Strategize", text: "Build a customized digital marketing strategy." },
  { number: "03", title: "Create", text: "Develop content, campaigns, messaging, and creative assets." },
  { number: "04", title: "Launch", text: "Put the strategy into action across the right channels." },
  { number: "05", title: "Optimize", text: "Analyze performance and continuously improve." },
  { number: "06", title: "Scale", text: "Double down on what works and build sustainable growth." },
];

export const WORK_FILTERS = ["All", "Branding", "Social Media", "SEO", "Paid Ads", "Content"] as const;
export type WorkFilter = (typeof WORK_FILTERS)[number];

/** Portfolio placeholders — replace image, copy and results with real case studies. */
export const PROJECTS = [
  {
    name: "Aurelia Studio",
    industry: "Luxury Interiors",
    category: "Branding" as WorkFilter,
    services: ["Brand Strategy", "Visual Identity"],
    description: "Repositioned a boutique interiors studio with a premium digital identity and messaging system.",
    result: "+150% inbound enquiries",
    image: workBrand,
    alt: "Dark luxury brand identity mockups with gold foil detailing",
  },
  {
    name: "Northpeak Fitness",
    industry: "Health & Wellness",
    category: "Social Media" as WorkFilter,
    services: ["Content", "Community", "Social Ads"],
    description: "Built a consistent social content engine that turned followers into paying members.",
    result: "+85% engagement rate",
    image: workSocial,
    alt: "Smartphone displaying a social media feed on a dark background",
  },
  {
    name: "Lumen Software",
    industry: "B2B SaaS",
    category: "SEO" as WorkFilter,
    services: ["Technical SEO", "Content Clusters"],
    description: "Rebuilt the site architecture and content strategy around high-intent search demand.",
    result: "+210% organic traffic",
    image: workSeo,
    alt: "Analytics dashboard showing a rising gold performance graph",
  },
  {
    name: "Velocity Motors",
    industry: "Automotive",
    category: "Paid Ads" as WorkFilter,
    services: ["Meta Ads", "Google Ads", "CRO"],
    description: "Restructured paid campaigns around qualified lead quality instead of raw click volume.",
    result: "-42% cost per lead",
    image: workAds,
    alt: "Abstract dark panels visualising paid advertising performance charts",
  },
  {
    name: "Studio Nine",
    industry: "Creative Agency",
    category: "Content" as WorkFilter,
    services: ["Content Strategy", "Video Direction"],
    description: "Designed a founder-led content system that built authority in a crowded market.",
    result: "+3.4M annual views",
    image: workContent,
    alt: "Dark content studio with a camera on a tripod and warm lighting",
  },
  {
    name: "Brightwave",
    industry: "E-commerce",
    category: "Branding" as WorkFilter,
    services: ["Brand Refresh", "Launch Campaign"],
    description: "Launched a premium product line with a full-funnel brand and acquisition strategy.",
    result: "+120% qualified leads",
    image: workEcom,
    alt: "Premium black packaging boxes with gold accents on a dark surface",
  },
];

/** Results statistics — editable placeholders, not verified client results. */
export const RESULT_STATS = [
  { value: 150, label: "Organic Reach" },
  { value: 85, label: "Engagement" },
  { value: 120, label: "Qualified Leads" },
  { value: 65, label: "Conversion Rate" },
];

/** Testimonial placeholders — replace with real client quotes. */
export const TESTIMONIALS = [
  {
    quote:
      "Ismail didn't just run campaigns — he rebuilt how we talk about ourselves. Within a quarter we were attracting the exact clients we wanted.",
    name: "Sofia Marchetti",
    position: "Founder",
    company: "Aurelia Studio",
    image: client1,
  },
  {
    quote:
      "Clear strategy, sharp execution and honest reporting. It's the first time marketing felt like a business function instead of a guessing game.",
    name: "Daniel Hart",
    position: "Managing Director",
    company: "Lumen Software",
    image: client2,
  },
  {
    quote:
      "He understood our audience better than we did. Our content finally sounds like us and it's driving real conversations and sales.",
    name: "Amira Haddad",
    position: "Co-Founder",
    company: "Brightwave",
    image: client3,
  },
];

/** Contact form dropdown options. */
export const BUDGET_OPTIONS = [
  "Under $1,000",
  "$1,000 – $5,000",
  "$5,000 – $10,000",
  "$10,000+",
  "Not sure yet",
];

export const HELP_OPTIONS = [
  "Social Media Marketing",
  "SEO",
  "Paid Advertising",
  "Content Strategy",
  "Brand Strategy",
  "Digital Growth Strategy",
];
