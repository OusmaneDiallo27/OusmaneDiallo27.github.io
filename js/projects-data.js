// ============================================================
// Project Data
// ============================================================
const projectData = {
  0: {
    date: 'October 2025', date_fr: 'Octobre 2025', category: 'systems', icon: 'fa-solid fa-server',
    client: 'Banque CIH · Casablanca', client_fr: 'Banque CIH · Casablanca',
    title: 'Production Server Deployment', title_fr: 'Déploiement de serveurs en production',
    summary: 'Installed and integrated new production servers and storage to expand capacity while maintaining service continuity.', summary_fr: "Installation et intégration de nouveaux serveurs et équipements de stockage pour augmenter la capacité tout en maintenant la continuité de service.",
    challenge: 'A high-stakes banking environment needed additional physical infrastructure to support growing data and processing volumes.', challenge_fr: "Un environnement bancaire à fort enjeu avait besoin d'une infrastructure physique supplémentaire pour accompagner la croissance des volumes de données et de traitement.",
    solution: 'Received, installed, configured, documented, and integrated new servers into the existing production environment.', solution_fr: "Réception, installation, configuration, documentation et intégration de nouveaux serveurs dans l'environnement de production existant.",
    result: 'Expanded production capacity with controlled integration and documented configurations.', result_fr: "Extension de la capacité de production avec une intégration maîtrisée et des configurations documentées.",
    tools: ['Device Manager', 'Huawei OceanStor 5310', 'Huawei OceanProtect X3000']
  },
  1: {
    date: 'July 2025', date_fr: 'Juillet 2025', category: 'systems', icon: 'fa-solid fa-server',
    client: 'Fondation Mohamed VI des Sciences de la santé · Casablanca', client_fr: 'Fondation Mohamed VI des Sciences de la santé · Casablanca',
    title: 'Healthcare Server & Storage Infrastructure', title_fr: 'Infrastructure serveurs et stockage pour la santé',
    summary: 'Deployed a secure and available server and storage foundation for a modern healthcare information system.', summary_fr: "Déploiement d'une base serveurs et stockage sécurisée et disponible pour un système d'information de santé modernisé.",
    challenge: 'A major healthcare institution needed robust infrastructure aligned with high availability and security requirements.', challenge_fr: "Une institution de santé de premier plan avait besoin d'une infrastructure robuste répondant à des exigences élevées de disponibilité et de sécurité.",
    solution: 'Installed equipment, applied access-control and security policies, and integrated the new platform with existing information systems.', solution_fr: "Installation des équipements, mise en place des politiques de sécurité et de contrôle des accès, puis intégration avec les systèmes existants.",
    result: 'Delivered an integrated infrastructure foundation for secure medical-sector operations.', result_fr: "Mise en place d'une base d'infrastructure intégrée pour une exploitation sécurisée dans le secteur médical.",
    tools: ['Dell PowerEdge', 'Huawei OceanStor', 'VMware vSphere', 'Windows Server', 'Linux', 'Active Directory', 'VLAN', 'SAN / NAS']
  },
  2: {
    date: 'May 2025', date_fr: 'Mai 2025', category: 'storage', icon: 'fa-solid fa-database',
    client: 'Banque BOA · Casablanca', client_fr: 'Banque BOA · Casablanca',
    title: 'Full-Flash SAN Modernization', title_fr: 'Modernisation SAN Full Flash',
    summary: 'Modernized banking storage with Full Flash arrays, Fibre Channel switching, zoning, and LUN configuration.', summary_fr: "Modernisation du stockage bancaire avec des baies Full Flash, des switches Fibre Channel, le zoning et la configuration des LUNs.",
    challenge: 'Transaction-heavy banking applications required higher storage performance and high availability.', challenge_fr: "Les applications bancaires transactionnelles nécessitaient davantage de performance et de disponibilité du stockage.",
    solution: 'Installed and cabled Huawei arrays and Dell Connectrix switches, configured zones and LUNs, and integrated the equipment into the existing SAN topology.', solution_fr: "Installation et câblage des baies Huawei et switches Dell Connectrix, configuration des zones et LUNs, puis intégration à la topologie SAN existante.",
    result: 'Delivered a structured and high-performance SAN platform for critical banking workloads.', result_fr: "Mise en place d'une plateforme SAN structurée et performante pour les workloads bancaires critiques.",
    tools: ['Huawei OceanStor Dorado 5000 V6', 'DELL Connectrix DS-7720B24', 'Fibre Channel', 'SAN', 'Zoning', 'LUN', 'VSAN', 'VMware vSphere']
  },
  3: {
    date: 'April 2025', date_fr: 'Avril 2025', category: 'virtualization', icon: 'fa-solid fa-cubes',
    client: 'Tour Mohamed VI · Casablanca', client_fr: 'Tour Mohamed VI · Casablanca',
    title: 'Four-Node Hyperconverged Platform', title_fr: 'Plateforme hyperconvergée à quatre nœuds',
    summary: 'Deployed a resilient DELL VxRail platform combining compute, storage, networking, virtualization, and backup.', summary_fr: "Déploiement d'une plateforme DELL VxRail résiliente combinant calcul, stockage, réseau, virtualisation et sauvegarde.",
    challenge: 'A large tertiary complex needed a unified and flexible platform for its digital services.', challenge_fr: "Un complexe tertiaire d'envergure avait besoin d'une plateforme unifiée et flexible pour ses services numériques.",
    solution: 'Deployed four VxRail nodes, configured vSphere and vCenter, and managed compute, storage, and network resources across the HCI cluster.', solution_fr: "Déploiement de quatre nœuds VxRail, configuration de vSphere et vCenter, puis gestion des ressources de calcul, stockage et réseau du cluster HCI.",
    result: 'Delivered a unified, resilient platform with centralized resource management and backup readiness.', result_fr: "Mise en place d'une plateforme unifiée et résiliente avec gestion centralisée des ressources et préparation de la sauvegarde.",
    tools: ['DELL VxRail', 'VMware vSphere', 'vCenter Server', 'vSAN', 'NSX', 'Veeam', 'Windows Server', 'Linux']
  },
  4: {
    date: 'January 2025', date_fr: 'Janvier 2025', category: 'storage', icon: 'fa-solid fa-shield-halved',
    client: 'Direction Générale des Impôts Maroc · Casablanca', client_fr: 'Direction Générale des Impôts Maroc · Casablanca',
    title: 'Storage Replication & Messaging Protection', title_fr: 'Réplication du stockage et protection de la messagerie',
    summary: 'Deployed storage arrays, bidirectional replication, and archiving and backup for institutional messaging.', summary_fr: "Déploiement de baies de stockage, d'une réplication bidirectionnelle et d'une solution d'archivage et de sauvegarde de la messagerie institutionnelle.",
    challenge: 'A national tax administration needed stronger availability, retention, encryption, and access control for critical data.', challenge_fr: "Une administration fiscale nationale devait renforcer la disponibilité, la rétention, le chiffrement et le contrôle d'accès de ses données critiques.",
    solution: 'Installed three Dorado arrays and one OceanStor array, deployed the messaging archive and backup platform, and configured retention and security policies.', solution_fr: "Installation de trois baies Dorado et d'une baie OceanStor, déploiement de la plateforme d'archivage et de sauvegarde, puis configuration des politiques de rétention et de sécurité.",
    result: 'Strengthened institutional data protection with replicated storage and controlled messaging recovery.', result_fr: "Renforcement de la protection des données institutionnelles grâce au stockage répliqué et à la restauration contrôlée de la messagerie.",
    tools: ['Huawei OceanStor Dorado 5000 V6', 'OceanStor 2600 V3', 'SmartKit', 'DME', 'NetBackup', 'Microsoft Exchange', 'Active Directory']
  },
  5: {
    date: 'April 2024', date_fr: 'Avril 2024', category: 'backup', icon: 'fa-solid fa-hard-drive',
    client: 'Akwa Group · Casablanca', client_fr: 'Akwa Group · Casablanca',
    title: 'Centralized QNAP Backup Platform', title_fr: 'Plateforme de sauvegarde QNAP centralisée',
    summary: 'Centralized group backups on a QNAP appliance with documented policies and tested restoration procedures.', summary_fr: "Centralisation des sauvegardes du groupe sur une appliance QNAP avec politiques documentées et procédures de restauration testées.",
    challenge: 'A multi-activity group needed stronger data protection and recovery readiness across its existing IT environment.', challenge_fr: "Un groupe multi-activités devait renforcer la protection de ses données et sa capacité de reprise.",
    solution: 'Configured the QNAP appliance, defined frequency and retention policies, integrated it with the network and systems, and tested restores.', solution_fr: "Configuration de l'appliance QNAP, définition des politiques de fréquence et de rétention, intégration au réseau et aux systèmes, puis tests de restauration.",
    result: 'Improved backup reliability, recovery confidence, and operational documentation.', result_fr: "Amélioration de la fiabilité des sauvegardes, de la confiance dans la reprise et de la documentation opérationnelle.",
    tools: ['QNAP NAS', 'Hybrid Backup Sync', 'RAID', 'NFS', 'SMB / CIFS', 'TCP/IP', 'Windows Server', 'Linux']
  },
  6: {
    date: 'February 2024', date_fr: 'Février 2024', category: 'monitoring', icon: 'fa-solid fa-eye',
    client: "Ministère de l'Industrie et du Commerce · Rabat", client_fr: "Ministère de l'Industrie et du Commerce · Rabat",
    title: 'National IT Fleet Monitoring', title_fr: 'Supervision nationale du parc informatique',
    summary: 'Deployed fleet management, monitoring agents, dashboards, and alerting for nationwide IT operations.', summary_fr: "Déploiement de la gestion de parc, d'agents de supervision, de tableaux de bord et d'alertes pour l'exploitation IT nationale.",
    challenge: 'A Moroccan ministry needed real-time visibility and optimized maintenance across a large distributed fleet.', challenge_fr: "Un ministère marocain avait besoin de visibilité en temps réel et d'une maintenance optimisée sur un parc distribué.",
    solution: 'Configured management and monitoring modules, deployed collection agents, built dashboards and alerts, integrated maintenance workflows, and trained IT teams.', solution_fr: "Configuration des modules de gestion et supervision, déploiement des agents de collecte, création des tableaux de bord et alertes, intégration aux processus de maintenance et formation des équipes.",
    result: 'Created a more visible, proactive, and maintainable national IT operations process.', result_fr: "Mise en place d'un processus d'exploitation IT national plus visible, proactif et maintenable.",
    tools: ['BMC Client Management', 'Zabbix', 'SNMP', 'Windows Server', 'Active Directory', 'Linux', 'TCP/IP', 'VLAN']
  },
  7: {
    date: 'November 2023', date_fr: 'Novembre 2023', category: 'virtualization', icon: 'fa-solid fa-server',
    client: 'CNSS · Casablanca', client_fr: 'CNSS · Casablanca',
    title: 'VMware Virtualization & P2V Migration', title_fr: 'Virtualisation VMware et migration P2V',
    summary: 'Deployed VMware vSphere and migrated physical servers to a resilient virtual environment.', summary_fr: "Déploiement de VMware vSphere et migration de serveurs physiques vers un environnement virtuel résilient.",
    challenge: 'A high-volume social protection organization needed to rationalize physical infrastructure and centralize compute management.', challenge_fr: "Un organisme de protection sociale à fort volume devait rationaliser son parc physique et centraliser la gestion du calcul.",
    solution: 'Installed ESXi and vCenter, performed P2V migrations, configured HA and DRS, applied resource and security policies, and trained administrators.', solution_fr: "Installation d'ESXi et vCenter, migrations P2V, configuration de HA et DRS, mise en place des politiques de ressources et de sécurité, puis formation des administrateurs.",
    result: 'Improved infrastructure resilience and centralized administration of virtualized workloads.', result_fr: "Amélioration de la résilience et centralisation de l'administration des workloads virtualisés.",
    tools: ['VMware vSphere', 'ESXi', 'vCenter Server', 'vMotion', 'HA', 'DRS', 'Windows Server', 'Linux', 'SAN', 'NFS']
  },
  8: {
    date: 'June 2023', date_fr: 'Juin 2023', category: 'virtualization', icon: 'fa-solid fa-network-wired',
    client: 'CNSS · Casablanca', client_fr: 'CNSS · Casablanca',
    title: 'CNSS Hyperconverged Infrastructure', title_fr: 'Infrastructure hyperconvergée de la CNSS',
    summary: 'Deployed an HCI platform unifying compute, storage, and networking for critical services.', summary_fr: "Déploiement d'une plateforme HCI unifiant calcul, stockage et réseau pour les services critiques.",
    challenge: 'The existing architecture needed simplification and higher availability for essential services.', challenge_fr: "L'architecture existante devait être simplifiée et sa disponibilité renforcée pour les services essentiels.",
    solution: 'Supported solution selection, installed HCI nodes and network interconnections, configured the integrated virtualization environment, and validated failover and load performance.', solution_fr: "Participation au choix de la solution, installation des nœuds HCI et interconnexions, configuration de la virtualisation intégrée et validation des performances et basculements.",
    result: 'Delivered a documented, tested, and resilient HCI foundation.', result_fr: "Mise en place d'une base HCI documentée, testée et résiliente.",
    tools: ['VMware vSAN', 'vSphere', 'vCenter Server', 'NSX', 'HCI', 'Fibre Channel', 'Windows Server', 'Linux', 'VLAN', 'SAN']
  },
  9: {
    date: 'March 2023', date_fr: 'Mars 2023', category: 'monitoring', icon: 'fa-solid fa-chart-line',
    client: 'Hôtel Amnjena · Marrakech', client_fr: 'Hôtel Amnjena · Marrakech',
    title: 'Hotel Monitoring & Virtualization', title_fr: "Supervision et virtualisation d'un hôtel",
    summary: 'Deployed monitoring and virtualization to stabilize systems in a continuous-availability hospitality environment.', summary_fr: "Déploiement de la supervision et de la virtualisation pour stabiliser les systèmes d'un environnement hôtelier à disponibilité continue.",
    challenge: 'A premium hotel needed proactive incident detection and better use of infrastructure resources.', challenge_fr: "Un établissement hôtelier haut de gamme avait besoin d'une détection proactive des incidents et d'une meilleure utilisation de ses ressources.",
    solution: 'Configured monitoring, alert thresholds, notifications, virtualization, and integration with the existing network, then supported technical teams.', solution_fr: "Configuration de la supervision, des seuils d'alerte et notifications, de la virtualisation et de l'intégration au réseau existant, puis accompagnement des équipes.",
    result: 'Improved system stability and proactive operational response.', result_fr: "Amélioration de la stabilité des systèmes et de la réactivité opérationnelle.",
    tools: ['Zabbix', 'VMware vSphere', 'ESXi', 'vCenter Server', 'SNMP', 'Windows Server', 'Linux', 'TCP/IP', 'VLAN']
  },
  10: {
    date: 'July 2022', date_fr: 'Juillet 2022', category: 'backup', icon: 'fa-solid fa-shield-halved',
    client: 'CTM · Rabat', client_fr: 'CTM · Rabat',
    title: 'High-Availability VMware & Backup', title_fr: 'VMware haute disponibilité et sauvegarde',
    summary: 'Built a high-availability VMware environment with Veeam Backup for critical transport operations.', summary_fr: "Mise en place d'un environnement VMware haute disponibilité avec Veeam Backup pour les opérations critiques d'une entreprise de transport.",
    challenge: 'A national transport company needed continuity for critical services and reliable virtual-machine protection.', challenge_fr: "Une entreprise nationale de transport devait assurer la continuité de ses services critiques et la protection fiable de ses machines virtuelles.",
    solution: 'Configured VMware HA, deployed Veeam, defined backup schedules and policies, tested restores and RTO/RPO, and documented and transferred operational knowledge.', solution_fr: "Configuration de VMware HA, déploiement de Veeam, définition des politiques et plannings, tests de restauration et RTO/RPO, documentation et transfert de compétences.",
    result: 'Established repeatable backup and recovery operations for a resilient VMware platform.', result_fr: "Mise en place d'opérations de sauvegarde et reprise reproductibles pour une plateforme VMware résiliente.",
    tools: ['VMware vSphere', 'ESXi', 'vCenter Server', 'HA', 'vMotion', 'Veeam Backup & Replication', 'Windows Server', 'Linux', 'SAN', 'NFS']
  },
  11: {
    date: 'March 2021', date_fr: 'Mars 2021', category: 'backup', icon: 'fa-solid fa-hard-drive',
    client: 'EURAFRIC · Rabat', client_fr: 'EURAFRIC · Rabat',
    title: 'Automated Backup Platform', title_fr: 'Plateforme de sauvegarde automatisée',
    summary: 'Designed and deployed an automated backup platform with retention, restore testing, and local knowledge transfer.', summary_fr: "Conception et déploiement d'une plateforme de sauvegarde automatisée avec rétention, tests de restauration et transfert de compétences.",
    challenge: 'The company needed reliable protection for critical data and a practical recovery capability in case of disaster.', challenge_fr: "L'entreprise avait besoin d'une protection fiable des données critiques et d'une capacité de reprise concrète en cas de sinistre.",
    solution: 'Analyzed requirements, proposed architecture, installed the platform and agents, automated backup policies, tested restores, and documented operations.', solution_fr: "Analyse des besoins, proposition d'architecture, installation de la plateforme et des agents, automatisation des politiques, tests de restauration et documentation.",
    result: 'Improved backup reliability and operational readiness for recovery scenarios.', result_fr: "Amélioration de la fiabilité des sauvegardes et de la préparation opérationnelle aux scénarios de reprise.",
    tools: ['Veeam Backup & Replication', 'NetBackup', 'Windows Server', 'Linux', 'NAS', 'SAN', 'NFS', 'SMB / CIFS', 'TCP/IP']
  },
  12: {
    date: 'January 2020 — September 2021', date_fr: 'Janvier 2020 — Septembre 2021', category: 'systems', icon: 'fa-solid fa-screwdriver-wrench',
    client: 'AGETIC · Bamako, Mali', client_fr: 'AGETIC · Bamako, Mali',
    title: 'Infrastructure Maintenance & Operations', title_fr: "Maintenance et exploitation des infrastructures",
    summary: 'Maintained public-sector infrastructure through audits, preventive maintenance, updates, inventory, and technical documentation.', summary_fr: "Maintien en condition opérationnelle d'infrastructures publiques grâce aux audits, à la maintenance préventive, aux mises à jour, à l'inventaire et à la documentation technique.",
    challenge: 'National digital-governance platforms required systematic checks and preventive maintenance to preserve service availability.', challenge_fr: "Les plateformes de gouvernance numérique nécessitaient des contrôles systématiques et une maintenance préventive pour préserver la disponibilité des services.",
    solution: 'Audited hardware and software health, maintained servers, network equipment and storage, handled anomalies, updated operating systems and firmware, and maintained inventories.', solution_fr: "Audit de l'état matériel et logiciel, maintenance des serveurs, équipements réseau et stockage, traitement des anomalies, mises à jour des systèmes et firmwares, et tenue des inventaires.",
    result: 'Supported stable day-to-day operations through disciplined maintenance and current infrastructure records.', result_fr: "Soutien à une exploitation stable grâce à une maintenance rigoureuse et à des référentiels d'infrastructure à jour.",
    tools: ['Windows Server', 'Linux', 'VMware vSphere', 'BIOS / UEFI', 'iDRAC', 'iLO', 'SNMP', 'Zabbix', 'Active Directory', 'TCP/IP']
  }
};

function renderProjectCards() {
  const grid = document.getElementById('portfolio-grid');
  if (!grid) return;

  const lang = (typeof getLang === 'function') ? getLang() : 'en';
  const pick = (project, field) => (lang === 'fr' && project[field + '_fr']) ? project[field + '_fr'] : project[field];
  const readCase = (typeof t === 'function') ? t('work.read-case') : 'Read case';

  grid.innerHTML = Object.entries(projectData).map(([id, project], index) => `
    <div class="work-card${index >= 6 ? ' project-hidden' : ''}" data-cat="${project.category}" data-pid="${id}">
      <div class="work-card-image">
        <div class="placeholder category-${project.category}"><i class="${project.icon}"></i></div>
      </div>
      <div class="work-card-content">
        <div class="work-card-meta"><span class="work-card-date">${pick(project, 'date')}</span><span aria-hidden="true"> · </span>${pick(project, 'client')}</div>
        <h3 class="work-title">${pick(project, 'title')}</h3>
        <p class="work-desc">${pick(project, 'summary')}</p>
        <div class="work-tools">
          ${project.tools.slice(0, 5).map(tool => `<span class="work-tool">${tool}</span>`).join('')}
        </div>
        <div class="work-hover"><span>${readCase}</span> <i class="fa-solid fa-arrow-right"></i></div>
      </div>
    </div>
  `).join('');

  grid.querySelectorAll('.work-card[data-pid]').forEach(card => {
    card.addEventListener('click', () => openProject(parseInt(card.dataset.pid, 10)));
  });

  const showMore = document.getElementById('projects-show-more');
  if (showMore) {
    const wrapper = showMore.closest('.projects-more-wrap');
    wrapper?.classList.toggle('is-hidden', Object.keys(projectData).length <= 6);
  }
}

function revealAllProjects() {
  document.querySelectorAll('.work-card.project-hidden').forEach(card => {
    card.classList.remove('project-hidden');
  });

  const activeFilter = document.querySelector('.fb.active')?.dataset.filter || 'all';
  document.querySelectorAll('.work-card[data-pid]').forEach(card => {
    card.style.display = activeFilter === 'all' || card.dataset.cat === activeFilter ? 'block' : 'none';
  });

  const showMore = document.getElementById('projects-show-more');
  if (showMore) {
    showMore.textContent = (typeof t === 'function') ? t('work.show-less') : 'SHOW LESS EXPERIENCE';
    showMore.dataset.expanded = 'true';
  }
}

function collapseProjects() {
  document.querySelectorAll('.work-card[data-pid]').forEach((card, index) => {
    if (index >= 6) card.classList.add('project-hidden');
  });

  const activeFilter = document.querySelector('.fb.active')?.dataset.filter || 'all';
  document.querySelectorAll('.work-card[data-pid]').forEach(card => {
    const show = !card.classList.contains('project-hidden') && (activeFilter === 'all' || card.dataset.cat === activeFilter);
    card.style.display = show ? 'block' : 'none';
  });

  const showMore = document.getElementById('projects-show-more');
  if (showMore) {
    showMore.textContent = (typeof t === 'function') ? t('work.show-more') : 'SHOW MORE EXPERIENCE';
    showMore.dataset.expanded = 'false';
  }
}

function toggleProjects() {
  const showMore = document.getElementById('projects-show-more');
  if (showMore?.dataset.expanded === 'true') {
    collapseProjects();
  } else {
    revealAllProjects();
  }
}

// Project Modal Content Generator
function openProject(id) {
  const p = projectData[id];
  if (!p) return;

  window.currentProjectId = id;
  const lang = (typeof getLang === 'function') ? getLang() : 'en';
  const pick = (field) => (lang === 'fr' && p[field + '_fr']) ? p[field + '_fr'] : p[field];
  const tr = (key) => (typeof t === 'function') ? t(key) : key;

  const content = `
    <h2 class="case-title">${pick('title')}</h2>
    <div class="case-section"><h4>${tr('modal.challenge')}</h4><p>${pick('challenge')}</p></div>
    <div class="case-section"><h4>${tr('modal.solution')}</h4><p>${pick('solution')}</p></div>
    <div class="case-section"><h4>${tr('modal.result')}</h4><p>${pick('result')}</p></div>
    <div class="case-tools">${p.tools.map(tool => `<span class="case-tool">${tool}</span>`).join('')}</div>
  `;

  const caseContent = document.getElementById('case-content');
  const overlay = document.getElementById('proj-overlay');
  if (caseContent && overlay) {
    caseContent.innerHTML = content;
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

// Attach click handlers to project cards
document.addEventListener('DOMContentLoaded', () => {
  renderProjectCards();
  const showMore = document.getElementById('projects-show-more');
  if (showMore) showMore.addEventListener('click', toggleProjects);

  // Expose openProject globally for any inline needs
  window.openProject = openProject;
});
