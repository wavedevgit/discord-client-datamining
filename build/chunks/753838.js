/** chunk id: 753838 params = (module,exports,require) **/
n.d(t, {
    A: () => p
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    _ = n(990078),
    l = n(397927),
    o = n(840120),
    d = n(473145),
    s = n(652215),
    c = n(985018),
    f = n(673006);
let p = e => {
    let t, n, i, {
            guildFeature: p,
            guild: u,
            className: m,
            hideTooltip: h = !1,
            tooltipPosition: g = "left",
            onClick: x
        } = e,
        v = u.features.has(p),
        L = (0, o.Bl)(u.id, "GuildSettingsBoostPerks"),
        k = (0, d.Ys)(p);
    return !v && p === s.GuildFeatures.VANITY_URL && L ? null : (v ? (null != k && (i = c.intl.string(c.t.hUgjyP)), t = (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(l._Jp, {
            color: l.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
            className: f.RQ
        }), (0, r.jsx)(l.Heading, {
            variant: "eyebrow",
            className: f.h_,
            children: c.intl.string(c.t["0O+87i"])
        })]
    })) : (null != k && (i = c.intl.string(c.t.L2wYYj)), t = (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(l._Jp, {
            color: "currentColor",
            className: f.Kk
        }), (0, r.jsx)(l.Heading, {
            variant: "eyebrow",
            className: f.h_,
            children: null != k && (0, d.Qu)(k)
        })]
    })), n = h || null == i ? (0, r.jsx)("div", {
        className: a()(f.Jz, m),
        children: t
    }) : (0, r.jsx)(_.m, {
        position: g,
        text: i,
        children: (0, r.jsx)("div", {
            className: a()(f.Jz, m),
            children: t
        })
    }), null == x || v) ? n : (0, r.jsx)(l.DUT, {
        onClick: x,
        className: f.vk,
        children: n
    })
}