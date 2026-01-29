/** Chunk was on 66863 **/
/** chunk id: 753838, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
}), n(228524);
var i = n(627968);
n(64700);
var r = n(503698),
    a = n.n(r),
    _ = n(990078),
    l = n(397927),
    o = n(840120),
    d = n(473145),
    s = n(652215),
    c = n(985018),
    f = n(483116);
let p = e => {
    let t, n, r, {
            guildFeature: p,
            guild: u,
            className: h,
            hideTooltip: m = !1,
            tooltipPosition: x = "left",
            onClick: v
        } = e,
        g = u.features.has(p),
        j = (0, o.Bl)(u.id, "GuildSettingsBoostPerks"),
        k = (0, d.Ys)(p);
    return !g && p === s.GuildFeatures.VANITY_URL && j ? null : (g ? (null != k && (r = c.intl.string(c.t.hUgjyP)), t = (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(l._Jp, {
            color: l.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
            className: f.RQ
        }), (0, i.jsx)(l.Heading, {
            variant: "eyebrow",
            className: f.h_,
            children: c.intl.string(c.t["0O+87i"])
        })]
    })) : (null != k && (r = c.intl.string(c.t.L2wYYj)), t = (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(l._Jp, {
            color: "currentColor",
            className: f.Kk
        }), (0, i.jsx)(l.Heading, {
            variant: "eyebrow",
            className: f.h_,
            children: null != k && (0, d.Qu)(k)
        })]
    })), n = m || null == r ? (0, i.jsx)("div", {
        className: a()(f.Jz, h),
        children: t
    }) : (0, i.jsx)(_.m, {
        position: x,
        text: r,
        children: (0, i.jsx)("div", {
            className: a()(f.Jz, h),
            children: t
        })
    }), null == v || g) ? n : (0, i.jsx)(l.DUT, {
        onClick: v,
        className: f.vk,
        children: n
    })
}