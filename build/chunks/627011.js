/** chunk id: 627011, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    B6: () => g,
    bX: () => m,
    rV: () => p
});
var r = n(627968),
    i = n(64700),
    l = n(688810),
    s = n(753838),
    a = n(695800),
    o = n(652215),
    c = n(874864),
    d = n(196647);

function u(e) {
    let {
        guild: t,
        guildFeature: n,
        analyticsSection: o,
        analyticsObject: c,
        getPerks: u,
        targetPremiumGuildTier: g
    } = e, {
        analyticsLocations: m
    } = (0, l.Ay)(), p = i.useCallback(e => {
        e.preventDefault(), e.stopPropagation(), (0, a.p_)({
            guild: t,
            analyticsLocations: m,
            analyticsSection: o,
            analyticsObject: c,
            perks: u(),
            targetPremiumGuildTier: g
        })
    }, [m, c, o, t, u, g]);
    return (0, r.jsx)(s.A, {
        guild: t,
        guildFeature: n,
        className: d.M,
        onClick: p
    })
}

function g(e) {
    let {
        guild: t
    } = e;
    return (0, r.jsx)(u, {
        guild: t,
        guildFeature: o.GuildFeatures.BANNER,
        analyticsSection: o.JJy.GUILD_BANNER,
        analyticsObject: o.ZSU.BADGE,
        getPerks: c.QR
    })
}

function m(e) {
    let {
        guild: t
    } = e;
    return (0, r.jsx)(u, {
        guild: t,
        guildFeature: o.GuildFeatures.INVITE_SPLASH,
        analyticsSection: o.JJy.GUILD_INVITE_BACKGROUND,
        analyticsObject: o.ZSU.BADGE,
        getPerks: c.Lp
    })
}

function p(e) {
    let {
        guild: t
    } = e;
    return (0, r.jsx)(u, {
        guild: t,
        guildFeature: o.GuildFeatures.VANITY_URL,
        analyticsSection: o.JJy.GUILD_SETTINGS_VANITY_URL,
        analyticsObject: o.ZSU.BADGE,
        getPerks: c.DU,
        targetPremiumGuildTier: o.TVA.TIER_3
    })
}