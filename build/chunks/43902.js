/** chunk id: 43902, original params: e,t,n (module,exports,require) **/
"use strict";
var r = n(230606),
    i = n(210140),
    a = n(706938),
    o = n(524152),
    s = n(458680),
    l = n(517771),
    c = n(878765),
    u = n(486724),
    d = n(862784),
    f = n(573467),
    p = n(770652),
    _ = n(257943),
    h = n(105712);
e.exports = function(e, t, n, m) {
    var g = "stackTraceLimit",
        E = m ? 2 : 1,
        y = e.split("."),
        b = y[y.length - 1],
        O = r.apply(null, y);
    if (O) {
        var v = O.prototype;
        if (!h && i(v, "cause") && delete v.cause, !n) return O;
        var A = r("Error"),
            I = t(function(e, t) {
                var n = d(m ? t : e, void 0),
                    r = m ? new O(e) : new O;
                return void 0 !== n && a(r, "message", n), p(r, I, r.stack, 2), this && o(v, this) && u(r, this, I), arguments.length > E && f(r, arguments[E]), r
            });
        if (I.prototype = v, "Error" !== b ? s ? s(I, A) : l(I, A, {
                name: !0
            }) : _ && g in O && (c(I, O, g), c(I, O, "prepareStackTrace")), l(I, O), !h) try {
            v.name !== b && a(v, "name", b), v.constructor = I
        } catch (e) {}
        return I
    }
}