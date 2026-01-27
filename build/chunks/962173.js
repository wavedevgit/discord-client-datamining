/** Chunk was on web.js **/
/** chunk id: 962173, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => R
}), n(896048);
var r, i = n(311907),
    a = n(73153),
    o = n(77468),
    s = n(573648),
    l = n(806374),
    c = n(860689);

function u(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            u(e, t, n[t])
        })
    }
    return e
}

function f(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function p(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let _ = new Set([n(652215).fg2.CONTACTS]),
    h = !0,
    m = [],
    g = [],
    E = {},
    y = new Set,
    b = {},
    O = {},
    v = e => {
        m = e.filter(e => !_.has(e.type) && s.A.isSupported(e.type)), g = e.filter(e => _.has(e.type)), h = !1
    };

function A(e) {
    v(e.connectedAccounts.map(e => new l.A(e)))
}

function I(e) {
    e.local && null != e.accounts ? v(e.accounts.map(e => new l.A(p(d({}, e), {
        integrations: e.integrations.map(e => p(d({}, e), {
            guild: (0, c.yF)(p(d({}, e.guild), {
                features: []
            }))
        }))
    })))) : o.A.fetch()
}

function S(e) {
    E[e.integrationId] = e.joining
}

function T(e) {
    O[e.integrationId] = void 0 !== e.error ? e.error : ""
}

function C(e) {
    let {
        platformType: t,
        id: n,
        revoked: r,
        accessToken: i
    } = e, a = m.find(e => e.id === n && e.type === t);
    if (null == a) return !1;
    null != r && (a.revoked = r), null != i && (a.accessToken = i)
}

function N(e) {
    let {
        code: t,
        state: n,
        openid_params: r,
        provider: i
    } = e;
    o.A.callback(i, {
        code: t,
        state: n,
        openid_params: r
    })
}
class w extends(r = i.Ay.Store) {
    isJoining(e) {
        return E[e] || !1
    }
    joinErrorMessage(e) {
        return O[e]
    }
    isFetching() {
        return h
    }
    getAccounts() {
        return m
    }
    getLocalAccounts() {
        return g
    }
    getAccount(e, t) {
        return m.find(n => (null == e || n.id === e) && n.type === t)
    }
    getLocalAccount(e) {
        return g.find(t => t.type === e)
    }
    isSuggestedAccountType(e) {
        return b[e] || !1
    }
    addPendingAuthorizedState(e) {
        y.add(e)
    }
    deletePendingAuthorizedState(e) {
        y.delete(e)
    }
    hasPendingAuthorizedState(e) {
        return y.has(e)
    }
}
u(w, "displayName", "ConnectedAccountsStore");
let R = new w(a.h, {
    CONNECTION_OPEN: A,
    USER_CONNECTIONS_UPDATE: I,
    USER_CONNECTIONS_INTEGRATION_JOINING: S,
    USER_CONNECTION_UPDATE: C,
    USER_CONNECTIONS_INTEGRATION_JOINING_ERROR: T,
    USER_CONNECTIONS_CALLBACK: N
})