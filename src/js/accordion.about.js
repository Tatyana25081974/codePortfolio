document.addEventListener('DOMContentLoaded', function () {
  const accordionItemsAbout = document.querySelectorAll(
    '.accordion-item-about'
  );

  accordionItemsAbout.forEach((item, index) => {
    const header = item.querySelector('.accordion-header-about');

    header.addEventListener('click', function () {
      const isActive = item.classList.contains('active-about');

      accordionItemsAbout.forEach(i => i.classList.remove('active-about'));

      if (!isActive) {
        item.classList.add('active-about');
      }
    });

    if (index === 0) {
      item.classList.add('active-about');
    }
  });
});
