/** Chunk was on web.js **/
/** chunk id: 205761, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => P,
    D: () => v
}), n(747238), n(321073);
var r, i = n(735438),
    a = n.n(i),
    o = n(311907),
    s = n(73153),
    l = n(283047),
    c = n(617617),
    u = n(734057),
    d = n(71393),
    f = n(309010),
    p = n(967198),
    _ = n(652215),
    h = n(355097);

function m(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            m(e, t, n[t])
        })
    }
    return e
}

function E(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function y(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let b = 10,
    O = 100,
    v = 100,
    A = new l.A({
        computeBonus: () => O,
        computeWeight: e => {
            let t = 1;
            return 0 === e ? t = 100 : e >= 1 && e < 2 ? t = 70 : e >= 2 && e < 4 ? t = 50 : e >= 4 && e < 7 ? t = 30 : e >= 7 && (t = 10), t
        },
        lookupKey: e => {
            var t, n;
            return null != (t = null != (n = d.A.getGuild(e)) ? n : u.A.getChannel(e)) ? t : u.A.getChannel(u.A.getDMFromUserId(e))
        },
        afterCompute: () => {},
        numFrequentlyItems: v,
        maxSamples: b
    }),
    I = null,
    S = null;

function T(e) {
    let {
        guildId: t,
        channelId: n
    } = e, r = !1;
    return n !== I && (I = null != n ? n : null, null != n && _.Ut1.test(n) && (r = !0, A.track(n), w.pendingUsages.push({
        key: n,
        timestamp: Date.now()
    }))), t !== S && (S = null != t ? t : null, null != t && _.Ut1.test(t) && (r = !0, A.track(t), w.pendingUsages.push({
        key: t,
        timestamp: Date.now()
    }))), r
}

function C(e) {
    let {
        settings: {
            type: t
        },
        wasSaved: n
    } = e;
    return t === h.oD.FRECENCY_AND_FAVORITES_SETTINGS && !!n && (w.pendingUsages = [], !0)
}

function N() {
    var e;
    let t = null == (e = c.A.frecencyWithoutFetchingLatest.guildAndChannelFrecency) ? void 0 : e.guildAndChannels;
    if (null == t) return !1;
    A.overwriteHistory(a().mapValues(t, e => y(g({}, e), {
        recentUses: e.recentUses.map(Number).filter(e => e > 0)
    })), w.pendingUsages)
}
let w = {
    pendingUsages: []
};
class R extends(r = o.Ay.PersistedStore) {
    initialize(e) {
        this.waitFor(u.A, d.A, f.A, p.A, c.A), null != e && (e.pendingUsages = e.pendingUsages.filter(e => null != e && _.Ut1.test(e.key)), w = e), this.syncWith([c.A], N)
    }
    getState() {
        return w
    }
    hasPendingUsage() {
        return w.pendingUsages.length > 0
    }
    get frecencyWithoutFetchingLatest() {
        return A
    }
    getFrequentlyWithoutFetchingLatest() {
        return A.frequently
    }
    getScoreWithoutFetchingLatest(e) {
        var t;
        return null != (t = A.getFrecency(e)) ? t : 0
    }
    getScoreForDMWithoutFetchingLatest(e) {
        let t = u.A.getDMFromUserId(e);
        return null != t ? this.getScoreWithoutFetchingLatest(t) : 0
    }
    getMaxScore() {
        return v * b
    }
    getBonusScore() {
        return O
    }
}
m(R, "displayName", "FrecencyStore"), m(R, "persistKey", "FrecencyStore");
let P = new R(s.h, {
    CHANNEL_SELECT: T,
    VOICE_CHANNEL_SELECT: T,
    USER_SETTINGS_PROTO_UPDATE: C
})