/** Chunk was on 1113 **/
/** chunk id: 725613, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => A
}), n(896048);
var r, l, i = n(478437),
    s = n(574381),
    a = n(311907),
    o = n(73153),
    c = n(142120),
    u = n(927813),
    d = n(661470);
let h = new Set,
    p = {};

function g(e) {
    return new Date(e * u.A.Millis.SECOND).getTime()
}

function f() {
    h.clear()
}

function m(e) {
    h.delete(e.guild.id)
}
class b extends(r = a.Ay.Store) {
    initialize() {
        this.waitFor(c.A)
    }
    getStartTime(e) {
        var t;
        if (null != e && null != e.guild_id && e.type === i.r.GUILD_VOICE) return null == (t = p[e.guild_id]) ? void 0 : t[e.id]
    }
    hasRequestedStartTimes(e) {
        return h.has(e)
    }
}(l = "displayName") in b ? Object.defineProperty(b, l, {
    value: "VoiceChannelStartTimeStore",
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : b[l] = "VoiceChannelStartTimeStore";
let A = new b(o.h, {
    GUILD_CREATE: m,
    GUILD_DELETE: m,
    CONNECTION_RESUMED: f,
    CONNECTION_OPEN: f,
    VOICE_CHANNEL_START_TIME_UPDATE: function(e) {
        let {
            guildId: t,
            id: n,
            voiceStartTime: r
        } = e, l = d.L.getCurrentConfig({
            guildId: t,
            location: "VoiceChannelStartTimeStore"
        }).enabled;
        if (((0, s.un)() || (0, s.m0)()) && !l) return !1;
        null == p[t] && (p[t] = {}), p[t][n] = null != r ? g(r) : void 0
    },
    CHANNEL_INFO: function(e) {
        let {
            guildId: t,
            channels: n
        } = e;
        for (let {
                id: e,
                voiceStartTime: r
            }
            of(p[t] = {}, n)) p[t][e] = null != r ? g(r) : void 0
    },
    FETCH_CHANNEL_INFO: function(e) {
        let {
            guildId: t
        } = e;
        h.add(t), c.A.getSocket().requestChannelInfo(t, ["status", "voice_start_time"])
    }
})