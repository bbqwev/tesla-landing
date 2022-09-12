function burgermenu(selector) {
    let menu = (selector);
    let button = menu.find('.menu-btn');
    let links = menu.find('.menu-list');
    let overlay = menu.find('.menu-overlay');

    button.on('click', (e) => {
        e.preventDefault();
        toggleMenu();        
    });
    links.on('click', () => toggleMenu());
    overlay.on('click', () => toggleMenu());

    function toggleMenu() {
        menu.toggleClass('.menu_active');

    }    
}

burgermenu('.menu');