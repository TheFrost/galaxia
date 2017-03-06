(function(window, document) {
    
    // Instance
    var OnePageScrollModule = new OnePageScrollModule;

    // Module
    function OnePageScrollModule() {

        // variables
        var delta = 0,
            scrollTreshhold = 5,
            actual = 1;

        // DOM elements
        var sectionsAvailable = $('.l-section');

        // control toggle 

        init();

        ///////////////////// PUBLIC

        function init () {
            console.log('init!!');
        }

        function bindEvents () {
            
            // check on resize if is mobile and on/off events
            $(window).on('resize', _validateResolution);

        }

        ////////////7777///// PRIVATE

        function _validateResolution () {
            if (_isMobile()) {

            }
        }

    };


})(window, document);
