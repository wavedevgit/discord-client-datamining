/** chunk id: 651211 params = (module,exports,require) **/
var i = n(111898),
    s = n(147818),
    r = n(978260),
    l = n(646344),
    a = n(63532);
e.exports = function(e, t, n, o) {
    if (!l(e)) return e;
    t = s(t, e);
    for (var c = -1, d = t.length, u = d - 1, h = e; null != h && ++c < d;) {
        var _ = a(t[c]),
            p = n;
        if (c != u) {
            var m = h[_];
            void 0 === (p = o ? o(m, _, h) : void 0) && (p = l(m) ? m : r(t[c + 1]) ? [] : {})
        }
        i(h, _, p), h = h[_]
    }
    return e
}