/** Chunk was on web.js **/
/** chunk id: 45494, original params: e,t,n (module,exports,require) **/
"use strict";
let r;
n.d(t, {
    A: () => H,
    m: () => b
}), n(896048), n(638769), n(264879);
var i, a = n(735438),
    o = n.n(a),
    s = n(392421),
    l = n(602137),
    c = n(357758),
    u = n(311907),
    d = n(73153),
    f = n(767581),
    p = n(853742),
    _ = n(95701),
    h = n(734057),
    m = n(222823),
    g = n(661191),
    E = n(152007);

function y(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let b = 25,
    O = !1,
    v = !0,
    A = !1,
    I = !1,
    S = null,
    T = l.T.LATEST_ACTIVITY,
    C = [],
    N = 0,
    w = s.n.MATCH_SOME;

function R() {
    O = !1, v = !0, A = !1, I = !1, S = null, T = l.T.LATEST_ACTIVITY, r = new Set, N = 0, C = [], w = s.n.MATCH_SOME
}

function P(e, t) {
    return t === l.T.LATEST_ACTIVITY ? m.Ay.lastMessageId(e.id) : e.id
}

function D(e) {
    e.channelId === S && e.sortOrder === T && (0, c._)(e.tagFilter, r) && e.tagSetting === w || R(), S = e.channelId, T = e.sortOrder, r = e.tagFilter instanceof Set ? e.tagFilter : new Set(e.tagFilter), w = e.tagSetting, O = !0, v = !1
}

function L(e) {
    if (e.channelId !== S || e.sortOrder !== T || !(0, c._)(e.tagFilter, r) || e.tagSetting !== w) return !1;
    let t = e.threads.filter(e => _.A_.has(e.type)).map(e => e.id);
    C = C.concat(t);
    let n = h.A.getChannel(S);
    null != n && n.isForumLikeChannel() && (0, p._Z)({
        guildId: n.guild_id,
        channelId: n.id,
        numArchivedThreads: C.length,
        hasMoreThreads: e.hasMore,
        filterTagIds: Array.from(e.tagFilter),
        sortOrder: e.sortOrder
    }), M(), A = e.hasMore, N = e.offset + b, O = !1, v = !1
}

function x(e) {
    return (null == S || null == e.channelId || S === e.channelId) && M()
}

function M() {
    if (null == S) return !1;
    let e = !A,
        t = h.A.getChannel(C[C.length - 1]),
        n = null == t ? null : P(t, T);
    C = o()(h.A.getAllThreadsForParent(S)).filter(e => e.isArchivedThread()).filter(t => {
        if (0 !== r.size) {
            var i, a;
            if (w === s.n.MATCH_SOME) {
                if ((null == (i = t.appliedTags) ? void 0 : i.some(e => r.has(e))) !== !0) return !1
            } else if (w === s.n.MATCH_ALL) {
                for (let e of r.values())
                    if ((null == (a = t.appliedTags) ? void 0 : a.includes(e)) !== !0) return !1
            }
        }
        if (e || null == n) return !0;
        {
            let e = null == t ? null : P(t, T);
            return null != e && g.default.compare(e, n) >= 0
        }
    }).sort((e, t) => g.default.compare(P(e, T), P(t, T))).map(e => e.id).reverse().value()
}

function j(e) {
    if (e.channelId !== S || e.sortOrder !== T || !(0, c._)(e.tagFilter, r) || e.tagSetting !== w) return !1;
    O = !1, I = !0, v = !1
}

function k(e) {
    if (e.channel.id !== S) return !1;
    R()
}

function U(e) {
    if (!(C.indexOf(e) >= 0)) return !1;
    C = C.filter(t => t !== e)
}

function G(e) {
    let {
        channel: t
    } = e;
    return U(t.id)
}

function F(e) {
    let {
        channel: t
    } = e;
    return S === t.parent_id && !!(0, f.yr)(t.id) && void U(t.id)
}
let V = [];
class B extends(i = u.Ay.Store) {
    initialize() {
        this.waitFor(h.A, E.A, m.Ay)
    }
    get canLoadMore() {
        return A && !O && !I
    }
    get nextOffset() {
        return N
    }
    get isInitialLoad() {
        return v
    }
    isLoading(e, t, n, i) {
        return S === e && T === t && (0, c._)(r, n) && w === i ? O : (R(), !1)
    }
    getThreads(e, t, n, i) {
        return S === e && T === t && (0, c._)(r, n) && w === i ? C : V
    }
}
y(B, "displayName", "ArchivedThreadsStore");
let H = new B(d.h, {
    CONNECTION_OPEN: R,
    THREAD_DELETE: G,
    THREAD_UPDATE: F,
    CHANNEL_DELETE: k,
    LOAD_ARCHIVED_THREADS: D,
    LOAD_ARCHIVED_THREADS_SUCCESS: L,
    LOAD_ARCHIVED_THREADS_FAIL: j,
    RESORT_THREADS: x
})