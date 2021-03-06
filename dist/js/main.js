(function (window, document) {

    // Instance
    var App = new App;

    // Module
    function App() {

        var _body = $('body'),
            _window = $(window),
            _inputs = $('.c-form__input input'),
            _selects = $('.c-form__input select');
            _menuTrigger = $('#menuTrigger'),
            _menuLinks = $('.l-sidenav__menu-link'),
            _closeMenu = $('#closeMenu'),
            _overlay = $('#overlay'),
            _productCarousel = $('#productsCarousel'),
            _giftsCarousel = $('#giftsCarousel');

        init();

        ///////////////////// PUBLIC

        function init() {
            _bindEvents();
            _validateProductCarousel();
            _validateMenuLinksEventHandler();
            _initGiftsCarousel();
        }

        function _bindEvents() {

            _window.resize(function () {
                _validateProductCarousel();
                _validateMenuLinksEventHandler();
            });

            _inputs.change(_onChangeInput);
            _inputs.focusin(_focusIn);
            _inputs.focusout(_focusOut);
            _selects.change(_onChangeSelect);

            _menuTrigger.on('click', _toggleMenu);
            _closeMenu.on('click', _toggleMenu);
            _overlay.on('click', _toggleMenu);

        }

        ///////////////////// PRIVATE

        function _initGiftsCarousel() {
            _giftsCarousel.owlCarousel({
                loop: true,
                nav: true,
                navText: [
                    '<i class="fa fa-angle-left" aria-hidden="true"></i>',
                    '<i class="fa fa-angle-right" aria-hidden="true"></i>'
                ],
                responsiveClass: true,
                responsiveBaseElement: 'body',
                responsive: {
                    0: {
                        items: 1
                    },
                    768: {
                        items: 3
                    }
                }
            });
        }

        function _validateProductCarousel() {
            if (_window.innerWidth() < 768) {
                _initProductCarousel();
            } else {
                _killProductCarousel();
            }
        }

        function _validateMenuLinksEventHandler() {
            if (_window.innerWidth() >= 1024) {
                _menuLinks.off('click', _toggleMenu);
            } else {
                _menuLinks.on('click', _toggleMenu);
            }
        }

        function _killProductCarousel() {
            _productCarousel.owlCarousel('destroy');
        }

        function _initProductCarousel() {
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

        function _toggleMenu(evt) {

            _body.toggleClass('js-offcanvas-on');
        }

        function _onChangeInput() {
            var that = $(this),
                parent = that.parent('.c-form__input');

            if (!_.isEmpty(that.val())) {
                parent.addClass('js-dirty');
            } else {
                parent.removeClass('js-dirty');
            }
        }

        function _onChangeSelect() {
            var that = $(this),
                siblingInput = that.siblings('input');

            siblingInput.val(that.val());

            siblingInput.trigger('change');
        }

        function _focusIn() {
            $(this).parent('.c-form__input').addClass('js-focus');
        }

        function _focusOut() {
            $(this).parent('.c-form__input').removeClass('js-focus');
        }

    };


    var wait = function (duration) {
        if (duration === void 0) duration = 0;

        var timer = function (resolve) {
            setTimeout(resolve, duration);
        };
        var promise = new Promise(timer);
        return promise;
    };

    var heroArt = $('.p-home__art');
    heroArt.addClass('fx-glitch');
    
    wait(1000)
        .then(function () {
            heroArt.removeClass('fx-glitch');
        });


})(window, document);
