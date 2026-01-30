/** chunk id: 354430, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => _
});
var r, i = n(311907),
    a = n(73153);

function o(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let s = {
        topEmojisByGuildId: {}
    },
    l = s,
    c = {};

function u() {
    l = s, c = {}
}

function d(e) {
    let {
        guildId: t
    } = e;
    c[t] = !0
}

function f(e) {
    let {
        guildId: t,
        topEmojisMetadata: n
    } = e;
    l.topEmojisByGuildId[t] = n.map(e => e.emojiId), c[t] = !1
}
class p extends(r = i.Ay.PersistedStore) {
    initialize(e) {
        l = null != e ? e : s
    }
    getState() {
        return l
    }
    getTopEmojiIdsByGuildId(e) {
        return l.topEmojisByGuildId[e]
    }
    getIsFetching(e) {
        return c[e]
    }
}
o(p, "displayName", "TopEmojiStore"), o(p, "persistKey", "TopEmojiStore");
let _ = new p(a.h, {
    LOGOUT: u,
    TOP_EMOJIS_FETCH: d,
    TOP_EMOJIS_FETCH_SUCCESS: f
})