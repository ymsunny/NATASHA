# Website maintenance

Public URL: https://ymsunny.github.io/NATASHA/

GitHub Pages publishes `main` → `/docs`. This is a static website with no build step, server, account requirement, analytics, or external font dependency.

## Files

- `docs/index.html`: page text, author list, static results, citation and metadata.
- `docs/styles.css`: colors, typography and responsive layouts.
- `docs/script.js`: metric/depth selection, figure viewer and citation copying.
- `docs/data.js`: all 60 BLEU/TER values from paper Table 2.
- `docs/assets/`: paper PDF, extracted figures, BibTeX, font, favicon and sharing preview.

You can edit these files directly in GitHub and commit to `main`. Pages will rebuild automatically. Online edits do not automatically update a local checkout; run `git pull --ff-only` before making local edits.

Alternatively edit the local checkout, commit, and push to `main`. Open `docs/index.html` directly in a browser for a local preview, or serve `docs` with any static HTTP server. When changing publication details, update both the displayed text and metadata. Citation text in `index.html` and `assets/natasha.bib` should agree. Numeric edits should update both static HTML and `data.js`.

## Evidence and publication dates

All reported scores are from the supplied published paper. The headline gain compares the best NATASHA encoder configuration to the best vanilla configuration separately for each task. Interactive cards compare the same encoder depth. The 38.2 BLEU result uses NATASHA-E12 with CipherDAug.

The paper belongs to NLPCC 2024. Its first online date is November 1, 2024; the print volume is dated 2025. BibTeX uses the print year from the supplied PDF.

The conceptual diagram in the hero is an explanatory illustration. Figures 1, 3 and 4 are extracted from the paper.
