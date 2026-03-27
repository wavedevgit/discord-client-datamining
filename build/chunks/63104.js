/** chunk id: 63104 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => f
});
var l = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    r = n(317097),
    a = n(311907),
    o = n(827734),
    u = n(397927),
    c = n(775602),
    d = n(7250),
    m = n(977908);
let h = o.A.unsafe_rawColors.PRIMARY_300,
    g = o.A.unsafe_rawColors.WHITE,
    A = o.A.unsafe_rawColors.PRIMARY_630;

function f(e) {
    let {
        color: t,
        size: n,
        forcedIconColor: i,
        className: o,
        iconClassName: f
    } = e, [p, x] = (0, a.yK)([c.A], () => [c.A.desaturateUserColors, c.A.saturation]), C = (0, u.rdh)(h).hex(), N = t ?? C, v = (0, r.$k)((0, r.LX)(N), !1, p ? x : null), E = (0, u.rdh)(g).hex(), T = (0, u.rdh)(A).hex(), b = null != i ? i : (0, d.j)({
        backgroundColor: N,
        colors: [E, T]
    }), _ = n / 8;
    return (0, l.jsx)("div", {
        style: {
            background: v,
            width: n,
            height: n,
            borderRadius: n,
            lineHeight: `${n}px`
        },
        className: o,
        children: (0, l.jsx)(u.qYV, {
            size: "custom",
            color: b,
            className: s()(m.w, f),
            width: n - 2 * _,
            height: n - 2 * _,
            style: {
                margin: _
            }
        })
    })
}