function contentObserver(updateList) {
  const targetObserver = document.querySelector('.gallery li:last-child');
  const options = {
    rootMargin: '200px',
  };
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        updateList();
        observer.unobserve(targetObserver);
      }
    });
  }, options);
  io.observe(targetObserver);
}

export default contentObserver;
