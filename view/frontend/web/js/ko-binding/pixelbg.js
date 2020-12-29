define(['ko', 'Safta_Module/js/plain/pixelbg'], function (ko, pixelBackground) {
    'use strict';
    ko.bindingHandlers.pixelbg = {
        init: function (node, valueAccessor, allBindings, viewModel, bindingContext) {
            const value = ko.unwrap(valueAccessor()) || {};
            const config = {
                src: typeof value === 'string' ? value : value.src,
                pixelSize: typeof value === 'string' ? allBindings.get("pixelSize"): value.pixelSize,
                opaque: typeof value === 'string' ? allBindings.get("opaque"): value.opaque
            };
            pixelBackground(config, node);
        }
    };

    return ko;
});
