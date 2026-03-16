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
    l = n(990078),
    o = n(397927),
    c = n(775602),
    _ = n(496885),
    d = n(985018);

function u(e) {
    let t, {
            color: n,
            size: u,
            forcedIconColor: I,
            className: g,
            iconClassName: b,
            tooltipText: A
        } = e,
        [m, E] = (0, r.yK)([c.A], () => [c.A.desaturateUserColors, c.A.saturation]),
        f = (0, o.rdh)(s.A.unsafe_rawColors.PRIMARY_300).hex(),
        S = (0, a.LX)(n ?? f),
        h = (0, a.$k)(S, !1, m ? E : null);
    return t = null != I ? I : .3 > (0, a.OK)(S) ? s.A.unsafe_rawColors.PRIMARY_630.css : s.A.unsafe_rawColors.WHITE.css, (0, i.jsx)(l.m, {
        text: null != A ? A : d.intl.string(d.t.T3PvV4),
        children: (0, i.jsx)(_.A, {
            className: g,
            color: h,
            size: u,
            children: (0, i.jsx)(o.Uzd, {
                size: "custom",
                color: t,
                height: u,
                width: u,
                className: b
            })
        })
    })
}