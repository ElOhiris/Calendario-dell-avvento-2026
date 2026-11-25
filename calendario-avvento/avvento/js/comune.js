/* Funzioni condivise dalle due pagine. Per provare: aggiungi ?data=2026-12-10 all'indirizzo */
const _sim = new URLSearchParams(location.search).get("data");
const _off = _sim ? new Date(_sim + "T12:00:00").getTime() - Date.now() : 0;
const adesso = () => new Date(Date.now() + (isNaN(_off) ? 0 : _off));
const apertura = g => new Date(CONFIG.anno, 11, g, 0, 0, 0);
const sbloccata = g => adesso() >= apertura(g);
const qData = (_sim && !isNaN(_off)) ? "&data=" + _sim : "";
function idVideo(v){
  if (!v) return "";
  const m = String(v).match(/(?:v=|youtu\.be\/|embed\/|shorts\/)([\w-]{11})/);
  return m ? m[1] : String(v).trim();
}
