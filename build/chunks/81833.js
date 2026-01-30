/** chunk id: 81833, original params: e,t,n (module,exports,require) **/
"use strict";
var r = n(106769),
    i = n(523317),
    a = Math.abs,
    o = 2220446049250313e-31;
e.exports = function(e, t, n, s) {
    var l = +e,
        c = a(l),
        u = r(l);
    if (c < s) return u * i(c / s / t) * s * t;
    var d = (1 + t / o) * c,
        f = d - (d - c);
    return f > n || f != f ? 1 / 0 * u : u * f
}