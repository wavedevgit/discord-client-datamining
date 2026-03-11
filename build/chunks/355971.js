/** chunk id: 355971 params = (module,exports,require) **/
"use strict";
r.d(t, {
    A: () => u
});
var n = r(627968);
r(64700);
var i = r(317097),
    a = r(311907),
    o = r(827734),
    s = r(990078),
    l = r(397927),
    _ = r(775602),
    c = r(496885),
    d = r(985018);

function u(e) {
    let t, {
            color: r,
            size: u,
            forcedIconColor: f,
            className: p,
            iconClassName: h,
            tooltipText: m
        } = e,
        [C, g] = (0, a.yK)([_.A], () => [_.A.desaturateUserColors, _.A.saturation]),
        b = (0, l.rdh)(o.A.unsafe_rawColors.PRIMARY_300).hex(),
        y = (0, i.LX)(r ?? b),
        A = (0, i.$k)(y, !1, C ? g : null);
    return t = null != f ? f : .3 > (0, i.OK)(y) ? o.A.unsafe_rawColors.PRIMARY_630.css : o.A.unsafe_rawColors.WHITE.css, (0, n.jsx)(s.m, {
        text: null != m ? m : d.intl.string(d.t.T3PvV4),
        children: (0, n.jsx)(c.A, {
            className: p,
            color: A,
            size: u,
            children: (0, n.jsx)(l.Uzd, {
                size: "custom",
                color: t,
                height: u,
                width: u,
                className: h
            })
        })
    })
}