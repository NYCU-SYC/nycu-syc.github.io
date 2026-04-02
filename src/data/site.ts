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
  'Computer vision, medical image analysis, multimodal learning, generative modeling, large language models, and vision-language systems for trustworthy AI in brain tumor analysis and clinically grounded report generation.';

export const heroHighlights = [
  { value: 'AOCR & Awards', label: 'AOCR (Top-3 Radiology Conference) Kaggle AI Champion, National Innovation Award Recipient, and featured in an exclusive interview.' },
  { value: 'CTO & Startup', label: 'Served as startup CTO, participating in the FITI program and selected as a Model Success Case by MOE Taiwan.' },
  { value: 'AI Poster Mentor', label: 'Served as an AI Poster Mentor at StanCode, leading student teams in hands-on AI project deployments.' },
  { value: 'TFDA & U.S. FDA', label: 'Contributed to Brain Tumor SaMD operations, securing TFDA approval with U.S. FDA clearance under review.' },
  { value: '4.11 / 4.30', label: 'Achieved a near-perfect GPA in NYCU\'s highly competitive Direct-Entry Ph.D. program, balancing rigorous coursework with pioneering medical AI research.' },
  { value: '7 Publications', label: 'Authored 3 journal papers (with 1st-author at MedIA IF=11.8 under review) and 4 accepted conference papers (all Oral Presentations).' }
];

export const homeQuickFacts = [
  'Direct-entry Ph.D. student at National Yang Ming Chiao Tung University, Institute of Biophotonics.',
  'Research focus: brain tumor MRI analysis, lesion-sensitive segmentation, and clinically grounded report generation.',
  'Authored 3 submitted journal papers, including a first-author manuscript to Medical Image Analysis (IF=11.8) currently under peer review, alongside 4 accepted conference papers (all selected for Oral Presentations).',
  'Selected strengths include AOCR Challenge Championship and translational medical AI experience with patents and regulatory-facing products.'
];

export const homeFeatureCards = [
  {
    title: 'Research Focus',
    desc: 'Brain tumor MRI analysis, lesion-sensitive segmentation, multimodal learning, and vision-language systems for clinical report generation.'
  },
  {
    title: 'Academic Momentum',
    desc: 'Direct-entry Ph.D. training at NYCU with a current GPA of 4.11 / 4.30, along with ongoing journal manuscripts and oral presentations.'
  },
  {
    title: 'Recognition',
    desc: 'AOCR Kaggle AI Challenge Champion, National Innovation Award recipient, and winner of the AI Application Competition in Taiwan.'
  },
  {
    title: 'Translation',
    desc: 'Experience spanning translational medical AI products, patents, clinical workflow integration, and innovation-oriented technical leadership.'
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
      'Developed an end-to-end clinical AI system for brain tumor stereotactic radiosurgery using an 11,000+ multicenter MRI dataset, including the DBI-MambaUNet architecture and SA-FTL loss for lesion-sensitive segmentation.',
      'Improved sub-4 mm lesion detection sensitivity from 38.8% to 63.8%, and investigated GAN-based contrast-free analysis, knowledge distillation, and constrained vision-language workflows for structured report generation.',
      'Standardized outputs into DICOM SEG/SR for PACS-compatible deployment; the initial system has obtained TFDA clearance and is under U.S. FDA review, while advanced iterations continue toward dual-certification.'
    ]
  },
  {
    org: 'NOVATERA (ICF Smart AI Rehabilitation System)',
    role: 'Chief Technology Officer (CTO)',
    period: '2025–2026',
    bullets: [
      'Led the technical strategy and product development of an AI-assisted rehabilitation platform for home and clinical environments, covering system architecture, AI workflow design, prototype development, and functional assessment.',
      'The project was featured as a success case on Taiwan Ministry of Education’s College Innovation and Entrepreneurship Simulation Learning Platform, advanced to the semifinal round of the FITI (From IP to IPO) Program, and is currently participating in the U-start Plan for Innovation and Entrepreneurship.'
    ]
  },
  {
    org: 'StanCode (founded by a Stanford alumnus, John Stephens Jr. Memorial Award recipient)',
    role: 'AI Poster Mentor',
    period: '2025–2026',
    bullets: [
      'Mentored student teams developing healthcare-oriented AI systems, including a smart medication delivery robot and a medication recognition application based on image detection/classification, RAG, and LLMs.',
      'Provided technical guidance on system architecture, computer vision modeling, evaluation design, and grounded medical question answering, with emphasis on hallucination mitigation and citation-based response mechanisms.'
    ]
  },
  {
    org: 'AOCR Kaggle AI Challenge Project',
    role: 'Research Team Leader',
    period: '2023–2024',
    bullets: [
      'Led a research team in the AOCR Kaggle AI Challenge, organized under the Asian Oceanian Congress of Radiology (AOCR), one of the three major international radiology conferences.',
      'Developed a 3D CT-based segmentation framework for acute appendicitis to improve lesion-sensitive detection, localization, and segmentation in complex clinical cases.',
      'Oversaw the full development cycle from model design to performance evaluation, emphasizing robustness and translational value; the project won the championship and later received national awards, patent protection, and broad media coverage.'
    ]
  },
  {
    org: 'Omniguider Inc.',
    role: 'Research / Development Project | Team Leader',
    period: '2023–2024',
    bullets: [
      'Led the development of an interactive generative imaging system for the National Museum of Natural Science.',
      'Implemented ControlNet for controllable image generation and LoRA for exhibit-specific fine-tuning, and integrated diffusion-based generation with face-swapping techniques to improve realism and user interaction.',
      'The project received the Excellence Award in the AI Application Challenge hosted by Taiwan’s Ministry of Digital Affairs.'
    ]
  },
  {
    org: 'National Chung-Shan Institute of Science and Technology',
    role: 'Research Project Intern / Member',
    period: '2022–2023',
    bullets: [
      'Worked on cGAN-based target image synthesis, data expansion, and RGB-to-infrared cross-modal translation for drone vision and edge deployment scenarios.',
      'Built synthetic image generation workflows to address data scarcity and support downstream object detection and segmentation in restricted hardware environments.'
    ]
  }
];

export const journalManuscripts = [
  {
    venue: 'Medical Image Analysis',
    impact: '11.8',
    authorship: '1st author',
    status: 'Under review',
    title:
      'DBI-MambaUNet with Size-Aware Focal Tversky Loss: A Holistic Framework for Multi-Subtype Brain Tumor Micro-Lesion Segmentation in Stereotactic Radiosurgery.'
  },
  {
    venue: 'Journal of Medical Systems',
    impact: '5.7',
    authorship: '3rd author',
    status: 'Under review',
    title:
      'A Standards-Based, PACS-Native AI Integration Architecture for Background Inference in Radiology Reporting Workflows.'
  },
  {
    venue: 'Computer Methods and Programs in Biomedicine',
    impact: '4.8',
    authorship: 'Co-author',
    status: 'Under review',
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
  'Champion, AOCR Kaggle AI Challenge, held under the Asian Oceanian Congress of Radiology (AOCR), one of the three major international radiology conferences.',
  '21st National Innovation Award (Academic Innovation Award), Taiwan.',
  'Winner, AI Application Competition, Digital Industry Administration, Taiwan.',
  'Advanced to the semifinal round, FITI: From IP to IPO Program, Ministry of Economic Affairs, Taiwan.',
  'Success-Case Project, Taiwan Ministry of Education College Innovation and Entrepreneurship Simulation Learning Platform, ICF Smart AI Rehabilitation System (CTO, NOVATERA).'
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
