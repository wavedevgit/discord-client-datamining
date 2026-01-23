/** Chunk was on web.js **/
/** chunk id: 661495, original params: e,t,n (module,exports,require) **/
"use strict";
var r = n(557939),
    i = n(446474),
    a = n(105712),
    s = n(814113),
    o = n(339626),
    l = n(23277),
    c = n(42756),
    u = n(458680),
    d = n(174168),
    f = n(706938),
    p = n(693655),
    _ = n(380744),
    h = n(70670),
    m = n(248876),
    g = s.PROPER,
    E = s.CONFIGURABLE,
    y = m.IteratorPrototype,
    b = m.BUGGY_SAFARI_ITERATORS,
    O = _("iterator"),
    v = "keys",
    A = "values",
    I = "entries",
    S = function() {
        return this
    };
e.exports = function(e, t, n, s, _, m, T) {
    l(n, t, s);
    var C, N, w, R = function(e) {
            if (e === _ && j) return j;
            if (!b && e && e in x) return x[e];
            switch (e) {
                case v:
                case A:
                case I:
                    return function() {
                        return new n(this, e)
                    }
            }
            return function() {
                return new n(this)
            }
        },
        P = t + " Iterator",
        D = !1,
        x = e.prototype,
        L = x[O] || x["@@iterator"] || _ && x[_],
        j = !b && L || R(_),
        M = "Array" === t && x.entries || L;
    if (M && (C = c(M.call(new e))) !== Object.prototype && C.next && (!a && c(C) !== y && (u ? u(C, y) : o(C[O]) || p(C, O, S)), d(C, P, !0, !0), a && (h[P] = S)), g && _ === A && L && L.name !== A && (!a && E ? f(x, "name", A) : (D = !0, j = function() {
            return i(L, this)
        })), _)
        if (N = {
                values: R(A),
                keys: m ? j : R(v),
                entries: R(I)
            }, T)
            for (w in N) !b && !D && w in x || p(x, w, N[w]);
        else r({
            target: t,
            proto: !0,
            forced: b || D
        }, N);
    return (!a || T) && x[O] !== j && p(x, O, j, {
        name: _
    }), h[t] = j, N
}