(function(window, document) {
    
    // Instance
    var App = new App;

    // Module
    function App() {

        var _body = $('body'),
            _window = $(window),
            _inputs = $('.c-form__input input'),
            _menuTrigger = $('#menuTrigger'),
            _menuLinks = $('.l-sidenav__menu-link'),
            _closeMenu = $('#closeMenu'),
            _overlay = $('#overlay'),
            _productCarousel = $('#productsCarousel'),
            _giftsCarousel = $('#giftsCarousel');

        init();

        ///////////////////// PUBLIC

        function init () {
            _bindEvents();
            _validateProductCarousel();
            _initGiftsCarousel();
        }

        function _bindEvents () {

            _window.resize(function() {
                _validateProductCarousel();
            });

            _inputs.change(_onChangeInput);
            _inputs.focusin(_focusIn);
            _inputs.focusout(_focusOut);

            _menuTrigger.on('click', _toggleMenu);
            _menuLinks.on('click', _toggleMenu);
            _closeMenu.on('click', _toggleMenu);
            _overlay.on('click', _toggleMenu);

        }

        ///////////////////// PRIVATE

        function _initGiftsCarousel () {
            _giftsCarousel.owlCarousel({
                loop: true,
                nav: true,
                navText: [
                    '<i class="fa fa-angle-left" aria-hidden="true"></i>',
                    '<i class="fa fa-angle-right" aria-hidden="true"></i>'
                ],
                singleItem: true,
                // responsiveClass:true,
                // responsiveBaseElement: '.l-section__safe-area',
                // responsive:{
                //     0:{
                //         items:1,
                //         nav:true
                //     },
                //     600:{
                //         items:3,
                //         nav:false
                //     },
                //     1000:{
                //         items:5,
                //         nav:true,
                //         loop:false
                //     }
                // }
            });
        }

        function _validateProductCarousel () {
            if (_window.innerWidth() < 768) {
                _initProductCarousel();
            } else {
                _killProductCarousel();
            }
        }

        function _killProductCarousel () {
            _productCarousel.owlCarousel('destroy');
        }

        function _initProductCarousel () {
            _productCarousel.owlCarousel({
                items: 1,
                loop: true,
                nav: true,
                navText: [
                    '<i class="fa fa-angle-left" aria-hidden="true"></i>',
                    '<i class="fa fa-angle-right" aria-hidden="true"></i>'
                ],
            });
        }

        function _toggleMenu (evt) {

            _body.toggleClass('js-offcanvas-on');
        }

        function _onChangeInput () {
            var that = $(this),
                parent = that.parent('.c-form__input');

            if (!_.isEmpty(that.val())) {
                parent.addClass('js-dirty');
            } else {
                parent.removeClass('js-dirty');
            }
        }

        function _focusIn () {
            $(this).parent('.c-form__input').addClass('js-focus');
        }

        function _focusOut () {
            $(this).parent('.c-form__input').removeClass('js-focus');
        }

    };


})(window, document);
