/** chunk id: 63104, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => m
}), n(896048);
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    o = n(317097),
    s = n(311907),
    l = n(827734),
    c = n(397927),
    u = n(775602),
    d = n(7250),
    f = n(986558);
let p = l.A.unsafe_rawColors.PRIMARY_300,
    _ = l.A.unsafe_rawColors.WHITE,
    h = l.A.unsafe_rawColors.PRIMARY_630;

function m(e) {
    let {
        color: t,
        size: n,
        forcedIconColor: i,
        className: l,
        iconClassName: m
    } = e, [g, E] = (0, s.yK)([u.A], () => [u.A.desaturateUserColors, u.A.saturation]), y = (0, c.rdh)(p).hex(), b = null != t ? t : y, O = (0, o.$k)((0, o.LX)(b), !1, g ? E : null), v = (0, c.rdh)(_).hex(), A = (0, c.rdh)(h).hex(), I = null != i ? i : (0, d.j)({
        backgroundColor: b,
        colors: [v, A]
    }), S = n / 8;
    return (0, r.jsx)("div", {
        style: {
            background: O,
            width: n,
            height: n,
            borderRadius: n,
            lineHeight: "".concat(n, "px")
        },
        className: l,
        children: (0, r.jsx)(c.qYV, {
            size: "custom",
            color: I,
            className: a()(f.w, m),
            width: n - 2 * S,
            height: n - 2 * S,
            style: {
                margin: S
            }
        })
    })
}