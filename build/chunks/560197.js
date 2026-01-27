/** Chunk was on 92351 **/
/** chunk id: 560197, original params: e,t,n (module,exports,require) **/
"use strict";
var r = n(557939),
    o = n(633228),
    i = n(732376),
    a = n(503199),
    c = n(273761),
    u = n(581390),
    s = n(120394),
    l = Array,
    f = Math.max,
    d = Math.min;
r({
    target: "Array",
    proto: !0
}, {
    toSpliced: function(e, t) {
        var n, r, o, p, h = u(this),
            v = a(h),
            g = c(e, v),
            w = arguments.length,
            y = 0;
        for (0 === w ? n = r = 0 : 1 === w ? (n = 0, r = v - g) : (n = w - 2, r = d(f(s(t), 0), v - g)), p = l(o = i(v + n - r)); y < g; y++) p[y] = h[y];
        for (; y < g + n; y++) p[y] = arguments[y - g + 2];
        for (; y < o; y++) p[y] = h[y + r - n];
        return p
    }
}), o("toSpliced")