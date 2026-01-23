/** Chunk was on web.js **/
/** chunk id: 205219, original params: e,t,n (module,exports,require) **/
"use strict";

function r() {
    var e = navigator.userAgentData;
    return null != e && e.brands && Array.isArray(e.brands) ? e.brands.map(function(e) {
        return e.brand + "/" + e.version
    }).join(" ") : navigator.userAgent
}
n.d(t, {
    A: () => r
})