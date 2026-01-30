/** chunk id: 539916, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Bu: () => y,
    D1: () => g,
    Ii: () => M,
    Kd: () => E,
    Km: () => I,
    ME: () => O,
    Mc: () => S,
    QY: () => f,
    Q_: () => d,
    SA: () => C,
    SD: () => v,
    Sq: () => L,
    Uh: () => w,
    a5: () => T,
    fs: () => _,
    hv: () => R,
    iD: () => p,
    kq: () => u,
    n4: () => j,
    pA: () => h,
    qC: () => b,
    sd: () => m,
    tb: () => P,
    vK: () => x,
    wZ: () => A
}), n(228524), n(896048), n(747238), n(321073);
var r = n(812729),
    i = n.n(r),
    a = n(240248),
    o = n(652215),
    s = n(985018);

function l(e, t) {
    if (null == e) return {};
    var n, r, i, a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a
    }
    if (a = c(e, t), Object.getOwnPropertySymbols)
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
}

function c(e, t) {
    if (null == e) return {};
    var n, r, i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i
}
let u = 100,
    d = 50,
    f = 100,
    p = 15,
    _ = 50,
    h = 10,
    m = 100,
    g = 4,
    E = 1,
    y = 13;
var b = function(e) {
        return e[e.CUSTOMIZE = 0] = "CUSTOMIZE", e[e.BROWSE = 1] = "BROWSE", e
    }({}),
    O = function(e) {
        return e[e.MULTIPLE_CHOICE = 0] = "MULTIPLE_CHOICE", e[e.DROPDOWN = 1] = "DROPDOWN", e
    }({}),
    v = function(e) {
        return e[e.ONBOARDING_DEFAULT = 0] = "ONBOARDING_DEFAULT", e[e.ONBOARDING_ADVANCED = 1] = "ONBOARDING_ADVANCED", e
    }({}),
    A = function(e) {
        return e[e.APPLICATION = 0] = "APPLICATION", e[e.PROVIDER_CONNECTED_ACCOUNT = 1] = "PROVIDER_CONNECTED_ACCOUNT", e
    }({});

function I(e) {
    if (e.options.length > 0) return !1;
    let t = S(),
        {
            id: n
        } = t,
        r = l(t, ["id"]),
        {
            id: a
        } = e,
        o = l(e, ["id"]);
    return i()(r, o)
}

function S() {
    return {
        id: String(Date.now()),
        title: s.intl.string(s.t.vY91C9),
        options: [],
        singleSelect: !1,
        required: !1,
        inOnboarding: !0,
        type: 0
    }
}

function T(e) {
    return {
        id: String(Date.now()),
        title: "",
        options: [],
        singleSelect: !1,
        required: !1,
        inOnboarding: e,
        type: 0
    }
}

function C(e) {
    return {
        id: e.id,
        options: e.options.map(e => {
            var t, n, r;
            return {
                id: e.id,
                channel_ids: e.channelIds,
                role_ids: e.roleIds,
                emoji: e.emoji,
                emoji_id: null == (t = e.emoji) ? void 0 : t.id,
                emoji_name: null == (n = e.emoji) ? void 0 : n.name,
                emoji_animated: null == (r = e.emoji) ? void 0 : r.animated,
                title: e.title,
                description: e.description
            }
        }),
        title: e.title,
        single_select: e.singleSelect,
        disabled: e.disabled,
        required: e.required,
        in_onboarding: e.inOnboarding,
        type: e.type
    }
}

function N(e) {
    return {
        id: e.id,
        options: e.options.map(e => {
            var t;
            return {
                id: e.id,
                channelIds: e.channel_ids,
                roleIds: e.role_ids,
                emoji: e.emoji,
                title: e.title,
                description: null != (t = e.description) ? t : ""
            }
        }),
        title: e.title,
        singleSelect: e.single_select,
        disabled: e.disabled,
        required: e.required,
        inOnboarding: e.in_onboarding,
        type: e.type
    }
}

function w(e) {
    var t, n, r, i;
    return {
        prompts: e.prompts.map(N),
        defaultChannelIds: e.default_channel_ids,
        responses: null != (t = e.responses) ? t : [],
        mode: e.mode,
        enabled: e.enabled,
        onboardingPromptsSeen: null != (n = e.onboarding_prompts_seen) ? n : {},
        onboardingResponsesSeen: null != (r = e.onboarding_responses_seen) ? r : {},
        belowRequirements: e.below_requirements,
        connections: null != (i = e.connections) ? i : []
    }
}

function R(e) {
    return null == e || null == e.id && null == e.name
}
let P = new Set([o.fg2.PLAYSTATION_STAGING, o.fg2.CONTACTS, o.fg2.DOMAIN, o.fg2.TWITTER_LEGACY, o.fg2.MASTODON, o.fg2.INSTAGRAM, o.fg2.LEAGUE_OF_LEGENDS, o.fg2.SKYPE]),
    D = Object.values(o.fg2).filter(e => !P.has(e));

function L(e) {
    return 0 === e.connection_type ? "app:".concat(e.application_id) : "provider:".concat(e.provider_id)
}

function x(e) {
    let [t, n] = e.split(":");
    return "app" === t && void 0 !== n && "" !== n ? {
        type: 0,
        applicationId: n
    } : "provider" === t && void 0 !== n && "" !== n ? {
        type: 1,
        providerId: n
    } : null
}

function M(e) {
    let t = [];
    return 0 !== e.connection_type && 1 !== e.connection_type ? t.push("Invalid connection type") : (0 === e.connection_type ? ((0, a.uJ)(e.application_id) && t.push("Application ID is required for application connections"), (0, a.uJ)(e.provider_id) || t.push("Platform ID not allowed for application connections")) : 1 === e.connection_type && ((0, a.uJ)(e.provider_id) ? t.push("Platform ID is required for platform connections") : D.includes(e.provider_id) || t.push("Invalid platform ID"), (0, a.uJ)(e.application_id) || t.push("Application ID not allowed for platform connections")), null != e.description && e.description.length > m && t.push("Description must be ".concat(m, " characters or less"))), t
}

function j(e) {
    let t = [],
        n = new Set;
    for (let [r, i] of e.entries()) {
        let e = M(i);
        t.push(...e.map(e => "Connection ".concat(r + 1, ": ").concat(e)));
        let a = L(i);
        n.has(a) && t.push("Duplicate connection configuration"), n.add(a)
    }
    return t
}