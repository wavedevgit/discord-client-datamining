/** Chunk was on web.js **/
/** chunk id: 693655, original params: e,t,n (module,exports,require) **/
"use strict";
var r = n(339626),
    i = n(4940),
    a = n(313400),
    o = n(88388);
e.exports = function(e, t, n, s) {
    s || (s = {});
    var l = s.enumerable,
        c = void 0 !== s.name ? s.name : t;
    if (r(n) && a(n, c, s), s.global) l ? e[t] = n : o(t, n);
    else {
        try {
            s.unsafe ? e[t] && (l = !0) : delete e[t]
        } catch (e) {}
        l ? e[t] = n : i.f(e, t, {
            value: n,
            enumerable: !1,
            configurable: !s.nonConfigurable,
            writable: !s.nonWritable
        })
    }
    return e
}