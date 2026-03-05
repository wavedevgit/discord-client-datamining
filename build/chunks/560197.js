/** chunk id: 560197, original params: e,t,r (module,exports,require) **/
"use strict";
var a = r(557939),
    n = r(633228),
    o = r(732376),
    s = r(503199),
    i = r(273761),
    c = r(581390),
    l = r(120394),
    u = Array,
    b = Math.max,
    f = Math.min;
a({
    target: "Array",
    proto: !0
}, {
    toSpliced: function(e, t) {
        var r, a, n, d, h = c(this),
            p = s(h),
            y = i(e, p),
            v = arguments.length,
            g = 0;
        for (0 === v ? r = a = 0 : 1 === v ? (r = 0, a = p - y) : (r = v - 2, a = f(b(l(t), 0), p - y)), d = u(n = o(p + r - a)); g < y; g++) d[g] = h[g];
        for (; g < y + r; g++) d[g] = arguments[g - y + 2];
        for (; g < n; g++) d[g] = h[g + a - r];
        return d
    }
}), n("toSpliced")