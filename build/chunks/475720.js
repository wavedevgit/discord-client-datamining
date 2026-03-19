/** chunk id: 475720 params = (module,exports,require) **/
i.d(t, {
    A: () => m
});
var l = i(627968),
    n = i(64700),
    a = i(397927),
    s = i(9578),
    r = i(573648),
    d = i(954571),
    o = i(652215),
    c = i(306989);
let u = {
    [o.fg2.TWITCH]: a.aWO,
    [o.fg2.YOUTUBE]: a.CiD,
    [o.fg2.TWITTER]: a.p3p,
    [o.fg2.TWITTER_LEGACY]: a.p3p,
    [o.fg2.FACEBOOK]: a.Zc1,
    [o.fg2.INSTAGRAM]: a.LyU,
    [o.fg2.REDDIT]: a.T1e,
    [o.fg2.TIKTOK]: a.Xsb,
    [o.fg2.SPOTIFY]: a.L5T,
    [o.fg2.BLUESKY]: a.akf
};

function m(e) {
    let {
        url: t,
        invite: i
    } = e, m = r.A.getByUrl(t), x = null != m ? u[m.type] : void 0, g = n.useCallback(() => (d.default.track(o.HAw.INVITE_ACCEPT_SOCIAL_LINK_CLICKED, {
        guild_id: i.guild?.id,
        invite_code: i.code,
        social_platform: m?.type,
        social_platform_url: t
    }), null), [i.code, i.guild?.id, m, t]);
    return (0, l.jsx)(s.A, {
        href: t,
        trusted: null != m,
        useDefaultUnderlineStyles: !1,
        onClick: g,
        children: null != x ? (0, l.jsx)(x, {
            className: c.zg,
            size: "xs",
            color: a.LU0.colors.ICON_MUTED,
            "aria-hidden": !0
        }) : (0, l.jsx)(a.L_e, {
            className: c.zg,
            color: a.LU0.colors.ICON_MUTED,
            width: 16,
            height: 16,
            size: "custom"
        })
    })
}