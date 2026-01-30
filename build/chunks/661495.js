/** chunk id: 661495, original params: e,t,n (module,exports,require) **/
"use strict";
var r = n(557939),
    i = n(446474),
    a = n(105712),
    o = n(814113),
    s = n(339626),
    l = n(23277),
    c = n(42756),
    u = n(458680),
    d = n(174168),
    f = n(706938),
    p = n(693655),
    _ = n(380744),
    h = n(70670),
    m = n(248876),
    g = o.PROPER,
    E = o.CONFIGURABLE,
    y = m.IteratorPrototype,
    b = m.BUGGY_SAFARI_ITERATORS,
    O = _("iterator"),
    v = "keys",
    A = "values",
    I = "entries",
    S = function() {
        return this
    };
e.exports = function(e, t, n, o, _, m, T) {
    l(n, t, o);
    var C, N, w, R = function(e) {
            if (e === _ && M) return M;
            if (!b && e && e in L) return L[e];
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
        L = e.prototype,
        x = L[O] || L["@@iterator"] || _ && L[_],
        M = !b && x || R(_),
        j = "Array" === t && L.entries || x;
    if (j && (C = c(j.call(new e))) !== Object.prototype && C.next && (!a && c(C) !== y && (u ? u(C, y) : s(C[O]) || p(C, O, S)), d(C, P, !0, !0), a && (h[P] = S)), g && _ === A && x && x.name !== A && (!a && E ? f(L, "name", A) : (D = !0, M = function() {
            return i(x, this)
        })), _)
        if (N = {
                values: R(A),
                keys: m ? M : R(v),
                entries: R(I)
            }, T)
            for (w in N) !b && !D && w in L || p(L, w, N[w]);
        else r({
            target: t,
            proto: !0,
            forced: b || D
        }, N);
    return (!a || T) && L[O] !== M && p(L, O, M, {
        name: _
    }), h[t] = M, N
}