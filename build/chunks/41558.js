/** chunk id: 41558, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    S: () => p
});
var i = n(627968),
    s = n(64700),
    l = n(397927),
    r = n(688810),
    a = n(2553),
    o = n(664007),
    d = n(486020),
    c = n(997509),
    u = n(695800),
    m = n(652215),
    g = n(874864),
    x = n(478644),
    h = n(985018),
    _ = n(686886);

function p(e) {
    let {
        guild: t,
        canManageGuild: n
    } = e, p = t.features.has(m.GuildFeatures.INVITE_SPLASH), A = n && p, {
        analyticsLocations: f
    } = (0, r.Ay)(), j = s.useCallback(e => {
        c.A.updateGuild({
            splash: e
        })
    }, []), N = s.useCallback(e => {
        e.preventDefault(), e.stopPropagation(), (0, u.p_)({
            guild: t,
            analyticsLocations: f,
            analyticsSection: m.JJy.GUILD_INVITE_BACKGROUND,
            analyticsObject: m.ZSU.UPLOAD_IMAGE,
            perks: (0, g.Lp)()
        })
    }, [f, t]), E = (0, i.jsx)(o.A, {
        image: t.splash,
        makeURL: e => null != e ? d.Ay.getGuildSplashURL({
            id: t.id,
            splash: e
        }) : null,
        disabled: !A,
        onChange: j,
        hint: h.intl.string(h.t.uPvxqJ),
        enabled: A,
        maxFileSizeBytes: x.j,
        onFileSizeError: () => (0, a.A)(x.j)
    });
    return p ? E : (0, i.jsx)(l.DUT, {
        "aria-hidden": !0,
        tabIndex: -1,
        className: _.U,
        onClick: N,
        children: E
    })
}