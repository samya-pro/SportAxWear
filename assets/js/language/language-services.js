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
  
        document.getElementById('index-homme-js').textContent = 'VÊTEMENTS POUR HOMME';
        document.getElementById('index-hommedesc-js').textContent = 'Découvrez notre collection exclusive de vêtements pour hommes, spécialement conçue pour les clubs de sport et les franchises';
        document.getElementById('index-hommeb-js').textContent = 'Visiter la gallerie';
        document.getElementById('index-femme-js').textContent = 'VÊTEMENTS POUR FEMME';
        document.getElementById('index-femmedesc-js').textContent = 'Explorez notre sélection élégante de vêtements pour femmes, conçue pour les clubs de sport et les franchises';
        document.getElementById('index-femmeb-js').textContent = 'Visiter la gallerie';
  
        document.getElementById('index-service-js').textContent = 'Nos services';
        document.getElementById('index-service1-js').textContent = 'VÊTEMENTS DE SPORT SUR MESURE POUR CLUBS ET FRANCHISES';
        document.getElementById('index-service1desc-js').textContent = 'Personnalisez le style de votre équipe avec nos vêtements de sport sur mesure, adaptés à chaque club et franchise. Des maillots aux survêtements, nous avons tout ce qu\'il vous faut.';
        document.getElementById('index-service2-js').textContent = 'GAMME COMPLÈTE DE VÊTEMENTS POUR HOMMES, FEMMES ET ENFANTS';
        document.getElementById('index-service2desc-js').textContent = 'Découvrez notre collection de vêtements de sport. Que ce soit pour les hommes, les femmes ou les plus petits, nous proposons une gamme complète de vêtements et accessoires pour tous les âges et toutes les tailles.';
        document.getElementById('index-service3-js').textContent = 'SOLUTIONS VESTIMENTAIRES PERSONNALISÉES';
        document.getElementById('index-service3desc-js').textContent = 'Démarquez-vous sur le terrain avec nos solutions vestimentaires personnalisées. Notre approche sur mesure garantit que chaque pièce est confectionnée selon vos spécifications exactes, alliant confort, style et performance.';
        document.getElementById('index-service4-js').textContent = 'LIGNE DE PRODUITS COMPLÈTE';
        document.getElementById('index-service4desc-js').textContent = 'Explorez notre large gamme de vêtements de sport et d\'accessoires, comprenant chaussures, pantalons de jogging, shorts, t-shirts et plus encore.';
        document.getElementById('index-service5-js').textContent = 'EXPERTISE EN UNIFORMES D\'ÉQUIPE';
        document.getElementById('index-service5desc-js').textContent = 'Faites confiance à notre expertise en uniformes d\'équipe et équipez votre club ou franchise avec des vêtements de sport de qualité professionnelle. Nous proposons des options de personnalisation et de branding d\'équipe.';
        document.getElementById('index-service6-js').textContent = 'SERVICE PERSONNALISÉ ET SUPPORT';
        document.getElementById('index-service6desc-js').textContent = 'Bénéficiez d\'un service exceptionnel de A à Z avec notre équipe dédiée. De la consultation initiale en design à la livraison finale, nous sommes là pour répondre à vos besoins.';
  
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
  
      document.getElementById('index-homme-js').textContent = 'MEN\'S CLOTHING';
      document.getElementById('index-hommedesc-js').textContent = 'Discover our exclusive collection of men\'s clothing, specially designed for sports clubs and franchises.';
      document.getElementById('index-hommeb-js').textContent = 'Visit the gallery';
      document.getElementById('index-femme-js').textContent = 'WOMEN\'S CLOTHING';
      document.getElementById('index-femmedesc-js').textContent = 'Explore our stylish selection of women\'s clothing, designed for sports clubs and franchises.';
      document.getElementById('index-femmeb-js').textContent = 'Visit the gallery';
  
      document.getElementById('index-service-js').textContent = 'Our Services';
      document.getElementById('index-service1-js').textContent = 'CUSTOM SPORTSWEAR FOR CLUBS AND FRANCHISES';
      document.getElementById('index-service1desc-js').textContent = 'Customize your team\'s style with our custom sportswear, tailored to each club and franchise. From jerseys to tracksuits, we have everything you need.';
      document.getElementById('index-service2-js').textContent = 'FULL RANGE OF CLOTHING FOR MEN, WOMEN, AND CHILDREN';
      document.getElementById('index-service2desc-js').textContent = 'Discover our sports clothing collection. Whether for men, women, or the little ones, we offer a complete range of clothing and accessories for all ages and sizes.';
      document.getElementById('index-service3-js').textContent = 'CUSTOM CLOTHING SOLUTIONS';
      document.getElementById('index-service3desc-js').textContent = 'Stand out on the field with our custom clothing solutions. Our bespoke approach ensures that each piece is crafted to your exact specifications, combining comfort, style, and performance.';
      document.getElementById('index-service4-js').textContent = 'COMPLETE PRODUCT LINE';
      document.getElementById('index-service4desc-js').textContent = 'Explore our wide range of sports clothing and accessories, including shoes, joggers, shorts, t-shirts, and more.';
      document.getElementById('index-service5-js').textContent = 'EXPERTISE IN TEAM UNIFORMS';
      document.getElementById('index-service5desc-js').textContent = 'Trust our expertise in team uniforms and equip your club or franchise with professional quality sports clothing. We offer team customization and branding options.';
      document.getElementById('index-service6-js').textContent = 'PERSONALIZED SERVICE AND SUPPORT';
      document.getElementById('index-service6desc-js').textContent = 'Benefit from exceptional service from A to Z with our dedicated team. From initial design consultation to final delivery, we are here to meet your needs.';
  
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