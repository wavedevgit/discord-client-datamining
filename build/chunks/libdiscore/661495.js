/** chunk id: 661495, original params: t,e,r (module,exports,require) **/
var n = r(557939),
    o = r(446474),
    i = r(105712),
    a = r(814113),
    u = r(339626),
    c = r(23277),
    s = r(42756),
    f = r(458680),
    _ = r(174168),
    l = r(706938),
    p = r(693655),
    d = r(380744),
    g = r(70670),
    b = r(248876),
    y = a.PROPER,
    h = a.CONFIGURABLE,
    w = b.IteratorPrototype,
    v = b.BUGGY_SAFARI_ITERATORS,
    m = d("iterator"),
    x = "keys",
    A = "values",
    S = "entries",
    T = function() {
        return this
    };
t.exports = function(t, e, r, a, d, b, O) {
    c(r, e, a);
    var E, R, I, k = function(t) {
            if (t === d && M) return M;
            if (!v && t && t in P) return P[t];
            switch (t) {
                case x:
                case A:
                case S:
                    return function() {
                        return new r(this, t)
                    }
            }
            return function() {
                return new r(this)
            }
        },
        j = e + " Iterator",
        F = !1,
        P = t.prototype,
        L = P[m] || P["@@iterator"] || d && P[d],
        M = !v && L || k(d),
        C = "Array" === e && P.entries || L;
    if (C && (E = s(C.call(new t))) !== Object.prototype && E.next && (!i && s(E) !== w && (f ? f(E, w) : u(E[m]) || p(E, m, T)), _(E, j, !0, !0), i && (g[j] = T)), y && d === A && L && L.name !== A && (!i && h ? l(P, "name", A) : (F = !0, M = function() {
            return o(L, this)
        })), d)
        if (R = {
                values: k(A),
                keys: b ? M : k(x),
                entries: k(S)
            }, O)
            for (I in R) !v && !F && I in P || p(P, I, R[I]);
        else n({
            target: e,
            proto: !0,
            forced: v || F
        }, R);
    return (!i || O) && P[m] !== M && p(P, m, M, {
        name: d
    }), g[e] = M, R
}