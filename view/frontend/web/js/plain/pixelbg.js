define(
    ['Safta_Module/js/lib/create-background-canvas', 'Safta_Module/js/lib/pixel-image-canvas'],
    function (createBackGroundCanvas, pixelImageOnCanvas) {
        'use strict';

        return function (config, targetElement, maybeCanvas) {
            const src = config.src || '';
            const pixelSize = Math.max(config.pixelSize || 5, 1);
            const canvas = maybeCanvas || createBackGroundCanvas(targetElement);
            console.log(canvas);
            canvas.style.opacity = config.opacity || .5;

            const cols = Math.floor(canvas.scrollWidth / pixelSize);
            const rows = Math.floor(canvas.scrollHeight / pixelSize);

            pixelImageOnCanvas(canvas, src, cols, rows);

            return canvas;









        }
    }
);
