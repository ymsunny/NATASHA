(() => {
  'use strict';
  const data = window.NATASHA_DATA;
  let taskIndex = 2;
  let metric = 'bleu';
  const $ = selector => document.querySelector(selector);
  const all = selector => document.querySelectorAll(selector);
  const number = value => value.toFixed(1);
  function updateResults() {
    const task = data.tasks[taskIndex];
    const scores = data.models.map(model => model[metric][taskIndex]);
    const best = values => metric === 'bleu' ? Math.max(...values) : Math.min(...values);
    const baseline = best(scores.slice(0, 4));
    const score = best(scores.slice(4));
    const modelIndex = scores.findIndex((value,index) => index >= 4 && value === score);
    const difference = score - baseline;
    $('#task-name').textContent = task.name;
    $('#task-corpus').textContent = `${task.corpus} · ${task.size} parallel pairs`;
    const axisMaximum = metric === 'bleu' ? 40 : 100;
    all('.chart-row').forEach((row,index) => {
      row.querySelector('.chart-value').textContent = number(scores[index]);
      row.querySelector('.chart-bar').style.width = `${scores[index]/axisMaximum*100}%`;
    });
    all('.chart-axis span').forEach((tick,index) => { tick.textContent = index*axisMaximum/4; });
    $('#result-chart').setAttribute('aria-label',`${metric.toUpperCase()} scores for ${task.name}`);
    $('#metric-note').textContent = metric === 'bleu' ? 'BLEU ↑ · Higher is better. The axis starts at zero.' : 'TER ↓ · Lower is better. The axis starts at zero.';
    $('#best-score').textContent = number(score);
    $('#best-metric').textContent = metric.toUpperCase();
    $('#best-model').textContent = data.models[modelIndex].name;
    $('#best-delta').textContent = `${difference > 0 ? '+' : '−'}${number(Math.abs(difference))}`;
    $('#comparison-note').textContent = metric === 'bleu' ? `BLEU over the best vanilla model (${number(baseline)}).` : `TER below the best vanilla model (${number(baseline)}). Lower is better.`;
    all('[data-task]').forEach(button => button.setAttribute('aria-pressed',String(Number(button.dataset.task) === taskIndex)));
    all('[data-metric]').forEach(button => button.setAttribute('aria-pressed',String(button.dataset.metric === metric)));
  }
  all('[data-task]').forEach(button => button.addEventListener('click', () => {
    taskIndex = Number(button.dataset.task);
    updateResults();
  }));
  all('[data-metric]').forEach(button => button.addEventListener('click', () => {
    metric = button.dataset.metric;
    updateResults();
  }));
  const copy = $('#copy-citation');
  let resetCopy;
  copy.addEventListener('click', async () => {
    const text = $('#bibtex').textContent.trim();
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
        const success = document.execCommand('copy');
        textarea.remove();
        if (!success) throw new Error('Clipboard not available');
      }
      $('#copy-status').textContent = 'BibTeX copied to your clipboard.';
      copy.textContent = 'Copied ✓';
      clearTimeout(resetCopy);
      resetCopy = setTimeout(() => { copy.innerHTML = 'Copy BibTeX <span aria-hidden="true">↗</span>'; },2500);
    } catch (_) {
      $('#copy-status').textContent = 'Select and copy the citation, or use the .bib download.';
      const range = document.createRange();
      range.selectNodeContents($('#bibtex'));
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
    }
  });
  const dialog = $('#figure-dialog');
  let lastFigure;
  all('[data-figure]').forEach(link => link.addEventListener('click', event => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || typeof dialog.showModal !== 'function') return;
    event.preventDefault();
    lastFigure = link;
    $('#dialog-image').src = link.href;
    $('#dialog-image').alt = link.dataset.caption;
    $('#figure-caption').textContent = link.dataset.caption;
    $('#original-image').href = link.href;
    dialog.showModal();
  }));
  $('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });
  dialog.addEventListener('close', () => { if (lastFigure) lastFigure.focus(); });
})();
