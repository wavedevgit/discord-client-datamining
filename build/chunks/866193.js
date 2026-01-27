/** Chunk was on web.js **/
/** chunk id: 866193, original params: e,t,n (module,exports,require) **/
"use strict";
var r = n(557939),
    i = n(446474),
    a = n(410323),
    o = n(321727),
    s = n(339626),
    l = n(652320),
    c = n(432663),
    u = n(304880),
    d = n(95959),
    f = n(565079),
    p = n(470103),
    _ = n(380744),
    h = n(105712),
    m = _("replace"),
    g = TypeError,
    E = a("".indexOf),
    y = a("".replace),
    b = a("".slice),
    O = Math.max;
r({
    target: "String",
    proto: !0
}, {
    replaceAll: function(e, t) {
        var n, r, a, _, v, A, I, S, T, C = o(this),
            N = 0,
            w = "";
        if (!l(e)) {
            if ((n = c(e)) && !~E(u(o(f(e))), "g")) throw new g("`.replaceAll` does not allow non-global regexes");
            if (r = d(e, m)) return i(r, e, C, t);
            if (h && n) return y(u(C), e, t)
        }
        for (a = u(C), _ = u(e), (v = s(t)) || (t = u(t)), I = O(1, A = _.length), S = E(a, _); - 1 !== S;) T = v ? u(t(_, S, a)) : p(_, a, S, [], void 0, t), w += b(a, N, S) + T, N = S + A, S = S + I > a.length ? -1 : E(a, _, S + I);
        return N < a.length && (w += b(a, N)), w
    }
})