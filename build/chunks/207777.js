/** chunk id: 207777, original params: e,t,n (module,exports,require) **/
"use strict";
let r;
n.d(t, {
    A: () => X,
    S: () => V
}), n(896048), n(638769);
var i, a = n(735438),
    o = n.n(a),
    s = n(392421),
    l = n(602137),
    c = n(357758),
    u = n(311907),
    d = n(73153),
    f = n(970278),
    p = n(456874),
    _ = n(961350),
    h = n(734057),
    m = n(222823),
    g = n(309010),
    E = n(661191),
    y = n(767581);

function b(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let O = [],
    v = null,
    A = null,
    I = new Set,
    S = l.T.LATEST_ACTIVITY,
    T = s.n.MATCH_SOME,
    C = 0,
    N = [],
    w = !1,
    R = [],
    P = o().chain(O),
    D = o().chain(O),
    L = new Set,
    x = new Set;

function M(e) {
    var t;
    return null != (t = m.Ay.lastMessageId(e)) ? t : e
}

function j(e) {
    let t = p.A.getCount(e);
    return null === t || 0 === t
}

function k(e) {
    return function(t, n) {
        return (0, y.yr)(t) ? -1 : (0, y.yr)(n) ? 1 : e === l.T.LATEST_ACTIVITY ? E.default.compare(M(n), M(t)) : E.default.compare(n, t)
    }
}

function U(e, t) {
    return function(n) {
        var r;
        let i = null == (r = h.A.getChannel(n)) ? void 0 : r.appliedTags;
        if (null == i || 0 === i.length) return !1;
        if (t === s.n.MATCH_SOME) return i.some(t => e.has(t));
        for (let t of e.values())
            if (!i.includes(t)) return !1;
        return !0
    }
}

function G() {
    N = [], r = null, A = null, I = new Set, S = l.T.LATEST_ACTIVITY, T = s.n.MATCH_SOME, C = 0, R = [], P = o().chain(O), D = o().chain(O), x.clear(), L.clear()
}

function F() {
    var e;
    let t = g.A.getChannelId();
    if (null == t || !(null == (e = h.A.getChannel(t)) ? void 0 : e.isForumLikeChannel())) return G(), !1;
    B({
        refreshThreadIds: !0
    })
}

function V(e) {
    let t = h.A.getChannel(e);
    return null == t ? [] : Object.values(f.A.getThreadsForParent(t.guild_id, t.id)).map(e => {
        let {
            id: t
        } = e;
        return t
    }).sort(k(S))
}

function B(e) {
    let t = h.A.getChannel(A);
    if (null == t) return;
    (null == e ? void 0 : e.refreshThreadIds) && (R = Object.values(f.A.getThreadsForParent(t.guild_id, t.id)).map(e => {
        let {
            id: t
        } = e;
        return t
    }), C = 0, w = !0), 0 !== L.size && (R = R.filter(e => !L.has(e)), L.clear()), 0 !== x.size && (R = Array.from(new Set([...R, ...x])), x.clear()), ((null == e ? void 0 : e.refreshThreadIds) || (null == e ? void 0 : e.sortThreadIds)) && (D = o().chain(R).sort(k(l.T.LATEST_ACTIVITY)), P = o().chain(R).sort(k(l.T.CREATION_DATE)));
    let n = (S === l.T.LATEST_ACTIVITY ? D : P).value(),
        i = (N = 0 === I.size ? n : n.filter(U(I, T))).find(e => j(e));
    r = null == i ? null : i
}

function H(e) {
    var t;
    let {
        guildId: n
    } = e;
    if (null == A || n !== (null == (t = h.A.getChannel(A)) ? void 0 : t.guild_id)) return !1;
    B({
        refreshThreadIds: !0
    })
}

function Y(e) {
    let {
        channel: t
    } = e;
    if (null == t.parent_id || t.parent_id !== A) return !1;
    let n = (0, y.yr)(t.id),
        r = x.has(t.id);
    if (n && !r) x.add(t.id), B({
        sortThreadIds: !0
    });
    else {
        if (n || !r) return !1;
        x.delete(t.id), B({
            sortThreadIds: !0
        })
    }
}

function W(e) {
    let {
        channel: t,
        isNewlyCreated: n
    } = e;
    if (null == t.parent_id || t.parent_id !== A || !n) return !1;
    t.ownerId !== _.default.getId() ? C++ : v = t.id
}

function K(e) {
    let {
        channel: t
    } = e;
    if (null == t.parent_id || t.parent_id !== A) return !1;
    L.add(t.id), B({
        sortThreadIds: !0
    })
}

function z(e) {
    let {
        channel: t
    } = e;
    if (null == t.parent_id || t.parent_id !== A) return !1;
    G()
}

function q(e) {
    let {
        channelId: t
    } = e;
    if (null == t || t !== A) return !1;
    B({
        refreshThreadIds: !0
    })
}

function Z(e) {
    let {
        channelId: t
    } = e;
    if (null == t || t !== A) return !1;
    w = !1
}
class Q extends(i = u.Ay.Store) {
    initialize() {
        this.waitFor(f.A, _.default, h.A, m.Ay, g.A, p.A)
    }
    getNewThreadCount() {
        return C
    }
    getCanAckThreads() {
        return w
    }
    getThreadIds(e, t, n, r) {
        let i = e !== A,
            a = !(0, c._)(n, I),
            o = t !== S,
            s = r !== T;
        return A = e, I = n, S = t, T = r, i ? B({
            refreshThreadIds: !0
        }) : o ? B({
            sortThreadIds: !0
        }) : (a || s) && B(), N
    }
    getCurrentThreadIds() {
        return N
    }
    getAndDeleteMostRecentUserCreatedThreadId() {
        let e = v;
        return v = null, e
    }
    getFirstNoReplyThreadId() {
        return r
    }
}
b(Q, "displayName", "ForumActivePostStore");
let X = new Q(d.h, {
    CONNECTION_OPEN: F,
    OVERLAY_INITIALIZE: F,
    GUILD_CREATE: F,
    CHANNEL_SELECT: F,
    CHANNEL_DELETE: z,
    THREAD_LIST_SYNC: H,
    THREAD_CREATE: W,
    THREAD_UPDATE: Y,
    THREAD_DELETE: K,
    RESORT_THREADS: q,
    CHANNEL_ACK: Z
})