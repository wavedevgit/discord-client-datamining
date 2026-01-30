/** chunk id: 418522, original params: e,t,n (module,exports,require) **/
"use strict";
n.r(t), n.d(t, {
    GB: () => S,
    casual: () => A,
    createCasualConfiguration: () => N,
    createConfiguration: () => w,
    parse: () => T,
    parseDate: () => C,
    strict: () => I
});
var r = n(191824),
    i = n(998275),
    a = n(642714),
    o = n(288888),
    s = n(210231),
    l = n(650073),
    c = n(887572),
    u = n(202262),
    d = n(940717),
    f = n(699176),
    p = n(662042),
    _ = n(125659),
    h = n(127858),
    m = n(759275),
    g = n(732871),
    E = n(23836),
    y = n(880683),
    b = n(774188),
    O = n(789374),
    v = n(740789);
let A = new y.u(N(!1)),
    I = new y.u(w(!0, !1)),
    S = new y.u(w(!1, !0));

function T(e, t, n) {
    return A.parse(e, t, n)
}

function C(e, t, n) {
    return A.parseDate(e, t, n)
}

function N(e = !1) {
    let t = w(!1, e);
    return t.parsers.unshift(new h.A), t.parsers.unshift(new m.A), t.parsers.unshift(new o.A), t.parsers.unshift(new E.A), t.parsers.unshift(new O.A), t
}

function w(e = !0, t = !1) {
    return (0, _.i)({
        parsers: [new b.A(t), new r.A, new i.A, new a.A, new g.A, new s.A, new l.A, new c.A(e), new u.A(e), new d.A(e)],
        refiners: [new v.A, new p.A, new f.A]
    }, e)
}