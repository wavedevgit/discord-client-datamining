/** chunk id: 274184, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => X,
    bh: () => w
}), n(896048);
var r, i = n(989349),
    a = n.n(i),
    o = n(136722),
    s = n(311907),
    l = n(506774),
    c = n(73153),
    u = n(246605),
    d = n(927813),
    f = n(498642),
    p = n(71393),
    _ = n(576705),
    h = n(967198),
    m = n(287809),
    g = n(652215);

function E(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            E(e, t, n[t])
        })
    }
    return e
}

function b(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function O(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let v = {
        hiddenSurveys: {},
        surveyOverride: null,
        lastFetched: null,
        lastSeen: null,
        lastActionTriggered: null
    },
    A = v,
    I = !1,
    S = !1,
    T = {},
    C = null,
    N = !1,
    w = d.A.Millis.DAY,
    R = 10 * d.A.Millis.HOUR,
    P = 7;
var D = function(e) {
    return e.IS_OWNER = "is_owner", e.IS_ADMIN = "is_admin", e.IS_COMMUNITY = "is_community", e.GUILD_SIZE = "guild_size", e.IS_HUB = "is_hub", e.IS_VIEWING = "is_viewing", e.GUILD_PERMISSIONS = "guild_permissions", e.GUILD_SIZE_ALL = "guild_size_all", e
}(D || {});
let L = new Set(Object.values(D));

function x() {
    return null == A.lastFetched || Date.now() - A.lastFetched >= w
}

function M() {
    !N && (x() || null != A.surveyOverride) && (N = !0, (0, u.BC)(A.surveyOverride, !0))
}

function j(e) {
    return U(e) && k(e)
}

function k(e) {
    let {
        guild_requirements: t = [],
        guild_size: n = [null, null],
        guild_permissions: r = []
    } = e;
    if (0 === t.length) return !0;
    for (let e of t)
        if (!L.has(e)) return !1;
    let i = t.includes("guild_size_all"),
        a = !0;
    for (let s of p.A.getGuildsArray()) {
        if (i || t.includes("guild_size")) {
            let e = f.A.getMemberCount(s.id);
            if (null == e || null != n[0] && e < n[0] || null != n[1] && e > n[1]) {
                a = !1;
                continue
            }
        }
        if (t.includes("is_community") && !s.features.has(g.GuildFeatures.COMMUNITY) || t.includes("is_hub") && !s.features.has(g.GuildFeatures.HUB)) continue;
        if (t.includes("guild_permissions")) {
            if (0 === r.length) continue;
            let e = !1;
            for (let t of r) try {
                let n = o.iu(t);
                if (_.A.can(n, s)) {
                    e = !0;
                    break
                }
            } catch (e) {}
            if (!e) continue
        }
        let l = m.default.getCurrentUser(),
            c = (null == l ? void 0 : l.id) === s.ownerId,
            u = _.A.can(g.xBc.ADMINISTRATOR, s);
        if (t.includes("is_owner") && !c || t.includes("is_admin") && !u) continue;
        null == (T = null != T ? T : {})[e.key] && (T[e.key] = e);
        let d = h.A.getGuildId(),
            p = null != d && d === s.id;
        if ((!t.includes("is_viewing") || p) && !i) return !0
    }
    return !!i && !!a
}

function U(e) {
    return !0
}

function G(e) {
    let t = l.w.get(g.gT8);
    return null == t || a()().diff(t, "day") < e
}

function F(e) {
    let {
        survey: t,
        isActionTriggered: n
    } = e;
    N = !1, A.lastFetched = Date.now(), n && (A.lastActionTriggered = Date.now()), null == A.hiddenSurveys && (A.hiddenSurveys = {});
    let r = null != t,
        i = r && null == A.hiddenSurveys[t.key],
        a = r && j(t);
    G(P);
    let o = !1;
    C = i && a && !o ? t : null
}

function V(e) {
    let {
        id: t
    } = e;
    A.surveyOverride = t, null != t && delete A.hiddenSurveys[t], (0, u.BC)(A.surveyOverride, !0)
}

function B() {
    I = !0
}

function H() {
    S = !0
}

function Y(e) {
    let {
        key: t
    } = e;
    A.hiddenSurveys[t] = !0, C = null, T = null != T ? T : {}, delete T[t]
}

function W() {
    A.hiddenSurveys = {}
}

function K(e) {
    return !!j(e) || (C = null, !1)
}

function z() {
    let e = Object.values(T = null != T ? T : {})[0];
    return null != e && j(e) ? void F({
        type: "SURVEY_FETCHED",
        survey: e
    }) : null != C && void(C = null)
}

function q() {
    if (null != C && K(C)) return !1;
    z()
}

function Z() {
    A.lastSeen = Date.now()
}
class Q extends(r = s.Ay.PersistedStore) {
    initialize(e) {
        this.waitFor(f.A, p.A, _.A, h.A, m.default), A = null != e ? e : v, this.syncWith([h.A], q)
    }
    getState() {
        return A
    }
    getCurrentSurvey() {
        return x() ? null : C
    }
    getSurveyOverride() {
        return A.surveyOverride
    }
    getLastSeenTimestamp() {
        return A.lastSeen
    }
    shouldAllowSurveyAction() {
        var e;
        return Date.now() - (null != (e = A.lastActionTriggered) ? e : 0) >= R
    }
}
E(Q, "displayName", "SurveyStore"), E(Q, "persistKey", "SurveyStore"), E(Q, "migrations", [e => {
    let t = y({}, e);
    return delete t.validSurveys, delete t.currentSurvey, delete t.iosIsPushNotificationClicked, delete t.iosIsInviteShown, delete t.iosFirstRunDate, t
}, e => {
    var t;
    return O(y({}, e), {
        lastSeen: null != (t = e.lastSeen) ? t : null
    })
}, e => {
    var t;
    return O(y({}, e), {
        hiddenSurveys: null != (t = e.hiddenSurveys) ? t : {}
    })
}]);
let X = new Q(c.h, {
    CONNECTION_OPEN: M,
    CONNECTION_RESUMED: M,
    SURVEY_FETCHED: F,
    SURVEY_HIDE: Y,
    SURVEY_OVERRIDE: V,
    PUSH_NOTIFICATION_CLICK: B,
    DISPLAYED_INVITE_SHOW: H,
    LOGOUT: W,
    SURVEY_SEEN: Z
})