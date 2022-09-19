function burgermenu(selector) {
    let menu = $(selector);
    let button = menu.find('menu-btn');
    let links = menu.find('menu-list');
    let overlay = menu.find('menu-overlay');

    $('.menu-btn').on('click', (e) => {
        e.preventDefault();
        toggleMenu();        
    });
    $('.close-menu-btn').on('click', (e) => {
        e.preventDefault();
        toggleMenu();
    })
    links.on('click', () => toggleMenu());
    $('.menu-overlay').on('click', () => toggleMenu());

    function toggleMenu() {
        console.log('menu', menu)
        $(selector).toggleClass('menu_active');
    }    
}

burgermenu('.menu');

