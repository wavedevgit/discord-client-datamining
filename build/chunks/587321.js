/** Chunk was on web.js **/
/** chunk id: 587321, original params: e,t,n (module,exports,require) **/
"use strict";
var r = n(505122),
    i = n(584606);
e.exports = function(e) {
    for (var t = e; t && t !== r(e).documentElement;) {
        var n = i(t);
        if (null != n) return n;
        t = t.parentNode
    }
    return null
}