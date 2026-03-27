/** chunk id: 753838 params = (module,exports,require) **/
t.d(n, {
    A: () => s
});
var _ = t(627968);
t(64700);
var r = t(503698),
    a = t.n(r),
    o = t(990078),
    i = t(397927),
    c = t(473145),
    d = t(985018),
    l = t(319439);
let s = e => {
    let n, t, r, {
            guildFeature: s,
            guild: f,
            className: p,
            hideTooltip: m = !1,
            tooltipPosition: u = "left",
            onClick: h
        } = e,
        x = f.features.has(s),
        C = (0, c.Ys)(s);
    return (x ? (null != C && (r = d.intl.string(d.t.hUgjyP)), n = (0, _.jsxs)(_.Fragment, {
        children: [(0, _.jsx)(i._Jp, {
            color: i.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
            className: l.RQ
        }), (0, _.jsx)(i.Heading, {
            variant: "eyebrow",
            className: l.h_,
            children: d.intl.string(d.t["0O+87i"])
        })]
    })) : (null != C && (r = d.intl.string(d.t.L2wYYj)), n = (0, _.jsxs)(_.Fragment, {
        children: [(0, _.jsx)(i._Jp, {
            color: "currentColor",
            className: l.Kk
        }), (0, _.jsx)(i.Heading, {
            variant: "eyebrow",
            className: l.h_,
            children: null != C && (0, c.Qu)(C)
        })]
    })), t = m || null == r ? (0, _.jsx)("div", {
        className: a()(l.Jz, p),
        children: n
    }) : (0, _.jsx)(o.m, {
        position: u,
        text: r,
        children: (0, _.jsx)("div", {
            className: a()(l.Jz, p),
            children: n
        })
    }), null == h || x) ? t : (0, _.jsx)(i.DUT, {
        onClick: h,
        className: l.vk,
        children: t
    })
}