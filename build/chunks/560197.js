/** Chunk was on 84511 **/
/** chunk id: 560197, original params: t,e,r (module,exports,require) **/
"use strict";
var n = r(557939),
    i = r(633228),
    s = r(732376),
    o = r(503199),
    a = r(273761),
    c = r(581390),
    u = r(120394),
    h = Array,
    d = Math.max,
    l = Math.min;
n({
    target: "Array",
    proto: !0
}, {
    toSpliced: function(t, e) {
        var r, n, i, p, _ = c(this),
            f = o(_),
            g = a(t, f),
            v = arguments.length,
            m = 0;
        for (0 === v ? r = n = 0 : 1 === v ? (r = 0, n = f - g) : (r = v - 2, n = l(d(u(e), 0), f - g)), p = h(i = s(f + r - n)); m < g; m++) p[m] = _[m];
        for (; m < g + r; m++) p[m] = arguments[m - g + 2];
        for (; m < i; m++) p[m] = _[m + n - r];
        return p
    }
}), i("toSpliced")