/** chunk id: 802958, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => D
}), n(896048);
var r, i = n(735438),
    a = n.n(i),
    o = n(311907),
    s = n(73153),
    l = n(95701),
    c = n(734057);

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
let f = {};

function p(e) {
    f = a().omitBy(f, t => t.guildId === e)
}

function _(e) {
    f = a().omitBy(f, t => t.parentId === e)
}

function h(e) {
    var t;
    null == (t = e.threads) || t.forEach(g)
}

function m(e) {
    if (!(e.id in f)) {
        var t, n;
        f[e.id] = {
            guildId: e.guild_id,
            parentId: e.parent_id,
            memberCount: null != (t = e.memberCount) ? t : 0,
            memberIdsPreview: null != (n = e.memberIdsPreview) ? n : []
        }
    }
    return f[e.id]
}

function g(e) {
    if (!l.A_.has(e.type)) return !1;
    let t = m(e);
    null != e.memberCount && (t.memberCount = e.memberCount), null != e.memberIdsPreview && (t.memberIdsPreview = e.memberIdsPreview)
}

function E(e) {
    f = {}, e.guilds.forEach(h)
}

function y(e) {
    let {
        threadMembers: t
    } = e;
    f = d({}, t)
}

function b(e) {
    let {
        guild: t
    } = e;
    h(t)
}

function O(e) {
    let {
        guild: t
    } = e;
    p(t.id)
}

function v(e) {
    let {
        channel: t
    } = e;
    return g(t)
}

function A(e) {
    let {
        threads: t
    } = e;
    t.forEach(g)
}

function I(e) {
    let {
        threads: t
    } = e;
    t.forEach(w)
}

function S(e) {
    let {
        channel: t
    } = e;
    _(t.id)
}

function T(e) {
    let {
        channel: t
    } = e;
    delete f[t.id]
}

function C(e) {
    let t = !1;
    for (let n of e.messages) t = w(n.thread) || t;
    return t
}

function N(e) {
    let {
        data: t
    } = e, n = !1;
    return t.forEach(e => {
        let {
            threads: t,
            messages: r
        } = e;
        r.forEach(e => {
            e.forEach(e => {
                n = w(e.thread) || n
            })
        }), t.forEach(e => {
            n = w(e) || n
        })
    }), n
}

function w(e) {
    if (null != e && !(e.id in f)) {
        let t = c.A.getChannel(e.id);
        if (null != t) return g(t), !0
    }
    return !1
}

function R(e) {
    let t = f[e.id];
    if (null == t) return !1;
    null != e.memberIdsPreview && (t.memberIdsPreview = e.memberIdsPreview), t.memberCount = e.memberCount
}
class P extends(r = o.Ay.Store) {
    initialize() {
        this.waitFor(c.A)
    }
    getMemberCount(e) {
        var t, n;
        return null != (t = null == (n = f[e]) ? void 0 : n.memberCount) ? t : null
    }
    getMemberIdsPreview(e) {
        var t, n;
        return null != (t = null == (n = f[e]) ? void 0 : n.memberIdsPreview) ? t : null
    }
    getInitialOverlayState() {
        return f
    }
}
u(P, "displayName", "ThreadMembersStore");
let D = new P(s.h, {
    CONNECTION_OPEN: E,
    OVERLAY_INITIALIZE: y,
    GUILD_CREATE: b,
    GUILD_DELETE: O,
    CHANNEL_DELETE: S,
    THREAD_CREATE: v,
    THREAD_UPDATE: v,
    THREAD_LIST_SYNC: A,
    THREAD_MEMBERS_UPDATE: R,
    SEARCH_MESSAGES_SUCCESS: N,
    MOD_VIEW_SEARCH_MESSAGES_SUCCESS: N,
    LOAD_THREADS_SUCCESS: I,
    LOAD_ARCHIVED_THREADS_SUCCESS: I,
    THREAD_DELETE: T,
    LOAD_MESSAGES_SUCCESS: C
})