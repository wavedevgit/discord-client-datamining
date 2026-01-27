/** Chunk was on web.js **/
/** chunk id: 240525, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => j
}), n(896048);
var r = n(734057),
    i = n(498642),
    a = n(536802),
    o = n(309010),
    s = n(753027),
    l = n(447508),
    c = n(383682),
    u = n(27548),
    d = n(363433),
    f = n(552618),
    p = n(879658);

function _(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let h = 750,
    m = 15,
    g = 500,
    E = 25,
    y = 25,
    b = 1,
    O = null,
    v = new l.o(h, g),
    A = new c.K(m),
    I = !1;
class S extends a.A {
    initialize() {
        this.waitFor(r.A), this.waitFor(o.A), this.waitFor(i.A), this.syncWith([s.A], () => !0), this.syncWith([o.A], T)
    }
    loadCache() {
        let e = this.readSnapshot(S.LATEST_SNAPSHOT_VERSION);
        null != e && (I = !0, S.mergeSnapshot(e))
    }
    canEvictOrphans() {
        return I
    }
    saveLimit(e) {
        let t = r.A.getBasicChannel(e);
        return null != t && (0, d.Z)(t) ? E : null != t && (o.A.getChannelId() === e || v.has(e)) ? y : b
    }
    getSaveableChannels() {
        let e = r.A.getChannelIds(null).map(e => ({
            guildId: null,
            channelId: e
        }));
        return s.A.isLowDisk ? null != O ? [...e, O] : e : [...e, ...v.values()]
    }
    takeSnapshot() {
        return {
            version: S.LATEST_SNAPSHOT_VERSION,
            data: {
                channels: [...v.allValues()].filter(e => !e.fallback),
                penalized: [...A.keys()],
                lastChannel: O
            }
        }
    }
    static mergeSnapshot(e) {
        let t = v,
            n = A;
        for (let n of (v = new l.o(v.primaryCapacity, v.extendedCapacity), A = new c.K(A.capacity), O = null != O ? O : e.lastChannel, [e.channels, t.values()]))
            for (let e of n) e.fallback || v.put(e.channelId, e);
        for (let t of [e.penalized, n.keys()])
            for (let e of t) A.put(e, null)
    }
    static recordChannel(e) {
        let t = r.A.getBasicChannel(e);
        if (null != t && (0, f.c)(t)) {
            var n;
            let r = {
                guildId: null != (n = t.guild_id) ? n : null,
                channelId: e,
                channelType: t.type
            };
            O = r, v.put(e, r), (0, u.qA)(t) && null != A.put(e, null) && v.delete(e)
        }
    }
    static deleteChannel(e) {
        v.delete(e)
    }
    static deleteGuild(e) {
        for (let t of v.allValues()) t.guildId === e && v.delete(t.channelId)
    }
    static dropUnreachableChannels() {
        for (let e of v.keys()) {
            let t = r.A.getBasicChannel(e);
            (0, f.c)(t) || S.deleteChannel(e)
        }
    }
    static deleteUnreadableGuildChannels(e) {
        for (let t of v.values()) e !== t.guildId || (0, f.J)(t.channelId) || S.deleteChannel(t.channelId)
    }
    static replaceLru(e) {
        v = e
    }
    constructor() {
        super({
            CACHE_LOADED_LAZY_NO_CACHE: M,
            CACHE_LOADED_LAZY: () => this.loadCache(),
            CHANNEL_DELETE: R,
            CHANNEL_UPDATES: w,
            CONNECTION_OPEN_SUPPLEMENTAL: C,
            GUILD_DELETE: L,
            LOGIN_SUCCESS: x,
            THREAD_DELETE: D,
            THREAD_UPDATE: P
        })
    }
}

function T() {
    let e = o.A.getChannelId();
    null != e && S.recordChannel(e)
}

function C() {
    S.dropUnreachableChannels(), S.replaceLru((0, p.I)(v, h + g))
}

function N(e) {
    let t = e.id,
        n = (0, f.c)(e),
        r = o.A.getChannelId();
    n && t === r && S.recordChannel(t), n || S.deleteChannel(t)
}

function w(e) {
    for (let t of e.channels) N(t)
}

function R(e) {
    S.deleteChannel(e.channel.id)
}

function P(e) {
    N(e.channel)
}

function D(e) {
    S.deleteChannel(e.channel.id)
}

function L(e) {
    return !e.guild.unavailable && (S.deleteGuild(e.guild.id), !0)
}

function x(e) {
    v.clear(), A.clear(), I = !1
}

function M(e) {
    I = !0
}
_(S, "displayName", "SaveableChannelsStore"), _(S, "LATEST_SNAPSHOT_VERSION", 1);
let j = new S