/** chunk id: 355971 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var l = n(627968);
n(64700);
var s = n(317097),
    a = n(311907),
    r = n(827734),
    i = n(990078),
    o = n(397927),
    c = n(775602),
    d = n(496885),
    u = n(985018);

function h(e) {
    let t, {
            color: n,
            size: h,
            forcedIconColor: m,
            className: x,
            iconClassName: g,
            tooltipText: p
        } = e,
        [v, j] = (0, a.yK)([c.A], () => [c.A.desaturateUserColors, c.A.saturation]),
        f = (0, o.rdh)(r.A.unsafe_rawColors.PRIMARY_300).hex(),
        N = (0, s.LX)(n ?? f),
        A = (0, s.$k)(N, !1, v ? j : null);
    return t = null != m ? m : .3 > (0, s.OK)(N) ? r.A.unsafe_rawColors.PRIMARY_630.css : r.A.unsafe_rawColors.WHITE.css, (0, l.jsx)(i.m, {
        text: null != p ? p : u.intl.string(u.t.T3PvV4),
        children: (0, l.jsx)(d.A, {
            className: x,
            color: A,
            size: h,
            children: (0, l.jsx)(o.Uzd, {
                size: "custom",
                color: t,
                height: h,
                width: h,
                className: g
            })
        })
    })
}