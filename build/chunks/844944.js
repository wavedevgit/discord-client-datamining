/** chunk id: 844944, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => Q
}), n(896048), n(321073);
var r, i = n(989349),
    a = n.n(i),
    o = n(311907),
    s = n(713402),
    l = n(73153),
    c = n(287809),
    u = n(927813),
    d = n(821124),
    f = n(513461),
    p = n(212455);

function _(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            _(e, t, n[t])
        })
    }
    return e
}

function m(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function g(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : m(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let E = "DELETED",
    y = new Map,
    b = {};

function O(e) {
    return b[e]
}

function v(e, t) {
    b[e] = t, y.set(e, a()())
}

function A(e, t, n) {
    if (t !== n && null != t) {
        if (t === f.B5.SUBMITTED) {
            let t = O(e);
            v(e, t + 1)
        }
        if (n === f.B5.SUBMITTED) {
            let t = O(e);
            v(e, Math.max(0, t - 1))
        }
    }
}

function I(e) {
    let {
        joinRequest: t
    } = e;
    k(t)
}
let S = !1;

function T() {
    S = !0
}

function C(e) {
    let {
        status: t,
        requests: n,
        total: r,
        guildId: i
    } = e;
    S = !1, t === f.B5.SUBMITTED && v(i, r), n.forEach(e => {
        k(e)
    })
}

function N() {
    S = !1
}
let w = e => "guild-join-request=".concat(e),
    R = (e, t) => "guild-".concat(e, "-").concat(t);

function P(e) {
    let t = [];
    return t.push(w(e.joinRequestId)), t.push(R(e.guildId, e.applicationStatus)), t
}
let D = new s.J(P, e => "".concat(e.joinRequestId)),
    L = new s.J(P, e => "".concat(e.joinRequestId)),
    x = new s.J(P, e => "".concat(e.actionedAt));

function M(e) {
    return D.get(e)
}

function j(e) {
    delete z[e], D.delete(e), L.delete(e), x.delete(e)
}

function k(e) {
    z[e.joinRequestId] = e, D.set(e.joinRequestId, e), (0, d.ar)(e.applicationStatus) && (x.delete(e.joinRequestId), L.set(e.joinRequestId, e)), (0, d.mf)(e.applicationStatus) && (L.delete(e.joinRequestId), x.set(e.joinRequestId, e))
}

function U(e) {
    var t;
    let {
        guildId: n,
        request: r
    } = e, i = (0, p.j)(r), a = c.default.getCurrentUser();
    if (null == a || i.userId === a.id) return !1;
    let o = null == (t = M(i.joinRequestId)) ? void 0 : t.applicationStatus;
    return A(n, i.applicationStatus, o), k(i), !0
}

function G(e) {
    let {
        id: t,
        guildId: n
    } = e, r = M(t);
    null != r && (A(n, E, r.applicationStatus), j(t))
}

function F(e) {
    let {
        guildId: t,
        action: n
    } = e;
    D.values(R(t, f.B5.SUBMITTED)).forEach(e => {
        k(g(h({}, e), {
            applicationStatus: n
        }))
    }), v(t, 0)
}
let V = {};

function B(e) {
    let {
        guildId: t,
        applicationTab: n
    } = e;
    n !== V[t] && (V[t] = n)
}
let H = {};

function Y(e) {
    var t;
    let {
        guildId: n,
        sortOrder: r
    } = e;
    if (r === H[n]) return;
    H[n] = r;
    let i = null != (t = V[n]) ? t : f.B5.SUBMITTED;
    "REVIEW_APPLICATION" !== i && ((0, d.mf)(i) && x.clear(), (0, d.ar)(i) && L.clear())
}
let W = {};

function K(e) {
    let {
        guildId: t,
        request: n
    } = e;
    W[t] = n
}
let z = {},
    q = 10 * u.A.Seconds.MINUTE;
class Z extends(r = o.Ay.Store) {
    initialize() {
        this.waitFor(c.default)
    }
    getRequest(e) {
        return z[e]
    }
    getRequests(e, t) {
        let n = R(e, t);
        return (0, d.mf)(t) ? x.values(n) : (0, d.ar)(t) ? L.values(n) : D.values(n)
    }
    getSubmittedGuildJoinRequestTotal(e) {
        return b[e]
    }
    isFetching() {
        return S
    }
    hasFetched(e) {
        if (!y.has(e)) return !1;
        let t = y.get(e);
        return null != t && a()().diff(t, "seconds") < q
    }
    getSelectedApplicationTab(e) {
        var t;
        let n = f.B5.SUBMITTED;
        return null != (t = V[e]) ? t : n
    }
    getSelectedSortOrder(e) {
        var t;
        return null != (t = H[e]) ? t : f._e.TIMESTAMP_DESC
    }
    getSelectedGuildJoinRequest(e) {
        let t = W[e];
        return null != t ? M(t.joinRequestId) : null
    }
}
_(Z, "displayName", "GuildJoinRequestStoreV2");
let Q = new Z(l.h, {
    GUILD_JOIN_REQUEST_BY_ID_FETCH_SUCCESS: I,
    GUILD_JOIN_REQUESTS_FETCH_SUCCESS: C,
    GUILD_JOIN_REQUESTS_FETCH_START: T,
    GUILD_JOIN_REQUESTS_FETCH_FAILURE: N,
    GUILD_JOIN_REQUESTS_BULK_ACTION: F,
    GUILD_JOIN_REQUEST_CREATE: U,
    GUILD_JOIN_REQUEST_UPDATE: U,
    GUILD_JOIN_REQUEST_DELETE: G,
    GUILD_JOIN_REQUESTS_SET_APPLICATION_TAB: B,
    GUILD_JOIN_REQUESTS_SET_SORT_ORDER: Y,
    GUILD_JOIN_REQUESTS_SET_SELECTED: K
})