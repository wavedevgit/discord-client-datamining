/** chunk id: 355971, original params: e,a,t (module,exports,require) **/
t.d(a, {
    A: () => u
});
var n = t(627968);
t(64700);
var i = t(317097),
    o = t(311907),
    r = t(827734),
    c = t(990078),
    l = t(397927),
    s = t(775602),
    _ = t(496885),
    d = t(985018);

function u(e) {
    let a, {
            color: t,
            size: u,
            forcedIconColor: m,
            className: p,
            iconClassName: f,
            tooltipText: A
        } = e,
        [I, g] = (0, o.yK)([s.A], () => [s.A.desaturateUserColors, s.A.saturation]),
        C = (0, l.rdh)(r.A.unsafe_rawColors.PRIMARY_300).hex(),
        h = (0, i.LX)(t ?? C),
        T = (0, i.$k)(h, !1, I ? g : null);
    return a = null != m ? m : .3 > (0, i.OK)(h) ? r.A.unsafe_rawColors.PRIMARY_630.css : r.A.unsafe_rawColors.WHITE.css, (0, n.jsx)(c.m, {
        text: null != A ? A : d.intl.string(d.t.T3PvV4),
        children: (0, n.jsx)(_.A, {
            className: p,
            color: T,
            size: u,
            children: (0, n.jsx)(l.Uzd, {
                size: "custom",
                color: a,
                height: u,
                width: u,
                className: f
            })
        })
    })
}