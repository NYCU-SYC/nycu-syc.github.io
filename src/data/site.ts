// ---------------------------------------------------------------------------
// Evidence links (shared by pages)
// ---------------------------------------------------------------------------
export const links = {
  linkedin: 'https://www.linkedin.com/in/yi-chen-sun-1159872a6/',
  fdaRecord: 'https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfPMN/pmn.cfm?ID=K252190',
  nycuFda: 'https://en.cbmse.nycu.edu.tw/post_260415/',
  futexVideo: 'https://www.youtube.com/watch?v=dgG-oD6Yom4',
  futexCna: 'https://www.cna.com.tw/postwrite/eng/447082',
  futexBusinessToday: 'https://www.businesstoday.com.tw/article/category/183015/post/202609160010/',
  futexCtee: 'https://www.ctee.com.tw/news/20260915701774-430104',
  futexTechNews: 'https://technews.tw/2026/09/10/advanced-semiconductor-processes',
  ustartResults: 'https://ustart.yda.gov.tw/news/1818',
  ustartYahoo: 'https://tw.news.yahoo.com/%E6%95%99%E8%82%B2%E9%83%A8u-start-8%E7%B5%84%E6%96%B0%E5%89%B5%E5%9C%98%E9%9A%8A%E5%8B%87%E5%A5%AA%E7%99%BE%E8%90%AC%E7%8D%8E%E9%87%91-12-1%E9%A0%92%E7%8D%8E-081741858.html',
  ustartLtn: 'https://news.ltn.com.tw/news/life/breakingnews/5650348',
  ustartUdn: 'https://money.udn.com/money/story/7307/9898449',
  zgcNotice: 'https://ustart.yda.gov.tw/p/405-1000-2223,c93.php?Lang=zh-tw',
  zgcYam: 'https://n.yam.com/Article/20260618131207',
  moeCase: 'https://ssp.moe.gov.tw/cases/1387',
  fiti: 'https://fiti.stpi.niar.org.tw/global/6c4ec3cbb1334ea4b1343a86cbf39062',
  aocrVideo: 'https://www.youtube.com/watch?v=mWsgQmneuAs',
  aocr1111: 'https://www.1111.com.tw/news/jobns/155237',
  aocrYahoo: 'https://tw.news.yahoo.com/%E6%94%BE%E5%B0%84%E7%B7%9A%E9%86%AB%E5%AD%B8%E6%9C%83%E8%88%89%E8%BE%A6ai%E7%AB%B6%E8%B3%BD-%E5%85%83%E6%99%BA%E5%A4%A7%E5%AD%B8%E5%8F%8A%E4%BA%9E%E6%9D%B1%E9%86%AB%E9%99%A2%E7%A0%94%E7%A9%B6%E5%9C%98%E9%9A%8A%E6%A6%AE%E7%8D%B2%E7%AC%AC-013000326.html',
  aocrUdn: 'https://udn.com/news/story/6928/7809969',
  aocrYamInterview: 'https://n.yam.com/Article/20240408977486',
  aocrLineInterview: 'https://today.line.me/tw/v3/article/60RNV5j',
  nia21Award: 'https://innoaward.taiwan-healthcare.org/award_detail.php?REFDOCTYPID=0r4ggllnka0x43sh&num=1&REFDOCID=0sq2hwchxfqj17e7',
  nia21Line: 'https://today.line.me/tw/v3/article/gzv8kQ8',
  nia21_1111: 'https://www.1111.com.tw/news/jobns/159045',
  nia21Ctee: 'https://www.ctee.com.tw/news/20241231701786-431204',
  stancode: 'https://stancodetw.easy.co/',
  biomedicines: 'https://www.mdpi.com/2227-9059/14/7/1595',
  ieeeAmlds1: 'https://ieeexplore.ieee.org/abstract/document/11159345',
  ieeeAmlds2: 'https://ieeexplore.ieee.org/abstract/document/11159362',
  fom: 'https://www.focusonmicroscopy.org/2025-program-online/?source=pp&event_id=8024&tab=pdf&a_id=8736',
  liFuturetechPost: 'https://www.linkedin.com/feed/update/urn:li:activity:7507083660232290304/',
  liHatcherPost: 'https://www.linkedin.com/feed/update/urn:li:activity:7529617503866585089/',
  liBioAsiaPost: 'https://www.linkedin.com/feed/update/urn:li:activity:7491491652771938304/',
  futexCertificate: '/images/futuretech-award-certificate.jpg'
};

// Age is computed at build time so it never goes stale between deploys.
const birth = new Date(2002, 7, 30);
const today = new Date();
const age =
  today.getFullYear() - birth.getFullYear() -
  (today < new Date(today.getFullYear(), birth.getMonth(), birth.getDate()) ? 1 : 0);

export const siteMeta = {
  title: 'Yi-Chen Sun',
  subtitle: 'Medical AI · Research to Market',
  description:
    'Yi-Chen Sun works on medical AI in five concurrent roles: NYCU direct-entry Ph.D. researcher, Senior AI Engineer & PM at AItewan (FDA-cleared brain-tumor SaMD), CTO of NOVATERA, Technical/Medical Fellow at SparkLabs Taiwan, and StanCode instructor.',
  email: 's.chenney0830@gmail.com',
  phone: '+886 981116830',
  location: 'New Taipei City, Taiwan',
  birthdate: `August 30, 2002 (Age ${age})`,
  cvPdf: '/Yi-Chen_Sun_Resume.pdf'
};

export const navItems = [
  { href: '/', label: 'Home' },
  { href: '/publications', label: 'Publications' },
  { href: '/projects', label: 'Projects' },
  { href: '/media', label: 'Media' },
  { href: '/cv', label: 'CV' },
  { href: '/contact', label: 'Contact' }
];

// ---------------------------------------------------------------------------
// Five concurrent roles (rendered as a timeline whose bars all reach "Now")
// ---------------------------------------------------------------------------
export const concurrentRoles = [
  {
    org: 'NYCU',
    note: 'until 2027',
    role: 'Direct-Entry Ph.D. Researcher',
    start: 2024,
    focus: 'Leads LDCT/SDCT CAC, lung nodule, MRI brain tumor and CCM projects',
    color: '#1d6fb8'
  },
  {
    org: 'AItewan',
    role: 'Senior AI Engineer & Product Manager',
    start: 2024,
    focus: 'MRI brain-tumor SaMD · U.S. FDA 510(k) + TFDA cleared',
    color: '#0e7c86'
  },
  {
    org: 'NOVATERA',
    role: 'Chief Technology Officer',
    start: 2025,
    focus: 'Vision-language models for long-term-care rehabilitation · 7 paying sites',
    color: '#c0392b'
  },
  {
    org: 'StanCode',
    role: 'Instructor & AI Mentor',
    start: 2025,
    focus: 'Teaching Team · healthcare-AI student projects',
    color: '#2f855a',
    link: links.stancode
  },
  {
    org: 'SparkLabs Taiwan',
    role: 'Technical/Medical Fellow (VC)',
    start: 2026,
    focus: 'Deep-tech scouting & moat assessment',
    color: '#6b4fbb'
  }
];

export const researchInterests =
  'Research interests: medical image analysis, lesion-sensitive detection and segmentation, contrast-free MRI via knowledge distillation, and vision-language models for clinical reporting and rehabilitation.';

// Track record (home page metric cards)
export const heroHighlights = [
  {
    value: 'U.S. FDA 510(k) + TFDA',
    label: 'DeepBT Detector-Plus (K252190), co-developed as AI & system lead; in clinical use at Taipei VGH, Taichung VGH and Shin Kong Hospital.'
  },
  {
    value: '2× National Innovation Award',
    label: 'Academic Innovation Award at the 21st (2024) and 23rd (2026) editions, for appendicitis CT AI and a medical-AI workflow platform I led.'
  },
  {
    value: '2026 FutureTech Award',
    label: 'NSTC award for DeepBT A+, the brain-tumor MRI reading assistant I led: 2,500+ clinical cases, report turnaround −58%.'
  },
  {
    value: 'NT$1M Startup Award',
    label: 'U-start Merit Team (Ministry of Education) as CTO of NOVATERA; also Zhan Guo Ce runner-up and FITI Top 20 (NSTC).'
  },
  {
    value: 'AOCR Kaggle Champion',
    label: 'Team captain; 1st of ~200 teams with >92% accuracy on acute appendicitis CT, held under the Asian Oceanian Congress of Radiology.'
  },
  {
    value: '9 Papers · 4 First-Author',
    label: '5 published or accepted; first-author papers at npj Digital Medicine (IF 18.0) and Biomedical Signal Processing and Control in revision.'
  }
];

export const homeQuickFacts = [
  researchInterests,
  'Current focus: finding small brain tumors earlier for stereotactic radiosurgery (+25 pts sensitivity on <4 mm lesions) and gadolinium-free detection that uses contrast MRI only during training.',
  'Projects I lead at NYCU: LDCT/SDCT coronary artery calcium (CAC) and lung nodules, MRI brain tumors, and cerebral cavernous malformation (CCM).',
  'Translation: from research to an FDA 510(k)-cleared brain-tumor SaMD in clinical use, plus DeepBT A+ (TFDA & FDA under review).',
  'Entrepreneurship: CTO of NOVATERA, building computer-vision + VLM rehabilitation for long-term care — 14 partner institutions, 7 paying.'
];

export const homeFeatureCards = [
  {
    title: 'Five Roles at Once',
    desc: 'Ph.D. research, product engineering, a startup, venture capital and teaching run in parallel — all on one theme: medical AI.'
  },
  {
    title: 'Bench-to-Bedside Translation',
    desc: 'My systems do not stop at publication: they go through TFDA and U.S. FDA clearance and into live hospital workflows.'
  },
  {
    title: 'Methodological Rigor',
    desc: 'DBI-MambaUNet with a size-aware focal Tversky loss for micro-lesions, a validated cascade that cuts false positives per exam by 94.5%, and contrast-free inference via knowledge distillation.'
  },
  {
    title: 'Founder & Field Builder',
    desc: 'Beyond building NOVATERA’s on-device AI, I source and negotiate care-site partnerships; a 3-month pilot cut therapist documentation time from 43 to 28 minutes.'
  }
];

export const education = [
  {
    school: 'National Yang Ming Chiao Tung University (NYCU), Taiwan',
    period: '2024–2027 (expected)',
    degree: 'Direct-Entry Ph.D. Program, Institute of Biophotonics',
    detail: 'GPA: 4.11 / 4.30'
  }
];

export const experience = [
  {
    org: 'National Yang Ming Chiao Tung University, Institute of Biophotonics',
    role: 'Direct-Entry Ph.D. Researcher | Advisor: Prof. Yu-Te Wu',
    period: '2024–2027 (expected)',
    bullets: [
      'Leading AI projects on LDCT/SDCT coronary artery calcium (CAC) and lung nodules, MRI brain tumors, and cerebral cavernous malformation (CCM).',
      '<strong>+25 pts sensitivity on &lt;4 mm lesions</strong> (38.8% → 63.8%) with my DBI-MambaUNet + Size-Aware Focal Tversky Loss.',
      'Built brain-tumor AI for stereotactic radiosurgery planning on <strong>11,000+ MRI exams</strong> from two medical centers.',
      '<strong>Fewer false alarms:</strong> a validated cascade cuts false positives per exam by 94.5% (3.81 → 0.21) and types each lesion.',
      '<strong>Gadolinium-free detection</strong> (ongoing): contrast MRI is used only in training, so the model reads non-contrast scans.'
    ]
  },
  {
    org: 'AItewan BioMedical Technology (NYCU spin-off)',
    role: 'Senior AI Engineer & Product Manager',
    period: '2024–Present',
    bullets: [
      'Building MRI brain-tumor SaMD (software as a medical device), from lab research to FDA clearance and hospital use.',
      `<strong>U.S. FDA 510(k) K252190 + TFDA cleared</strong> — DeepBT Detector-Plus (co-developer, AI & system lead), in use at Taipei VGH, Taichung VGH and Shin Kong Hospital. <a href="${links.fdaRecord}" target="_blank" rel="noopener noreferrer">FDA record ↗</a>`,
      `<strong>Led DeepBT A+</strong>, an MRI reading assistant unifying lesion analysis and report generation: 2,500+ clinical cases, report turnaround −58%; <strong>2026 FutureTech Award</strong>; TFDA &amp; FDA under review. <a href="${links.futexVideo}" target="_blank" rel="noopener noreferrer">Video ↗</a>`,
      '<strong>Led a medical-AI workflow platform</strong> that turns brain-tumor images into finished reports — 23rd National Innovation Award.'
    ]
  },
  {
    org: 'NOVATERA — AI rehabilitation for long-term care',
    role: 'Chief Technology Officer (CTO)',
    period: '2025–Present',
    bullets: [
      'Computer-vision + VLM rehabilitation for long-term-care day centers, using one RGB camera — no wearables.',
      '<strong>Built the on-device AI:</strong> vision-language models for real-time posture guidance, motion tracking and auto reports.',
      'Also <strong>sourced and negotiated care sites</strong>: 14 partner institutions, 7 paying; NT$687K revenue in the first 4 months.',
      '<strong>3-month pilot:</strong> therapist documentation time 43 → 28 min (−35%); therapist satisfaction 4.3 / 5.',
      `<strong>NT$1M U-start Merit Team</strong> · Zhan Guo Ce runner-up · FITI Top 20 · MOE success case. <a href="${links.ustartYahoo}" target="_blank" rel="noopener noreferrer">News ↗</a>`
    ]
  },
  {
    org: 'SparkLabs Taiwan (venture capital)',
    role: 'Technical/Medical Fellow',
    period: '2026–Present',
    bullets: ['Deep-tech scouting and moat assessment of startups.']
  },
  {
    org: 'StanCode Programming Education Institute',
    role: 'Instructor & AI Mentor (Teaching Team)',
    period: '2025–Present',
    bullets: [
      'Mentored student teams in translating computer vision and LLM concepts into practical, healthcare-oriented AI systems.'
    ],
    link: links.stancode,
    linkLabel: 'StanCode Teaching Team'
  },
  {
    org: 'AOCR Kaggle AI Challenge · YZU MISLab × Far Eastern Memorial Hospital',
    role: 'Team Captain',
    period: '2023–2024',
    bullets: [
      '1st of ~200 teams (>92% accuracy) on acute appendicitis CT, leading to the 21st National Innovation Award and a Taiwan patent.'
    ]
  },
  {
    org: 'Omniguider Inc. (Foxconn)',
    role: 'Deep Learning Intern',
    period: '2023–2024',
    bullets: [
      'Built exhibit-specific generative imaging with ControlNet and LoRA — Excellence Award, AI Application Challenge (Ministry of Digital Affairs).'
    ]
  },
  {
    org: 'National Chung-Shan Institute of Science and Technology',
    role: 'Research Intern',
    period: '2022–2023',
    bullets: [
      'Built cGAN-based synthetic data and RGB→infrared translation workflows for drone vision.'
    ]
  }
];

export const journalManuscripts = [
  {
    venue: 'npj Digital Medicine',
    impact: '18.0',
    authorship: '1st author',
    status: 'In Revision',
    title:
      'DBI-MambaUNet with Size-Aware Focal Tversky Loss for Brain Tumor Detection in SRS-Related MRI: A Retrospective Internal Evaluation'
  },
  {
    venue: 'Biomedical Signal Processing and Control',
    impact: '5.7',
    authorship: '1st author',
    status: 'In Revision',
    title:
      'False-positive reduction and lesion-level tumor-type assignment in contrast-enhanced brain MRI: a validation-locked deep-learning cascade'
  },
  {
    venue: 'Biomedicines',
    impact: '4.5',
    authorship: '4th author',
    status: 'Published 2026, 14(7):1595',
    title:
      'AI-Assisted Brain Tumor MRI Reporting and Treatment-Planning Segmentation: A Retrospective Paired Workflow Evaluation',
    link: links.biomedicines
  },
  {
    venue: 'Journal of Medical Systems',
    impact: '5.7',
    authorship: '3rd author',
    status: 'Under Peer Review',
    title:
      'A Standards-Based, PACS-Native AI Integration Architecture for Background Inference in Radiology Reporting Workflows'
  },
  {
    venue: 'Computer Methods and Programs in Biomedicine',
    impact: '4.8',
    authorship: 'Co-author',
    status: 'Under Peer Review',
    title:
      'Fully Automated AI-Based Aortic Quantification System for Opportunistic Aneurysm Detection on Routine CT'
  }
];

export const conferencePresentations = [
  {
    venue: 'IEEE AMLDS 2025',
    authorship: '1st author',
    title: 'Lightweight 3D IDC-MambaUNet for Multi-Modal MRI Brain Tumor Segmentation Using Multi-Resolution Ensemble',
    note: 'Oral Presentation',
    link: links.ieeeAmlds1
  },
  {
    venue: 'FOM 2025',
    authorship: '1st author',
    title: 'Enhancing 3D MRI Brain Tumor Segmentation with Dynamic Window Filtering',
    note: 'Oral Presentation',
    link: links.fom
  },
  {
    venue: 'MIDL 2026',
    authorship: '2nd author',
    title: 'Lesion-Wise False-Positive Reduction for Brain Tumor Candidate Masks via Mask-Gated 2.5D Spatiotemporal Classification',
    note: 'Poster (accepted)'
  },
  {
    venue: 'IEEE AMLDS 2025',
    authorship: '2nd author',
    title: 'Real-time and Continuous AI Inference Workflow with PACS Integration',
    note: 'Oral Presentation',
    link: links.ieeeAmlds2
  }
];

const ext = (url: string, text: string) =>
  `<a href="${url}" target="_blank" rel="noopener noreferrer">${text} ↗</a>`;

export const honors = [
  '<strong>23rd National Innovation Award</strong> — Academic Innovation Award (2026), lead developer: <em>Medical-AI Workflow Integration Platform: Intelligent Assistance from Brain-Tumor Image Analysis to Report Generation</em>.',
  `<strong>2026 FutureTech Award</strong>, National Science and Technology Council — lead developer &amp; named awardee: <em>DeepBT A+ Intelligent Brain Tumor MRI Reading Assistance System</em>. ${ext(links.futexCertificate, 'Certificate')} ${ext(links.futexVideo, 'Video')} ${ext(links.futexCtee, 'News')}`,
  `<strong>U-start Merit Team, Manufacturing Technology — NT$1,000,000</strong> (Ministry of Education, 2026), NOVATERA. ${ext(links.ustartUdn, 'News')}`,
  `<strong>Runner-up, 21st Zhan Guo Ce National Innovation &amp; Entrepreneurship Competition</strong> (2026), NOVATERA. ${ext(links.zgcNotice, 'Notice')}`,
  `<strong>FITI — From IP to IPO Program</strong> (NSTC): Top 20 (2026) · passed preliminary round (2025), NOVATERA. ${ext(links.fiti, 'Results')}`,
  `<strong>21st National Innovation Award</strong> — Academic Innovation Award (2024): <em>AI-Assisted Diagnosis System for Acute Appendicitis on Abdominal CT</em>. ${ext(links.nia21Award, 'Award page')}`,
  '<strong>Champion, AOCR Kaggle AI Challenge</strong> (2024), Asian Oceanian Congress of Radiology.',
  '<strong>Excellence Award, AI Application Challenge</strong> (2024), Ministry of Digital Affairs.',
  'Shortlisted for the <strong>Smart Innovation Award</strong>.'
];

export const innovation = [
  `Co-developed <strong>AItewan DeepBT Detector-Plus</strong> (AI &amp; system lead): U.S. FDA 510(k) K252190 and TFDA cleared; in clinical use at three medical centers. ${ext(links.fdaRecord, 'FDA record')}`,
  '<strong>Led DeepBT A+</strong> (lesion analysis + report generation): 2,500+ clinical cases, report turnaround −58%; 2026 FutureTech Award; TFDA &amp; FDA under review.',
  'Led a <strong>medical-AI workflow integration platform</strong> from brain-tumor image analysis to report generation — 23rd National Innovation Award.',
  'CTO of <strong>NOVATERA</strong>: on-device VLM rehabilitation in paid use at long-term-care sites.'
];

export const patents = [
  'Implementation Method and Electronic Device for Acute Appendicitis Assisted Diagnosis: Taiwan utility patent granted; Taiwan invention patent pending.',
  'System and Method for Multimodal Language Models in Medical Imaging Diagnostic Assistance: Taiwan and U.S. invention patents pending.'
];

export const skills = {
  programming: ['Python', 'PyTorch', 'MONAI', 'nnU-Net', 'Git', 'DICOM SEG/SR', 'PACS integration'],
  methods: [
    '3D segmentation & detection',
    'Mamba architectures',
    'Knowledge distillation',
    'Vision-language models',
    'RAG',
    'GANs',
    'Diffusion models'
  ],
  evaluation:
    'Model evaluation with lesion-wise sensitivity, FP/scan, FROC/CPM, precision and F1, plus regulatory documentation for FDA 510(k).',
  languages: 'Mandarin Chinese (native), English (working proficiency)'
};

// Media & interviews (rendered on /media)
export const media = [
  { type: 'Video', title: 'Personal interview on the AOCR-winning AI', links: [{ text: 'YouTube', url: links.aocrVideo }] },
  { type: 'Video', title: '2026 FutureTech Award — DeepBT A+', links: [{ text: 'YouTube', url: links.futexVideo }] },
  { type: 'Video', title: 'Talk at BIO Asia–Taiwan 2026 — DeepBT Detector A+', links: [{ text: 'LinkedIn', url: links.liBioAsiaPost }] },
  {
    type: 'Interview',
    title: 'Taoyuan e-News interview as AOCR team captain',
    links: [
      { text: 'Yam', url: links.aocrYamInterview },
      { text: 'LINE TODAY', url: links.aocrLineInterview }
    ]
  },
  {
    type: 'News',
    title: '2026 FutureTech Award — DeepBT A+',
    links: [
      { text: 'CNA', url: links.futexCna },
      { text: 'Business Today', url: links.futexBusinessToday },
      { text: 'Commercial Times', url: links.futexCtee },
      { text: 'TechNews', url: links.futexTechNews }
    ]
  },
  {
    type: 'News',
    title: 'NOVATERA wins the NT$1M U-start award',
    links: [
      { text: 'Yahoo News', url: links.ustartYahoo },
      { text: 'Liberty Times', url: links.ustartLtn },
      { text: 'Economic Daily News', url: links.ustartUdn }
    ]
  },
  {
    type: 'News',
    title: 'NOVATERA, runner-up at the 21st Zhan Guo Ce competition',
    links: [
      { text: 'U-start notice', url: links.zgcNotice },
      { text: 'Yam', url: links.zgcYam }
    ]
  },
  {
    type: 'News',
    title: 'DeepBT receives U.S. FDA 510(k) clearance',
    links: [
      { text: 'NYCU', url: links.nycuFda },
      { text: 'FDA record', url: links.fdaRecord }
    ]
  },
  {
    type: 'News',
    title: 'AOCR 2024 champion',
    links: [
      { text: 'Yahoo News', url: links.aocrYahoo },
      { text: 'udn', url: links.aocrUdn },
      { text: '1111', url: links.aocr1111 }
    ]
  },
  {
    type: 'News',
    title: '21st National Innovation Award',
    links: [
      { text: 'LINE TODAY', url: links.nia21Line },
      { text: '1111', url: links.nia21_1111 },
      { text: 'Commercial Times', url: links.nia21Ctee }
    ]
  },
  { type: 'Profile', title: 'StanCode Teaching Team', links: [{ text: 'StanCode', url: links.stancode }] },
  { type: 'Profile', title: 'NOVATERA on the MOE success-case platform', links: [{ text: 'MOE', url: links.moeCase }] }
];

export const projectCards = [
  {
    title: 'DeepBT A+: Brain-Tumor MRI Reading Assistant',
    org: 'AItewan BioMedical Technology Inc.',
    role: 'Lead Developer · Senior AI Engineer & PM',
    period: 'Ongoing',
    tag: '2026 FutureTech Award',
    links: [
      { url: links.futexVideo, text: 'Award Video' },
      { url: links.futexCna, text: 'CNA' },
      { url: links.futexBusinessToday, text: 'Business Today' }
    ],
    desc:
      'A clinical-workflow system that unifies multi-task lesion analysis and report generation for brain-tumor MRI. It has supported 2,500+ clinical cases and cut report turnaround time by 58%, and is deployed for clinical use at Taipei Veterans General Hospital, Taichung Veterans General Hospital, and Shin Kong Wu Ho-Su Memorial Hospital.',
    bullets: [
      'Led development as lead developer; named awardee of the 2026 NSTC FutureTech Award.',
      'TFDA and U.S. FDA applications under review.',
      'Combines lesion detection, classification and structured report generation in one workflow.'
    ]
  },
  {
    title: 'AItewan DeepBT Detector-Plus',
    org: 'AItewan BioMedical Technology Inc.',
    role: 'Co-developer · AI & System Lead',
    period: 'Ongoing',
    tag: 'U.S. FDA 510(k) + TFDA',
    links: [
      { url: links.fdaRecord, text: 'FDA Record' },
      { url: links.nycuFda, text: 'NYCU News' }
    ],
    desc:
      'A brain-tumor MRI SaMD that has achieved both U.S. FDA 510(k) (K252190) and Taiwan FDA clearance. It is in clinical use at Taipei Veterans General Hospital, Taichung Veterans General Hospital, and Shin Kong Wu Ho-Su Memorial Hospital.',
    bullets: [
      'Took the system through TFDA and U.S. FDA regulatory pipelines.',
      'Led product integration and deployment across multiple medical centers in Taiwan.',
      'Bridged medical AI research and real-world clinical use.'
    ]
  },
  {
    title: 'DBI-MambaUNet + SA-FTL for Small Brain-Tumor Detection',
    org: 'National Yang Ming Chiao Tung University, Institute of Biophotonics',
    role: 'Ph.D. Researcher · 1st author',
    period: '2024–Present',
    tag: 'npj Digital Medicine (in revision)',
    desc:
      'A method-development project for multi-subtype brain-tumor detection in stereotactic radiosurgery MRI, focused on lesions smaller than 4 mm.',
    bullets: [
      '+25 pts sensitivity on <4 mm lesions (38.8% → 63.8%).',
      'Two-center cohort of 11,000+ paired MRI exams.',
      'First-author manuscript in revision at npj Digital Medicine (IF 18.0).'
    ]
  },
  {
    title: 'Lesion-Wise False-Positive Reduction Cascade',
    org: 'National Yang Ming Chiao Tung University, Institute of Biophotonics',
    role: 'Ph.D. Researcher · 1st author',
    period: '2025–Present',
    tag: 'BSPC (in revision) · MIDL 2026',
    desc:
      'A validation-locked deep-learning cascade that removes false-positive candidates from brain-tumor detections and assigns a tumor type to each remaining lesion.',
    bullets: [
      'Cuts false positives per exam by 94.5% (3.81 → 0.21) on a temporal test set.',
      'Five-class lesion typing: neuroma, meningioma, metastasis, glioma, pituitary adenoma.',
      'Journal version in revision at BSPC; related paper accepted as a MIDL 2026 poster.'
    ]
  },
  {
    title: 'NOVATERA: AI Rehabilitation for Long-Term Care',
    org: 'NOVATERA',
    role: 'Chief Technology Officer (CTO)',
    period: '2025–Present',
    tag: 'Startup · NT$1M U-start Award',
    links: [
      { url: links.ustartYahoo, text: 'U-start News' },
      { url: links.zgcNotice, text: 'Zhan Guo Ce' },
      { url: links.moeCase, text: 'MOE Success Case' }
    ],
    desc:
      'Computer-vision + vision-language-model rehabilitation for long-term-care day centers. It runs on existing devices with one RGB camera — no wearables — giving real-time posture guidance, motion tracking and automatic training reports.',
    bullets: [
      'Built the on-device AI and also sourced and negotiated care-site partnerships: 14 partner institutions, 7 paying.',
      'NT$687K revenue in the first four months; a 3-month pilot cut therapist documentation time from 43 to 28 minutes.',
      'NT$1M U-start Merit Team · Zhan Guo Ce runner-up · FITI Top 20 · MOE success case.'
    ]
  },
  {
    title: 'Medical-AI Workflow Integration Platform',
    org: 'NYCU × AItewan BioMedical Technology',
    role: 'Lead Developer',
    period: 'Ongoing',
    tag: '23rd National Innovation Award',
    desc:
      'A workflow platform that carries brain-tumor MRI from image analysis to a finished report, built to fit into everyday radiology work.',
    bullets: [
      'Won the 23rd National Innovation Award — Academic Innovation Award.',
      'Integrates lesion analysis and report generation into a single clinical workflow.'
    ]
  },
  {
    title: 'Gadolinium-Free Brain-Tumor Detection',
    org: 'National Yang Ming Chiao Tung University, Institute of Biophotonics',
    role: 'Ph.D. Researcher',
    period: 'Ongoing',
    tag: 'Flagship Research',
    desc:
      'Ongoing research that uses contrast-enhanced MRI only as training-time privileged information, so detection can run on non-contrast T1W + T2W scans and spare patients the contrast agent.',
    bullets: [
      'Knowledge-distillation approach evaluated with lesion-wise, low-FP FROC metrics.',
      'Aims to connect non-contrast detection with constrained VLM-based report generation.',
      'Outputs standardized as PACS-compatible DICOM SEG/SR.'
    ]
  },
  {
    title: 'AOCR Kaggle AI Challenge: Acute Appendicitis CT',
    org: 'YZU MISLab × Far Eastern Memorial Hospital',
    role: 'Team Captain',
    period: '2023–2024',
    tag: 'Challenge Champion',
    links: [
      { url: links.aocrVideo, text: 'Watch Interview' },
      { url: links.aocr1111, text: 'News' },
      { url: links.nia21Award, text: 'National Innovation Award' }
    ],
    desc:
      'A 3D CT framework for acute appendicitis built for the AOCR Kaggle AI Challenge, combining 2D and 3D segmentation to flag inflamed appendices and key slices.',
    bullets: [
      'Ranked 1st of ~200 teams with >92% accuracy.',
      'Led to the 21st National Innovation Award and a Taiwan utility patent.',
      'Covered by Yahoo News, udn and Taoyuan e-News.'
    ]
  },
  {
    title: 'Medication Delivery Robot Mentoring Project',
    org: 'StanCode (founded by a Stanford alumnus, John Stephens Jr. Memorial Award recipient)',
    role: 'AI Mentor',
    period: '2025–Present',
    tag: 'Mentoring',
    links: [
      { url: 'https://www.youtube.com/watch?v=lPeceu56i4k&list=PL6FWNwNPGCE69AJLQYmrkA5wPXB5dv64O&index=7', text: 'YouTube' },
      { url: 'https://www.instagram.com/p/DNsYJpS2N-B/', text: 'Instagram' }
    ],
    desc:
      'A healthcare-oriented student project focused on a smart medication delivery robot, combining computer vision, sensor fusion, autonomous navigation, and practical system design thinking.',
    bullets: [
      'Mentored students on technical framing, presentation logic, and healthcare application planning.',
      'Supported system design discussions and evaluation planning.',
      'Highlighted safe, practical, and deployment-oriented AI thinking in student work.'
    ]
  },
  {
    title: 'Medication Recognition App with RAG + LLM',
    org: 'StanCode (founded by a Stanford alumnus, John Stephens Jr. Memorial Award recipient)',
    role: 'AI Mentor',
    period: '2025–Present',
    tag: 'Mentoring',
    links: [
      { url: 'https://www.youtube.com/watch?v=n2ykwdTq7KY&list=PL6FWNwNPGCE69AJLQYmrkA5wPXB5dv64O&index=4', text: 'YouTube' },
      { url: 'https://www.instagram.com/p/DWRLzIhlDKH/', text: 'Instagram' }
    ],
    desc:
      'A mentoring project on medication recognition and grounded medical education using image detection/classification, retrieval-augmented generation, and large language models.',
    bullets: [
      'Guided system architecture design for image-based medication recognition.',
      'Emphasized grounded responses, citation-aware output, and hallucination risk reduction.',
      'Strengthened the practical educational value of the project in healthcare settings.'
    ]
  },
  {
    title: 'Interactive Museum Imaging System',
    org: 'Omniguider Inc. (Foxconn)',
    role: 'Deep Learning Intern',
    period: '2023–2024',
    tag: 'Generative Vision',
    desc:
      'An interactive generative imaging system for the National Museum of Natural Science that used controllable diffusion workflows and exhibit-specific adaptation to improve realism and user interaction.',
    bullets: [
      'Implemented ControlNet and LoRA for controllable, exhibit-aware generation.',
      'Integrated diffusion-based generation and face-swapping techniques to improve realism.',
      'Received the Excellence Award in the AI Application Challenge hosted by Taiwan’s Ministry of Digital Affairs.'
    ]
  },
  {
    title: 'Drone Vision Data Expansion and RGB-to-Infrared Translation',
    org: 'National Chung-Shan Institute of Science and Technology',
    role: 'Research Intern',
    period: '2022–2023',
    tag: 'Aerial Vision',
    desc:
      'A cGAN-based synthetic data and cross-modal translation project addressing data scarcity and hardware-constrained deployment in drone vision scenarios.',
    bullets: [
      'Built synthetic image generation workflows for data expansion and downstream detection support.',
      'Worked on RGB-to-infrared translation to strengthen cross-modal perception in restricted environments.',
      'Focused on practical deployment constraints for aerial computer vision systems.'
    ]
  }
];

// Photo highlights (rendered on /media and the home page)
export const gallery = [
  { src: '/images/futuretech-award-stage.jpg', caption: '2026 FutureTech Award ceremony — the DeepBT A+ team on stage', link: links.liFuturetechPost },
  { src: '/images/futuretech-award-booth.jpg', caption: 'With the FutureTech Award at the 2026 FutureTech Pavilion (FUTEX)', link: links.liFuturetechPost },
  { src: '/images/futuretech-award-certificate.jpg', caption: 'FutureTech Award certificate, NSTC — September 19, 2026', link: links.futexCertificate },
  { src: '/images/bio-asia-2026-talk.jpg', caption: 'Presenting DeepBT Detector A+ at BIO Asia–Taiwan 2026', link: links.liBioAsiaPost },
  { src: '/images/project-hatcher-showcase.jpg', caption: 'Project Hatcher × SparkLabs Taiwan Global Showcase Day, Nov 19, 2026', link: links.liHatcherPost },
  { src: '/images/futuretech-award-with-advisor.jpg', caption: 'Celebrating the FutureTech Award in the Bio-tech & Medical Devices zone', link: links.liFuturetechPost }
];
