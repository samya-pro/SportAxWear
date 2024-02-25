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
  
        document.getElementById('index-apropos2-js').textContent = 'À propos';
        document.getElementById('index-apropost1-js').textContent = 'Sport Ax Wear est fier de servir en tant que distributeur officiel de la marque renommée 20x22. Avec un engagement envers la qualité et le style, nous vous proposons une sélection soigneusement choisie de vêtements de sport qui allie innovation et performance.';
        document.getElementById('index-apropost2-js').textContent = 'De la tenue de sport haute performance aux pièces décontractées élégantes, notre collection incarne l\'esprit de l\'athlétisme et de la mode, garantissant que vous puissiez performer au mieux, que ce soit sur le terrain ou en dehors.';
        document.getElementById('index-aproposb-js').textContent = 'Contactez-nous';
  
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
  
      document.getElementById('index-apropos2-js').textContent = 'About Us';
      document.getElementById('index-apropost1-js').textContent = 'Sport Ax Wear is proud to serve as the official distributor of the renowned 20x22 brand. With a commitment to quality and style, we offer a carefully curated selection of sports clothing that combines innovation and performance.';
      document.getElementById('index-apropost2-js').textContent = 'From high-performance sportswear to stylish casual pieces, our collection embodies the spirit of athleticism and fashion, ensuring you can perform at your best, whether on the field or off.';
      document.getElementById('index-aproposb-js').textContent = 'Contact Us';
  
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