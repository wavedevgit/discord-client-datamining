/** Chunk was on web.js **/
/** chunk id: 350714, original params: e,t,n (module,exports,require) **/
"use strict";
var r = n(446474),
    i = n(101968),
    a = n(95959);
e.exports = function(e, t, n) {
    var o, s;
    i(e);
    try {
        if (!(o = a(e, "return"))) {
            if ("throw" === t) throw n;
            return n
        }
        o = r(o, e)
    } catch (e) {
        s = !0, o = e
    }
    if ("throw" === t) throw n;
    if (s) throw o;
    return i(o), n
}