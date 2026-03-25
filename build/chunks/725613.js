/** chunk id: 725613 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => f
});
var l = n(478437),
    i = n(574381),
    s = n(311907),
    r = n(73153),
    a = n(142120),
    o = n(927813),
    u = n(661470);
let c = new Set,
    d = {};

function m(e) {
    return new Date(e * o.A.Millis.SECOND).getTime()
}

function h() {
    c.clear()
}

function g(e) {
    c.delete(e.guild.id)
}
class A extends s.Ay.Store {
    initialize() {
        this.waitFor(a.A)
    }
    static displayName = "VoiceChannelStartTimeStore";
    getStartTime(e) {
        if (null != e && null != e.guild_id && e.type === l.r.GUILD_VOICE) return d[e.guild_id]?.[e.id]
    }
    hasRequestedStartTimes(e) {
        return c.has(e)
    }
}
let f = new A(r.h, {
    GUILD_CREATE: g,
    GUILD_DELETE: g,
    CONNECTION_RESUMED: h,
    CONNECTION_OPEN: h,
    VOICE_CHANNEL_START_TIME_UPDATE: function(e) {
        let {
            guildId: t,
            id: n,
            voiceStartTime: l
        } = e, s = u.L.getCurrentConfig({
            guildId: t,
            location: "VoiceChannelStartTimeStore"
        }).enabled;
        if (((0, i.un)() || (0, i.m0)()) && !s) return !1;
        null == d[t] && (d[t] = {}), d[t][n] = null != l ? m(l) : void 0
    },
    CHANNEL_INFO: function(e) {
        let {
            guildId: t,
            channels: n
        } = e;
        for (let {
                id: e,
                voiceStartTime: l
            }
            of(d[t] = {}, n)) d[t][e] = null != l ? m(l) : void 0
    },
    FETCH_CHANNEL_INFO: function(e) {
        let {
            guildId: t
        } = e;
        c.add(t), a.A.getSocket().requestChannelInfo(t, ["status", "voice_start_time"])
    }
})