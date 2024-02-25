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
  
        document.getElementById('index-subtitle-js').textContent = 'Distributeur Officiel 20x22';
  
        document.getElementById('index-gallerie2-js').textContent = 'Gallerie';
        document.getElementById('index-badminton1-js').textContent = 'ÉQUIPE NATIONALE DE BADMINTON, ALGÉRIE';
        document.getElementById('index-badminton2-js').textContent = 'ÉQUIPE NATIONALE DE BADMINTON, ALGÉRIE';
        document.getElementById('index-tshirt1-js').textContent = 'Modèle T-shirt';
        document.getElementById('index-tshirt2-js').textContent = 'Modèle T-shirt';
        document.getElementById('index-badminton3-js').textContent = 'ÉQUIPE NATIONALE DE BADMINTON, ALGÉRIE';
        document.getElementById('index-tshirt3-js').textContent = 'Modèle T-shirt';
        document.getElementById('index-tshirt4-js').textContent = 'Modèle T-shirt';
        document.getElementById('index-tshirt5-js').textContent = 'Modèle T-shirt';
        document.getElementById('index-tshirt6-js').textContent = 'Modèle T-shirt';
        document.getElementById('index-tshirt7-js').textContent = 'Modèle T-shirt';
        document.getElementById('index-tshirt8-js').textContent = 'Modèle T-shirt';
        document.getElementById('index-tshirt9-js').textContent = 'Modèle T-shirt';
        document.getElementById('index-tshirt10-js').textContent = 'Modèle T-shirt';
        document.getElementById('index-tshirt11-js').textContent = 'Modèle T-shirt';
        document.getElementById('index-tshirt12-js').textContent = 'Modèle T-shirt';
        document.getElementById('index-tshirt13-js').textContent = 'Modèle T-shirt';
        document.getElementById('index-tshirt14-js').textContent = 'Modèle T-shirt';
        document.getElementById('index-tshirt15-js').textContent = 'Modèle T-shirt';
        document.getElementById('index-badminton4-js').textContent = 'ÉQUIPE NATIONALE DE BADMINTON, ALGÉRIE';
        document.getElementById('index-badminton5-js').textContent = 'ÉQUIPE NATIONALE DE BADMINTON, ALGÉRIE';
  
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
  
      document.getElementById('index-subtitle-js').textContent = 'Official Distributor 20x22';

      document.getElementById('index-gallerie2-js').textContent = 'Gallery';
      document.getElementById('index-badminton1-js').textContent = 'NATIONAL BADMINTON TEAM, ALGERIA';
      document.getElementById('index-badminton2-js').textContent = 'NATIONAL BADMINTON TEAM, ALGERIA';
      document.getElementById('index-tshirt1-js').textContent = 'T-shirt Model';
      document.getElementById('index-tshirt2-js').textContent = 'T-shirt Model';
      document.getElementById('index-badminton3-js').textContent = 'NATIONAL BADMINTON TEAM, ALGERIA';
      document.getElementById('index-tshirt3-js').textContent = 'T-shirt Model';
      document.getElementById('index-tshirt4-js').textContent = 'T-shirt Model';
      document.getElementById('index-tshirt5-js').textContent = 'T-shirt Model';
      document.getElementById('index-tshirt6-js').textContent = 'T-shirt Model';
      document.getElementById('index-tshirt7-js').textContent = 'T-shirt Model';
      document.getElementById('index-tshirt8-js').textContent = 'T-shirt Model';
      document.getElementById('index-tshirt9-js').textContent = 'T-shirt Model';
      document.getElementById('index-tshirt10-js').textContent = 'T-shirt Model';
      document.getElementById('index-tshirt11-js').textContent = 'T-shirt Model';
      document.getElementById('index-tshirt12-js').textContent = 'T-shirt Model';
      document.getElementById('index-tshirt13-js').textContent = 'T-shirt Model';
      document.getElementById('index-tshirt14-js').textContent = 'T-shirt Model';
      document.getElementById('index-tshirt15-js').textContent = 'T-shirt Model';
      document.getElementById('index-badminton4-js').textContent = 'NATIONAL BADMINTON TEAM, ALGERIA';
      document.getElementById('index-badminton5-js').textContent = 'NATIONAL BADMINTON TEAM, ALGERIA';
  
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