'use strict';

const rows = document.querySelectorAll('tr');

rows.forEach((row) => {
  const targetCell = row.cells[1];

  const clone = targetCell.cloneNode(true);

  const lastCell = row.cells[row.cells.length - 1];

  row.insertBefore(clone, lastCell);
});
