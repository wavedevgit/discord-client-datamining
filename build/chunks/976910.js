/** Chunk was on web.js **/
/** chunk id: 976910, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => y
}), n(896048);
var r, i = n(311907),
    a = n(73153),
    o = n(155718);

function s(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let l = !1,
    c = [],
    u = !1;

function d() {
    c = [], l = !1, u = !1
}

function f() {
    if (u) return !1;
    u = !0
}

function p() {
    if (!u) return !1;
    u = !1
}

function _(e) {
    let {
        credentials: t
    } = e, n = !1;
    return c !== t && (c = t, n = !0), l || (l = !0, n = !0), n
}

function h(e) {
    let {
        credential: t
    } = e;
    if (t.type !== o.Wq.WEBAUTHN || void 0 !== c.find(e => e.id === t.id)) return !1;
    c = [...c, t]
}

function m(e) {
    let {
        credential: t
    } = e;
    if (t.type !== o.Wq.WEBAUTHN) return !1;
    c = c.map(e => e.id === t.id ? t : e)
}

function g(e) {
    let {
        credential: t
    } = e;
    if (t.type !== o.Wq.WEBAUTHN) return !1;
    c = c.filter(e => e.id !== t.id)
}
class E extends(r = i.Ay.Store) {
    hasFetchedCredentials() {
        return l
    }
    get hasCredentials() {
        return c.length > 0
    }
    getCredentials() {
        return c
    }
    hasPendingRegisterTrigger() {
        return u
    }
}
s(E, "displayName", "WebAuthnStore");
let y = new E(a.h, {
    LOGOUT: d,
    MFA_WEBAUTHN_CREDENTIALS_LOADED: _,
    AUTHENTICATOR_CREATE: h,
    AUTHENTICATOR_UPDATE: m,
    AUTHENTICATOR_DELETE: g,
    WEBAUTHN_TRIGGER_REGISTER: f,
    WEBAUTHN_CLEAR_REGISTER_TRIGGER: p
})