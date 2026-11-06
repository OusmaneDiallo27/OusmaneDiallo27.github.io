// Certificate data and gallery rendering for Ousmane Diallo.

const certificateCategories = {
  professional: {
    name: 'Professional Certifications', name_fr: 'Certifications professionnelles', icon: 'fa-solid fa-award',
    certificates: [
      ['vmware-vcp-dcv', 'VMware Certified Professional - Data Center Virtualization', 'VMware', 'Data_Center_Virtualization_2024.webp'],
      ['parallels-ras', 'Parallels RAS Technical Professional', 'Parallels', 'parallels-ras-technical-professional-tp.webp'],
      ['microsoft-ms900', 'Microsoft 365 Certified: Fundamentals (MS-900)', 'Microsoft', 'Microsoft_365_(MS-900).webp'],
      ['fortigate-70', 'Fortinet Certified Professional - FortiGate Security 7.0', 'Fortinet', 'FCP_FortiGate_Security_7.0.webp'],
      ['cisco-network-security', 'Cisco Academy Network Security', 'Cisco Networking Academy', 'Cisco_Network_Security.webp'],
      ['cisco-cybersecurity', 'Cybersecurity Essentials', 'Cisco Networking Academy', 'Cyber_Security_Essentials.webp'],
      ['aws-cloud-foundations', 'AWS Academy Cloud Foundations', 'Amazon Web Services', 'AWS_Academy_Cloud_Foundations.webp'],
      ['red-hat-openshift', 'Red Hat OpenShift Technical Seller', 'Red Hat', 'red-hat-openshift-technical-seller.1.webp']
    ]
  },
  infrastructure: {
    name: 'Infrastructure & Storage', name_fr: 'Infrastructure & stockage', icon: 'fa-solid fa-server',
    certificates: [
      ['hcip-storage', 'HCIP Storage', 'Huawei', 'HCIP_Storage.webp'],
      ['vmware-vsphere', 'Essentials of VMware vSphere', 'VMware', 'Essentiel_de_VMware_vSphere.webp'],
      ['dell-server', 'SE Server Credential', 'Dell Technologies', 'SE_Server_Credential_2025.webp'],
      ['dell-midrange-storage', 'SE MidRange Storage Credential', 'Dell Technologies', 'SE_MidRange_Storage_Credential_2025.webp'],
      ['dell-data-center-networking', 'SE Data Center and Edge Networking Credential', 'Dell Technologies', 'SE_Data_Center_and_Edge_Networking_Credential_2025.webp'],
      ['dell-edge', 'SE Edge Credential', 'Dell Technologies', 'SE_Edge_Credential_2025.webp'],
      ['dell-hci', 'SE Hyper-Converged Infrastructure Credential', 'Dell Technologies', 'SE_Hyper-Converged_Infrastructure_Credential_2025.webp'],
      ['dell-software-defined-storage', 'SE Software Defined Storage Credential', 'Dell Technologies', 'SE_Software_Defined_Storage_Credential_2025.webp'],
      ['dell-unstructured-storage', 'SE Unstructured Storage Credential', 'Dell Technologies', 'SE_Unstructured_Storage_Credential_2025.webp'],
      ['dell-data-protection', 'SE Data Protection Credential', 'Dell Technologies', 'SE_Data_Protection_Credential_2025.webp'],
      ['dell-data-science-ai', 'SE Data Science and AI Credential', 'Dell Technologies', 'SE_Data_Science_and_AI_Credential_2025.webp'],
      ['dell-endpoint-security', 'SE Dell Endpoint Security Credential', 'Dell Technologies', 'SE_Dell_Endpoint_Security_Credential_2025.webp'],
      ['dell-clients-vdi', 'SE Dell Clients for VDI Credential', 'Dell Technologies', 'SE_Dell_Clients_for_VDI_Credential_2025.webp'],
      ['dell-sales-vdi', 'Sales Dell Clients for VDI Credential', 'Dell Technologies', 'Sales_Dell_Clients_for_VDI_Credential_2025.webp'],
      ['dell-sales-hci', 'Sales Hyper-Converged Infrastructure Credential', 'Dell Technologies', 'Sales_Hyper-Converged_Infrastructure_Credential_2025.webp']
    ]
  },
  backup: {
    name: 'Backup & Data Protection', name_fr: 'Sauvegarde & protection des données', icon: 'fa-solid fa-shield-halved',
    certificates: [
      ['netbackup-analysis', 'Analyse informatique VSE NetBackup', 'Veritas', 'Analyse_informatique_VSE_Netbackup.webp'],
      ['netbackup-analytics', 'NetBackup IT Analytics for Veritas Partners', 'Veritas', 'NetBackup_IT_Analytics_for_Veritas_Partners.webp'],
      ['vse-netbackup-analytics', 'VSE+ NetBackup IT Analytics', 'Veritas', 'VSE+_Netbackup_IT_Analytics.webp'],
      ['vse-backup-exec', 'VSE Veritas Backup Exec 22', 'Veritas', 'VSE_Veritas_Backup_Exec_22.webp'],
      ['vse-plus-backup-exec', 'VSE+ Veritas Backup Exec 22', 'Veritas', 'VSE+_Veritas_Backup_Exec_22.webp'],
      ['vse-netbackup-100', 'VSE Veritas NetBackup 10.0', 'Veritas', 'VSE_Veritas_NetBackup_10.0.webp'],
      ['vse-netbackup-101', 'VSE+ Veritas NetBackup 10.1', 'Veritas', 'VSE+_Veritas_NetBackup_10.1.webp'],
      ['vse-netbackup-1011', "VSE Veritas NetBackup 10.1.1 - What's New", 'Veritas', "VSE_Veritas_NetBackup_10.1.1_-_What's_New.webp"],
      ['vse-netbackup-103', "VSE+ Veritas NetBackup 10.3 - What's New", 'Veritas', "VSE+_Veritas_NetBackup_10.3_-_What's_New.webp"],
      ['vse-enterprise-vault-15', 'VSE Veritas Enterprise Vault 15', 'Veritas', 'VSE+_Veritas_Enterprise_Vault_15.webp'],
      ['vse-enterprise-vault-150', 'VSE+ Veritas Enterprise Vault 15.0', 'Veritas', 'VSE+_Veritas_Enterprise_Vault_15.0.webp'],
      ['vse-infoscale-74', 'VSE Veritas InfoScale 7.4.x', 'Veritas', 'VSE_Veritas_InfoScale_7.4.x.webp'],
      ['vse-plus-infoscale-74', 'VSE+ Veritas InfoScale 7.4.x', 'Veritas', 'VSE+_Veritas_InfoScale_7.4.x.webp'],
      ['vse-infoscale-80', "VSE+ Veritas InfoScale 8.0 - What's New", 'Veritas', "VSE+_Veritas_InfoScale_8.0_-_What's_New.webp"],
      ['vse-infoscale-80100', "VSE+ Veritas InfoScale 8.0.100 - What's New", 'Veritas', "VSE+_Veritas_InfoScale_8.0.100_-_What's_New.webp"],
      ['vse-fundamentals', 'VSE Veritas Fundamentals', 'Veritas', 'VSE_Veritas_Fundamentals.webp']
    ]
  },
  additional: {
    name: 'Technical Training', name_fr: 'Formations techniques', icon: 'fa-solid fa-network-wired',
    certificates: [
      ['zabbix-explore', 'Zabbix Explored', 'Zabbix', 'Zabbix_Exploré_[2024].webp'],
      ['ccna-virtualization-sdn', 'Preparing for CCNA - Virtualization and SDN (200-301)', 'Cisco', 'Préparer_la_certification_CCNA_11_Virtualisation_et_SDN_(200-301).webp'],
      ['big-data-foundations', 'Les fondements du Big Data', 'Technical Training', 'Les_fondements_du_big_data_(2017).webp'],
      ['microsoft-365-fundamentals', 'Microsoft 365 Certified Fundamentals', 'Microsoft', 'microsoft-365-certified-fundamentals (1) (1) - Copie.webp']
    ]
  }
};

Object.values(certificateCategories).forEach(category => {
  category.certificates = category.certificates.map(([id, title, issuer, filename]) => ({
    id, title, title_fr: title, issuer,
    issuerCode: issuer.toLowerCase().replace(/[^a-z]+/g, '-').replace(/^-|-$/g, ''),
    level: 'course', date: 'Certificate image available', date_fr: 'Certificat disponible en image',
    description: `${title} issued by ${issuer}.`, description_fr: `${title} délivré par ${issuer}.`,
    image: `img/certificates/${filename}`, link: ''
  }));
});

let totalCertificates = Object.values(certificateCategories).reduce((sum, category) => sum + category.certificates.length, 0);
let activeIssuer = 'all';

function certText(cert, field) {
  const lang = typeof getLang === 'function' ? getLang() : 'en';
  return lang === 'fr' && cert[`${field}_fr`] ? cert[`${field}_fr`] : cert[field];
}

function escapeHtml(value) {
  return String(value || '').replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
}

function renderStatsBar() {
  const container = document.getElementById('cert-stats');
  if (!container) return;
  const issuers = new Set(Object.values(certificateCategories).flatMap(category => category.certificates.map(cert => cert.issuerCode)));
  container.innerHTML = `<div class="cert-stat-pill"><i class="fa-solid fa-layer-group"></i><strong>${Object.keys(certificateCategories).length}</strong> ${escapeHtml(t('cert.categories'))}</div><div class="cert-stat-pill"><i class="fa-solid fa-building"></i><strong>${issuers.size}</strong> ${escapeHtml(t('cert.issuers'))}</div>`;
}

function renderIssuerTabs() {
  const container = document.getElementById('cert-filters');
  if (!container) return;
  const names = new Map();
  Object.values(certificateCategories).forEach(category => category.certificates.forEach(cert => names.set(cert.issuerCode, cert.issuer)));
  const issuers = [['all', t('cert.filter-all-issuers')], ...names];
  container.innerHTML = issuers.map(([code, label]) => `<button class="cert-filter-tab${activeIssuer === code ? ' active' : ''}" data-filter="${escapeHtml(code)}" aria-pressed="${activeIssuer === code}">${escapeHtml(label)}</button>`).join('');
  container.querySelectorAll('.cert-filter-tab').forEach(button => button.addEventListener('click', () => { activeIssuer = button.dataset.filter; renderCertifications(); }));
}

function renderCategories() {
  const container = document.getElementById('cert-categories');
  if (!container) return;
  const openKeys = new Set([...container.querySelectorAll('.cert-category.open')].map(element => element.dataset.category));
  container.innerHTML = Object.entries(certificateCategories).map(([key, category]) => {
    const visible = activeIssuer === 'all' ? category.certificates : category.certificates.filter(cert => cert.issuerCode === activeIssuer);
    if (!visible.length) return '';
    const items = visible.map(cert => `<div class="cert-item" data-cert-id="${escapeHtml(cert.id)}" data-category="${key}" role="button" tabindex="0"><div class="cert-item-image"><img src="${escapeHtml(cert.image)}" alt="${escapeHtml(certText(cert, 'title'))}" loading="lazy"></div><div class="cert-item-info"><div class="cert-item-title">${escapeHtml(certText(cert, 'title'))}</div><div class="cert-item-issuer" data-issuer="${escapeHtml(cert.issuerCode)}">${escapeHtml(cert.issuer)}</div><div class="cert-item-meta"><span class="cert-item-date">${escapeHtml(certText(cert, 'date'))}</span></div></div><div class="cert-item-arrow"><i class="fa-solid fa-arrow-right"></i></div></div>`).join('');
    return `<div class="cert-category${openKeys.has(key) ? ' open' : ''}" data-category="${key}"><button class="cert-category-header" type="button"><span class="cert-category-icon"><i class="${category.icon}"></i></span><span class="cert-category-meta"><span class="cert-category-name">${escapeHtml(certText(category, 'name'))}<span class="cert-category-count">${visible.length}</span></span><span class="cert-category-desc">${escapeHtml(certText(category, 'description'))}</span></span><span class="cert-category-toggle"><i class="fa-solid fa-chevron-down"></i></span></button><div class="cert-category-body"><div class="cert-items-grid">${items}</div></div></div>`;
  }).join('');
  container.querySelectorAll('.cert-category-header').forEach(button => button.addEventListener('click', () => button.parentElement.classList.toggle('open')));
  container.querySelectorAll('.cert-item').forEach(item => {
    const open = () => openCertModal(certificateCategories[item.dataset.category].certificates.find(cert => cert.id === item.dataset.certId));
    item.addEventListener('click', open);
    item.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') open(); });
  });
}

function updateTotalCount() {
  const element = document.getElementById('cert-count');
  if (element) element.textContent = `${totalCertificates}+ ${t('cert.count-suffix')}`;
}

function renderCertifications() { renderStatsBar(); renderIssuerTabs(); renderCategories(); updateTotalCount(); }

function openCertModal(cert) {
  if (!cert) return;
  const content = document.getElementById('cert-content');
  const overlay = document.getElementById('cert-overlay');
  if (!content || !overlay) return;
  content.innerHTML = `<div class="cert-modal-issuer-tag" data-issuer="${escapeHtml(cert.issuerCode)}">${escapeHtml(cert.issuer)}</div><h2 class="cert-modal-title">${escapeHtml(certText(cert, 'title'))}</h2><div class="cert-modal-date"><span><i class="fa-regular fa-calendar"></i>${escapeHtml(certText(cert, 'date'))}</span></div><div class="cert-modal-image-wrap"><img src="${escapeHtml(cert.image)}" alt="${escapeHtml(certText(cert, 'title'))}"></div><p class="cert-modal-desc">${escapeHtml(certText(cert, 'description'))}</p>`;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  window.currentCert = cert;
}

document.addEventListener('DOMContentLoaded', renderCertifications);
