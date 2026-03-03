/** chunk id: 63104, original params: e,t,n (module,exports,require) **/
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
    d = n(397927),
    c = n(775602),
    u = n(7250),
    h = n(986558);
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
    } = e, [f, A] = (0, a.yK)([c.A], () => [c.A.desaturateUserColors, c.A.saturation]), x = (0, d.rdh)(_).hex(), E = t ?? x, I = (0, l.$k)((0, l.LX)(E), !1, f ? A : null), v = (0, d.rdh)(p).hex(), N = (0, d.rdh)(g).hex(), j = null != s ? s : (0, u.j)({
        backgroundColor: E,
        colors: [v, N]
    }), S = n / 8;
    return (0, i.jsx)("div", {
        style: {
            background: I,
            width: n,
            height: n,
            borderRadius: n,
            lineHeight: `${n}px`
        },
        className: o,
        children: (0, i.jsx)(d.qYV, {
            size: "custom",
            color: j,
            className: r()(h.w, m),
            width: n - 2 * S,
            height: n - 2 * S,
            style: {
                margin: S
            }
        })
    })
}