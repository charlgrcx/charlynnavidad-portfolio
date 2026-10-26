(function () {
  "use strict";

  var TOOLS = [
    { name: "Canva", src: "assets/images/tools/canva.png" },
    { name: "Adobe Photoshop", src: "assets/images/tools/photoshop.png" },
    { name: "Figma", src: "assets/images/tools/figma.png" },
    { name: "CapCut", src: "assets/images/tools/capcut.png" },
  ];

  /* ---- Creative expertise buttons (About section) ----------------------- */
  var SKILLS = [
    {
      id: "graphic",
      label: "Graphic Design",
      cls: "sk sk-a",
      chips: [
        "Poster Design",
        "Social Media Graphics",
        "Promotional Materials",
        "Layout Design",
      ],
    },
    {
      id: "photo",
      label: "Photography",
      cls: "sk sk-b",
      chips: ["Product Photography", "Creative Photography", "Photo Editing"],
    },
    {
      id: "video",
      label: "Video & Multimedia",
      cls: "sk sk-c",
      chips: ["Video Editing", "Promotional Video Production"],
    },
  ];

  var PROJECTS = [
    {
      id: "messi",
      category: "poster",
      meta: "01 · Poster",
      title: "player spotlight",
      description:
        "A player-focused poster featuring Lionel Messi, created in Adobe Photoshop. The concept relates to his rating for this year's FIFA World Cup.",
      items: [
        {
          type: "image",
          src: "assets/images/projects/messi-poster-new.jpg",
          alt: "Player Spotlight - Lionel Messi",
          width: 5940,
          height: 7920,
        },
      ],
    },

    {
      id: "sports",
      category: "social",
      meta: "02 · Social media",
      title: "sports campaign",
      description:
        "A three-part sports social media campaign featuring Game Day, Player Spotlight, and Final Score. With bold typography, dynamic compositions, and high-energy visuals, the series brings together key moments of the game through a consistent and engaging design.",
      items: [
        {
          type: "image",
          src: "assets/images/projects/SC-GAME DAY.png",
          alt: "Game Day",
          width: 1080,
          height: 1350,
        },
        {
          type: "image",
          src: "assets/images/projects/SC-FINAL SCORE.png",
          alt: "Final Score",
          width: 1080,
          height: 1350,
        },

        {
          type: "image",
          src: "assets/images/projects/SC-PLAYER OF THE GAME.png",
          alt: "Player of the Game",
          width: 1080,
          height: 1350,
        },
      ],
    },

    {
      id: "stay",
      category: "social",
      meta: "03 · Social media · client work",
      title: "staycation promos",
      description:
        "A collection of promotional materials I created for a condo staycation business. I experimented with different layouts, colors, and styles to keep each post fresh and appealing.",
      items: [
        {
          type: "image",
          src: "assets/images/projects/staycation-01.jpg",
          alt: "Staycation promo: Hello Weekend! post",
          width: 658,
          height: 552,
        },
        {
          type: "image",
          src: "assets/images/projects/staycation-02.jpg",
          alt: "Staycation promo: Another satisfied guest post",
          width: 752,
          height: 631,
        },
        {
          type: "image",
          src: "assets/images/projects/staycation-03.jpg",
          alt: "Staycation promo: Thank you post",
          width: 658,
          height: 552,
        },
        {
          type: "image",
          src: "assets/images/projects/staycation-04.jpg",
          alt: "Staycation promo: Another satisfied customer post",
          width: 658,
          height: 552,
        },
      ],
    },

    {
      id: "t10",
      category: "social",
      meta: "04 · Social media",
      title: "content promotions",
      description:
        "A collection of social media graphics created for a mashup YouTuber. Every design reflects the theme of the content while maintaining a cohesive visual identity.",
      items: [
        {
          type: "image",
          src: "assets/images/projects/content-promo-01.jpg",
          alt: "T10YOB mashup promo graphic, 1 of 4",
          width: 697,
          height: 697,
        },
        {
          type: "image",
          src: "assets/images/projects/content-promo-02.jpg",
          alt: "T10YOB mashup promo graphic, 2 of 4",
          width: 700,
          height: 694,
        },
        {
          type: "image",
          src: "assets/images/projects/content-promo-03.jpg",
          alt: "T10YOB mashup promo graphic, 3 of 4",
          width: 697,
          height: 697,
        },
        {
          type: "image",
          src: "assets/images/projects/content-promo-04.jpg",
          alt: "T10YOB mashup promo graphic, 4 of 4",
          width: 697,
          height: 697,
        },
      ],
    },

    {
      id: "food",
      category: "poster",
      meta: "05 · Poster",
      title: "food posters",
      items: [
        {
          type: "image",
          src: "assets/images/projects/food-poster-01.jpg",
          description:
            "A promotional poster for unlimited wings featuring bold typography, appetizing food imagery, and catchy wording suited for social media and designed to capture audience attention.",
          alt: "Food Poster: Unlimited Chicken Wings Promo",
          width: 756,
          height: 756,
        },
        {
          type: "image",
          src: "assets/images/projects/food-poster-02.jpg",
          description:
            "A promotional poster highlighting Turoy through a food-focused layout and visual elements designed to capture attention.",
          alt: "Food Poster: Turoy, where turon meets tikoy",
          width: 756,
          height: 1070,
        },
      ],
    },
  ];

  var PHOTOS = [
    // ===== Column 1 (photos 1-5) =====
    // Photo 1 — Landscape
    {
      file: "assets/photography/christmas-phone.jpg",
      title: "A Moment Detached",
      ratio: 4 / 3,
    },
    // Photo 2 — Portrait
    {
      file: "assets/photography/sch-cats.jpg",
      title: "Meanwhile, Behind",
      ratio: 3 / 4,
    },
    // Photo 3 — Landscape
    {
      file: "assets/photography/luneta-labor.jpg",
      title: "Beneath the Monument",
      ratio: 4 / 3,
    },
    // Photo 4 — Portrait
    {
      file: "assets/photography/sch-twoate.jpg",
      title: "Behind the Glass",
      ratio: 3 / 4,
    },
    // Photo 5 — Landscape
    {
      file: "assets/photography/parking-pic.JPG",
      title: "Where Light Remains",
      ratio: 4 / 3,
    },
    // ===== Column 2 (photos 6-10) =====
    // Photo 6 — Portrait
    {
      file: "assets/photography/beach-araw.JPG",
      title: "Little Light",
      ratio: 3 / 4,
    },
    // Photo 7 — Landscape
    {
      file: "assets/photography/beach-run.JPG",
      title: "Breakaway",
      ratio: 4 / 3,
    },
    // Photo 8 — Portrait
    {
      file: "assets/photography/sch-lib.jpg",
      title: "Aisle Five",
      ratio: 3 / 4,
    },
    // Photo 9 — Landscape
    {
      file: "assets/photography/christmas-eyes.jpg",
      title: "Under Christmas Lights",
      ratio: 4 / 3,
    },
    // Photo 10 — Portrait
    {
      file: "assets/photography/sch-twoworlds.jpg",
      title: "The Other Side",
      ratio: 3 / 4,
    },
    // ===== Column 3 (photos 11-15) =====
    // Photo 11 — Portrait
    {
      file: "assets/photography/sch-kuya.jpg",
      title: "Unscripted",
      ratio: 3 / 4,
    },
    // Photo 12 — Landscape
    {
      file: "assets/photography/christmas-stare.jpg",
      title: "Together, Elsewhere",
      ratio: 4 / 3,
    },
    // Photo 13 — Portrait
    {
      file: "assets/photography/luneta-kids.jpg",
      title: "Lamp Post Waltz",
      ratio: 3 / 4,
    },
    // Photo 14 — Landscape
    {
      file: "assets/photography/beach-nalipad.JPG",
      title: "Weightless",
      ratio: 4 / 3,
    },
    // Photo 15 — Portrait
    {
      file: "assets/photography/sch-vball.jpg",
      title: "Ground Level",
      ratio: 3 / 4,
    },
    // ===== Column 4 (photos 16-20) =====
    // Photo 16 — Landscape
    {
      file: "assets/photography/beach-kalbo.JPG",
      title: "Low Tide",
      ratio: 4 / 3,
    },
    // Photo 17 — Portrait
    {
      file: "assets/photography/sch-nushirt.JPG",
      title: "A Path Illuminated",
      ratio: 3 / 4,
    },
    // Photo 18 — Landscape
    {
      file: "assets/photography/IMG_0399.jpg",
      title: "Across the Distance",
      ratio: 4 / 3,
    },
    // Photo 19 — Portrait
    {
      file: "assets/photography/sch-elev.jpg",
      title: "Held Light",
      ratio: 3 / 4,
    },
    // Photo 20 — Landscape
    {
      file: "assets/photography/luneta-adel.JPG",
      title: "Behind the Lens",
      ratio: 4 / 3,
    },
  ];

  var PRODUCTS = [
    // Product 1 — Landscape
    {
      file: "assets/product/1blackmamba-tower-ad.png",
      title: "[Product name 1]",
    },
    // Product 2 — Landscape
    { file: "assets/product/2soju-ad.JPG", title: "[Product name 2]" },
    // Product 3 — Landscape
    {
      file: "assets/product/3blackmamba-spideyad.png",
      title: "[Product name 3]",
    },
    // Product 4 — Landscape
    { file: "assets/product/4soju-ad.JPG", title: "[Product name 4]" },
    // Product 5 — Landscape
    { file: "assets/product/5blackmamba-ad.png", title: "[Product name 5]" },
  ];

  var VIDEOS = [
    {
      title: "Wes Anderson-style Short Film",
      file: "assets/video/WesReel_Navidad.mp4",
      ratio: 9 / 16,
    },
    {
      title: "Pahiyas Festival App Teaser",
      file: "assets/video/PahiyasFestivalTeaser.mp4",
      ratio: 16 / 9,
      poster: "assets/video/pahiyas-teaser-thumb.png",
    },
  ];

  /* ======================================================================
     PART 2 - HELPERS (small tools used below)
     ====================================================================== */

  // Find one element / all elements by CSS selector.
  function $(selector, root) {
    return (root || document).querySelector(selector);
  }
  function $$(selector, root) {
    return Array.prototype.slice.call(
      (root || document).querySelectorAll(selector),
    );
  }

  // Make text safe to put inside HTML (so a title like "A & B" cannot break the page).
  function esc(text) {
    return String(text).replace(/[&<>"']/g, function (c) {
      return {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      }[c];
    });
  }

  // True when the visitor asked their device to reduce motion.
  function prefersReducedMotion() {
    return !!(
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }

  // True on devices with a mouse (hover). False on phones and tablets.
  function canHover() {
    return !!(
      window.matchMedia &&
      window.matchMedia("(hover: hover) and (pointer: fine)").matches
    );
  }

  // "no. 01", "no. 02" ...
  function photoNumber(i) {
    return "no. " + (i + 1 < 10 ? "0" : "") + (i + 1);
  }

  /* ======================================================================
     PART 3 - THE FEATURES
     ====================================================================== */

  // The page "remembers" what is currently showing in this one object.
  var state = {
    category: "all", // which Work tab is open: 'all', 'social' or 'poster'
    index: 0, // which design is in the middle of the project gallery
    skill: "graphic", // which Creative expertise button is selected
    swapping: false, // true for a moment while one tab fades into another
    previewing: null, // which phone (0 or 1) is being previewed
  };

  /* ---------- About: tools and creative expertise ---------- */

  function renderTools() {
    $("#tools-list").innerHTML = TOOLS.map(function (t) {
      return (
        '<div style="display: flex; flex-direction: column; align-items: center; gap: 10px">' +
        '<div class="toolframe"><img src="' +
        esc(t.src) +
        '" alt="" style="width: 58px; height: 58px; object-fit: contain"></div>' +
        '<span style="font-size: 14px; font-weight: 600">' +
        esc(t.name) +
        "</span></div>"
      );
    }).join("");
  }

  function renderSkills() {
    var tabs = $("#skill-tabs");
    tabs.innerHTML = "";
    SKILLS.forEach(function (k) {
      var on = state.skill === k.id;
      var button = document.createElement("button");
      button.className = k.cls + (on ? " on" : "");
      button.setAttribute("aria-pressed", String(on));
      button.textContent = k.label;
      button.addEventListener("click", function () {
        state.skill = k.id;
        renderSkills();
      });
      tabs.appendChild(button);
    });
    var active = SKILLS.filter(function (k) {
      return k.id === state.skill;
    })[0];
    $("#skill-chips").innerHTML =
      '<div style="display: flex; flex-wrap: wrap; gap: 10px">' +
      active.chips
        .map(function (c) {
          return '<span class="chip">' + esc(c) + "</span>";
        })
        .join("") +
      "</div>";
  }

  /* ---------- Work: tabs (All / Social media / Posters) ---------- */

  var TABS = [
    { id: "all", label: "All" },
    { id: "social", label: "Social media" },
    { id: "poster", label: "Posters" },
  ];

  // Every individual design from every project, as one flat list.
  var ALL_CARDS = [];
  PROJECTS.forEach(function (p) {
    p.items.forEach(function (it) {
      ALL_CARDS.push({ item: it, project: p });
    });
  });

  var cardList = []; // the designs shown for the current tab

  function currentCards() {
    return ALL_CARDS.filter(function (c) {
      return state.category === "all" || c.project.category === state.category;
    });
  }

  // Switch to another tab with a short fade (skipped for reduced motion).
  function goToCategory(id) {
    if (state.swapping || id === state.category) return;
    var swap = $("#swap");
    function apply() {
      state.swapping = false;
      state.category = id;
      state.index = 0;
      closeLightbox();
      renderWork();
      swap.classList.remove("out");
    }
    if (prefersReducedMotion()) {
      apply();
      return;
    }
    state.swapping = true;
    swap.classList.add("out");
    setTimeout(apply, 220);
  }

  function renderTabs() {
    var box = $("#tabs");
    box.innerHTML = "";
    TABS.forEach(function (t) {
      var on = state.category === t.id;
      var button = document.createElement("button");
      button.className = on ? "tab on" : "tab";
      button.setAttribute("aria-pressed", String(on));
      button.textContent = t.label;
      button.addEventListener("click", function () {
        goToCategory(t.id);
      });
      box.appendChild(button);
    });
    if (state.category !== "all") {
      var back = document.createElement("button");
      back.className = "backbtn";
      back.innerHTML =
        '<svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="15,5 8,12 15,19"></polyline></svg>Back to album';
      back.addEventListener("click", function () {
        goToCategory("all");
      });
      box.appendChild(back);
    }
  }

  // Redraw everything that depends on the open tab.
  function renderWork() {
    var showGallery = state.category !== "all";
    $("#view-gallery").hidden = !showGallery;
    $("#view-album").hidden = showGallery;
    renderTabs();
    if (!showGallery) return;
    cardList = currentCards();
    state.index = Math.max(0, Math.min(state.index, cardList.length - 1));
    renderPreviewCards();
    buildCoverflow();
    updateCoverflow();
    $('[data-bind="pvTitle"]').textContent =
      state.category === "social" ? "social media projects" : "poster projects";
  }

  /* ---------- Work: the row of project cards ---------- */

  function renderPreviewCards() {
    var row = $("#pv-row");
    var current = cardList[state.index];
    var projects = PROJECTS.filter(function (p) {
      return p.category === state.category;
    });
    row.innerHTML = "";
    projects.forEach(function (p, k) {
      var active = !!current && current.project.id === p.id;
      var count =
        p.items.length + (p.items.length === 1 ? " design" : " designs");
      var prints = p.items
        .slice(0, 2)
        .map(function (it, j) {
          var cls = "pvprint " + (j === 0 ? "q1" : "q2");
          if (it.type === "image") {
            return (
              '<span class="' +
              cls +
              '"><img src="' +
              esc(it.src) +
              '" alt="" style="height: 132px; width: auto; display: block"></span>'
            );
          }
          return (
            '<span class="' +
            cls +
            '"><span class="pvph" style="width: 100px; height: 132px">your file<br>here</span></span>'
          );
        })
        .join("");
      var button = document.createElement("button");
      button.className =
        "pvcard " + ["pva", "pvb", "pvc"][k % 3] + (active ? " on" : "");
      button.setAttribute("aria-pressed", String(active));
      button.setAttribute(
        "aria-label",
        "Show " + p.title + " in the gallery below, " + count,
      );
      button.innerHTML =
        '<span class="pvin"><span class="pvlabel">' +
        esc(p.title) +
        '</span><span class="pvframe">' +
        prints +
        '</span><span class="pvfoot"><span>' +
        count +
        '</span><span class="pvgo">View designs →</span></span></span>';
      button.addEventListener("click", function () {
        var at = cardList.findIndex(function (c) {
          return c.project.id === p.id;
        });
        state.index = Math.max(0, at);
        updateCoverflow();
        renderPreviewCards();
        setTimeout(function () {
          var gallery = document.getElementById("gallery");
          if (gallery)
            gallery.scrollIntoView({
              behavior: prefersReducedMotion() ? "auto" : "smooth",
              block: "nearest",
            });
        }, 60);
      });
      row.appendChild(button);
    });
  }

  /* ---------- Work: the 3D project gallery (coverflow) ---------- */

  var cfEls = []; // one element per design in the current tab

  // Each card is 410px tall; its width follows the picture's own shape (no cropping).
  function cardWidth(c) {
    if (c.item.type === "image")
      return Math.max(
        240,
        Math.min(520, Math.round((410 * c.item.width) / c.item.height)),
      );
    return 300;
  }

  function buildCoverflow() {
    var stage = $("#stage");
    cfEls.forEach(function (el) {
      el.remove();
    });
    cfEls = [];
    var tray = $(".tray", stage);
    var after = tray;
    cardList.forEach(function (c, i) {
      var w = cardWidth(c);
      var wrap = document.createElement("div");
      wrap.className = "cfwrap";
      wrap.style.width = w + "px";
      wrap.style.height = "410px";
      wrap.style.margin = "-205px 0 0 " + -Math.round(w / 2) + "px";
      var inner;
      if (c.item.type === "image") {
        inner =
          '<img src="' +
          esc(c.item.src) +
          '" alt="" style="width: 100%; height: 100%; object-fit: contain; display: block">';
      } else {
        inner =
          '<div class="cfph"><span style="font-size: 17px; font-weight: 700">' +
          esc(c.item.label) +
          '</span><span style="font-size: 13px">' +
          esc(c.item.note) +
          "</span></div>";
      }
      wrap.innerHTML = '<button class="cf">' + inner + "</button>";
      $("button", wrap).addEventListener("click", function () {
        if (i === state.index) {
          if (c.item.type === "image")
            openLightbox(catImages(), catImages().indexOf(c.item));
        } else {
          setIndex(i);
        }
      });
      after.after(wrap);
      after = wrap;
      cfEls.push(wrap);
    });
  }

  function catImages() {
    return cardList
      .filter(function (c) {
        return c.item.type === "image";
      })
      .map(function (c) {
        return c.item;
      });
  }

  function setIndex(i) {
    state.index = Math.max(0, Math.min(i, cardList.length - 1));
    updateCoverflow();
    renderPreviewCards();
  }

  // Place every card: the middle one is big, the others fan out to the sides.
  function updateCoverflow() {
    var n = cardList.length;
    if (!n) return;
    var cur = cardList[state.index];
    cardList.forEach(function (c, i) {
      var off = i - state.index;
      var a = Math.abs(off);
      var sg = off < 0 ? -1 : 1;
      var transform =
        "translateX(0px) translateZ(60px) rotateY(0deg) scale(1.1)";
      if (a > 0) {
        var tx =
          sg *
          (cardWidth(cur) * 0.55 - 30 + cardWidth(c) * 0.265 + (a - 1) * 70);
        var tz = -90 - (a - 1) * 45;
        var rot = -sg * 58;
        var sc = Math.max(0.7, 1 - (a - 1) * 0.05);
        transform =
          "translateX(" +
          tx +
          "px) translateZ(" +
          tz +
          "px) rotateY(" +
          rot +
          "deg) scale(" +
          sc +
          ")";
      }
      var visible = a <= 5;
      var isImg = c.item.type === "image";
      var wrap = cfEls[i];
      var button = $("button", wrap);
      wrap.style.transform = transform;
      wrap.style.opacity = visible ? 1 : 0;
      wrap.style.zIndex = 200 - a;
      wrap.style.pointerEvents = visible ? "auto" : "none";
      button.className = off === 0 && isImg ? "cf zoom" : "cf";
      button.tabIndex = off === 0 ? 0 : -1;
      var name = isImg ? c.item.alt : c.item.label + " (placeholder)";
      button.setAttribute(
        "aria-label",
        name +
          (off === 0 ? (isImg ? ", open full screen" : "") : ", bring forward"),
      );
    });
    $("#cf-prev").disabled = state.index === 0;
    $("#cf-next").disabled = state.index === n - 1;
    $$('[data-bind="infoTitle"]').forEach(function (el) {
      el.textContent = cur.project.title;
    });
    $('[data-bind="infoMeta"]').textContent = cur.project.meta;
    $('[data-bind="infoDesc"]').textContent =
      cur.item.description || cur.project.description || "";
    $('[data-bind="counter"]').textContent = state.index + 1 + " / " + n;
  }

  function setupCoverflowControls() {
    var stage = $("#stage");
    $("#cf-prev").addEventListener("click", function () {
      setIndex(state.index - 1);
    });
    $("#cf-next").addEventListener("click", function () {
      setIndex(state.index + 1);
    });
    stage.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        setIndex(state.index + 1);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        setIndex(state.index - 1);
      }
    });
    var startX = null;
    stage.addEventListener(
      "touchstart",
      function (e) {
        startX = e.touches && e.touches[0] ? e.touches[0].clientX : null;
      },
      { passive: true },
    );
    stage.addEventListener("touchend", function (e) {
      if (startX == null || !e.changedTouches || !e.changedTouches[0]) return;
      var dx = e.changedTouches[0].clientX - startX;
      startX = null;
      if (dx < -40) setIndex(state.index + 1);
      else if (dx > 40) setIndex(state.index - 1);
    });
    // The album tiles for Posters and Social media open their tab.
    $$("[data-open]").forEach(function (tile) {
      tile.addEventListener("click", function () {
        goToCategory(tile.getAttribute("data-open"));
      });
    });
  }

  /* ---------- Photography: the slowly moving collage ---------- */

  function photoItemHtml(p, i, isCopy) {
    var inner;
    if (p.file) {
      inner =
        '<img class="zm" src="' + esc(p.file) + '" alt="' + esc(p.title) + '">';
    } else {
      inner =
        '<span class="zm polph"><span><span style="display: block">' +
        photoNumber(i) +
        '</span><span style="display: block">your photo goes here</span></span></span>';
    }
    return (
      '<div class="pit' +
      (isCopy ? " dup" : "") +
      '">' +
      '<button class="pframe" data-photo="' +
      i +
      '" aria-label="' +
      esc("Photo " + (i + 1) + ": " + p.title + ", open full screen") +
      '"' +
      (isCopy ? ' aria-hidden="true" tabindex="-1"' : "") +
      ">" +
      '<span class="polimg" style="aspect-ratio: ' +
      p.ratio.toFixed(4) +
      '">' +
      inner +
      "</span></button></div>"
    );
  }

  /* ---------- Product photography: Polaroid row that slides with the pointer ---------- */

  function renderProducts() {
    var box = $("#prod-scroll");
    if (!box) return;
    box.innerHTML = PRODUCTS.map(function (p, i) {
      var inner = p.file
        ? '<img src="' +
          esc(p.file) +
          '" data-n="' +
          i +
          '" alt="' +
          esc(p.title) +
          '" loading="lazy" draggable="false">'
        : '<span class="polph"><span><span style="display: block">' +
          photoNumber(i) +
          '</span><span style="display: block">product photo</span></span></span>';
      var st =
        (p.focus ? "--pos: " + esc(p.focus) + ";" : "") +
        (p.fit === "cover" ? "--fit: cover;" : "");
      return (
        '<figure class="prod"' +
        (st ? ' style="' + st + '"' : "") +
        '><div class="prod-frame">' +
        '<span class="prod-img">' +
        (p.file && p.fit !== "cover" && p.fit !== "matte"
          ? '<span class="prod-bg" style="background-image: url(\'' +
            encodeURI(p.file) +
            "')\"></span>"
          : "") +
        inner +
        "</span>" +
        '<figcaption class="prod-title"></figcaption></div></figure>'
      );
    }).join("");
    // If a photo file is missing, show the plain placeholder instead of a broken-image icon
    $$("#prod-scroll .prod-img img").forEach(function (img) {
      img.addEventListener("error", function () {
        img.parentNode.innerHTML =
          '<span class="polph"><span><span style="display: block">' +
          photoNumber(Number(img.getAttribute("data-n"))) +
          '</span><span style="display: block">product photo</span></span></span>';
      });
      // Make each product photo open in the existing full-screen viewer
      $$("#prod-scroll .prod").forEach(function (figure, i) {
        figure.style.cursor = "zoom-in";

        figure.addEventListener("click", function () {
          var items = PRODUCTS.map(function (p, index) {
            return {
              src: p.file || "",
              alt: p.title || "Product " + (index + 1),
              title: "",
              caption: "",
              ratio: 16 / 9,
              isPhoto: true,
            };
          });

          openLightbox(items, i, figure);
        });
      });
    });
  }

  function setupProductScroller() {
    var box = $("#prod-scroll");
    if (!box) return;
    var DEAD = 0.3; // the middle 30% of the row is calm, so you can look at a single photo
    var MAX = 480; // fastest sliding speed, in pixels per second (at the very edge)
    var target = 0,
      vel = 0,
      pos = 0,
      last = 0,
      raf = 0,
      dragging = false;

    function maxScroll() {
      return Math.max(0, box.scrollWidth - box.clientWidth);
    }
    function loop(t) {
      var dt = Math.min(40, t - last);
      last = t;
      // ease toward the wanted speed, so starting and stopping are always gentle
      vel += (target * MAX - vel) * (1 - Math.exp(-dt / 260));
      pos = Math.min(maxScroll(), Math.max(0, pos + (vel * dt) / 1000));
      box.scrollLeft = pos;
      if (Math.abs(vel) < 0.5 && target === 0) {
        vel = 0;
        raf = 0;
        return;
      }
      raf = requestAnimationFrame(loop);
    }
    function start() {
      if (raf) return;
      pos = box.scrollLeft;
      last = performance.now();
      raf = requestAnimationFrame(loop);
    }
    // Mouse: the nearer the pointer is to the left or right side, the faster the row slides
    box.addEventListener("pointermove", function (e) {
      if (e.pointerType !== "mouse" || dragging || prefersReducedMotion())
        return;
      var r = box.getBoundingClientRect();
      var n = ((e.clientX - r.left) / r.width) * 2 - 1; // -1 (left edge) .. 1 (right edge)
      var m = Math.max(0, (Math.abs(n) - DEAD) / (1 - DEAD));
      target = (n < 0 ? -1 : 1) * m * m * (3 - 2 * m); // smooth ramp
      if (target !== 0) start();
    });
    box.addEventListener("pointerleave", function () {
      target = 0;
    });

    // Mouse drag still works too (touch and trackpads scroll natively)
    var startX = 0,
      startLeft = 0,
      down = false;
    box.addEventListener("pointerdown", function (e) {
      if (e.pointerType !== "mouse" || e.button !== 0) return;
      down = true;
      startX = e.clientX;
      startLeft = box.scrollLeft;
      target = 0;
      vel = 0;
    });
    window.addEventListener("pointermove", function (e) {
      if (!down) return;
      var dx = e.clientX - startX;
      if (Math.abs(dx) > 4) {
        dragging = true;
        box.classList.add("dragging");
      }
      if (dragging) box.scrollLeft = startLeft - dx;
    });
    function stop() {
      down = false;
      dragging = false;
      box.classList.remove("dragging");
    }
    window.addEventListener("pointerup", stop);
    window.addEventListener("pointercancel", stop);

    // Keyboard: focus the row, then use the arrow keys (also Home and End)
    box.addEventListener("keydown", function (e) {
      var card = box.querySelector(".prod");
      var step = card ? card.getBoundingClientRect().width + 30 : 300;
      var smooth = prefersReducedMotion() ? "auto" : "smooth";
      if (e.key === "ArrowRight") {
        e.preventDefault();
        box.scrollBy({ left: step, behavior: smooth });
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        box.scrollBy({ left: -step, behavior: smooth });
      } else if (e.key === "Home") {
        e.preventDefault();
        box.scrollTo({ left: 0, behavior: smooth });
      } else if (e.key === "End") {
        e.preventDefault();
        box.scrollTo({ left: maxScroll(), behavior: smooth });
      }
    });
  }

  function renderPhotos() {
    var tracks = $$("#pgal .ptrack");
    tracks.forEach(function (track, c) {
      // each column shows its 5 photos, then the same 5 again so the loop never has a gap
      var html = "";
      [false, true].forEach(function (isCopy) {
        for (var k = 0; k < 5; k++) {
          var i = c * 5 + k;
          html += photoItemHtml(PHOTOS[i], i, isCopy);
        }
      });
      track.innerHTML = html;
    });
    // When a real photo finishes loading, use its true shape (so nothing is cropped).
    $$("#pgal img.zm").forEach(function (img) {
      function fit() {
        if (!img.naturalWidth) return;
        var ratio = (img.naturalWidth / img.naturalHeight).toFixed(4);
        img.parentNode.style.aspectRatio = ratio;
      }
      if (img.complete) fit();
      else img.addEventListener("load", fit);
    });
    $$("#pgal [data-photo]").forEach(function (button) {
      button.addEventListener("click", function () {
        openLightbox(
          photoViewerItems(),
          Number(button.getAttribute("data-photo")),
          button,
        );
      });
    });
  }

  function photoViewerItems() {
    return PHOTOS.map(function (p, i) {
      return {
        src: p.file || "",
        alt: p.file ? p.title : "Photo " + (i + 1) + " placeholder",
        title: p.title,
        caption: photoNumber(i),
        ratio: p.ratio,
        isPhoto: true,
      };
    });
  }

  function setupPhotoControls() {
    var gallery = $("#pgal");
    var button = $("#pp-btn");
    button.addEventListener("click", function () {
      var paused = gallery.classList.toggle("paused-by-user");
      button.setAttribute("aria-pressed", String(paused));
      button.textContent = paused ? "Play movement" : "Pause movement";
      updateGalleryPause();
    });
  }

  // The collage stops while you use the full-screen viewer or press Pause.
  function updateGalleryPause() {
    var gallery = $("#pgal");
    var viewerOpen = !$("#lightbox").hidden;
    gallery.classList.toggle(
      "paused",
      viewerOpen || gallery.classList.contains("paused-by-user"),
    );
  }

  /* ---------- Photo viewer (lightbox) ---------- */

  var viewer = { items: [], i: 0, opener: null };

  function openLightbox(items, i, opener) {
    if (!items.length || i < 0) return;
    viewer.items = items;
    viewer.i = i;
    viewer.opener = opener || document.activeElement;
    $("#lightbox").hidden = false;
    renderLightbox();
    updateGalleryPause();
    $("#lb-close").focus();
  }

  function closeLightbox() {
    var box = $("#lightbox");
    if (box.hidden) return;
    box.hidden = true;
    updateGalleryPause();
    if (viewer.opener && viewer.opener.focus) viewer.opener.focus();
  }

  function stepLightbox(step) {
    var m = viewer.items.length;
    viewer.i = (viewer.i + step + m) % m;
    renderLightbox();
  }

  function renderLightbox() {
    var m = viewer.items.length;
    var c = viewer.items[viewer.i];
    var img = $("#lb-img");
    var ph = $("#lb-ph");
    if (c.src) {
      img.hidden = false;
      ph.hidden = true;
      img.src = c.src;
      img.alt = c.alt;
    } else {
      img.hidden = true;
      ph.hidden = false;
      var ratio = c.ratio || 1;
      ph.style.width =
        "min(78vw, calc(74vh * " + ratio.toFixed(4) + "), 560px)";
      ph.style.aspectRatio = ratio.toFixed(4);
    }
    var title = $("#lb-title");
    title.hidden = !c.isPhoto;
    title.textContent = c.isPhoto ? c.title : "";
    $("#lb-cap").textContent = c.isPhoto
      ? c.caption + "  ·  " + (viewer.i + 1) + " / " + m
      : c.alt + "  ·  " + (viewer.i + 1) + " / " + m;
  }

  function setupLightbox() {
    $("#lb-close").addEventListener("click", closeLightbox);
    $("#lb-prev").addEventListener("click", function () {
      stepLightbox(-1);
    });
    $("#lb-next").addEventListener("click", function () {
      stepLightbox(1);
    });
    var startX = null;
    var box = $("#lightbox");
    box.addEventListener(
      "touchstart",
      function (e) {
        startX = e.touches && e.touches[0] ? e.touches[0].clientX : null;
      },
      { passive: true },
    );
    box.addEventListener("touchend", function (e) {
      if (startX == null || !e.changedTouches || !e.changedTouches[0]) return;
      var dx = e.changedTouches[0].clientX - startX;
      startX = null;
      if (dx < -50) stepLightbox(1);
      else if (dx > 50) stepLightbox(-1);
    });
  }

  /* ---------- Video & Multimedia: phone previews and the player ---------- */

  function makeVideoElement(src, preview) {
    var v = document.createElement("video");
    v.src = src;
    if (preview) {
      v.className = "pvid";
      v.muted = true; // browsers only allow autoplay when muted
      v.loop = true;
      v.autoplay = true;
      v.playsInline = true;
      v.setAttribute("muted", "");
      v.setAttribute("playsinline", "");
      var promise = v.play();
      if (promise && promise.catch) promise.catch(function () {});
    } else {
      v.controls = true;
      v.autoplay = true;
      v.playsInline = true;
      v.preload = "metadata";
      v.style.cssText =
        "display: block; width: 100%; max-height: 84vh; border-radius: 14px; background: #000";
    }
    return v;
  }

  function setPreview(i) {
    if (state.previewing === i) return;
    clearPreview();
    state.previewing = i;
    var phone = $('[data-phone="' + i + '"]');
    phone.classList.add("on");
    var screen = $(".vscreen", phone);
    if (VIDEOS[i].file)
      screen.insertBefore(
        makeVideoElement(VIDEOS[i].file, true),
        $(".vplay", screen),
      );
    var note = document.createElement("span");
    note.className = "vover";
    note.textContent = canHover()
      ? "Click for fullscreen with audio"
      : "Tap again for fullscreen with audio";
    screen.appendChild(note);
  }

  function clearPreview() {
    if (state.previewing == null) return;
    var phone = $('[data-phone="' + state.previewing + '"]');
    phone.classList.remove("on");
    $$(".pvid, .vover", phone).forEach(function (el) {
      if (el.pause) el.pause();
      el.remove();
    });
    state.previewing = null;
  }

  function openPlayer(i) {
    clearPreview();
    var v = VIDEOS[i];
    var box = $("#vp-box");
    box.style.width =
      "min(94vw, calc(82vh * " + v.ratio.toFixed(4) + "), 1400px)";
    box.innerHTML = "";
    if (v.file) {
      box.appendChild(makeVideoElement(v.file, false));
    } else {
      box.innerHTML =
        '<div class="vscreen vscreen-ph" style="aspect-ratio: ' +
        v.ratio.toFixed(4) +
        '; max-height: 82vh; border-radius: 14px">' +
        '<svg aria-hidden="true" width="72" height="72" viewBox="0 0 64 64"><circle cx="32" cy="32" r="30" fill="none" stroke="#fff4ea" stroke-width="3"></circle><polygon points="26,20 46,32 26,44" fill="#fff4ea"></polygon></svg>' +
        '<span style="font-size: 18px; font-weight: 700">Your video file goes here</span>' +
        '<span style="font-size: 14px">It will play in this larger player, with controls and sound.</span></div>';
    }
    $("#vp-cap").textContent = v.title;
    $("#vplayer").hidden = false;
    $("#vp-close").focus();
  }

  function closePlayer() {
    var player = $("#vplayer");
    if (player.hidden) return;
    $$("video", player).forEach(function (v) {
      v.pause();
    });
    $("#vp-box").innerHTML = "";
    player.hidden = true;
    var phone = $("[data-phone]:focus") || $("[data-phone]");
    if (phone) phone.focus();
  }

  function setupPhones() {
    // Show a still thumbnail on each phone all the time (not only on hover).
    // If a VIDEOS entry has  poster: 'assets/video/name.jpg'  that image is used;
    // otherwise the first frame of the video is shown.
    $$("[data-phone]").forEach(function (phone) {
      var v = VIDEOS[Number(phone.getAttribute("data-phone"))];
      var screen = $(".vscreen", phone);
      if (!v || !v.file || !screen) return;
      var thumb;
      if (v.poster) {
        thumb = document.createElement("img");
        thumb.src = v.poster;
        thumb.alt = "";
      } else {
        thumb = document.createElement("video");
        thumb.src = v.file + "#t=0.1";
        thumb.preload = "metadata";
        thumb.muted = true;
        thumb.playsInline = true;
        thumb.setAttribute("muted", "");
        thumb.setAttribute("playsinline", "");
      }
      thumb.className = "vthumb";
      thumb.setAttribute("aria-hidden", "true");
      thumb.tabIndex = -1;
      screen.insertBefore(thumb, $(".vplay", screen));
    });
    $$("[data-phone]").forEach(function (phone) {
      var i = Number(phone.getAttribute("data-phone"));
      function isMouse(e) {
        return (
          !e.pointerType || e.pointerType === "mouse" || e.pointerType === "pen"
        );
      }
      phone.addEventListener("pointerenter", function (e) {
        if (isMouse(e)) setPreview(i);
      });
      phone.addEventListener("pointerleave", function (e) {
        if (isMouse(e) && state.previewing === i) clearPreview();
      });
      phone.addEventListener("blur", function () {
        if (state.previewing === i) clearPreview();
      });
      phone.addEventListener("click", function () {
        // On touch screens the first tap previews, the second tap opens the player.
        if (!canHover() && state.previewing !== i) {
          setPreview(i);
          return;
        }
        openPlayer(i);
      });
    });
    $("#vp-close").addEventListener("click", closePlayer);
  }

  /* ---------- Keyboard: Esc closes a viewer, arrows move through photos ---------- */

  function setupKeyboard() {
    document.addEventListener("keydown", function (e) {
      if (!$("#lightbox").hidden) {
        if (e.key === "Escape") closeLightbox();
        else if (e.key === "ArrowRight") stepLightbox(1);
        else if (e.key === "ArrowLeft") stepLightbox(-1);
      } else if (!$("#vplayer").hidden && e.key === "Escape") {
        closePlayer();
      }
    });
  }

  /* ---------- Start everything when the page has loaded ---------- */

  function start() {
    renderTools();
    renderSkills();
    renderWork();
    setupCoverflowControls();
    renderPhotos();
    renderProducts();
    setupProductScroller();
    setupPhotoControls();
    setupLightbox();
    setupPhones();
    setupKeyboard();
  }

  if (document.readyState === "loading")
    document.addEventListener("DOMContentLoaded", start);
  else start();
})();
