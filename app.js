// app.js — hash router + render logic. Reads only window.COURSE; no other state.
(function () {
  "use strict";

  var COURSE = window.COURSE || { title: "Course", summary: "", classes: [] };
  var viewEl = document.getElementById("view");
  var tabListEl = document.getElementById("tab-list");

  // --- helpers ---------------------------------------------------------------

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  // Accept a bare YouTube id or a full URL and return the 11-char video id, or "".
  function youtubeId(raw) {
    if (!raw) return "";
    var s = String(raw).trim();
    if (/^[a-zA-Z0-9_-]{11}$/.test(s)) return s;
    var m = s.match(/(?:v=|\/embed\/|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
    return m ? m[1] : "";
  }

  function findClass(week) {
    var w = parseInt(week, 10);
    for (var i = 0; i < COURSE.classes.length; i++) {
      if (COURSE.classes[i].week === w) return COURSE.classes[i];
    }
    return null;
  }

  // --- render: video ---------------------------------------------------------

  function renderVideo(slot, cls) {
    var id = youtubeId(slot && slot.youtubeId);
    var label = esc((slot && slot.title) || "Video");
    if (!id) {
      return (
        '<figure class="video">' +
        '<figcaption class="video-label">' + label + "</figcaption>" +
        '<div class="video-frame video-placeholder" role="img" aria-label="' +
        esc("Week " + cls.week + " " + label.toLowerCase() + " video — coming soon") +
        '"><span>' + label + " video<br>coming soon</span></div>" +
        "</figure>"
      );
    }
    var title = esc("Week " + cls.week + " " + label.toLowerCase() + " video");

    // YouTube's IFrame player rejects embeds served from a file:// (null) origin
    // with error 150/153. When the page is opened as a portable file:// bundle,
    // fall back to a click-through thumbnail that opens the video on youtube.com.
    var origin = (window.location && window.location.protocol) || "";
    if (origin !== "http:" && origin !== "https:") {
      var watch = "https://www.youtube.com/watch?v=" + id;
      var poster = "https://i.ytimg.com/vi/" + id + "/hqdefault.jpg";
      return (
        '<figure class="video">' +
        '<figcaption class="video-label">' + label + "</figcaption>" +
        '<a class="video-frame video-link" href="' + watch + '" target="_blank" rel="noopener" ' +
        'style="background-image:url(\'' + poster + '\')" ' +
        'title="' + title + ' — opens on YouTube">' +
        '<span class="video-play" aria-hidden="true">&#9658;</span>' +
        '<span class="video-link-label">Watch on YouTube</span></a>' +
        "</figure>"
      );
    }

    // Served over http(s): use YouTube's canonical share-embed form exactly.
    var src = "https://www.youtube.com/embed/" + id;
    return (
      '<figure class="video">' +
      '<figcaption class="video-label">' + label + "</figcaption>" +
      '<div class="video-frame"><iframe src="' + src + '" title="' + title +
      '" loading="lazy" frameborder="0" referrerpolicy="strict-origin-when-cross-origin"' +
      ' allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>' +
      "</figure>"
    );
  }

  // --- render: move ----------------------------------------------------------

  function renderMove(move) {
    var media = "";
    if (move.gifUrl) {
      media =
        '<img class="move-gif" src="' + esc(move.gifUrl) + '" alt="' +
        esc(move.name + " animation") + '" loading="lazy">';
    }
    var kind = move.kind
      ? '<span class="move-kind">' + esc(move.kind) + "</span>"
      : "";
    return (
      '<li class="move">' +
      media +
      '<div class="move-body">' +
      '<h3 class="move-name">' + esc(move.name) + kind + "</h3>" +
      '<p class="move-desc">' + esc(move.description) + "</p>" +
      "</div></li>"
    );
  }

  // --- render: views ---------------------------------------------------------

  function renderLanding() {
    var cards = COURSE.classes
      .map(function (c) {
        var chips = (c.moves || [])
          .slice(0, 4)
          .map(function (m) { return '<span class="chip">' + esc(m.name) + "</span>"; })
          .join("");
        return (
          '<a class="card" href="#/class/' + c.week + '">' +
          '<div class="card-poster">' +
          '<span class="card-badge">Week ' + c.week + "</span>" +
          '<span class="play" aria-hidden="true"></span>' +
          "</div>" +
          '<div class="card-body">' +
          '<h3 class="card-title">' + esc(c.title) + "</h3>" +
          '<p class="card-summary">' + esc(c.summary) + "</p>" +
          '<div class="chips card-chips">' + chips + "</div>" +
          "</div></a>"
        );
      })
      .join("");
    return (
      '<section class="hero">' +
      '<div class="hero-eyebrow">DancerU &middot; with Herman and Jules</div>' +
      "<h1>" + esc(COURSE.title) + "</h1>" +
      "<p>" + esc(COURSE.summary) + "</p>" +
      '<div class="hero-stats">' +
      '<div class="hero-stat"><b>' + COURSE.classes.length + "</b><span>Weeks</span></div>" +
      '<div class="hero-stat"><b>' + (COURSE.classes.length * 2) + "</b><span>Videos</span></div>" +
      '<div class="hero-stat"><b>Free</b><span>No sign-up</span></div>' +
      "</div></section>" +
      '<h2 class="section-heading">Browse the classes</h2>' +
      '<div class="card-grid">' + cards + "</div>"
    );
  }

  function renderClass(cls) {
    var videos =
      renderVideo(cls.videos && cls.videos.explanation, cls) +
      renderVideo(cls.videos && cls.videos.demo, cls);
    var moves = (cls.moves || []).map(renderMove).join("");
    var chips = (cls.moves || [])
      .map(function (m) { return '<li class="chip">' + esc(m.name) + "</li>"; })
      .join("");
    var chipRow = chips
      ? '<ul class="chips class-chips" aria-label="Moves covered this week">' + chips + "</ul>"
      : "";
    return (
      '<section class="class-page">' +
      '<h1 class="class-title"><span class="class-week">Week ' + cls.week +
      "</span> " + esc(cls.title) + "</h1>" +
      '<p class="class-summary">' + esc(cls.summary) + "</p>" +
      chipRow +
      '<div class="video-grid">' + videos + "</div>" +
      '<h2 class="moves-heading">Moves covered</h2>' +
      '<ul class="move-list">' + moves + "</ul>" +
      "</section>"
    );
  }

  // --- tabs ------------------------------------------------------------------

  function renderTabs(activeWeek) {
    var items = ['<li><a class="tab' + (activeWeek == null ? " is-active" : "") +
      '" href="#/"' + (activeWeek == null ? ' aria-current="page"' : "") +
      ">Summary</a></li>"];
    COURSE.classes.forEach(function (c) {
      var active = c.week === activeWeek;
      items.push(
        '<li><a class="tab' + (active ? " is-active" : "") + '" href="#/class/' +
        c.week + '"' + (active ? ' aria-current="page"' : "") +
        ">Week " + c.week + "</a></li>"
      );
    });
    tabListEl.innerHTML = items.join("");
  }

  // --- router ----------------------------------------------------------------

  function render() {
    var hash = window.location.hash || "#/";
    var m = hash.match(/^#\/class\/(\d+)/);
    if (m) {
      var cls = findClass(m[1]);
      if (cls) {
        viewEl.innerHTML = renderClass(cls);
        renderTabs(cls.week);
        viewEl.focus();
        return;
      }
    }
    viewEl.innerHTML = renderLanding();
    renderTabs(null);
  }

  window.addEventListener("hashchange", render);
  window.addEventListener("DOMContentLoaded", render);
  if (document.readyState !== "loading") render();
})();
