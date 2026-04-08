/** chunk id: 475720 params = (module,exports,require) **/
t.d(i, {
    A: () => m
});
var l = t(627968),
    s = t(64700),
    n = t(397927),
    a = t(9578),
    r = t(573648),
    o = t(954571),
    d = t(652215),
    c = t(639325);
let u = {
    [d.fg2.TWITCH]: n.aWO,
    [d.fg2.YOUTUBE]: n.CiD,
    [d.fg2.TWITTER]: n.p3p,
    [d.fg2.TWITTER_LEGACY]: n.p3p,
    [d.fg2.FACEBOOK]: n.Zc1,
    [d.fg2.INSTAGRAM]: n.LyU,
    [d.fg2.REDDIT]: n.T1e,
    [d.fg2.TIKTOK]: n.Xsb,
    [d.fg2.SPOTIFY]: n.L5T,
    [d.fg2.BLUESKY]: n.akf
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
    return (0, l.jsx)(a.A, {
        href: i,
        trusted: null != m,
        useDefaultUnderlineStyles: !1,
        onClick: h,
        children: null != _ ? (0, l.jsx)(_, {
            className: c.zg,
            size: "xs",
            color: n.LU0.colors.ICON_MUTED,
            "aria-hidden": !0
        }) : (0, l.jsx)(n.L_e, {
            className: c.zg,
            color: n.LU0.colors.ICON_MUTED,
            width: 16,
            height: 16,
            size: "custom"
        })
    })
}