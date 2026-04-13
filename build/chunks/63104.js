/** chunk id: 63104 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => f
});
var l = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(317097),
    r = n(311907),
    o = n(827734),
    u = n(397927),
    c = n(775602),
    d = n(7250),
    m = n(681893);
let g = o.A.unsafe_rawColors.PRIMARY_300,
    h = o.A.unsafe_rawColors.WHITE,
    A = o.A.unsafe_rawColors.PRIMARY_630;

function f(e) {
    let {
        color: t,
        size: n,
        forcedIconColor: i,
        className: o,
        iconClassName: f
    } = e, [p, x] = (0, r.yK)([c.A], () => [c.A.desaturateUserColors, c.A.saturation]), v = (0, u.rdh)(g).hex(), C = t ?? v, N = (0, a.$k)((0, a.LX)(C), !1, p ? x : null), E = (0, u.rdh)(h).hex(), _ = (0, u.rdh)(A).hex(), I = null != i ? i : (0, d.j)({
        backgroundColor: C,
        colors: [E, _]
    }), b = n / 8;
    return (0, l.jsx)("div", {
        style: {
            background: N,
            width: n,
            height: n,
            borderRadius: n,
            lineHeight: `${n}px`
        },
        className: o,
        children: (0, l.jsx)(u.qYV, {
            size: "custom",
            color: I,
            className: s()(m.w, f),
            width: n - 2 * b,
            height: n - 2 * b,
            style: {
                margin: b
            }
        })
    })
}