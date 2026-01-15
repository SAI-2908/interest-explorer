import { SkillLevel } from "./careers";

export interface CombinedCareer {
  type: "Generic" | "Big Demand" | "Unique";
  title: string;
  description: string;
  skills: string[];
  education: string;
  matchedInterests: string[];
}

// Cross-functional careers that span multiple interest areas
const crossFunctionalCareers: Record<string, CombinedCareer> = {
  // Technology + Art
  "tech_art": {
    type: "Big Demand",
    title: "UX/UI Designer",
    description: "Designs user interfaces and experiences combining technical knowledge with artistic sensibility.",
    skills: ["Wireframing", "Prototyping", "User research", "Visual design"],
    education: "Bachelor's degree in design or UX certification",
    matchedInterests: ["technology", "art"]
  },
  // Technology + Gaming
  "tech_gaming": {
    type: "Big Demand",
    title: "Game Developer",
    description: "Creates video games combining programming skills with gaming expertise.",
    skills: ["Game engines", "Programming", "3D graphics", "Game mechanics"],
    education: "Bachelor's in computer science or game development",
    matchedInterests: ["technology", "gaming"]
  },
  // Technology + Music
  "tech_music": {
    type: "Unique",
    title: "Audio Software Developer",
    description: "Develops music production software and audio processing tools.",
    skills: ["DSP programming", "Audio engineering", "C++/Python", "Music theory"],
    education: "Computer science degree with audio specialization",
    matchedInterests: ["technology", "music"]
  },
  // Technology + Science
  "tech_science": {
    type: "Big Demand",
    title: "Bioinformatics Specialist",
    description: "Applies computational techniques to analyze biological data.",
    skills: ["Data analysis", "Python/R", "Biology knowledge", "Machine learning"],
    education: "Master's in bioinformatics or computational biology",
    matchedInterests: ["technology", "science"]
  },
  // Technology + Business
  "tech_business": {
    type: "Big Demand",
    title: "Product Manager",
    description: "Bridges technology and business to drive product development.",
    skills: ["Strategic thinking", "Technical knowledge", "Market analysis", "Leadership"],
    education: "MBA or bachelor's in business/technology",
    matchedInterests: ["technology", "business"]
  },
  // Technology + Finance
  "tech_finance": {
    type: "Big Demand",
    title: "FinTech Developer",
    description: "Builds financial technology solutions and payment systems.",
    skills: ["Programming", "Financial systems", "Security", "APIs"],
    education: "Computer science with finance knowledge",
    matchedInterests: ["technology", "finance"]
  },
  // Technology + Psychology
  "tech_psychology": {
    type: "Unique",
    title: "Human-Computer Interaction Researcher",
    description: "Studies how people interact with technology to improve user experience.",
    skills: ["User research", "Psychology", "Data analysis", "Prototyping"],
    education: "Master's in HCI or cognitive science",
    matchedInterests: ["technology", "psychology"]
  },
  // Technology + Writing
  "tech_writing": {
    type: "Generic",
    title: "Technical Writer",
    description: "Creates documentation for software and technical products.",
    skills: ["Technical writing", "Research", "Documentation tools", "Simplification"],
    education: "Bachelor's in technical writing or related field",
    matchedInterests: ["technology", "writing"]
  },
  // Art + Gaming
  "art_gaming": {
    type: "Big Demand",
    title: "Game Artist",
    description: "Creates visual assets, characters, and environments for video games.",
    skills: ["3D modeling", "Concept art", "Animation", "Game engines"],
    education: "Art degree with game art specialization",
    matchedInterests: ["art", "gaming"]
  },
  // Art + Business
  "art_business": {
    type: "Generic",
    title: "Brand Designer",
    description: "Develops visual brand identities for businesses.",
    skills: ["Branding", "Visual design", "Marketing", "Client relations"],
    education: "Bachelor's in graphic design or branding",
    matchedInterests: ["art", "business"]
  },
  // Art + Music
  "art_music": {
    type: "Unique",
    title: "Album Art Director",
    description: "Creates visual artwork and concepts for music releases.",
    skills: ["Visual design", "Music industry knowledge", "Creative direction"],
    education: "Art degree with music industry experience",
    matchedInterests: ["art", "music"]
  },
  // Art + Writing
  "art_writing": {
    type: "Generic",
    title: "Graphic Novelist",
    description: "Combines illustration with storytelling to create visual narratives.",
    skills: ["Illustration", "Storytelling", "Sequential art", "Publishing"],
    education: "Art school or demonstrated portfolio",
    matchedInterests: ["art", "writing"]
  },
  // Science + Nature
  "science_nature": {
    type: "Big Demand",
    title: "Environmental Scientist",
    description: "Studies environmental problems and develops conservation solutions.",
    skills: ["Field research", "Data analysis", "Environmental regulations"],
    education: "Bachelor's or Master's in environmental science",
    matchedInterests: ["science", "nature"]
  },
  // Science + Cooking
  "science_cooking": {
    type: "Big Demand",
    title: "Food Scientist",
    description: "Researches food production and develops new food products.",
    skills: ["Food chemistry", "Product development", "Quality assurance"],
    education: "Bachelor's or Master's in food science",
    matchedInterests: ["science", "cooking"]
  },
  // Science + Psychology
  "science_psychology": {
    type: "Big Demand",
    title: "Neuroscientist",
    description: "Studies the brain and nervous system to understand behavior.",
    skills: ["Research methods", "Data analysis", "Neurobiology", "Psychology"],
    education: "PhD in neuroscience or related field",
    matchedInterests: ["science", "psychology"]
  },
  // Business + Finance
  "business_finance": {
    type: "Big Demand",
    title: "Investment Analyst",
    description: "Analyzes financial markets and provides investment recommendations.",
    skills: ["Financial modeling", "Market research", "Data analysis"],
    education: "Bachelor's in finance or economics, CFA preferred",
    matchedInterests: ["business", "finance"]
  },
  // Business + Writing
  "business_writing": {
    type: "Generic",
    title: "Business Copywriter",
    description: "Creates persuasive content for marketing and corporate communications.",
    skills: ["Copywriting", "Marketing", "Brand voice", "Research"],
    education: "Bachelor's in marketing, communications, or English",
    matchedInterests: ["business", "writing"]
  },
  // Business + Psychology
  "business_psychology": {
    type: "Big Demand",
    title: "Organizational Consultant",
    description: "Applies psychology to improve workplace culture and performance.",
    skills: ["Organizational behavior", "Change management", "Training"],
    education: "Master's in I/O psychology or organizational development",
    matchedInterests: ["business", "psychology"]
  },
  // Music + Technology
  "music_tech": {
    type: "Big Demand",
    title: "Music Producer",
    description: "Uses technology to create and produce music recordings.",
    skills: ["DAW software", "Audio engineering", "Music theory", "Production"],
    education: "Music production degree or equivalent experience",
    matchedInterests: ["music", "technology"]
  },
  // Sports + Science
  "sports_science": {
    type: "Big Demand",
    title: "Sports Scientist",
    description: "Applies scientific principles to optimize athletic performance.",
    skills: ["Biomechanics", "Physiology", "Data analysis", "Research"],
    education: "Master's in sports science or kinesiology",
    matchedInterests: ["sports", "science"]
  },
  // Sports + Psychology
  "sports_psychology": {
    type: "Big Demand",
    title: "Sports Psychologist",
    description: "Helps athletes improve mental performance and well-being.",
    skills: ["Mental performance", "Counseling", "Motivation techniques"],
    education: "Doctoral degree in psychology with sports focus",
    matchedInterests: ["sports", "psychology"]
  },
  // Sports + Business
  "sports_business": {
    type: "Generic",
    title: "Sports Marketing Manager",
    description: "Develops marketing strategies for sports organizations and athletes.",
    skills: ["Marketing", "Sports industry", "Brand management", "Events"],
    education: "Bachelor's in sports management or marketing",
    matchedInterests: ["sports", "business"]
  },
  // Sports + Cooking
  "sports_cooking": {
    type: "Unique",
    title: "Sports Nutritionist",
    description: "Develops nutrition plans to optimize athletic performance.",
    skills: ["Nutrition science", "Meal planning", "Sports physiology"],
    education: "Bachelor's in nutrition with sports specialization",
    matchedInterests: ["sports", "cooking"]
  },
  // Nature + Writing
  "nature_writing": {
    type: "Unique",
    title: "Nature Writer",
    description: "Creates content about environmental topics and natural world.",
    skills: ["Science writing", "Research", "Photography", "Ecology knowledge"],
    education: "Degree in environmental science or journalism",
    matchedInterests: ["nature", "writing"]
  },
  // Cooking + Business
  "cooking_business": {
    type: "Generic",
    title: "Restaurant Manager",
    description: "Oversees restaurant operations combining culinary and business skills.",
    skills: ["Operations", "Customer service", "Staff management", "Food knowledge"],
    education: "Hospitality degree or culinary training with business experience",
    matchedInterests: ["cooking", "business"]
  },
  // Gaming + Psychology
  "gaming_psychology": {
    type: "Unique",
    title: "Game User Researcher",
    description: "Studies player behavior to improve game design and engagement.",
    skills: ["User research", "Data analysis", "Game design", "Psychology"],
    education: "Degree in psychology or HCI with gaming focus",
    matchedInterests: ["gaming", "psychology"]
  },
  // Gaming + Writing
  "gaming_writing": {
    type: "Generic",
    title: "Game Narrative Designer",
    description: "Creates stories, dialogue, and world-building for video games.",
    skills: ["Storytelling", "Game design", "Dialogue writing", "World-building"],
    education: "Creative writing or game design degree",
    matchedInterests: ["gaming", "writing"]
  },
  // Gaming + Business
  "gaming_business": {
    type: "Big Demand",
    title: "Esports Manager",
    description: "Manages professional gaming teams and esports operations.",
    skills: ["Team management", "Gaming industry", "Marketing", "Event planning"],
    education: "Sports management or business degree",
    matchedInterests: ["gaming", "business"]
  },
  // Finance + Technology
  "finance_tech": {
    type: "Big Demand",
    title: "Quantitative Analyst",
    description: "Uses mathematics and programming for financial analysis.",
    skills: ["Programming", "Statistics", "Financial modeling", "Machine learning"],
    education: "Master's in quantitative finance or mathematics",
    matchedInterests: ["finance", "technology"]
  },
  // Psychology + Writing
  "psychology_writing": {
    type: "Unique",
    title: "Psychology Content Creator",
    description: "Creates educational content about mental health and psychology.",
    skills: ["Psychology knowledge", "Content creation", "Research", "Communication"],
    education: "Psychology degree with writing skills",
    matchedInterests: ["psychology", "writing"]
  },
  // Art + Science
  "art_science": {
    type: "Unique",
    title: "Scientific Illustrator",
    description: "Creates accurate visual representations of scientific concepts.",
    skills: ["Illustration", "Scientific accuracy", "Research", "Digital art"],
    education: "Art degree with science background",
    matchedInterests: ["art", "science"]
  },
  // Music + Psychology
  "music_psychology": {
    type: "Unique",
    title: "Music Therapist",
    description: "Uses music to address emotional and cognitive needs.",
    skills: ["Music performance", "Therapy techniques", "Assessment"],
    education: "Bachelor's in music therapy plus board certification",
    matchedInterests: ["music", "psychology"]
  },
  // Art + Nature
  "art_nature": {
    type: "Unique",
    title: "Environmental Artist",
    description: "Creates art that highlights environmental themes and nature.",
    skills: ["Art creation", "Environmental awareness", "Installation art"],
    education: "Fine arts degree with environmental focus",
    matchedInterests: ["art", "nature"]
  },
  // Technology + Nature
  "tech_nature": {
    type: "Big Demand",
    title: "Environmental Data Analyst",
    description: "Uses technology to analyze environmental data and trends.",
    skills: ["Data analysis", "GIS", "Programming", "Environmental science"],
    education: "Degree in environmental science with data skills",
    matchedInterests: ["technology", "nature"]
  },
  // Technology + Sports
  "tech_sports": {
    type: "Big Demand",
    title: "Sports Analytics Developer",
    description: "Builds systems to analyze athlete performance and game data.",
    skills: ["Programming", "Data science", "Sports knowledge", "Visualization"],
    education: "Computer science with sports analytics focus",
    matchedInterests: ["technology", "sports"]
  },
  // Technology + Cooking
  "tech_cooking": {
    type: "Unique",
    title: "Food Tech Developer",
    description: "Develops technology solutions for food industry innovation.",
    skills: ["Programming", "Food science", "Product development", "IoT"],
    education: "Computer science or food technology degree",
    matchedInterests: ["technology", "cooking"]
  },
  // Writing + Music
  "writing_music": {
    type: "Generic",
    title: "Music Journalist",
    description: "Writes about music, artists, and the music industry.",
    skills: ["Writing", "Music knowledge", "Interviewing", "Critical analysis"],
    education: "Journalism or music degree",
    matchedInterests: ["writing", "music"]
  },
  // Finance + Psychology
  "finance_psychology": {
    type: "Unique",
    title: "Behavioral Finance Analyst",
    description: "Studies psychological factors affecting financial decisions.",
    skills: ["Psychology", "Financial analysis", "Research", "Data interpretation"],
    education: "Finance degree with psychology background",
    matchedInterests: ["finance", "psychology"]
  }
};

// Fallback careers when no specific combination exists
const fallbackCareers: Record<SkillLevel, CombinedCareer[]> = {
  beginner: [
    {
      type: "Generic",
      title: "Project Coordinator",
      description: "Supports project management across diverse fields and industries.",
      skills: ["Organization", "Communication", "Basic project management", "Teamwork"],
      education: "Bachelor's degree in any field",
      matchedInterests: []
    },
    {
      type: "Big Demand",
      title: "Digital Content Creator",
      description: "Creates engaging content across various platforms and media.",
      skills: ["Content creation", "Social media", "Basic design", "Communication"],
      education: "No specific degree required, portfolio-based",
      matchedInterests: []
    },
    {
      type: "Unique",
      title: "Community Manager",
      description: "Builds and nurtures communities around brands or causes.",
      skills: ["Communication", "Social media", "Event planning", "Empathy"],
      education: "Bachelor's in communications or marketing",
      matchedInterests: []
    }
  ],
  intermediate: [
    {
      type: "Generic",
      title: "Product Manager",
      description: "Oversees product development combining multiple skill sets.",
      skills: ["Strategy", "Communication", "Technical knowledge", "User research"],
      education: "Bachelor's degree with relevant experience",
      matchedInterests: []
    },
    {
      type: "Big Demand",
      title: "Growth Specialist",
      description: "Drives business growth through data-driven strategies.",
      skills: ["Analytics", "Marketing", "Strategy", "A/B testing"],
      education: "Bachelor's in business or marketing",
      matchedInterests: []
    },
    {
      type: "Unique",
      title: "Innovation Consultant",
      description: "Helps organizations innovate by combining diverse perspectives.",
      skills: ["Creative thinking", "Research", "Strategy", "Facilitation"],
      education: "MBA or design thinking certification",
      matchedInterests: []
    }
  ],
  advanced: [
    {
      type: "Generic",
      title: "Chief Strategy Officer",
      description: "Leads strategic initiatives across all business areas.",
      skills: ["Strategic planning", "Leadership", "Industry expertise", "Vision"],
      education: "MBA plus 10+ years experience",
      matchedInterests: []
    },
    {
      type: "Big Demand",
      title: "Innovation Director",
      description: "Leads cross-functional innovation and transformation efforts.",
      skills: ["Innovation management", "Leadership", "Change management"],
      education: "Advanced degree with innovation experience",
      matchedInterests: []
    },
    {
      type: "Unique",
      title: "Venture Partner",
      description: "Invests in and advises startups across multiple industries.",
      skills: ["Investment", "Mentorship", "Industry knowledge", "Network"],
      education: "MBA or equivalent with startup experience",
      matchedInterests: []
    }
  ]
};

// Generate a key for interest combination
const generateKey = (interest1: string, interest2: string): string => {
  const sorted = [interest1, interest2].sort();
  return `${sorted[0]}_${sorted[1]}`;
};

// Find matching cross-functional careers for interest combinations
export const getCombinedCareers = (
  selectedInterests: string[],
  skillLevel: SkillLevel
): CombinedCareer[] => {
  if (selectedInterests.length === 0) {
    return fallbackCareers[skillLevel];
  }

  if (selectedInterests.length === 1) {
    // For single interest, return fallback with the interest noted
    return fallbackCareers[skillLevel].map(career => ({
      ...career,
      matchedInterests: selectedInterests
    }));
  }

  // Find all matching cross-functional careers
  const matchedCareers: CombinedCareer[] = [];
  const usedTypes = new Set<string>();

  // Check all interest pair combinations
  for (let i = 0; i < selectedInterests.length; i++) {
    for (let j = i + 1; j < selectedInterests.length; j++) {
      const key1 = generateKey(selectedInterests[i], selectedInterests[j]);
      const key2 = `${selectedInterests[i]}_${selectedInterests[j]}`;
      const key3 = `${selectedInterests[j]}_${selectedInterests[i]}`;

      const career = crossFunctionalCareers[key1] || 
                     crossFunctionalCareers[key2] || 
                     crossFunctionalCareers[key3];

      if (career && !usedTypes.has(career.type)) {
        matchedCareers.push({
          ...career,
          matchedInterests: [selectedInterests[i], selectedInterests[j]]
        });
        usedTypes.add(career.type);
      }
    }
  }

  // Fill in missing types from fallback
  const types: Array<"Generic" | "Big Demand" | "Unique"> = ["Generic", "Big Demand", "Unique"];
  
  for (const type of types) {
    if (!usedTypes.has(type)) {
      const fallback = fallbackCareers[skillLevel].find(c => c.type === type);
      if (fallback) {
        matchedCareers.push({
          ...fallback,
          matchedInterests: selectedInterests
        });
      }
    }
  }

  // Sort by type order: Generic, Big Demand, Unique
  const typeOrder = { "Generic": 0, "Big Demand": 1, "Unique": 2 };
  return matchedCareers.sort((a, b) => typeOrder[a.type] - typeOrder[b.type]).slice(0, 3);
};
