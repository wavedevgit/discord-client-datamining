/** chunk id: 355971 params = (module,exports,require) **/
t.d(a, {
    A: () => _
});
var n = t(627968);
t(64700);
var c = t(317097),
    l = t(311907),
    r = t(827734),
    i = t(990078),
    s = t(397927),
    o = t(775602),
    u = t(496885),
    d = t(985018);

function _(e) {
    let a, {
            color: t,
            size: _,
            forcedIconColor: m,
            className: p,
            iconClassName: A,
            tooltipText: T
        } = e,
        [C, E] = (0, l.yK)([o.A], () => [o.A.desaturateUserColors, o.A.saturation]),
        I = (0, s.rdh)(r.A.unsafe_rawColors.PRIMARY_300).hex(),
        h = (0, c.LX)(t ?? I),
        g = (0, c.$k)(h, !1, C ? E : null);
    return a = null != m ? m : .3 > (0, c.OK)(h) ? r.A.unsafe_rawColors.PRIMARY_630.css : r.A.unsafe_rawColors.WHITE.css, (0, n.jsx)(i.m, {
        text: null != T ? T : d.intl.string(d.t.T3PvV4),
        children: (0, n.jsx)(u.A, {
            className: p,
            color: g,
            size: _,
            children: (0, n.jsx)(s.Uzd, {
                size: "custom",
                color: a,
                height: _,
                width: _,
                className: A
            })
        })
    })
}