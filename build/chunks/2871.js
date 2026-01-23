/** Chunk was on web.js **/
/** chunk id: 2871, original params: e,t,n (module,exports,require) **/
"use strict";
var r = n(221015),
    i = n(446474),
    a = n(101968),
    s = n(406208),
    o = n(151860),
    l = n(503199),
    c = n(524152),
    u = n(327036),
    d = n(331336),
    f = n(350714),
    p = TypeError,
    _ = function(e, t) {
        this.stopped = e, this.result = t
    },
    h = _.prototype;
e.exports = function(e, t, n) {
    var m, g, E, y, b, O, v, A = n && n.that,
        I = !!(n && n.AS_ENTRIES),
        S = !!(n && n.IS_RECORD),
        T = !!(n && n.IS_ITERATOR),
        C = !!(n && n.INTERRUPTED),
        N = r(t, A),
        w = function(e) {
            return m && f(m, "normal", e), new _(!0, e)
        },
        R = function(e) {
            return I ? (a(e), C ? N(e[0], e[1], w) : N(e[0], e[1])) : C ? N(e, w) : N(e)
        };
    if (S) m = e.iterator;
    else if (T) m = e;
    else {
        if (!(g = d(e))) throw new p(s(e) + " is not iterable");
        if (o(g)) {
            for (E = 0, y = l(e); y > E; E++)
                if ((b = R(e[E])) && c(h, b)) return b;
            return new _(!1)
        }
        m = u(e, g)
    }
    for (O = S ? e.next : m.next; !(v = i(O, m)).done;) {
        try {
            b = R(v.value)
        } catch (e) {
            f(m, "throw", e)
        }
        if ("object" == typeof b && b && c(h, b)) return b
    }
    return new _(!1)
}