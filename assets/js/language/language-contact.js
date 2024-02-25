// Function to switch language
function switchToLanguage(language) {
    // Update text content based on the selected language
    if (language === 'fr') {
        document.getElementById('index-accueil-js').textContent = 'Accueil';
        document.getElementById('index-apropos-js').textContent = 'À propos';
        document.getElementById('index-services-js').textContent = 'Services';
        document.getElementById('index-partenaires-js').textContent = 'Partenaires';
        document.getElementById('index-gallerie-js').textContent = 'Gallerie';
        document.getElementById('index-contact-js').textContent = 'Contact';
        document.getElementById('index-contactn-js').textContent = 'Contactez-nous';

        document.getElementById('index-contact1-js').textContent = 'Contactez-nous';
        document.getElementById('index-contact2-js').textContent = 'Envoyer un message';
        document.getElementById('index-contact3-js').textContent = 'Envoyer';
        document.getElementById('index-contact4-js').textContent = 'Dimanche à Jeudi - 8:00 à 18:00';
        document.getElementById('index-contact5-js').textContent = 'Contactez-nous à tout moment!';
  
        document.getElementById('index-addresse-js').textContent = 'Addresse';
        document.getElementById('index-telephone-js').textContent = 'Téléphone';
        document.getElementById('index-email-js').textContent = 'Email';
  
        document.getElementById('index-accueilf-js').textContent = 'Accueil';
        document.getElementById('index-aproposf-js').textContent = 'À propos';
        document.getElementById('index-servicesf-js').textContent = 'Services';
        document.getElementById('index-partenairesf-js').textContent = 'Partenaires';
        document.getElementById('index-gallerief-js').textContent = 'Gallerie';
        document.getElementById('index-contactf-js').textContent = 'Contact';
        
  
  
        //document.getElementById('description').textContent = 'Ceci est un contenu.';
    } else if (language === 'en') {
      document.getElementById('index-accueil-js').textContent = 'Home';
      document.getElementById('index-apropos-js').textContent = 'About';
      document.getElementById('index-services-js').textContent = 'Services';
      document.getElementById('index-partenaires-js').textContent = 'Partners';
      document.getElementById('index-gallerie-js').textContent = 'Gallery';
      document.getElementById('index-contact-js').textContent = 'Contact';
      document.getElementById('index-contactn-js').textContent = 'Contact Us';
  
      document.getElementById('index-contact1-js').textContent = 'Contact Us';
      document.getElementById('index-contact2-js').textContent = 'Send Message';
      document.getElementById('index-contact3-js').textContent = 'Send';
      document.getElementById('index-contact4-js').textContent = 'Sunday to Thursday - 8:00 AM to 6:00 PM';
      document.getElementById('index-contact5-js').textContent = 'Contact us at any moment!';
  
      document.getElementById('index-addresse-js').textContent = 'Address';
      document.getElementById('index-telephone-js').textContent = 'Phone';
      document.getElementById('index-email-js').textContent = 'Email';
  
      document.getElementById('index-accueilf-js').textContent = 'Home';
      document.getElementById('index-aproposf-js').textContent = 'About';
      document.getElementById('index-servicesf-js').textContent = 'Services';
      document.getElementById('index-partenairesf-js').textContent = 'Partners';
      document.getElementById('index-gallerief-js').textContent = 'Gallery';
      document.getElementById('index-contactf-js').textContent = 'Contact';
  
      
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