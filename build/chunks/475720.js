/** chunk id: 475720 params = (module,exports,require) **/
t.d(i, {
    A: () => m
});
var l = t(627968),
    s = t(64700),
    a = t(397927),
    n = t(9578),
    r = t(573648),
    o = t(954571),
    d = t(652215),
    c = t(139616);
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
        url: i,
        invite: t
    } = e, m = r.A.getByUrl(i), _ = null != m ? u[m.type] : void 0, h = s.useCallback(() => (o.default.track(d.HAw.INVITE_ACCEPT_SOCIAL_LINK_CLICKED, {
        guild_id: t.guild?.id,
        invite_code: t.code,
        social_platform: m?.type,
        social_platform_url: i
    }), null), [t.code, t.guild?.id, m, i]);
    return (0, l.jsx)(n.A, {
        href: i,
        trusted: null != m,
        useDefaultUnderlineStyles: !1,
        onClick: h,
        children: null != _ ? (0, l.jsx)(_, {
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