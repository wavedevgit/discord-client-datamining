/** chunk id: 63104 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => A
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
    m = n(361348);
let h = o.A.unsafe_rawColors.PRIMARY_300,
    g = o.A.unsafe_rawColors.WHITE,
    p = o.A.unsafe_rawColors.PRIMARY_630;

function A(e) {
    let {
        color: t,
        size: n,
        forcedIconColor: i,
        className: o,
        iconClassName: A
    } = e, [f, x] = (0, r.yK)([c.A], () => [c.A.desaturateUserColors, c.A.saturation]), v = (0, u.rdh)(h).hex(), j = t ?? v, N = (0, a.$k)((0, a.LX)(j), !1, f ? x : null), b = (0, u.rdh)(g).hex(), C = (0, u.rdh)(p).hex(), E = null != i ? i : (0, d.j)({
        backgroundColor: j,
        colors: [b, C]
    }), I = n / 8;
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
            color: E,
            className: s()(m.w, A),
            width: n - 2 * I,
            height: n - 2 * I,
            style: {
                margin: I
            }
        })
    })
}