/** chunk id: 355971 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => u
});
var i = n(627968);
n(64700);
var a = n(317097),
    r = n(311907),
    s = n(827734),
    o = n(990078),
    c = n(397927),
    l = n(775602),
    _ = n(496885),
    d = n(985018);

function u(e) {
    let t, {
            color: n,
            size: u,
            forcedIconColor: b,
            className: g,
            iconClassName: m,
            tooltipText: I
        } = e,
        [A, f] = (0, r.yK)([l.A], () => [l.A.desaturateUserColors, l.A.saturation]),
        E = (0, c.rdh)(s.A.unsafe_rawColors.PRIMARY_300).hex(),
        h = (0, a.LX)(n ?? E),
        S = (0, a.$k)(h, !1, A ? f : null);
    return t = null != b ? b : .3 > (0, a.OK)(h) ? s.A.unsafe_rawColors.PRIMARY_630.css : s.A.unsafe_rawColors.WHITE.css, (0, i.jsx)(o.m, {
        text: null != I ? I : d.intl.string(d.t.T3PvV4),
        children: (0, i.jsx)(_.A, {
            className: g,
            color: S,
            size: u,
            children: (0, i.jsx)(c.Uzd, {
                size: "custom",
                color: t,
                height: u,
                width: u,
                className: m
            })
        })
    })
}