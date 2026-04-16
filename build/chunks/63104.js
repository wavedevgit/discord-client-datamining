/** chunk id: 63104 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => m
});
var i = n(627968);
n(64700);
var s = n(503698),
    r = n.n(s),
    l = n(317097),
    a = n(311907),
    o = n(827734),
    c = n(397927),
    d = n(775602),
    u = n(7250),
    h = n(394549);
let _ = o.A.unsafe_rawColors.PRIMARY_300,
    p = o.A.unsafe_rawColors.WHITE,
    g = o.A.unsafe_rawColors.PRIMARY_630;

function m(e) {
    let {
        color: t,
        size: n,
        forcedIconColor: s,
        className: o,
        iconClassName: m
    } = e, [A, f] = (0, a.yK)([d.A], () => [d.A.desaturateUserColors, d.A.saturation]), E = (0, c.rdh)(_).hex(), x = t ?? E, I = (0, l.$k)((0, l.LX)(x), !1, A ? f : null), N = (0, c.rdh)(p).hex(), v = (0, c.rdh)(g).hex(), T = null != s ? s : (0, u.j)({
        backgroundColor: x,
        colors: [N, v]
    }), j = n / 8;
    return (0, i.jsx)("div", {
        style: {
            background: I,
            width: n,
            height: n,
            borderRadius: n,
            lineHeight: `${n}px`
        },
        className: o,
        children: (0, i.jsx)(c.qYV, {
            size: "custom",
            color: T,
            className: r()(h.w, m),
            width: n - 2 * j,
            height: n - 2 * j,
            style: {
                margin: j
            }
        })
    })
}