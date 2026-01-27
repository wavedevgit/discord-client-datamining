/** Chunk was on web.js **/
/** chunk id: 611256, original params: e,t,n (module,exports,require) **/
"use strict";
var r = n(439619),
    i = n(207001),
    a = n(473560)(),
    o = n(267768),
    s = n(741623),
    l = r("%Math.floor%");
e.exports = function(e, t) {
    if ("function" != typeof e) throw new s("`fn` is not a function");
    if ("number" != typeof t || t < 0 || t > 0xffffffff || l(t) !== t) throw new s("`length` must be a positive 32-bit integer");
    var n = arguments.length > 2 && !!arguments[2],
        r = !0,
        c = !0;
    if ("length" in e && o) {
        var u = o(e, "length");
        u && !u.configurable && (r = !1), u && !u.writable && (c = !1)
    }
    return (r || c || !n) && (a ? i(e, "length", t, !0, !0) : i(e, "length", t)), e
}