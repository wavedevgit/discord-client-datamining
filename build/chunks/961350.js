/** Chunk was on web.js **/
/** chunk id: 961350, original params: e,t,n (module,exports,require) **/
"use strict";
let r, i;
n.r(t), n.d(t, {
    default: () => eU
}), n(321073), n(142703), n(65821);
var a, s = n(247775),
    o = n(80703),
    l = n(311907),
    c = n(562465),
    u = n(506774),
    d = n(73153),
    f = n(155718),
    p = n(421924),
    _ = n(15552),
    h = n(248415),
    m = n(53943),
    g = n(626584),
    E = n(620233),
    y = n(976860),
    b = n(918518),
    O = n(252919),
    v = n(954571),
    A = n(612181),
    I = n(728458),
    S = n(115036),
    T = n(536802),
    C = n(652215),
    N = n(204925);

function w(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let R = new g.A("AuthenticationStore"),
    P = "fingerprint",
    D = "analytics_installation",
    x = "user_id_cache",
    L = null,
    j = null,
    M = null,
    k = null,
    U = null,
    G = null,
    V = null,
    F = null,
    B = C.aUe.NONE,
    H = !1,
    Y = [],
    W = "",
    K = !1,
    z = null,
    q = !1,
    Z = !1,
    X = null,
    Q = null,
    J = !1,
    $ = !1,
    ee = [];

function et(e) {
    let t = null != s.getToken(),
        n = null != u.w.get(C.ilC);
    R.verbose(e, {
        tokenManagerHasToken: t,
        storageHasToken: n
    })
}

function en() {
    var e;
    let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    if (U = u.w.get(P), V = null != (e = u.w.get(D)) ? e : null, null != X) return X;
    let n = null != U ? U : s.getToken();
    !(0, y.m)() || !t && null != n || S.A.isHandoffAvailable() || er({
        withGuildExperiments: !0
    })
}

function er(e) {
    let {
        withGuildExperiments: t
    } = e, n = {}, r = v.default.getSuperPropertiesBase64();
    null != r && (n["X-Super-Properties"] = r), null != U && (n["X-Fingerprint"] = U), null != V && (n["X-Installation-ID"] = V), X = c.Bo.get({
        url: C.Rsh.EXPERIMENTS,
        query: {
            with_guild_experiments: t
        },
        headers: n,
        context: {
            location: (0, y.SB)()
        },
        retries: 3,
        oldFormErrors: !0,
        rejectWithError: !1
    }).then(e => {
        let {
            fingerprint: t,
            assignments: n,
            guild_experiments: r
        } = e.body;
        t && d.h.dispatch({
            type: "FINGERPRINT",
            fingerprint: t
        }), d.h.dispatch({
            type: "EXPERIMENTS_FETCH_SUCCESS",
            fingerprint: t,
            experiments: n,
            guildExperiments: r
        }), X = null, (0, p.hK)()
    }, () => {
        X = null, d.h.dispatch({
            type: "EXPERIMENTS_FETCH_FAILURE"
        })
    })
}

function ei() {
    G = U, U = null, u.w.remove(P)
}

function ea(e, t) {
    et("setAuthToken called."), (null == t || t !== L) && s.removeAnalyticsToken(), s.setToken(e, t)
}

function es(e) {
    F = e, s.setAnalyticsToken(e)
}

function eo() {
    return et("removeAuthToken called."), s.removeAnalyticsToken(), s.removeToken()
}

function el(e) {
    let {
        isPasswordAttempt: t
    } = e;
    B = C.aUe.LOGGING_IN, $ = $ || !0 === t
}

function ec(e) {
    let {
        isMultiAccount: t
    } = e;
    B = C.aUe.NONE, W = "", K = !1, z = null, i = null, r = null, t || (eh(), eo(), en(!1))
}

function eu() {
    B = C.aUe.NONE
}

function ed(e) {
    let {
        token: t
    } = e;
    B = C.aUe.NONE, ea(t), ei(), W = "", K = !1, z = null, i = null, eh(), J = !1
}

function ef(e) {
    let {
        error: t
    } = e;
    W = "", K = !1, z = null, i = null, eh(), B = null != (0, _.p)(t).date_of_birth ? C.aUe.LOGIN_AGE_GATE : C.aUe.NONE
}

function ep() {
    J = !0
}

function e_(e) {
    let {
        error: t
    } = e;
    W = "", K = !1, z = null, J = !1, i = null, B = null != (0, _.W)(t).date_of_birth ? C.aUe.LOGIN_AGE_GATE : C.aUe.NONE
}

function eh() {
    let e = [];
    null != z && e.push({
        type: "webauthn",
        challenge: z
    }), q && e.push({
        type: "totp"
    }), Z && e.push({
        type: "backup"
    }), K && e.push({
        type: "sms"
    }), ee = e
}

function em(e) {
    let {
        ticket: t,
        sms: n,
        webauthn: r,
        backup: a,
        totp: s,
        loginInstanceId: o
    } = e;
    null != t && (W = t, K = n, z = null != r ? r : null, Z = a, q = s, i = o, eh()), B = C.aUe.MFA_STEP
}

function eg() {
    B = C.aUe.LOGGING_IN_MFA
}

function eE(e) {
    B = C.aUe.ACCOUNT_SCHEDULED_FOR_DELETION, r = e.credentials
}

function ey(e) {
    B = C.aUe.ACCOUNT_DISABLED, r = e.credentials
}

function eb(e) {
    B = C.aUe.PASSWORD_RECOVERY_PHONE_VERIFICATION, r = e.credentials
}

function eO(e) {
    B = C.aUe.PHONE_IP_AUTHORIZATION, r = e.credentials
}

function ev(e) {
    let t = e.fingerprint;
    null == U ? null != t ? (v.default.track(C.HAw.USER_FINGERPRINT_CHANGED, {
        old_fingerprint: null != G ? (0, o.d)(G) : null,
        new_fingerprint: (0, o.d)(t)
    }), U = t, G = t, u.w.set(P, U)) : en() : null != t && U !== t && v.default.track(C.HAw.EXTERNAL_FINGERPRINT_DROPPED, {
        fingerprint: (0, o.d)(U),
        dropped_fingerprint: (0, o.d)(t)
    })
}

function eA(e) {
    let {
        installation: t
    } = e;
    if (null != V && V.length > 0) return !1;
    V = t, b.A.canUseInstallationId() && u.w.set(D, t)
}

function eI(e) {
    let {
        token: t
    } = e;
    ea(t), ei()
}

function eS(e) {
    var t;
    let {
        user: n,
        sessionId: r,
        authSessionIdHash: i,
        analyticsToken: a,
        auth: s,
        staticAuthSessionId: o,
        apexExperiments: l
    } = e;
    et("handleConnectionOpen called"), I.A.setUser(n.id, n.username, null != (t = n.email) ? t : void 0, (0, O.A)(n)), j = r, M = i, k = o, es(a), L = n.id, void 0 !== s && (Y = s.authenticator_types), u.w.set(x, n.id), (null == l ? void 0 : l.installation) != null && eA({
        type: "INSTALLATION_ID",
        installation: l.installation
    })
}

function eT(e) {
    var t;
    let {
        user: n,
        sessionId: r,
        analyticsToken: i,
        token: a
    } = e;
    I.A.setUser(n.id, n.username, null != (t = n.email) ? t : void 0, (0, O.A)(n)), j = r, F = i, ea(a, n.id), null != i && es(i), ei(), L = n.id, u.w.set(x, n.id)
}

function eC(e) {
    let {
        code: t
    } = e;
    et("handleConnectionClosed called with code ".concat(t, "."));
    let r = n(192308).hasModalOpen;
    if (4004 === t) {
        if (H || r(N.jc) || r(N.Uy)) return void eR();
        v.default.track(C.HAw.APP_USER_DEAUTHENTICATED, {
            user_id: u.w.get(x)
        }), eP(), setImmediate(() => (0, y.pX)(C.BVt.DEFAULT_LOGGED_OUT))
    }
}

function eN(e) {
    let {
        token: t,
        userId: n
    } = e;
    et("handleUpdateToken called"), ea(t, n), ei()
}

function ew(e) {
    let {
        authSessionIdHash: t
    } = e;
    null != t && (M = t)
}

function eR() {
    H = !0, eP(), d.h.wait(() => {
        (0, y.pX)(C.BVt.REGISTER)
    })
}

function eP(e) {
    var t;
    et("handleLogout called.");
    let n = eo();
    null != (t = null == e ? void 0 : e.isSwitchingAccount) && t || (n && ei(), en()), l.Ay.PersistedStore.clearAll({
        omit: ["InstallationManagerStore", "AgeGateStore", "NativePermissionsStore", "MultiAccountStore", "DraftStore", "OverlayStoreV2", "StreamerModeStore", "LoginRequiredActionStore", "LayoutStore", "OverlaySettingsStore", "ApexExperimentStore"],
        type: (null == e ? void 0 : e.isSwitchingAccount) ? "user-data-only" : "all"
    }), T.A.clearAll(), m.IU(), I.A.clearUser(), u.w.remove(x), L = null, j = null, B = (null == e ? void 0 : e.isSwitchingAccount) ? C.aUe.LOGGING_IN : C.aUe.NONE, W = "", z = null, K = !1, J = !1, $ = !1, eh()
}

function eD() {
    B = C.aUe.FORGOT_PASSWORD
}

function ex() {
    B = C.aUe.NONE
}

function eL(e) {
    let {
        user: t
    } = e;
    L = t.id, void 0 !== t.authenticator_types && (Y = t.authenticator_types), u.w.set(x, t.id)
}

function ej(e) {
    let {
        suspendedUserToken: t
    } = e;
    J = !1, Q = t, setImmediate(() => (0, y.pX)(C.BVt.ACCOUNT_STANDING))
}

function eM() {
    Q = null, B = C.aUe.NONE, eP(), setImmediate(() => (0, y.pX)(C.BVt.DEFAULT_LOGGED_OUT))
}
class ek extends(a = l.Ay.Store) {
    initialize() {
        var e;
        L = u.w.get(x), V = null != (e = u.w.get(D)) ? e : null, null == s.getToken() && (en(), (null == V || 0 === V.length) && (0, E.Tv)(null)), this.addChangeListener(() => (0, h.f)(L))
    }
    getLoginStatus() {
        return B
    }
    getId() {
        return L
    }
    getSessionId() {
        return j
    }
    getAuthSessionIdHash() {
        return M
    }
    getStaticAuthSessionId() {
        return k
    }
    getToken() {
        return (0, A.gf)()
    }
    isAuthenticated() {
        return (0, A.wR)()
    }
    getFingerprint() {
        return U
    }
    getInstallationForTracking() {
        return b.A.canUseInstallationId() ? V : null
    }
    getAnalyticsToken() {
        return null != F ? F : s.getAnalyticsToken()
    }
    getMFATicket() {
        return W
    }
    getMFAMethods() {
        return ee
    }
    getLoginInstanceId() {
        return i
    }
    hasTOTPEnabled() {
        return Y.includes(f.Wq.TOTP)
    }
    getCredentials() {
        if (null == r) throw Error("no credentials");
        return r
    }
    allowLogoutRedirect() {
        return !H
    }
    getSuspendedUserToken() {
        return Q
    }
    getIsPasswordlessActive() {
        return J
    }
    attemptedPasswordLogin() {
        return $
    }
}
w(ek, "displayName", "AuthenticationStore");
let eU = new ek(d.h, {
    CONNECTION_OPEN: eS,
    OVERLAY_INITIALIZE: eT,
    CONNECTION_CLOSED: eC,
    AUTH_SESSION_CHANGE: ew,
    LOGIN: el,
    LOGIN_SUCCESS: ed,
    LOGIN_FAILURE: ef,
    LOGIN_MFA_STEP: em,
    LOGIN_MFA: eg,
    LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION: eE,
    LOGIN_ACCOUNT_DISABLED: ey,
    LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION: eb,
    LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED: eO,
    LOGIN_RESET: ec,
    LOGIN_STATUS_RESET: eu,
    LOGIN_SUSPENDED_USER: ej,
    LOGOUT: eP,
    FINGERPRINT: ev,
    INSTALLATION_ID: eA,
    REGISTER_SUCCESS: eI,
    FORGOT_PASSWORD_REQUEST: eD,
    FORGOT_PASSWORD_SENT: ex,
    UPDATE_TOKEN: eN,
    EXPERIMENTS_FETCH: er,
    CURRENT_USER_UPDATE: eL,
    AGE_GATE_LOGOUT_UNDERAGE_NEW_USER: eR,
    CLOSE_SUSPENDED_USER: eM,
    PASSWORDLESS_FAILURE: e_,
    PASSWORDLESS_START: ep
}, d.A.Early)