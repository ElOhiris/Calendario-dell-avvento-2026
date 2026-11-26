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
      "Erano tanti i titoli con cui avrei voluto aprire questo calendario dell’avvento, ma nel momento in cui ho deciso che avrei fatto tutto il calendario di copie fisiche c’era un titolo solo che persisteva nella mia mente: Tarzan per PS1.",

"Ho giocato per la prima volta a questo titolo all’incirca nel 2006 e me ne sono innamorata, non solo perchè potevo davvero vivere l’avventura di uno dei miei cartoni preferiti, ma perchè è stato il primo modo in cui approcciavo ai videogiochi e un platform, continuerò sempre a dirlo, è una scelta perfetta da far giocare a un bambino come primo approccio a questo mondo. Poi da grande l’ho sempre ricordato con tenera nostalgia, seppur non l’ho mai finito per colpa dell’assenza di una memory card. Quando poi ho dovuto stilare la lista dei gamemas di quest’anno, il primo titolo che ho detto è stato propio Tarzan, ed eccoci qui cari amici a iniziare questo nuovo calenario per tutti noi nerd con una chicca vecchia, ma sempre gradita.",

"La storia è semplice: entarndo  nei panni di Tarzan dobbiamo superare ostacoli e sfide prorpio come nel lungometraggio, partendo dalla sua tenera età di ragazzo curioso e super dinamico fino ad arrivare all’età adulta per sconfiggere i principali nemici presenti anche nel film, come il cacciatore Clayton. Ogni capitolo del gioco è intervallato da spezzoni del film, con anche la presenza delle iconiche canzoni disney, che rendono indubbiamente l’atmosfera ancora più magica. Se visto dagli occhi di un bambino può sembrare di vivere davvero quella storia che fino a poco prima era solo narrazione senza interazione, visto da un adulto questo titolo ti riporta indietro nel tempo ai classici giochi platform dove ogni livello cresceva di difficoltà e la sfida non è solo salti perfetti e attacchi impeccabili, ma anche l’esplorazione per completare il gioco.", 

"Un’aspetto del gameplay che mi è piaciuto e inizialmente non mi aspettavo è la varietà di ambienti da espolare non solo in 2D, ma anche con un 2.5D, che devo dire rende la ricerca di oggetti molto dinamica e particolare se pensiamo ai classici platform.",

"Spero che questo viaggio vi piaccia e che possiate trovare il prossimo videogioco da mettere in wish list", 

"Grazie e buoni gamemas!",

"tarzan: 1999 - platform basato sulla storia dell’omonimo film - piattaforme: ps1, nintendo 64, game boy color, microsoft windows - pubblicato da diverse aziende a seconda del paese e piattaforma: konami per il giappone, sony computer entertainment, activision e disney interactive."
      
    ]
  },
  2: {
    titolo: "Secondo giorno, un novo mondo!",
    immagine: "img/giorni/02.jpg",
    video: "",                                  // es. "https://www.youtube.com/watch?v=XXXXXXXXXXX"
    articolo: [
      "Lo devo confessare, questo gioco non è stato in lista fino a due giorni prima della registrazione. Al suo posto ci sarebbe dovuto essere un altro titolo davvero iconico per quegli anni (non lo spoilero, non si sa mai che l’anno prossimo lo riesca a trovare), quindi quando sono andata a cercare videogiochi ps1 ho trovato Il pianeta del tesoro e l’ho provato subito assieme a voi.",

"Il film visto e rivisto quando ero piccola già mi aveva rapita con “viaggi nello spazio” e “pirati”, ovviamente più di vent’anni dopo dovevo assolutamente provare la versione del videogioco.",

"Come Tarzan, e tutti i giochi di quella generazione basata sui lungometraggi animati, riprende scene e personaggi già visti su schermo, ma dando la possibilità di vivere più attivamente le loro avventure, attraverso esplorazioni ambientali, combattimenti enigmi e la continua scoperta di oggetti che prima o poi saranno utili.",

"Forse un pochino macchinoso, almeno per me che sono più abituata a una reattività più fluida, ma indubbiamente una chicca per chi volesse recuperare un bel titolo tra stelle e pirati, che diciamolo sono tematiche e ambienti che attirano sempre noi giocatori.",

"Ciurma! Il viaggio è appena partito e non vedo l’ora di attraccare in un altro mondo videoludico.",

"Grazie e buoni gamemas!",

"Il pianeta del tesoro: 2002 - azione e avventura basato sulla storia dell’omonimo film - piattaforme: ps1 - prodotto da Disney Interactive e pubblicato da Sony."
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
