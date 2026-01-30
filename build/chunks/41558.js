/** chunk id: 41558, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    S: () => b
});
var r = n(627968),
    i = n(64700),
    l = n(397927),
    s = n(688810),
    a = n(2553),
    o = n(664007),
    c = n(486020),
    d = n(997509),
    u = n(695800),
    g = n(652215),
    m = n(874864),
    p = n(478644),
    f = n(985018),
    h = n(340736);

function b(e) {
    let {
        guild: t,
        canManageGuild: n
    } = e, b = t.features.has(g.GuildFeatures.INVITE_SPLASH), x = n && b, {
        analyticsLocations: j
    } = (0, s.Ay)(), _ = i.useCallback(e => {
        d.A.updateGuild({
            splash: e
        })
    }, []), O = i.useCallback(e => {
        e.preventDefault(), e.stopPropagation(), (0, u.p_)({
            guild: t,
            analyticsLocations: j,
            analyticsSection: g.JJy.GUILD_INVITE_BACKGROUND,
            analyticsObject: g.ZSU.UPLOAD_IMAGE,
            perks: (0, m.Lp)()
        })
    }, [j, t]), v = (0, r.jsx)(o.A, {
        image: t.splash,
        makeURL: e => null != e ? c.Ay.getGuildSplashURL({
            id: t.id,
            splash: e
        }) : null,
        disabled: !x,
        onChange: _,
        hint: f.intl.string(f.t.uPvxqJ),
        enabled: x,
        maxFileSizeBytes: p.j,
        onFileSizeError: () => (0, a.A)(p.j)
    });
    return b ? v : (0, r.jsx)(l.DUT, {
        "aria-hidden": !0,
        tabIndex: -1,
        className: h.U,
        onClick: O,
        children: v
    })
}