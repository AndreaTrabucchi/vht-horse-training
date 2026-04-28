# VHT Horse Training

Sito statico professionale per **VHT Horse Training** di **Dott.ssa Veronica Pirro**.

## Struttura

- `index.html` — Home
- `metodo-vht.html` — Approccio VHT
- `servizi.html` — Servizi
- `listino.html` — Listino
- `chi-sono.html` — Chi sono
- `faq.html` — FAQ
- `contatti.html` — Contatti
- `privacy-policy.html` — Privacy Policy
- `cookie-policy.html` — Cookie Policy
- `assets/css/style.css` — stile unico
- `assets/js/main.js` — JavaScript minimo
- `assets/img/` — immagini e logo
- `.nojekyll` — disattiva la pipeline Jekyll di GitHub Pages

## Pubblicazione su GitHub Pages

1. Crea un nuovo repository GitHub.
2. Carica tutti i file contenuti in questa cartella nella root del repository.
3. Vai su **Settings > Pages**.
4. In **Build and deployment**, seleziona:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/root**
5. Salva.
6. Attendi qualche minuto: GitHub mostrerà l’URL pubblico del sito.

## Contatti presenti nel sito

- WhatsApp: 338 448 8991
- Email: vhtveronica@gmail.com
- Instagram: @veronica.horse.training
- Indirizzo: Via Resegone 13, Correzzana, Monza e Brianza, Lombardia
- P. IVA: 14574540960

## Note tecniche

- Sito statico multipagina.
- Nessun Google Analytics.
- Nessun Meta Pixel.
- Nessun backend.
- Nessun modulo contatto obbligatorio.
- Contatto principale tramite WhatsApp.
- Listino ricreato in HTML per accessibilità, SEO e aggiornamenti più semplici.

## Note contenutistiche

Il sito contiene note prudenti per specificare che le valutazioni osservazionali e comportamentali non sostituiscono visita veterinaria, diagnosi clinica o interventi sanitari.

Prima della pubblicazione definitiva si consiglia la verifica di Privacy Policy e Cookie Policy da parte di un consulente privacy, soprattutto se in futuro verranno aggiunti form, analytics, mappe incorporate, newsletter o pixel pubblicitari.

## Aggiornare il listino

Per modificare prezzi o descrizioni, aprire `listino.html` e aggiornare le tabelle nella pagina.

## Crediti
Sito web creato da Andrea Trabucchi — andrea.trabucchi@live.it

## Aggiornamento grafico
- Animazioni leggere su sezioni, card, immagini, tabelle e CTA.
- Rispetto automatico della preferenza `prefers-reduced-motion` del browser.


## Versione testi ottimizzati
Testi e meta tag sono stati rifiniti in ottica copywriting, SEO base e conversione, mantenendo invariati struttura, design, immagini e funzionalità.
## SEO, Google Search Console e GA4

### 1. URL reale del sito

Prima di pubblicare definitivamente e inviare la sitemap a Google, sostituire in questi file il placeholder:

`https://andreatrabucchi.github.io/vht-horse-training/`

con l’URL reale di GitHub Pages, per esempio:

`https://nomeutente.github.io/nomerepository/`

File da aggiornare con trova/sostituisci:
- tutte le pagine `.html`
- `sitemap.xml`
- `robots.txt`

Questo serve per canonical tag, Open Graph, dati strutturati e sitemap.

### 2. Indicizzazione Google

Dopo la pubblicazione:
1. aprire Google Search Console;
2. aggiungere la proprietà del sito;
3. verificare la proprietà;
4. inviare la sitemap: `sitemap.xml`;
5. usare lo strumento Controllo URL per richiedere l’indicizzazione della Home.

### 3. Google Analytics 4

Il sito è predisposto per Google Analytics 4 con ID:

`G-KPTZ86CBHE`

Il tag GA4 non viene caricato subito. Viene caricato solo se l’utente accetta il banner cookie.

Se l’utente rifiuta, GA4 non viene caricato.

### 4. Privacy e cookie

Privacy Policy e Cookie Policy sono state aggiornate per indicare l’uso di Google Analytics 4 previo consenso.

Prima della messa online definitiva è consigliata una verifica privacy/GDPR, soprattutto se in futuro verranno aggiunti form, newsletter, mappe incorporate, pixel pubblicitari o altri strumenti esterni.

### 5. File SEO inclusi

- `sitemap.xml`
- `robots.txt`
- canonical tag su tutte le pagine
- Open Graph e Twitter Card
- JSON-LD per LocalBusiness / ProfessionalService
- JSON-LD Person per Dott.ssa Veronica Pirro
- JSON-LD WebSite
- JSON-LD BreadcrumbList
- JSON-LD FAQPage nella pagina FAQ


## URL reale GitHub Pages
https://andreatrabucchi.github.io/vht-horse-training/

La sitemap da inviare in Google Search Console è:
https://andreatrabucchi.github.io/vht-horse-training/sitemap.xml
