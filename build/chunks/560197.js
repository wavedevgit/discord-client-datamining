/** chunk id: 560197, original params: e,t,n (module,exports,require) **/
"use strict";
var o = n(557939),
    r = n(633228),
    i = n(732376),
    a = n(503199),
    c = n(273761),
    s = n(581390),
    l = n(120394),
    d = Array,
    u = Math.max,
    _ = Math.min;
o({
    target: "Array",
    proto: !0
}, {
    toSpliced: function(e, t) {
        var n, o, r, f, b = s(this),
            m = a(b),
            g = c(e, m),
            p = arguments.length,
            h = 0;
        for (0 === p ? n = o = 0 : 1 === p ? (n = 0, o = m - g) : (n = p - 2, o = _(u(l(t), 0), m - g)), f = d(r = i(m + n - o)); h < g; h++) f[h] = b[h];
        for (; h < g + n; h++) f[h] = arguments[h - g + 2];
        for (; h < r; h++) f[h] = b[h + o - n];
        return f
    }
}), r("toSpliced")