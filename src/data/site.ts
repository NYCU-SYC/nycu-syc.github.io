export const siteMeta = {
  title: 'Yi-Chen Sun',
  subtitle: 'Academic Website',
  description:
    'Academic website for Yi-Chen Sun featuring research in computer vision, medical image analysis, multimodal AI, and brain tumor clinical report generation.',
  email: 's.chenney0830@gmail.com',
  phone: '+886 981116830',
  location: 'New Taipei City, Taiwan',
  birthdate: 'August 30, 2002 (Age 23)',
  cvPdf: '/Yi-Chen_Sun_MIT_Stanford_CS_AI_CV.pdf'
};

export const navItems = [
  { href: '/', label: 'Home' },
  { href: '/publications', label: 'Publications' },
  { href: '/projects', label: 'Projects' },
  { href: '/cv', label: 'CV' },
  { href: '/contact', label: 'Contact' }
];

export const researchInterests =
  'Health Research: Bridging fundamental medical image analysis, multimodal vision-language systems, and rigorous clinical translational workflows to deploy trustworthy AI in oncology and radiology.';

export const heroHighlights = [
  { value: 'AOCR Kaggle Champion', label: 'AOCR (Top-3 Radiology Conference) Kaggle AI Champion, National Innovation Award Recipient, and featured in an exclusive interview.' },
  { value: 'CTO & Startup', label: 'Served as startup CTO, participating in the FITI program and selected as a Model Success Case by MOE Taiwan.' },
  { value: 'Patents & IP', label: 'Hold 1 granted Taiwan utility patent and 3 pending invention patents (Taiwan & U.S.) for end-to-end medical AI systems.' },
  { value: 'TFDA & U.S. FDA', label: 'Contributed to Brain Tumor SaMD operations, securing TFDA approval with U.S. FDA clearance under review.' },
  { value: 'GPA: 4.11 / 4.30', label: 'Achieved a near-perfect GPA in NYCU\'s highly competitive Direct-Entry Ph.D. program, balancing rigorous coursework with pioneering medical AI research.' },
  { value: '7 Publications', label: 'Authored 3 journal papers (with 1st-author at MedIA IF=11.8 under review) and 4 accepted conference papers (all Oral Presentations).' }
];


export const homeQuickFacts = [
  researchInterests,
  'Current Focus: Advancing Medical AI by translating lesion-sensitive segmentation to clinical use, bridging the gap between algorithm development and real-world clinical deployment.',
  'Technical Core: 3D MRI brain tumor segmentation, Non-contrast MRI analysis using knowledge distillation, and structurally constrained VLM-based report generation.',
  'Academic Rigor: Submitted a first-author fundamental manuscript to Medical Image Analysis (IF=11.8) during the first year of a direct-entry Ph.D. program, alongside multiple accepted Oral Presentations.',
  'Translational Scale: Led the development of end-to-end AI systems that have already successfully navigated Taiwan FDA (TFDA) regulatory pipelines and are actively deployed in top-tier medical centers.'
];

export const homeFeatureCards = [
  {
    title: 'Bench-to-Bedside Translation',
    desc: 'Deeply committed to Health Research that scales. My systems do not stop at paper publication; they are built for regulatory clearance (TFDA/FDA) and active integration into live medical workflows.'
  },
  {
    title: 'Methodological Rigor',
    desc: 'Innovating at the foundation of Medical AI: developing DBI-MambaUNet for micro-lesion sensitivity and creating contrast-free inference frameworks using advanced knowledge distillation.'
  },
  {
    title: 'Recognized Leadership',
    desc: 'Demonstrated capacity to orchestrate health tech projects—ranging from serving as CTO of an AI rehab platform to winning the prestigious AOCR Kaggle AI Challenge.'
  },
  {
    title: 'Multimodal Clinical Synthesis',
    desc: 'Pioneering end-to-end integration that goes beyond imaging masks to generate clinically sound, hallucination-resistant structured radiology reports via constrained LLMs.'
  }
];

export const education = [
  {
    school: 'National Yang Ming Chiao Tung University (NYCU), Taiwan',
    period: '2024–Present',
    degree: 'Direct-Entry Ph.D. Program, Institute of Biophotonics',
    detail: 'Current GPA: 4.11 / 4.30'
  },
  {
    school: 'Yuan Ze University, Taiwan',
    period: '2020–2024',
    degree: 'B.S., Department of Electrical Engineering',
    detail: ''
  }
];

export const experience = [
  {
    org: 'National Yang Ming Chiao Tung University, Institute of Biophotonics',
    role: 'Ph.D. Researcher | Advisor: Prof. Yu-Te Wu',
    period: '2024–Present',
    bullets: [
      'Focus: Knowledge distillation, MambaUNet architectures, and fully automated brain tumor SRS clinical systems achieving TFDA clearance.'
    ]
  },
  {
    org: 'NOVATERA (ICF Smart AI Rehabilitation System)',
    role: 'Chief Technology Officer (CTO)',
    period: '2025–2026',
    bullets: [
      'Led technical strategy and translational deployment for an AI-assisted home rehabilitation platform, selected as an MOE Model Success Case.'
    ]
  },
  {
    org: 'StanCode Programming Education Institute',
    role: 'Instructor & AI Poster Mentor',
    period: '2025–2026',
    bullets: [
      'Mentored student teams in translating fundamental computer vision and LLM concepts into practical, healthcare-oriented AI systems as an official instructor.'
    ],
    link: 'https://stancodetw.easy.co/',
    linkLabel: 'Visit StanCode Website'
  },
  {
    org: 'AOCR Kaggle AI Challenge Project',
    role: 'Research Team Leader',
    period: '2023–2024',
    bullets: [
      'Developed an acute appendicitis 3D CT segmentation framework, securing the championship and the 21st National Innovation Award.'
    ]
  },
  {
    org: 'Omniguider Inc.',
    role: 'Research / Development Project | Team Leader',
    period: '2023–2024',
    bullets: [
      'Implemented exhibit-specific generative imaging systems via ControlNet and LoRA, winning the national AI Application Challenge.'
    ]
  },
  {
    org: 'National Chung-Shan Institute of Science and Technology',
    role: 'Research Project Intern / Member',
    period: '2022–2023',
    bullets: [
      'Built cGAN-based synthetic image generation workflows to resolve data scarcity constraints in edge deployment environments.'
    ]
  }
];

export const journalManuscripts = [
  {
    venue: 'Medical Image Analysis',
    impact: '11.8',
    authorship: '1st author',
    status: 'Under Peer Review',
    title:
      'DBI-MambaUNet with Size-Aware Focal Tversky Loss: A Holistic Framework for Multi-Subtype Brain Tumor Micro-Lesion Segmentation in Stereotactic Radiosurgery.'
  },
  {
    venue: 'Journal of Medical Systems',
    impact: '5.7',
    authorship: '3rd author',
    status: 'Under Peer Review',
    title:
      'A Standards-Based, PACS-Native AI Integration Architecture for Background Inference in Radiology Reporting Workflows.'
  },
  {
    venue: 'Computer Methods and Programs in Biomedicine',
    impact: '4.8',
    authorship: 'Co-author',
    status: 'Under Peer Review',
    title:
      'Fully Automated AI-Based Aortic Quantification System for Opportunistic Aneurysm Detection on Routine CT.'
  }
];

export const conferencePresentations = [
  {
    venue: 'FOM 2025',
    authorship: '1st author',
    title: 'Enhancing 3D MRI Brain Tumor Segmentation with Dynamic Window Filtering.',
    note: 'Oral Presentation',
    link: 'https://www.focusonmicroscopy.org/2025-program-online/?source=pp&event_id=8024&tab=pdf&a_id=8736'
  },
  {
    venue: 'IEEE AMLDS 2025',
    authorship: '1st author',
    title: 'Lightweight 3D IDC-MambaUNet for Multi-Modal MRI Brain Tumor Segmentation Using Multi-Resolution Ensemble.',
    note: 'Oral Presentation',
    link: 'https://ieeexplore.ieee.org/abstract/document/11159345'
  },
  {
    venue: 'IEEE AMLDS 2025',
    authorship: '2nd author',
    title: 'Real-time and Continuous AI Inference Workflow with PACS Integration.',
    note: 'Oral Presentation',
    link: 'https://ieeexplore.ieee.org/abstract/document/11159362'
  },
  {
    venue: 'IEEE AMLDS 2026',
    authorship: '2nd author',
    title: 'Lesion-Wise False-Positive Reduction for Brain Tumor Candidate Masks in Multi-Modal MRI via Mask-Gated 2.5D Spatiotemporal Classification.',
    note: 'Oral Presentation'
  }
];

export const honors = [
  '<strong>Champion, AOCR Kaggle AI Challenge</strong>, held under the Asian Oceanian Congress of Radiology (AOCR), one of the three major international radiology conferences.',
  '<strong>21st National Innovation Award</strong> (Academic Innovation Award), Taiwan.',
  '<strong>Served as startup CTO</strong>, participating in the FITI program and selected as a <strong>Model Success Case by MOE Taiwan</strong>.',
  '<strong>Winner, AI Application Competition</strong>, Digital Industry Administration, Taiwan.',
  'Shortlisted for the <strong>Smart Innovation Award</strong>.',
  'Served as an <strong>Instructor and AI Poster Mentor</strong> at the StanCode Programming Education Institute, leading student teams in hands-on AI project deployments.'
];

export const innovation = [
  'Co-developed AItewan DeepBT Detector–Plus, with TFDA medical device approval obtained and U.S. FDA application pending.',
  'Independently developed AItewan DeepBT Detector–A Plus, with TFDA and U.S. FDA medical device applications pending.'
];

export const patents = [
  'Implementation Method and Electronic Device for Acute Appendicitis Assisted Diagnosis: Taiwan utility patent granted; Taiwan invention patent pending.',
  'System and Method for Multimodal Language Models in Medical Imaging Diagnostic Assistance: Taiwan and U.S. invention patents pending.'
];

export const skills = {
  programming: ['Python', 'PyTorch', 'MONAI', 'nnUNet', 'Git'],
  methods: [
    'Computer vision',
    '3D segmentation',
    'Multimodal learning',
    'Knowledge distillation',
    'GANs',
    'Diffusion models',
    'Vision-language modeling'
  ],
  evaluation: 'Model evaluation with lesion-wise sensitivity, precision, F1, FP/scan, and clinically oriented analysis.',
  languages: 'Mandarin Chinese (native), English (professional working proficiency)'
};

export const projectCards = [
  {
    title: 'End-to-End Non-Contrast Brain Tumor SRS Clinical AI System',
    org: 'National Yang Ming Chiao Tung University, Institute of Biophotonics',
    role: 'Ph.D. Researcher',
    period: '2024–Present',
    tag: 'Flagship Research',
    desc:
      'An integrated research program centered on brain tumor stereotactic radiosurgery. It features an advanced pipeline combining lesion-sensitive segmentation, quantitative MRI analysis, and constrained VLM-based report generation—all enabled on non-contrast MRI via knowledge distillation.',
    bullets: [
      'Utilizes knowledge distillation to successfully detect and segment brain tumor lesions directly from non-contrast MRI scans.',
      'Integrates non-contrast MRI lesion detection into a constrained vision-language system to automate clinically grounded report generation.',
      'Encompasses core Ph.D. work on DBI-MambaUNet and SA-FTL while standardizing outputs into PACS-compatible DICOM SEG/SR.'
    ]
  },
  {
    title: 'DBI-MambaUNet + SA-FTL for Micro-Lesion Segmentation',
    org: 'National Yang Ming Chiao Tung University, Institute of Biophotonics',
    role: 'Ph.D. Researcher',
    period: '2024–Present',
    tag: 'Method Development',
    desc:
      'A dedicated method-development project for multi-subtype brain tumor micro-lesion analysis in stereotactic radiosurgery, with explicit focus on improving lesion sensitivity for small lesions.',
    bullets: [
      'Core manuscript currently under review at Medical Image Analysis.',
      'Designed to improve sensitivity for sub-4 mm lesions while maintaining clinical relevance.',
      'Represents the most method-centric part of the current Ph.D. work.'
    ]
  },
  {
    title: 'AItewan DeepBT Detector–Plus',
    org: 'AItewan BioMedical Technology Inc.',
    role: 'Senior AI Engineer & Product Manager',
    period: 'Ongoing',
    tag: 'Medical AI Product',
    desc:
      'A clinically oriented brain tumor AI product successfully transitioning from research to clinical validation. It has obtained Taiwan FDA (TFDA) approval and is currently in the active application process for U.S. FDA clearance. It is now officially deployed and in actual clinical use at Taipei Veterans General Hospital, Taichung Veterans General Hospital, and Shin Kong Wu Ho-Su Memorial Hospital.',
    bullets: [
      'Successfully advanced the system through rigorous TFDA certification pipelines.',
      'Led the product integration and deployment across multiple top-tier medical centers in Taiwan.',
      'Bridged the gap between advanced medical AI research and real-world clinical applications.'
    ]
  },
  {
    title: 'AItewan DeepBT Detector–A Plus',
    org: 'AItewan BioMedical Technology Inc.',
    role: 'Senior AI Engineer & Product Manager',
    period: 'Ongoing',
    tag: 'Medical AI Product',
    desc:
      'An advanced brain tumor AI product driving the next generation of diagnostics. Strongly positioned for both Taiwan FDA (TFDA) and U.S. FDA medical device applications. Like its predecessor, this system has already been deployed for clinical use at Taipei Veterans General Hospital, Taichung Veterans General Hospital, and Shin Kong Wu Ho-Su Memorial Hospital.',
    bullets: [
      'Accelerating regulatory compliance and application processes for upcoming TFDA and U.S. FDA approvals.',
      'Achieved rapid clinical deployment and validation in major medical center workflows.',
      'Demonstrates independent technical leadership and strong capabilities in establishing robust, product-facing medical AI.'
    ]
  },
  {
    title: 'NOVATERA: ICF Smart AI Rehabilitation System',
    org: 'NOVATERA (ICF Smart AI Rehabilitation System)',
    role: 'Chief Technology Officer (CTO)',
    period: '2025–2026',
    tag: 'Innovation / Entrepreneurship',
    links: [
      { url: 'https://ssp.moe.gov.tw/cases/1387', text: 'View Project' }
    ],
    desc:
      'An AI-assisted rehabilitation platform designed for home and clinical environments, developed under CTO leadership with a focus on functional assessment, workflow design, and translational deployment.',
    bullets: [
      'Led technical strategy, system architecture, AI workflow design, and prototype development.',
      'Selected as a Success Case on Taiwan Ministry of Education\'s College Innovation and Entrepreneurship Simulation Learning Platform.',
      'Advanced through FITI and continued into entrepreneurship-oriented development programs.'
    ]
  },
  {
    title: 'AOCR Kaggle AI Challenge: Acute Appendicitis CT Segmentation',
    org: 'AOCR Kaggle AI Challenge Project',
    role: 'Research Team Leader',
    period: '2023–2024',
    tag: 'Challenge Champion',
    links: [
      { url: 'https://www.youtube.com/watch?v=mWsgQmneuAs', text: 'Watch Interview' },
      { url: 'https://innoaward.taiwan-healthcare.org/award_detail.php?REFDOCTYPID=0r4ggllnka0x43sh&num=1&REFDOCID=0sq2hwchxfqj17e7', text: 'National Innovation Award' }
    ],
    desc:
      'A 3D CT segmentation framework for acute appendicitis built for the AOCR Kaggle AI Challenge, emphasizing lesion-sensitive detection, localization, and clinically robust performance.',
    bullets: [
      'Led the research team across model design, optimization, and evaluation.',
      'Won the championship in a challenge organized under AOCR, one of the three major international radiology conferences.',
      'Generated downstream impact including awards, patent protection, and media visibility.'
    ]
  },
  {
    title: 'Medication Delivery Robot Mentoring Project',
    org: 'StanCode (founded by a Stanford alumnus, John Stephens Jr. Memorial Award recipient)',
    role: 'AI Poster Mentor',
    period: '2025–2026',
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
    role: 'AI Poster Mentor',
    period: '2025–2026',
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
    org: 'Omniguider Inc.',
    role: 'Research / Development Project | Team Leader',
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
    role: 'Research Project Intern / Member',
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
