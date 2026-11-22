"use strict";

// Keep project details here. Each entry becomes a card in the projects section.
// Leave the array empty until there is real work to show.
const projects = [];

// Update these milestones as the journey progresses. Future goals remain future-facing.
const milestones = [
  { date: "2026", status: "THE BEGINNING", title: "Starting B.Tech Computer Science Engineering", description: "Beginning my undergraduate journey and building a foundation in computer science.", current: true },
  { date: "Currently", status: "LEARNING", title: "Computer science fundamentals & programming", description: "Learning core concepts and taking my first steps with programming." },
  { date: "Exploring", status: "IN PROGRESS", title: "Cybersecurity, AI & machine learning", description: "Following my curiosity into the fields I’m most excited to understand." },
  { date: "Future goals", status: "AHEAD", title: "Build real-world projects", description: "Develop practical technical skills and turn what I learn into things I can share." }
];

const projectHost = document.querySelector("#project-list");
const timelineHost = document.querySelector("#journey-timeline");
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".primary-nav");

function renderProjects() {
  if (!projectHost) return;
  if (projects.length === 0) {
    projectHost.innerHTML = `
      <div class="project-empty">
        <span class="empty-symbol" aria-hidden="true">✳</span>
        <h3>Every journey begins with an idea.</h3>
        <p>I’m currently learning, exploring and building my foundation in technology. This space will soon showcase the projects I create along the way.</p>
        <span class="coming-soon">PROJECTS COMING SOON</span>
      </div>`;
    return;
  }

  projectHost.innerHTML = projects.map((project) => {
    const tags = (project.technologies || []).map((technology) => `<span>${escapeHtml(technology)}</span>`).join("");
    const image = project.image
      ? `<img src="${escapeAttribute(project.image)}" alt="${escapeAttribute(project.imageAlt || `${project.name} screenshot`)}" loading="lazy">`
      : "PROJECT IMAGE / SCREENSHOT";
    const links = [
      project.github ? `<a href="${escapeAttribute(project.github)}" target="_blank" rel="noopener noreferrer">GitHub ↗</a>` : "",
      project.live ? `<a href="${escapeAttribute(project.live)}" target="_blank" rel="noopener noreferrer">Live project ↗</a>` : "",
      project.details ? `<a href="${escapeAttribute(project.details)}">Details ↗</a>` : ""
    ].filter(Boolean).join("");
    return `<article class="project-card">
      <div class="project-card-media">${image}</div>
      <div><span class="eyebrow">PROJECT</span><h3>${escapeHtml(project.name)}</h3>
      <p>${escapeHtml(project.description || "")}</p><div class="project-tags">${tags}</div>
      <div class="project-links">${links}</div></div>
    </article>`;
  }).join("");
}

function renderMilestones() {
  if (!timelineHost) return;
  timelineHost.innerHTML = milestones.map((item) => `
    <li class="timeline-item${item.current ? " is-current" : ""}">
      <span class="timeline-marker" aria-hidden="true"></span>
      <div class="timeline-date">${escapeHtml(item.date)}<span class="timeline-status">${escapeHtml(item.status)}</span></div>
      <div class="timeline-copy"><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.description)}</p></div>
    </li>`).join("");
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
}

function escapeAttribute(value) {
  return escapeHtml(value).replace(/`/g, "&#96;");
}

renderProjects();
renderMilestones();
document.querySelector("#year").textContent = String(new Date().getFullYear());

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal, .interest-card, .timeline-item").forEach((element) => revealObserver.observe(element));

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const matchingLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
      if (!matchingLink) return;
      document.querySelectorAll(".nav-link").forEach((link) => link.classList.remove("is-active"));
      matchingLink.classList.add("is-active");
    });
  }, { rootMargin: "-38% 0px -52% 0px" });
  document.querySelectorAll("main > section[id]").forEach((section) => sectionObserver.observe(section));
}

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
  navigation.classList.toggle("is-open", !isOpen);
});

navigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
    navigation.classList.remove("is-open");
  }
});

document.querySelector("#contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const name = String(data.get("name")).trim();
  const email = String(data.get("email")).trim();
  const message = String(data.get("message")).trim();
  const subject = encodeURIComponent(`Portfolio message from ${name}`);
  const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
  document.querySelector("#form-feedback").textContent = "Your email app should open with the message ready to review.";
  window.location.href = `mailto:ubaidnabi94@gmail.com?subject=${subject}&body=${body}`;
});
