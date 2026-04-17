/** chunk id: 355971 params = (module,exports,require) **/
a.d(t, {
    A: () => u
});
var r = a(627968);
a(64700);
var n = a(317097),
    o = a(311907),
    i = a(827734),
    c = a(990078),
    _ = a(397927),
    d = a(775602),
    s = a(496885),
    l = a(985018);

function u(e) {
    let t, {
            color: a,
            size: u,
            forcedIconColor: m,
            className: p,
            iconClassName: f,
            tooltipText: b
        } = e,
        [g, C] = (0, o.yK)([d.A], () => [d.A.desaturateUserColors, d.A.saturation]),
        h = (0, _.rdh)(i.A.unsafe_rawColors.PRIMARY_300).hex(),
        x = (0, n.LX)(a ?? h),
        y = (0, n.$k)(x, !1, g ? C : null);
    return t = null != m ? m : .3 > (0, n.OK)(x) ? i.A.unsafe_rawColors.PRIMARY_630.css : i.A.unsafe_rawColors.WHITE.css, (0, r.jsx)(c.m, {
        text: null != b ? b : l.intl.string(l.t.T3PvV4),
        children: (0, r.jsx)(s.A, {
            className: p,
            color: y,
            size: u,
            children: (0, r.jsx)(_.Uzd, {
                size: "custom",
                color: t,
                height: u,
                width: u,
                className: f
            })
        })
    })
}