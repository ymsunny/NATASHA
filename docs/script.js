(() => {
  'use strict';
  const data = window.NATASHA;
  let depth = 6;
  let metric = 'bleu';
  function renderResults() {
    const baseline = data.models.find(model => model.name === `E${depth}`);
    const ours = data.models.find(model => model.name === `NATASHA-E${depth}`);
    const cards = document.querySelectorAll('.task-card');
    cards.forEach((card, index) => {
      const a = baseline[metric][index];
      const b = ours[metric][index];
      card.querySelector('.baseline-score').textContent = a.toFixed(1);
      card.querySelector('.ours-score').textContent = b.toFixed(1);
      card.querySelector('.baseline-score').previousElementSibling.textContent = `Vanilla E${depth}`;
      card.querySelector('.ours-score').previousElementSibling.textContent = `NATASHA-E${depth}`;
      const difference = b - a;
      card.querySelector('.gain-value').textContent = `${difference > 0 ? '+' : ''}${difference.toFixed(1)}`;
      card.querySelector('.gain-unit').textContent = metric.toUpperCase();
    });
    document.querySelectorAll('[data-depth]').forEach(button => button.setAttribute('aria-pressed', String(Number(button.dataset.depth) === depth)));
    document.querySelectorAll('[data-metric]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.metric === metric)));
    document.getElementById('metric-description').textContent = metric === 'bleu' ? 'BLEU: higher is better.' : 'TER: lower is better. Negative changes indicate improvement.';
  }
  document.querySelectorAll('[data-depth]').forEach(button => button.addEventListener('click', () => { depth = Number(button.dataset.depth); renderResults(); }));
  document.querySelectorAll('[data-metric]').forEach(button => button.addEventListener('click', () => { metric = button.dataset.metric; renderResults(); }));
  const copyButton = document.getElementById('copy-citation');
  copyButton.addEventListener('click', async () => {
    const text = document.getElementById('bibtex').textContent.trim();
    const status = document.getElementById('copy-status');
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        const copied = document.execCommand('copy');
        textarea.remove();
        if (!copied) throw new Error('Clipboard not available');
      }
      status.textContent = 'BibTeX copied to clipboard.';
      copyButton.textContent = 'Copied ✓';
      setTimeout(() => { copyButton.textContent = 'Copy BibTeX'; }, 2500);
    } catch (_) {
      status.textContent = 'Select the citation below to copy it, or download the .bib file.';
      const range = document.createRange();
      range.selectNodeContents(document.getElementById('bibtex'));
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
    }
  });
  const dialog = document.getElementById('figure-dialog');
  let lastFigure = null;
  document.querySelectorAll('[data-figure]').forEach(link => link.addEventListener('click', event => {
    if (typeof dialog.showModal !== 'function') return;
    event.preventDefault();
    lastFigure = link;
    const image = document.getElementById('dialog-image');
    image.src = link.href;
    image.alt = link.dataset.caption;
    document.getElementById('figure-caption').textContent = link.dataset.caption;
    document.getElementById('figure-download').href = link.href;
    dialog.showModal();
  }));
  document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
  dialog.addEventListener('close', () => { if (lastFigure) lastFigure.focus(); });
})();
