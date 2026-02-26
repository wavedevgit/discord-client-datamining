/** chunk id: 355971, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
});
var a = n(627968);
n(64700);
var r = n(317097),
    i = n(311907),
    s = n(827734),
    l = n(990078),
    c = n(397927),
    o = n(775602),
    d = n(496885),
    u = n(985018);

function m(e) {
    let t, {
            color: n,
            size: m,
            forcedIconColor: p,
            className: _,
            iconClassName: h,
            tooltipText: x
        } = e,
        [g, f] = (0, i.yK)([o.A], () => [o.A.desaturateUserColors, o.A.saturation]),
        v = (0, c.rdh)(s.A.unsafe_rawColors.PRIMARY_300).hex(),
        A = (0, r.LX)(n ?? v),
        C = (0, r.$k)(A, !1, g ? f : null);
    return t = null != p ? p : .3 > (0, r.OK)(A) ? s.A.unsafe_rawColors.PRIMARY_630.css : s.A.unsafe_rawColors.WHITE.css, (0, a.jsx)(l.m, {
        text: null != x ? x : u.intl.string(u.t.T3PvV4),
        children: (0, a.jsx)(d.A, {
            className: _,
            color: C,
            size: m,
            children: (0, a.jsx)(c.Uzd, {
                size: "custom",
                color: t,
                height: m,
                width: m,
                className: h
            })
        })
    })
}