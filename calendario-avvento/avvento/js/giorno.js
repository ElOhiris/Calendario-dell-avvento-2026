(function(){
  const $ = id => document.getElementById(id);
  $("indietro").href = "index.html" + (qData ? "?" + qData.slice(1) : "");
  const g = parseInt(new URLSearchParams(location.search).get("g"), 10);

  if (!(g >= 1 && g <= 25)) {
    $("titolo").textContent = "Pagina non trovata";
    $("testo").innerHTML = "<p>Questa sorpresa non esiste. Torna al calendario.</p>"; return;
  }
  if (!sbloccata(g)) {
    $("titolo").textContent = "Ancora un po' di pazienza…";
    $("testo").innerHTML = `<p>Questa sorpresa si apre il <b>${g} dicembre</b>.</p>`; return;
  }

  const c = GIORNI[g] || {};
  $("titolo").textContent = c.titolo || `La sorpresa del ${g} dicembre`;
  document.title = $("titolo").textContent + " · Calendario dell'Avvento";

  const corpo = c.articolo || ["Una sorpresa speciale per te."];
  $("testo").innerHTML = Array.isArray(corpo) ? corpo.map(p => /^\s*</.test(p) ? p : `<p>${p}</p>`).join("") : corpo;

  const id = idVideo(c.video);
  if (id) {
    const f = document.createElement("iframe");
    f.src = `https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1`;
    f.title = "Video: " + $("titolo").textContent;
    f.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
    f.allowFullscreen = true;
    $("video").appendChild(f); $("video").hidden = false;
  }
  if (c.link) { $("link").href = c.link; $("link").hidden = false; }
})();
