/** chunk id: 355971 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => u
});
var a = n(627968);
n(64700);
var r = n(317097),
    i = n(311907),
    c = n(827734),
    s = n(990078),
    o = n(397927),
    l = n(775602),
    _ = n(496885),
    d = n(985018);

function u(e) {
    let t, {
            color: n,
            size: u,
            forcedIconColor: m,
            className: b,
            iconClassName: g,
            tooltipText: h
        } = e,
        [p, C] = (0, i.yK)([l.A], () => [l.A.desaturateUserColors, l.A.saturation]),
        f = (0, o.rdh)(c.A.unsafe_rawColors.PRIMARY_300).hex(),
        E = (0, r.LX)(n ?? f),
        A = (0, r.$k)(E, !1, p ? C : null);
    return t = null != m ? m : .3 > (0, r.OK)(E) ? c.A.unsafe_rawColors.PRIMARY_630.css : c.A.unsafe_rawColors.WHITE.css, (0, a.jsx)(s.m, {
        text: null != h ? h : d.intl.string(d.t.T3PvV4),
        children: (0, a.jsx)(_.A, {
            className: b,
            color: A,
            size: u,
            children: (0, a.jsx)(o.Uzd, {
                size: "custom",
                color: t,
                height: u,
                width: u,
                className: g
            })
        })
    })
}