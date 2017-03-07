(function(window, document) {
    
    // Instance
    var App = new App;

    // Module
    function App() {

        var _inputs = $('.c-form__input input');

        init();

        ///////////////////// PUBLIC

        function init () {
            bindEvents();
        }

        function bindEvents () {

            _inputs.change(_onChangeInput);
            _inputs.focusin(_focusIn);
            _inputs.focusout(_focusOut);

        }

        ///////////////////// PRIVATE

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
