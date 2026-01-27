/** Chunk was on web.js **/
/** chunk id: 555337, original params: e,t,n (module,exports,require) **/
"use strict";
let r, i, a, o, s, l, c, u, d, f;
n.d(t, {
    A: () => tt
}), n(896048), n(938796);
var p, _ = n(735438),
    h = n.n(_),
    m = n(989349),
    g = n.n(m),
    E = n(311907),
    y = n(562465),
    b = n(506774),
    O = n(73153),
    v = n(867051),
    A = n(837011),
    I = n(95701),
    S = n(260509),
    T = n(671759),
    C = n(427157),
    N = n(71393),
    w = n(287809),
    R = n(860689),
    P = n(661191),
    D = n(794967),
    L = n(310527),
    x = n(595818),
    M = n(652215),
    j = n(324580),
    k = n(124759);

function U(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function G(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            U(e, t, n[t])
        })
    }
    return e
}

function F(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function V(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : F(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let B = !0,
    H = ["name", "description", "icon", "splash", "banner", "homeHeader", "afkChannelId", "afkTimeout", "systemChannelId", "verificationLevel", "defaultMessageNotifications", "explicitContentFilter", "features", "systemChannelFlags", "preferredLocale", "rulesChannelId", "safetyAlertsChannelId", "ownerConfiguredContentLevel", "discoverySplash", "publicUpdatesChannelId", "premiumProgressBarEnabled"],
    Y = ["brandColorPrimary", "description", "icon", "name", "traits", "visibility", "gameApplicationIds", "customBanner", "tag", "badge", "badgeColorPrimary", "badgeColorSecondary"],
    W = new Set(["icon", "splash", "banner", "discoverySplash", "homeHeader"]),
    K = !1,
    z = M.XlH.CLOSED,
    q = {},
    Z = null,
    Q = !1,
    X = !1,
    J = !1,
    $ = null,
    ee = null,
    et = null,
    en = 0,
    er = M.EkJ.NONE,
    ei = null,
    ea = {
        primaryCategoryId: j.ig,
        secondaryCategoryIds: [],
        keywords: [],
        emojiDiscoverabilityEnabled: B,
        partnerActionedTimestamp: null,
        partnerApplicationTimestamp: null,
        isPublished: !1,
        reasonsToJoin: [],
        socialLinks: [],
        about: ""
    },
    eo = !1,
    es = ea,
    el = ea,
    ec = null,
    eu = 0,
    ed = null,
    ef = null,
    ep = null;

function e_(e) {
    if (null == s || null == o || o.id !== e) return !1;
    let t = N.A.getGuild(e);
    return null != t && (o === s ? s = o = t : o = t, !0)
}

function eh(e) {
    K = !0, em(e)
}

function em(e) {
    var t;
    let {
        guildId: n,
        section: i,
        subsection: a,
        location: d
    } = e, p = N.A.getGuild(n);
    if (null == p) return eg();
    let _ = A.A.getProfile(n);
    o = s = p, l = c = _, J = X, ee = $, z = M.XlH.OPEN, q = {}, Z = null, u = P.default.castGuildIdAsEveryoneGuildRoleId(n), er = s.mfaLevel, el = es, f = null, ei = d, ey({
        section: null != (t = null != i ? i : r) ? t : (0, x.x)(),
        subsection: null != a ? a : null
    })
}

function eg() {
    K = !1, z = M.XlH.CLOSED, o = s = null, Q = !1, J = !1, ee = null, et = null, en = 0, ec = null, ef = null, ep = null, r = null, i = null, a = null, er = M.EkJ.NONE, d = void 0
}

function eE(e) {
    let {
        state: t
    } = e;
    return d = t, !1
}

function ey(e) {
    if (null == s) return !1;
    let t = r;
    if (r = e.section, i = e.subsection, r === M.BEX.INSTANT_INVITES || r === M.BEX.INVITES) y.Bo.get({
        url: M.Rsh.GUILD_INSTANT_INVITES(s.id),
        oldFormErrors: !0,
        rejectWithError: !0
    }).then(e => {
        O.h.dispatch({
            type: "GUILD_SETTINGS_LOADED_INVITES",
            invites: e.body
        })
    });
    else if (r === M.BEX.INTEGRATIONS || r === M.BEX.ROLES) {
        if (u = null, t !== e.section) return ez(e)
    } else r === M.BEX.MEMBERS ? u = (0, S.af)(s) : r === M.BEX.VANITY_URL ? (0, L.Je)(s.id) : r === M.BEX.SAFETY && O.h.dispatch({
        type: "GUILD_SETTINGS_SAFETY_SET_SUBSECTION",
        subsection: null == i ? M.nd0.SAFETY_OVERVIEW : i
    })
}

function eb(e) {
    a = e.searchQuery
}

function eO(e) {
    let {
        guildId: t
    } = e;
    q = {};
    let n = N.A.getGuild(t);
    null != n && (o = s = n)
}

function ev() {
    z = M.XlH.SUBMITTING, q = {}
}

function eA() {
    z = M.XlH.OPEN
}

function eI(e) {
    var t;
    z = M.XlH.OPEN, r = null != r ? r : (0, x.x)(), i = null, q = null != (t = e.errors) ? t : {}
}

function eS() {
    let e = s;
    if (null == e) return !1;
    H.some(t => e[t] !== o[t]) || (s = o)
}

function eT(e) {
    if (null == s) return !1;
    H.forEach(t => {
        if (null != s && e.hasOwnProperty(t)) {
            var n;
            s = (0, v.hZ)(s, t, null != (n = e[t]) ? n : null)
        }
    }), eS()
}

function eC(e) {
    let {
        guildId: t
    } = e;
    if (null == c || null == s || s.id !== t) return !1;
    Y.forEach(t => {
        if (null != c && e.hasOwnProperty(t)) {
            let n = e[t];
            void 0 !== n && (c = V(G({}, c), {
                [t]: n
            }))
        }
    })
}

function eN(e) {
    var t;
    return new T.A({
        code: e.code,
        temporary: e.temporary,
        revoked: e.revoked,
        inviter: null != e.inviter ? new C.A(e.inviter) : null,
        channel: (0, I.OY)(e.channel),
        guild: null != e.guild ? (0, R.DY)(e.guild) : null,
        uses: e.uses,
        maxUses: e.max_uses,
        maxAge: e.max_age,
        createdAt: g()(null != (t = e.created_at) ? t : void 0),
        flags: e.flags,
        roles: e.roles
    })
}

function ew(e) {
    ef = e.invites.reduce((e, t) => (e[t.code] = eN(t), e), {})
}

function eR(e) {
    ef = G({}, ef), delete ef[e.code]
}

function eP(e) {
    ef = V(G({}, ef), {
        [e.invite.code]: eN(e.invite)
    })
}

function eD(e) {
    ec = e.bans.reduce((e, t) => (null != t.user && null != t.user.id && e.set(t.user.id, t), e), new Map), eu++
}

function eL(e) {
    let {
        bans: t,
        guildId: n
    } = e;
    (ed !== n || null == ec) && (ed = n, ec = new Map), ec = t.reduce((e, t) => (null != t.user && null != t.user.id && e.set(t.user.id, t), e), ec), eu++
}

function ex(e) {
    let {
        user: t,
        guildId: n
    } = e;
    if (null == ec || null == s || s.id !== n) return !1;
    ec.set(t.id, {
        user: t,
        reason: null
    }), eu++
}

function eM(e) {
    let {
        user: t,
        guildId: n
    } = e;
    if (null == ec || null == s || s.id !== n) return !1;
    ec.delete(t.id), eu++
}

function ej(e) {
    if (null == s || s.id !== e.guild.id) return !1;
    {
        let e = N.A.getGuild(s.id);
        if (null == e) return !1;
        if (l = A.A.getProfile(s.id), r !== M.BEX.PROFILE && r !== M.BEX.TAG && (c = l), r === M.BEX.PROFILE) {
            o = e, s = e;
            return
        }
        let t = o = e,
            n = G({}, s);
        H.forEach(r => {
            if (!W.has(r) && ("rulesChannelId" !== r && "publicUpdatesChannelId" !== r || n[r] !== k.SP) && "features" !== r) {
                if ("ownerConfiguredContentLevel" === r) {
                    t = (0, v.hZ)(t, r, e[r]);
                    return
                }
                t = (0, v.hZ)(t, r, n[r])
            }
        }), s = t
    }
}

function ek(e) {
    if (null == s || s.id !== e.guild.id) return !1;
    eg()
}

function eU(e) {
    let {
        roleId: t
    } = e;
    u = null != t ? t : null
}

function eG(e) {
    let {
        guildId: t
    } = e;
    if (!e_(t)) return !1
}

function eF(e) {
    let {
        guildId: t
    } = e;
    if (!e_(t)) return !1
}

function eV(e) {
    let {
        guildId: t,
        roleId: n
    } = e;
    if (!e_(t)) return !1;
    u === n && (u = null)
}

function eB(e) {
    Q = !0, X = J = e.enabled, $ = ee = e.channelId
}

function eH(e) {
    let {
        guildId: t,
        enabled: n,
        channelId: r
    } = e;
    if (null == s || s.id !== t) return !1;
    J = n, ee = r
}

function eY(e) {
    var t;
    et = null != (t = e.code) ? t : null, en = e.uses
}

function eW(e) {
    let {
        level: t
    } = e;
    er = t
}

function eK(e) {
    ep = e.integrations
}

function ez(e) {
    if (null == s || z !== M.XlH.OPEN || "GUILD_INTEGRATIONS_UPDATE" === e.type && e.guildId !== s.id) return !1;
    (0, D.c)(s.id)
}

function eq(e) {
    let {
        guildId: t
    } = e;
    if (null == s || t !== s.id) return !1;
    s = (0, v.hZ)(s, "features", new Set([...s.features, M.GuildFeatures.PIN_PERMISSION_MIGRATION_COMPLETE]))
}

function eZ(e) {
    let {
        guildId: t
    } = e;
    if (null == s || t !== s.id) return !1;
    s = (0, v.hZ)(s, "features", new Set([...s.features, M.GuildFeatures.BYPASS_SLOWMODE_PERMISSION_MIGRATION_COMPLETE]))
}

function eQ(e) {
    var t, n, r, i, a, o, l, c, u, d;
    let {
        guildId: f,
        metadata: p
    } = e;
    null != s && f === s.id && (!1 === eo && (eo = !0), el = es = {
        primaryCategoryId: null != (t = p.primaryCategoryId) ? t : j.ig,
        secondaryCategoryIds: null != (n = p.secondaryCategoryIds) ? n : [],
        keywords: null != (r = p.keywords) ? r : [],
        emojiDiscoverabilityEnabled: null != (i = p.emojiDiscoverabilityEnabled) ? i : B,
        partnerActionedTimestamp: null != (a = p.partnerActionedTimestamp) ? a : null,
        partnerApplicationTimestamp: null != (o = p.partnerApplicationTimestamp) ? o : null,
        isPublished: null != (l = p.isPublished) && l,
        reasonsToJoin: null != (c = p.reasonsToJoin) ? c : [],
        socialLinks: null != (u = p.socialLinks) ? u : [],
        about: null != (d = p.about) ? d : ""
    }, q = {})
}

function eX() {
    es = el = ea
}

function eJ(e) {
    let {
        slug: t
    } = e;
    f = t
}

function e$(e) {
    let {} = e;
    f = null
}

function e0(e) {
    let {
        guildId: t,
        categoryId: n
    } = e;
    null != s && t === s.id && (el = V(G({}, el), {
        secondaryCategoryIds: [...el.secondaryCategoryIds, n]
    }), es = V(G({}, es), {
        secondaryCategoryIds: [...es.secondaryCategoryIds, n]
    }))
}

function e1(e) {
    let t, {
        guildId: n,
        categoryId: r
    } = e;
    if (null == s || n !== s.id) return;
    let i = el.secondaryCategoryIds.indexOf(r); - 1 !== i && ((t = [...el.secondaryCategoryIds]).splice(i, 1), el = V(G({}, el), {
        secondaryCategoryIds: t
    })), -1 !== (i = es.secondaryCategoryIds.indexOf(r)) && ((t = [...es.secondaryCategoryIds]).splice(i, 1), es = V(G({}, es), {
        secondaryCategoryIds: t
    }))
}

function e2(e) {
    let {
        guildId: t,
        errors: n
    } = e;
    null != s && t === s.id && (q = null != n ? n : {})
}

function e3(e) {
    let {
        guildId: t,
        primaryCategoryId: n,
        keywords: r,
        emojiDiscoverabilityEnabled: i,
        isPublished: a,
        reasonsToJoin: o,
        socialLinks: l,
        about: c
    } = e;
    null != s && t === s.id && (el = V(G({}, el), {
        primaryCategoryId: null != n ? n : el.primaryCategoryId,
        keywords: null != r ? r : el.keywords,
        emojiDiscoverabilityEnabled: null != i ? i : el.emojiDiscoverabilityEnabled,
        isPublished: null != a ? a : el.isPublished,
        reasonsToJoin: null != o ? o : el.reasonsToJoin,
        socialLinks: null != l ? l : el.socialLinks,
        about: null != c ? c : el.about
    }))
}

function e6(e) {
    let {
        guildId: t,
        errors: n
    } = e;
    null != s && t === s.id && (q = null != n ? n : {})
}

function e4(e) {
    let {
        profile: t
    } = e;
    t.id === (null == s ? void 0 : s.id) && (l = c = t)
}

function e5(e) {
    let {
        guildId: t
    } = e;
    if (null == s || s.id !== t) return !1;
    Z = null
}

function e7(e) {
    let {
        profile: t
    } = e;
    if ((null == c ? void 0 : c.id) == null || !e_(c.id)) return !1;
    t.id === (null == s ? void 0 : s.id) && (l = c = t, Z = null)
}

function e8(e) {
    let {
        guildId: t,
        error: n
    } = e;
    if (null == s || s.id !== t) return !1;
    Z = n
}

function e9(e) {
    let {
        guildId: t
    } = e;
    if ((null == c ? void 0 : c.id) == null || !e_(c.id)) return !1;
    t === (null == s ? void 0 : s.id) && (l = c = A.A.getProfile(t), Z = null)
}
class te extends(p = E.Ay.Store) {
    initialize() {
        this.waitFor(N.A, A.A, w.default)
    }
    getMetadata() {
        return el
    }
    widgetHasChanges() {
        return !1 !== Q && (J !== X || ee !== $)
    }
    hasChanges() {
        return !h().isEqual(s, o) || !h().isEqual(el, es) || !h().isEqual(c, l) || this.widgetHasChanges()
    }
    isOpen() {
        return K
    }
    getSavedRouteState() {
        return d
    }
    getSection() {
        return r
    }
    showNotice() {
        return this.hasChanges()
    }
    getGuildId() {
        return null != s ? s.id : null
    }
    showPublicSuccessModal() {
        return !b.w.get(k.wX)
    }
    getGuild() {
        return s
    }
    getGuildProfile() {
        return c
    }
    getWidget() {
        return {
            enabled: J,
            channelId: ee
        }
    }
    isSubmitting() {
        return z === M.XlH.SUBMITTING
    }
    isGuildMetadataLoaded() {
        return eo
    }
    getErrors() {
        return q
    }
    getError(e) {
        var t;
        return null != (t = q[e]) ? t : null
    }
    getProfileError() {
        return Z
    }
    getSelectedRoleId() {
        return u
    }
    getSlug() {
        return f
    }
    getBans() {
        return [ec, eu]
    }
    getProps() {
        return {
            submitting: this.isSubmitting(),
            integrations: ep,
            section: r,
            subsection: i,
            errors: q,
            guild: s,
            bans: ec,
            bansVersion: eu,
            invites: ef,
            selectedRoleId: u,
            fetchedEmbed: Q,
            embedEnabled: J,
            embedChannelId: ee,
            mfaLevel: er,
            searchQuery: a,
            vanityURLCode: et,
            vanityURLUses: en,
            originalGuild: o,
            hasChanges: this.hasChanges(),
            guildMetadata: el,
            analyticsLocation: ei,
            isGuildMetadataLoaded: eo,
            originalProfile: l,
            profile: c
        }
    }
}
U(te, "displayName", "GuildSettingsStore");
let tt = new te(O.h, __OVERLAY__ ? {} : {
    GUILD_SETTINGS_INIT: em,
    GUILD_SETTINGS_OPEN: eh,
    GUILD_SETTINGS_CLOSE: eg,
    GUILD_SETTINGS_UPDATE: eT,
    GUILD_SETTINGS_PROFILE_UPDATE: eC,
    GUILD_SETTINGS_CANCEL_CHANGES: eO,
    GUILD_SETTINGS_SAVE_ROUTE_STACK: eE,
    GUILD_SETTINGS_SUBMIT: ev,
    GUILD_SETTINGS_SUBMIT_SUCCESS: eA,
    GUILD_SETTINGS_SUBMIT_FAILURE: eI,
    GUILD_SETTINGS_SET_SECTION: ey,
    GUILD_SETTINGS_SET_SEARCH_QUERY: eb,
    GUILD_SETTINGS_LOADED_BANS: eD,
    GUILD_SETTINGS_LOADED_BANS_BATCH: eL,
    GUILD_SETTINGS_LOADED_INVITES: ew,
    GUILD_SETTINGS_SET_WIDGET: eB,
    GUILD_SETTINGS_SET_VANITY_URL: eY,
    GUILD_SETTINGS_SET_MFA_SUCCESS: eW,
    GUILD_SETTINGS_ROLE_SELECT: eU,
    GUILD_SETTINGS_LOADED_INTEGRATIONS: eK,
    GUILD_SETTINGS_PIN_PERMISSION_MIGRATED: eq,
    GUILD_SETTINGS_SLOWMODE_PERMISSION_MIGRATED: eZ,
    GUILD_BAN_ADD: ex,
    GUILD_BAN_REMOVE: eM,
    GUILD_ROLE_CREATE: eG,
    GUILD_ROLE_UPDATE: eF,
    GUILD_ROLE_DELETE: eV,
    GUILD_UPDATE: ej,
    GUILD_DELETE: ek,
    GUILD_PROFILE_FETCH_SUCCESS: e4,
    GUILD_PROFILE_UPDATE: e5,
    GUILD_PROFILE_UPDATE_SUCCESS: e7,
    GUILD_PROFILE_UPDATE_FAILURE: e8,
    GUILD_PROFILE_UPDATE_VISIBILITY: e5,
    GUILD_PROFILE_UPDATE_VISIBILITY_SUCCESS: e9,
    GUILD_PROFILE_UPDATE_VISIBILITY_FAILURE: e8,
    USER_CONNECTIONS_UPDATE: ez,
    GUILD_INTEGRATIONS_UPDATE: ez,
    INSTANT_INVITE_REVOKE_SUCCESS: eR,
    INSTANT_INVITE_CREATE_SUCCESS: eP,
    GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER: eQ,
    GUILD_DISCOVERY_METADATA_FETCH_FAIL: eX,
    GUILD_DISCOVERY_CATEGORY_ADD: e0,
    GUILD_DISCOVERY_CATEGORY_DELETE: e1,
    GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL: e2,
    GUILD_UPDATE_DISCOVERY_METADATA: e3,
    GUILD_UPDATE_DISCOVERY_METADATA_FAIL: e6,
    GUILD_DISCOVERY_SLUG_FETCH_SUCCESS: eJ,
    GUILD_DISCOVERY_SLUG_FETCH_FAIL: e$,
    GUILD_SETTINGS_WIDGET_UPDATE: eH
})