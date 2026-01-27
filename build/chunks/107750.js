/** Chunk was on web.js **/
/** chunk id: 107750, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    E$: () => v,
    VR: () => C,
    ZH: () => I,
    f0: () => T,
    iD: () => b,
    oG: () => A,
    tB: () => y,
    tO: () => O,
    v7: () => S
}), n(142703);
var r = n(562465),
    i = n(451988),
    a = n(73153),
    o = n(927813),
    s = n(25171),
    l = n(723702),
    c = n(210528),
    u = n(272984),
    d = n(652215);

function f(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            f(e, t, n[t])
        })
    }
    return e
}

function _(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function h(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let m = 5e3,
    g = 5e3;

function E(e, t, n, r) {
    let a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
    return e(r = h(p({}, r), {
        headers: {
            authorization: "Bearer ".concat(n)
        }
    })).then(e => 202 === e.status ? Promise.reject(e) : e).catch(n => {
        let o = !0 !== r.onlyRetryOnAuthorizationErrors && 202 === n.status;
        return (401 === n.status || o) && a > 0 ? (202 === n.status ? (0, i.BK)(m) : Promise.resolve()).then(() => b(t)).then(n => {
            let {
                body: {
                    access_token: i
                }
            } = n;
            return E(e, t, i, r, a - 1)
        }).then(e => new Promise(t => setImmediate(() => t(e)))) : Promise.reject(n)
    })
}
let y = {
    get: E.bind(null, r.Bo.get),
    put: E.bind(null, r.Bo.put)
};

function b(e) {
    return r.Bo.get({
        url: d.Rsh.CONNECTION_ACCESS_TOKEN(d.fg2.SPOTIFY, e),
        oldFormErrors: !0,
        rejectWithError: !1
    }).catch(t => {
        var n;
        if ((null == (n = t.body) ? void 0 : n.code) === d.t02.CONNECTION_REVOKED) a.h.dispatch({
            type: "SPOTIFY_ACCOUNT_ACCESS_TOKEN_REVOKE",
            accountId: e
        });
        else if (429 === t.status) {
            let n = t.headers["retry-after"] * o.A.Millis.SECOND,
                r = isNaN(n) || 0 === n ? g : n;
            return (0, i.BK)(r).then(() => b(e))
        }
        return Promise.reject(t)
    }).then(t => {
        let {
            access_token: n
        } = t.body;
        return a.h.dispatch({
            type: "SPOTIFY_ACCOUNT_ACCESS_TOKEN",
            accountId: e,
            accessToken: n
        }), t
    })
}

function O(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2;
    return y.put(e, t, {
        url: u.RQ.NOTIFICATIONS_PLAYER,
        query: {
            connection_id: n
        }
    }).catch(a => r <= 0 ? Promise.reject(a) : (0, i.BK)(m).then(() => O(e, t, n, r - 1)))
}

function v(e, t) {
    return y.get(e, t, {
        url: u.RQ.PROFILE
    }).then(t => (a.h.dispatch({
        type: "SPOTIFY_PROFILE_UPDATE",
        accountId: e,
        isPremium: "premium" === t.body.product
    }), t))
}

function A(e, t) {
    return y.get(e, t, {
        url: u.RQ.PLAYER_DEVICES
    }).then(t => (t.body && a.h.dispatch({
        type: "SPOTIFY_SET_DEVICES",
        accountId: e,
        devices: t.body.devices
    }), t))
}

function I(e, t, n, r) {
    let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
        o = u.RQ.PLAYER_OPEN(r, n, !1),
        {
            deviceId: s,
            position: l,
            contextUri: c,
            repeat: d
        } = i;
    return y.put(e, t, {
        url: u.RQ.PLAYER_PLAY,
        query: {
            device_id: s
        },
        body: {
            context_uri: null != c ? c : void 0,
            uris: null == c ? [o] : void 0,
            offset: null != c ? {
                uri: o
            } : void 0,
            position_ms: null != l ? l : 0
        }
    }).then(n => null == d ? n : y.put(e, t, {
        url: u.RQ.PLAYER_REPEAT,
        query: {
            device_id: s,
            state: d ? "context" : "off"
        }
    })).then(e => (a.h.dispatch({
        type: "SPOTIFY_PLAYER_PLAY",
        id: n,
        position: null != l ? l : 0
    }), e))
}

function S(e, t) {
    return y.put(e, t, {
        url: u.RQ.PLAYER_PAUSE
    }).then(e => (a.h.dispatch({
        type: "SPOTIFY_PLAYER_PAUSE"
    }), e))
}

function T() {
    !c.A.isProtocolRegistered() && (0, l.isDesktop)() && s.A.isProtocolRegistered(u.gY).then(e => {
        a.h.dispatch({
            type: "SPOTIFY_SET_PROTOCOL_REGISTERED",
            isRegistered: e
        })
    })
}

function C(e, t) {
    a.h.dispatch({
        type: "SPOTIFY_SET_ACTIVE_DEVICE",
        accountId: e,
        deviceId: t
    })
}