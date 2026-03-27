/** chunk id: 475720 params = (module,exports,require) **/
i.d(t, {
    A: () => m
});
var l = i(627968),
    n = i(64700),
    a = i(397927),
    s = i(9578),
    r = i(573648),
    o = i(954571),
    d = i(652215),
    c = i(639325);
let u = {
    [d.fg2.TWITCH]: a.aWO,
    [d.fg2.YOUTUBE]: a.CiD,
    [d.fg2.TWITTER]: a.p3p,
    [d.fg2.TWITTER_LEGACY]: a.p3p,
    [d.fg2.FACEBOOK]: a.Zc1,
    [d.fg2.INSTAGRAM]: a.LyU,
    [d.fg2.REDDIT]: a.T1e,
    [d.fg2.TIKTOK]: a.Xsb,
    [d.fg2.SPOTIFY]: a.L5T,
    [d.fg2.BLUESKY]: a.akf
};

function m(e) {
    let {
        url: t,
        invite: i
    } = e, m = r.A.getByUrl(t), x = null != m ? u[m.type] : void 0, g = n.useCallback(() => (o.default.track(d.HAw.INVITE_ACCEPT_SOCIAL_LINK_CLICKED, {
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