import type {
  AchievementGroup,
  CodingLanguage,
  InternshipEntry,
  LanguageSpoken,
  LinguisticsEntry,
  MunEntry,
  NavLink,
  ProjectEntry,
  RecommendationLetter,
  ResearchPaper,
  SchoolEntry,
  VolunteerEntry,
  WorkshopEntry,
} from "../types";

// ===========================================================================
// DOCUMENTS (certificates, letters, papers)
// Put the file in the public/ folder and write its path on the entry:
//
//   certificate: "/certificates/go-coderz.jpg"   -> public/certificates/go-coderz.jpg
//   lor:         "/letters/smartstickies.pdf"    -> public/letters/smartstickies.pdf
//   pdf:         "/research/model-collapse.pdf"  -> public/research/model-collapse.pdf
//
// Images (.jpg/.png) and PDFs both work. Entries without a path show no link.
// ===========================================================================

export const profile = {
  name: "Misha Saraf",
  grade: "Grade 12",
  classOf: 2027,
  school: "Prakash Vidyalaya and Junior College",
  location: "Mumbai, India",
  email: "Mishasarafs@gmail.com",
  phone: "+91 8655738385",
  linkedin: "https://in.linkedin.com/in/misha-saraf-753640387",
  github: "https://github.com/Mishasaraf",
  intro:
    "A Grade 12 student - National coding champion, Team India at the Asia-Pacific Linguistics Olympiad, and the student who brought Model UN to her school. One conference, linguistic mystery and commit at a time.",
};

export const navLinks: NavLink[] = [
  { href: "#about", label: "About" },
  { href: "#research", label: "Research" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#mun", label: "Model UN" },
  { href: "#achievements", label: "Achievements" },
  { href: "#letters", label: "Letters" },
  { href: "#contact", label: "Contact" },
];

/** The four facts shown beside the hero. */
export const heroFacts = [
  { label: "ICSE Grade 10", value: "98.8%", note: "School topper, rank 1 of 80" },
  { label: "SAT", value: "1470", note: "Math 770, EBRW 700" },
  { label: "Linguistics", value: "Team India", note: "Asia-Pacific Linguistics Olympiad" },
  { label: "Coding", value: "National champion", note: "Go Coderz" },
];

export const schools: SchoolEntry[] = [
  {
    name: "Prakash Vidyalaya and Junior College",
    location: "Kandivali West, Mumbai",
    board: "HSC",
    period: "Grades 11–12, current",
    detail: "Higher secondary, science stream.",
    grades: [{ grade: "Grade 11", percentage: "96.0%" }],
  },
  {
    name: "Ramniwas Bajaj English High School",
    location: "Malad West, Mumbai",
    board: "ICSE",
    period: "Kindergarten–Grade 10",
    detail:
      "School topper, Trailblazer Award recipient, and founder of the school's Model UN culture.",
    grades: [
      { grade: "Grade 10", percentage: "98.8%", note: "ICSE school topper, rank 1 of 80" },
      { grade: "Grade 9", percentage: "86.9%" },
    ],
  },
];

// ---------------------------------------------------------------------------
// Academics & skills
// ---------------------------------------------------------------------------

export const sat = { score: "1470", breakdown: "Math 770, Evidence-Based Reading & Writing 700" };

export const codingLanguages: CodingLanguage[] = [
  { name: "Java", level: "Mid" },
  { name: "Python", level: "Mid" },
  { name: "TypeScript", level: "Mid" },
  { name: "JavaScript", level: "Beginner" },
  { name: "C++", level: "Beginner" },
  { name: "SQL", level: "Beginner" },
  { name: "HTML", level: "Mid" },
  { name: "CSS", level: "Beginner" },
  { name: "NumPy", level: "Mid" },
  { name: "PyTorch", level: "Beginner" },
];

export const languagesSpoken: LanguageSpoken[] = [
  { name: "English", level: "Fluent" },
  { name: "Hindi", level: "Fluent" },
  { name: "German", level: "Working" },
  { name: "Gujarati", level: "Working" },
  { name: "Marathi", level: "Working" },
  { name: "Dutch", level: "Beginner" },
  { name: "Marwadi", level: "Beginner" },
  { name: "Punjabi", level: "Beginner" },
];

// ---------------------------------------------------------------------------
// Research
// Optional fields (abstract, status, venue, year, url, pdf) only appear on the
// page once filled in. Example: pdf: "/research/model-collapse.pdf"
// ---------------------------------------------------------------------------

export const research: ResearchPaper[] = [
  {
    id: "model-collapse",
    title: "AI Model Collapse",
    field: "Machine learning",
    year: "2026",
    summary:
      "What happens to generative models trained on text and images produced by earlier models — how each generation loses the rarer parts of the original data, and what that means as more of the web becomes machine-written.",
    keywords: ["Generative models", "Synthetic data", "Training dynamics"],
    stack: ["Python", "Pytorch", "NumPy"],
    pdf: "/research/model-collapse.pdf",
  },
  {
    id: "coffee-ring",
    title: "The Coffee-Ring Effect",
    field: "Fluid dynamics",
    year: "2026",
    summary:
      "Why a drying drop of coffee leaves a dark ring instead of an even stain: evaporation at the pinned edge pulls liquid outward and carries suspended particles with it.",
    keywords: ["Evaporation", "Capillary flow", "Particle deposition"],
    stack: ["Python", "Pytorch", "NumPy"],
    // pdf: "/research/coffee-ring.pdf",  (add the file to public/research/ and uncomment)
  },
];

// ---------------------------------------------------------------------------
// Projects — from github.com/Mishasaraf
// ---------------------------------------------------------------------------

export const projects: ProjectEntry[] = [
  {
    title: "Chocolates-4-U",
    description:
      "A full-stack chocolate storefront with accounts, a shopping cart and order history. Product search and recommendations combine TF-IDF ranking with a Llama model, and fall back to plain ranking when the model is unavailable.",
    stack: ["TypeScript", "React", "Express", "Supabase", "TF-IDF", "Llama 3.3"],
    repo: "https://github.com/Mishasaraf/Chocolates-4-U",
    context: "Built during the SmartStickies internship.",
  },
  {
    title: "Linguistic Analyzer",
    description:
      "Upload a .txt file and get its vocabulary richness, type–token ratio, word frequencies, sentence lengths, hapax legomena, and the most repeated bigrams and trigrams.",
    stack: ["JavaScript", "NLP"],
    repo: "https://github.com/Mishasaraf/Linguistic-Analyzer",
    demo: "https://linguistic-analyzer-chi.vercel.app/",
  },
  {
    title: "Planner",
    description:
      "A personal planner for daily tasks and monthly goals, with completion tracking and progress indicators.",
    stack: ["JavaScript", "HTML", "CSS"],
    repo: "https://github.com/Mishasaraf/Planner",
    demo: "https://task-planner-rho-vert.vercel.app/",
  },
  {
    title: "Book Sales",
    description:
      "Tracks book purchases, buyers, quantities and revenue, calculates totals automatically and prints sales reports.",
    stack: ["JavaScript", "HTML", "CSS"],
    repo: "https://github.com/Mishasaraf/Book-Sales",
    context: "Built during the Scholastic internship.",
    demo: "https://book-sales-ashen.vercel.app/",
  },
  {
    title: "Tic-Tac-Toe",
    description:
      "A two-player game with turn-based play, automatic win and draw detection, and a running scoreboard.",
    stack: ["JavaScript", "HTML", "CSS"],
    repo: "https://github.com/Mishasaraf/Tic-Tac-Toe",
    demo: "https://tic-tactoe-fawn.vercel.app/",
  },
];

// ---------------------------------------------------------------------------
// Experience — internships & roles
// Uncomment `lor` once the letter is in public/letters/ to show the
// "Here's what they had to say" link.
// ---------------------------------------------------------------------------

export const internships: InternshipEntry[] = [
  {
    id: "gads",
    org: "Global Affairs and Debate Society",
    role: "Founder & President",
    period: "2025 – present",
    description:
      "Founded and leads a policy-debate and geopolitics society: designed parliamentary training modules, mentors junior speakers, publishes articles, and has led delegations to 3+ conferences.",
    // lor: "/letters/gads.pdf",
  },
  {
    id: "smartstickies",
    org: "SmartStickies",
    role: "AI Engineering & Recommender Systems Intern",
    period: "2026",
    description:
      "Built a full-stack prototype chocolate storefront with personalised product recommendations, dynamic filtering and taste matching using TF-IDF and Llama.",
    // lor: "/letters/smartstickies.pdf",
  },
  {
    id: "prudencia",
    org: "Prudencia",
    role: "Delegate Affairs Coordinator & Conference Operations Intern",
    period: "2025 – present",
    description:
      "Runs delegate onboarding, country-matrix allocation and committee logistics for two flagship Mumbai MUN conferences of 350+ delegates each, and is helping plan a larger next edition.",
    lor: "/letters/Prudencia.pdf",
  },
  {
    id: "scholastic",
    org: "Scholastic Internship Programme",
    role: "Technology & Digital Sales Operations",
    period: "2023",
    description:
      "Managed digital inventory tracking and reader outreach in Scholastic's technology unit, driving 200+ book sales during the campaign.",
    lor: "/letters/scholastic.pdf",
  },
];

// ---------------------------------------------------------------------------
// Model UN
// Add certificate: "/certificates/mun/<name>.jpg" to any conference.
// ---------------------------------------------------------------------------

export const munFounding =
  "Founder & President of the Global Affairs and Debate Society (2025–present), and the student who introduced Model UN to her school.";

export const munEntries: MunEntry[] = [
  { conference: "RBMUN", role: "Delegate", award: "Best Delegate", year: 2024, grade: 9 },
  { conference: "GDMUN", role: "Delegate", award: "Best Delegate", year: 2025, grade: 10 },
  { conference: "RBHS Intra MUN", role: "Chair", year: 2024, grade: 10, certificate: "/certificates/mun/rbhs-intra-mun-2024.jpg" },
  { conference: "UYC MUN", role: "Chair", year: 2024, grade: 10, certificate: "/certificates/mun/uyc-mun-2024-chair.jpg" },
  { conference: "F & H MUN", role: "Co-Chair", year: 2025, grade: 10 },
  { conference: "Bliss MUN", role: "Vice Chair", year: 2024, grade: 9 },
  { conference: "MIMUN", role: "Vice Chair", year: 2024, grade: 9 },
  { conference: "UYMUN", role: "Vice Chair", year: 2024, grade: 10 },
  { conference: "SGAS 2.0", role: "Co-Head, Marketing", year: 2025, grade: 10 },
  { conference: "Pii MUN", role: "Rapporteur", year: 2024, grade: 10 },
  { conference: "SGAS MUN", role: "Delegate", award: "Honourable Mention", year: 2024, grade: 9 },
  { conference: "DYMUN", role: "Delegate", award: "Verbal Mention", year: 2023, grade: 9, certificate: "/certificates/mun/dymun-2023.jpg" },
  { conference: "GEA MUN", role: "Delegate", award: "Verbal Mention", year: 2023, grade: 9, certificate: "/certificates/mun/gea-mun-2023.jpg" },
  { conference: "VLP MUN", role: "Delegate", award: "Verbal Mention", year: 2024, grade: 9, certificate: "/certificates/mun/vlp-mun-2024.jpg" },
  { conference: "TW MUN", role: "Delegate", award: "Verbal Mention", year: 2023, grade: 9, certificate: "/certificates/mun/tw-mun-2023.jpg" },
  { conference: "WYC", role: "Delegate", award: "Verbal Mention", year: 2023, grade: 9, certificate: "/certificates/mun/wyc-2023.jpg" },
  { conference: "UYC MUN", role: "Delegate", award: "Verbal Mention", year: 2023, grade: 9, certificate: "/certificates/mun/uyc-mun-2023.jpg" },
  { conference: "NMIMS AMSOC MUN", role: "Delegate", award: "Verbal Mention", year: 2023, grade: 9, certificate: "/certificates/mun/nmims-asmsoc-mun-2023.jpg" },
  { conference: "TW MUN", role: "Delegate", year: 2025, grade: 11 },
  { conference: "GLC MUN", role: "Delegate", year: 2026, grade: 11, certificate: "/certificates/mun/glc-mun-2026.jpg" },
];

// ---------------------------------------------------------------------------
// Achievements
// Add certificate: "/certificates/<name>.jpg" to any entry.
// ---------------------------------------------------------------------------

export const flagshipAwards: { title: string; detail: string; certificate?: string }[] = [
  {
    title: "ICSE School Topper",
    detail: "Rank 1 of 80 with 98.8% in Grade 10 ICSE National Examination.",
    certificate: "/certificates/icse-topper.jpg",
  },
  {
    title: "Trailblazer Award",
    detail: "For pioneering Model UN culture at RBHS, Grade 9.",
    certificate: "/certificates/trailblazer-award.jpg",
  },
];

export const linguistics: LinguisticsEntry[] = [
  {
    code: "APLO",
    name: "Asia-Pacific Linguistics Olympiad",
    scope: "International",
    badge: "Team India",
    description:
      "An international olympiad in theoretical and computational linguistics. Competed for Team India, representing the country at international level.",
  },
  {
    code: "PLO",
    name: "Panini Linguistics Olympiad",
    scope: "National",
    badge: "Top 40, selection camp",
    certificate: "/certificates/plo.jpg",
    description:
      "India's national linguistics olympiad, the equivalent of NACLO in the US. Placed among the top national performers and selected for the training camp at IIIT Hyderabad — the qualifying round for Team India at the International Linguistics Olympiad (IOL).",
  },
];

export const achievementGroups: AchievementGroup[] = [
  {
    id: "hackathons",
    title: "Hackathons & tech competitions",
    items: [
      { event: "Go Coderz", result: "Coding Champion", level: "National", grade: 10, certificate: "/certificates/go-coderz.jpg" },
      { event: "Gizmo Geeks — AI Chatbot", result: "3rd Place", level: "State", grade: 9, certificate: "/certificates/gizmo-geeks.jpg" },
      { event: "ROBOCOM", result: "Top 10 Finalist", level: "State", grade: 10, certificate: "/certificates/robocom.jpg" },
      { event: "Road Safety Hackathon", result: "Participation", level: "National", grade: 11 },
      { event: "Pythonistas", result: "Participation", level: "State", grade: 9, certificate: "/certificates/pythonistas.jpg" },
      { event: "Samsung Solve for Tomorrow", result: "Participation", level: "National", grade: 12 },
      { event: "Handloom Hackathon", result: "Participation", level: "National", grade: 12 },
    ],
  },
  {
    id: "math-science",
    title: "Math & science contests",
    items: [
      { event: "International Youth Math Challenge", result: "Qualified for Pre-Final Round", grade: 12, certificate: "/certificates/IYMC-Qaulification-Round.pdf" },
      { event: "ISRO Quiz Competition", result: "Participation", grade: 9, certificate: "/certificates/isro-quiz.jpg" },
      { event: "DMT Mathematics Scholarship Exam", result: "Participation", grade: 10, certificate: "/certificates/dmt-math.jpg" },
      { event: "Cathedral Math Competition", result: "Participation", grade: 10 },
      { event: "Cathedral Math Competition", result: "Participation", grade: 9 },
    ],
  },
  {
    id: "sof",
    title: "SOF olympiads",
    items: [
      { event: "SOF IMO", result: "Merit", level: "State", grade: 9, certificate: "/certificates/sof-imo-merit-g9.jpg" },
      { event: "SOF IMO", result: "Participation", grade: 9, certificate: "/certificates/sof-imo-g9.jpg" },
      { event: "SOF IEO", result: "Participation", grade: 9, certificate: "/certificates/sof-ieo-g9.jpg" },
      { event: "SOF IMO", result: "Participation", grade: 10 },
      { event: "SOF IEO", result: "Participation", grade: 10 },
      { event: "SOF IMO", result: "Participation", grade: 11, certificate: "/certificates/sof-imo-g11.jpg" },
      { event: "SOF IEO", result: "Participation", grade: 11, certificate: "/certificates/sof-ieo-g11.jpg" },
    ],
  },
  {
    id: "debate",
    title: "Debate & public speaking",
    items: [
      { event: "Frank Anthony All India Inter-School Debate", result: "Participation", grade: 10, certificate: "/certificates/frank-anthony-debate.jpg" },
      { event: "AISM Debate Competition", result: "Participation", grade: 10 },
    ],
  },
  {
    id: "school",
    title: "School",
    items: [
      { event: "IRB Scholarship", result: "Merit scholarship", grade: 9, certificate: "/certificates/irb-scholarship.jpg" },
      { event: "Interhouse Nukkad Natak", result: "1st Place", grade: 9, certificate: "/certificates/nukkad-natak.jpg" },
      { event: "Deck the Hall in Style", result: "1st Place", grade: 9, certificate: "/certificates/deck-the-hall.jpg" },
      { event: "Face Painting Competition", result: "1st Place", grade: 9 },
    ],
  },
  {
    id: "arts",
    title: "Art, writing & sport",
    items: [
      { event: "Intermediate Grade Drawing Examination", result: "Grade A", level: "State", grade: 9, certificate: "/certificates/intermediate-drawing.jpg" },
      { event: "Krida Mahotsav — Marching Band", result: "3rd Place", level: "District", grade: 9, certificate: "/certificates/krida-mahotsav.jpg" },
      { event: "Foyle Young Poets of the Year", result: "Participation", grade: 12 },
      { event: "Strings Attached", result: "Participation", grade: 9, certificate: "/certificates/strings-attached.jpg" },
    ],
  },
];

export const workshops: WorkshopEntry[] = [
  {
    event: "AI in Education",
    type: "Conducted",
    grade: 10,
    note: "Designed and led a four-hour workshop for her school's teaching staff on AI tools for the classroom.",
    certificate: "/certificates/ai-in-education-workshop.jpg",
  },
  {
    event: "Business & Finance Workshop, Podar World College",
    type: "Attended",
    grade: 9,
    note: "Investment strategy, portfolio management, asset allocation, risk assessment and corporate financial decision-making.",
    certificate: "/certificates/podar-finance-workshop.jpg",
  },
];

export const volunteer: VolunteerEntry[] = [
  { activity: "Teaching underprivileged children", hoursPerWeek: 10, weeks: 15 },
  { activity: "Selling diyas, proceeds donated to NGOs", hoursPerWeek: 16, weeks: 2 },
  { activity: "Beach clean-up drive", hoursPerWeek: 4, weeks: 1 },
];

export const volunteerHoursTotal = volunteer.reduce(
  (sum, v) => sum + v.hoursPerWeek * v.weeks,
  0
);

export const publication = {
  name: "Understanding Climate Change",
  type: "Book, published on BriBooks",
  link: "https://www.bribooks.com/bookstore/understanding-climate-change-66d362d6ef4d7/",
  blurb:
    "Written to help young readers see climate change not as a distant threat, but as an urgent issue that needs attention now.",
};

export const hobbies = ["Piano", "Drums", "Bass drum", "Flute", "Kathak", "Art", "Baking", "Coding"];

// ---------------------------------------------------------------------------
// Recommendation letters (full text shown in the viewer; PDF downloadable)
// ---------------------------------------------------------------------------

export const recommendations: RecommendationLetter[] = [
  {
    id: "principal",
    role: "Principal",
    school: "Ramniwas Bajaj English High School",
    excerpt:
      "I have witnessed her evolution into an exceptional young leader with a sharp, technology-driven mind.",
    pdf: "/letters/principal.pdf",
    paragraphs: [
      "I am writing to recommend Misha Saraf, a student of Ramniwas Bajaj English High School, for admission to your esteemed institution. She has been a student of our school right from kindergarten until class 10. As her Principal, I have witnessed her evolution into an exceptional young leader with a sharp, technology-driven mind. She has demonstrated a natural ability to lead with vision and purpose. She is someone who not only takes responsibility but elevates any project she is part of — academically, culturally, and socially. Her leadership is grounded in maturity, clarity of thought, and a genuine desire to create meaningful impact.",
      "She intends to pursue her research in Computer Science. This ambition of hers is not a recent decision but the natural extension of a mindset she has demonstrated throughout her time here — one defined by analytical rigor, curiosity about emerging technology, and a genuine desire to put technical skill in service of real-world impact.",
      "Academically, Misha has been exceptional. She was a consistent school topper, she secured an outstanding 98.8% in Grade 10 and has received the Best Student Trophy multiple times. What truly distinguishes her is her deep intellectual curiosity — she is drawn instinctively to logic, structure, and problem-solving, loves exploring subjects beyond the syllabus, seeks conceptual clarity, and approaches learning with a maturity that is rare for her age.",
      "This aptitude has expressed itself concretely in her technical pursuits. She has excelled in several coding and tech-based competitions such as Robocom, Gizmo Geeks, and Go Coderz, achieving recognition at the interschool, state, and national levels. A visionary in every sense, Misha has also taken initiative to organise and conduct a four-hour workshop for our teaching staff on the use of AI in education — a forward-thinking effort that reflected her awareness of emerging tools and her commitment to enhancing the learning ecosystem of our school by confidently leading working professionals through hands-on tools and applications. It is an unusual undertaking for a student, and it reflects both technical fluency and the kind of forward-thinking initiative that Computer Science research demands.",
      "One of her most important contributions has been her pioneering work in building a Model United Nations (MUN) culture in our school. She has chaired prestigious MUN conferences at the state, national, and international levels, and she took the initiative to introduce MUNs to our school community. She led delegations to various conferences, mentored younger students, and played a central role in conceptualising and organising our first-ever intra-school MUN, which has now become a recurring platform for developing global awareness and public-speaking skills among students.",
      "Her leadership extends seamlessly to other school activities as well. Misha has been instrumental in coordinating major events such as farewell functions, Teachers' Day celebrations, and cultural programmes. During her Scholastic Internship Programme, she impressed her mentors with her professionalism, assisting with coordination, marketing, technical tasks, and presentations. She consistently brings structure, creativity, and reliability to everything she undertakes.",
      "Her strengths also extend into the creative and analytical domain. She has published a book on understanding climate change on BriBooks, written specifically to help young leaders recognise that climate change is not a distant threat but an urgent issue requiring immediate awareness and action.",
      "Misha's dedication to social responsibility is yet another defining aspect of her personality. She has participated in beach clean-up drives where she contributed to waste collection. She helped selling handmade diyas and running a food stall, where all proceeds were donated to NGOs supporting underprivileged communities. She educated buyers about how their contributions would support ongoing welfare efforts.",
      "Beyond all these accomplishments, it is her character that truly stands out. Misha is humble, thoughtful, compassionate, and deeply committed to excellence. She always steps forward when help is needed, and she approaches every task — big or small — with sincerity and dedication. She balances academics, leadership roles, and social initiatives with remarkable discipline and grace.",
      "It is without reservation that I recommend Misha Saraf to your institution. She is a dynamic young leader with a genuine aptitude and passion for Computer Science, who has the potential to excel globally and contribute meaningfully to any community she becomes part of. I wholeheartedly endorse her.",
    ],
  },
  {
    id: "math-teacher",
    role: "Mathematics Teacher",
    school: "Ramniwas Bajaj English High School",
    excerpt:
      "I can confidently rank her among the top 10% of students I have taught in my career.",
    pdf: "/letters/mathematics-teacher.pdf",
    paragraphs: [
      "I am happy to write this letter of recommendation for Ms. Misha Saraf. Misha is an outstanding student. I was her Mathematics teacher at Ramniwas Bajaj English High School, and I can attest to the fact that she is one of the few students who has strong skills and commitment to the subject. In class, I have always seen her being excited to tackle challenging topics like Algebra and Statistics. She also loves looking at problems from different and unexpected angles, and this, in turn, helps her classmates think more critically as well. Her assignments are always detailed, and I have noticed she has a clear understanding of the fundamentals.",
      "In class tests as well as discussions, I have noticed that Misha took a very careful approach to the way she was studying the subject. She rarely left anything unchecked and often reviewed problems several times before finalizing her answers. She picks up new concepts easily, but what stands out is her eagerness to analyze them critically. In one of the tests, I posed a challenging question: A point robot moves in the plane from A = (0,0) to B = (1,0). There is a circular obstacle of radius r centered at (½, 0). The robot must move from point A to B with a path of the shortest possible arc-length that does not intersect the interior of the circle. Find the shortest path and its length for 0 < r < ½. Most students begin by guessing or sketching paths, except for Misha! She first approached me, and we discussed why the shortest collision-free path must be made of straight segments joined by a circular arc, using symmetry about the x-axis. This immediately reduced the problem to analysing a single tangency point in the upper half-plane. She then chose coordinates for the tangency point T in terms of an angle theta, rather than fixing numbers early. What stood out most was the way she framed her concepts — step-by-step. She briefly connected the geometry to ideas from optimal paths and robot planning, even though the methods she was using were still classical. I can seldom find students in class who can balance between traditional Euclidean reasoning and modern applications; this level is rare. This speaks strongly of Misha's mathematical ability and problem-solving depth.",
      "Misha also has an impressive ability to visualize how complex problems can be broken down simply into manageable terms. Quite recently, I recall assigning a challenging integration problem to the class: A robot has a prior probability p that an obstacle is present. Two conditionally independent sensors report detections: Sensor A: P(detect | obs) = 0.90, P(detect | no obs) = 0.05. Sensor B: P(detect | obs) = 0.80, P(detect | no obs) = 0.10. If both sensors detect an obstacle, find the posterior probability that the obstacle is present. She did not jump directly to try substitution like other students, but rather she worked first to find out the structure of the problem: a prior belief, two noisy sensors, and the need to update the belief after receiving evidence. She started with the assumption of conditional independence, a step missed by most students, even though it was an integral part of multi-sensor fusion. This showed me that she understood why Bayes' theorem works, and was not just memorizing its applications. She then split the argument into two likelihood cases. When the obstacle was present, she multiplied the true positive rates and obtained P(A = 1, B = 1 | obs) = 0.72. When the obstacle was absent, she calculated the joint false positive probability as 0.005. She kept the reasoning structured and easy to follow. Throughout the solution, Misha linked textbook probability to real sensing tasks. She treated belief as something that updates only when new evidence arrives. This way of thinking matters for advanced work in probability, artificial intelligence, and robotics, and it shows strong grounding in fundamentals.",
      "In summary, in my class, Misha has been an exceptional student who actively participated in all aspects of school life. I can confidently rank her among the top 10% of students I have taught in my career. She has great academic potential and is a strong character admired by her peers. I believe her passion for Mathematics will lead her to a successful career in STEM, especially in software development and coding. It is with great pleasure and confidence that I recommend her.",
    ],
  },
];
