const config = {
  title: "I'm Pritam | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Pritam, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Pritam, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Pritam",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Pritam",
  email: "pritamjais006@gmail.com",
  site: "https://imhuzaifportfolio.vercel.app",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    github: "https://github.com/jaispritam",
    linkedin: "https://www.linkedin.com/in/pritamjaiswal888/",
    twitter: "https://x.com/Jaispritam006",
    instagram: "https://instagram.com/pritamjaiswal888",
  },
};
export { config };
