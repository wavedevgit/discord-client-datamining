/** chunk id: 753838 params = (module,exports,require) **/
n.d(t, {
    A: () => s
});
var i = n(627968);
n(64700);
var r = n(503698),
    a = n.n(r),
    _ = n(990078),
    l = n(397927),
    o = n(473145),
    d = n(985018),
    c = n(319439);
let s = e => {
    let t, n, r, {
            guildFeature: s,
            guild: f,
            className: p,
            hideTooltip: u = !1,
            tooltipPosition: h = "left",
            onClick: m
        } = e,
        x = f.features.has(s),
        g = (0, o.Ys)(s);
    return (x ? (null != g && (r = d.intl.string(d.t.hUgjyP)), t = (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(l._Jp, {
            color: l.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
            className: c.RQ
        }), (0, i.jsx)(l.Heading, {
            variant: "eyebrow",
            className: c.h_,
            children: d.intl.string(d.t["0O+87i"])
        })]
    })) : (null != g && (r = d.intl.string(d.t.L2wYYj)), t = (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(l._Jp, {
            color: "currentColor",
            className: c.Kk
        }), (0, i.jsx)(l.Heading, {
            variant: "eyebrow",
            className: c.h_,
            children: null != g && (0, o.Qu)(g)
        })]
    })), n = u || null == r ? (0, i.jsx)("div", {
        className: a()(c.Jz, p),
        children: t
    }) : (0, i.jsx)(_.m, {
        position: h,
        text: r,
        children: (0, i.jsx)("div", {
            className: a()(c.Jz, p),
            children: t
        })
    }), null == m || x) ? n : (0, i.jsx)(l.DUT, {
        onClick: m,
        className: c.vk,
        children: n
    })
}