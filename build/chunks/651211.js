/** Chunk was on 86142 **/
/** chunk id: 651211, original params: e,t,n (module,exports,require) **/
var r = n(111898),
    i = n(147818),
    s = n(978260),
    l = n(646344),
    a = n(63532);
e.exports = function(e, t, n, o) {
    if (!l(e)) return e;
    t = i(t, e);
    for (var c = -1, u = t.length, d = u - 1, h = e; null != h && ++c < u;) {
        var p = a(t[c]),
            g = n;
        if (c != d) {
            var m = h[p];
            void 0 === (g = o ? o(m, p, h) : void 0) && (g = l(m) ? m : s(t[c + 1]) ? [] : {})
        }
        r(h, p, g), h = h[p]
    }
    return e
}