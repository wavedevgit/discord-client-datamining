/** chunk id: 536978, original params: t (module,exports,require) **/
"use strict";
t.exports = function(t) {
    return t.Window && t instanceof t.Window ? {
        x: t.pageXOffset || t.document.documentElement.scrollLeft,
        y: t.pageYOffset || t.document.documentElement.scrollTop
    } : {
        x: t.scrollLeft,
        y: t.scrollTop
    }
}