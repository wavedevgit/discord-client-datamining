/** chunk id: 355971 params = (module,exports,require) **/
"use strict";
r.d(t, {
    A: () => m
});
var n = r(627968);
r(64700);
var i = r(317097),
    s = r(311907),
    a = r(827734),
    l = r(990078),
    o = r(397927),
    c = r(775602),
    d = r(496885),
    u = r(985018);

function m(e) {
    let t, {
            color: r,
            size: m,
            forcedIconColor: p,
            className: h,
            iconClassName: x,
            tooltipText: f
        } = e,
        [v, g] = (0, s.yK)([c.A], () => [c.A.desaturateUserColors, c.A.saturation]),
        _ = (0, o.rdh)(a.A.unsafe_rawColors.PRIMARY_300).hex(),
        A = (0, i.LX)(r ?? _),
        j = (0, i.$k)(A, !1, v ? g : null);
    return t = null != p ? p : .3 > (0, i.OK)(A) ? a.A.unsafe_rawColors.PRIMARY_630.css : a.A.unsafe_rawColors.WHITE.css, (0, n.jsx)(l.m, {
        text: null != f ? f : u.intl.string(u.t.T3PvV4),
        children: (0, n.jsx)(d.A, {
            className: h,
            color: j,
            size: m,
            children: (0, n.jsx)(o.Uzd, {
                size: "custom",
                color: t,
                height: m,
                width: m,
                className: x
            })
        })
    })
}