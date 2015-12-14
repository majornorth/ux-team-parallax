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

    var two = document.getElementsByClassName('two')[0];
    var three = document.getElementsByClassName('three')[0];

    if (off.y >= '1001' && off.y <= '1999') {
        two.style.opacity = "1";
        three.style.opacity = "0";
    }

    if (off.y <= '1000') {
        two.style.opacity = "0";
    }

    if (off.y >= '2001' && off.y <= '2999') {
        two.style.opacity = "0";
        three.style.opacity = "1";
    }
}
