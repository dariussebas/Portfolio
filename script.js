/* =========================================================
   Darius Sebastian | Portfolio script

   EVERYTHING YOU NEED TO EDIT IS IN THE FIRST FOUR BLOCKS:
     1. LINKS         your profile and evidence links
     2. SETTINGS      show or hide placeholders
     3. PROJECTS      your project case files
     4. COMPETITIONS  your CTFs, hackathons and competitions

   Any link left as "" shows a dashed button labelled
   "Placeholder" instead of a made-up URL.
   ========================================================= */


/* ---------- 1. LINKS ----------
   Paste the full address between the quotes, for example
   github: "https://github.com/your-username"
   For email, just type the address: email: "you@example.com" */
const LINKS = {
  // Main profiles
  github: "https://github.com/dariussebas",
  linkedin: "https://www.linkedin.com/in/darius-s-ba-hons",
  tryhackme: "",
  credly: "https://credly.com/users/darius-sebastian/badges/credly",
  email: "darius2007@hotmail.co.uk",

  // Individual certificate links (your Credly badge pages)
  certSecurityPlus: "",
  certIsc2CC: "",
  certIso27001LA: "",

  // TryHackMe write-ups (Practical learning section)
  thmWriteup1: "",
  thmWriteup2: "",

  // Achievements and community
  csamVideos: "",
  itEvolve: "https://itnation.connectwise.com/evolve",
  itEvolveScreenshots: "",
  itEvolveMaterials: "",
  grcClub: "https://grcengclub.com/",
  grcClubScreenshots: "",
  grcClubMaterials: ""
};


/* ---------- 2. SETTINGS ----------
   showPlaceholders: true  shows every unfinished item with a "Placeholder" label.
   showPlaceholders: false hides unfinished links, cards and text, so the site
   only shows what is complete. Switch to false before sending it to recruiters
   if you haven't filled everything in yet. */
const SETTINGS = {
  showPlaceholders: true
};


/* ---------- 3. PROJECTS ----------
   To add a project, copy the whole PRJ-001 block (from { to },),
   paste it below, and change the details. Give it a new unique "id"
   (lowercase, no spaces). Each project gets its own link:
   yoursite/#project-<id>

   Evidence values:
     ""     shows a labelled placeholder button
     null   hides that button (for example, no demo exists)
     a URL  shows a working button

   Screenshots: upload images to a folder called "images" in your
   repository, then set src to e.g. "images/phishing-headers.png". */
const PROJECTS = [
  {
    id: "phishing",
    caseId: "PRJ-001",
    status: "Complete",
    featured: true,
    title: "Phishing email investigation and IOC analysis",
    summary: "Investigated a simulated phishing email the way a SOC analyst would: header analysis, IOC extraction, threat intelligence checks and a documented verdict.",
    type: "Investigation",
    focus: "Email security, threat intelligence",
    tags: ["Email security", "Threat intelligence", "SOC", "IOC analysis"],

    what: "An end-to-end investigation of a simulated phishing email, handled the way a SOC analyst would deal with a suspicious message reported by an employee. It runs from the raw email headers through to extracted indicators of compromise, threat intelligence checks and a final, evidence-backed verdict.",

    why: "I wanted to understand how a SOC analyst investigates a suspicious email reported by an employee and decides whether it is malicious. With a background in email security, I wanted to work through the analyst’s side of the process myself, not just the filtering and policy side.",

    objective: "Analyse a simulated phishing email, identify its indicators of compromise and document the investigation clearly enough that someone else could follow the evidence and reach the same conclusion.",

    tools: ["Email header analysis", "MXToolbox", "VirusTotal", "EasyDMARC", "URL and domain analysis"],

    actions: [
      "Analysed the email headers to trace where the message really came from",
      "Checked the sender and the sending infrastructure behind the message",
      "Extracted the URLs and other indicators from the email",
      "Analysed the suspicious links and domains",
      "Checked each indicator against threat intelligence sources",
      "Documented the evidence at each stage of the investigation",
      "Reached a final verdict on whether the email was malicious"
    ],

    skills: [
      "Analysing suspicious emails methodically",
      "Identifying and extracting indicators of compromise",
      "Using threat intelligence to support an investigation",
      "Documenting security findings clearly"
    ],

    outcome: "A structured phishing investigation report containing the evidence, the analysis and a final verdict, along with a list of the indicators of compromise identified.",

    relevance: "Phishing is one of the most common ways attackers get a foothold in an organisation, and reviewing user-reported emails is a routine task for SOC and service desk teams. Triaging a report quickly, backing the verdict with evidence and handing over clear IOCs means faster blocking and better feedback to the person who reported it. It also links to the GRC side of my work: well-documented investigations feed incident records, awareness training and the evidence needed for ISO 27001 incident management controls.",

    evidence: {
      github: "",
      screenshots: "",
      writeup: "",
      demo: "",
      docs: ""
    },

    evidenceItems: [
      { label: "Investigation report", url: "" },
      { label: "Screenshots of the analysis", url: "" },
      { label: "Sample email headers", url: "" },
      { label: "IOC list", url: "" }
    ],

    screenshots: [
      { caption: "Email header analysis", src: "" },
      { caption: "Sender and domain checks", src: "" },
      { caption: "URL results in VirusTotal", src: "" },
      { caption: "Final IOC list", src: "" }
    ]
  },

  // Placeholder card. Delete this block once you add your second project.
  {
    id: "next-project",
    placeholder: true,
    caseId: "PRJ-002",
    title: "Next project",
    summary: "Placeholder. Copy the PRJ-001 block in script.js, change the details, and your next project will appear here with its own detail view."
  }
];


/* ---------- 4. COMPETITIONS ----------
   Fill in the fields below. Leave a field as "" to show a placeholder.
   To add another competition, copy the block and paste it below. */
const COMPETITIONS = [
  {
    name: "",
    format: "",        // e.g. "Online CTF, March 2026"
    result: "",        // e.g. "Placed 12th of 340 teams"
    about: "",
    areas: [],         // e.g. ["Web", "Forensics", "OSINT"]
    learned: "",
    evidence: {
      certificate: "",
      leaderboard: "",
      writeups: ""
    }
  }
];


/* ---------- Terminal lines in the hero ---------- */
const TERMINAL_LINES = [
  { cmd: "whoami", out: "Darius Sebastian, cyber security lead (GRC)" },
  { cmd: "cat focus.txt", out: "GRC engineering, ISO 27001, ISO 42001, Cyber Essentials" },
  { cmd: "ls evidence/", out: "phishing-investigation/  tryhackme/  certifications/" },
  { cmd: "./status --opportunities", out: "Open to new roles in cyber security and GRC" }
];


/* =========================================================
   You shouldn't need to edit anything below this line.
   ========================================================= */

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const isSet = (value) => typeof value === "string" && value.trim() !== "";

function esc(value) {
  return String(value ?? "").replace(/[&<>"']/g, (ch) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[ch]));
}

const ICONS = {
  github: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/></svg>',
  image: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="m21 16-5-5-9 9"/></svg>',
  pen: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/></svg>',
  play: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="m10 8.5 5.5 3.5-5.5 3.5z"/></svg>',
  doc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="M9 13h6M9 17h4"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>',
  close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>'
};

const EVIDENCE_TYPES = [
  { key: "github", label: "GitHub repository", icon: "github" },
  { key: "screenshots", label: "Screenshots", icon: "image" },
  { key: "writeup", label: "Write-up", icon: "pen" },
  { key: "demo", label: "Demo", icon: "play" },
  { key: "docs", label: "Technical documentation", icon: "doc" }
];

const PLACEHOLDER_BADGE = '<span class="ph-badge">Placeholder</span>';

/* A button that links to evidence, or a labelled placeholder */
function linkButton(label, url, icon) {
  const ic = icon ? ICONS[icon] : "";
  if (url === null) return "";
  if (isSet(url)) {
    return `<a class="btn btn-sm" href="${esc(url)}" target="_blank" rel="noopener noreferrer">${ic}<span>${esc(label)}</span></a>`;
  }
  if (!SETTINGS.showPlaceholders) return "";
  return `<a class="btn btn-sm is-placeholder" href="#" aria-disabled="true">${ic}<span>${esc(label)}</span>${PLACEHOLDER_BADGE}</a>`;
}

function textOrPlaceholder(value, hint) {
  if (isSet(value)) return esc(value);
  return SETTINGS.showPlaceholders ? `<span class="ph-text">[${esc(hint)}]</span>` : "";
}

/* ---------- Static links in the HTML (data-link="...") ---------- */
function applyLinks() {
  $$("[data-link]").forEach((el) => {
    const key = el.dataset.link;
    const value = LINKS[key];

    if (isSet(value)) {
      if (key === "email") {
        el.href = "mailto:" + value.trim();
        const label = $("[data-email-text]", el);
        if (label) label.textContent = value.trim();
      } else {
        el.href = value.trim();
        el.target = "_blank";
        el.rel = "noopener noreferrer";
      }
      return;
    }

    // Not set yet: show a clearly labelled placeholder (or hide it)
    if (!SETTINGS.showPlaceholders) {
      const item = el.closest("li");
      (item && item.parentElement.classList.contains("contact-links") ? item : el).hidden = true;
      return;
    }
    el.href = "#";
    el.classList.add("is-placeholder");
    el.setAttribute("aria-disabled", "true");
    el.insertAdjacentHTML("beforeend", PLACEHOLDER_BADGE);
  });

  if (!SETTINGS.showPlaceholders) {
    $$("[data-placeholder-block]").forEach((el) => { el.hidden = true; });
  }
}

/* ---------- Projects ---------- */
function projectCard(p) {
  if (p.placeholder) {
    return `
      <div class="project-card is-template">
        <div class="card-top"><span class="case-id">${esc(p.caseId)}</span>${PLACEHOLDER_BADGE}</div>
        <div class="card-main">
          <h3>${esc(p.title)}</h3>
          <p class="card-summary">${esc(p.summary)}</p>
        </div>
      </div>`;
  }

  const tags = (p.tags || []).map((t) => `<li>${esc(t)}</li>`).join("");
  const statusClass = /complete/i.test(p.status) ? " is-complete" : "";
  const facts = p.featured ? `
    <dl class="card-facts">
      <div><dt>Objective</dt><dd>${esc(p.objective)}</dd></div>
      <div><dt>Tools</dt><dd>${esc((p.tools || []).join(", "))}</dd></div>
      <div><dt>Outcome</dt><dd>${esc(p.outcome)}</dd></div>
    </dl>` : "";

  return `
    <a class="project-card${p.featured ? " is-featured" : ""}" href="#project-${esc(p.id)}" aria-label="Open project: ${esc(p.title)}">
      <div class="card-top">
        <span class="case-id">${esc(p.caseId)}</span>
        <span class="status${statusClass}">${esc(p.status)}</span>
      </div>
      <div class="card-main">
        <h3>${esc(p.title)}</h3>
        <p class="card-summary">${esc(p.summary)}</p>
        <ul class="tags">${tags}</ul>
      </div>
      ${facts}
      <span class="card-cta">Open project ${ICONS.arrow}</span>
    </a>`;
}

function renderProjects() {
  const grid = $("#project-grid");
  if (!grid) return;
  const visible = PROJECTS.filter((p) => !p.placeholder || SETTINGS.showPlaceholders);
  grid.innerHTML = visible.length
    ? visible.map(projectCard).join("")
    : '<p class="empty">Project case files are on their way.</p>';
}

function projectDetail(p) {
  const para = (text) => `<p>${esc(text)}</p>`;
  const list = (items) => `<ul class="dash-list">${(items || []).map((i) => `<li>${esc(i)}</li>`).join("")}</ul>`;
  const chips = (items) => `<ul class="tags">${(items || []).map((i) => `<li>${esc(i)}</li>`).join("")}</ul>`;

  const evidenceButtons = EVIDENCE_TYPES
    .map((t) => linkButton(t.label, p.evidence ? p.evidence[t.key] : "", t.icon))
    .join("");

  const evidenceItems = (p.evidenceItems || [])
    .filter((item) => isSet(item.url) || SETTINGS.showPlaceholders)
    .map((item) => `
      <li>
        <span>${esc(item.label)}</span>
        ${isSet(item.url)
          ? `<a class="btn btn-sm" href="${esc(item.url)}" target="_blank" rel="noopener noreferrer"><span>Open</span></a>`
          : PLACEHOLDER_BADGE}
      </li>`).join("");

  const shots = (p.screenshots || [])
    .filter((s) => isSet(s.src) || SETTINGS.showPlaceholders)
    .map((s, i) => isSet(s.src)
      ? `<figure class="shot">
           <a href="${esc(s.src)}" target="_blank" rel="noopener noreferrer"><img src="${esc(s.src)}" alt="${esc(s.caption)}" loading="lazy"></a>
           <figcaption>${esc(s.caption)}</figcaption>
         </figure>`
      : `<figure class="shot">
           <div class="shot-ph">${ICONS.image}<span>Screenshot placeholder</span><code>images/${esc(p.id)}-${i + 1}.png</code></div>
           <figcaption>${esc(s.caption)}</figcaption>
         </figure>`).join("");

  const evidenceBlock = `
    ${evidenceButtons ? `<div class="ev-buttons">${evidenceButtons}</div>` : ""}
    ${evidenceItems ? `<ul class="ev-list" aria-label="Evidence included">${evidenceItems}</ul>` : ""}
    ${shots ? `<div class="gallery">${shots}</div>` : ""}`;

  const rows = [
    ["What was the project?", para(p.what)],
    ["Why did I do it?", para(p.why)],
    ["What was the objective?", para(p.objective)],
    ["What tools and technologies did I use?", chips(p.tools)],
    ["What did I actually do?", list(p.actions)],
    ["What skills did I develop?", list(p.skills)],
    ["What was the outcome?", para(p.outcome)],
    ["What is the real-world relevance?", para(p.relevance)],
    ["Evidence", evidenceBlock]
  ];

  const statusClass = /complete/i.test(p.status) ? " is-complete" : "";

  return `
    <div class="dlg-bar">
      <div class="card-top">
        <span class="case-id">${esc(p.caseId)}</span>
        <span class="status${statusClass}">${esc(p.status)}</span>
      </div>
      <button class="dlg-close" type="button" data-close-dialog>${ICONS.close}<span>Close</span></button>
    </div>
    <header class="dlg-intro">
      <h2 id="dialog-title">${esc(p.title)}</h2>
      <p>${esc(p.summary)}</p>
      <dl class="dlg-meta">
        <div><dt>Type</dt><dd>${esc(p.type)}</dd></div>
        <div><dt>Focus</dt><dd>${esc(p.focus)}</dd></div>
        <div><dt>Status</dt><dd>${esc(p.status)}</dd></div>
      </dl>
    </header>
    <div class="dlg-body">
      ${rows.map(([q, a]) => `
        <section class="q">
          <h3>${q}</h3>
          <div class="q-answer">${a}</div>
        </section>`).join("")}
    </div>`;
}

/* ---------- Project detail view (dialog + #project-id links) ---------- */
const dialog = $("#project-dialog");
let lastTrigger = null;

function openProject(id) {
  const project = PROJECTS.find((p) => p.id === id && !p.placeholder);
  if (!project || !dialog) return;
  $("#dialog-content").innerHTML = projectDetail(project);
  if (!dialog.open) dialog.showModal();
  dialog.scrollTop = 0;
  document.body.classList.add("no-scroll");
  const closeBtn = $("[data-close-dialog]", dialog);
  if (closeBtn) closeBtn.focus();
}

function route() {
  const hash = decodeURIComponent(location.hash);
  if (hash.startsWith("#project-")) {
    openProject(hash.slice("#project-".length));
  } else if (dialog && dialog.open) {
    dialog.close();
  }
}

if (dialog) {
  dialog.addEventListener("close", () => {
    document.body.classList.remove("no-scroll");
    if (location.hash.startsWith("#project-")) {
      history.replaceState(null, "", location.pathname + location.search + "#projects");
    }
    if (lastTrigger) lastTrigger.focus({ preventScroll: true });
  });

  // Close when clicking the dark backdrop or the close button
  dialog.addEventListener("click", (e) => {
    if (e.target === dialog || e.target.closest("[data-close-dialog]")) dialog.close();
  });
}

/* ---------- Competitions ---------- */
function competitionCard(c) {
  const isTemplate = !isSet(c.name);
  const areas = (c.areas || []).filter(isSet);
  const ev = c.evidence || {};

  const areasHtml = areas.length
    ? `<ul class="tags">${areas.map((a) => `<li>${esc(a)}</li>`).join("")}</ul>`
    : `<p>${textOrPlaceholder("", "Add challenge categories, e.g. web, forensics, OSINT")}</p>`;

  const buttons = [
    linkButton("Certificate", ev.certificate, "doc"),
    linkButton("Leaderboard and results", ev.leaderboard, "image"),
    linkButton("Challenge write-ups", ev.writeups, "pen")
  ].join("");

  return `
    <article class="comp${isTemplate ? " is-template" : ""}">
      <div>
        ${isTemplate ? PLACEHOLDER_BADGE : ""}
        <h3>${textOrPlaceholder(c.name, "Add competition name")}</h3>
        <p class="comp-meta muted">${textOrPlaceholder(c.format, "Add type and date")}</p>
        <p class="comp-result">${isSet(c.result) ? esc(c.result) : "[Add result or placement]"}</p>
      </div>
      <div>
        <div class="block">
          <h4 class="sub">What the competition involved</h4>
          <p>${textOrPlaceholder(c.about, "Add what the competition was about")}</p>
        </div>
        <div class="block">
          <h4 class="sub">Challenges and areas covered</h4>
          ${areasHtml}
        </div>
        <div class="block">
          <h4 class="sub">What I learned</h4>
          <p>${textOrPlaceholder(c.learned, "Add what you learned")}</p>
        </div>
        ${buttons ? `<div class="block ev-buttons">${buttons}</div>` : ""}
      </div>
    </article>`;
}

function renderCompetitions() {
  const list = $("#comp-list");
  if (!list) return;
  const visible = COMPETITIONS.filter((c) => isSet(c.name) || SETTINGS.showPlaceholders);
  list.innerHTML = visible.length
    ? visible.map(competitionCard).join("")
    : '<p class="empty">Competition write-ups are on their way.</p>';
}

/* ---------- Hero terminal ---------- */
function runTerminal() {
  const el = $("#terminal");
  if (!el) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const make = (cls, text = "") => {
    const span = document.createElement("span");
    span.className = cls;
    span.textContent = text;
    return span;
  };
  const cursor = make("t-cursor");

  if (reduceMotion) {
    TERMINAL_LINES.forEach((line) => {
      el.append(make("t-prompt", "$ "), line.cmd, make("t-out", line.out));
    });
    el.append(make("t-prompt", "$ "), cursor);
    return;
  }

  let index = 0;
  const nextLine = () => {
    if (index >= TERMINAL_LINES.length) {
      el.append(make("t-prompt", "$ "), cursor);
      return;
    }
    const line = TERMINAL_LINES[index];
    const cmd = make("t-cmd");
    el.append(make("t-prompt", "$ "), cmd, cursor);

    let char = 0;
    const type = () => {
      if (char < line.cmd.length) {
        cmd.textContent += line.cmd[char++];
        setTimeout(type, 35 + Math.random() * 45);
      } else {
        setTimeout(() => {
          cursor.remove();
          el.append(make("t-out", line.out));
          index++;
          setTimeout(nextLine, 380);
        }, 240);
      }
    };
    setTimeout(type, 180);
  };
  setTimeout(nextLine, 500);
}

/* ---------- Navigation ---------- */
function setupNav() {
  const toggle = $("#nav-toggle");
  const links = $("#nav-links");
  const header = $("#site-header");

  const closeMenu = () => {
    links.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  };

  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  $$("a", links).forEach((a) => a.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeMenu(); });

  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Highlight the section currently on screen
  const navAnchors = $$("a", links);
  const sections = navAnchors
    .map((a) => document.getElementById(a.getAttribute("href").slice(1)))
    .filter(Boolean);

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navAnchors.forEach((a) => {
          a.classList.toggle("is-active", a.getAttribute("href") === "#" + entry.target.id);
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach((s) => observer.observe(s));
  }
}

/* ---------- Toast for placeholder links ---------- */
let toastTimer;
function showToast(message) {
  const toast = $("#toast");
  if (!toast) return;
  // Inside an open dialog the toast must live in the dialog to be visible
  const host = dialog && dialog.open ? dialog : document.body;
  if (toast.parentElement !== host) host.appendChild(toast);
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2600);
}

document.addEventListener("click", (e) => {
  const placeholder = e.target.closest(".is-placeholder");
  if (placeholder) {
    e.preventDefault();
    showToast("Placeholder: this link hasn’t been added yet.");
    return;
  }
  const card = e.target.closest("a.project-card");
  if (card) lastTrigger = card;
});

/* ---------- Start ---------- */
document.addEventListener("DOMContentLoaded", () => {
  applyLinks();
  renderProjects();
  renderCompetitions();
  setupNav();
  runTerminal();

  const year = $("#year");
  if (year) year.textContent = new Date().getFullYear();

  route();
  window.addEventListener("hashchange", route);
});
