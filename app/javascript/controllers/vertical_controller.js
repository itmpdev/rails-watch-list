const columns = document.querySelectorAll('.column');

columns.forEach(column => {
  column.addEventListener('mouseover', function() {
    this.style.transition = 'width 0.5s ease-out';
    this.style.width = '40vw';
  });

  column.addEventListener('mouseleave', function() {
    this.style.transition = 'width 0.5s ease-in';
    this.style.width = '4vw';
  });
});
