/** chunk id: 355971 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => d
});
var a = n(627968);
n(64700);
var r = n(317097),
    i = n(311907),
    o = n(827734),
    s = n(990078),
    c = n(397927),
    l = n(775602),
    _ = n(496885),
    u = n(985018);

function d(e) {
    let t, {
            color: n,
            size: d,
            forcedIconColor: m,
            className: b,
            iconClassName: p,
            tooltipText: g
        } = e,
        [h, E] = (0, i.yK)([l.A], () => [l.A.desaturateUserColors, l.A.saturation]),
        f = (0, c.rdh)(o.A.unsafe_rawColors.PRIMARY_300).hex(),
        A = (0, r.LX)(n ?? f),
        C = (0, r.$k)(A, !1, h ? E : null);
    return t = null != m ? m : .3 > (0, r.OK)(A) ? o.A.unsafe_rawColors.PRIMARY_630.css : o.A.unsafe_rawColors.WHITE.css, (0, a.jsx)(s.m, {
        text: null != g ? g : u.intl.string(u.t.T3PvV4),
        children: (0, a.jsx)(_.A, {
            className: b,
            color: C,
            size: d,
            children: (0, a.jsx)(c.Uzd, {
                size: "custom",
                color: t,
                height: d,
                width: d,
                className: p
            })
        })
    })
}