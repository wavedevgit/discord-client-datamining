/** chunk id: 584569, original params: t,e,n (module,exports,require) **/
n.d(e, {
    A: () => x
});
var i = n(311907),
    l = n(205693),
    r = n(73153),
    a = n(194862),
    s = n(357046),
    o = n(288737),
    d = n(562153),
    u = n(734057),
    c = n(383501),
    A = n(287809),
    p = n(977997),
    m = n(607567),
    h = n(652215),
    g = n(806931);
let E = new a.A,
    f = new a.A,
    C = new Set;

function S(t, e, n) {
    let i = new o.A({
            userId: t.id,
            channelId: n
        }),
        l = (0, m.RQ)(i, e ?? h.ME, t.id);
    E.set(t.id, l);
    let r = {
        type: g.lp.USER,
        user: t,
        id: t.id,
        streamId: null,
        voiceState: i,
        voicePlatform: null,
        speaking: !1,
        lastSpoke: 0,
        soundsharing: !1,
        ringing: !1,
        userNick: d.Ay.getName(e, n, t),
        userAvatarDecoration: (0, s.U)(t, e),
        localVideoDisabled: !1,
        isPoppedOut: !1
    };
    f.set(t.id, r)
}

function T(t) {
    let e = E.delete(t),
        n = f.delete(t),
        i = C.delete(t);
    return e || n || i
}

function v() {
    let t = c.A.getChannelId();
    if (null == t) return !1;
    let e = u.A.getChannel(t)?.getGuildId(),
        n = !1;
    return C.forEach(i => {
        if (null != p.A.getVoiceStateForChannel(t, i)) return void C.delete(i);
        let l = A.default.getUser(i);
        null != l && (n = !0, C.delete(i), S(l, e, t))
    }), n
}

function y() {
    E.clear(), f.clear(), C.clear()
}
class N extends i.Ay.Store {
    static displayName = "RTCConnectionDesyncStore";
    initialize() {
        this.waitFor(p.A, A.default, u.A, c.A), this.syncWith([A.default], v)
    }
    get desyncedVoiceStatesCount() {
        return E.size()
    }
    getDesyncedUserIds() {
        return E.keys()
    }
    getDesyncedVoiceStates() {
        return E.values()
    }
    getDesyncedParticipants() {
        return f.values()
    }
}
let x = new N(r.h, {
    CONNECTION_OPEN: function() {
        y()
    },
    VOICE_CHANNEL_SELECT: y,
    RTC_CONNECTION_STATE: function(t) {
        let {
            state: e,
            context: n
        } = t;
        if (n !== l.x.DEFAULT || e !== h.S7L.DISCONNECTED) return !1;
        y()
    },
    VOICE_STATE_UPDATES: function(t) {
        let {
            voiceStates: e
        } = t, n = c.A.getChannelId();
        return null != n && e.reduce((t, e) => {
            let {
                userId: i,
                channelId: l
            } = e;
            return l === n && !!T(i) || t
        }, !1)
    },
    RTC_CONNECTION_CLIENT_CONNECT: function(t) {
        let {
            userIds: e,
            guildId: n,
            channelId: i,
            context: r
        } = t;
        return r === l.x.DEFAULT && e.reduce((t, e) => {
            if (null != p.A.getVoiceStateForChannel(i, e)) return t;
            let l = A.default.getUser(e);
            return null == l ? (C.add(e), t) : (S(l, n, i), !0)
        }, !1)
    },
    RTC_CONNECTION_CLIENT_DISCONNECT: function(t) {
        let {
            userId: e,
            context: n
        } = t;
        return n === l.x.DEFAULT && T(e)
    }
})