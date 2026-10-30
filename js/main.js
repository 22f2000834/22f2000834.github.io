(function () {
  "use strict";

  const data = window.PORTFOLIO;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Inline SVG icons (trusted constants, the only strings ever set as HTML)
  const ICONS = {
    github:
      '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.7 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z"/></svg>',
    linkedin:
      '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"/></svg>',
    mail:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
    file:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M12 18v-6M9 15l3 3 3-3"/></svg>',
    external:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M8 7h9v9"/></svg>',
    paper:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V2H6.5A2.5 2.5 0 0 0 4 4.5v15Z"/><path d="M6.5 17A2.5 2.5 0 0 0 4 19.5 2.5 2.5 0 0 0 6.5 22H20v-5"/></svg>',
    box:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8 12 3 3 8v8l9 5 9-5V8Z"/><path d="m3 8 9 5 9-5M12 13v8"/></svg>',
    award:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.48 12.89 17 22l-5-3-5 3 1.52-9.11"/></svg>',
    code:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/></svg>',
    eye:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/></svg>',
    wave:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12h2M6 8v8M10 4v16M14 7v10M18 10v4M22 12h0"/></svg>',
    chart:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 5-6"/></svg>',
    sun:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>',
    moon:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"/></svg>',
    menu:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
    close:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>',
    copy:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',
    check:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
  };

  // Picks a card icon from a project's first category
  const CATEGORY_ICONS = {
    "Computer Vision": "eye",
    Speech: "wave",
    "Predictive Modeling": "chart",
    "Document AI": "paper",
  };

  // Tiny DOM builder: string children become text nodes, so content is never parsed as HTML
  function h(tag, attrs, ...children) {
    const el = document.createElement(tag);
    for (const [key, value] of Object.entries(attrs || {})) {
      if (value == null || value === false) continue;
      if (key === "class") el.className = value;
      else if (key === "html") el.innerHTML = value;
      else el.setAttribute(key, value === true ? "" : value);
    }
    for (const child of children.flat(Infinity)) {
      if (child == null || child === false || child === "") continue;
      el.append(child instanceof Node ? child : document.createTextNode(String(child)));
    }
    return el;
  }

  const icon = (name) => h("span", { class: "icon", "aria-hidden": "true", html: ICONS[name] });
  const $ = (id) => document.getElementById(id);
  const external = { target: "_blank", rel: "noopener noreferrer" };
  const tagList = (items, cls) =>
    h("ul", { class: "tags" }, items.map((t) => h("li", { class: "tag" + (cls ? " " + cls : "") }, t)));

  function socialLinks() {
    const { github, linkedin, email } = data.links;
    return h(
      "div",
      { class: "social" },
      github && h("a", { href: github, "aria-label": "GitHub", ...external }, icon("github")),
      linkedin && h("a", { href: linkedin, "aria-label": "LinkedIn", ...external }, icon("linkedin")),
      email && h("a", { href: "mailto:" + email, "aria-label": "Email" }, icon("mail"))
    );
  }

  // ───────── Sections ─────────

  function renderNav() {
    $("brand-initials").textContent = data.initials;
    $("brand-name").textContent = data.name;
  }

  function renderHero() {
    const typed = h("span", { id: "typed" });
    $("hero-copy").append(
      h("p", { class: "hero-greeting" }, "Hi, my name is"),
      h("h1", {}, data.name),
      h("p", { class: "hero-headline" }, data.headline),
      h(
        "p",
        { class: "typed-line" },
        h("span", { class: "prompt", "aria-hidden": "true" }, "~$"),
        h("span", { class: "sr-only" }, data.roles.join(", ")),
        h("span", { "aria-hidden": "true" }, typed, h("span", { class: "cursor" }))
      ),
      h("p", { class: "hero-tagline" }, data.tagline),
      h(
        "div",
        { class: "hero-actions" },
        h("a", { class: "btn btn-primary", href: "#projects" }, "View projects"),
        data.links.resume &&
          h("a", { class: "btn", href: data.links.resume, ...external }, icon("file"), "Resume"),
        socialLinks()
      )
    );
    startTyping(typed, data.roles);
    renderProfileCard();
  }

  // Renders data.profileCard as a syntax-highlighted Python dict
  function renderProfileCard() {
    const span = (cls, text) => h("span", { class: cls }, text);
    const value = (v) => {
      if (typeof v === "number") return span("c-num", Number.isInteger(v) ? v.toFixed(1) : String(v));
      if (Array.isArray(v)) {
        const parts = [];
        v.forEach((item, i) => {
          if (i) parts.push(", ");
          parts.push(value(item));
        });
        return ["[", ...parts, "]"];
      }
      return span("c-str", `"${v}"`);
    };

    const lines = [span("c-cm", "# about_me.py"), "\n", span("c-key", "profile"), " = {\n"];
    for (const [key, v] of Object.entries(data.profileCard)) {
      lines.push("    ", span("c-str", `"${key}"`), ": ", value(v), ",\n");
    }
    lines.push("}\n\n", span("c-kw", "print"), "(", span("c-str", '"let\'s build something"'), ")");

    $("hero-card").append(
      h(
        "div",
        { class: "code-card-bar", "aria-hidden": "true" },
        h("span", { class: "dot" }),
        h("span", { class: "dot" }),
        h("span", { class: "dot" }),
        h("span", { class: "code-card-title" }, "about_me.py")
      ),
      h("pre", {}, h("code", {}, lines))
    );
  }

  function renderStats() {
    $("stats").append(
      ...data.stats.map((s) => h("div", { class: "stat" }, h("dt", {}, s.value), h("dd", {}, s.label)))
    );
  }

  function renderAbout() {
    $("about-text").append(...data.about.map((p) => h("p", { class: "reveal" }, p)));

    if (data.certifications.length) {
      $("certs").append(
        h("h3", { class: "subhead" }, "Certifications"),
        h(
          "ul",
          { class: "cert-list" },
          data.certifications.map((c) =>
            h("li", {}, h("a", { href: c.url, ...external }, icon("award"), c.name))
          )
        )
      );
    }

    $("skills").append(
      ...data.skills.map((g) =>
        h("div", { class: "skill-group reveal" }, h("h3", {}, g.group), tagList(g.items, "tag-plain"))
      )
    );
  }

  function renderProjects() {
    const grid = $("project-grid");
    const linkDefs = [
      ["demo", "Demo", "external"],
      ["github", "Code", "github"],
      ["model", "Model", "box"],
      ["paper", "Paper", "paper"],
    ];

    const cards = data.projects.map((p) => {
      const links = linkDefs
        .filter(([key]) => p.links && p.links[key])
        .map(([key, label, ic]) =>
          h("a", { href: p.links[key], "aria-label": `${label}: ${p.title}`, ...external }, icon(ic), label)
        );

      return h(
        "article",
        { class: "card project reveal" + (p.featured ? " project-featured" : ""), "data-cats": p.categories.join("|") },
        h(
          "div",
          { class: "project-top" },
          h("span", { class: "project-icon" }, icon(CATEGORY_ICONS[p.categories[0]] || "code")),
          links.length > 0 && h("div", { class: "project-links" }, links)
        ),
        h("p", { class: "project-meta" }, [p.period, p.org].filter(Boolean).join(" · ")),
        h("h3", {}, p.title),
        h("p", { class: "project-summary" }, p.summary),
        p.highlights.length > 0 && h("ul", { class: "bullets" }, p.highlights.map((b) => h("li", {}, b))),
        p.result && h("p", { class: "project-result" }, "→ " + p.result),
        tagList(p.tags)
      );
    });
    grid.append(...cards);

    // Filter chips, built from the categories in use
    const categories = ["All", ...new Set(data.projects.flatMap((p) => p.categories))];
    const filters = $("project-filters");
    const chips = categories.map((cat) =>
      h("button", { class: "chip", type: "button", "aria-pressed": cat === "All" ? "true" : "false" }, cat)
    );
    filters.append(...chips);
    filters.addEventListener("click", (e) => {
      const chip = e.target.closest(".chip");
      if (!chip) return;
      const cat = chip.textContent;
      chips.forEach((c) => c.setAttribute("aria-pressed", String(c === chip)));
      cards.forEach((card) => {
        card.hidden = !(cat === "All" || card.dataset.cats.split("|").includes(cat));
      });
    });
  }

  function renderTimeline() {
    $("timeline").append(
      ...data.timeline.map((item) => {
        const isWork = item.type === "work";
        return h(
          "li",
          { class: "tl-item reveal" + (isWork ? " is-work" : "") },
          h("span", { class: "tl-dot", "aria-hidden": "true" }),
          h("div", { class: "tl-head" }, h("h3", {}, item.title), h("span", { class: "tl-date" }, item.date)),
          h(
            "p",
            { class: "tl-org" },
            h("span", {}, item.org),
            item.location && h("span", { class: "sep", "aria-hidden": "true" }, "/"),
            item.location && h("span", {}, item.location),
            h("span", { class: "badge" }, isWork ? "work" : "education")
          ),
          h(
            "div",
            { class: "tl-body" },
            item.meta && h("p", { class: "tl-meta" }, item.meta),
            item.bullets && h("ul", { class: "bullets" }, item.bullets.map((b) => h("li", {}, b))),
            item.courses && tagList(item.courses, "tag-plain")
          )
        );
      })
    );
  }

  function renderPublications() {
    $("pubs").append(
      ...data.publications.map((pub, i) =>
        h(
          "li",
          { class: "card pub reveal" },
          h("span", { class: "pub-index", "aria-hidden": "true" }, `[${String(i + 1).padStart(2, "0")}]`),
          h("h3", {}, pub.title),
          h("p", { class: "pub-venue" }, pub.venue),
          h(
            "div",
            { class: "pub-foot" },
            h("span", { class: "pub-date" }, pub.date),
            pub.url && h("a", { href: pub.url, ...external }, "Read paper", icon("external"))
          )
        )
      )
    );
  }

  function renderContact() {
    const { email, linkedin, github, resume } = data.links;
    const copyBtn = h(
      "button",
      { class: "icon-btn copy-btn", type: "button", "aria-label": "Copy email address", html: ICONS.copy }
    );
    copyBtn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(email);
        copyBtn.innerHTML = ICONS.check;
        copyBtn.classList.add("is-copied");
        copyBtn.setAttribute("aria-label", "Copied");
        setTimeout(() => {
          copyBtn.innerHTML = ICONS.copy;
          copyBtn.classList.remove("is-copied");
          copyBtn.setAttribute("aria-label", "Copy email address");
        }, 1600);
      } catch (e) {
        window.location.href = "mailto:" + email;
      }
    });

    $("contact-body").append(
      h("p", { class: "section-label" }, "// 05 · contact"),
      h("h2", { class: "section-title" }, "Let's work together"),
      h(
        "p",
        { class: "contact-text" },
        "I'm open to data science and machine learning opportunities, research collaborations, or just a good conversation about data. My inbox is always open."
      ),
      h(
        "div",
        { class: "email-row" },
        h("span", { class: "prompt", "aria-hidden": "true" }, "$ mail"),
        h("a", { href: "mailto:" + email }, email),
        copyBtn
      ),
      h(
        "div",
        { class: "contact-actions" },
        h("a", { class: "btn btn-primary", href: "mailto:" + email }, icon("mail"), "Say hello"),
        linkedin && h("a", { class: "btn", href: linkedin, ...external }, icon("linkedin"), "LinkedIn"),
        github && h("a", { class: "btn", href: github, ...external }, icon("github"), "GitHub"),
        resume && h("a", { class: "btn", href: resume, ...external }, icon("file"), "Resume")
      )
    );
  }

  function renderFooter() {
    $("footer").append(
      h("span", {}, `© ${new Date().getFullYear()} ${data.fullName}`),
      h("span", {}, "built with html · css · js")
    );
  }

  // ───────── Behavior ─────────

  function startTyping(el, words) {
    if (reducedMotion || words.length < 2) {
      el.textContent = words[0] || "";
      return;
    }
    let w = 0;
    let i = 0;
    let deleting = false;
    (function tick() {
      const word = words[w];
      i += deleting ? -1 : 1;
      el.textContent = word.slice(0, i);
      let delay = deleting ? 35 : 80;
      if (!deleting && i === word.length) {
        deleting = true;
        delay = 1800;
      } else if (deleting && i === 0) {
        deleting = false;
        w = (w + 1) % words.length;
        delay = 400;
      }
      setTimeout(tick, delay);
    })();
  }

  function setupTheme() {
    const btn = $("theme-toggle");
    const root = document.documentElement;
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const current = () => root.getAttribute("data-theme") || (media.matches ? "dark" : "light");
    const update = () => {
      const dark = current() === "dark";
      btn.innerHTML = dark ? ICONS.sun : ICONS.moon;
      btn.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
    };
    btn.addEventListener("click", () => {
      const next = current() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try {
        localStorage.setItem("theme", next);
      } catch (e) {}
      update();
    });
    media.addEventListener("change", update);
    update();
  }

  function setupMobileNav() {
    const btn = $("nav-toggle");
    const links = $("nav-links");
    const setOpen = (open) => {
      links.classList.toggle("is-open", open);
      btn.setAttribute("aria-expanded", String(open));
      btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      btn.innerHTML = open ? ICONS.close : ICONS.menu;
    };
    btn.addEventListener("click", () => setOpen(!links.classList.contains("is-open")));
    links.addEventListener("click", (e) => {
      if (e.target.closest("a")) setOpen(false);
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") setOpen(false);
    });
    setOpen(false);
  }

  function setupActiveNav() {
    if (!("IntersectionObserver" in window)) return;
    const navLinks = [...document.querySelectorAll(".nav-links a")];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          navLinks.forEach((a) => a.classList.toggle("is-active", a.hash === "#" + entry.target.id));
        }
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    document.querySelectorAll("main section[id]").forEach((s) => observer.observe(s));
  }

  function setupReveal() {
    if (reducedMotion || !("IntersectionObserver" in window)) return;
    document.documentElement.classList.add("has-reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
  }

  renderNav();
  renderHero();
  renderStats();
  renderAbout();
  renderProjects();
  renderTimeline();
  renderPublications();
  renderContact();
  renderFooter();

  setupTheme();
  setupMobileNav();
  setupActiveNav();
  setupReveal();
})();
