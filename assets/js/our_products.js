document.addEventListener('DOMContentLoaded', function() {
  const filterLinks = document.querySelectorAll('.nav-link');
  const productCards = document.querySelectorAll('.col');

  filterLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      
      // Remove active class from all links
      filterLinks.forEach(link => link.classList.remove('active'));

      // Add active class to the clicked link
      this.classList.add('active');

      const filter = this.getAttribute('data-filter');

      productCards.forEach(card => {
        if (filter === 'all') {
          card.style.display = '';
        } else {
          if (card.getAttribute('data-category') === filter) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        }
      });
    });
  });
});
