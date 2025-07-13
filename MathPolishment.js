

document.addEventListener('DOMContentLoaded', function () {
  
  
  // Fade in with the main content (animation)

  const mainContent = document.querySelector('.main-content');

  if (mainContent) {
    mainContent.style.opacity = '0';
    setTimeout(() => {
      mainContent.style.transition = 'opacity 0.5s ease';
      mainContent.style.opacity = '1';
    }, 100);
  }

  // Character count logic [not yet finished but it simulates the feedback chatbox]
  const textarea = document.querySelector('.post-form textarea');

  if (textarea) {
    const charCount = document.querySelector('.char-count');
    const maxLength = parseInt(textarea.getAttribute('maxlength'), 10);

    if (charCount && maxLength) {

      textarea.addEventListener('input', function () {
        const remaining = maxLength - this.value.length;
        charCount.textContent = `${remaining} characters remaining`;
        charCount.style.color = remaining < 50 ? '#e74c3c' : '#666';

      });


    }

  }



  // Form validation
  const postForm = document.querySelector('.post-form');
  if (postForm) {
    postForm.addEventListener('submit', function (e) {
      const textarea = this.querySelector('textarea');
      if (textarea.value.trim().length < 10) {
        alert('Please write at least 10 characters for your post');
        e.preventDefault();
      } else {

        alert('Post submitted successfully!');
      }


    });
  }



  // Level label selection effect to be more immersive
  const levelLabels = document.querySelectorAll('.level-selector label');

  if (levelLabels.length > 0) {
    levelLabels.forEach(label => {
      label.addEventListener('click', function () {
        levelLabels.forEach(l => l.style.transform = 'scale(1)');
        this.style.transform = 'scale(1.05)';

      });

    });
  }



  // This is to add footer for GEOMETRIX website
  const footer = document.createElement('footer');
  // Alignment for the footer
  footer.style.textAlign = 'center';
  // Padding adjustments for the footer
  footer.style.padding = '20px';
  // Colour (background) for the footer
  footer.style.color = '#666';
  // Content info for the footer
  footer.innerHTML = `© ${new Date().getFullYear()} GEOMETRIX - LearnMATH`;
  
  document.body.appendChild(footer);


});











































