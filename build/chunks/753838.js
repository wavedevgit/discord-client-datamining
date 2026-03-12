/** chunk id: 753838 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => g
});
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    r = n(990078),
    a = n(397927),
    o = n(840120),
    d = n(473145),
    c = n(652215),
    u = n(985018),
    m = n(673006);
let g = e => {
    let t, n, s, {
            guildFeature: g,
            guild: x,
            className: h,
            hideTooltip: _ = !1,
            tooltipPosition: p = "left",
            onClick: A
        } = e,
        f = x.features.has(g),
        j = (0, o.Bl)(x.id, "GuildSettingsBoostPerks"),
        N = (0, d.Ys)(g);
    return !f && g === c.GuildFeatures.VANITY_URL && j ? null : (f ? (null != N && (s = u.intl.string(u.t.hUgjyP)), t = (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(a._Jp, {
            color: a.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
            className: m.RQ
        }), (0, i.jsx)(a.Heading, {
            variant: "eyebrow",
            className: m.h_,
            children: u.intl.string(u.t["0O+87i"])
        })]
    })) : (null != N && (s = u.intl.string(u.t.L2wYYj)), t = (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(a._Jp, {
            color: "currentColor",
            className: m.Kk
        }), (0, i.jsx)(a.Heading, {
            variant: "eyebrow",
            className: m.h_,
            children: null != N && (0, d.Qu)(N)
        })]
    })), n = _ || null == s ? (0, i.jsx)("div", {
        className: l()(m.Jz, h),
        children: t
    }) : (0, i.jsx)(r.m, {
        position: p,
        text: s,
        children: (0, i.jsx)("div", {
            className: l()(m.Jz, h),
            children: t
        })
    }), null == A || f) ? n : (0, i.jsx)(a.DUT, {
        onClick: A,
        className: m.vk,
        children: n
    })
}