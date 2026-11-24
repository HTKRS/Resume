/* CV 페이지 동작: 언어 전환, 인쇄 버튼, 상단 바 */
(function () {
  "use strict";
  var root = document.documentElement;

  /* ── 언어 전환 ── */
  var langButtons = document.querySelectorAll("[data-set-lang]");
  function showLang(lang) {
    root.setAttribute("data-lang", lang);
    root.setAttribute("lang", lang);
    for (var i = 0; i < langButtons.length; i++) {
      var on = langButtons[i].getAttribute("data-set-lang") === lang;
      langButtons[i].setAttribute("aria-pressed", on ? "true" : "false");
    }
  }
  for (var i = 0; i < langButtons.length; i++) {
    langButtons[i].addEventListener("click", function () {
      var lang = this.getAttribute("data-set-lang");
      showLang(lang);
      try { localStorage.setItem("cv-lang", lang); } catch (e) {}
    });
  }
  showLang(root.getAttribute("data-lang") === "ko" ? "ko" : "en");

  /* ── 인쇄 · PDF 저장 ── */
  var printBtn = document.getElementById("printBtn");
  if (printBtn) {
    printBtn.addEventListener("click", function () { window.print(); });
  }

  /* ── 상단 바: 스크롤하면 이름과 밑줄이 나타남 ── */
  var bar = document.getElementById("topbar");
  function onScroll() {
    if (!bar) return;
    if (window.scrollY > 120) { bar.classList.add("scrolled"); } else { bar.classList.remove("scrolled"); }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();
