/** Chunk was on web.js **/
/** chunk id: 500829, original params: e,t,n (module,exports,require) **/
"use strict";
var r = n(221015),
    i = n(446474),
    a = n(250594),
    s = n(254818),
    o = n(151860),
    l = n(43452),
    c = n(503199),
    u = n(41575),
    d = n(327036),
    f = n(331336),
    p = Array;
e.exports = function(e) {
    var t, n, _, h, m, g, E = a(e),
        y = l(this),
        b = arguments.length,
        O = b > 1 ? arguments[1] : void 0,
        v = void 0 !== O;
    v && (O = r(O, b > 2 ? arguments[2] : void 0));
    var A = f(E),
        I = 0;
    if (A && !(this === p && o(A)))
        for (n = y ? new this : [], m = (h = d(E, A)).next; !(_ = i(m, h)).done; I++) g = v ? s(h, O, [_.value, I], !0) : _.value, u(n, I, g);
    else
        for (t = c(E), n = y ? new this(t) : p(t); t > I; I++) g = v ? O(E[I], I) : E[I], u(n, I, g);
    return n.length = I, n
}