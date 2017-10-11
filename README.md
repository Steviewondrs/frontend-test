# Frontend Test

[Sketchfile en assets](https://drive.google.com/open?id=0B_nR_3Un0WdjNlhtcUtNci1BUGs)

## Setup

1. Open Terminal.
2. Clone/download deze repository: `git clone https://github.com/statikbe/frontend-test`
3. In de `sass` map zitten al wat Sass-bestanden waarvan je mag vertrekken. Wij gebruiken meestal Grunt om hiervan een css-file te compileren. Installeer hiervoor NPM dependencies en start Grunt: `npm install && grunt`. Alles wordt nu automatisch gecompileerd telkens wanneer je een aanpassing maakt.
4. Open daarna de taak in je editor (wij raden Sublime Text aan).

## De taak

Als je dit allemaal gedaan hebt, kan je `index.html` openen in je browser.
Wij zullen je een design geven, aan jou om dit nu zo goed mogelijk om te zetten naar een functionele webpagina.

Onze aandachtspunten:
- Scalable, herbruikbare css (lees zeker eens over BEM en OOCSS)
- Logische, leesbare en semantische HTML
- Responsive, mobile first

Mocht je sneller klaar zijn kan je de pagina wat opvrolijken met animaties en dergelijke.

Minder belangrijk:
- Cross-browser compatibility (we gaan je taak écht niet op IE testen, beloofd).
- Image optimalisatie hoeft niet.

## Tips

- Bekijk de map `components` en `core` eens.
- Je begint best met `sass/core/_variables.scss` aan te passen naargelang het design.
- Voorbeeldjes van hoe ons grid werkt:

```
<!-- Responsive (repeating) grid van 1/2/3 kolommen adhv. schermgrootte -->
<div class="grid grid--bp-med-2-col grid--bp-lrg-3-col">
    <div class="grid__item"></div>
    ...
    <div class="grid__item"></div>
</div>

<!-- Responsive (layout) grid met variabele breedtes adhv. schermgrootte -->
<!-- (Dit voorbeeld zorgt voor een 66/33 layout op grote schermen) -->
<div class="grid">
    <div class="grid__12 grid--bp-med__8"></div>
    <div class="grid__12 grid--bp-med__4"></div>
</div>
```

Je bent niet verplicht ons grid te gebruiken, doe gerust je eigen ding!
