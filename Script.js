document.addEventListener('DOMContentLoaded', () => {
    const arrows = document.querySelectorAll('.dropdown-arrow');

    arrows.forEach(arrow => {
        const tableId = arrow.getAttribute('aria-controls');
        const table = document.getElementById(tableId);

        arrow.addEventListener('click', () => toggleTable(table, arrow));
        arrow.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleTable(table, arrow);
            }
        });
    });

    function toggleTable(table, arrow) {
        const isExpanded = arrow.getAttribute('aria-expanded') === 'true';
        if (isExpanded) {
            table.hidden = true;
            table.classList.remove('active');
            arrow.setAttribute('aria-expanded', 'false');
        } else {
            table.hidden = false;
            table.classList.add('active');
            arrow.setAttribute('aria-expanded', 'true');
        }
    }
});