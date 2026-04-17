/** chunk id: 651211 params = (module,exports,require) **/
var i = n(111898),
    s = n(147818),
    r = n(978260),
    l = n(646344),
    a = n(63532);
e.exports = function(e, t, n, o) {
    if (!l(e)) return e;
    t = s(t, e);
    for (var c = -1, d = t.length, u = d - 1, _ = e; null != _ && ++c < d;) {
        var h = a(t[c]),
            g = n;
        if (c != u) {
            var p = _[h];
            void 0 === (g = o ? o(p, h, _) : void 0) && (g = l(p) ? p : r(t[c + 1]) ? [] : {})
        }
        i(_, h, g), _ = _[h]
    }
    return e
}