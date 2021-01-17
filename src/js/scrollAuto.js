function contentObserver(updateList) {
  const targetObserver = document.querySelector('.gallery li:last-child');
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        updateList();
        observer.unobserve(targetObserver);
      }
    });
  });
  io.observe(targetObserver);
}

export default contentObserver;
