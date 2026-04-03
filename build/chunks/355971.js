/** chunk id: 355971 params = (module,exports,require) **/
n.d(t, {
    A: () => m
});
var r = n(627968);
n(64700);
var a = n(317097),
    i = n(311907),
    s = n(827734),
    l = n(990078),
    o = n(397927),
    c = n(775602),
    d = n(496885),
    u = n(985018);

function m(e) {
    let t, {
            color: n,
            size: m,
            forcedIconColor: h,
            className: p,
            iconClassName: x,
            tooltipText: f
        } = e,
        [v, g] = (0, i.yK)([c.A], () => [c.A.desaturateUserColors, c.A.saturation]),
        _ = (0, o.rdh)(s.A.unsafe_rawColors.PRIMARY_300).hex(),
        A = (0, a.LX)(n ?? _),
        j = (0, a.$k)(A, !1, v ? g : null);
    return t = null != h ? h : .3 > (0, a.OK)(A) ? s.A.unsafe_rawColors.PRIMARY_630.css : s.A.unsafe_rawColors.WHITE.css, (0, r.jsx)(l.m, {
        text: null != f ? f : u.intl.string(u.t.T3PvV4),
        children: (0, r.jsx)(d.A, {
            className: p,
            color: j,
            size: m,
            children: (0, r.jsx)(o.Uzd, {
                size: "custom",
                color: t,
                height: m,
                width: m,
                className: x
            })
        })
    })
}