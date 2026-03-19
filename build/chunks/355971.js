/** chunk id: 355971 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var r = n(627968);
n(64700);
var a = n(317097),
    o = n(311907),
    _ = n(827734),
    i = n(990078),
    d = n(397927),
    l = n(775602),
    c = n(496885),
    s = n(985018);

function u(e) {
    let t, {
            color: n,
            size: u,
            forcedIconColor: f,
            className: b,
            iconClassName: p,
            tooltipText: m
        } = e,
        [C, g] = (0, o.yK)([l.A], () => [l.A.desaturateUserColors, l.A.saturation]),
        h = (0, d.rdh)(_.A.unsafe_rawColors.PRIMARY_300).hex(),
        x = (0, a.LX)(n ?? h),
        y = (0, a.$k)(x, !1, C ? g : null);
    return t = null != f ? f : .3 > (0, a.OK)(x) ? _.A.unsafe_rawColors.PRIMARY_630.css : _.A.unsafe_rawColors.WHITE.css, (0, r.jsx)(i.m, {
        text: null != m ? m : s.intl.string(s.t.T3PvV4),
        children: (0, r.jsx)(c.A, {
            className: b,
            color: y,
            size: u,
            children: (0, r.jsx)(d.Uzd, {
                size: "custom",
                color: t,
                height: u,
                width: u,
                className: p
            })
        })
    })
}