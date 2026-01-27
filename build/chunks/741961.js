/** Chunk was on web.js **/
/** chunk id: 741961, original params: e,t,n (module,exports,require) **/
"use strict";
let r;
n.d(t, {
    A: () => P
});
var i, a = n(311907),
    o = n(562465),
    s = n(73153),
    l = n(695870),
    c = n(927813),
    u = n(961350),
    d = n(101392),
    f = n(652215);

function p(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            p(e, t, n[t])
        })
    }
    return e
}
let h = 10 * c.A.Millis.SECOND,
    m = 1.5 * c.A.Millis.SECOND,
    g = 5,
    E = {},
    y = Object.freeze({});

function b(e) {
    var t;
    return null != (t = E[e]) ? t : y
}

function O(e) {
    let {
        channelId: t
    } = e, n = u.default.getId();
    if (null == n || t === l.E) return !1;
    null != r && r.channelId !== t && (null != r.timeout && clearTimeout(r.timeout), r = null);
    let i = Date.now(),
        a = .8 * h;
    if (null != r && (null != r.timeout || r.prevSend + a > i)) return !1;
    let c = setTimeout(() => {
        null == r || r.channelId !== t || n !== u.default.getId() || null == r.timeout || (r.timeout = null, w(t) > g || o.Bo.post({
            url: f.Rsh.TYPING(t),
            oldFormErrors: !0,
            rejectWithError: !0
        }).then(e => {
            if (200 === e.status) {
                var n, r;
                let i = null != (n = e.body.message_send_cooldown_ms) ? n : 0,
                    a = null != (r = e.body.thread_create_cooldown_ms) ? r : 0;
                i > 0 && s.h.dispatch({
                    type: "SLOWMODE_SET_COOLDOWN",
                    channelId: t,
                    slowmodeType: d.R.SendMessage,
                    cooldownMs: i
                }), a > 0 && s.h.dispatch({
                    type: "SLOWMODE_SET_COOLDOWN",
                    channelId: t,
                    slowmodeType: d.R.CreateThread,
                    cooldownMs: a
                })
            }
        }))
    }, null == r || r.prevSend > i - 2 * a ? m : 0);
    return r = {
        channelId: t,
        timeout: c,
        prevSend: i
    }, S({
        channelId: t,
        userId: n
    })
}

function v(e) {
    if (null == r || r.channelId !== e) return !1;
    null != r.timeout && clearTimeout(r.timeout), r = null
}

function A(e) {
    let {
        channelId: t
    } = e, n = u.default.getId();
    return null != n && null != r && r.channelId === t && null != r.timeout && (clearTimeout(r.timeout), r = null, T({
        channelId: t,
        userId: n
    }))
}

function I(e, t) {
    return setTimeout(() => {
        s.h.dispatch({
            type: "TYPING_STOP",
            channelId: e,
            userId: t
        })
    }, h)
}

function S(e) {
    let {
        channelId: t,
        userId: n
    } = e, r = _({}, b(t));
    clearTimeout(r[n]), r[n] = I(t, n), E[t] = r
}

function T(e) {
    let {
        channelId: t,
        userId: n
    } = e, r = E[t];
    if (null == r || null == r[n]) return !1;
    let i = _({}, r);
    clearTimeout(i[n]), delete i[n], E[t] = i
}

function C(e) {
    let {
        channelId: t,
        message: {
            author: n
        },
        optimistic: r
    } = e;
    return r && v(t), null != n && T({
        channelId: t,
        userId: n.id
    })
}

function N() {
    E = {}
}

function w(e) {
    let t = b(e);
    return t === y ? 0 : Object.keys(t).length
}
class R extends(i = a.Ay.Store) {
    initialize() {
        this.waitFor(u.default)
    }
    getTypingUsers(e) {
        return b(e)
    }
    isTyping(e, t) {
        return null != b(e)[t]
    }
}
p(R, "displayName", "TypingStore");
let P = new R(s.h, {
    TYPING_START: S,
    TYPING_STOP: T,
    TYPING_START_LOCAL: O,
    TYPING_STOP_LOCAL: A,
    CONNECTION_OPEN: N,
    OVERLAY_INITIALIZE: N,
    MESSAGE_CREATE: C
})