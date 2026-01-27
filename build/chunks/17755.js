/** Chunk was on web.js **/
/** chunk id: 17755, original params: e,t,n (module,exports,require) **/
"use strict";
var r = n(446474),
    i = n(101968),
    a = n(339626),
    o = n(647055),
    s = n(221748),
    l = TypeError;
e.exports = function(e, t) {
    var n = e.exec;
    if (a(n)) {
        var c = r(n, e, t);
        return null !== c && i(c), c
    }
    if ("RegExp" === o(e)) return r(s, e, t);
    throw new l("RegExp#exec called on incompatible receiver")
}