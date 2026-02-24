/** chunk id: 560197, original params: t,e,o (module,exports,require) **/
"use strict";
var n = o(557939),
    r = o(633228),
    i = o(732376),
    a = o(503199),
    s = o(273761),
    c = o(581390),
    l = o(120394),
    f = Array,
    u = Math.max,
    h = Math.min;
n({
    target: "Array",
    proto: !0
}, {
    toSpliced: function(t, e) {
        var o, n, r, d, y = c(this),
            w = a(y),
            p = s(t, w),
            g = arguments.length,
            m = 0;
        for (0 === g ? o = n = 0 : 1 === g ? (o = 0, n = w - p) : (o = g - 2, n = h(u(l(e), 0), w - p)), d = f(r = i(w + o - n)); m < p; m++) d[m] = y[m];
        for (; m < p + o; m++) d[m] = arguments[m - p + 2];
        for (; m < r; m++) d[m] = y[m + n - o];
        return d
    }
}), r("toSpliced")