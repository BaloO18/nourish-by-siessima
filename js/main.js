/* Nourish by Siessima : logique du site (ne rien modifier ici pour changer le contenu : voir config.js) */
const $ = (s) => document.querySelector(s),
  el = (h) => {
    const d = document.createElement("div");
    d.innerHTML = h;
    return d.firstElementChild;
  };
document
  .querySelectorAll("[data-c]")
  .forEach((n) => (n.textContent = C[n.dataset.c]));
document.title = C.brand + " | Diététicienne";
$("#yr").textContent = new Date().getFullYear();
$("#aboutText").innerHTML = C.about
  .map((p, i) =>
    i ? `<p>${p}</p>` : `<p style="font:700 1.6rem Fraunces,serif">${p}</p>`,
  )
  .join("");
$("#tags").innerHTML = C.tags.map((t) => `<span>${t}</span>`).join("");
$("#svc").innerHTML = C.services
  .map(
    (s) =>
      `<li><svg><use href="#f"/></svg><div><h3>${s.t}</h3><p>${s.d}</p><div class="tags">${s.inc.map((t) => `<span>${t}</span>`).join("")}</div></div></li>`,
  )
  .join("");
const dlg = $("#dlg");
const dL = $("#dList");
function list(g) {
  $("#dTitle").textContent = g.n;
  dL.innerHTML = g.f
    .map(
      (x, i) =>
        `<li><button class="it" data-i="${i}"><svg><use href="#f"/></svg><span><b>${x.t}</b><small>${x.tag || ""}</small></span></button></li>`,
    )
    .join("");
  dL.querySelectorAll(".it").forEach(
    (b) => (b.onclick = () => item(g, g.f[b.dataset.i])),
  );
  dlg.scrollTop = 0;
}
function item(g, x) {
  const L = (h, a, o) =>
    a
      ? `<h4>${h}</h4><${o || "ul"}>${a.map((i) => `<li>${i}</li>`).join("")}</${o || "ul"}>`
      : "";
  dL.innerHTML = `<li class="dt"><button class="bk">← Retour</button><h3>${x.t}</h3>${x.tag ? `<p class="tg">${x.tag}</p>` : ""}${x.d ? `<p>${x.d}</p>` : ""}${L("Ingrédients", x.ing)}${L("Préparation", x.steps, "ol")}${L("À retenir", x.pts)}${x.u && x.u !== "#" ? `<a class="btn" href="${x.u}">Télécharger le guide</a>` : ""}<p class="nb">Conseils généraux : ils ne remplacent pas un suivi personnalisé.</p></li>`;
  dL.querySelector(".bk").onclick = () => list(g);
  dlg.scrollTop = 0;
}
C.library.forEach((g) => {
  const b = el(
    `<button class="folder"><span class="tab"><svg><use href="#f"/></svg></span><strong>${g.n}</strong><small>${g.f.length} contenus</small></button>`,
  );
  b.onclick = () => {
    list(g);
    dlg.showModal();
  };
  $("#lib").append(b);
});
$("#dClose").onclick = () => dlg.close();
dlg.addEventListener("click", (e) => {
  if (e.target === dlg) dlg.close();
});
$("#mail").textContent = C.email;
$("#mail").href = "mailto:" + C.email;
$("#meta").innerHTML =
  `📞 <a href="tel:${C.phone.replace(/[^\d+]/g, "")}">${C.phone}</a> • 📍 ${C.city}`;
$("#hours").textContent = "🕘 " + C.hours;
$("#cf").onsubmit = async (e) => {
  e.preventDefault();
  const fs = $("#fs"),
    bt = e.target.querySelector("button");
  if ($("#hp").value) return;
  if (C.formspree) {
    bt.disabled = true;
    fs.textContent = "Envoi en cours…";
    try {
      const r = await fetch("https://formspree.io/f/" + C.formspree, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          name: $("#cn").value,
          email: $("#ce").value,
          message: $("#cm").value,
          _subject: "Message de " + $("#cn").value + " (site Nourish)",
        }),
      });
      if (!r.ok) throw 0;
      e.target.reset();
      fs.textContent = "Merci ! Votre message est bien envoyé, je vous réponds très vite 🌸";
    } catch (err) {
      fs.textContent = "Oups, l'envoi n'a pas fonctionné. Écrivez-moi directement à " + C.email + ".";
    }
    bt.disabled = false;
    return;
  }
  location.href =
    "mailto:" +
    C.email +
    "?subject=" +
    encodeURIComponent("Message de " + $("#cn").value) +
    "&body=" +
    encodeURIComponent(
      $("#cm").value + "\n\n" + $("#cn").value + " - " + $("#ce").value,
    );
};
$("#links").innerHTML = C.links
  .filter((l) => l.u && l.u !== "#")
  .map((l) => `<a href="${l.u}" target="_blank" rel="noopener">${l.t}</a>`)
  .join(" · ");
/* vidéos : la première avec le son, les autres en boucle muette lancées quand elles sont visibles */
$("#vids").innerHTML = (C.videos || [])
  .map((v, i) =>
    i
      ? `<figure class="vd"><video src="${v.u}#t=0.1" muted loop playsinline preload="metadata"></video><figcaption>${v.t || ""}</figcaption></figure>`
      : `<figure class="vd main"><video src="${v.u}#t=0.1" controls playsinline preload="metadata"></video><figcaption>${v.t || ""}</figcaption></figure>`,
  )
  .join("");
if (!$("#vids").children.length) $("#videos").remove();
const vio = new IntersectionObserver(
  (es) =>
    es.forEach((e) =>
      e.isIntersecting ? e.target.play().catch(() => {}) : e.target.pause(),
    ),
  { threshold: 0.5 },
);
if (!matchMedia("(prefers-reduced-motion: reduce)").matches)
  document.querySelectorAll(".vd:not(.main) video").forEach((v) => vio.observe(v));
/* thème jour / nuit */
const root = document.documentElement,
  mode = $("#mode");
mode.setAttribute("aria-checked", root.dataset.theme === "dark");
mode.onclick = () => {
  const t = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = t;
  mode.setAttribute("aria-checked", t === "dark");
  try {
    localStorage.setItem("theme", t);
  } catch (e) {}
};
/* logo */
document
  .querySelectorAll("[data-logo]")
  .forEach(
    (b) => (b.innerHTML = `<img src="${C.logo}" alt="Logo ${C.brand}">`),
  );
/* photos */
document.querySelectorAll(".ph[data-ph]").forEach((b) => {
  const i = +b.dataset.ph,
    u = C.photos[i];
  b.innerHTML = u
    ? `<img src="${u}" alt="${i ? "Photo " + C.brand : "Portrait de " + C.by.replace("by ", "")}" loading="${b.closest(".pol") ? "eager" : "lazy"}">`
    : b.classList.contains("lg")
      ? '<svg><use href="#f"/></svg>'
      : `<div><svg><use href="#f"/></svg>Photo ${i + 1}</div>`;
});
/* pétales */
for (let i = 0; i < 22; i++) {
  const p = document.createElement("span"),
    w = 9 + Math.random() * 12;
  p.className = "pt";
  p.style.cssText = `left:${Math.random() * 100}%;width:${w}px;height:${w * 1.35}px;--dur:${10 + Math.random() * 10}s;--dl:-${Math.random() * 20}s;--sx:${(Math.random() * 160 - 80) | 0}px;opacity:${0.45 + Math.random() * 0.4}`;
  $("#petals").append(p);
}
/* tableau : dessin + post-it */
const cv = $("#cv"),
  bd = $("#board"),
  cx = cv.getContext("2d"),
  COL = ["#e46c91", "#6f9a73", "#f6c453", "#4a1630"],
  NOTE = ["#ffd1de", "#fff1a8", "#d3ecd5", "#e5d4f7"];
let col = COL[0],
  er = false,
  dr = false,
  lx,
  ly;
const fit = () => {
  const r = bd.getBoundingClientRect(),
    d = devicePixelRatio || 1,
    img = cv.width ? cx.getImageData(0, 0, cv.width, cv.height) : null;
  cv.width = r.width * d;
  cv.height = r.height * d;
  cx.scale(d, d);
  cx.lineCap = cx.lineJoin = "round";
  if (img) cx.putImageData(img, 0, 0);
};
fit();
addEventListener("resize", fit);
COL.forEach((c, i) => {
  const b = el(
    `<button class="sw" style="background:${c}" aria-label="Couleur ${i + 1}" aria-pressed="${!i}"></button>`,
  );
  b.onclick = () => {
    col = c;
    er = false;
    $("#eraser").setAttribute("aria-pressed", "false");
    document
      .querySelectorAll(".sw")
      .forEach((x) => x.setAttribute("aria-pressed", x === b));
  };
  $("#sws").append(b);
});
$("#eraser").onclick = (e) => {
  er = !er;
  e.currentTarget.setAttribute("aria-pressed", er);
};
$("#clear").onclick = () => cx.clearRect(0, 0, cv.width, cv.height);
const pt = (e) => {
  const r = cv.getBoundingClientRect();
  return [e.clientX - r.left, e.clientY - r.top];
};
cv.addEventListener("pointerdown", (e) => {
  dr = true;
  [lx, ly] = pt(e);
  cv.setPointerCapture(e.pointerId);
});
cv.addEventListener("pointermove", (e) => {
  if (!dr) return;
  const [x, y] = pt(e);
  cx.globalCompositeOperation = er ? "destination-out" : "source-over";
  cx.strokeStyle = col;
  cx.lineWidth = er ? 22 : 4;
  cx.beginPath();
  cx.moveTo(lx, ly);
  cx.lineTo(x, y);
  cx.stroke();
  lx = x;
  ly = y;
});
["pointerup", "pointercancel"].forEach((t) =>
  cv.addEventListener(t, () => (dr = false)),
);
$("#nf").onsubmit = (e) => {
  e.preventDefault();
  const v = $("#nt").value.trim();
  if (!v) return;
  const n = document.createElement("div");
  n.className = "note";
  n.textContent = v;
  n.style.background = NOTE[(Math.random() * NOTE.length) | 0];
  n.style.left = Math.max(0, Math.random() * (bd.clientWidth - 160)) + "px";
  n.style.top = Math.max(0, Math.random() * (bd.clientHeight - 120)) + "px";
  n.style.transform = `rotate(${Math.random() * 8 - 4}deg)`;
  n.onpointerdown = (ev) => {
    n.setPointerCapture(ev.pointerId);
    const ox = ev.clientX - n.offsetLeft,
      oy = ev.clientY - n.offsetTop;
    bd.append(n);
    n.onpointermove = (m) => {
      n.style.left =
        Math.min(bd.clientWidth - 150, Math.max(0, m.clientX - ox)) + "px";
      n.style.top =
        Math.min(bd.clientHeight - 60, Math.max(0, m.clientY - oy)) + "px";
    };
  };
  n.onpointerup = () => (n.onpointermove = null);
  bd.append(n);
  $("#nt").value = "";
};
/* fleurs décoratives + fleurs plantées au clic */
const hero = $("#hero"),
  mk = (x, y, s, d, cls) => {
    const n = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    n.setAttribute("class", "fl " + (cls || ""));
    n.style.cssText = `left:${x}px;top:${y}px;width:${s}px;margin:-${s / 2}px 0 0 -${s / 2}px;animation-delay:${d}s`;
    n.innerHTML = '<use href="#f"/>';
    hero.append(n);
  };
[
  [8, 12, 150],
  [88, 18, 90],
  [14, 78, 110],
  [90, 82, 170],
  [50, 92, 70],
  [70, 6, 60],
].forEach(([x, y, s], i) => {
  const w = hero.clientWidth,
    h = hero.clientHeight;
  mk((w * x) / 100, (h * y) / 100, s, -i * 1.5);
});
hero.addEventListener("click", (e) => {
  if (e.target.closest("a")) return;
  const r = hero.getBoundingClientRect();
  mk(e.clientX - r.left, e.clientY - r.top, 30 + Math.random() * 50, 0, "p");
});
/* apparition douce des sections (désactivée si l'utilisateur préfère moins d'animations) */
if (
  "IntersectionObserver" in window &&
  !matchMedia("(prefers-reduced-motion: reduce)").matches
) {
  let seen = false;
  const rio = new IntersectionObserver(
    (es) =>
      es.forEach((e) => {
        seen = true;
        if (e.isIntersecting) {
          e.target.classList.add("in");
          rio.unobserve(e.target);
        }
      }),
    { threshold: 0.12 },
  );
  document.querySelectorAll("section:not(#hero)").forEach((s) => {
    if (s.getBoundingClientRect().top > innerHeight) {
      s.classList.add("rv");
      rio.observe(s);
    }
  });
  // sécurité : si l'observateur ne répond jamais, on affiche tout
  setTimeout(() => {
    if (!seen) document.querySelectorAll(".rv").forEach((s) => s.classList.add("in"));
  }, 3000);
}
