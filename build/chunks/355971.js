/** chunk id: 355971 params = (module,exports,require) **/
t.d(n, {
    A: () => A
});
var i = t(627968);
t(64700);
var s = t(317097),
    r = t(311907),
    a = t(827734),
    l = t(990078),
    o = t(397927),
    d = t(775602),
    c = t(496885),
    u = t(985018);

function A(e) {
    let n, {
            color: t,
            size: A,
            forcedIconColor: _,
            className: m,
            iconClassName: x,
            tooltipText: p
        } = e,
        [f, h] = (0, r.yK)([d.A], () => [d.A.desaturateUserColors, d.A.saturation]),
        g = (0, o.rdh)(a.A.unsafe_rawColors.PRIMARY_300).hex(),
        I = (0, s.LX)(t ?? g),
        j = (0, s.$k)(I, !1, f ? h : null);
    return n = null != _ ? _ : .3 > (0, s.OK)(I) ? a.A.unsafe_rawColors.PRIMARY_630.css : a.A.unsafe_rawColors.WHITE.css, (0, i.jsx)(l.m, {
        text: null != p ? p : u.intl.string(u.t.T3PvV4),
        children: (0, i.jsx)(c.A, {
            className: m,
            color: j,
            size: A,
            children: (0, i.jsx)(o.Uzd, {
                size: "custom",
                color: n,
                height: A,
                width: A,
                className: x
            })
        })
    })
}