/** Chunk was on 19138 **/
/** chunk id: 651211, original params: e,t,r (module,exports,require) **/
var n = r(111898),
    i = r(147818),
    a = r(978260),
    o = r(646344),
    c = r(63532);
e.exports = function(e, t, r, s) {
    if (!o(e)) return e;
    t = i(t, e);
    for (var u = -1, l = t.length, p = l - 1, d = e; null != d && ++u < l;) {
        var f = c(t[u]),
            h = r;
        if (u != p) {
            var g = d[f];
            void 0 === (h = s ? s(g, f, d) : void 0) && (h = o(g) ? g : a(t[u + 1]) ? [] : {})
        }
        n(d, f, h), d = d[f]
    }
    return e
}