/** chunk id: 187294, original params: t,e,r (module,exports,require) **/
var n = r(221015),
    o = r(446474),
    i = r(721339),
    a = r(250594),
    u = r(503199),
    c = r(327036),
    s = r(331336),
    f = r(151860),
    _ = r(464046),
    l = r(739305).aTypedArrayConstructor,
    p = r(900923);
t.exports = function(t) {
    var e, r, d, g, b, y, h, w, v = i(this),
        m = a(t),
        x = arguments.length,
        A = x > 1 ? arguments[1] : void 0,
        S = void 0 !== A,
        T = s(m);
    if (T && !f(T))
        for (w = (h = c(m, T)).next, m = []; !(y = o(w, h)).done;) m.push(y.value);
    for (S && x > 2 && (A = n(A, arguments[2])), r = u(m), g = _(d = new(l(v))(r)), e = 0; r > e; e++) b = S ? A(m[e], e) : m[e], d[e] = g ? p(b) : +b;
    return d
}