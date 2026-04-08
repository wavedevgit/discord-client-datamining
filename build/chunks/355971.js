/** chunk id: 355971 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => h
});
var r = n(627968);
n(64700);
var i = n(317097),
    l = n(311907),
    a = n(827734),
    s = n(990078),
    o = n(397927),
    u = n(775602),
    c = n(496885),
    d = n(985018);

function h(e) {
    let t, {
            color: n,
            size: h,
            forcedIconColor: f,
            className: m,
            iconClassName: p,
            tooltipText: _
        } = e,
        [v, y] = (0, l.yK)([u.A], () => [u.A.desaturateUserColors, u.A.saturation]),
        g = (0, o.rdh)(a.A.unsafe_rawColors.PRIMARY_300).hex(),
        x = (0, i.LX)(n ?? g),
        E = (0, i.$k)(x, !1, v ? y : null);
    return t = null != f ? f : .3 > (0, i.OK)(x) ? a.A.unsafe_rawColors.PRIMARY_630.css : a.A.unsafe_rawColors.WHITE.css, (0, r.jsx)(s.m, {
        text: null != _ ? _ : d.intl.string(d.t.T3PvV4),
        children: (0, r.jsx)(c.A, {
            className: m,
            color: E,
            size: h,
            children: (0, r.jsx)(o.Uzd, {
                size: "custom",
                color: t,
                height: h,
                width: h,
                className: p
            })
        })
    })
}