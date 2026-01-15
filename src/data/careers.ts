export interface Career {
  type: "Generic" | "Big Demand" | "Unique";
  title: string;
}

export interface InterestCategory {
  id: string;
  name: string;
  emoji: string;
  beginner: Career[];
  intermediate: Career[];
  advanced: Career[];
}

export const interests: InterestCategory[] = [
  {
    id: "technology",
    name: "Technology",
    emoji: "🖥️",
    beginner: [
      { type: "Generic", title: "IT Support Specialist" },
      { type: "Big Demand", title: "Help Desk Technician" },
      { type: "Unique", title: "Tech Educator" }
    ],
    intermediate: [
      { type: "Generic", title: "Web Developer" },
      { type: "Big Demand", title: "Cybersecurity Analyst" },
      { type: "Unique", title: "Accessibility Specialist" }
    ],
    advanced: [
      { type: "Generic", title: "Software Architect" },
      { type: "Big Demand", title: "Data Scientist" },
      { type: "Unique", title: "Ethical Hacking Consultant" }
    ]
  },
  {
    id: "art",
    name: "Art & Design",
    emoji: "🎨",
    beginner: [
      { type: "Generic", title: "Graphic Designer" },
      { type: "Big Demand", title: "Digital Illustrator" },
      { type: "Unique", title: "Art Restoration Assistant" }
    ],
    intermediate: [
      { type: "Generic", title: "Art Director" },
      { type: "Big Demand", title: "UX/UI Designer" },
      { type: "Unique", title: "Museum Exhibit Designer" }
    ],
    advanced: [
      { type: "Generic", title: "Creative Director" },
      { type: "Big Demand", title: "Animation Supervisor" },
      { type: "Unique", title: "Cultural Heritage Conservator" }
    ]
  },
  {
    id: "science",
    name: "Science",
    emoji: "🔬",
    beginner: [
      { type: "Generic", title: "Lab Technician" },
      { type: "Big Demand", title: "Research Assistant" },
      { type: "Unique", title: "Science Communicator" }
    ],
    intermediate: [
      { type: "Generic", title: "Environmental Scientist" },
      { type: "Big Demand", title: "Biomedical Researcher" },
      { type: "Unique", title: "Forensic Science Technician" }
    ],
    advanced: [
      { type: "Generic", title: "Clinical Research Scientist" },
      { type: "Big Demand", title: "Genetic Counselor" },
      { type: "Unique", title: "Space Science Researcher" }
    ]
  },
  {
    id: "business",
    name: "Business",
    emoji: "💼",
    beginner: [
      { type: "Generic", title: "Sales Representative" },
      { type: "Big Demand", title: "Digital Marketing Assistant" },
      { type: "Unique", title: "Sustainability Coordinator" }
    ],
    intermediate: [
      { type: "Generic", title: "Marketing Manager" },
      { type: "Big Demand", title: "Business Analyst" },
      { type: "Unique", title: "Social Impact Consultant" }
    ],
    advanced: [
      { type: "Generic", title: "Financial Controller" },
      { type: "Big Demand", title: "Operations Director" },
      { type: "Unique", title: "Corporate Social Responsibility Manager" }
    ]
  },
  {
    id: "music",
    name: "Music",
    emoji: "🎵",
    beginner: [
      { type: "Generic", title: "Music Teacher" },
      { type: "Big Demand", title: "Audio Technician" },
      { type: "Unique", title: "Instrument Repair Specialist" }
    ],
    intermediate: [
      { type: "Generic", title: "Music Producer" },
      { type: "Big Demand", title: "Sound Engineer" },
      { type: "Unique", title: "Music Therapy Practitioner" }
    ],
    advanced: [
      { type: "Generic", title: "Conductor" },
      { type: "Big Demand", title: "Acoustic Engineer" },
      { type: "Unique", title: "Music Copyright Specialist" }
    ]
  },
  {
    id: "writing",
    name: "Writing",
    emoji: "✍️",
    beginner: [
      { type: "Generic", title: "Content Writer" },
      { type: "Big Demand", title: "Technical Writer" },
      { type: "Unique", title: "Grant Writer" }
    ],
    intermediate: [
      { type: "Generic", title: "Editor" },
      { type: "Big Demand", title: "Copywriter" },
      { type: "Unique", title: "Medical Writer" }
    ],
    advanced: [
      { type: "Generic", title: "Author" },
      { type: "Big Demand", title: "Content Strategist" },
      { type: "Unique", title: "Transcreation Specialist" }
    ]
  },
  {
    id: "sports",
    name: "Sports",
    emoji: "🏀",
    beginner: [
      { type: "Generic", title: "Fitness Instructor" },
      { type: "Big Demand", title: "Sports Coach" },
      { type: "Unique", title: "Adventure Guide" }
    ],
    intermediate: [
      { type: "Generic", title: "Athletic Trainer" },
      { type: "Big Demand", title: "Sports Event Coordinator" },
      { type: "Unique", title: "Sports Nutritionist" }
    ],
    advanced: [
      { type: "Generic", title: "Sports Medicine Physician" },
      { type: "Big Demand", title: "Sports Psychologist" },
      { type: "Unique", title: "Olympic Performance Analyst" }
    ]
  },
  {
    id: "nature",
    name: "Nature",
    emoji: "🌿",
    beginner: [
      { type: "Generic", title: "Park Ranger" },
      { type: "Big Demand", title: "Environmental Technician" },
      { type: "Unique", title: "Botanical Garden Guide" }
    ],
    intermediate: [
      { type: "Generic", title: "Wildlife Biologist" },
      { type: "Big Demand", title: "Conservation Officer" },
      { type: "Unique", title: "Urban Forestry Specialist" }
    ],
    advanced: [
      { type: "Generic", title: "Environmental Policy Analyst" },
      { type: "Big Demand", title: "Climate Scientist" },
      { type: "Unique", title: "Marine Conservation Researcher" }
    ]
  },
  {
    id: "cooking",
    name: "Cooking",
    emoji: "👨‍🍳",
    beginner: [
      { type: "Generic", title: "Line Cook" },
      { type: "Big Demand", title: "Pastry Chef" },
      { type: "Unique", title: "Food Stylist" }
    ],
    intermediate: [
      { type: "Generic", title: "Sous Chef" },
      { type: "Big Demand", title: "Restaurant Manager" },
      { type: "Unique", title: "Specialty Food Producer" }
    ],
    advanced: [
      { type: "Generic", title: "Executive Chef" },
      { type: "Big Demand", title: "Food Scientist" },
      { type: "Unique", title: "Culinary Innovation Director" }
    ]
  },
  {
    id: "psychology",
    name: "Psychology",
    emoji: "🧠",
    beginner: [
      { type: "Generic", title: "Career Counselor" },
      { type: "Big Demand", title: "Human Resources Specialist" },
      { type: "Unique", title: "Child Development Assistant" }
    ],
    intermediate: [
      { type: "Generic", title: "School Psychologist" },
      { type: "Big Demand", title: "Organizational Psychologist" },
      { type: "Unique", title: "Health Psychology Practitioner" }
    ],
    advanced: [
      { type: "Generic", title: "Clinical Psychologist" },
      { type: "Big Demand", title: "Neuropsychologist" },
      { type: "Unique", title: "Positive Psychology Researcher" }
    ]
  },
  {
    id: "gaming",
    name: "Gaming",
    emoji: "🎮",
    beginner: [
      { type: "Generic", title: "Game Tester" },
      { type: "Big Demand", title: "Community Moderator" },
      { type: "Unique", title: "Game Localization Assistant" }
    ],
    intermediate: [
      { type: "Generic", title: "Game Designer" },
      { type: "Big Demand", title: "Esports Coach" },
      { type: "Unique", title: "Serious Games Developer" }
    ],
    advanced: [
      { type: "Generic", title: "Game Director" },
      { type: "Big Demand", title: "AI Game Programmer" },
      { type: "Unique", title: "Gamification Consultant" }
    ]
  },
  {
    id: "finance",
    name: "Finance",
    emoji: "💰",
    beginner: [
      { type: "Generic", title: "Bank Teller" },
      { type: "Big Demand", title: "Accounting Clerk" },
      { type: "Unique", title: "Microfinance Officer" }
    ],
    intermediate: [
      { type: "Generic", title: "Financial Analyst" },
      { type: "Big Demand", title: "Tax Consultant" },
      { type: "Unique", title: "Sustainable Investment Advisor" }
    ],
    advanced: [
      { type: "Generic", title: "Investment Banker" },
      { type: "Big Demand", title: "Chief Financial Officer" },
      { type: "Unique", title: "Financial Technology Innovator" }
    ]
  }
];

export type SkillLevel = "beginner" | "intermediate" | "advanced";

export const skillLevels = [
  {
    id: "beginner" as SkillLevel,
    name: "Beginner",
    emoji: "🌱",
    description: "Just starting out"
  },
  {
    id: "intermediate" as SkillLevel,
    name: "Intermediate",
    emoji: "🌿",
    description: "Some experience"
  },
  {
    id: "advanced" as SkillLevel,
    name: "Advanced",
    emoji: "🌳",
    description: "Expert level"
  }
];

export interface JobDetail {
  description: string;
  skills: string[];
  education: string;
}

export const jobDetails: Record<string, JobDetail> = {
  "IT Support Specialist": {
    description: "Provides technical assistance to computer users, resolves hardware/software issues, and maintains IT systems.",
    skills: ["Technical troubleshooting", "Customer service", "System maintenance", "Network basics"],
    education: "Associate degree in IT or relevant certifications like CompTIA A+"
  },
  "Help Desk Technician": {
    description: "Offers first-line technical support to users, documents issues, and escalates complex problems.",
    skills: ["Problem-solving", "Communication", "Ticketing systems", "Remote support"],
    education: "High school diploma plus IT certifications"
  },
  "Tech Educator": {
    description: "Teaches digital literacy and technology skills to students or adult learners in schools or community programs.",
    skills: ["Curriculum development", "Patience", "Technology proficiency", "Instructional design"],
    education: "Bachelor's degree in education or technology field"
  },
  "Web Developer": {
    description: "Designs and builds functional websites using programming languages and content management systems.",
    skills: ["HTML/CSS", "JavaScript", "Responsive design", "Version control (Git)"],
    education: "Bachelor's degree in computer science or coding bootcamp certification"
  },
  "Cybersecurity Analyst": {
    description: "Protects computer systems and networks from cyber threats by monitoring security breaches.",
    skills: ["Network security", "Threat analysis", "Firewall configuration", "Incident response"],
    education: "Bachelor's degree in cybersecurity plus Security+ certification"
  },
  "Accessibility Specialist": {
    description: "Ensures digital products comply with accessibility standards for users with disabilities.",
    skills: ["WCAG guidelines", "Screen reader testing", "Universal design principles"],
    education: "Certification in digital accessibility (e.g., IAAP)"
  },
  "Software Architect": {
    description: "Designs the fundamental structure of software systems and makes high-level technical decisions.",
    skills: ["System design", "Cloud architecture", "Technical leadership", "Performance optimization"],
    education: "Bachelor's degree in computer science plus 5+ years experience"
  },
  "Data Scientist": {
    description: "Extracts insights from complex datasets using statistical analysis and machine learning.",
    skills: ["Python/R", "Machine learning", "Data visualization", "SQL"],
    education: "Master's degree in data science or related quantitative field"
  },
  "Ethical Hacking Consultant": {
    description: "Identifies security vulnerabilities by simulating cyber attacks with permission.",
    skills: ["Penetration testing", "Security tools", "Vulnerability assessment"],
    education: "CEH (Certified Ethical Hacker) certification"
  },
  "Graphic Designer": {
    description: "Creates visual concepts for branding, advertising, and digital media using design software.",
    skills: ["Adobe Creative Suite", "Typography", "Color theory", "Layout design"],
    education: "Bachelor's degree in graphic design or visual arts"
  },
  "Digital Illustrator": {
    description: "Produces digital artwork for books, games, advertising, and editorial content.",
    skills: ["Digital painting", "Concept art", "Style adaptation", "Tablet proficiency"],
    education: "Art school training or strong portfolio"
  },
  "Art Restoration Assistant": {
    description: "Works under conservators to clean, repair, and preserve artworks and cultural artifacts.",
    skills: ["Attention to detail", "Art history knowledge", "Manual dexterity"],
    education: "Bachelor's in art conservation or related field"
  },
  "Art Director": {
    description: "Oversees visual style and content for magazines, product packaging, and advertising.",
    skills: ["Creative leadership", "Brand management", "Team coordination"],
    education: "Bachelor's degree in art/design plus 5+ years experience"
  },
  "UX/UI Designer": {
    description: "Designs user interfaces and experiences for websites and mobile applications.",
    skills: ["Wireframing", "Prototyping", "User research", "Interaction design"],
    education: "Bachelor's degree in design or UX certification"
  },
  "Museum Exhibit Designer": {
    description: "Plans and creates educational displays that showcase art and historical artifacts.",
    skills: ["Spatial design", "Interpretive planning", "Material selection"],
    education: "Degree in museum studies or exhibition design"
  },
  "Creative Director": {
    description: "Leads the creative vision for advertising agencies, media companies, or brands.",
    skills: ["Concept development", "Team leadership", "Client relations"],
    education: "Bachelor's degree plus 10+ years design experience"
  },
  "Animation Supervisor": {
    description: "Oversees animation teams and ensures quality and consistency in animated productions.",
    skills: ["Animation principles", "Team management", "Pipeline oversight"],
    education: "Degree in animation plus industry experience"
  },
  "Cultural Heritage Conservator": {
    description: "Preserves and restores culturally significant artworks and historical objects.",
    skills: ["Chemistry applications", "Documentation", "Preventive conservation"],
    education: "Master's degree in art conservation"
  },
  "Lab Technician": {
    description: "Conducts routine tests and experiments in scientific laboratories.",
    skills: ["Lab equipment operation", "Data recording", "Safety protocols"],
    education: "Associate degree in laboratory science"
  },
  "Research Assistant": {
    description: "Supports scientific studies by collecting data and maintaining lab equipment.",
    skills: ["Experimental procedures", "Literature reviews", "Data collection"],
    education: "Bachelor's degree in relevant scientific field"
  },
  "Science Communicator": {
    description: "Translates complex scientific information into engaging public content.",
    skills: ["Science writing", "Public speaking", "Multimedia production"],
    education: "Degree in science communication or scientific discipline"
  },
  "Environmental Scientist": {
    description: "Studies environmental problems and develops solutions for conservation.",
    skills: ["Field sampling", "Data analysis", "Regulatory knowledge"],
    education: "Bachelor's degree in environmental science"
  },
  "Biomedical Researcher": {
    description: "Conducts experiments to advance medical knowledge and treatments.",
    skills: ["Laboratory techniques", "Scientific writing", "Data interpretation"],
    education: "Master's degree in biomedical sciences"
  },
  "Forensic Science Technician": {
    description: "Collects and analyzes physical evidence from crime scenes.",
    skills: ["Evidence handling", "Laboratory analysis", "Report writing"],
    education: "Bachelor's degree in forensic science"
  },
  "Clinical Research Scientist": {
    description: "Designs and oversees clinical trials for new medical treatments.",
    skills: ["Protocol development", "Regulatory compliance", "Data analysis"],
    education: "PhD in medical science or related field"
  },
  "Genetic Counselor": {
    description: "Helps patients understand genetic risks and make informed health decisions.",
    skills: ["Genetic testing knowledge", "Counseling", "Risk assessment"],
    education: "Master's degree in genetic counseling"
  },
  "Space Science Researcher": {
    description: "Conducts studies on astronomical phenomena and space exploration technologies.",
    skills: ["Data analysis", "Scientific computing", "Research design"],
    education: "PhD in astronomy, physics, or aerospace engineering"
  },
  "Sales Representative": {
    description: "Sells products or services to businesses and consumers while building client relationships.",
    skills: ["Communication", "Negotiation", "Product knowledge", "CRM software"],
    education: "Bachelor's degree in business or related field"
  },
  "Digital Marketing Assistant": {
    description: "Supports online marketing campaigns across social media, email, and other digital channels.",
    skills: ["Content creation", "Social media management", "Basic analytics"],
    education: "Bachelor's degree in marketing or communications"
  },
  "Sustainability Coordinator": {
    description: "Develops and implements environmental initiatives for organizations.",
    skills: ["Project management", "Environmental regulations", "Reporting"],
    education: "Bachelor's in environmental studies or business"
  },
  "Marketing Manager": {
    description: "Plans and executes marketing strategies to promote products and services.",
    skills: ["Campaign management", "Market research", "Budgeting"],
    education: "Bachelor's degree in marketing or business administration"
  },
  "Business Analyst": {
    description: "Evaluates business processes and recommends improvements for efficiency.",
    skills: ["Data analysis", "Process mapping", "Requirements gathering"],
    education: "Bachelor's degree in business or related field"
  },
  "Social Impact Consultant": {
    description: "Advises companies on creating positive social and environmental change.",
    skills: ["CSR strategies", "Stakeholder engagement", "Impact measurement"],
    education: "MBA or degree in social entrepreneurship"
  },
  "Financial Controller": {
    description: "Manages accounting operations and financial reporting for organizations.",
    skills: ["Financial reporting", "GAAP compliance", "Team leadership"],
    education: "Bachelor's degree in accounting plus CPA"
  },
  "Operations Director": {
    description: "Oversees daily business operations to ensure efficiency and productivity.",
    skills: ["Process optimization", "Supply chain management", "Strategic planning"],
    education: "MBA or bachelor's in business management"
  },
  "Corporate Social Responsibility Manager": {
    description: "Develops and implements programs that align business practices with social good.",
    skills: ["Sustainability initiatives", "Community relations", "Ethical sourcing"],
    education: "Bachelor's degree in business or sustainability studies"
  },
  "Music Teacher": {
    description: "Instructs students in musical instruments, theory, and appreciation.",
    skills: ["Musical proficiency", "Teaching methods", "Curriculum development"],
    education: "Bachelor's degree in music education"
  },
  "Audio Technician": {
    description: "Sets up and operates sound equipment for live events and recordings.",
    skills: ["Sound mixing", "Equipment maintenance", "Acoustics"],
    education: "Vocational training in audio engineering"
  },
  "Instrument Repair Specialist": {
    description: "Maintains and repairs musical instruments to optimal playing condition.",
    skills: ["Manual skills", "Acoustic knowledge", "Precision work"],
    education: "Apprenticeship or technical school certification"
  },
  "Music Producer": {
    description: "Oversees recording sessions and guides the artistic direction of musical projects.",
    skills: ["Audio engineering", "Arrangement", "Artist collaboration"],
    education: "Music production degree or equivalent experience"
  },
  "Sound Engineer": {
    description: "Records, mixes, and masters audio for music, film, and other media.",
    skills: ["DAW proficiency", "Microphone techniques", "Signal processing"],
    education: "Degree in audio engineering or related field"
  },
  "Music Therapy Practitioner": {
    description: "Uses music interventions to address clients' physical, emotional, and cognitive needs.",
    skills: ["Musical proficiency", "Therapeutic techniques", "Assessment"],
    education: "Bachelor's in music therapy plus board certification"
  },
  "Conductor": {
    description: "Leads musical ensembles in rehearsal and performance.",
    skills: ["Score reading", "Rehearsal techniques", "Artistic interpretation"],
    education: "Master's degree in conducting"
  },
  "Acoustic Engineer": {
    description: "Designs spaces and systems for optimal sound quality and noise control.",
    skills: ["Acoustic modeling", "Material science", "Measurement techniques"],
    education: "Bachelor's degree in acoustical engineering"
  },
  "Music Copyright Specialist": {
    description: "Manages intellectual property rights for musical compositions and recordings.",
    skills: ["Copyright law", "Licensing agreements", "Royalty systems"],
    education: "Law degree with music industry focus"
  },
  "Content Writer": {
    description: "Creates written material for websites, blogs, and marketing materials.",
    skills: ["Research", "SEO writing", "Adaptability"],
    education: "Bachelor's degree in English, journalism, or related field"
  },
  "Technical Writer": {
    description: "Produces clear documentation for complex technical products and processes.",
    skills: ["Technical comprehension", "Simplification", "Document design"],
    education: "Bachelor's degree in technical writing or related field"
  },
  "Grant Writer": {
    description: "Researches and writes proposals to secure funding for non-profits and institutions.",
    skills: ["Persuasive writing", "Research", "Budget alignment"],
    education: "Bachelor's degree in English or communications"
  },
  "Editor": {
    description: "Reviews and improves written content for clarity, accuracy, and style.",
    skills: ["Grammar expertise", "Attention to detail", "Style guidelines"],
    education: "Bachelor's degree in English or journalism"
  },
  "Copywriter": {
    description: "Creates persuasive text for advertisements and marketing campaigns.",
    skills: ["Creative writing", "Brand voice", "Concept development"],
    education: "Bachelor's degree in advertising or communications"
  },
  "Medical Writer": {
    description: "Prepares scientific documents for healthcare professionals and patients.",
    skills: ["Scientific literacy", "Regulatory knowledge", "Plain language"],
    education: "Bachelor's degree in life sciences plus writing training"
  },
  "Author": {
    description: "Writes original books, novels, or other long-form written works.",
    skills: ["Storytelling", "Research", "Self-discipline"],
    education: "Creative writing degree or demonstrated writing ability"
  },
  "Content Strategist": {
    description: "Plans and manages content creation to meet business objectives.",
    skills: ["Audience analysis", "Content planning", "Performance measurement"],
    education: "Bachelor's degree in marketing or communications"
  },
  "Transcreation Specialist": {
    description: "Adapts content culturally and linguistically for international markets.",
    skills: ["Bilingual fluency", "Cultural knowledge", "Creative adaptation"],
    education: "Degree in translation studies or linguistics"
  },
  "Fitness Instructor": {
    description: "Leads group exercise classes and provides fitness guidance to clients.",
    skills: ["Exercise techniques", "Motivation", "Class planning"],
    education: "Certification from recognized fitness organization"
  },
  "Sports Coach": {
    description: "Trains athletes and teams to improve performance in specific sports.",
    skills: ["Sport-specific knowledge", "Drill design", "Player development"],
    education: "Coaching certification in relevant sport"
  },
  "Adventure Guide": {
    description: "Leads outdoor activities like hiking, climbing, or rafting for groups.",
    skills: ["Outdoor skills", "Risk management", "Natural history"],
    education: "Wilderness first responder certification"
  },
  "Athletic Trainer": {
    description: "Prevents, diagnoses, and treats muscle and bone injuries for athletes.",
    skills: ["Injury assessment", "Rehabilitation", "Emergency care"],
    education: "Bachelor's degree in athletic training"
  },
  "Sports Event Coordinator": {
    description: "Plans and executes sporting events from local tournaments to large competitions.",
    skills: ["Logistics", "Vendor management", "Scheduling"],
    education: "Bachelor's degree in sports management"
  },
  "Sports Nutritionist": {
    description: "Develops dietary plans to optimize athletic performance and recovery.",
    skills: ["Nutrition science", "Meal planning", "Supplement knowledge"],
    education: "Bachelor's degree in nutrition or dietetics"
  },
  "Sports Medicine Physician": {
    description: "Diagnoses and treats injuries related to sports and physical activity.",
    skills: ["Medical diagnosis", "Treatment planning", "Rehabilitation"],
    education: "Medical degree plus sports medicine fellowship"
  },
  "Sports Psychologist": {
    description: "Helps athletes improve mental toughness and overcome performance challenges.",
    skills: ["Performance psychology", "Counseling", "Mental skills training"],
    education: "Doctoral degree in psychology with sports focus"
  },
  "Olympic Performance Analyst": {
    description: "Uses data to optimize training and competition strategies for elite athletes.",
    skills: ["Sports analytics", "Video analysis", "Performance metrics"],
    education: "Master's in sports science or related field"
  },
  "Park Ranger": {
    description: "Protects natural areas and educates visitors about conservation and safety.",
    skills: ["Natural history", "Public speaking", "First aid"],
    education: "Bachelor's degree in environmental science or related field"
  },
  "Environmental Technician": {
    description: "Collects environmental samples and monitors pollution levels.",
    skills: ["Field sampling", "Data recording", "Equipment operation"],
    education: "Associate degree in environmental technology"
  },
  "Botanical Garden Guide": {
    description: "Educates visitors about plant collections and conservation efforts.",
    skills: ["Horticulture knowledge", "Public speaking", "Education"],
    education: "Degree in botany or environmental education"
  },
  "Wildlife Biologist": {
    description: "Studies animals in their natural habitats and develops conservation plans.",
    skills: ["Field research", "Species identification", "Data analysis"],
    education: "Bachelor's degree in wildlife biology"
  },
  "Conservation Officer": {
    description: "Enforces laws protecting wildlife, fisheries, and natural resources.",
    skills: ["Law enforcement", "Wildlife laws", "Public education"],
    education: "Bachelor's degree in conservation law enforcement"
  },
  "Urban Forestry Specialist": {
    description: "Manages tree populations in urban environments for community benefit.",
    skills: ["Arboriculture", "Urban planning", "Disease management"],
    education: "Bachelor's degree in forestry or urban ecology"
  },
  "Environmental Policy Analyst": {
    description: "Researches and develops policies to address environmental challenges.",
    skills: ["Policy analysis", "Research", "Stakeholder engagement"],
    education: "Master's degree in environmental policy"
  },
  "Climate Scientist": {
    description: "Studies climate systems and analyzes climate change data.",
    skills: ["Data modeling", "Statistical analysis", "Scientific writing"],
    education: "PhD in atmospheric sciences or related field"
  },
  "Marine Conservation Researcher": {
    description: "Studies and protects ocean ecosystems and marine species.",
    skills: ["Scientific diving", "Data collection", "Policy analysis"],
    education: "PhD in marine biology or related field"
  },
  "Line Cook": {
    description: "Prepares food in restaurants under the direction of chefs.",
    skills: ["Knife skills", "Food safety", "Time management"],
    education: "Culinary school or on-the-job training"
  },
  "Pastry Chef": {
    description: "Specializes in creating desserts, breads, and other baked goods.",
    skills: ["Baking techniques", "Decoration", "Recipe development"],
    education: "Pastry arts degree or apprenticeship"
  },
  "Food Stylist": {
    description: "Prepares food for photography and film to maximize visual appeal.",
    skills: ["Plating techniques", "Photography basics", "Time management"],
    education: "Culinary arts training"
  },
  "Sous Chef": {
    description: "Second-in-command in the kitchen, managing staff and food preparation.",
    skills: ["Kitchen management", "Menu planning", "Leadership"],
    education: "Culinary degree plus kitchen experience"
  },
  "Restaurant Manager": {
    description: "Oversees daily restaurant operations including staff, inventory, and customer service.",
    skills: ["Business management", "Customer service", "Staff training"],
    education: "Hospitality degree or equivalent experience"
  },
  "Specialty Food Producer": {
    description: "Creates artisanal or specialty food products for retail sale.",
    skills: ["Food production", "Quality control", "Business operations"],
    education: "Food science or culinary training"
  },
  "Executive Chef": {
    description: "Leads kitchen operations and creates menus for restaurants or hospitality venues.",
    skills: ["Culinary expertise", "Menu development", "Team leadership"],
    education: "Culinary degree plus 10+ years experience"
  },
  "Food Scientist": {
    description: "Researches food production methods and develops new food products.",
    skills: ["Food chemistry", "Product development", "Quality assurance"],
    education: "Bachelor's or Master's in food science"
  },
  "Culinary Innovation Director": {
    description: "Leads research and development of new culinary concepts and products.",
    skills: ["Creativity", "Trend analysis", "Product development"],
    education: "Culinary degree plus business training"
  },
  "Career Counselor": {
    description: "Helps individuals make career decisions and develop job search skills.",
    skills: ["Counseling techniques", "Assessment tools", "Career resources"],
    education: "Master's degree in counseling or related field"
  },
  "Human Resources Specialist": {
    description: "Manages employee relations, recruitment, and workplace policies.",
    skills: ["Recruitment", "Employee relations", "HR software"],
    education: "Bachelor's degree in HR or business"
  },
  "Child Development Assistant": {
    description: "Supports children's learning and development in educational settings.",
    skills: ["Child psychology", "Activity planning", "Observation"],
    education: "Associate degree in child development"
  },
  "School Psychologist": {
    description: "Provides mental health services and assessment in educational settings.",
    skills: ["Psychological assessment", "Intervention planning", "Consultation"],
    education: "Specialist or doctoral degree in school psychology"
  },
  "Organizational Psychologist": {
    description: "Applies psychological principles to improve workplace performance and culture.",
    skills: ["Organizational assessment", "Training design", "Research"],
    education: "Master's or doctoral degree in I/O psychology"
  },
  "Health Psychology Practitioner": {
    description: "Helps individuals manage health conditions through behavioral interventions.",
    skills: ["Health behavior change", "Stress management", "Patient education"],
    education: "Doctoral degree in health psychology"
  },
  "Clinical Psychologist": {
    description: "Diagnoses and treats mental health disorders using various therapeutic approaches.",
    skills: ["Psychotherapy", "Assessment", "Treatment planning"],
    education: "Doctoral degree in clinical psychology"
  },
  "Neuropsychologist": {
    description: "Studies brain-behavior relationships and assesses cognitive functioning.",
    skills: ["Neuropsychological testing", "Brain function analysis", "Report writing"],
    education: "Doctoral degree plus specialized training"
  },
  "Positive Psychology Researcher": {
    description: "Studies human flourishing and develops interventions to promote well-being.",
    skills: ["Research methods", "Statistical analysis", "Program development"],
    education: "PhD in psychology with positive psychology focus"
  },
  "Game Tester": {
    description: "Tests video games for bugs, glitches, and gameplay issues before release.",
    skills: ["Attention to detail", "Bug reporting", "Gaming knowledge"],
    education: "High school diploma plus gaming experience"
  },
  "Community Moderator": {
    description: "Manages online gaming communities and enforces community guidelines.",
    skills: ["Communication", "Conflict resolution", "Platform knowledge"],
    education: "Experience in gaming communities"
  },
  "Game Localization Assistant": {
    description: "Helps adapt video games for different languages and cultural markets.",
    skills: ["Language skills", "Cultural awareness", "Gaming terminology"],
    education: "Degree in translation or languages"
  },
  "Game Designer": {
    description: "Creates game concepts, mechanics, and player experiences.",
    skills: ["Game mechanics", "Level design", "Storytelling"],
    education: "Bachelor's degree in game design or related field"
  },
  "Esports Coach": {
    description: "Trains competitive gaming teams and develops winning strategies.",
    skills: ["Game expertise", "Team leadership", "Strategy development"],
    education: "Competitive gaming experience plus coaching skills"
  },
  "Serious Games Developer": {
    description: "Creates games for education, training, or therapeutic purposes.",
    skills: ["Game development", "Learning design", "User research"],
    education: "Degree in game design or instructional design"
  },
  "Game Director": {
    description: "Leads the overall vision and development of video game projects.",
    skills: ["Creative vision", "Team management", "Project oversight"],
    education: "Bachelor's degree plus 10+ years industry experience"
  },
  "AI Game Programmer": {
    description: "Develops artificial intelligence systems for non-player characters and game behaviors.",
    skills: ["AI algorithms", "Programming", "Game engines"],
    education: "Computer science degree with AI specialization"
  },
  "Gamification Consultant": {
    description: "Applies game design principles to non-gaming contexts to increase engagement.",
    skills: ["Game mechanics", "User psychology", "Business strategy"],
    education: "Degree in game design, psychology, or business"
  },
  "Bank Teller": {
    description: "Processes banking transactions and provides customer service at financial institutions.",
    skills: ["Cash handling", "Customer service", "Attention to detail"],
    education: "High school diploma plus bank training"
  },
  "Accounting Clerk": {
    description: "Maintains financial records and processes routine accounting transactions.",
    skills: ["Bookkeeping", "Data entry", "Accounting software"],
    education: "Associate degree in accounting"
  },
  "Microfinance Officer": {
    description: "Provides small loans and financial services to underserved communities.",
    skills: ["Financial assessment", "Community outreach", "Loan processing"],
    education: "Bachelor's degree in finance or development"
  },
  "Financial Analyst": {
    description: "Analyzes financial data and provides recommendations for investment decisions.",
    skills: ["Financial modeling", "Data analysis", "Report writing"],
    education: "Bachelor's degree in finance or economics"
  },
  "Tax Consultant": {
    description: "Advises individuals and businesses on tax planning and compliance.",
    skills: ["Tax law knowledge", "Financial analysis", "Client communication"],
    education: "Bachelor's in accounting plus CPA or EA certification"
  },
  "Sustainable Investment Advisor": {
    description: "Guides clients in making investments that align with environmental and social values.",
    skills: ["ESG analysis", "Investment strategies", "Client relations"],
    education: "Finance degree plus sustainability certification"
  },
  "Investment Banker": {
    description: "Facilitates complex financial transactions including mergers, acquisitions, and IPOs.",
    skills: ["Financial modeling", "Deal structuring", "Client management"],
    education: "MBA or Master's in finance"
  },
  "Chief Financial Officer": {
    description: "Oversees all financial operations and strategy for an organization.",
    skills: ["Financial leadership", "Strategic planning", "Risk management"],
    education: "MBA plus CPA and 15+ years experience"
  },
  "Financial Technology Innovator": {
    description: "Develops new financial products and services using technology.",
    skills: ["Fintech knowledge", "Product development", "Innovation"],
    education: "Finance or computer science degree"
  }
};
