/** chunk id: 63104 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => A
});
var l = n(627968);
n(64700);
var s = n(503698),
    i = n.n(s),
    r = n(317097),
    a = n(311907),
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
        forcedIconColor: s,
        className: o,
        iconClassName: A
    } = e, [f, x] = (0, a.yK)([c.A], () => [c.A.desaturateUserColors, c.A.saturation]), v = (0, u.rdh)(h).hex(), N = t ?? v, b = (0, r.$k)((0, r.LX)(N), !1, f ? x : null), j = (0, u.rdh)(g).hex(), C = (0, u.rdh)(p).hex(), E = null != s ? s : (0, d.j)({
        backgroundColor: N,
        colors: [j, C]
    }), R = n / 8;
    return (0, l.jsx)("div", {
        style: {
            background: b,
            width: n,
            height: n,
            borderRadius: n,
            lineHeight: `${n}px`
        },
        className: o,
        children: (0, l.jsx)(u.qYV, {
            size: "custom",
            color: E,
            className: i()(m.w, A),
            width: n - 2 * R,
            height: n - 2 * R,
            style: {
                margin: R
            }
        })
    })
}