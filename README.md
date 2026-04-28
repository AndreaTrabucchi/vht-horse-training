# VHT Horse Training

Sito statico professionale per **VHT Horse Training** di **Dott.ssa Veronica Pirro**.

Sito online:

```text
https://andreatrabucchi.github.io/vht-horse-training/
```

Sitemap:

```text
https://andreatrabucchi.github.io/vht-horse-training/sitemap.xml
```

---

## 1. Obiettivo del sito

Il sito presenta i servizi di **VHT Horse Training** per proprietari di cavalli, maneggi e centri ippici, con un posizionamento basato su:

- addestramento science-based;
- Approccio VHT personalizzato;
- Clicker Training;
- rinforzo positivo;
- etologia applicata;
- consulenze comportamentali;
- benessere equino;
- formazione e clinic.

Il contatto principale è tramite **WhatsApp**.

---

## 2. Dati professionali presenti nel sito

- Brand: **VHT Horse Training**
- Nome: **Dott.ssa Veronica Pirro**
- Ruolo: **Addestratrice e tecnico comportamentale**
- Titolo: **Laureata in Allevamento e Benessere degli Animali d’Affezione presso UniMi**
- P. IVA: **14574540960**
- Area operativa: **Monza e Brianza e province limitrofe**
- Indirizzo: **Via Resegone 13, Correzzana, Monza e Brianza, Lombardia**
- WhatsApp: **338 448 8991**
- Email: **vhtveronica@gmail.com**
- Instagram: **@veronica.horse.training**

---

## 3. Struttura del sito

```text
vht-horse-training/
├── index.html
├── metodo-vht.html
├── servizi.html
├── listino.html
├── chi-sono.html
├── faq.html
├── contatti.html
├── privacy-policy.html
├── cookie-policy.html
├── sitemap.xml
├── robots.txt
├── README.md
├── .nojekyll
└── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   └── main.js
    ├── img/
    │   ├── logo-vht.png
    │   ├── hero-veronica-cavallo.jpg
    │   ├── chi-sono-veronica.jpg
    │   ├── metodo-cavallo-dettaglio.jpg
    │   └── servizi-lavoro-terra.jpg
    └── icons/
        ├── favicon.png
        └── apple-touch-icon.png
```

Nota: il file si chiama ancora `metodo-vht.html` per non rompere link o struttura, ma nei testi pubblici il concetto corretto è **Approccio VHT**.

---

## 4. Caratteristiche tecniche

- Sito statico multipagina.
- HTML, CSS e JavaScript senza framework.
- CSS unico: `assets/css/style.css`.
- JavaScript minimo: `assets/js/main.js`.
- Design responsive mobile-first.
- Animazioni leggere su sezioni, card, immagini, tabelle e CTA.
- Rispetto della preferenza browser `prefers-reduced-motion`.
- Contatto principale tramite WhatsApp.
- Nessun backend.
- Nessun database.
- Nessun e-commerce.
- Nessun modulo contatto server-side.

---

## 5. SEO inclusa

Il sito include già:

- meta title e meta description ottimizzati per ogni pagina;
- canonical tag con URL reale GitHub Pages;
- Open Graph per condivisione social;
- Twitter Card;
- alt text descrittivi sulle immagini;
- link interni tra Home, Approccio VHT, Servizi, Listino, FAQ e Contatti;
- `sitemap.xml`;
- `robots.txt`;
- dati strutturati JSON-LD.

Dati strutturati inclusi:

- LocalBusiness / ProfessionalService;
- Person per Dott.ssa Veronica Pirro;
- WebSite;
- BreadcrumbList;
- FAQPage nella pagina FAQ.

---

## 6. Google Analytics 4

Il sito è predisposto per **Google Analytics 4** con ID:

```text
G-KPTZ86CBHE
```

GA4 è gestito tramite cookie banner.

Funzionamento:

- se l’utente clicca **Accetta**, viene caricato Google Analytics 4;
- se l’utente clicca **Rifiuta**, Google Analytics 4 non viene caricato;
- la scelta viene salvata localmente nel browser dell’utente.

File coinvolti:

```text
assets/js/main.js
assets/css/style.css
privacy-policy.html
cookie-policy.html
```

---

## 7. Privacy e cookie

Privacy Policy e Cookie Policy sono state aggiornate per indicare l’uso di Google Analytics 4 previo consenso.

Prima della messa online definitiva è consigliata una verifica privacy/GDPR, soprattutto se in futuro verranno aggiunti:

- form contatto esterni;
- newsletter;
- Google Maps incorporato;
- Meta Pixel;
- strumenti pubblicitari;
- ulteriori servizi di tracciamento.

---

## 8. Pubblicazione su GitHub Pages

Per pubblicare il sito:

1. Estrarre lo ZIP.
2. Aprire la cartella `vht-horse-training`.
3. Caricare **il contenuto della cartella**, non la cartella intera, nella root del repository GitHub.
4. Verificare che nella root del repository ci siano direttamente file come:

```text
index.html
servizi.html
listino.html
assets/
sitemap.xml
robots.txt
.nojekyll
```

Struttura corretta:

```text
repository/
├── index.html
├── servizi.html
├── listino.html
├── assets/
└── sitemap.xml
```

Struttura sbagliata:

```text
repository/
└── vht-horse-training/
    ├── index.html
    └── assets/
```

Dopo il caricamento, pubblicare il sito tramite GitHub Pages dal branch principale.

---

## 9. Aggiornare il sito già online

Per sostituire una versione precedente:

1. Scaricare il nuovo ZIP.
2. Estrarre lo ZIP.
3. Aprire la cartella `vht-horse-training`.
4. Copiare tutto il contenuto.
5. Sostituire i file nel repository GitHub.
6. Fare commit.
7. Fare push.
8. Attendere la pubblicazione GitHub Pages.
9. Controllare il sito online:

```text
https://andreatrabucchi.github.io/vht-horse-training/
```

Dopo l’aggiornamento, fare un refresh forzato del browser:

- Windows: `CTRL + F5`
- Mac: `CMD + SHIFT + R`

---

## 10. Google Search Console

Dopo la pubblicazione online:

1. Aprire Google Search Console.
2. Aggiungere la proprietà:

```text
https://andreatrabucchi.github.io/vht-horse-training/
```

3. Verificare la proprietà secondo il metodo scelto da Google.
4. Inviare la sitemap:

```text
https://andreatrabucchi.github.io/vht-horse-training/sitemap.xml
```

5. Usare lo strumento **Controllo URL** per richiedere l’indicizzazione della Home.
6. Controllare nei giorni successivi eventuali errori di scansione o indicizzazione.

Nota: l’invio della sitemap aiuta Google a scoprire le pagine, ma non garantisce l’indicizzazione immediata né il posizionamento.

---

## 11. Verifica Google Analytics 4

Dopo la pubblicazione:

1. Aprire il sito online.
2. Accettare il cookie banner.
3. Entrare in Google Analytics 4.
4. Aprire la sezione realtime / tempo reale.
5. Verificare che la visita venga registrata.

Se l’utente rifiuta i cookie, la visita non deve essere registrata da GA4.

---

## 12. Aggiornare testi, prezzi e immagini

### Modificare testi

Aprire il file HTML della pagina interessata e modificare solo il testo tra i tag.

Esempio:

```text
index.html
servizi.html
chi-sono.html
faq.html
```

### Modificare prezzi

Aprire:

```text
listino.html
```

Aggiornare le tabelle del listino senza rimuovere le note su:

- trasferte escluse;
- costi extra da calcolare a parte;
- listino valido salvo modifiche;
- valutazioni osservazionali non sostitutive di visita veterinaria o diagnosi clinica.

### Modificare immagini

Sostituire i file dentro:

```text
assets/img/
```

mantenendo possibilmente lo stesso nome file. In questo modo non serve modificare l’HTML.

---

## 13. Cambio dominio futuro

Se in futuro il sito passerà da GitHub Pages a un dominio personalizzato, per esempio:

```text
https://www.veronicahorsetraining.it/
```

bisogna aggiornare l’URL in:

- canonical tag delle pagine HTML;
- Open Graph URL;
- JSON-LD;
- `sitemap.xml`;
- `robots.txt`;
- README.

---

## 14. Controlli finali dopo ogni aggiornamento

Verificare sempre:

- Home visibile correttamente;
- menu funzionante;
- pagina Approccio VHT corretta;
- pagina Servizi corretta;
- listino con prezzi invariati;
- pulsanti WhatsApp funzionanti;
- immagini caricate;
- cookie banner funzionante;
- GA4 caricato solo dopo consenso;
- sitemap accessibile;
- footer con P. IVA e credito sito.

---

## 15. Crediti

Sito web creato da **Andrea Trabucchi**.

Contatto:

```text
andrea.trabucchi@live.it
```
