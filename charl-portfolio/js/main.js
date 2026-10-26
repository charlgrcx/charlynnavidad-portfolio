/* ==========================================================================
   main.js  -  how the website BEHAVES (clicks, tabs, galleries, viewers)

   The file has three parts:
     PART 1  YOUR CONTENT   - the lists you edit (photos, videos, projects...)
     PART 2  HELPERS        - small tools the rest of the code uses
     PART 3  THE FEATURES   - tabs, project gallery, photo gallery, viewers...

   You will mostly work in PART 1. If you are not sure about something in
   PART 2 or PART 3, leave it alone and ask.
   ========================================================================== */

(function () {
  'use strict';

  /* ======================================================================
     PART 1 - YOUR CONTENT
     ====================================================================== */

  /* ---- Tools I use (About section) ---------------------------------------
     name = the label under the icon.  src = where the icon file lives.      */
  var TOOLS = [
    { name: 'Canva', src: 'assets/images/tools/canva.png' },
    { name: 'Adobe Photoshop', src: 'assets/images/tools/photoshop.png' },
    { name: 'Figma', src: 'assets/images/tools/figma.png' },
    { name: 'CapCut', src: 'assets/images/tools/capcut.png' }
  ];

  /* ---- Creative expertise buttons (About section) ----------------------- */
  var SKILLS = [
    { id: 'graphic', label: 'Graphic Design', cls: 'sk sk-a', chips: ['Poster Design', 'Social Media Graphics', 'Promotional Materials', 'Layout Design'] },
    { id: 'photo', label: 'Photography', cls: 'sk sk-b', chips: ['Product Photography', 'Creative Photography', 'Photo Editing'] },
    { id: 'video', label: 'Video & Multimedia', cls: 'sk sk-c', chips: ['Video Editing', 'Promotional Video Production'] }
  ];

  /* ---- Graphic design projects (Posters + Social media) ------------------
     category : 'poster' or 'social'  (which tab the project appears in)
     items    : the designs inside the project, one line each.
       A real image:   { type: 'image', src: 'assets/images/projects/FILE.jpg',
                         alt: 'what the image shows', width: 1080, height: 1350 }
         (width and height = the picture's size in pixels; any numbers with
          the SAME shape as the picture work, they only keep it from stretching)
       A placeholder:  { type: 'placeholder', label: 'Name', note: 'Your file goes here' }
         (replace it with an image line when you have the file)                */
  var PROJECTS = [
    { id: 'messi', category: 'poster', meta: '01 · Poster', title: 'player-focused poster',
      description: "A player-focused poster featuring Lionel Messi, created in Adobe Photoshop. The concept relates to his rating for this year's FIFA World Cup.",
      items: [{ type: 'placeholder', label: 'Player-focused poster', note: 'Your file goes here' }] },

    { id: 'sports', category: 'social', meta: '02 · Social media', title: 'sports campaign',
      description: 'A social media campaign built around three posts: Game Day, Player Spotlight, and Final Score. [Add your own description.]',
      items: [
        { type: 'placeholder', label: 'Game Day', note: 'Your file goes here' },
        { type: 'placeholder', label: 'Player Spotlight', note: 'Your file goes here' },
        { type: 'placeholder', label: 'Final Score', note: 'Your file goes here' }
      ] },

    { id: 'stay', category: 'social', meta: '03 · Social media · client work', title: 'staycation promos',
      description: 'A collection of promotional materials I created for a condo staycation business. I experimented with different layouts, colors, and styles to keep each post fresh and appealing.',
      items: [
        { type: 'image', src: 'assets/images/projects/staycation-01.jpg', alt: 'Staycation promo: Hello Weekend! post', width: 658, height: 552 },
        { type: 'image', src: 'assets/images/projects/staycation-02.jpg', alt: 'Staycation promo: Another satisfied guest post', width: 752, height: 631 },
        { type: 'image', src: 'assets/images/projects/staycation-03.jpg', alt: 'Staycation promo: Thank you post', width: 658, height: 552 },
        { type: 'image', src: 'assets/images/projects/staycation-04.jpg', alt: 'Staycation promo: Another satisfied customer post', width: 658, height: 552 }
      ] },

    { id: 't10', category: 'social', meta: '04 · Social media', title: 'content promotions',
      description: 'A collection of social media graphics created for a mashup YouTuber. Every design reflects the theme of the content while maintaining a cohesive visual identity.',
      items: [
        { type: 'image', src: 'assets/images/projects/content-promo-01.jpg', alt: 'T10YOB mashup promo graphic, 1 of 4', width: 697, height: 697 },
        { type: 'image', src: 'assets/images/projects/content-promo-02.jpg', alt: 'T10YOB mashup promo graphic, 2 of 4', width: 700, height: 694 },
        { type: 'image', src: 'assets/images/projects/content-promo-03.jpg', alt: 'T10YOB mashup promo graphic, 3 of 4', width: 697, height: 697 },
        { type: 'image', src: 'assets/images/projects/content-promo-04.jpg', alt: 'T10YOB mashup promo graphic, 4 of 4', width: 697, height: 697 }
      ] },

    { id: 'food', category: 'poster', meta: '05 · Poster', title: 'food posters',
      description: 'A selection of food posters created for school projects, showcasing different approaches to layout, typography, and promotional design.',
      items: [
        { type: 'image', src: 'assets/images/projects/food-poster-01.jpg', alt: 'Food poster: unlimited chicken wings promo', width: 756, height: 756 },
        { type: 'image', src: 'assets/images/projects/food-poster-02.jpg', alt: 'Food poster: Turoy, where turon meets tikoy', width: 756, height: 1070 }
      ] },

    { id: 'product', category: 'poster', meta: '06 · Poster · own photoshoot', title: 'product pubmat',
      description: '[Description to come.] A product pubmat made from my own photoshoot.',
      items: [{ type: 'placeholder', label: 'Product pubmat', note: 'Your file goes here' }] }
  ];

  /* ---- The 20 photography pieces -------------------------------------------
     The gallery shows them in 4 columns of 5, in this order:
       photos 1-5 = column 1, 6-10 = column 2, 11-15 = column 3, 16-20 = column 4.

     For each photo:
       file  : 'assets/photography/photo-01.jpg'   (or null = show a placeholder)
       title : a short title for the photo's subject, e.g. 'Street Photography'
       ratio : width divided by height, used ONLY for the placeholder shape.
               (A real photo uses its own shape automatically.)

     To add a photo: save it in assets/photography/ and change  file: null
     to  file: 'assets/photography/photo-01.jpg'  and fill in the title.
     (The product photoshoot is NOT one of these 20; it lives in Posters.)     */
  var PHOTOS = [
    // column 1
    { file: 'assets/images/portrait.jpg', title: 'Portrait Photography', ratio: 752 / 812 },   // stand-in: replace with your photo 1
    { file: null, title: '[Photo 2 subject, e.g. Street Photography]', ratio: 3 / 4 },
    { file: null, title: '[Photo 3 subject, e.g. Street Photography]', ratio: 4 / 3 },
    { file: null, title: '[Photo 4 subject, e.g. Street Photography]', ratio: 1 },
    { file: null, title: '[Photo 5 subject, e.g. Street Photography]', ratio: 3 / 2 },
    // column 2
    { file: null, title: '[Photo 6 subject, e.g. Street Photography]', ratio: 2 / 3 },
    { file: null, title: '[Photo 7 subject, e.g. Street Photography]', ratio: 4 / 3 },
    { file: null, title: '[Photo 8 subject, e.g. Street Photography]', ratio: 4 / 5 },
    { file: null, title: '[Photo 9 subject, e.g. Street Photography]', ratio: 3 / 2 },
    { file: null, title: '[Photo 10 subject, e.g. Street Photography]', ratio: 1 },
    // column 3
    { file: null, title: '[Photo 11 subject, e.g. Street Photography]', ratio: 1 },
    { file: null, title: '[Photo 12 subject, e.g. Street Photography]', ratio: 3 / 4 },
    { file: null, title: '[Photo 13 subject, e.g. Street Photography]', ratio: 3 / 2 },
    { file: null, title: '[Photo 14 subject, e.g. Street Photography]', ratio: 2 / 3 },
    { file: null, title: '[Photo 15 subject, e.g. Street Photography]', ratio: 4 / 3 },
    // column 4
    { file: null, title: '[Photo 16 subject, e.g. Street Photography]', ratio: 4 / 5 },
    { file: null, title: '[Photo 17 subject, e.g. Street Photography]', ratio: 4 / 3 },
    { file: null, title: '[Photo 18 subject, e.g. Street Photography]', ratio: 1 },
    { file: null, title: '[Photo 19 subject, e.g. Street Photography]', ratio: 3 / 4 },
    { file: null, title: '[Photo 20 subject, e.g. Street Photography]', ratio: 3 / 2 }
  ];

  /* ---- Product photography (the sideways-scrolling row) --------------------
     For each product photo:
       file  : 'assets/product/product-01.jpg'   (or null = show a placeholder)
       title : the small title shown under the photo. Edit it freely.
       ratio : width divided by height, used ONLY for the placeholder shape.
               (A real photo uses its own shape automatically, so nothing is cropped.)
     To add one: save the photo in assets/product/, set file, edit title.
     To add more, copy a line and paste it before the closing ];            */
  var PRODUCTS = [
    { file: null, title: '[Product name 1]', ratio: 4 / 5 },
    { file: null, title: '[Product name 2]', ratio: 1 },
    { file: null, title: '[Product name 3]', ratio: 4 / 5 },
    { file: null, title: '[Product name 4]', ratio: 3 / 4 },
    { file: null, title: '[Product name 5]', ratio: 4 / 5 },
    { file: null, title: '[Product name 6]', ratio: 1 }
  ];

  /* ---- The two videos (Video & Multimedia section) -------------------------
     order matters: [0] is the portrait film (left phone),
                    [1] is the landscape teaser (right phone).
     file : 'assets/video/short-film.mp4'  (or null until you have the file)
     ratio: width / height of the video. Portrait 9:16 = 9 / 16, landscape 16:9 = 16 / 9.  */
  var VIDEOS = [
    { title: 'Wes Anderson-style Short Film', file: null /* e.g. 'assets/video/wes-anderson-short-film.mp4' */, ratio: 9 / 16 },
    { title: 'Pahiyas Festival App Teaser', file: null /* e.g. 'assets/video/pahiyas-teaser.mp4' */, ratio: 16 / 9 }
  ];


  /* ======================================================================
     PART 2 - HELPERS (small tools used below)
     ====================================================================== */

  // Find one element / all elements by CSS selector.
  function $(selector, root) { return (root || document).querySelector(selector); }
  function $$(selector, root) { return Array.prototype.slice.call((root || document).querySelectorAll(selector)); }

  // Make text safe to put inside HTML (so a title like "A & B" cannot break the page).
  function esc(text) {
    return String(text).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  // True when the visitor asked their device to reduce motion.
  function prefersReducedMotion() {
    return !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }

  // True on devices with a mouse (hover). False on phones and tablets.
  function canHover() {
    return !!(window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches);
  }

  // "no. 01", "no. 02" ...
  function photoNumber(i) { return 'no. ' + (i + 1 < 10 ? '0' : '') + (i + 1); }


  /* ======================================================================
     PART 3 - THE FEATURES
     ====================================================================== */

  // The page "remembers" what is currently showing in this one object.
  var state = {
    category: 'all',  // which Work tab is open: 'all', 'social' or 'poster'
    index: 0,         // which design is in the middle of the project gallery
    skill: 'graphic', // which Creative expertise button is selected
    swapping: false,  // true for a moment while one tab fades into another
    previewing: null  // which phone (0 or 1) is being previewed
  };

  /* ---------- About: tools and creative expertise ---------- */

  function renderTools() {
    $('#tools-list').innerHTML = TOOLS.map(function (t) {
      return '<div style="display: flex; flex-direction: column; align-items: center; gap: 10px">' +
        '<div class="toolframe"><img src="' + esc(t.src) + '" alt="" style="width: 58px; height: 58px; object-fit: contain"></div>' +
        '<span style="font-size: 14px; font-weight: 600">' + esc(t.name) + '</span></div>';
    }).join('');
  }

  function renderSkills() {
    var tabs = $('#skill-tabs');
    tabs.innerHTML = '';
    SKILLS.forEach(function (k) {
      var on = state.skill === k.id;
      var button = document.createElement('button');
      button.className = k.cls + (on ? ' on' : '');
      button.setAttribute('aria-pressed', String(on));
      button.textContent = k.label;
      button.addEventListener('click', function () { state.skill = k.id; renderSkills(); });
      tabs.appendChild(button);
    });
    var active = SKILLS.filter(function (k) { return k.id === state.skill; })[0];
    $('#skill-chips').innerHTML = '<div style="display: flex; flex-wrap: wrap; gap: 10px">' +
      active.chips.map(function (c) { return '<span class="chip">' + esc(c) + '</span>'; }).join('') + '</div>';
  }

  /* ---------- Work: tabs (All / Social media / Posters) ---------- */

  var TABS = [
    { id: 'all', label: 'All' },
    { id: 'social', label: 'Social media' },
    { id: 'poster', label: 'Posters' }
  ];

  // Every individual design from every project, as one flat list.
  var ALL_CARDS = [];
  PROJECTS.forEach(function (p) {
    p.items.forEach(function (it) {
      ALL_CARDS.push({ item: it, project: p });
    });
  });

  var cardList = [];  // the designs shown for the current tab

  function currentCards() {
    return ALL_CARDS.filter(function (c) { return state.category === 'all' || c.project.category === state.category; });
  }

  // Switch to another tab with a short fade (skipped for reduced motion).
  function goToCategory(id) {
    if (state.swapping || id === state.category) return;
    var swap = $('#swap');
    function apply() {
      state.swapping = false;
      state.category = id;
      state.index = 0;
      closeLightbox();
      renderWork();
      swap.classList.remove('out');
    }
    if (prefersReducedMotion()) { apply(); return; }
    state.swapping = true;
    swap.classList.add('out');
    setTimeout(apply, 220);
  }

  function renderTabs() {
    var box = $('#tabs');
    box.innerHTML = '';
    TABS.forEach(function (t) {
      var on = state.category === t.id;
      var button = document.createElement('button');
      button.className = on ? 'tab on' : 'tab';
      button.setAttribute('aria-pressed', String(on));
      button.textContent = t.label;
      button.addEventListener('click', function () { goToCategory(t.id); });
      box.appendChild(button);
    });
    if (state.category !== 'all') {
      var back = document.createElement('button');
      back.className = 'backbtn';
      back.innerHTML = '<svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="15,5 8,12 15,19"></polyline></svg>Back to album';
      back.addEventListener('click', function () { goToCategory('all'); });
      box.appendChild(back);
    }
  }

  // Redraw everything that depends on the open tab.
  function renderWork() {
    var showGallery = state.category !== 'all';
    $('#view-gallery').hidden = !showGallery;
    $('#view-album').hidden = showGallery;
    renderTabs();
    if (!showGallery) return;
    cardList = currentCards();
    state.index = Math.max(0, Math.min(state.index, cardList.length - 1));
    renderPreviewCards();
    buildCoverflow();
    updateCoverflow();
    $('[data-bind="pvTitle"]').textContent = state.category === 'social' ? 'social media projects' : 'poster projects';
  }

  /* ---------- Work: the row of project cards ---------- */

  function renderPreviewCards() {
    var row = $('#pv-row');
    var current = cardList[state.index];
    var projects = PROJECTS.filter(function (p) { return p.category === state.category; });
    row.innerHTML = '';
    projects.forEach(function (p, k) {
      var active = !!current && current.project.id === p.id;
      var count = p.items.length + (p.items.length === 1 ? ' design' : ' designs');
      var prints = p.items.slice(0, 2).map(function (it, j) {
        var cls = 'pvprint ' + (j === 0 ? 'q1' : 'q2');
        if (it.type === 'image') {
          return '<span class="' + cls + '"><img src="' + esc(it.src) + '" alt="" style="height: 132px; width: auto; display: block"></span>';
        }
        return '<span class="' + cls + '"><span class="pvph" style="width: 100px; height: 132px">your file<br>here</span></span>';
      }).join('');
      var button = document.createElement('button');
      button.className = 'pvcard ' + ['pva', 'pvb', 'pvc'][k % 3] + (active ? ' on' : '');
      button.setAttribute('aria-pressed', String(active));
      button.setAttribute('aria-label', 'Show ' + p.title + ' in the gallery below, ' + count);
      button.innerHTML = '<span class="pvin"><span class="pvlabel">' + esc(p.title) + '</span><span class="pvframe">' + prints +
        '</span><span class="pvfoot"><span>' + count + '</span><span class="pvgo">View designs →</span></span></span>';
      button.addEventListener('click', function () {
        var at = cardList.findIndex(function (c) { return c.project.id === p.id; });
        state.index = Math.max(0, at);
        updateCoverflow();
        renderPreviewCards();
        setTimeout(function () {
          var gallery = document.getElementById('gallery');
          if (gallery) gallery.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'nearest' });
        }, 60);
      });
      row.appendChild(button);
    });
  }

  /* ---------- Work: the 3D project gallery (coverflow) ---------- */

  var cfEls = [];  // one element per design in the current tab

  // Each card is 410px tall; its width follows the picture's own shape (no cropping).
  function cardWidth(c) {
    if (c.item.type === 'image') return Math.max(240, Math.min(520, Math.round(410 * c.item.width / c.item.height)));
    return 300;
  }

  function buildCoverflow() {
    var stage = $('#stage');
    cfEls.forEach(function (el) { el.remove(); });
    cfEls = [];
    var tray = $('.tray', stage);
    var after = tray;
    cardList.forEach(function (c, i) {
      var w = cardWidth(c);
      var wrap = document.createElement('div');
      wrap.className = 'cfwrap';
      wrap.style.width = w + 'px';
      wrap.style.height = '410px';
      wrap.style.margin = '-205px 0 0 ' + (-Math.round(w / 2)) + 'px';
      var inner;
      if (c.item.type === 'image') {
        inner = '<img src="' + esc(c.item.src) + '" alt="" style="width: 100%; height: 100%; object-fit: contain; display: block">';
      } else {
        inner = '<div class="cfph"><span style="font-size: 17px; font-weight: 700">' + esc(c.item.label) +
          '</span><span style="font-size: 13px">' + esc(c.item.note) + '</span></div>';
      }
      wrap.innerHTML = '<button class="cf">' + inner + '</button>';
      $('button', wrap).addEventListener('click', function () {
        if (i === state.index) {
          if (c.item.type === 'image') openLightbox(catImages(), catImages().indexOf(c.item));
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
    return cardList.filter(function (c) { return c.item.type === 'image'; }).map(function (c) { return c.item; });
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
      var transform = 'translateX(0px) translateZ(60px) rotateY(0deg) scale(1.1)';
      if (a > 0) {
        var tx = sg * (cardWidth(cur) * 0.55 - 30 + cardWidth(c) * 0.265 + (a - 1) * 70);
        var tz = -90 - (a - 1) * 45;
        var rot = -sg * 58;
        var sc = Math.max(0.7, 1 - (a - 1) * 0.05);
        transform = 'translateX(' + tx + 'px) translateZ(' + tz + 'px) rotateY(' + rot + 'deg) scale(' + sc + ')';
      }
      var visible = a <= 5;
      var isImg = c.item.type === 'image';
      var wrap = cfEls[i];
      var button = $('button', wrap);
      wrap.style.transform = transform;
      wrap.style.opacity = visible ? 1 : 0;
      wrap.style.zIndex = 200 - a;
      wrap.style.pointerEvents = visible ? 'auto' : 'none';
      button.className = off === 0 && isImg ? 'cf zoom' : 'cf';
      button.tabIndex = off === 0 ? 0 : -1;
      var name = isImg ? c.item.alt : c.item.label + ' (placeholder)';
      button.setAttribute('aria-label', name + (off === 0 ? (isImg ? ', open full screen' : '') : ', bring forward'));
    });
    $('#cf-prev').disabled = state.index === 0;
    $('#cf-next').disabled = state.index === n - 1;
    $$('[data-bind="infoTitle"]').forEach(function (el) { el.textContent = cur.project.title; });
    $('[data-bind="infoMeta"]').textContent = cur.project.meta;
    $('[data-bind="infoDesc"]').textContent = cur.project.description;
    $('[data-bind="counter"]').textContent = (state.index + 1) + ' / ' + n;
  }

  function setupCoverflowControls() {
    var stage = $('#stage');
    $('#cf-prev').addEventListener('click', function () { setIndex(state.index - 1); });
    $('#cf-next').addEventListener('click', function () { setIndex(state.index + 1); });
    stage.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') { e.preventDefault(); setIndex(state.index + 1); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); setIndex(state.index - 1); }
    });
    var startX = null;
    stage.addEventListener('touchstart', function (e) { startX = e.touches && e.touches[0] ? e.touches[0].clientX : null; }, { passive: true });
    stage.addEventListener('touchend', function (e) {
      if (startX == null || !e.changedTouches || !e.changedTouches[0]) return;
      var dx = e.changedTouches[0].clientX - startX;
      startX = null;
      if (dx < -40) setIndex(state.index + 1);
      else if (dx > 40) setIndex(state.index - 1);
    });
    // The album tiles for Posters and Social media open their tab.
    $$('[data-open]').forEach(function (tile) {
      tile.addEventListener('click', function () { goToCategory(tile.getAttribute('data-open')); });
    });
  }

  /* ---------- Photography: the slowly moving collage ---------- */

  function photoItemHtml(p, i, isCopy) {
    var inner;
    if (p.file) {
      inner = '<img class="zm" src="' + esc(p.file) + '" alt="' + esc(p.title) + '">';
    } else {
      inner = '<span class="zm polph"><span><span style="display: block">' + photoNumber(i) +
        '</span><span style="display: block">your photo goes here</span></span></span>';
    }
    return '<div class="pit' + (isCopy ? ' dup' : '') + '">' +
      '<button class="pframe" data-photo="' + i + '" aria-label="' + esc('Photo ' + (i + 1) + ': ' + p.title + ', open full screen') + '"' +
      (isCopy ? ' aria-hidden="true" tabindex="-1"' : '') + '>' +
      '<span class="polimg" style="aspect-ratio: ' + p.ratio.toFixed(4) + '">' + inner + '</span></button></div>';
  }

  /* ---------- Product photography: sideways-scrolling Polaroid row ---------- */

  function renderProducts() {
    var box = $('#prod-scroll');
    if (!box) return;
    box.innerHTML = PRODUCTS.map(function (p, i) {
      var inner = p.file
        ? '<img src="' + esc(p.file) + '" alt="' + esc(p.title) + '" loading="lazy" draggable="false">'
        : '<span class="polph"><span><span style="display: block">' + photoNumber(i) +
          '</span><span style="display: block">product photo</span></span></span>';
      return '<figure class="prod"><div class="prod-frame"><span class="prod-dots" aria-hidden="true"><i></i><i></i><i></i></span>' +
        '<span class="polimg" style="aspect-ratio: ' + p.ratio.toFixed(4) + '">' + inner + '</span>' +
        '<figcaption class="prod-title">' + esc(p.title) + '</figcaption></div></figure>';
    }).join('');
    // a real photo uses its own true shape, so nothing is cropped
    $$('#prod-scroll img').forEach(function (img) {
      function fit() {
        if (img.naturalWidth) img.parentNode.style.aspectRatio = (img.naturalWidth / img.naturalHeight).toFixed(4);
      }
      if (img.complete) fit(); else img.addEventListener('load', fit);
    });
  }

  function setupProductScroller() {
    var box = $('#prod-scroll'), prev = $('#prod-prev'), next = $('#prod-next');
    if (!box) return;
    function step() {
      var card = box.querySelector('.prod');
      return card ? card.getBoundingClientRect().width + parseFloat(getComputedStyle(box).columnGap || 28) : 300;
    }
    function go(dir) {
      box.scrollBy({ left: dir * step() * 1.5, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
    }
    function update() {
      var max = box.scrollWidth - box.clientWidth;
      prev.disabled = box.scrollLeft <= 2;
      next.disabled = box.scrollLeft >= max - 2;
    }
    prev.addEventListener('click', function () { go(-1); });
    next.addEventListener('click', function () { go(1); });
    box.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    box.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') { e.preventDefault(); go(1); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1); }
    });
    // Mouse: click and drag to scroll (touch and trackpads already scroll natively)
    var down = false, startX = 0, startLeft = 0;
    box.addEventListener('pointerdown', function (e) {
      if (e.pointerType !== 'mouse' || e.button !== 0) return;
      down = true; startX = e.clientX; startLeft = box.scrollLeft;
    });
    window.addEventListener('pointermove', function (e) {
      if (!down) return;
      var dx = e.clientX - startX;
      if (Math.abs(dx) > 4) box.classList.add('dragging');
      box.scrollLeft = startLeft - dx;
    });
    function stop() { down = false; box.classList.remove('dragging'); }
    window.addEventListener('pointerup', stop);
    window.addEventListener('pointercancel', stop);
    update();
  }

  function renderPhotos() {
    var tracks = $$('#pgal .ptrack');
    tracks.forEach(function (track, c) {
      // each column shows its 5 photos, then the same 5 again so the loop never has a gap
      var html = '';
      [false, true].forEach(function (isCopy) {
        for (var k = 0; k < 5; k++) {
          var i = c * 5 + k;
          html += photoItemHtml(PHOTOS[i], i, isCopy);
        }
      });
      track.innerHTML = html;
    });
    // When a real photo finishes loading, use its true shape (so nothing is cropped).
    $$('#pgal img.zm').forEach(function (img) {
      function fit() {
        if (!img.naturalWidth) return;
        var ratio = (img.naturalWidth / img.naturalHeight).toFixed(4);
        img.parentNode.style.aspectRatio = ratio;
      }
      if (img.complete) fit(); else img.addEventListener('load', fit);
    });
    $$('#pgal [data-photo]').forEach(function (button) {
      button.addEventListener('click', function () {
        openLightbox(photoViewerItems(), Number(button.getAttribute('data-photo')), button);
      });
    });
  }

  function photoViewerItems() {
    return PHOTOS.map(function (p, i) {
      return { src: p.file || '', alt: p.file ? p.title : 'Photo ' + (i + 1) + ' placeholder', title: p.title, caption: photoNumber(i), ratio: p.ratio, isPhoto: true };
    });
  }

  function setupPhotoControls() {
    var gallery = $('#pgal');
    var button = $('#pp-btn');
    button.addEventListener('click', function () {
      var paused = gallery.classList.toggle('paused-by-user');
      button.setAttribute('aria-pressed', String(paused));
      button.textContent = paused ? 'Play movement' : 'Pause movement';
      updateGalleryPause();
    });
  }

  // The collage stops while you use the full-screen viewer or press Pause.
  function updateGalleryPause() {
    var gallery = $('#pgal');
    var viewerOpen = !$('#lightbox').hidden;
    gallery.classList.toggle('paused', viewerOpen || gallery.classList.contains('paused-by-user'));
  }

  /* ---------- Photo viewer (lightbox) ---------- */

  var viewer = { items: [], i: 0, opener: null };

  function openLightbox(items, i, opener) {
    if (!items.length || i < 0) return;
    viewer.items = items;
    viewer.i = i;
    viewer.opener = opener || document.activeElement;
    $('#lightbox').hidden = false;
    renderLightbox();
    updateGalleryPause();
    $('#lb-close').focus();
  }

  function closeLightbox() {
    var box = $('#lightbox');
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
    var img = $('#lb-img');
    var ph = $('#lb-ph');
    if (c.src) {
      img.hidden = false; ph.hidden = true;
      img.src = c.src;
      img.alt = c.alt;
    } else {
      img.hidden = true; ph.hidden = false;
      var ratio = c.ratio || 1;
      ph.style.width = 'min(78vw, calc(74vh * ' + ratio.toFixed(4) + '), 560px)';
      ph.style.aspectRatio = ratio.toFixed(4);
    }
    var title = $('#lb-title');
    title.hidden = !c.isPhoto;
    title.textContent = c.isPhoto ? c.title : '';
    $('#lb-cap').textContent = c.isPhoto
      ? c.caption + '  ·  ' + (viewer.i + 1) + ' / ' + m
      : c.alt + '  ·  ' + (viewer.i + 1) + ' / ' + m;
  }

  function setupLightbox() {
    $('#lb-close').addEventListener('click', closeLightbox);
    $('#lb-prev').addEventListener('click', function () { stepLightbox(-1); });
    $('#lb-next').addEventListener('click', function () { stepLightbox(1); });
    var startX = null;
    var box = $('#lightbox');
    box.addEventListener('touchstart', function (e) { startX = e.touches && e.touches[0] ? e.touches[0].clientX : null; }, { passive: true });
    box.addEventListener('touchend', function (e) {
      if (startX == null || !e.changedTouches || !e.changedTouches[0]) return;
      var dx = e.changedTouches[0].clientX - startX;
      startX = null;
      if (dx < -50) stepLightbox(1);
      else if (dx > 50) stepLightbox(-1);
    });
  }

  /* ---------- Video & Multimedia: phone previews and the player ---------- */

  function makeVideoElement(src, preview) {
    var v = document.createElement('video');
    v.src = src;
    if (preview) {
      v.className = 'pvid';
      v.muted = true;          // browsers only allow autoplay when muted
      v.loop = true;
      v.autoplay = true;
      v.playsInline = true;
      v.setAttribute('muted', '');
      v.setAttribute('playsinline', '');
      var promise = v.play();
      if (promise && promise.catch) promise.catch(function () {});
    } else {
      v.controls = true;
      v.autoplay = true;
      v.playsInline = true;
      v.preload = 'metadata';
      v.style.cssText = 'display: block; width: 100%; max-height: 84vh; border-radius: 14px; background: #000';
    }
    return v;
  }

  function setPreview(i) {
    if (state.previewing === i) return;
    clearPreview();
    state.previewing = i;
    var phone = $('[data-phone="' + i + '"]');
    phone.classList.add('on');
    var screen = $('.vscreen', phone);
    if (VIDEOS[i].file) screen.insertBefore(makeVideoElement(VIDEOS[i].file, true), $('.vplay', screen));
    var note = document.createElement('span');
    note.className = 'vover';
    note.textContent = canHover() ? 'Click for fullscreen with audio' : 'Tap again for fullscreen with audio';
    screen.appendChild(note);
  }

  function clearPreview() {
    if (state.previewing == null) return;
    var phone = $('[data-phone="' + state.previewing + '"]');
    phone.classList.remove('on');
    $$('.pvid, .vover', phone).forEach(function (el) { if (el.pause) el.pause(); el.remove(); });
    state.previewing = null;
  }

  function openPlayer(i) {
    clearPreview();
    var v = VIDEOS[i];
    var box = $('#vp-box');
    box.style.width = 'min(94vw, calc(82vh * ' + v.ratio.toFixed(4) + '), 1400px)';
    box.innerHTML = '';
    if (v.file) {
      box.appendChild(makeVideoElement(v.file, false));
    } else {
      box.innerHTML = '<div class="vscreen vscreen-ph" style="aspect-ratio: ' + v.ratio.toFixed(4) + '; max-height: 82vh; border-radius: 14px">' +
        '<svg aria-hidden="true" width="72" height="72" viewBox="0 0 64 64"><circle cx="32" cy="32" r="30" fill="none" stroke="#fff4ea" stroke-width="3"></circle><polygon points="26,20 46,32 26,44" fill="#fff4ea"></polygon></svg>' +
        '<span style="font-size: 18px; font-weight: 700">Your video file goes here</span>' +
        '<span style="font-size: 14px">It will play in this larger player, with controls and sound.</span></div>';
    }
    $('#vp-cap').textContent = v.title;
    $('#vplayer').hidden = false;
    $('#vp-close').focus();
  }

  function closePlayer() {
    var player = $('#vplayer');
    if (player.hidden) return;
    $$('video', player).forEach(function (v) { v.pause(); });
    $('#vp-box').innerHTML = '';
    player.hidden = true;
    var phone = $('[data-phone]:focus') || $('[data-phone]');
    if (phone) phone.focus();
  }

  function setupPhones() {
    $$('[data-phone]').forEach(function (phone) {
      var i = Number(phone.getAttribute('data-phone'));
      function isMouse(e) { return !e.pointerType || e.pointerType === 'mouse' || e.pointerType === 'pen'; }
      phone.addEventListener('pointerenter', function (e) { if (isMouse(e)) setPreview(i); });
      phone.addEventListener('pointerleave', function (e) { if (isMouse(e) && state.previewing === i) clearPreview(); });
      phone.addEventListener('blur', function () { if (state.previewing === i) clearPreview(); });
      phone.addEventListener('click', function () {
        // On touch screens the first tap previews, the second tap opens the player.
        if (!canHover() && state.previewing !== i) { setPreview(i); return; }
        openPlayer(i);
      });
    });
    $('#vp-close').addEventListener('click', closePlayer);
  }

  /* ---------- Keyboard: Esc closes a viewer, arrows move through photos ---------- */

  function setupKeyboard() {
    document.addEventListener('keydown', function (e) {
      if (!$('#lightbox').hidden) {
        if (e.key === 'Escape') closeLightbox();
        else if (e.key === 'ArrowRight') stepLightbox(1);
        else if (e.key === 'ArrowLeft') stepLightbox(-1);
      } else if (!$('#vplayer').hidden && e.key === 'Escape') {
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

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
