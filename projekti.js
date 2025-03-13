// script.js


    // Filter Projekata
    const filterButtons = document.querySelectorAll('.filter-button');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter;
            
            // Update aktivnog dugmeta
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter kartica
            projectCards.forEach(card => {
                const category = card.dataset.category;
                card.style.display = (filter === 'all' || category === filter) ? 'block' : 'none';
            });
        });
    });

  