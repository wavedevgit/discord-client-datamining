/** Chunk was on 38939 **/
/** chunk id: 587321, original params: t,e,r (module,exports,require) **/
"use strict";
var n = r(505122),
    i = r(584606);
t.exports = function(t) {
    for (var e = t; e && e !== n(t).documentElement;) {
        var r = i(e);
        if (null != r) return r;
        e = e.parentNode
    }
    return null
}