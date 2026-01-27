/** Chunk was on web.js **/
/** chunk id: 517381, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => L
}), n(896048), n(321073);
var r, i = n(311907),
    a = n(73153),
    o = n(198982),
    s = n(141468),
    l = n(815807),
    c = n(961350),
    u = n(994500);

function d(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
class f {
    handleSearchStart() {
        this.isFetching = !0, this.isIndexing = !1, this.analyticsId = null, this.error = null
    }
    handleSearchIndexing() {
        this.isInitialFetchComplete = !0, this.isIndexing = !0, this.isHistoricalIndexing = !0, this.isFetching = !1, this.error = null
    }
    handleSearchFailure(e) {
        this.isFetching = !1, this.isIndexing = !1, this.isInitialFetchComplete = !0, this.isHistoricalIndexing = !1, this.error = new o.LG(e), this.analyticsId = null, this.documentsIndexed = 0
    }
    handleSearchSuccess(e, t) {
        var n;
        let {
            analyticsId: r,
            cursor: i,
            totalResults: a,
            doingHistoricalIndex: o,
            documentsIndexed: s
        } = e;
        this.analyticsId = r, this.isFetching = !1, this.isIndexing = !1, this.isInitialFetchComplete = !0, this.isHistoricalIndexing = o, this.error = null, this.documentsIndexed = s, this.cursor = i;
        let l = [...null != (n = this.messages) ? n : []],
            c = [];
        return t.forEach(e => {
            this.messageIds.has(e.id) || (this.messageIds.add(e.id), l.push(e), c.push(e))
        }), this.messages = l, this.totalResults = a, c
    }
    constructor() {
        d(this, "isIndexing", !1), d(this, "isHistoricalIndexing", !1), d(this, "isFetching", !1), d(this, "analyticsId", null), d(this, "error", null), d(this, "messages", null), d(this, "documentsIndexed", 0), d(this, "totalResults", null), d(this, "messageIds", new Set), d(this, "isInitialFetchComplete", !1), d(this, "cursor", null)
    }
}
let p = new Map,
    _ = new Map,
    h = new Map;

function m(e) {
    var t;
    return null != (t = p.get(e)) ? t : new f
}

function g(e) {
    let t = m(e);
    return p.set(e, t), t
}

function E(e, t) {
    let n = _.get(e);
    if (null == n) return !1;
    let r = t(n);
    return _.set(e, r), !0
}

function y(e, t) {
    return t(m(e))
}

function b() {
    p = new Map, _ = new Map, h = new Map
}

function O(e) {
    e.ids.forEach(e => {
        g(e).handleSearchStart()
    })
}

function v(e) {
    e.data.forEach(e => {
        let t = g(e.id),
            n = e.messages.map(e => {
                let [t] = e;
                return (0, s.rh)(t)
            });
        t.handleSearchSuccess(e, n).forEach(e => {
            var t;
            _.set(e.id, e);
            let n = null != (t = h.get(e.id)) ? t : 0;
            h.set(e.id, n + 1)
        })
    })
}

function A(e) {
    let t = e.message.id;
    if (null == t) return !1;
    let n = _.get(t);
    if (null == n) return !1;
    let r = (0, s.IU)(n, e.message);
    _.set(t, r)
}

function I(e) {
    let {
        type: t,
        messageId: n,
        userId: r,
        emoji: i
    } = e;
    if (!(0, l.vp)(e)) return !1;
    let a = c.default.getId() === r;
    return E(n, n => {
        let {
            reactionType: r
        } = e;
        return "MESSAGE_REACTION_ADD" === t ? n.addReaction(i, a, e.colors, r) : n.removeReaction(i, a, r)
    })
}

function S(e) {
    let {
        messageId: t,
        reactions: n
    } = e, r = c.default.getId();
    return E(t, e => e.addReactionBatch(n, r))
}

function T(e) {
    let {
        messageId: t
    } = e;
    return E(t, e => e.set("reactions", []))
}

function C(e) {
    let {
        messageId: t,
        emoji: n
    } = e;
    return E(t, e => e.removeReactionsForEmoji(n))
}

function N(e) {
    e.ids.forEach(e => {
        g(e).handleSearchIndexing()
    })
}

function w(e) {
    e.ids.forEach(t => {
        g(t).handleSearchFailure(e.error)
    })
}

function R(e) {
    let t = p.get(e.id);
    if (null == t) return !1;
    t.messageIds.forEach(e => {
        var t;
        let n = null != (t = h.get(e)) ? t : 0;
        n <= 1 ? (_.delete(e), h.delete(e)) : h.set(e, n - 1)
    }), p.delete(e.id)
}

function P(e) {
    p = new Map, _ = new Map, h = new Map
}
class D extends(r = i.Ay.Store) {
    initialize() {
        this.waitFor(c.default, u.A)
    }
    getMessage(e) {
        return _.get(e)
    }
    getTotalCount(e) {
        return y(e, e => e.totalResults)
    }
    getIsInitialFetchComplete(e) {
        return y(e, e => e.isInitialFetchComplete)
    }
    getIsIndexing(e) {
        return y(e, e => e.isIndexing)
    }
    getIsHistoricalIndexing(e) {
        return y(e, e => e.isHistoricalIndexing)
    }
    getDocumentsIndexed(e) {
        return y(e, e => e.documentsIndexed)
    }
    getIsFetching(e) {
        return y(e, e => e.isFetching)
    }
    getError(e) {
        return y(e, e => e.error)
    }
    getMessages(e) {
        return y(e, e => e.messages)
    }
    getCursor(e) {
        return y(e, e => e.cursor)
    }
    getAnalyticsId(e) {
        return y(e, e => e.analyticsId)
    }
    hasSearchState(e) {
        return p.has(e)
    }
}
d(D, "displayName", "SearchMessageStore");
let L = new D(a.h, {
    SEARCH_MESSAGES_START: O,
    SEARCH_MESSAGES_SUCCESS: v,
    SEARCH_MESSAGES_INDEXING: N,
    SEARCH_MESSAGES_FAILURE: w,
    SEARCH_MESSAGES_CLEAR: R,
    SEARCH_MESSAGES_CLEAR_ALL: P,
    MESSAGE_UPDATE: A,
    MESSAGE_REACTION_ADD: I,
    MESSAGE_REACTION_ADD_MANY: S,
    MESSAGE_REACTION_REMOVE: I,
    MESSAGE_REACTION_REMOVE_ALL: T,
    MESSAGE_REACTION_REMOVE_EMOJI: C,
    CONNECTION_OPEN: b
})