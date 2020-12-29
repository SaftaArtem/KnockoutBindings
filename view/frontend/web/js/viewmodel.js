define(['uiComponent', 'Safta_Module/js/ko-binding/pixelbg'], function (Component) {
    'use strict';
    return Component.extend({
        defaults: {
            pixelSize: 10,
            tracks: {
                pixelSize: true
            }
        }
    });
});
