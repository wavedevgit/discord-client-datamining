/** chunk id: 753838 params = (module,exports,require) **/
n.d(t, {
    A: () => s
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    _ = n(990078),
    l = n(397927),
    o = n(473145),
    c = n(985018),
    d = n(483116);
let s = e => {
    let t, n, i, {
            guildFeature: s,
            guild: f,
            className: p,
            hideTooltip: u = !1,
            tooltipPosition: h = "left",
            onClick: m
        } = e,
        x = f.features.has(s),
        v = (0, o.Ys)(s);
    return (x ? (null != v && (i = c.intl.string(c.t.hUgjyP)), t = (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(l._Jp, {
            color: l.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
            className: d.RQ
        }), (0, r.jsx)(l.Heading, {
            variant: "eyebrow",
            className: d.h_,
            children: c.intl.string(c.t["0O+87i"])
        })]
    })) : (null != v && (i = c.intl.string(c.t.L2wYYj)), t = (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(l._Jp, {
            color: "currentColor",
            className: d.Kk
        }), (0, r.jsx)(l.Heading, {
            variant: "eyebrow",
            className: d.h_,
            children: null != v && (0, o.Qu)(v)
        })]
    })), n = u || null == i ? (0, r.jsx)("div", {
        className: a()(d.Jz, p),
        children: t
    }) : (0, r.jsx)(_.m, {
        position: h,
        text: i,
        children: (0, r.jsx)("div", {
            className: a()(d.Jz, p),
            children: t
        })
    }), null == m || x) ? n : (0, r.jsx)(l.DUT, {
        onClick: m,
        className: d.vk,
        children: n
    })
}