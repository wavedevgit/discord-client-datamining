/** Chunk was on 92812 **/
/** chunk id: 753838, original params: e,t,i (module,exports,require) **/
i.d(t, {
    A: () => p
}), i(228524);
var n = i(627968);
i(64700);
var r = i(503698),
    a = i.n(r),
    l = i(990078),
    _ = i(397927),
    o = i(840120),
    d = i(473145),
    s = i(652215),
    c = i(985018),
    f = i(483116);
let p = e => {
    let t, i, r, {
            guildFeature: p,
            guild: u,
            className: h,
            hideTooltip: m = !1,
            tooltipPosition: x = "left",
            onClick: g
        } = e,
        v = u.features.has(p),
        k = (0, o.Bl)(u.id, "GuildSettingsBoostPerks"),
        j = (0, d.Ys)(p);
    return !v && p === s.GuildFeatures.VANITY_URL && k ? null : (v ? (null != j && (r = c.intl.string(c.t.hUgjyP)), t = (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(_._Jp, {
            color: _.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
            className: f.RQ
        }), (0, n.jsx)(_.Heading, {
            variant: "eyebrow",
            className: f.h_,
            children: c.intl.string(c.t["0O+87i"])
        })]
    })) : (null != j && (r = c.intl.string(c.t.L2wYYj)), t = (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(_._Jp, {
            color: "currentColor",
            className: f.Kk
        }), (0, n.jsx)(_.Heading, {
            variant: "eyebrow",
            className: f.h_,
            children: null != j && (0, d.Qu)(j)
        })]
    })), i = m || null == r ? (0, n.jsx)("div", {
        className: a()(f.Jz, h),
        children: t
    }) : (0, n.jsx)(l.m, {
        position: x,
        text: r,
        children: (0, n.jsx)("div", {
            className: a()(f.Jz, h),
            children: t
        })
    }), null == g || v) ? i : (0, n.jsx)(_.DUT, {
        onClick: g,
        className: f.vk,
        children: i
    })
}