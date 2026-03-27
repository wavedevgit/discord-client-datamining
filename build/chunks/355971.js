/** chunk id: 355971 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => d
});
var r = n(627968);
n(64700);
var i = n(317097),
    a = n(311907),
    o = n(827734),
    s = n(990078),
    l = n(397927),
    c = n(775602),
    u = n(496885),
    _ = n(985018);

function d(e) {
    let t, {
            color: n,
            size: d,
            forcedIconColor: b,
            className: m,
            iconClassName: f,
            tooltipText: h
        } = e,
        [g, E] = (0, a.yK)([c.A], () => [c.A.desaturateUserColors, c.A.saturation]),
        p = (0, l.rdh)(o.A.unsafe_rawColors.PRIMARY_300).hex(),
        A = (0, i.LX)(n ?? p),
        C = (0, i.$k)(A, !1, g ? E : null);
    return t = null != b ? b : .3 > (0, i.OK)(A) ? o.A.unsafe_rawColors.PRIMARY_630.css : o.A.unsafe_rawColors.WHITE.css, (0, r.jsx)(s.m, {
        text: null != h ? h : _.intl.string(_.t.T3PvV4),
        children: (0, r.jsx)(u.A, {
            className: m,
            color: C,
            size: d,
            children: (0, r.jsx)(l.Uzd, {
                size: "custom",
                color: t,
                height: d,
                width: d,
                className: f
            })
        })
    })
}