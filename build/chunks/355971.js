/** chunk id: 355971 params = (module,exports,require) **/
a.d(t, {
    A: () => m
});
var n = a(627968);
a(64700);
var s = a(317097),
    l = a(311907),
    r = a(827734),
    i = a(990078),
    o = a(397927),
    c = a(775602),
    d = a(496885),
    u = a(985018);

function m(e) {
    let t, {
            color: a,
            size: m,
            forcedIconColor: _,
            className: p,
            iconClassName: h,
            tooltipText: x
        } = e,
        [g, f] = (0, l.yK)([c.A], () => [c.A.desaturateUserColors, c.A.saturation]),
        C = (0, o.rdh)(r.A.unsafe_rawColors.PRIMARY_300).hex(),
        v = (0, s.LX)(a ?? C),
        N = (0, s.$k)(v, !1, g ? f : null);
    return t = null != _ ? _ : .3 > (0, s.OK)(v) ? r.A.unsafe_rawColors.PRIMARY_630.css : r.A.unsafe_rawColors.WHITE.css, (0, n.jsx)(i.m, {
        text: null != x ? x : u.intl.string(u.t.T3PvV4),
        children: (0, n.jsx)(d.A, {
            className: p,
            color: N,
            size: m,
            children: (0, n.jsx)(o.Uzd, {
                size: "custom",
                color: t,
                height: m,
                width: m,
                className: h
            })
        })
    })
}