/** chunk id: 25639 params = (module,exports,require) **/
n.d(t, {
    A: () => f,
    s: () => u
});
var i, l = n(311907),
    a = n(73153),
    s = n(967198),
    r = n(977997),
    u = ((i = {}).GENTLE_AMBIENT = "GENTLE_AMBIENT", i.GENTLE_AMBIENT_WITH_INTRO = "GENTLE_AMBIENT_WITH_INTRO", i.HIGH_CONTRAST = "HIGH_CONTRAST", i);
let o = {},
    c = {},
    d = null;

function A(e) {
    null != c[e] && (clearTimeout(c[e]), delete c[e])
}

function h(e) {
    A(e), c[e] = setTimeout(() => {
        let t = o[e];
        null != t && (o[e] = {
            ...t,
            style: "GENTLE_AMBIENT"
        }, m.emitChange()), delete c[e]
    }, 2e3)
}

function E() {
    for (let e of Object.keys(c)) clearTimeout(c[e]);
    c = {}, o = {}
}

function _() {
    return E(), !0
}
class g extends l.Ay.Store {
    static displayName = "VoiceChannelAnimationStateStore";
    initialize() {
        this.waitFor(r.A, s.A)
    }
    getAnimationStyle(e) {
        return o[e]?.style ?? "GENTLE_AMBIENT"
    }
    getUserCount(e) {
        return o[e]?.userCount ?? 0
    }
}
let m = new g(a.h, {
        VOICE_STATE_UPDATES: function(e) {
            let {
                voiceStates: t
            } = e, n = s.A.getGuildId();
            n !== d && null != n && (d = n);
            let i = {};
            for (let e of t) e.guildId === n && (null != e.oldChannelId && (i[e.oldChannelId] = (i[e.oldChannelId] ?? 0) - 1), null != e.channelId && (i[e.channelId] = (i[e.channelId] ?? 0) + 1));
            let l = !1;
            for (let [e, t] of Object.entries(i))(function(e, t) {
                let n = o[e],
                    i = n?.userCount ?? 0,
                    l = Math.max(0, i + t);
                return 0 === i && l > 0 ? (o[e] = {
                    style: "GENTLE_AMBIENT_WITH_INTRO",
                    userCount: l
                }, h(e), !0) : i > 0 && l > i ? (o[e] = {
                    style: "HIGH_CONTRAST",
                    userCount: l
                }, h(e), !0) : 0 === l ? (A(e), delete o[e], !0) : null != n && l !== i && (o[e] = {
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
            if (t === d || null == t) return !1;
            d = t, E();
            let n = r.A.getVoiceStates(t),
                i = {};
            for (let e of Object.values(n)) null != e.channelId && (i[e.channelId] = (i[e.channelId] ?? 0) + 1);
            for (let [e, t] of Object.entries(i)) t > 0 && (o[e] = {
                style: "GENTLE_AMBIENT",
                userCount: t
            });
            return !0
        },
        CONNECTION_OPEN: _,
        LOGOUT: _
    }),
    f = m