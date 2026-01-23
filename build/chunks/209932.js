/** Chunk was on web.js **/
/** chunk id: 209932, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => J
}), n(896048), n(321073), n(446912), n(864466), n(443073);
var r, i = n(735438),
    a = n.n(i),
    s = n(311907),
    o = n(73153),
    l = n(253932),
    c = n(617617),
    u = n(287809),
    d = n(954571),
    f = n(824744),
    p = n(661191),
    _ = n(766864),
    h = n(980504),
    m = n(652215),
    g = n(355097);

function E(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let y = new Map,
    b = new Map,
    O = new Map,
    v = new Set,
    A = 0,
    I = 0,
    S = 0,
    T = 0,
    C = new Set,
    N = new Map,
    w = !1;

function R() {
    y.clear(), b.clear(), T = 0, O.clear(), N.clear(), w = !1, I = 0, S = 0, A = 0
}

function P() {
    O.clear(), N.clear()
}

function D() {
    I = 1
}

function x(e) {
    let {
        updates: t
    } = e;
    t.forEach(e => {
        let {
            guildId: t,
            sounds: n
        } = e;
        y.set(t, n)
    }), I = 2
}

function L(e) {
    let {
        guild: t
    } = e;
    y.delete(t.id)
}

function j(e) {
    let {
        sound: t
    } = e, n = y.get(t.guildId), r = null == n ? void 0 : n.findIndex(e => e.soundId === t.soundId);
    null != n && null != r && -1 !== r ? (n[r] = t, y.set(t.guildId, [...n])) : null != n && (null == n || n.push(t), y.set(t.guildId, [...n]))
}

function M(e) {
    let {
        guildId: t,
        soundboardSounds: n
    } = e;
    y.set(t, n)
}

function k(e) {
    let {
        soundId: t,
        guildId: n
    } = e, r = y.get(n), i = null == r ? void 0 : r.findIndex(e => e.soundId === t);
    null == r || null == i || i < 0 || (r.splice(i, 1), y.set(n, [...r]))
}

function U() {
    A = 1
}

function G(e) {
    let {
        soundboardSounds: t
    } = e;
    y.set(h.mV, t), A = 2
}

function V() {
    S = 1
}

function F(e) {
    let {
        topSoundsForGuilds: t
    } = e;
    b = new Map(t), S = 2, T = Date.now()
}

function B() {
    S = 2, T = 0
}

function H(e) {
    var t, n, r;
    let {
        soundId: i,
        userId: a
    } = e, s = (null != (t = O.get(i)) ? t : 0) + 1, o = (null != (n = N.get(a)) ? n : 0) + 1;
    O.set(i, s), N.set(a, o), a !== (null == (r = u.default.getCurrentUser()) ? void 0 : r.id) && (w = !0)
}

function Y(e) {
    var t, n;
    let {
        soundId: r,
        userId: i
    } = e, a = (null != (t = O.get(r)) ? t : 0) - 1, s = (null != (n = N.get(i)) ? n : 0) - 1;
    a <= 0 ? O.delete(r) : O.set(r, a), s <= 0 ? N.delete(i) : N.set(i, s)
}
let W = a().debounce((e, t) => {
    d.default.track(m.HAw.UPDATE_SOUNDBOARD_SETTINGS, {
        volume: Math.round((0, f.M)(e)),
        location_stack: t
    }), l.dG.updateSetting({
        volume: e
    })
}, 1e3);

function K(e) {
    let {
        volume: t,
        location: n
    } = e;
    W(t, n)
}

function z(e) {
    var t, n;
    let r = null != (t = null == e || null == (n = e.audioContextSettings) ? void 0 : n.user) ? t : {};
    for (let [e, t] of Object.entries(r)) t.soundboardMuted ? v.add(e) : v.delete(e);
    for (let e of v.keys()) null == r[e] && v.delete(e)
}

function q(e) {
    let {
        settings: t
    } = e, {
        type: n,
        proto: r
    } = t;
    if (n === g.oD.FRECENCY_AND_FAVORITES_SETTINGS) {
        var i, a;
        C = new Set(null != (i = null == r || null == (a = r.favoriteSoundboardSounds) ? void 0 : a.soundIds) ? i : [])
    } else n === g.oD.PRELOADED_USER_SETTINGS && z(r)
}

function Z(e) {
    let {
        userId: t
    } = e;
    v.has(t) ? v.delete(t) : v.add(t)
}

function X(e) {
    let {
        soundboardStoreState: t
    } = e;
    y = new Map(p.default.entries(t.soundboardSounds)), C = new Set(t.favoritedSoundIds), v = new Set(t.localSoundboardMutes)
}
class Q extends(r = s.Ay.Store) {
    initialize() {
        this.waitFor(c.A, u.default), z(c.A.settings)
    }
    getOverlaySerializedState() {
        return {
            soundboardSounds: Object.fromEntries(y),
            favoritedSoundIds: Array.from(C),
            localSoundboardMutes: Array.from(v)
        }
    }
    getSounds() {
        return y
    }
    getSoundsForGuild(e) {
        return y.get(e)
    }
    getSound(e, t) {
        var n;
        return (null != (n = y.get(e)) ? n : []).find(e => e.soundId === t)
    }
    getSoundById(e) {
        return Array.from(y.values()).flat().find(t => t.soundId === e)
    }
    isFetchingSounds() {
        return 1 === I
    }
    isFetchingDefaultSounds() {
        return 1 === A
    }
    isFetching() {
        return this.isFetchingSounds() || this.isFetchingDefaultSounds()
    }
    shouldFetchDefaultSounds() {
        return 0 === A
    }
    hasFetchedDefaultSounds() {
        return 2 === A
    }
    isUserPlayingSounds(e) {
        let t = N.get(e);
        return null != t && t > 0
    }
    isPlayingSound(e) {
        return null != O.get(e)
    }
    isFavoriteSound(e) {
        return C.has(e)
    }
    getFavorites() {
        return C
    }
    getAllTopSoundsForGuilds() {
        return b
    }
    isLocalSoundboardMuted(e) {
        return v.has(e)
    }
    hasHadOtherUserPlaySoundInSession() {
        return w
    }
    shouldFetchTopSoundsForGuilds() {
        return (0, _.vB)("SoundboardStore") && (0 === S || 2 === S && Date.now() - T > 864e5)
    }
    hasFetchedTopSoundsForGuilds() {
        return 2 === S
    }
    hasFetchedAllSounds() {
        let e = [I, A];
        return (0, _.vB)("SoundboardStore") && e.push(S), e.every(e => 2 === e)
    }
    isFetchingAnySounds() {
        return [I, A, S].some(e => 1 === e)
    }
}
E(Q, "displayName", "SoundboardStore");
let J = new Q(o.h, {
    LOGOUT: R,
    GUILD_SOUNDBOARD_FETCH: D,
    GUILD_SOUNDBOARD_SOUND_CREATE: j,
    GUILD_SOUNDBOARD_SOUND_UPDATE: j,
    GUILD_SOUNDBOARD_SOUND_DELETE: k,
    GUILD_SOUNDBOARD_SOUND_PLAY_START: H,
    GUILD_SOUNDBOARD_SOUND_PLAY_END: Y,
    GUILD_SOUNDBOARD_SOUNDS_UPDATE: M,
    USER_SOUNDBOARD_SET_VOLUME: K,
    VOICE_CHANNEL_SELECT: P,
    USER_SETTINGS_PROTO_UPDATE: q,
    SOUNDBOARD_FETCH_DEFAULT_SOUNDS: U,
    SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS: G,
    SOUNDBOARD_TOP_SOUNDS_FOR_GUILDS_FETCH: V,
    SOUNDBOARD_TOP_SOUNDS_FOR_GUILDS_SUCCESS: F,
    SOUNDBOARD_TOP_SOUNDS_FOR_GUILDS_FAILURE: B,
    SOUNDBOARD_SOUNDS_RECEIVED: x,
    GUILD_DELETE: L,
    AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: Z,
    OVERLAY_INITIALIZE: X
})