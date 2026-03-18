/** chunk id: 355971 params = (module,exports,require) **/
n.d(t, {
    A: () => _
});
var i = n(627968);
n(64700);
var s = n(317097),
    r = n(311907),
    a = n(827734),
    l = n(990078),
    o = n(397927),
    d = n(775602),
    c = n(496885),
    u = n(985018);

function _(e) {
    let t, {
            color: n,
            size: _,
            forcedIconColor: A,
            className: m,
            iconClassName: x,
            tooltipText: p
        } = e,
        [f, h] = (0, r.yK)([d.A], () => [d.A.desaturateUserColors, d.A.saturation]),
        g = (0, o.rdh)(a.A.unsafe_rawColors.PRIMARY_300).hex(),
        I = (0, s.LX)(n ?? g),
        j = (0, s.$k)(I, !1, f ? h : null);
    return t = null != A ? A : .3 > (0, s.OK)(I) ? a.A.unsafe_rawColors.PRIMARY_630.css : a.A.unsafe_rawColors.WHITE.css, (0, i.jsx)(l.m, {
        text: null != p ? p : u.intl.string(u.t.T3PvV4),
        children: (0, i.jsx)(c.A, {
            className: m,
            color: j,
            size: _,
            children: (0, i.jsx)(o.Uzd, {
                size: "custom",
                color: t,
                height: _,
                width: _,
                className: x
            })
        })
    })
}