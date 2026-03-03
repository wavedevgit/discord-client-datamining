/** chunk id: 475720, original params: e,t,i (module,exports,require) **/
i.d(t, {
    A: () => m
});
var l = i(627968),
    n = i(64700),
    a = i(397927),
    s = i(9578),
    r = i(573648),
    d = i(954571),
    c = i(652215),
    o = i(492171);
let u = {
    [c.fg2.TWITCH]: a.aWO,
    [c.fg2.YOUTUBE]: a.CiD,
    [c.fg2.TWITTER]: a.p3p,
    [c.fg2.TWITTER_LEGACY]: a.p3p,
    [c.fg2.FACEBOOK]: a.Zc1,
    [c.fg2.INSTAGRAM]: a.LyU,
    [c.fg2.REDDIT]: a.T1e,
    [c.fg2.TIKTOK]: a.Xsb,
    [c.fg2.SPOTIFY]: a.L5T,
    [c.fg2.BLUESKY]: a.akf
};

function m(e) {
    let {
        url: t,
        invite: i
    } = e, m = r.A.getByUrl(t), x = null != m ? u[m.type] : void 0, _ = n.useCallback(() => (d.default.track(c.HAw.INVITE_ACCEPT_SOCIAL_LINK_CLICKED, {
        guild_id: i.guild?.id,
        invite_code: i.code,
        social_platform: m?.type,
        social_platform_url: t
    }), null), [i.code, i.guild?.id, m, t]);
    return (0, l.jsx)(s.A, {
        href: t,
        trusted: null != m,
        useDefaultUnderlineStyles: !1,
        onClick: _,
        children: null != x ? (0, l.jsx)(x, {
            className: o.zg,
            size: "xs",
            color: a.LU0.colors.ICON_MUTED,
            "aria-hidden": !0
        }) : (0, l.jsx)(a.L_e, {
            className: o.zg,
            color: a.LU0.colors.ICON_MUTED,
            width: 16,
            height: 16,
            size: "custom"
        })
    })
}