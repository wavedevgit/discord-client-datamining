/** chunk id: 25639 params = (module,exports,require) **/
n.d(t, {
    A: () => m,
    s: () => o
});
var i, l = n(311907),
    a = n(73153),
    r = n(967198),
    s = n(977997),
    o = ((i = {}).GENTLE_AMBIENT = "GENTLE_AMBIENT", i.GENTLE_AMBIENT_WITH_INTRO = "GENTLE_AMBIENT_WITH_INTRO", i.HIGH_CONTRAST = "HIGH_CONTRAST", i);
let u = {},
    d = {},
    c = null;

function A(e) {
    null != d[e] && (clearTimeout(d[e]), delete d[e])
}

function h(e) {
    A(e), d[e] = setTimeout(() => {
        let t = u[e];
        null != t && (u[e] = {
            ...t,
            style: "GENTLE_AMBIENT"
        }, g.emitChange()), delete d[e]
    }, 2e3)
}

function E() {
    for (let e of Object.keys(d)) clearTimeout(d[e]);
    d = {}, u = {}
}

function _() {
    return E(), !0
}
class f extends l.Ay.Store {
    static displayName = "VoiceChannelAnimationStateStore";
    initialize() {
        this.waitFor(s.A, r.A)
    }
    getAnimationStyle(e) {
        return u[e]?.style ?? "GENTLE_AMBIENT"
    }
    getUserCount(e) {
        return u[e]?.userCount ?? 0
    }
}
let g = new f(a.h, {
        VOICE_STATE_UPDATES: function(e) {
            let {
                voiceStates: t
            } = e, n = r.A.getGuildId();
            n !== c && null != n && (c = n);
            let i = {};
            for (let e of t) e.guildId === n && (null != e.oldChannelId && (i[e.oldChannelId] = (i[e.oldChannelId] ?? 0) - 1), null != e.channelId && (i[e.channelId] = (i[e.channelId] ?? 0) + 1));
            let l = !1;
            for (let [e, t] of Object.entries(i))(function(e, t) {
                let n = u[e],
                    i = n?.userCount ?? 0,
                    l = Math.max(0, i + t);
                return 0 === i && l > 0 ? (u[e] = {
                    style: "GENTLE_AMBIENT_WITH_INTRO",
                    userCount: l
                }, h(e), !0) : i > 0 && l > i ? (u[e] = {
                    style: "HIGH_CONTRAST",
                    userCount: l
                }, h(e), !0) : 0 === l ? (A(e), delete u[e], !0) : null != n && l !== i && (u[e] = {
                    ...n,
                    userCount: l
                }, !0)
            })(e, t) && (l = !0);
            return l
        },
        CHANNEL_SELECT: function(e) {
            let {
                guildId: t
            } = e;
            if (t === c || null == t) return !1;
            c = t, E();
            let n = s.A.getVoiceStates(t),
                i = {};
            for (let e of Object.values(n)) null != e.channelId && (i[e.channelId] = (i[e.channelId] ?? 0) + 1);
            for (let [e, t] of Object.entries(i)) t > 0 && (u[e] = {
                style: "GENTLE_AMBIENT",
                userCount: t
            });
            return !0
        },
        CONNECTION_OPEN: _,
        LOGOUT: _
    }),
    m = g