/** chunk id: 355971 params = (module,exports,require) **/
"use strict";
a.d(t, {
    A: () => u
});
var n = a(627968);
a(64700);
var r = a(317097),
    i = a(311907),
    o = a(827734),
    s = a(990078),
    l = a(397927),
    c = a(775602),
    _ = a(496885),
    d = a(985018);

function u(e) {
    let t, {
            color: a,
            size: u,
            forcedIconColor: p,
            className: f,
            iconClassName: m,
            tooltipText: h
        } = e,
        [g, C] = (0, i.yK)([c.A], () => [c.A.desaturateUserColors, c.A.saturation]),
        b = (0, l.rdh)(o.A.unsafe_rawColors.PRIMARY_300).hex(),
        y = (0, r.LX)(a ?? b),
        A = (0, r.$k)(y, !1, g ? C : null);
    return t = null != p ? p : .3 > (0, r.OK)(y) ? o.A.unsafe_rawColors.PRIMARY_630.css : o.A.unsafe_rawColors.WHITE.css, (0, n.jsx)(s.m, {
        text: null != h ? h : d.intl.string(d.t.T3PvV4),
        children: (0, n.jsx)(_.A, {
            className: f,
            color: A,
            size: u,
            children: (0, n.jsx)(l.Uzd, {
                size: "custom",
                color: t,
                height: u,
                width: u,
                className: m
            })
        })
    })
}