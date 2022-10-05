function burgermenu(selector) {
    let menu = $(selector);

    $('.menu-btn').on('click', (e) => {
        e.preventDefault();
        toggleMenu();        
    });
    $('.close-menu-btn').on('click', (e) => {
        e.preventDefault();
        toggleMenu();
    })
    $('.menu-list').on('click', () => toggleMenu());
    $('.menu-overlay').on('click', () => toggleMenu());

    function toggleMenu() {
        console.log('menu', menu)
        $(selector).toggleClass('menu_active');
    }    
}

burgermenu('.menu');

