(function(){
  const $ = id => document.getElementById(id);
  let aperte = [];
  
  $("calendario").style.backgroundImage = `url("${CONFIG.immagine}"), linear-gradient(160deg,#2a5a4f,#1b3a34 50%,#7a1f2b)`;
  $("link2025").href = CONFIG.link2025;

  /* ---------- Griglia ---------- */
  const griglia = $("griglia");
  ORDINE.forEach(g => {
    const d = GIORNI[g] || {};
    const cella = document.createElement("div");
    cella.className = "cella" + (aperte.includes(g) ? " aperta" : "");
    cella.dataset.g = g;

    const retro = document.createElement("a");               /* l'immagine sotto la porta */
    retro.className = "retro";
    retro.href = d.pagina || `giorno.html?g=${g}${qData}`;
    if (CONFIG.nuovaScheda) { retro.target = "_blank"; retro.rel = "noopener"; }
    retro.style.backgroundImage = (d.immagine ? `url("${d.immagine}"), ` : "") + "linear-gradient(145deg,#7a1f2b,#16302b)";
    retro.setAttribute("aria-label", `Vai alla sorpresa del giorno ${g}`);
    retro.innerHTML = `<span>Giorno ${g} · Scopri</span>`;

    const porta = document.createElement("button");
    porta.type = "button"; porta.className = "porta";
    porta.innerHTML = `<span class="num">${g}</span>`;

    cella.append(retro, porta); griglia.appendChild(cella);

    porta.addEventListener("click", () => {
      if (!sbloccata(g)) {
        porta.classList.remove("scuoti"); void porta.offsetWidth; porta.classList.add("scuoti");
        $("conto").innerHTML = `La casella ${g} si apre il <b>${g} dicembre</b>.`;
        return;
      }
      cella.classList.add("aperta");
      if (!aperte.includes(g)) { aperte.push(g); }
    });
  });

  function aggiornaStato(){
    const n = adesso();
    const oggi = (n.getFullYear() === CONFIG.anno && n.getMonth() === 11) ? n.getDate() : 0;
    griglia.querySelectorAll(".cella").forEach(c => {
      const g = +c.dataset.g, p = c.querySelector(".porta"), ok = sbloccata(g);
      p.classList.toggle("bloccata", !ok);
      p.classList.toggle("oggi", ok && g === oggi && !c.classList.contains("aperta"));
      p.setAttribute("aria-label", ok ? `Apri la casella ${g}` : `Casella ${g}, si apre il ${g} dicembre`);
    });
  }

  /* ---------- Timer ---------- */
  const pad = x => String(x).padStart(2, "0");
  function aggiornaTimer(){
    aggiornaStato();
    let prossima = null;
    for (let g = 1; g <= 25; g++) if (!sbloccata(g)) { prossima = g; break; }
    if (prossima === null) { $("conto").textContent = "Tutte le caselle sono aperte. Buon Natale!"; return; }
    let s = Math.floor((apertura(prossima) - adesso()) / 1000);
    const gg = Math.floor(s / 86400); s %= 86400;
    const h = Math.floor(s / 3600); s %= 3600;
    const m = Math.floor(s / 60); s %= 60;
    $("conto").innerHTML = `Prossima casella (${prossima}) tra <b>${gg ? gg + " g " : ""}${pad(h)}:${pad(m)}:${pad(s)}</b>`;
  }
  aggiornaTimer(); setInterval(aggiornaTimer, 1000);

  /* ---------- Giradischi + YouTube ---------- */
  const player = $("player"), btn = $("btnMusica"), hint = $("hint");
  let yt = null, pronto = false, suona = false, pausaUtente = false, primoGesto = false;

  function ui(on){
    suona = on;
    player.classList.toggle("suona", on);
    btn.textContent = on ? "Metti in pausa" : "Avvia la musica";
    btn.setAttribute("aria-pressed", on);
    if (on) hint.textContent = "";
  }

 const sc = document.createElement("script");
  sc.src = "https://www.youtube.com/iframe_api"; document.head.appendChild(sc);
  /* Accetta l'indirizzo di una playlist, di un singolo video, oppure solo l'ID */
  function sorgenteMusica(v){
    v = String(v || "").trim();
    const l = v.match(/[?&]list=([\w-]+)/); if (l) return { playlist: l[1] };
    const x = v.match(/(?:v=|youtu\.be\/|embed\/|shorts\/)([\w-]{11})/); if (x) return { video: x[1] };
    if (/^(PL|UU|OL|FL)[\w-]{10,}$/.test(v)) return { playlist: v };
    if (/^[\w-]{11}$/.test(v)) return { video: v };
    return {};
  }
 
  window.onYouTubeIframeAPIReady = function(){
    const m = sorgenteMusica(CONFIG.playlistId);
    const opz = { width: "200", height: "200" };
    if (m.playlist) opz.playerVars = { listType: "playlist", list: m.playlist, autoplay: 1, loop: 1, playsinline: 1 };
    else if (m.video) { opz.videoId = m.video; opz.playerVars = { autoplay: 1, loop: 1, playlist: m.video, playsinline: 1 }; }
    else { hint.textContent = "Musica non impostata: controlla playlistId in js/config.js"; return; }
   if (location.protocol.startsWith("http")) opz.playerVars.origin = location.origin;
    yt = new YT.Player("yt", {
      ...opz,
      events: {
        onReady: () => {
          pronto = true;
          try { yt.setLoop(true); yt.playVideo(); } catch(e){}
          setTimeout(() => { if (!suona && !pausaUtente) hint.textContent = "Tocca la pagina per far partire la musica"; }, 1500);
        },
        onStateChange: ev => {
          if (ev.data === YT.PlayerState.PLAYING) ui(true);
          else if (ev.data === YT.PlayerState.PAUSED) ui(false);
        },
        onError: ev => { hint.textContent = "Errore YouTube " + ev.data + ": questo contenuto non si può riprodurre qui"; ui(false); }
      }
    });
  };

  /* I browser permettono l'audio solo dopo un'interazione: al primo tocco la musica parte */
  function primo(){
    if (primoGesto) return; primoGesto = true;
    if (pronto && !suona && !pausaUtente) { try { yt.playVideo(); } catch(e){} }
  }
  ["pointerdown","keydown","touchstart"].forEach(ev => document.addEventListener(ev, primo, { once: true, passive: true }));

  btn.addEventListener("click", e => {
    e.stopPropagation(); primoGesto = true;
    if (!pronto) return;
    if (suona) { pausaUtente = true; yt.pauseVideo(); } else { pausaUtente = false; yt.playVideo(); }
  });
})();
