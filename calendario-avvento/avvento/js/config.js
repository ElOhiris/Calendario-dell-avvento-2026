/* =====================  IMPOSTAZIONI DA MODIFICARE  ===================== */
const CONFIG = {
  anno: 2026,
  immagine: "img/calendario.PNG",              // immagine quadrata del calendario (es. 1600x1600)
  playlistId: "PLXDIWdzwm84I",         // la parte dopo "list=" nel link della playlist YouTube
  link2025: "https://elohiris.github.io/Calendario-dell-avvento/",
  nuovaScheda:true                           // true = la pagina del giorno si apre in una nuova scheda
};

/* Posizione delle 25 caselle nella griglia 5x5 (la 25 è quella centrale) */
const ORDINE = [7,19,3,12,22,  16,1,24,5,14,  10,23,25,18,2,  21,8,15,4,17,  9,20,6,13,11];

/* Contenuto di ogni giorno. Per ciascuno:
   - immagine: foto che si vede sotto la casella appena aperta (cliccandola si va alla pagina)
   - pagina:   facoltativo. Se vuoto si apre giorno.html?g=N; altrimenti l'indirizzo che scrivi (anche esterno)
   - titolo, video (link YouTube o ID), articolo (lista di paragrafi, ammesso HTML), link (pulsante finale)
   I giorni non compilati mostrano comunque una pagina generica. */
const GIORNI = {
  1: {
    titolo: "Si comincia!",
    immagine: "img/giorni/01.jpg",
    video: "",                                  // es. "https://www.youtube.com/watch?v=XXXXXXXXXXX"
    articolo: [
      "Buon primo dicembre! Qui va il testo dell'articolo dedicato alla sorpresa di oggi.",
      "Ogni riga di questa lista diventa un paragrafo."
    ]
  },
  2: {
    titolo: "Si comincia!",
    immagine: "img/giorni/02.jpg",
    video: "",                                  // es. "https://www.youtube.com/watch?v=XXXXXXXXXXX"
    articolo: [
      "Buon primo dicembre! Qui va il testo dell'articolo dedicato alla sorpresa di oggi.",
      "Ogni riga di questa lista diventa un paragrafo."
    ]
  },
  3: {
    titolo: "Si comincia!",
    immagine: "img/giorni/03.jpg",
    video: "",                                  // es. "https://www.youtube.com/watch?v=XXXXXXXXXXX"
    articolo: [
      "Buon primo dicembre! Qui va il testo dell'articolo dedicato alla sorpresa di oggi.",
      "Ogni riga di questa lista diventa un paragrafo."
    ]
  },
  4: {
    titolo: "Si comincia!",
    immagine: "img/giorni/04.jpg",
    video: "",                                  // es. "https://www.youtube.com/watch?v=XXXXXXXXXXX"
    articolo: [
      "Buon primo dicembre! Qui va il testo dell'articolo dedicato alla sorpresa di oggi.",
      "Ogni riga di questa lista diventa un paragrafo."
    ]
  },
  5: {
    titolo: "Si comincia!",
    immagine: "img/giorni/05.jpg",
    video: "",                                  // es. "https://www.youtube.com/watch?v=XXXXXXXXXXX"
    articolo: [
      "Buon primo dicembre! Qui va il testo dell'articolo dedicato alla sorpresa di oggi.",
      "Ogni riga di questa lista diventa un paragrafo."
    ]
  },
  6: {
    titolo: "Si comincia!",
    immagine: "img/giorni/06.jpg",
    video: "",                                  // es. "https://www.youtube.com/watch?v=XXXXXXXXXXX"
    articolo: [
      "Buon primo dicembre! Qui va il testo dell'articolo dedicato alla sorpresa di oggi.",
      "Ogni riga di questa lista diventa un paragrafo."
    ]
  },
  7: {
    titolo: "Si comincia!",
    immagine: "img/giorni/07.jpg",
    video: "",                                  // es. "https://www.youtube.com/watch?v=XXXXXXXXXXX"
    articolo: [
      "Buon primo dicembre! Qui va il testo dell'articolo dedicato alla sorpresa di oggi.",
      "Ogni riga di questa lista diventa un paragrafo."
    ]
  },
  8: {
    titolo: "Si comincia!",
    immagine: "img/giorni/08.jpg",
    video: "",                                  // es. "https://www.youtube.com/watch?v=XXXXXXXXXXX"
    articolo: [
      "Buon primo dicembre! Qui va il testo dell'articolo dedicato alla sorpresa di oggi.",
      "Ogni riga di questa lista diventa un paragrafo."
    ]
  },
  9: {
    titolo: "Si comincia!",
    immagine: "img/giorni/09.jpg",
    video: "",                                  // es. "https://www.youtube.com/watch?v=XXXXXXXXXXX"
    articolo: [
      "Buon primo dicembre! Qui va il testo dell'articolo dedicato alla sorpresa di oggi.",
      "Ogni riga di questa lista diventa un paragrafo."
    ]
  },
  10: {
    titolo: "Si comincia!",
    immagine: "img/giorni/10.jpg",
    video: "",                                  // es. "https://www.youtube.com/watch?v=XXXXXXXXXXX"
    articolo: [
      "Buon primo dicembre! Qui va il testo dell'articolo dedicato alla sorpresa di oggi.",
      "Ogni riga di questa lista diventa un paragrafo."
    ]
  },
  11: {
    titolo: "Si comincia!",
    immagine: "img/giorni/11.jpg",
    video: "",                                  // es. "https://www.youtube.com/watch?v=XXXXXXXXXXX"
    articolo: [
      "Buon primo dicembre! Qui va il testo dell'articolo dedicato alla sorpresa di oggi.",
      "Ogni riga di questa lista diventa un paragrafo."
    ]
  },
  12: {
    titolo: "Si comincia!",
    immagine: "img/giorni/12.jpg",
    video: "",                                  // es. "https://www.youtube.com/watch?v=XXXXXXXXXXX"
    articolo: [
      "Buon primo dicembre! Qui va il testo dell'articolo dedicato alla sorpresa di oggi.",
      "Ogni riga di questa lista diventa un paragrafo."
    ]
  },
  13: {
    titolo: "Si comincia!",
    immagine: "img/giorni/13.jpg",
    video: "",                                  // es. "https://www.youtube.com/watch?v=XXXXXXXXXXX"
    articolo: [
      "Buon primo dicembre! Qui va il testo dell'articolo dedicato alla sorpresa di oggi.",
      "Ogni riga di questa lista diventa un paragrafo."
    ]
  },
  14: {
    titolo: "Si comincia!",
    immagine: "img/giorni/14.jpg",
    video: "",                                  // es. "https://www.youtube.com/watch?v=XXXXXXXXXXX"
    articolo: [
      "Buon primo dicembre! Qui va il testo dell'articolo dedicato alla sorpresa di oggi.",
      "Ogni riga di questa lista diventa un paragrafo."
    ]
  },
  15: {
    titolo: "Si comincia!",
    immagine: "img/giorni/15.jpg",
    video: "",                                  // es. "https://www.youtube.com/watch?v=XXXXXXXXXXX"
    articolo: [
      "Buon primo dicembre! Qui va il testo dell'articolo dedicato alla sorpresa di oggi.",
      "Ogni riga di questa lista diventa un paragrafo."
    ]
  },
  16: {
    titolo: "Si comincia!",
    immagine: "img/giorni/16.jpg",
    video: "",                                  // es. "https://www.youtube.com/watch?v=XXXXXXXXXXX"
    articolo: [
      "Buon primo dicembre! Qui va il testo dell'articolo dedicato alla sorpresa di oggi.",
      "Ogni riga di questa lista diventa un paragrafo."
    ]
  },
  17: {
    titolo: "Si comincia!",
    immagine: "img/giorni/17.jpg",
    video: "",                                  // es. "https://www.youtube.com/watch?v=XXXXXXXXXXX"
    articolo: [
      "Buon primo dicembre! Qui va il testo dell'articolo dedicato alla sorpresa di oggi.",
      "Ogni riga di questa lista diventa un paragrafo."
    ]
  },
  18: {
    titolo: "Si comincia!",
    immagine: "img/giorni/18.jpg",
    video: "",                                  // es. "https://www.youtube.com/watch?v=XXXXXXXXXXX"
    articolo: [
      "Buon primo dicembre! Qui va il testo dell'articolo dedicato alla sorpresa di oggi.",
      "Ogni riga di questa lista diventa un paragrafo."
    ]
  },
  19: {
    titolo: "Si comincia!",
    immagine: "img/giorni/19.jpg",
    video: "",                                  // es. "https://www.youtube.com/watch?v=XXXXXXXXXXX"
    articolo: [
      "Buon primo dicembre! Qui va il testo dell'articolo dedicato alla sorpresa di oggi.",
      "Ogni riga di questa lista diventa un paragrafo."
    ]
  },
  20: {
    titolo: "Si comincia!",
    immagine: "img/giorni/20.jpg",
    video: "",                                  // es. "https://www.youtube.com/watch?v=XXXXXXXXXXX"
    articolo: [
      "Buon primo dicembre! Qui va il testo dell'articolo dedicato alla sorpresa di oggi.",
      "Ogni riga di questa lista diventa un paragrafo."
    ]
  },
  21: {
    titolo: "Si comincia!",
    immagine: "img/giorni/21.jpg",
    video: "",                                  // es. "https://www.youtube.com/watch?v=XXXXXXXXXXX"
    articolo: [
      "Buon primo dicembre! Qui va il testo dell'articolo dedicato alla sorpresa di oggi.",
      "Ogni riga di questa lista diventa un paragrafo."
    ]
  },
  22: {
    titolo: "Si comincia!",
    immagine: "img/giorni/22.jpg",
    video: "",                                  // es. "https://www.youtube.com/watch?v=XXXXXXXXXXX"
    articolo: [
      "Buon primo dicembre! Qui va il testo dell'articolo dedicato alla sorpresa di oggi.",
      "Ogni riga di questa lista diventa un paragrafo."
    ]
  },
  23: {
    titolo: "Si comincia!",
    immagine: "img/giorni/23.jpg",
    video: "",                                  // es. "https://www.youtube.com/watch?v=XXXXXXXXXXX"
    articolo: [
      "Buon primo dicembre! Qui va il testo dell'articolo dedicato alla sorpresa di oggi.",
      "Ogni riga di questa lista diventa un paragrafo."
    ]
  },
  24: {
    titolo: "Si comincia!",
    immagine: "img/giorni/24.jpg",
    video: "",                                  // es. "https://www.youtube.com/watch?v=XXXXXXXXXXX"
    articolo: [
      "Buon primo dicembre! Qui va il testo dell'articolo dedicato alla sorpresa di oggi.",
      "Ogni riga di questa lista diventa un paragrafo."
    ]
  },
  25: {
    titolo: "Buon Natale!",
    immagine: "img/giorni/25.jpg",
    video: "",
    articolo: ["L'ultima sorpresa: buon Natale a tutti!"],
    link: ""
  }
  // 2: { titolo: "...", immagine: "img/giorni/02.jpg", video: "...", articolo: ["..."] },
};
/* ======================================================================== */
