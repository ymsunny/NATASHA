# NATASHA — second homepage design

This is an independent second design for the NATASHA paper homepage.

Public URL: https://ymsunny.github.io/NATASHA/v2/

The original page at https://ymsunny.github.io/NATASHA/ and all its files are unchanged. This version is self-contained in `docs/v2/` and can be opened locally with `index.html` or served with any static HTTP server.

## Edit this version

- `index.html`: paper narrative, authors, static tables, citation and metadata.
- `styles.css`: layout, color and responsive styles.
- `script.js`: interactive results, citation copying and figure viewer.
- `data.js`: all 60 BLEU/TER values from paper Table 2.
- `assets/`: paper PDF, figures, vector illustration, BibTeX, font and social preview.

Keep the static results in the HTML and the values in `data.js` synchronized when making numeric changes. The initial chart shows IWSLT14 German–English BLEU. Interactive comparisons use the best vanilla and best NATASHA configuration per task and metric; the hero comparison uses E12 for both methods. Original paper figures are linked beneath the paper overview.

GitHub Pages publishes all files from `main` → `/docs`, including this subdirectory. Editing files in `v2/` does not replace the original page. GitHub edits do not automatically sync to local files; pull before local editing and push after committing changes.
