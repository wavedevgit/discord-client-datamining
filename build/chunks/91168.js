/** Chunk was on 47841 **/
/** chunk id: 91168, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => ev
});
var r = n(627968),
    i = n(110259),
    l = n(554146),
    s = n(314116),
    a = n(397927),
    o = n(398590),
    c = n(361739),
    d = n(448564),
    u = n(469993),
    g = n(611371),
    m = n(979816),
    p = n(774780),
    f = n(591552),
    b = n(961973),
    h = n(130978),
    x = n(84763),
    j = n(567305),
    _ = n(739455),
    O = n(599167),
    v = n(7891),
    y = n(450510),
    A = n(861410),
    E = n(433522),
    N = n(287809),
    S = n(203982),
    I = n(403362),
    T = n(997509),
    C = n(555337),
    P = n(723278),
    w = n(282625),
    R = n(423981),
    D = n(925622),
    G = n(123488),
    L = n(758246),
    k = n(53656),
    M = n(826292),
    U = n(352821),
    B = n(132514),
    F = n(287479),
    H = n(400812),
    V = n(72533),
    K = n(291444),
    z = n(239741),
    W = n(396816),
    Y = n(807165),
    X = n(454516),
    J = n(155008),
    Z = n(965033),
    q = n(737331),
    Q = n(771935),
    $ = n(647171),
    ee = n(113266),
    et = n(91534),
    en = n(984562),
    er = n(997418),
    ei = n(314737),
    el = n(660834),
    es = n(365701),
    ea = n(712367),
    eo = n(533350),
    ec = n(251838),
    ed = n(239484),
    eu = n(933137),
    eg = n(234721),
    em = n(306846),
    ep = n(215194),
    ef = n(489154),
    eb = n(652215),
    eh = n(124759),
    ex = n(985018),
    ej = n(453263);

function e_(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r
        })
    }
    return e
}

function eO(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let ev = {
    getSectionDefinition: function(e, t) {
        let ev = (0, h.$)(t.guild.id, "guild_settings"),
            ey = (0, u.Zy)(t.guild.id),
            eA = !1 === t.guild.features.has(eb.GuildFeatures.CREATOR_MONETIZABLE) && !1 === t.guild.features.has(eb.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL),
            eE = ev && eA ? {
                label: (0, r.jsx)("div", {
                    className: ej.vf,
                    children: ex.intl.string(ex.t.Tn7Koo)
                }),
                ariaLabel: ex.intl.string(ex.t.Tn7Koo)
            } : {
                label: (0, r.jsx)("div", {
                    className: ej.vf,
                    children: ex.intl.string(ex.t["KzCF/6"])
                }),
                ariaLabel: ex.intl.string(ex.t["KzCF/6"])
            },
            eN = t.guild.features.has(eb.GuildFeatures.COMMUNITY) && t.canViewGuildAnalytics;
        switch (e) {
            case eb.BEX.PROFILE:
                return {
                    section: eb.BEX.PROFILE, impressionName: i.ImpressionNames.GUILD_SETTINGS_PROFILE, label: ex.intl.string(ex.t.txdaxf), ariaLabel: ex.intl.string(ex.t.txdaxf), element: ep.A, type: c.Py.SCROLLABLE_CUSTOM, notice: {
                        stores: [C.A],
                        element: ef.A
                    }
                };
            case eb.BEX.TAG:
                return {
                    section: eb.BEX.TAG, impressionName: i.ImpressionNames.GUILD_SETTINGS_TAG, label: ex.intl.string(ex.t["2QmKZ2"]), ariaLabel: ex.intl.string(ex.t["2QmKZ2"]), element: en.A, predicate: () => t.canManageGuild, notice: {
                        stores: [C.A],
                        element: er.A
                    }
                };
            case eb.BEX.ENGAGEMENT:
                return {
                    section: eb.BEX.ENGAGEMENT, impressionName: i.ImpressionNames.GUILD_SETTINGS_ENGAGEMENT, label: ex.intl.string(ex.t["6TAHbx"]), ariaLabel: ex.intl.string(ex.t["6TAHbx"]), element: eo.A, notice: {
                        stores: [C.A],
                        element: ec.y
                    }
                };
            case eb.BEX.BOOST_PERKS:
                return {
                    section: eb.BEX.BOOST_PERKS, impressionName: i.ImpressionNames.GUILD_SETTINGS_BOOST_PERKS, label: ex.intl.string(ex.t.UKgg5N), ariaLabel: ex.intl.string(ex.t.UKgg5N), element: Q.H, notice: {
                        stores: [C.A, q.A],
                        element: $.l
                    }
                };
            case eb.BEX.INVITES:
                return {
                    section: eb.BEX.INVITES, impressionName: i.ImpressionNames.GUILD_SETTINGS_INVITES_V2, label: ex.intl.string(ex.t.YOt3Om), ariaLabel: ex.intl.string(ex.t.YOt3Om), element: ed.A, type: c.Py.CUSTOM, predicate: () => t.canManageGuild
                };
            case eb.BEX.ROLES:
                return {
                    section: eb.BEX.ROLES, impressionName: i.ImpressionNames.GUILD_SETTINGS_ROLES, label: ex.intl.string(ex.t["LPJmL/"]), element: Y.A, type: c.Py.MINIMAL, ariaLabel: ex.intl.string(ex.t.KXcEC9), notice: {
                        stores: [W.A],
                        element: Y.W
                    }, predicate: () => t.canManageRoles, icon: t.permissionMigrationAvailable ? (0, r.jsx)("div", {
                        className: ej.Vx
                    }) : void 0
                };
            case eb.BEX.EMOJI:
                return {
                    section: eb.BEX.EMOJI, impressionName: i.ImpressionNames.GUILD_SETTINGS_EMOJI, label: ex.intl.string(ex.t.sMOuuS), element: ei.Ay, predicate: () => t.canManageGuildExpressions
                };
            case eb.BEX.STICKERS:
                return {
                    section: eb.BEX.STICKERS, impressionName: i.ImpressionNames.GUILD_SETTINGS_STICKERS, label: ex.intl.string(ex.t.R5nQkS), ariaLabel: ex.intl.string(ex.t.R5nQkS), element: et.A, predicate: () => t.canManageGuildExpressions
                };
            case eb.BEX.SOUNDBOARD:
                return {
                    section: eb.BEX.SOUNDBOARD, impressionName: i.ImpressionNames.GUILD_SETTINGS_SOUNDBOARD, label: ex.intl.string(ex.t.OWQNYr), ariaLabel: ex.intl.string(ex.t.OWQNYr), element: ee.A, predicate: () => t.canManageGuildExpressions
                };
            case eb.BEX.GUILD_TEMPLATES:
                return {
                    section: eb.BEX.GUILD_TEMPLATES, impressionName: i.ImpressionNames.GUILD_SETTINGS_TEMPLATE, label: (0, r.jsx)(ea.A, {
                        showDirtyIndicator: t.showDirtyGuildTemplateIndicator
                    }), ariaLabel: ex.intl.string(ex.t.KUw7Ss), element: es.Ay, notice: {
                        stores: [es.Jx],
                        element: es.lz
                    }, predicate: () => t.canManageGuild
                };
            case eb.BEX.ACCESS:
                return {
                    section: eb.BEX.ACCESS, impressionName: i.ImpressionNames.GUILD_SETTINGS_ACCESS, label: ex.intl.string(ex.t.YJlvBM), element: eu.y, notice: {
                        stores: [em.A],
                        element: eg.G
                    }, predicate: () => t.canManageGuild, ariaLabel: ex.intl.string(ex.t.YJlvBM)
                };
            case eb.BEX.INTEGRATIONS:
                return {
                    section: eb.BEX.INTEGRATIONS, impressionName: i.ImpressionNames.GUILD_SETTINGS_INTEGRATION, label: ex.intl.string(ex.t.CIsNZw), ariaLabel: ex.intl.string(ex.t.CIsNZw), element: M.A, notice: {
                        stores: [k.default, C.A],
                        element: M.K
                    }, predicate: () => t.canManageGuild || t.canManageWebhooks || t.canUnlinkChannels
                };
            case eb.BEX.APP_DIRECTORY:
                return {
                    section: eb.BEX.APP_DIRECTORY, label: (0, r.jsx)(P.L, {}), ariaLabel: ex.intl.string(ex.t.AKcFUj), onClick: () => {
                        (0, P.N)({
                            guildId: t.guild.id,
                            section: e
                        })
                    }
                };
            case eb.BEX.SAFETY:
                return {
                    section: eb.BEX.SAFETY, impressionName: i.ImpressionNames.GUILD_SETTINGS_SAFETY, label: ex.intl.string(ex.t["suhY+Y"]), ariaLabel: ex.intl.string(ex.t["suhY+Y"]), element: J.A, newIndicatorDismissibleContentTypes: [l.M.COMMUNITY_GUILD_SETTINGS_SAFETY], predicate: () => t.canManageGuild && t.guild.features.has(eb.GuildFeatures.COMMUNITY)
                };
            case eb.BEX.MODERATION:
                return {
                    section: eb.BEX.MODERATION, impressionName: i.ImpressionNames.GUILD_SETTINGS_MODERATION, label: ex.intl.string(ex.t["suhY+Y"]), element: Z.Ay, predicate: () => t.canManageGuild && !t.guild.features.has(eb.GuildFeatures.COMMUNITY)
                };
            case eb.BEX.GUILD_AUTOMOD:
                return {
                    section: eb.BEX.GUILD_AUTOMOD, label: (0, r.jsx)("div", {
                        className: ej.o2,
                        children: ex.intl.string(ex.t.uRelgx)
                    }), ariaLabel: ex.intl.string(ex.t.uRelgx), element: p.A, newIndicatorDismissibleContentTypes: null, predicate: () => !t.guild.features.has(eb.GuildFeatures.COMMUNITY) && ((0, m.hX)(t.guild.id) || (0, m.i_)(t.guild.id))
                };
            case eb.BEX.AUDIT_LOG:
                return {
                    section: eb.BEX.AUDIT_LOG, impressionName: i.ImpressionNames.GUILD_SETTINGS_AUDIT_LOG, label: ex.intl.string(ex.t.SPWLyT), element: w.A, type: c.Py.CUSTOM, predicate: () => t.canViewAuditLog
                };
            case eb.BEX.BANS:
                return {
                    section: eb.BEX.BANS, impressionName: i.ImpressionNames.GUILD_SETTINGS_BANS, label: ex.intl.string(ex.t.ZbeITS), element: X.A, predicate: () => t.canManageBans
                };
            case eb.BEX.COMMUNITY:
                let eS = ex.intl.string(ex.t.ElKTeb);
                return t.guild.features.has(eb.GuildFeatures.COMMUNITY) && (eS = ex.intl.string(ex.t["8nY2LE"])), {
                    section: eb.BEX.COMMUNITY,
                    impressionName: t.guild.features.has(eb.GuildFeatures.COMMUNITY) ? i.ImpressionNames.GUILD_SETTINGS_COMMUNITY_OVERVIEW : i.ImpressionNames.GUILD_SETTINGS_ENABLE_COMMUNITY,
                    label: eS,
                    element: D.A,
                    ariaLabel: eS,
                    newIndicator: !t.guild.features.has(eb.GuildFeatures.COMMUNITY) && null != t.memberCount && t.memberCount >= eh.dH && y.HP.hasHotspot(y._2.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL),
                    notice: {
                        stores: [C.A],
                        element: D.L
                    }
                };
            case eb.BEX.ONBOARDING:
                return {
                    section: eb.BEX.ONBOARDING, label: ex.intl.string(ex.t["LdxCK/"]), element: K.A, ariaLabel: ex.intl.string(ex.t["LdxCK/"]), newIndicatorDismissibleContentTypes: t.onboardingEnabled ? null : [l.M.COMMUNITY_ONBOARDING_NEW_BADGE], notice: {
                        stores: [F.A, B.A, U.A],
                        element: z.A
                    }, predicate: () => (0, b.rs)(t.guild.id), decoration: function(e, t) {
                        if (f.A.getEnabled(e)) return ex.intl.string(ex.t.pPSmxg).toUpperCase();
                        if ((0, V.o)(e)) return ex.intl.string(ex.t["HDF4o/"]).toUpperCase();
                        let n = H.ti,
                            r = n.findIndex(e => e === t);
                        if (-1 !== r) return ex.intl.formatToPlainString(ex.t["5r28iW"], {
                            count: r + 1,
                            total: n.length
                        })
                    }(t.guild.id, t.onboardingStep)
                };
            case eb.BEX.ANALYTICS:
                return {
                    section: eb.BEX.ANALYTICS, impressionName: i.ImpressionNames.GUILD_SETTINGS_ANALYTICS, label: ex.intl.string(ex.t["0wWfUG"]), ariaLabel: ex.intl.string(ex.t["0wWfUG"]), element: R.A, predicate: () => eN
                };
            case eb.BEX.DISCOVERY_LANDING_PAGE:
                return {
                    section: eb.BEX.DISCOVERY_LANDING_PAGE, impressionName: i.ImpressionNames.GUILD_SETTINGS_DISCOVERY_LANDING_PAGE, label: (0, r.jsxs)("div", {
                        className: ej.o2,
                        children: [ex.intl.string(ex.t.kGlQGF), " ", (0, r.jsx)(g.A, {})]
                    }), ariaLabel: ex.intl.string(ex.t.kGlQGF), element: L.A, notice: {
                        stores: [C.A],
                        element: L.j
                    }, type: c.Py.CUSTOM, predicate() {
                        var e;
                        return t.canManageGuild && (t.guild.features.has(eb.GuildFeatures.DISCOVERABLE) || !!(null == (e = t.guildMetadata) ? void 0 : e.isPublished))
                    }
                };
            case eb.BEX.COMMUNITY_WELCOME:
                return {
                    section: eb.BEX.COMMUNITY_WELCOME, impressionName: i.ImpressionNames.GUILD_SETTINGS_COMMUNITY_WELCOME, label: ex.intl.string(ex.t["2rkmDr"]), ariaLabel: ex.intl.string(ex.t["2rkmDr"]), element: G.A, notice: {
                        stores: [A.A],
                        element: E.A
                    }, predicate: () => t.canManageGuild && t.guild.features.has(eb.GuildFeatures.COMMUNITY) && !t.welcomeScreenEmpty && !t.guild.features.has(eb.GuildFeatures.GUILD_SERVER_GUIDE)
                };
            case eb.BEX.ROLE_SUBSCRIPTIONS:
                return eO(e_({}, eE), {
                    section: eb.BEX.ROLE_SUBSCRIPTIONS,
                    element: O.A,
                    type: c.Py.CUSTOM,
                    predicate: () => ey ? t.monetizationPredicate() && ((0, j.hA)(t.guild) || d.A.hasSeenCreatorOnboardingForGuild(t.guild.id)) : t.monetizationPredicate(),
                    newIndicatorDismissibleContentTypes: (0, _.aV)(t.guild) ? [l.M.SERVER_SUBSCRIPTION_SETTINGS_NEW_BADGE_TIER_TEMPLATE] : null
                });
            case eb.BEX.GUILD_PRODUCTS:
                return {
                    section: eb.BEX.GUILD_PRODUCTS, label: ex.intl.string(ex.t.X6h2gz), ariaLabel: ex.intl.string(ex.t.X6h2gz), element: x.A, predicate: () => t.monetizationPredicate() && (0, h.$)(t.guild.id, "guild_product_settings_predicate") && (0, j.hA)(t.guild)
                };
            case eb.BEX.ROLE_SUBSCRIPTIONS_STORE_PAGE:
                return {
                    section: eb.BEX.ROLE_SUBSCRIPTIONS_STORE_PAGE, impressionName: i.ImpressionNames.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_GUILD_SETTINGS, newIndicator: 2022 === new Date().getFullYear(), label: ex.intl.string(ex.t.ipTYsk), ariaLabel: ex.intl.string(ex.t.ipTYsk), element: v.A, predicate: () => t.monetizationPredicate() && (0, j.hA)(t.guild)
                };
            case eb.BEX.MEMBERS:
                return {
                    section: eb.BEX.MEMBERS, impressionName: i.ImpressionNames.GUILD_SETTINGS_MEMBERS, label: (0, r.jsx)(el.Q$, {}), ariaLabel: ex.intl.string(ex.t["9Oq93m"]), element: el.Ay, type: c.Py.CUSTOM, predicate: () => t.canAccessMembersPage, onClick: () => {
                        (0, el.N8)()
                    }
                };
            case eb.BEX.DELETE:
                return {
                    section: eb.BEX.DELETE, onClick() {
                        let e = N.default.getCurrentUser();
                        if (null == e) return;
                        let {
                            name: i
                        } = t.guild, l = () => {
                            S._.subscribeOnce(eb.jej.LAYER_POP_COMPLETE, () => {
                                T.A.deleteGuild(t.guild.id)
                            }), (0, o.jH)()
                        };
                        e.mfaEnabled ? (0, s.A)({
                            title: ex.intl.formatToPlainString(ex.t.us7mC1, {
                                name: i
                            }),
                            subtitle: ex.intl.format(ex.t["Zuo+Vd"], {
                                name: i
                            }),
                            confirmText: ex.intl.string(ex.t.l3hWP6),
                            onConfirm: l
                        }) : (0, a.mMO)(async () => {
                            let {
                                default: e
                            } = await n.e("45199").then(n.bind(n, 310482));
                            return t => (0, r.jsx)(e, eO(e_({}, t), {
                                onConfirm: l,
                                guildName: i
                            }))
                        })
                    }, label: ex.intl.string(ex.t.l3hWP6), ariaLabel: ex.intl.string(ex.t.l3hWP6), icon: (0, r.jsx)(a.ucK, {
                        size: "xs",
                        color: "currentColor"
                    }), variant: "destructive", predicate: () => t.isOwnerWithRequiredMfaLevel
                };
            case eb.BEX.LANDING:
            case eb.BEX.MEMBER_EDIT:
            case eb.BEX.MEMBER_TIMEOUT:
            case eb.BEX.MEMBER_KICK:
            case eb.BEX.MEMBER_BAN:
            case eb.BEX.CHANNELS:
            case eb.BEX.ROLE_EDIT:
            case eb.BEX.ROLE_PERMISSIONS:
            case eb.BEX.MEMBER_VERIFICATION:
            case eb.BEX.INTEGRATION_SETTINGS:
            case eb.BEX.SECURITY:
            case eb.BEX.AUDIT_LOG_FILTER:
            case eb.BEX.ROLE_SUBSCRIPTIONS_TIER_EDIT:
            case eb.BEX.VANITY_URL:
            case eb.BEX.INSTANT_INVITES:
            case eb.BEX.OVERVIEW:
            case eb.BEX.WEBHOOKS:
            case eb.BEX.EDIT_WEBHOOK:
            case eb.BEX.INTEGRATION_PLATFORM:
            case eb.BEX.LOBBIES_LINKED:
            case eb.BEX.EDIT_LINKED_LOBBY:
            case eb.BEX.CHANNELS_FOLLOWED:
            case eb.BEX.COMMUNITY_INTRO:
            case eb.BEX.ROLE_EDIT_REFRESH:
            case eb.BEX.ROLE_SUBSCRIPTIONS_ENABLE_MONETIZATION:
            case eb.BEX.ROLE_SUBSCRIPTIONS_BASIC:
            case eb.BEX.ROLE_SUBSCRIPTIONS_TIERS:
            case eb.BEX.ROLE_SUBSCRIPTIONS_PAYMENTS:
            case eb.BEX.ROLE_SUBSCRIPTIONS_EMOJIS:
            case eb.BEX.ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION:
                return null;
            default:
                (0, I.xb)(e)
        }
    }
}