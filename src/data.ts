export interface NLPConcept {
  title: string;
  description: string;
  author: string;
  category: string;
  difficulty: string;
}

export const nlpConcepts: NLPConcept[] = [
  {
    title: "Tokenization & Embeddings",
    description:
      "Breaking down text into meaningful units and representing them as numerical vectors for machine understanding.",
    author: "Dr. Khadijat Ladoja",
    category: "Core",
    difficulty: "Beginner",
  },
  {
    title: "Machine Translation",
    description:
      "Building systems that automatically translate between English and Nigerian languages, preserving tone and meaning.",
    author: "Mr. Ahmad Khidir",
    category: "Core",
    difficulty: "Intermediate",
  },

  {
    title: "Text Classification",
    description:
      "Using AI to categorize text by sentiment, topic, or intent — crucial for information retrieval and analytics.",
    author: "Dr. Khadijat Ladoja",
    category: "Core",
    difficulty: "Beginner",
  },
  {
    title: "Named Entity Recognition (NER)",
    description:
      "Identifying and tagging key entities such as names, places, and organizations in local language text.",
    author: "Mr. Ahmad Khidir",
    category: "Core",
    difficulty: "Intermediate",
  },
  {
    title: "Language Modeling",
    description:
      "Training models to understand sentence structure, predict words, and capture linguistic nuances in Nigerian languages.",
    author: "Dr. Khadijat Ladoja",
    category: "Core",
    difficulty: "Beginner",
  },
  {
    title: "Part-of-Speech Tagging",
    description:
      "Automatically labeling words with their grammatical categories to understand sentence structure in Nigerian languages.",
    author: "Mr. Ahmad Khidir",
    category: "Core",
    difficulty: "Intermediate",
  },
  {
    title: "Sentiment Analysis",
    description:
      "Determining the emotional tone of text in Nigerian languages, useful for social media monitoring and customer feedback.",
    author: "Dr. Khadijat Ladoja",
    category: "Core",
    difficulty: "Beginner",
  },
  {
    title: "Question Answering Systems",
    description:
      "Building AI systems that can understand and answer questions posed in Nigerian languages with high accuracy.",
    author: "Mr. Ahmad Khidir",
    category: "Core",
    difficulty: "Intermediate",
  },
  {
    title: "Text Summarization",
    description:
      "Automatically generating concise summaries of longer texts while preserving key information and context.",
    author: "Dr. Khadijat Ladoja",
    category: "Core",
    difficulty: "Beginner",
  },
  {
    title: "Dependency Parsing",
    description:
      "Analyzing grammatical structure by identifying relationships between words in sentences written in Nigerian languages.",
    author: "Mr. Ahmad Khidir",
    category: "Core",
    difficulty: "Intermediate",
  },
  {
    title: "Coreference Resolution",
    description:
      "Identifying when different words or phrases refer to the same entity within a text, improving comprehension.",
    author: "Dr. Khadijat Ladoja",
    category: "Core",
    difficulty: "Beginner",
  },
  {
    title: "Topic Modeling",
    description:
      "Discovering abstract topics within large collections of documents written in Nigerian languages using statistical methods.",
    author: "Mr. Ahmad Khidir",
    category: "Core",
    difficulty: "Intermediate",
  },
  {
    title: "Word Sense Disambiguation",
    description:
      "Determining which meaning of a word is used in a particular context, addressing ambiguity in language.",
    author: "Dr. Khadijat Ladoja",
    category: "Core",
    difficulty: "Beginner",
  },
  {
    title: "Morphological Analysis",
    description:
      "Studying the internal structure of words, including prefixes, suffixes, and roots in Nigerian languages.",
    author: "Mr. Ahmad Khidir",
    category: "Core",
    difficulty: "Intermediate",
  },
  {
    title: "Language Generation",
    description:
      "Creating human-like text in Nigerian languages for applications like chatbots, content creation, and automated reporting.",
    author: "Dr. Khadijat Ladoja",
    category: "Core",
    difficulty: "Beginner",
  },
  {
    title: "Intent Recognition",
    description:
      "Identifying the purpose or goal behind a user's input, essential for building conversational AI systems.",
    author: "Mr. Ahmad Khidir",
    category: "Core",
    difficulty: "Intermediate",
  },
  {
    title: "Lexical Resources",
    description:
      "Developing dictionaries, thesauri, and wordnets for Nigerian languages to support various NLP applications.",
    author: "Dr. Khadijat Ladoja",
    category: "Core",
    difficulty: "Beginner",
  },
  {
    title: "Transfer Learning",
    description:
      "Applying knowledge gained from high-resource languages to improve NLP models for low-resource Nigerian languages.",
    author: "Mr. Ahmad Khidir",
    category: "Core",
    difficulty: "Intermediate",
  },
  {
    title: "Multimodal NLP",
    description:
      "Combining text with other data types like images and audio to create richer language understanding systems.",
    author: "Dr. Khadijat Ladoja",
    category: "Core",
    difficulty: "Beginner",
  },
];

// lib/data.ts
export const vision =
  "An Africa where language no longer limits connection, collaboration, or access to opportunity.";

export const mission =
  "To use language technology to connect Africa, empower its people, and preserve its linguistic diversity.";

export const strategicGoals = [
  {
    id: 1,
    title: "Research, Innovation, and Knowledge Creation",
    icon: "Target",
    description:
      "Advance impactful NLP research that drives digital inclusion and real-world transformation in Africa.",
    strategies: [
      "Establish focused research clusters in machine translation, speech technology, information retrieval, and multilingual AI.",
      "Develop and maintain open-source datasets and tools for African and low-resource languages.",
      "Collaborate with global research centers to co-develop AI models suited for African linguistic contexts.",
      "Encourage interdisciplinary research connecting computer science, linguistics, and social sciences.",
      "Promote high-quality publications and participation in top-tier conferences.",
    ],
  },
  {
    id: 2,
    title: "Capacity Building and Talent Development",
    icon: "Users",
    description:
      "Cultivate skilled researchers, students, and practitioners capable of leading Africa’s NLP innovation ecosystem.",
    strategies: [
      "Organize hands-on workshops, training, and mentorship programs in NLP and AI ethics.",
      "Integrate NLP research into undergraduate and postgraduate curricula.",
      "Develop internship and fellowship programs linking academia with industry.",
      "Offer professional development for faculty and researchers on emerging NLP methods.",
    ],
  },
  {
    id: 3,
    title: "Technology Development and Application",
    icon: "BookOpen",
    description:
      "Translate research into practical, inclusive digital language solutions addressing societal needs.",
    strategies: [
      "Design AI-driven tools for translation, speech recognition, and information access in African languages.",
      "Develop localized NLP applications in education, governance, health, and accessibility.",
      "Promote ethical and responsible AI practices in all projects.",
      "Host innovation challenges and hackathons to drive applied creativity.",
      "Partner with government and industry for field testing and deployment.",
    ],
  },
  {
    id: 4,
    title: "Partnerships, Industry, and Community Engagement",
    icon: "Briefcase",
    description:
      "Strengthen collaborations that extend UINLP’s research and societal impact.",
    strategies: [
      "Build partnerships with technology companies, NGOs, and academic institutions.",
      "Launch outreach initiatives to promote AI and NLP literacy.",
      "Raise community awareness of the benefits and ethical dimensions of AI.",
      "Support national and continental policies on language technology and digital inclusion.",
      "Create accessibility and translation tools for underserved and multilingual communities.",
    ],
  },
  {
    id: 5,
    title: "Inclusion, Ethics, and Sustainability",
    icon: "Target",
    description:
      "Promote responsible, inclusive, and sustainable language technology development.",
    strategies: [
      "Embed ethical AI and data governance principles in all research.",
      "Ensure gender equity and inclusive participation in NLP activities.",
      "Preserve and digitize endangered African languages for cultural sustainability.",
      "Advocate for data privacy and fair representation in AI models.",
      "Align initiatives with the UN Sustainable Development Goals (SDGs).",
    ],
  },
  {
    id: 6,
    title: "Infrastructure and Resource Development",
    icon: "BookOpen",
    description:
      "Strengthen UINLP’s infrastructure for scalable research, collaboration, and dissemination.",
    strategies: [
      "Develop a centralized African Language Resource Hub for open access datasets, tools, and publications.",
      "Establish high-performance computing resources for NLP research.",
      "Secure sustainable funding through grants, partnerships, and donor support.",
      "Build digital platforms for collaboration, data sharing, and version control.",
    ],
  },
  {
    id: 7,
    title: "Monitoring, Evaluation, and Impact Assessment",
    icon: "Briefcase",
    description:
      "Ensure continuous improvement, transparency, and measurable progress toward UINLP’s mission.",
    strategies: [
      "Define key performance indicators (KPIs) for research, capacity building, partnerships, and outreach.",
      "Conduct annual reviews and publish progress and impact reports.",
      "Track societal outcomes of UINLP projects and partnerships.",
      "Regularly refine strategies based on evaluation and emerging research trends.",
    ],
  },
];

export const teamMembers = [
  {
    name: "Dr. Nancy C. Woods",
    role: "Head of UINLP",
    dept: "Senior Lecturer, Computer Science",
    bio: "Provides strategic leadership in NLP research focused on African languages.",
  },
  {
    name: "Dr. Khadijat T. Ladoja",
    role: "Co-Research Head & Founder",
    dept: "Computer Science",
    bio: "Pioneering NLP for Nigerian languages since 2024.",
  },
  {
    name: "Engr. Olalekan A. Okewale",
    role: "Executive Secretary",
    dept: "Administration",
    bio: "Ensures seamless operations and communication.",
  },
  {
    name: "Miss Zaynab A. Hamzat",
    role: "Research Management Officer",
    dept: "Project Coordination",
    bio: "Tracks projects, grants, and deliverables.",
  },
  {
    name: "Mr. Ahmad A. Khidir",
    role: "Technical Lead",
    dept: "AI Engineering",
    bio: "Leads model development and data pipelines.",
  },
  {
    name: "Mr. Micheal T. Oyebamiji",
    role: "Data Lead",
    dept: "AI Engineering",
    bio: "Oversees data collection, annotation, and quality.",
  },
  {
    name: "Mr. Sherifdeen A. Adeleke",
    role: "Publicity Lead",
    dept: "Communications",
    bio: "Manages branding, website, and outreach.",
  },
  {
    name: "Mr. Tamilore M. Adebayo",
    role: "Set Lead",
    dept: "Communications",
    bio: "Collaborates with students sets",
  },
];
