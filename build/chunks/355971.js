/** chunk id: 355971 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => u
});
var a = n(627968);
n(64700);
var r = n(317097),
    i = n(311907),
    s = n(827734),
    c = n(990078),
    o = n(397927),
    l = n(775602),
    _ = n(496885),
    d = n(985018);

function u(e) {
    let t, {
            color: n,
            size: u,
            forcedIconColor: m,
            className: g,
            iconClassName: I,
            tooltipText: b
        } = e,
        [A, E] = (0, i.yK)([l.A], () => [l.A.desaturateUserColors, l.A.saturation]),
        f = (0, o.rdh)(s.A.unsafe_rawColors.PRIMARY_300).hex(),
        h = (0, r.LX)(n ?? f),
        p = (0, r.$k)(h, !1, A ? E : null);
    return t = null != m ? m : .3 > (0, r.OK)(h) ? s.A.unsafe_rawColors.PRIMARY_630.css : s.A.unsafe_rawColors.WHITE.css, (0, a.jsx)(c.m, {
        text: null != b ? b : d.intl.string(d.t.T3PvV4),
        children: (0, a.jsx)(_.A, {
            className: g,
            color: p,
            size: u,
            children: (0, a.jsx)(o.Uzd, {
                size: "custom",
                color: t,
                height: u,
                width: u,
                className: I
            })
        })
    })
}