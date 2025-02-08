document.addEventListener('DOMContentLoaded', () => {
  try {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const picturesMap = new Map();

    document.querySelectorAll('.gallery-general-wrap').forEach(wrap => {
      picturesMap.set(wrap, wrap.querySelectorAll('.gallery-picture'));
    });

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const pictures = picturesMap.get(entry.target);
        if (pictures) {
          pictures.forEach(picture =>
            picture.classList.toggle('animate-marquee', entry.isIntersecting)
          );
        }
      });
    }, options);

    picturesMap.forEach((_, wrap) => observer.observe(wrap));
  } catch (error) {
    console.error('Помилка в обробці анімації:', error);
  }
});
