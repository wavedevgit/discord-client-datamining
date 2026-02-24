/** chunk id: 753838, original params: e,n,t (module,exports,require) **/
t.d(n, {
    A: () => p
});
var i = t(627968);
t(64700);
var r = t(503698),
    a = t.n(r),
    l = t(990078),
    _ = t(397927),
    o = t(840120),
    d = t(473145),
    s = t(652215),
    c = t(985018),
    f = t(673006);
let p = e => {
    let n, t, r, {
            guildFeature: p,
            guild: u,
            className: m,
            hideTooltip: h = !1,
            tooltipPosition: g = "left",
            onClick: x
        } = e,
        v = u.features.has(p),
        k = (0, o.Bl)(u.id, "GuildSettingsBoostPerks"),
        j = (0, d.Ys)(p);
    return !v && p === s.GuildFeatures.VANITY_URL && k ? null : (v ? (null != j && (r = c.intl.string(c.t.hUgjyP)), n = (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(_._Jp, {
            color: _.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
            className: f.RQ
        }), (0, i.jsx)(_.Heading, {
            variant: "eyebrow",
            className: f.h_,
            children: c.intl.string(c.t["0O+87i"])
        })]
    })) : (null != j && (r = c.intl.string(c.t.L2wYYj)), n = (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(_._Jp, {
            color: "currentColor",
            className: f.Kk
        }), (0, i.jsx)(_.Heading, {
            variant: "eyebrow",
            className: f.h_,
            children: null != j && (0, d.Qu)(j)
        })]
    })), t = h || null == r ? (0, i.jsx)("div", {
        className: a()(f.Jz, m),
        children: n
    }) : (0, i.jsx)(l.m, {
        position: g,
        text: r,
        children: (0, i.jsx)("div", {
            className: a()(f.Jz, m),
            children: n
        })
    }), null == x || v) ? t : (0, i.jsx)(_.DUT, {
        onClick: x,
        className: f.vk,
        children: t
    })
}