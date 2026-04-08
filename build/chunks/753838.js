/** chunk id: 753838 params = (module,exports,require) **/
n.d(_, {
    A: () => s
});
var t = n(627968);
n(64700);
var r = n(503698),
    a = n.n(r),
    o = n(990078),
    c = n(397927),
    i = n(473145),
    d = n(985018),
    l = n(910078);
let s = e => {
    let _, n, r, {
            guildFeature: s,
            guild: f,
            className: p,
            hideTooltip: h = !1,
            tooltipPosition: u = "left",
            onClick: m
        } = e,
        x = f.features.has(s),
        k = (0, i.Ys)(s);
    return (x ? (null != k && (r = d.intl.string(d.t.hUgjyP)), _ = (0, t.jsxs)(t.Fragment, {
        children: [(0, t.jsx)(c._Jp, {
            color: c.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
            className: l.RQ
        }), (0, t.jsx)(c.Heading, {
            variant: "eyebrow",
            className: l.h_,
            children: d.intl.string(d.t["0O+87i"])
        })]
    })) : (null != k && (r = d.intl.string(d.t.L2wYYj)), _ = (0, t.jsxs)(t.Fragment, {
        children: [(0, t.jsx)(c._Jp, {
            color: "currentColor",
            className: l.Kk
        }), (0, t.jsx)(c.Heading, {
            variant: "eyebrow",
            className: l.h_,
            children: null != k && (0, i.Qu)(k)
        })]
    })), n = h || null == r ? (0, t.jsx)("div", {
        className: a()(l.Jz, p),
        children: _
    }) : (0, t.jsx)(o.m, {
        position: u,
        text: r,
        children: (0, t.jsx)("div", {
            className: a()(l.Jz, p),
            children: _
        })
    }), null == m || x) ? n : (0, t.jsx)(c.DUT, {
        onClick: m,
        className: l.vk,
        children: n
    })
}