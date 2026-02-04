/** chunk id: 648427, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
}), n(896048), n(667532);
var l, r = n(311907),
    i = n(73153),
    s = n(95701),
    a = n(734057),
    o = n(696451),
    u = n(71393);

function c(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let d = [],
    h = new Set,
    g = [],
    f = new Set;

function p(e) {
    let {
        channelId: t,
        history: n,
        historySet: l
    } = e;
    if (l.has(t)) {
        let e = n.filter(e => e !== t);
        return e.unshift(t), {
            didChange: !0,
            history: e,
            historySet: new Set([...e])
        }
    }
    let r = [t, ...n],
        i = new Set(l);
    return (i.add(t), r.length > 10) ? (r.length = 10, {
        didChange: !0,
        history: r,
        historySet: new Set([...r])
    }) : {
        didChange: !0,
        history: r,
        historySet: i
    }
}
class I extends(l = r.Ay.PersistedStore) {
    initialize(e) {
        var t, n;
        this.waitFor(o.Ay, u.A, a.A), d = null != (t = null == e ? void 0 : e.voiceChannelHistory) ? t : [], g = null != (n = null == e ? void 0 : e.textChannelHistory) ? n : [], h = new Set([...d]), f = new Set([...g])
    }
    getState() {
        return {
            voiceChannelHistory: d,
            textChannelHistory: g
        }
    }
    getVoiceChannelHistory() {
        return d
    }
    getTextChannelHistory() {
        return g
    }
}
c(I, "displayName", "RecentVoiceChannelStore"), c(I, "persistKey", "RecentVoiceChannelStore"), c(I, "migrations", [e => {
    var t, n, l;
    return null == e || "object" != typeof e ? {
        voiceChannelHistory: [],
        textChannelHistory: []
    } : {
        voiceChannelHistory: null != (t = null != (n = e.voiceChannelHistory) ? n : e.channelHistory) ? t : [],
        textChannelHistory: null != (l = e.textChannelHistory) ? l : []
    }
}]);
let m = new I(i.h, {
    POST_CONNECTION_OPEN: function() {
        h = new Set([...d]), f = new Set([...g])
    },
    VOICE_CHANNEL_SELECT: function(e) {
        var t, n;
        let {
            channelId: l
        } = e;
        if (null == l || !(null != (t = null == (n = a.A.getChannel(l)) ? void 0 : n.isVocal()) && t)) return !1;
        let r = p({
            channelId: l,
            history: d,
            historySet: h
        });
        return d = r.history, h = r.historySet, r.didChange
    },
    CHANNEL_SELECT: function(e) {
        let {
            channelId: t
        } = e;
        if (null == t) return !1;
        let n = a.A.getChannel(t);
        if (null == n || n.isVocal() || n.isPrivate() || !(0, s.ke)(n.type)) return !1;
        let l = p({
            channelId: t,
            history: g,
            historySet: f
        });
        return g = l.history, f = l.historySet, l.didChange
    }
})