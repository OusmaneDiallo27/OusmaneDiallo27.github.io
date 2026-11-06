// ============================================================
// i18n — Language dictionary + engine
// ============================================================
// Usage:
//   - Static text: add data-i18n="key" to an element, put "key" in both
//     dictionaries below. innerHTML is used so nested tags (e.g. <span>)
//     inside a translation string work.
//   - Placeholders: data-i18n-placeholder="key" (for inputs/textareas)
//   - Dynamic JS content (projects, certificates) reads getLang() directly.

const i18n = {
  en: {
    // ---- Nav ----
    "nav.about": "ABOUT",
    "nav.work": "WORK",
    "nav.certifications": "CERTIFICATIONS",
    "nav.services": "SERVICES",
    "nav.offers": "OFFERS",
    "nav.contact": "CONNECT",
    "nav.lang-toggle": "FR",

    // ---- Hero ----
    "hero.badge": "OUSMANE DIALLO · IT SYSTEMS ENGINEER",
    "hero.headline": "Engineering<br>resilient<br><span class=\"hero-accent\">systems.</span>",
    "hero.desc": "I design, deploy, and maintain secure server, storage, virtualization, backup, and monitoring environments for critical organizations.",
    "hero.status": "Based in Casablanca · Available for infrastructure projects",
    "hero.cta-primary": "VIEW EXPERIENCE ↓",
    "hero.cta-secondary": "CONTACT ME",

    // ---- Trust bar ----
    "trust.analytics": "NETWORKING & SECURITY",
    "trust.strategy": "SYSTEMS ADMINISTRATION",
    "trust.training": "MONITORING & OPERATIONS",
    "trust.stack": "BACKUP & STORAGE",
    "trust.mckinsey": "SECURE INFRASTRUCTURE",
    "trust.models": "VIRTUALIZATION & HCI",

    // ---- About ----
    "about.label": "// ABOUT",
    "about.title": "Building infrastructure<br>that stays <span class=\"accent-text\">resilient.</span>",
    "about.p1": "I'm an <strong>IT Systems Engineer</strong> at Groupe Finatech, specializing in <strong>servers, storage, virtualization, backup, and infrastructure operations</strong>.",
    "about.p2": "I deploy and integrate resilient platforms for banking, healthcare, public-sector, and enterprise environments. My work combines hands-on implementation, security, documentation, monitoring, and knowledge transfer to keep critical services available.",
    "about.cv-en": "Download Resume",
    "about.cv-fr": "Télécharger CV",
    "about.languages-label": "Languages",
    "about.languages-title": "French (Native) · English (C2)",
    "about.languages-meta": "EF SET Certified",

    // ---- Timeline ----
    "timeline.label": "// TIMELINE",
    "timeline.title": "Experience &<br>Education",
    "timeline.role1": "IT Systems Engineer",
    "timeline.org1": "Groupe Finatech · Casablanca",
    "timeline.role2": "Infrastructure reinforcement",
    "timeline.org2": "Banque CIH · Casablanca",
    "timeline.role3": "Server and storage infrastructure deployment",
    "timeline.org3": "Fondation Mohamed VI des Sciences de la santé · Casablanca",
    "timeline.role4": "SAN modernization and storage zoning",
    "timeline.org4": "Banque BOA · Casablanca",
    "timeline.role5": "Hyperconverged infrastructure deployment",
    "timeline.org5": "Tour Mohamed VI · Casablanca",
    "timeline.role6": "Storage, archiving, and messaging backup",
    "timeline.org6": "Direction Générale des Impôts Maroc · Casablanca",
    "timeline.role7": "Backup platform deployment",
    "timeline.org7": "Akwa Group · Casablanca",
    "timeline.role8": "IT fleet management and monitoring",
    "timeline.org8": "Ministry of Industry and Commerce · Rabat",
    "timeline.role9": "VMware virtualization and migration",
    "timeline.org9": "CNSS · Casablanca",
    "timeline.role10": "Hyperconverged infrastructure deployment",
    "timeline.org10": "CNSS · Casablanca",
    "timeline.role11": "Monitoring and virtualization deployment",
    "timeline.org11": "Hôtel Amnjena · Marrakech",
    "timeline.role12": "High-availability VMware and backup platform",
    "timeline.org12": "CTM · Rabat",
    "timeline.role13": "Automated backup platform deployment",
    "timeline.org13": "EURAFRIC · Rabat",
    "timeline.role14": "Infrastructure maintenance and operations",
    "timeline.org14": "AGETIC · Bamako, Mali",
    "timeline.role15": "Master 2 — Network Architecture and Security Engineering",
    "timeline.org15": "ISGA · Casablanca",
    "timeline.role16": "Master 1 — Network Architecture and Security Engineering",
    "timeline.org16": "ISGA · Casablanca",
    "timeline.role17": "Bachelor — Business Computing, Network Security",
    "timeline.org17": "Institut Africain de Management · Bamako",

    // ---- Work ----
    "work.label": "// SELECTED WORK",
    "work.title": "Infrastructure <span class=\"accent-text\">projects</span><br>& deployments.",
    "work.sub": "Explore selected infrastructure deployments, the operational challenges addressed, technologies used, and the results delivered.",
    "work.filter-all": "All",
    "work.filter-systems": "Systems",
    "work.filter-storage": "Storage",
    "work.filter-virtualization": "Virtualization",
    "work.filter-backup": "Backup",
    "work.filter-monitoring": "Monitoring",
    "work.show-more": "SHOW MORE EXPERIENCE",
    "work.show-less": "SHOW LESS EXPERIENCE",
    "work.read-case": "Read case",
    "work.p0-title": "Server & Storage Infrastructure Deployment",
    "work.p0-desc": "Production infrastructure deployment for banking and healthcare environments, integrating new servers and storage into existing systems without interrupting critical services.",
    "work.p1-title": "SAN & Storage Modernization",
    "work.p1-desc": "High-performance storage platforms for banking and public-sector environments, with zoning, LUN configuration, replication, and secure access controls.",
    "work.p2-title": "Virtualization & Hyperconverged Infrastructure",
    "work.p2-desc": "Resilient VMware and HCI platforms that centralize compute, storage, and networking while improving availability and operational control.",
    "work.p3-title": "Backup & Data Protection Platforms",
    "work.p3-desc": "Backup, archiving, and recovery platforms with retention policies, restore testing, replication, and secure protection of critical enterprise data.",
    "work.p4-title": "Monitoring & IT Operations",
    "work.p4-desc": "Real-time visibility across distributed IT environments through monitoring, alerting, preventive maintenance, and operational documentation.",

    // ---- Certifications ----
    "cert.label": "// CREDENTIALS",
    "cert.count-suffix": "certificates",
    "cert.title-suffix": "across<br>infrastructure, security &amp; cloud.",
    "cert.sub": "A technical record of infrastructure, storage, backup, networking, security, cloud, and platform training. Click any certificate to view the image and filter by issuer or level.",
    "cert.categories": "categories",
    "cert.issuers": "issuers",
    "cert.filter-all-issuers": "All issuers",
    "cert.filter-all-levels": "All levels",
    "cert.level-program": "Program",
    "cert.level-course": "Course",
    "cert.level-track": "Track",
    "cert.level-simulation": "Simulation",
    "cert.tip-program": "Multi-month structured program",
    "cert.tip-course": "Single standalone course",
    "cert.tip-track": "Multi-course skill or career track",
    "cert.tip-simulation": "Industry virtual experience / case simulation",
    "cert.coming-soon": "coming soon",
    "cert.view-aria": "View",
    "cert.empty": "No certificates match the selected filters.",
    "cert.verify": "Verify Certificate",
    "cert.no-link": "Verification link not available yet.",

    // ---- Services ----
    "services.label": "// SKILLS",
    "services.title": "Infrastructure I <span class=\"accent-text\">build and protect.</span>",
    "services.s1-title": "Systems & Networking",
    "services.s1-f1": "Windows Server and Linux administration",
    "services.s1-f2": "VPN, SSH, DHCP, HSRP and GLBP",
    "services.s1-f3": "ACL, VLAN and network security",
    "services.s1-f4": "Active Directory and access control",
    "services.s1-f5": "Infrastructure documentation",
    "services.s2-title": "Storage & Data Protection",
    "services.s2-f1": "Dell, Huawei, HPE and Fujitsu storage",
    "services.s2-f2": "SAN, NAS, Fibre Channel, zoning and LUNs",
    "services.s2-f3": "Veeam, NetBackup, QNAP and Acronis",
    "services.s2-f4": "Backup policies and restore testing",
    "services.s2-f5": "Retention, encryption and replication",
    "services.s3-title": "Virtualization & Monitoring",
    "services.s3-f1": "VMware ESXi, vCenter and vSAN",
    "services.s3-f2": "Nutanix and Proxmox environments",
    "services.s3-f3": "Zabbix, BMC Client Management and Control-M",
    "services.s3-f4": "High availability and resource management",
    "services.s3-f5": "Operations, training and knowledge transfer",

    // ---- Offers ----
    "offers.label": "// OFFERS & MENTORING",
    "offers.title": "Good analysis deserves to be seen<br><span>— by recruiters, by leadership, by clients.</span>",
    "offers.sub": "I help analysts, consultants, and organizations turn their work into something people actually see. Clean design, reproducible reports, live portfolios. Built with Quarto, deployed for free via GitHub pages.",
    "offers.o1-tag": "PORTFOLIO BUILD",
    "offers.o1-title": "Quarto Portfolio",
    "offers.o1-desc": "A Quarto portfolio website built and deployed: clean visual structure, GitHub integration, and full ownership of the code.",
    "offers.o1-f1": "Custom site",
    "offers.o1-f2": "GitHub integration",
    "offers.o1-f3": "Free deployment",
    "offers.o1-f4": "Full code ownership",
    "offers.o2-tag": "PROJECT REPORT MENTORING",
    "offers.o2-title": "Report Mentoring",
    "offers.o2-desc": "You build the report. I show you exactly how: structure, Quarto, publishing. You finish with a live project report and the skills to build the next one alone.",
    "offers.o2-f1": "Structure guidance",
    "offers.o2-f2": "Quarto workflow",
    "offers.o2-f3": "Publishing setup",
    "offers.o2-f4": "Independent skills",
    "offers.see-all": "See all offers & details",

    // ---- Contact ----
    "contact.label": "// GET IN TOUCH",
    "contact.title": "Let's keep your<br>infrastructure<br><span class=\"accent-text\">available.</span>",
    "contact.desc": "For infrastructure deployments, operations support, or a technical discussion, get in touch.",
    "contact.avail": "Available for infrastructure opportunities",
    "contact.ph-name": "Name",
    "contact.ph-email": "Email",
    "contact.ph-org": "Organization",
    "contact.ph-message": "What's the challenge you're facing?",
    "contact.select-default": "I'm contacting you about...",
    "contact.select-1": "Systems and networking",
    "contact.select-2": "Storage and backup",
    "contact.select-3": "Virtualization and HCI",
    "contact.select-4": "Monitoring and operations",
    "contact.select-5": "Not sure yet — let's talk",
    "contact.submit": "SEND INQUIRY →",
    "contact.sending": "SENDING...",
    "contact.err-required": "Please fill in all required fields.",
    "contact.err-email": "Please enter a valid email address.",
    "contact.sent": "✓ Thanks! I'll respond within 24 hours.",
    "contact.err-generic": "❌ Something went wrong. Please email me directly.",
    "contact.err-network": "❌ Network error. Please check your connection or email me directly.",

    // ---- Footer ----
    "footer.copy": "© 2026 OUSMANE DIALLO · IT SYSTEMS ENGINEER",
    "footer.linkedin": "EMAIL",
    "footer.resume": "PHONE",
    "footer.github": "CASABLANCA",

    // ---- Project link labels (reused across project modal buttons) ----
    "link.live-report": "Live Report",
    "link.live-dashboard": "Live Dashboard",
    "link.github-repo": "GitHub Repo",
    "link.request-details": "Request Details",

    // ---- Project modal section headers ----
    "modal.challenge": "THE CHALLENGE",
    "modal.solution": "THE SOLUTION",
    "modal.result": "THE RESULT",

    // ---- Offers page (offers/index.qmd) ----
    "offerspage.book-call": "Book a call →",
    "offerspage.nav-why": "WHY QUARTO",
    "offerspage.nav-faq": "FAQ",
    "offerspage.hero-headline": "Great analysis.<br><span class=\"hero-offers-highlight\">Ignored</span> every day.",
    "offerspage.hero-desc": "Recruiters and clients don't run your notebooks. They click a link, scan for few seconds, and move on. I help analysts build portfolios and reports that make those few seconds count.",
    "offerspage.hero-f1": "Live portfolio in 1 week",
    "offerspage.hero-f2": "Zero design skills needed",
    "offerspage.hero-f3": "English or French",
    "offerspage.see-packages": "SEE PACKAGES →",
    "offerspage.free-call": "FREE CALL →",
    "offerspage.trust1": "Portfolio built & deployed in 1 week",
    "offerspage.trust2": "Reporting systems for teams",
    "offerspage.trust3": "Workshops in English or French",
    "offerspage.trust4": "Remote or on-site",
    "offerspage.pkg-label": "// SERVICE PACKAGES",
    "offerspage.pkg-title": "Two ways I can<br><span class=\"accent-text\">help you right now.</span>",
    "offerspage.pkg-sub": "Whether you're an individual analyst building your reputation or need to communicate your work clearly, there's an offer for you.",
    "offerspage.pkg1-tagline": "\"A portfolio that looks far more professional than a GitHub repo.\"",
    "offerspage.pkg1-f1": "Portfolio built & deployed",
    "offerspage.pkg1-f2": "Custom design tailored to your work",
    "offerspage.pkg1-f3": "Clean visual structure & navigation",
    "offerspage.pkg1-f4": "GitHub integration & free hosting",
    "offerspage.pkg1-f5": "Full ownership of the code",
    "offerspage.get-started": "Get started →",
    "offerspage.pkg2-title": "Project Report Mentoring",
    "offerspage.pkg2-tagline": "\"You build the report. I show you exactly how.\"",
    "offerspage.pkg2-f1": "Quarto from scratch: setup, layout, navigation",
    "offerspage.pkg2-f2": "Structure people actually read",
    "offerspage.pkg2-f3": "Code + narrative integration",
    "offerspage.pkg2-f4": "Executive summary & methodology",
    "offerspage.pkg2-f5": "Publishing to GitHub Pages",
    "offerspage.showcase-label": "// REAL EXAMPLES",
    "offerspage.showcase-title": "This is what your<br><span class=\"accent-text\">work could look like.</span>",
    "offerspage.showcase-sub": "Not just promises. Here's what the work looks like when it's live.",
    "offerspage.showcase1-tag": "Live Example",
    "offerspage.showcase1-title": "My Portfolio",
    "offerspage.showcase1-desc": "A live example of what you get with the Portfolio Build package.",
    "offerspage.view-portfolio": "View portfolio →",
    "offerspage.showcase2-tag": "Project Report",
    "offerspage.showcase2-title": "Renewable Energy Market Screen",
    "offerspage.showcase2-desc": "20 emerging markets, 13 indicators, 4 investor scenarios. A fully reproducible, interactive report.",
    "offerspage.read-report": "Read report →",
    "offerspage.showcase3-tag": "HR Analytics",
    "offerspage.showcase3-title": "Analyzing Performance Gaps",
    "offerspage.showcase3-desc": "100,000 employee records. Deep dive into resignation drivers, performance factors, and tenure insights.",
    "offerspage.bundle-label": "// LIMITED OFFER",
    "offerspage.bundle-title": "Analyst Launch Pack.<br><span class=\"accent-text\">Build it. Report it. Own it.</span>",
    "offerspage.bundle-desc": "Get your portfolio fully built and deployed <strong>+</strong> a guided mentoring session to craft your first polished project report, both published and live.",
    "offerspage.report-mentoring": "Report Mentoring",
    "offerspage.save100": "Save $100",
    "offerspage.bundle-f1": "Portfolio live in 1 week",
    "offerspage.bundle-f2": "First report published inside",
    "offerspage.bundle-f3": "GitHub Pages deployment",
    "offerspage.bundle-f4": "Full code ownership",
    "offerspage.bundle-f6": "50% upfront · 50% on delivery",
    "offerspage.get-bundle": "GET THE BUNDLE →",
    "offerspage.student-label": "// EARLY CAREER LAUNCH",
    "offerspage.student-title": "FOR STUDENTS & FRESH GRADUATES",
    "offerspage.student-desc": "Portfolio build + mentoring session, designed for students and recent graduates. Everything you need to stand out to recruiters.",
    "offerspage.save200": "Save $200",
    "offerspage.student-f1": "Full Quarto portfolio deployed",
    "offerspage.student-f2": "2-hour guided mentoring session",
    "offerspage.student-f3": "GitHub Pages hosting included",
    "offerspage.student-f4": "Lifetime portfolio ownership",
    "offerspage.claim-student": "CLAIM STUDENT OFFER →",
    "offerspage.why-label": "// WHY QUARTO",
    "offerspage.why-title": "The tool that changes<br><span class=\"accent-text\">everything.</span>",
    "offerspage.why-sub": "Most analysts present their work in GitHub repos and Jupyter notebooks. Here's why that's costing them opportunities and how Quarto changes everything.",
    "offerspage.q1-title": "Code + narrative in one",
    "offerspage.q1-desc": "Quarto combines your code, outputs, and written analysis into a single reproducible document. No more copying charts into Word.",
    "offerspage.q1-benefit": "→ No context switching",
    "offerspage.q2-title": "Deployed in minutes, free",
    "offerspage.q2-desc": "GitHub Pages hosts your portfolio and reports at no cost. A professional URL, live on the internet, accessible anywhere.",
    "offerspage.q2-benefit": "→ Zero hosting costs",
    "offerspage.q3-title": "Beautiful by design",
    "offerspage.q3-desc": "With a custom theme, your reports look professional. You don't need to be a designer.",
    "offerspage.q3-benefit": "→ Professional first impression",
    "offerspage.q4-title": "Work where you're comfortable",
    "offerspage.q4-desc": "Use VS Code, RStudio, Jupyter Lab, or any editor. Quarto fits your workflow, not the other way around.",
    "offerspage.q4-benefit": "→ No vendor lock-in",
    "offerspage.stat1-label": "Reproducible",
    "offerspage.stat2-number": "Free",
    "offerspage.stat2-label": "Hosting & deployment",
    "offerspage.stat3-label": "Multi-language support",
    "offerspage.faq-label": "// FREQUENTLY ASKED",
    "offerspage.faq-title": "Questions I get<br><span class=\"accent-text\">before every project</span>",
    "offerspage.faq-sub": "Everything you need to know about working together. Can't find what you're looking for? Reach out directly.",
    "offerspage.contact-directly": "Contact me directly →",
    "offerspage.faq1-q": "Do I need to know R or Python?",
    "offerspage.faq1-a": "No. For the Portfolio Build package, I handle all the technical work. For the Workshop, basic familiarity helps but isn't required. Quarto is designed to be accessible regardless of your technical background.",
    "offerspage.faq2-q": "What if I don't have finished projects yet?",
    "offerspage.faq2-a": "Even better. We build the portfolio structure first, so when you finish projects they drop straight in. Many people find that having the portfolio ready motivates them to finish the work faster.",
    "offerspage.faq3-q": "How long does the Portfolio Build take?",
    "offerspage.faq3-a": "Typically 1–2 weeks from our first call to delivery. You get a live URL at the end. The timeline depends on how many projects you want to include.",
    "offerspage.faq4-q": "Are sessions available in French?",
    "offerspage.faq4-a": "Oui, absolument! All services are available in English or French. Les sessions sont disponibles en anglais ou en français, selon votre préférence.",
    "offerspage.faq5-q": "Can I book more than one mentoring session?",
    "offerspage.faq5-a": "Yes. After your first session, if you want to continue we can set up a rhythm that fits your pace and goals. Many clients book 2-3 sessions over a month.",
    "offerspage.faq6-q": "Do you offer payment plans?",
    "offerspage.faq6-a": "For the Portfolio Build package, I accept 50% upfront and 50% on delivery. For Workshops, invoicing is available for organizations.",
    "offerspage.faq7-q": "What's your refund policy?",
    "offerspage.faq7-a": "I offer a 7-day satisfaction guarantee. If you're not happy with the work delivered, you get a full refund — no questions asked.",
    "offerspage.cta-label": "// READY TO START?",
    "offerspage.cta-title": "Your work is good enough.<br><span class=\"accent-text\">Now make it look that way.</span>",
    "offerspage.cta-desc": "Book a free 30-minute call. No pitch, no pressure — just a conversation about what you need and whether I can help. I respond within 24 hours.",
    "offerspage.cta-badge1": "30 minutes · Free",
    "offerspage.cta-badge2": "Google Meet / Zoom",
    "offerspage.cta-badge4": "Reply within 24h",
    "offerspage.book-discovery": "Book free discovery call",
    "offerspage.send-message": "Send a message",
    "offerspage.cta-note": "No automated responses. No sales funnel. Just me.",
    "offerspage.footer-portfolio": "PORTFOLIO",

  },

  fr: {
    // ---- Nav ----
    "nav.about": "À PROPOS",
    "nav.work": "PROJETS",
    "nav.certifications": "CERTIFICATIONS",
    "nav.services": "PRESTATIONS",
    "nav.offers": "OFFRES",
    "nav.contact": "CONTACT",
    "nav.lang-toggle": "EN",

    // ---- Hero ----
    "hero.badge": "OUSMANE DIALLO · INGÉNIEUR IT SYSTÈMES",
    "hero.headline": "Concevoir des<br>infrastructures<br><span class=\"hero-accent\">résilientes.</span>",
    "hero.desc": "Je conçois, déploie et maintiens des environnements sécurisés de serveurs, stockage, virtualisation, sauvegarde et supervision pour les organisations critiques.",
    "hero.status": "Basé à Casablanca · Disponible pour vos projets d'infrastructure",
    "hero.cta-primary": "DÉCOUVRIR MES PROJETS ↓",
    "hero.cta-secondary": "ME CONTACTER",

    // ---- Trust bar ----
    "trust.analytics": "RÉSEAUX & SÉCURITÉ",
    "trust.strategy": "ADMINISTRATION SYSTÈMES",
    "trust.training": "SUPERVISION & EXPLOITATION",
    "trust.stack": "SAUVEGARDE & STOCKAGE",
    "trust.mckinsey": "INFRASTRUCTURE SÉCURISÉE",
    "trust.models": "VIRTUALISATION & HCI",

    // ---- About ----
    "about.label": "// À PROPOS",
    "about.title": "Construire une infrastructure<br>qui reste <span class=\"accent-text\">résiliente.</span>",
    "about.p1": "Je suis <strong>Ingénieur IT Systèmes</strong> au sein du Groupe Finatech, spécialisé dans les <strong>serveurs, le stockage, la virtualisation, la sauvegarde et l'exploitation des infrastructures</strong>.",
    "about.p2": "Je déploie et intègre des plateformes résilientes pour des environnements bancaires, médicaux, publics et privés. Mon travail associe mise en œuvre technique, sécurité, documentation, supervision et transfert de compétences pour maintenir la disponibilité des services critiques.",
    "about.cv-en": "Télécharger le CV (EN)",
    "about.cv-fr": "Télécharger le CV (FR)",
    "about.languages-label": "Langues",
    "about.languages-title": "Français (Maternel) · Anglais (C2)",
    "about.languages-meta": "Certifié EF SET",

    // ---- Timeline ----
    "timeline.label": "// PARCOURS",
    "timeline.title": "Expérience &<br>Formation",
    "timeline.role1": "Ingénieur IT Systèmes",
    "timeline.org1": "Groupe Finatech · Casablanca",
    "timeline.role2": "Renforcement de l'infrastructure",
    "timeline.org2": "Banque CIH · Casablanca",
    "timeline.role3": "Déploiement d'une infrastructure serveurs et stockage",
    "timeline.org3": "Fondation Mohamed VI des Sciences de la santé · Casablanca",
    "timeline.role4": "Modernisation SAN et zoning du stockage",
    "timeline.org4": "Banque BOA · Casablanca",
    "timeline.role5": "Déploiement d'une infrastructure hyperconvergée",
    "timeline.org5": "Tour Mohamed VI · Casablanca",
    "timeline.role6": "Stockage, archivage et sauvegarde de la messagerie",
    "timeline.org6": "Direction Générale des Impôts Maroc · Casablanca",
    "timeline.role7": "Déploiement d'une plateforme de sauvegarde",
    "timeline.org7": "Akwa Group · Casablanca",
    "timeline.role8": "Gestion et supervision du parc informatique",
    "timeline.org8": "Ministère de l'Industrie et du Commerce · Rabat",
    "timeline.role9": "Virtualisation VMware et migration des serveurs",
    "timeline.org9": "CNSS · Casablanca",
    "timeline.role10": "Déploiement d'une infrastructure hyperconvergée",
    "timeline.org10": "CNSS · Casablanca",
    "timeline.role11": "Déploiement de solutions de supervision et virtualisation",
    "timeline.org11": "Hôtel Amnjena · Marrakech",
    "timeline.role12": "Plateforme VMware haute disponibilité et sauvegarde",
    "timeline.org12": "CTM · Rabat",
    "timeline.role13": "Déploiement d'une plateforme de sauvegarde automatisée",
    "timeline.org13": "EURAFRIC · Rabat",
    "timeline.role14": "Maintenance et exploitation des infrastructures",
    "timeline.org14": "AGETIC · Bamako, Mali",
    "timeline.role15": "Master 2 — Ingénierie Architecture et Sécurité des réseaux",
    "timeline.org15": "ISGA · Casablanca",
    "timeline.role16": "Master 1 — Ingénierie Architecture et Sécurité des réseaux",
    "timeline.org16": "ISGA · Casablanca",
    "timeline.role17": "Bachelor — Informatique de gestion, option Sécurité Réseau",
    "timeline.org17": "Institut Africain de Management · Bamako",

    // ---- Work ----
    "work.label": "// PROJETS PHARES",
    "work.title": "Projets <span class=\"accent-text\">d'infrastructure</span><br>et déploiements.",
    "work.sub": "Découvrez des déploiements d'infrastructure sélectionnés, les défis opérationnels traités, les technologies utilisées et les résultats obtenus.",
    "work.filter-all": "Tous",
    "work.filter-systems": "Systèmes",
    "work.filter-storage": "Stockage",
    "work.filter-virtualization": "Virtualisation",
    "work.filter-backup": "Sauvegarde",
    "work.filter-monitoring": "Supervision",
    "work.show-more": "VOIR PLUS D'EXPÉRIENCES",
    "work.show-less": "VOIR MOINS D'EXPÉRIENCES",
    "work.read-case": "Voir l'étude de cas",
    "work.p0-title": "Déploiement d'infrastructures serveurs et stockage",
    "work.p0-desc": "Déploiement d'infrastructures de production pour des environnements bancaires et médicaux, avec intégration de nouveaux serveurs et équipements de stockage sans interruption des services critiques.",
    "work.p1-title": "Modernisation SAN et stockage",
    "work.p1-desc": "Mise en place de plateformes de stockage performantes pour des environnements bancaires et publics, avec zoning, configuration des LUNs, réplication et contrôle des accès.",
    "work.p2-title": "Virtualisation et infrastructure hyperconvergée",
    "work.p2-desc": "Plateformes VMware et HCI résilientes centralisant le calcul, le stockage et le réseau tout en améliorant la disponibilité et l'exploitation.",
    "work.p3-title": "Plateformes de sauvegarde et protection des données",
    "work.p3-desc": "Plateformes de sauvegarde, archivage et restauration avec politiques de rétention, tests de restauration, réplication et protection sécurisée des données critiques.",
    "work.p4-title": "Supervision et exploitation des infrastructures IT",
    "work.p4-desc": "Visibilité en temps réel des environnements IT distribués grâce à la supervision, aux alertes, à la maintenance préventive et à la documentation opérationnelle.",

    // ---- Certifications ----
    "cert.label": "// CERTIFICATIONS",
    "cert.count-suffix": "certificats",
    "cert.title-suffix": "en<br>infrastructure, sécurité &amp; cloud.",
    "cert.sub": "Un parcours technique en infrastructure, stockage, sauvegarde, réseaux, sécurité, cloud et plateformes. Cliquez sur un certificat pour voir l'image et filtrez par organisme ou niveau.",
    "cert.categories": "catégories",
    "cert.issuers": "organismes",
    "cert.filter-all-issuers": "Tous les organismes",
    "cert.filter-all-levels": "Tous les niveaux",
    "cert.level-program": "Programme",
    "cert.level-course": "Cours",
    "cert.level-track": "Parcours",
    "cert.level-simulation": "Simulation",
    "cert.tip-program": "Programme structuré sur plusieurs mois",
    "cert.tip-course": "Cours autonome",
    "cert.tip-track": "Parcours multi-cours orienté compétence ou carrière",
    "cert.tip-simulation": "Simulation d'expérience professionnelle / cas pratique",
    "cert.coming-soon": "à venir",
    "cert.view-aria": "Voir",
    "cert.empty": "Aucun certificat ne correspond aux filtres sélectionnés.",
    "cert.verify": "Vérifier le certificat",
    "cert.no-link": "Lien de vérification non encore disponible.",

    // ---- Services ----
    "services.label": "// COMPÉTENCES",
    "services.title": "Des infrastructures que je <span class=\"accent-text\">construis et protège.</span>",
    "services.s1-title": "Systèmes & Réseaux",
    "services.s1-f1": "Administration Windows Server et Linux",
    "services.s1-f2": "VPN, SSH, DHCP, HSRP et GLBP",
    "services.s1-f3": "ACL, VLAN et sécurité réseau",
    "services.s1-f4": "Active Directory et contrôle des accès",
    "services.s1-f5": "Documentation des infrastructures",
    "services.s2-title": "Stockage & Protection des données",
    "services.s2-f1": "Stockage Dell, Huawei, HPE et Fujitsu",
    "services.s2-f2": "SAN, NAS, Fibre Channel, zoning et LUNs",
    "services.s2-f3": "Veeam, NetBackup, QNAP et Acronis",
    "services.s2-f4": "Politiques de sauvegarde et tests de restauration",
    "services.s2-f5": "Rétention, chiffrement et réplication",
    "services.s3-title": "Virtualisation & Supervision",
    "services.s3-f1": "VMware ESXi, vCenter et vSAN",
    "services.s3-f2": "Environnements Nutanix et Proxmox",
    "services.s3-f3": "Zabbix, BMC Client Management et Control-M",
    "services.s3-f4": "Haute disponibilité et gestion des ressources",
    "services.s3-f5": "Exploitation, formation et transfert de compétences",

    // ---- Offers ----
    "offers.label": "// OFFRES & MENTORAT",
    "offers.title": "Une bonne analyse mérite d'être vue<br><span>— par les recruteurs, les décideurs, les clients.</span>",
    "offers.sub": "J'aide les analystes, consultants et organisations à rendre leur travail visible. Design soigné, rapports reproductibles, portfolios en ligne. Faits avec Quarto, déployés gratuitement avec GitHub pages.",
    "offers.o1-tag": "CRÉATION DE PORTFOLIO",
    "offers.o1-title": "Portfolio Quarto",
    "offers.o1-desc": "Un site portfolio conçu et déployé : structure visuelle épurée, intégration GitHub, et pleine propriété du code.",
    "offers.o1-f1": "Site personnalisé",
    "offers.o1-f2": "Intégration GitHub",
    "offers.o1-f3": "Déploiement gratuit",
    "offers.o1-f4": "Propriété totale du code",
    "offers.o2-tag": "MENTORAT RAPPORT DE PROJET",
    "offers.o2-title": "Mentorat sur le Rapport",
    "offers.o2-desc": "Vous construisez le rapport. Je vous montre exactement comment : structure, Quarto, publication. Vous repartez avec un rapport en ligne et les compétences pour réitérer l'expérience en autonomie.",
    "offers.o2-f1": "Accompagnement à la structuration",
    "offers.o2-f2": "Workflow Quarto",
    "offers.o2-f3": "Configuration de la publication",
    "offers.o2-f4": "Divers skills pour l'autonomie",
    "offers.see-all": "Voir toutes les offres et détails",

    // ---- Contact ----
    "contact.label": "// PRENONS CONTACT",
    "contact.title": "Gardons votre<br>infrastructure<br><span class=\"accent-text\">disponible.</span>",
    "contact.desc": "Pour un déploiement d'infrastructure, un besoin d'exploitation ou un échange technique, contactez-moi.",
    "contact.avail": "Disponible pour des opportunités en infrastructure",
    "contact.ph-name": "Nom",
    "contact.ph-email": "Email",
    "contact.ph-org": "Organisation",
    "contact.ph-message": "Quel est le défi que vous rencontrez ?",
    "contact.select-default": "Je vous contacte au sujet de...",
    "contact.select-1": "Systèmes et réseaux",
    "contact.select-2": "Stockage et sauvegarde",
    "contact.select-3": "Virtualisation et HCI",
    "contact.select-4": "Supervision et exploitation",
    "contact.select-5": "Je ne suis pas encore sûr(e) — échangeons",
    "contact.submit": "ENVOYER LA DEMANDE →",
    "contact.sending": "ENVOI EN COURS...",
    "contact.err-required": "Veuillez remplir tous les champs obligatoires.",
    "contact.err-email": "Veuillez saisir une adresse email valide.",
    "contact.sent": "✓ Merci ! Je vous répondrai sous 24 heures.",
    "contact.err-generic": "❌ Une erreur est survenue. Veuillez m'envoyer un email directement.",
    "contact.err-network": "❌ Erreur réseau. Vérifiez votre connexion ou contactez-moi directement par email.",

    // ---- Footer ----
    "footer.copy": "© 2026 OUSMANE DIALLO · INGÉNIEUR IT SYSTÈMES",
    "footer.linkedin": "EMAIL",
    "footer.resume": "TÉLÉPHONE",
    "footer.github": "CASABLANCA",

    // ---- Project link labels ----
    "link.live-report": "Rapport Quarto",
    "link.live-dashboard": "Dashboard",
    "link.github-repo": " GitHub repo",
    "link.request-details": "Demander les détails",

    // ---- Project modal section headers ----
    "modal.challenge": "LE DÉFI",
    "modal.solution": "LA SOLUTION",
    "modal.result": "LE RÉSULTAT",

    // ---- Offers page (offers/index.qmd) ----
    "offerspage.book-call": "Réserver un appel →",
    "offerspage.nav-why": "POURQUOI QUARTO",
    "offerspage.nav-faq": "FAQ",
    "offerspage.hero-headline": "Excellente analyse.<br><span class=\"hero-offers-highlight\">Ignorée</span> chaque jour.",
    "offerspage.hero-desc": "Les recruteurs et les clients n'exécutent pas vos notebooks. Ils cliquent sur un lien, jettent un œil pendant quelques secondes, puis passent à autre chose. J'aide les analystes à construire des portfolios et des rapports qui font compter ces quelques secondes.",
    "offerspage.hero-f1": "Portfolio en ligne en 1 semaine",
    "offerspage.hero-f2": "Aucune compétence en design requise",
    "offerspage.hero-f3": "Anglais ou français",
    "offerspage.see-packages": "VOIR LES OFFRES →",
    "offerspage.free-call": "APPEL GRATUIT →",
    "offerspage.trust1": "Portfolio construit et déployé en 1 semaine",
    "offerspage.trust2": "Systèmes de reporting pour les équipes",
    "offerspage.trust3": "Ateliers en anglais ou en français",
    "offerspage.trust4": "À distance ou sur site",
    "offerspage.pkg-label": "// PRESTATIONS",
    "offerspage.pkg-title": "Deux façons de vous<br><span class=\"accent-text\">accompagner dès maintenant.</span>",
    "offerspage.pkg-sub": "Que vous soyez un analyste indépendant en quête de notoriété ou que vous ayez besoin de valoriser votre travail, une offre est faite pour vous.",
    "offerspage.pkg1-tagline": "« Un portfolio bien plus professionnel qu'un simple Repo GitHub. »",
    "offerspage.pkg1-f1": "Portfolio construit et déployé",
    "offerspage.pkg1-f2": "Design personnalisé adapté à votre travail",
    "offerspage.pkg1-f3": "Structure visuelle épurée et navigation intuitive",
    "offerspage.pkg1-f4": "Intégration GitHub et hébergement gratuit via github pages",
    "offerspage.pkg1-f5": "Pleine propriété du code",
    "offerspage.get-started": "Commencer →",
    "offerspage.pkg2-title": "Mentorat Rapport de Projet",
    "offerspage.pkg2-tagline": "« Vous construisez le rapport. Je vous montre exactement comment. »",
    "offerspage.pkg2-f1": "Quarto de A à Z : configuration, mise en page, navigation",
    "offerspage.pkg2-f2": "Une structure réellement lue",
    "offerspage.pkg2-f3": "Intégration du code et du narratif",
    "offerspage.pkg2-f4": "Résumé exécutif et méthodologie",
    "offerspage.pkg2-f5": "Publication sur GitHub Pages",
    "offerspage.showcase-label": "// EXEMPLES CONCRETS",
    "offerspage.showcase-title": "Voici à quoi votre<br><span class=\"accent-text\">travail pourrait ressembler.</span>",
    "offerspage.showcase-sub": "Pas seulement des promesses. Voici ce que donne le travail une fois en ligne.",
    "offerspage.showcase1-tag": "Exemple en ligne",
    "offerspage.showcase1-title": "Mon Portfolio",
    "offerspage.showcase1-desc": "Un exemple concret de ce que vous obtenez avec l'offre Création de Portfolio.",
    "offerspage.view-portfolio": "Voir le portfolio →",
    "offerspage.showcase2-tag": "Rapport de Projet",
    "offerspage.showcase2-title": "Renewable Energy Investment Analyzer",
    "offerspage.showcase2-desc": "Méthode quantitative d'évaluation des marchés pour l'investissement dans les énergies renouvelables. Évaluation de 20 marchés sur 4 dimensions.",
    "offerspage.read-report": "Lire le rapport →",
    "offerspage.showcase3-tag": "HR Analytics",
    "offerspage.showcase3-title": "Analyzing Performance Gaps Between Departments",
    "offerspage.showcase3-desc": "Exploration thématique de 100 000 données de salariés pour identifier les facteurs de turnover, de performance et d'équité salariale.",
    "offerspage.bundle-label": "// OFFRE LIMITÉE",
    "offerspage.bundle-title": "Pack de Lancement Analyste.<br><span class=\"accent-text\">Construisez. Publiez. Possédez.</span>",
    "offerspage.bundle-desc": "Obtenez votre portfolio entièrement construit et déployé <strong>+</strong> une session de mentorat guidée pour réaliser votre premier rapport de projet avec Quarto, le tout publié et en ligne.",
    "offerspage.report-mentoring": "Mentorat Rapport",
    "offerspage.save100": "Économisez 100 $",
    "offerspage.bundle-f1": "Portfolio en ligne en 1 semaine",
    "offerspage.bundle-f2": "Premier rapport publié inclus",
    "offerspage.bundle-f3": "Déploiement sur GitHub Pages",
    "offerspage.bundle-f4": "Pleine propriété du code",
    "offerspage.bundle-f6": "50 % à la commande · 50 % à la livraison",
    "offerspage.get-bundle": "OBTENIR LE PACK →",
    "offerspage.student-label": "// LANCEMENT DE CARRIÈRE",
    "offerspage.student-title": "POUR ÉTUDIANTS ET JEUNES DIPLÔMÉS",
    "offerspage.student-desc": "Création de portfolio + session de mentorat, conçu pour les étudiants et jeunes diplômés. Tout ce qu'il faut pour se démarquer auprès des recruteurs.",
    "offerspage.save200": "Économisez 200 $",
    "offerspage.student-f1": "Portfolio complet déployé",
    "offerspage.student-f2": "Session de mentorat guidée de 2 heures",
    "offerspage.student-f3": "Hébergement GitHub Pages inclus",
    "offerspage.student-f4": "Propriété du portfolio à vie",
    "offerspage.claim-student": "PROFITER DE L'OFFRE ÉTUDIANT →",
    "offerspage.why-label": "// POURQUOI QUARTO",
    "offerspage.why-title": "L'outil qui change<br><span class=\"accent-text\">la donne.</span>",
    "offerspage.why-sub": "La plupart des analystes présentent leur travail dans des Repos GitHub et des notebooks Jupyter. Voici pourquoi cela leur coûte des opportunités et comment Quarto change la donne.",
    "offerspage.q1-title": "Code et narratif en un seul document",
    "offerspage.q1-desc": "Quarto combine votre code, vos résultats et votre analyse écrite en un seul document reproductible. Fini de copier-coller des graphiques dans Word.",
    "offerspage.q1-benefit": "→ Zéro perte de contexte",
    "offerspage.q2-title": "Déployé en quelques minutes, gratuitement",
    "offerspage.q2-desc": "GitHub Pages héberge votre portfolio et vos rapports sans frais. Une URL professionnelle, en ligne, accessible partout.",
    "offerspage.q2-benefit": "→ Zéro coût d'hébergement",
    "offerspage.q3-title": "Beau par conception",
    "offerspage.q3-desc": "Avec un thème personnalisé, vos rapports sont attrayants. Vous n'avez pas besoin d'être designer.",
    "offerspage.q3-benefit": "→ Une première impression professionnelle",
    "offerspage.q4-title": "Travaillez dans votre environnement",
    "offerspage.q4-desc": "Utilisez VS Code, RStudio, Jupyter Lab, ou tout autre éditeur. Quarto s'adapte à votre workflow, et non l'inverse.",
    "offerspage.q4-benefit": "→ Aucune dépendance à un outil",
    "offerspage.stat1-label": "Reproductible",
    "offerspage.stat2-number": "Gratuit",
    "offerspage.stat2-label": "Hébergement et déploiement",
    "offerspage.stat3-label": "Support multilingue",
    "offerspage.faq-label": "// QUESTIONS FRÉQUENTES",
    "offerspage.faq-title": "Les questions qui reviennent<br><span class=\"accent-text\">avant chaque projet</span>",
    "offerspage.faq-sub": "Tout ce que vous devez savoir pour travailler ensemble. Vous ne trouvez pas la réponse à votre question ? Contactez-moi directement.",
    "offerspage.contact-directly": "Contactez-moi directement →",
    "offerspage.faq1-q": "Dois-je connaître R ou Python ?",
    "offerspage.faq1-a": "Non. Pour l'offre Création de Portfolio, je m'occupe de tout l'aspect technique. Pour l'Atelier, une familiarité de base est un plus mais n'est pas obligatoire. Quarto est conçu pour être accessible quel que soit votre niveau technique.",
    "offerspage.faq2-q": "Et si je n'ai pas encore de projets terminés ?",
    "offerspage.faq2-a": "C'est encore mieux. Nous construisons d'abord la structure du portfolio, de sorte que vos projets s'y intègrent dès qu'ils sont prêts. Avoir le portfolio prêt motive à finaliser les projets plus rapidement.",
    "offerspage.faq3-q": "Combien de temps prend la Création de Portfolio ?",
    "offerspage.faq3-a": "Généralement 1 à 2 semaines entre notre premier appel et la livraison. Vous obtenez une URL en ligne à la fin. Le délai dépend du nombre de projets que vous souhaitez inclure.",
    "offerspage.faq4-q": "Les sessions sont-elles disponibles en français ?",
    "offerspage.faq4-a": "Oui, absolument ! Tous les services sont disponibles en anglais ou en français, selon votre préférence.",
    "offerspage.faq5-q": "Puis-je réserver plusieurs sessions de mentorat ?",
    "offerspage.faq5-a": "Oui. Après votre première session, si vous souhaitez continuer, nous pouvons établir un rythme adapté à votre cadence et à vos objectifs. Beaucoup de clients réservent 2 à 3 sessions sur un mois.",
    "offerspage.faq6-q": "Proposez-vous des facilités de paiement ?",
    "offerspage.faq6-a": "Pour l'offre Création de Portfolio, j'accepte 50 % à la commande et 50 % à la livraison. Pour les Ateliers, la facturation est possible pour les organisations.",
    "offerspage.faq7-q": "Quelle est votre politique de remboursement ?",
    "offerspage.faq7-a": "J'offre une garantie de satisfaction de 7 jours. Si le travail livré ne vous convient pas, vous serez intégralement remboursé — sans poser de questions.",
    "offerspage.cta-label": "// PRÊT À COMMENCER ?",
    "offerspage.cta-title": "Votre travail est déjà bon.<br><span class=\"accent-text\">Faites-le savoir.</span>",
    "offerspage.cta-desc": "Réservez un appel gratuit de 30 minutes. Pas de pitch, pas de pression — juste une conversation sur vos besoins et sur comment je peux vous aider. Je réponds sous 24 heures.",
    "offerspage.cta-badge1": "30 minutes · Gratuit",
    "offerspage.cta-badge2": "Google Meet / Zoom",
    "offerspage.cta-badge4": "Réponse sous 24h",
    "offerspage.book-discovery": "Réserver un appel découverte gratuit",
    "offerspage.send-message": "Envoyer un message",
    "offerspage.cta-note": "Pas de réponses automatisées. Pas d'entonnoir de vente. Juste moi.",
    "offerspage.footer-portfolio": "PORTFOLIO",
  }
};

// ============================================================
// Language engine with browser language detection
// ============================================================

function getDefaultLang() {
  // Check if there's a saved preference first
  const saved = localStorage.getItem('lang');
  if (saved) return saved;
  
  // If no saved preference, detect browser language
  const browserLang = navigator.language || navigator.languages?.[0] || 'fr';
  
  // If browser is set to French, default to French
  if (browserLang.startsWith('fr')) return 'fr';
  
  // French is the portfolio's default language.
  return 'fr';
}

function getLang() {
  return getDefaultLang();
}

function t(key) {
  const lang = getLang();
  return (i18n[lang] && i18n[lang][key] !== undefined) ? i18n[lang][key] : (i18n.en[key] || key);
}

function applyTranslations() {
  const lang = getLang();
  document.documentElement.setAttribute('lang', lang);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang] && i18n[lang][key] !== undefined) {
      el.innerHTML = i18n[lang][key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (i18n[lang] && i18n[lang][key] !== undefined) {
      el.setAttribute('placeholder', i18n[lang][key]);
    }
  });

  // aria-labels
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria');
    if (i18n[lang] && i18n[lang][key] !== undefined) {
      el.setAttribute('aria-label', i18n[lang][key]);
    }
  });

  const toggleBtn = document.getElementById('lang-toggle-text');
  if (toggleBtn) toggleBtn.textContent = t('nav.lang-toggle');
}

function setLanguage(lang) {
  localStorage.setItem('lang', lang);
  applyTranslations();

  // Re-render dynamic widgets that build their own HTML from data files
  if (typeof renderProjectCards === 'function') renderProjectCards();
  if (typeof renderStatsBar === 'function') renderStatsBar();
  if (typeof renderCertifications === 'function') renderCertifications();

  // If a project modal is currently open, refresh its content
  const projOverlay = document.getElementById('proj-overlay');
  if (projOverlay && projOverlay.classList.contains('open') && typeof window.currentProjectId !== 'undefined' && typeof openProject === 'function') {
    openProject(window.currentProjectId);
  }

  // If a certificate modal is currently open, refresh its content
  const certOverlay = document.getElementById('cert-overlay');
  if (certOverlay && certOverlay.classList.contains('open') && window.currentCert && typeof openCertModal === 'function') {
    openCertModal(window.currentCert);
  }
}

function toggleLang() {
  setLanguage(getLang() === 'en' ? 'fr' : 'en');
}

function initLang() {
  applyTranslations();
}

document.addEventListener('DOMContentLoaded', initLang);