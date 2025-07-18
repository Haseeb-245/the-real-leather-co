document.querySelectorAll('.product-card').forEach(card => {
  const title = card.querySelector('h1');
  const img = card.querySelector('img');

  const originalSrc = img.src;
  const hoverSrc = img.dataset.hover;

  card.addEventListener('mouseenter', () => {
    title.style.textDecoration = 'underline';
    if (hoverSrc) img.src = hoverSrc;
  });

  card.addEventListener('mouseleave', () => {
    title.style.textDecoration = 'none';
    img.src = originalSrc;
  });
});

   function toggleFAQ(element) {
    const faqItem = element.closest('.faq-item');
    const answer = faqItem.querySelector('.faq-answer');
    const arrow = element.querySelector('span');

    // Toggle answer visibility
    answer.classList.toggle('hidden');
    
    // Toggle arrow icon
    if (answer.classList.contains('hidden')) {
      arrow.innerHTML = '›';
      arrow.classList.remove('');
    } else {
      arrow.innerHTML = '⌄';
      arrow.classList.add('');
    }
  }
   function toggleWorkBagsDropdown() {
    const dropdown = document.getElementById('work-bags-dropdown');
    const arrow = document.getElementById('work-bags-arrow');
    
    // Toggle dropdown visibility
    dropdown.classList.toggle('hidden');
    dropdown.classList.toggle('scale-y-100');
    dropdown.classList.toggle('scale-y-0');
    
    // Rotate arrow
    arrow.classList.toggle('rotate-180');
  }

  function toggleDropdown(button) {
    const dropdown = button.closest('.dropdown');
    const content = dropdown.querySelector('.dropdown-content');
    const icon = dropdown.querySelector('.dropdown-icon');
    
    // Close all other dropdowns
    document.querySelectorAll('.dropdown-content').forEach(d => {
      if (d !== content) {
        d.classList.add('hidden');
        d.closest('.dropdown').querySelector('.dropdown-icon').innerHTML = 
          '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>';
      }
    });
    
    // Toggle current dropdown
    content.classList.toggle('hidden');
    
    // Toggle icon between arrow and cross
    if (content.classList.contains('hidden')) {
      icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>';
    } else {
      icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>';
    }
  }

  function toggleDropdown(button) {
    const dropdown = button.nextElementSibling;
    const arrow = button.querySelector('svg');
    
    // Close all other dropdowns first
    document.querySelectorAll('.dropdown-content').forEach(d => {
      if (d !== dropdown) {
        d.classList.add('hidden');
        const otherArrow = d.previousElementSibling.querySelector('svg');
        otherArrow.classList.remove('rotate-180');
        otherArrow.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>';
      }
    });
    
    // Toggle current dropdown
    dropdown.classList.toggle('hidden');
    
    // Toggle arrow icon
    if (dropdown.classList.contains('hidden')) {
      arrow.classList.remove('rotate-180');
      arrow.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>';
    } else {
      arrow.classList.add('rotate-180');
      arrow.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>';
    }
  }