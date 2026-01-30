/** chunk id: 546183, original params: e,t,n (module,exports,require) **/
"use strict";
n.r(t), n.d(t, {
    FetchState: () => u,
    default: () => A
}), n(896048), n(321073);
var r, i = n(311907),
    a = n(73153),
    o = n(734057),
    s = n(134861),
    l = n(320501);

function c(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
var u = function(e) {
    return e.NOT_FETCHED = "NOT_FETCHED", e.FETCHING = "FETCHING", e.FETCHED = "FETCHED", e
}({});
let d = new Map,
    f = [],
    p = [],
    _ = "NOT_FETCHED",
    h = new Map;

function m() {
    _ = "FETCHING", h.clear()
}

function g(e) {
    h.set(e.applicationId, "FETCHING")
}

function E(e) {
    h.set(e.applicationId, "FETCHED"), e.tokens.forEach(e => {
        f = f.filter(t => t.id !== e.id), d.set(e.application.id, e), f.push(e), null == e.application.parent_id && p.push(e)
    })
}

function y(e) {
    _ = "FETCHED", h.clear(), d = new Map(e.tokens.map(e => [e.application.id, e])), p = (f = e.tokens).filter(e => {
        let {
            application: t
        } = e;
        return null == t.parent_id
    })
}

function b(e) {
    let {
        id: t,
        application: n,
        scopes: r
    } = e, i = d.get(n.id);
    null != i && (f = f.filter(e => {
        let {
            application: t
        } = e;
        return t.id !== i.application.id
    }), p = p.filter(e => {
        let {
            application: t
        } = e;
        return t.id !== i.application.id
    }));
    let a = {
        id: t,
        application: n,
        scopes: r
    };
    d.set(a.application.id, a), f = [...f, a], null == a.application.parent_id && (p = [...p, a])
}

function O(e) {
    let {
        id: t,
        applicationId: n
    } = e, r = d.get(n);
    if (null == r || r.id !== t) return !1;
    d.delete(r.application.id), f = f.filter(e => {
        let {
            id: t
        } = e;
        return t !== r.id
    }), p = p.filter(e => {
        let {
            id: t
        } = e;
        return t !== r.id
    })
}
class v extends(r = i.Ay.Store) {
    initialize() {
        this.waitFor(o.A, s.A, l.A)
    }
    getNewestTokenForApplication(e) {
        var t;
        return null == e ? null : null != (t = d.get(e)) ? t : null
    }
    getNewestTokens() {
        return f
    }
    getNewestTokensForNonChildrenApplications() {
        return p
    }
    getFetchState() {
        return _
    }
    getFetchStateForApplication(e) {
        var t;
        return "FETCHED" === _ ? _ : null != (t = h.get(e)) ? t : _
    }
}
c(v, "displayName", "AuthorizedAppsStore");
let A = new v(a.h, {
    USER_AUTHORIZED_APPS_REQUEST: m,
    USER_AUTHORIZED_APPS_REQUEST_BY_ID: g,
    USER_AUTHORIZED_APPS_UPDATE: y,
    USER_AUTHORIZED_APPS_UPDATE_BY_ID: E,
    OAUTH2_TOKEN_CREATE: b,
    OAUTH2_TOKEN_DELETE: O
})