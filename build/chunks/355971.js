/** chunk id: 355971 params = (module,exports,require) **/
n.d(t, {
    A: () => m
});
var r = n(627968);
n(64700);
var l = n(317097),
    i = n(311907),
    a = n(827734),
    s = n(990078),
    o = n(397927),
    d = n(775602),
    c = n(496885),
    u = n(985018);

function m(e) {
    let t, {
            color: n,
            size: m,
            forcedIconColor: h,
            className: x,
            iconClassName: g,
            tooltipText: f
        } = e,
        [v, j] = (0, i.yK)([d.A], () => [d.A.desaturateUserColors, d.A.saturation]),
        p = (0, o.rdh)(a.A.unsafe_rawColors.PRIMARY_300).hex(),
        A = (0, l.LX)(n ?? p),
        y = (0, l.$k)(A, !1, v ? j : null);
    return t = null != h ? h : .3 > (0, l.OK)(A) ? a.A.unsafe_rawColors.PRIMARY_630.css : a.A.unsafe_rawColors.WHITE.css, (0, r.jsx)(s.m, {
        text: null != f ? f : u.intl.string(u.t.T3PvV4),
        children: (0, r.jsx)(c.A, {
            className: x,
            color: y,
            size: m,
            children: (0, r.jsx)(o.Uzd, {
                size: "custom",
                color: t,
                height: m,
                width: m,
                className: g
            })
        })
    })
}