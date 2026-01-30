/** chunk id: 900819, original params: e,t,n (module,exports,require) **/
"use strict";
let r;
n.d(t, {
    A: () => T
}), n(896048);
var i, a = n(311907),
    o = n(73153),
    s = n(927813),
    l = n(661191),
    c = n(605510);

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
let _ = 4,
    h = 5,
    m = 14 * s.A.Millis.DAY,
    g = Object.freeze([]),
    E = {},
    y = {};

function b(e) {
    var t;
    let {
        messageId: n,
        channelId: r,
        attachments: i
    } = e, a = {
        messageId: n,
        channelId: r,
        attachments: i,
        reportSubmit: !1
    }, o = null != (t = y[r]) ? t : g;
    y[r] = [...o, a], E[n] = a
}

function O(e) {
    let {
        messageId: t,
        channelId: n
    } = e, r = y[n];
    null != r && (y[n] = r.map(e => e.messageId === t ? p(d({}, e), {
        reportSubmit: !0
    }) : e), E[t] = p(d({}, E[t]), {
        reportSubmit: !0
    }))
}

function v() {
    I()
}

function A(e) {
    let {
        explicitContentScanVersion: t
    } = e;
    r = t, I()
}

function I() {
    E = {}, y = {}
}
class S extends(i = a.Ay.Store) {
    getFpMessageInfo(e) {
        return E[e]
    }
    getChannelFpInfo(e) {
        var t;
        return null != (t = y[e]) ? t : g
    }
    canSubmitFpReport(e) {
        let t = E[e];
        return null != t && !t.reportSubmit && l.default.age(t.messageId) < m
    }
    get validContentScanVersion() {
        return (0, c.jV)("ExplicitMediaStore.validContentScanVersion") ? null != r ? r : h : Math.min(null != r ? r : _, _)
    }
}
u(S, "displayName", "FalsePositiveStore");
let T = new S(o.h, {
    LOGOUT: v,
    CONNECTION_OPEN: A,
    MESSAGE_EXPLICIT_CONTENT_FP_CREATE: b,
    MESSAGE_EXPLICIT_CONTENT_FP_SUBMIT: O
})