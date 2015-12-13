// (function getScrollOffsets() {
//     var x = window.pageXOffset;
//     var y = window.pageYOffset;

//     console.log(x + " + " + y);
// }());


function dw_getScrollOffsets() {
    var doc = document, w = window;
    var x, y, docEl;

    if ( typeof w.pageYOffset === 'number' ) {
        x = w.pageXOffset;
        y = w.pageYOffset;
    } else {
        docEl = (doc.compatMode && doc.compatMode === 'CSS1Compat')?
                doc.documentElement: doc.body;
        x = docEl.scrollLeft;
        y = docEl.scrollTop;
    }
    return {x:x, y:y};
}

window.onscroll = function() {
    var off = dw_getScrollOffsets();
    console.log(off.y);

    if (off.y >= '1001' && off.y <= '1999') {
        var two = document.getElementsByClassName('two')[0];
        two.classList.add('fadein');
    }

    if (off.y <= '1000') {
        var two = document.getElementsByClassName('two')[0];
        two.classList.remove('fadein');
    }
}
