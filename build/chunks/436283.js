/** chunk id: 436283, original params: e,t,n (module,exports,require) **/
"use strict";
let r, i;
n.d(t, {
    Ay: () => G
}), n(896048);
var a, o = n(311907),
    s = n(73153),
    l = n(843472),
    c = n(155718),
    u = n(961350),
    d = n(734057),
    f = n(927813),
    p = n(337591);

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
let E = 5 * f.A.Millis.MINUTE,
    y = 10 * f.A.Millis.SECOND,
    b = {},
    O = {},
    v = {},
    A = {};

function I() {
    b = {}, O = {}, v = {}, A = {}, setInterval(() => {
        let e = Date.now();
        for (let [t, n] of Object.entries(A)) e - n.insertedAt > y && delete A[t]
    }, E)
}

function S(e) {
    let {
        nonce: t,
        messageId: n,
        data: r,
        onCreate: i,
        onCancel: a,
        onSuccess: o,
        onFailure: s
    } = e;
    null != n && (O[n] = t, v[t] = n), b[t] = {
        state: p.m.QUEUED,
        data: r,
        onCreate: i,
        onCancel: a,
        onSuccess: o,
        onFailure: s
    }
}

function T(e) {
    var t;
    let {
        nonce: n,
        interactionId: r
    } = e;
    if (null == n) return !1;
    let i = b[n];
    if (null == i || i.state !== p.m.QUEUED) return !1;
    i.state = p.m.CREATED, null == (t = i.onCreate) || t.call(i, r)
}

function C(e) {
    let {
        nonce: t
    } = e;
    j(t)
}

function N(e) {
    let {
        message: t
    } = e;
    if (null == t.nonce) return !1;
    {
        var n;
        let e = b[t.nonce];
        if (null == e) return !1;
        null == (n = e.onSuccess) || n.call(e), k(t.nonce)
    }
}

function w(e) {
    var t;
    let {
        nonce: n,
        errorCode: r,
        errorMessage: i,
        status: a,
        reasonCode: o
    } = e;
    if (null == n) return !1;
    let s = b[n];
    if (null == s) return !1;
    null == (t = s.onFailure) || t.call(s, r, i, a, o), s.data.interactionType === c.G4.APPLICATION_COMMAND ? k(n) : b[n] = g(h({}, s), {
        state: p.m.FAILED,
        errorCode: r,
        errorMessage: i
    })
}

function R(e) {
    let {
        channelId: t
    } = e;
    if (null == d.A.getChannel(t)) return !1;
    for (let [e, t] of Object.entries(b)) t.state === p.m.FAILED && k(e)
}

function P(e) {
    let {
        nonce: t
    } = e;
    j(t)
}

function D(e) {
    let {
        application: t,
        nonce: n
    } = e;
    i = t.id, j(n)
}

function L() {
    r = void 0, i = void 0
}

function x(e) {
    let {
        modalKey: t
    } = e;
    r = t
}

function M(e) {
    let t, n, {
            participants: r
        } = e,
        i = u.default.getSessionId(),
        a = u.default.getId(),
        o = r.find(e => e.user_id === a && e.session_id === i);
    if (null == o || null == o.nonce) return;
    let s = A[o.nonce];
    null == s ? (t = v[o.nonce], n = b[o.nonce]) : (t = s.messageId, n = s.interaction), null != n && null != t && (k(o.nonce), null != t && "channelId" in n.data && l.A.deleteMessage(n.data.channelId, t, !0))
}

function j(e) {
    var t;
    if (null == e) return !1;
    let n = b[e];
    if (null == n) return !1;
    null == (t = n.onSuccess) || t.call(n), k(e)
}

function k(e) {
    if (null != A[e]) return void delete A[e];
    let t = b[e];
    delete b[e];
    let n = v[e];
    null != n && delete O[n], delete v[e], A[e] = {
        insertedAt: Date.now(),
        nonce: e,
        messageId: n,
        interaction: t
    }
}
class U extends(a = o.Ay.Store) {
    initialize() {
        this.waitFor(u.default, d.A)
    }
    getInteraction(e) {
        let t = O[e.id];
        return null != t ? b[t] : null
    }
    getMessageInteractionStates() {
        let e = {};
        for (let [t, n] of Object.entries(b)) {
            let r = v[t];
            null != r && (e[r] = n.state)
        }
        return e
    }
    canQueueInteraction(e, t) {
        let n = O[e];
        return (null == n || null == b[n] || b[n].state === p.m.FAILED) && (null == b[t] || b[t].state === p.m.FAILED)
    }
    getIFrameModalApplicationId() {
        return i
    }
    getIFrameModalKey() {
        return r
    }
}
_(U, "displayName", "InteractionStore");
let G = new U(s.h, {
    LOGOUT: I,
    INTERACTION_QUEUE: S,
    INTERACTION_CREATE: T,
    INTERACTION_SUCCESS: C,
    INTERACTION_FAILURE: w,
    MESSAGE_CREATE: N,
    CHANNEL_SELECT: R,
    INTERACTION_IFRAME_MODAL_CREATE: D,
    INTERACTION_IFRAME_MODAL_CLOSE: L,
    INTERACTION_IFRAME_MODAL_KEY_CREATE: x,
    INTERACTION_MODAL_CREATE: P,
    EMBEDDED_ACTIVITY_UPDATE_V2: M
})