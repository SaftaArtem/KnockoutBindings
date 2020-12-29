define(['ko', 'Safta_Module/js/plain/pixelbg'], function (ko, pixelBackground) {
    'use strict';
    function execute(node, valueAccessor, allBindings, maybeCanvas) {
        const value = ko.unwrap(valueAccessor()) || {};
        const config = {
            src: typeof value === 'string' ? value : value.src,
            pixelSize: typeof value === 'string' ? allBindings.get("pixelSize"): value.pixelSize,
            opaque: typeof value === 'string' ? allBindings.get("opaque"): value.opaque
        };
        return pixelBackground(config, node, maybeCanvas);
    }

    ko.bindingHandlers.pixelbg = {
        init: function (node, valueAccessor, allBindings, viewModel, bindingContext) {
            const canvas = execute(node, valueAccessor, allBindings);
            bindingContext.$data.pixelbg = {canvas: canvas}
        },
        update: function (node, valueAccessor, allBindings, viewModel, bindingContext) {
            const canvas = bindingContext.$data.pixelbg.canvas
            execute(node, valueAccessor, allBindings, canvas);
        }
    };

    return ko;
});
