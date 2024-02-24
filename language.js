// Function to switch language
function switchToLanguage(language) {
  // Update text content based on the selected language
  if (language === 'fr') {
      document.getElementById('hero-subtitle-js').textContent = 'Distributeur Officiel 20x22';
      document.getElementById('hero-button-js').textContent = 'Visiter la gallerie';
      //document.getElementById('description').textContent = 'Ceci est un contenu.';
  } else if (language === 'en') {
      document.getElementById('hero-subtitle-js').textContent = 'Official Distributor 20x22';
      document.getElementById('hero-button-js').textContent = 'Visit Gallery';
      //document.getElementById('description').textContent = 'This is some content.';
  }

  // Set the selected language in localStorage
  localStorage.setItem('selectedLanguage', language);

  // Highlight the selected button
  document.querySelectorAll('.language-button').forEach(function(button) {
      button.classList.remove('selected');
  });
  document.getElementById(language + 'Button').classList.add('selected');

  // Change other button colors back to default
  document.querySelectorAll('.language-button').forEach(function(button) {
      if (button.id !== language + 'Button') {
          button.classList.remove('selected');
      }
  });
}

// Function to load the selected language from localStorage
function loadSelectedLanguage() {
  const selectedLanguage = localStorage.getItem('selectedLanguage');
  if (selectedLanguage) {
      switchToLanguage(selectedLanguage);
  }
}

// Call loadSelectedLanguage when the page loads
loadSelectedLanguage();