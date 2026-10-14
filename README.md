# NATASHA

**Understanding and Improving Low-Resource Neural Machine Translation with Shallow Features**

Yanming Sun, Xuebo Liu, Derek F. Wong, Yuchu Lin, Bei Li, Runzhe Zhan, Lidia S. Chao, and Min Zhang.

NLPCC 2024, Proceedings, Part III, LNAI 15361, pages 227–239. Springer print volume: 2025; first online: November 1, 2024.

- [Project homepage](https://ymsunny.github.io/NATASHA/)
- [Paper PDF](https://ymsunny.github.io/NATASHA/assets/natasha-paper.pdf)
- [Publisher record](https://doi.org/10.1007/978-981-97-9437-9_18)
- [BibTeX](docs/assets/natasha.bib)

NATASHA trains a shallow teacher on the original parallel corpus, uses it to create sequence-level distillation data, then trains a deeper model on the original and distilled pairs. It requires no architecture changes or additional corpora.

This repository hosts the paper's promotional website. The website includes an explanation of the method, figures from the paper, interactive Table 2 comparisons for BLEU and TER, complementary-method results, ablations, and a citation.

The website files are in [`docs/`](docs/). See [WEBSITE.md](WEBSITE.md) for editing and deployment details.
