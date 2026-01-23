/** Chunk was on web.js **/
/** chunk id: 163956, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => k
}), n(321073), n(896048);
var r, i = n(735438),
    a = n.n(i),
    s = n(635377),
    o = n.n(s),
    l = n(311907),
    c = n(73153),
    u = n(283047),
    d = n(617617),
    f = n(287809),
    p = n(477851),
    _ = n(209932),
    h = n(807348),
    m = n(766864),
    g = n(980504),
    E = n(355097);

function y(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            y(e, t, n[t])
        })
    }
    return e
}

function O(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function v(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : O(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let A = [],
    I = new(o())({
        max: g.E7
    }),
    S = new u.A({
        computeBonus: () => 100,
        lookupKey: e => _.A.getSoundById(e),
        afterCompute: () => {},
        numFrequentlyItems: g.SC
    });

function T(e) {
    let {
        sound: t,
        trigger: n
    } = e;
    if (!j()) return;
    let r = t.soundId.toString();
    n === h.Zm.SOUNDBOARD && w(r)
}

function C(e) {
    var t;
    let {
        soundId: n,
        userId: r
    } = e;
    if (!L()) return;
    let i = n.toString();
    r !== (null == (t = f.default.getCurrentUser()) ? void 0 : t.id) && R(i) && N(i)
}

function N(e) {
    I.set(e, e)
}

function w(e) {
    S.track(e), A.push({
        key: e,
        timestamp: Date.now()
    }), S.compute()
}

function R(e) {
    for (let t of _.A.getSounds().values())
        if (null != t.find(t => t.soundId.toString() === e)) return !0;
    return !1
}

function P(e) {
    return a().mapValues(e, e => v(b({}, e), {
        recentUses: e.recentUses.map(Number).filter(e => e > 0)
    }))
}

function D() {
    var e;
    if (!j()) return;
    let t = null == (e = d.A.frecencyWithoutFetchingLatest.playedSoundFrecency) ? void 0 : e.playedSounds;
    S.overwriteHistory(P(null != t ? t : {}), A)
}

function x(e) {
    let {
        settings: {
            type: t
        },
        wasSaved: n
    } = e;
    j() && t === E.oD.FRECENCY_AND_FAVORITES_SETTINGS && n && (A = [])
}

function L() {
    return (0, p._)({
        location: "soundboard_event_store",
        autoTrackExposure: !1
    }).canSeeRecentlyHeard
}

function j() {
    return (0, m.YK)("soundboard_event_store")
}
class M extends(r = l.Ay.PersistedStore) {
    initialize(e) {
        this.waitFor(_.A, d.A, f.default), (null == e ? void 0 : e.recentlyHeardCache) != null && I.load(e.recentlyHeardCache), (null == e ? void 0 : e.playedEventsPendingFlush) != null && (A = e.playedEventsPendingFlush), this.syncWith([d.A], D)
    }
    getState() {
        return {
            recentlyHeardCache: I.dump(),
            playedEventsPendingFlush: A
        }
    }
    hasPendingUsage() {
        return A.length > 0
    }
    get playedSoundHistory() {
        return S.usageHistory
    }
    get recentlyHeardSoundIds() {
        return I.values()
    }
    get frecentlyPlayedSounds() {
        return S.frequently
    }
}
y(M, "displayName", "SoundboardEventStore"), y(M, "persistKey", "SoundboardEventStore");
let k = new M(c.h, {
    GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY: T,
    GUILD_SOUNDBOARD_SOUND_PLAY_START: C,
    USER_SETTINGS_PROTO_UPDATE: x
})