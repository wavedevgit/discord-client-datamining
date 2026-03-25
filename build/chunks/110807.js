/** chunk id: 110807 params = (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => _,
    SB: () => h
}), n(321073);
var i = n(469993),
    s = n(836039),
    l = n(979816),
    r = n(567305),
    a = n(555325),
    o = n(403362),
    d = n(91168),
    c = n(652215),
    u = n(985018);
let {
    getSectionDefinition: m
} = d.A, g = "HEADER", x = "DIVIDER";

function h(e) {
    let {
        guild: t,
        canManageGuild: n,
        canViewAuditLog: d,
        canManageRoles: h,
        canManageBans: _,
        canAccessMembersPage: p,
        canViewGuildAnalytics: A,
        isOwner: f,
        isGuildAdmin: j,
        canManageGuildExpressions: N
    } = e, E = () => (0, a.V9)({
        guild: t,
        isOwner: f,
        canManageGuildRoleSubscriptions: (0, a.X9)(t),
        isGuildEligibleForRoleSubscriptions: (0, r.OV)(t.id),
        isExpeditedMonetizationOnboardingGuild: (0, i.Sm)(t),
        isUserInCreatorMonetizationEligibleCountry: (0, i.Z1)(),
        shouldRestrictUpdatingRoleSubscriptionSettings: (0, s.mk)(t.id)
    }), b = {
        ...e,
        monetizationPredicate: E
    }, C = [];
    C.push({
        section: g,
        label: "" !== t.name ? t.name : u.intl.string(u.t["154/bL"])
    }), C.push(m(c.BEX.PROFILE, b)), C.push(m(c.BEX.TAG, b)), C.push(m(c.BEX.ENGAGEMENT, b)), C.push(m(c.BEX.BOOST_PERKS, b)), N && (C.push({
        section: x
    }), C.push({
        section: g,
        label: u.intl.string(u.t.m6lkGy)
    }), C.push(m(c.BEX.EMOJI, b)), C.push(m(c.BEX.STICKERS, b)), C.push(m(c.BEX.SOUNDBOARD, b))), (n || h || p || j) && (C.push({
        section: x
    }), C.push({
        section: g,
        label: u.intl.string(u.t.bMAKMK)
    }), C.push(m(c.BEX.MEMBERS, b)), C.push(m(c.BEX.ROLES, b)), C.push(m(c.BEX.INVITES, b)), C.push(m(c.BEX.ACCESS, b))), C.push({
        section: x
    }), C.push({
        section: g,
        label: u.intl.string(u.t.wF3KJy)
    }), C.push(m(c.BEX.INTEGRATIONS, b)), C.push(m(c.BEX.APP_DIRECTORY, b));
    let T = !t.features.has(c.GuildFeatures.COMMUNITY) && ((0, l.hX)(t.id) || (0, l.i_)(t.id));
    (n || d || _ || T) && (C.push({
        section: x
    }), C.push({
        section: g,
        label: u.intl.string(u.t["5tbTdV"])
    }), C.push(m(c.BEX.SAFETY, b)), C.push(m(c.BEX.MODERATION, b)), C.push(m(c.BEX.AUDIT_LOG, b)), C.push(m(c.BEX.BANS, b)), C.push(m(c.BEX.GUILD_AUTOMOD, b)));
    let I = t.features.has(c.GuildFeatures.COMMUNITY) && A,
        v = E();
    return (n || I || v) && (C.push({
        section: x
    }), C.push(m(c.BEX.COMMUNITY, b)), C.push(m(c.BEX.ONBOARDING, b)), C.push(m(c.BEX.ANALYTICS, b)), C.push(m(c.BEX.COMMUNITY_WELCOME, b)), C.push(m(c.BEX.DISCOVERY_LANDING_PAGE, b)), C.push(m(c.BEX.ROLE_SUBSCRIPTIONS, b)), C.push(m(c.BEX.GUILD_PRODUCTS, b)), C.push(m(c.BEX.ROLE_SUBSCRIPTIONS_STORE_PAGE, b))), C.push({
        section: x
    }), C.push(m(c.BEX.GUILD_TEMPLATES, b)), C.push(m(c.BEX.DELETE, b)), C.filter(o.Vq)
}
let _ = {
    generateSections: h
}