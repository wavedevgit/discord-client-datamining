/** chunk id: 355971, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => A
});
var l = n(627968);
n(64700);
var a = n(317097),
    s = n(311907),
    i = n(827734),
    r = n(990078),
    u = n(397927),
    c = n(775602),
    d = n(496885),
    o = n(985018);

function A(e) {
    let t, {
            color: n,
            size: A,
            forcedIconColor: h,
            className: _,
            iconClassName: m,
            tooltipText: I
        } = e,
        [E, N] = (0, s.yK)([c.A], () => [c.A.desaturateUserColors, c.A.saturation]),
        g = (0, u.rdh)(i.A.unsafe_rawColors.PRIMARY_300).hex(),
        L = (0, a.LX)(n ?? g),
        C = (0, a.$k)(L, !1, E ? N : null);
    return t = null != h ? h : .3 > (0, a.OK)(L) ? i.A.unsafe_rawColors.PRIMARY_630.css : i.A.unsafe_rawColors.WHITE.css, (0, l.jsx)(r.m, {
        text: null != I ? I : o.intl.string(o.t.T3PvV4),
        children: (0, l.jsx)(d.A, {
            className: _,
            color: C,
            size: A,
            children: (0, l.jsx)(u.Uzd, {
                size: "custom",
                color: t,
                height: A,
                width: A,
                className: m
            })
        })
    })
}