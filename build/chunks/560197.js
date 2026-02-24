/** chunk id: 560197, original params: e,t,n (module,exports,require) **/
"use strict";
var o = n(557939),
    r = n(633228),
    i = n(732376),
    a = n(503199),
    s = n(273761),
    c = n(581390),
    l = n(120394),
    d = Array,
    u = Math.max,
    _ = Math.min;
o({
    target: "Array",
    proto: !0
}, {
    toSpliced: function(e, t) {
        var n, o, r, b, f = c(this),
            m = a(f),
            p = s(e, m),
            g = arguments.length,
            S = 0;
        for (0 === g ? n = o = 0 : 1 === g ? (n = 0, o = m - p) : (n = g - 2, o = _(u(l(t), 0), m - p)), b = d(r = i(m + n - o)); S < p; S++) b[S] = f[S];
        for (; S < p + n; S++) b[S] = arguments[S - p + 2];
        for (; S < r; S++) b[S] = f[S + o - n];
        return b
    }
}), r("toSpliced")