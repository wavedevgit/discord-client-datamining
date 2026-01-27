/** Chunk was on 94700 **/
/** chunk id: 560197, original params: t,e,r (module,exports,require) **/
"use strict";
var n = r(557939),
    s = r(633228),
    i = r(732376),
    o = r(503199),
    a = r(273761),
    c = r(581390),
    u = r(120394),
    h = Array,
    l = Math.max,
    d = Math.min;
n({
    target: "Array",
    proto: !0
}, {
    toSpliced: function(t, e) {
        var r, n, s, _, p = c(this),
            f = o(p),
            g = a(t, f),
            v = arguments.length,
            m = 0;
        for (0 === v ? r = n = 0 : 1 === v ? (r = 0, n = f - g) : (r = v - 2, n = d(l(u(e), 0), f - g)), _ = h(s = i(f + r - n)); m < g; m++) _[m] = p[m];
        for (; m < g + r; m++) _[m] = arguments[m - g + 2];
        for (; m < s; m++) _[m] = p[m + n - r];
        return _
    }
}), s("toSpliced")