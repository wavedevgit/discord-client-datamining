/** chunk id: 584569 params = (module,exports,require) **/
n.d(e, {
    A: () => N
});
var i = n(311907),
    l = n(205693),
    r = n(73153),
    s = n(194862),
    a = n(259464),
    o = n(288737),
    u = n(562153),
    d = n(734057),
    c = n(383501),
    h = n(287809),
    A = n(977997),
    m = n(607567),
    p = n(652215),
    g = n(806931);
let f = new s.A,
    T = new s.A,
    E = new Set;

function C(t, e, n) {
    let i = new o.A({
            userId: t.id,
            channelId: n
        }),
        l = (0, m.RQ)(i, e ?? p.ME, t.id);
    f.set(t.id, l);
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
        userNick: u.Ay.getName(e, n, t),
        userAvatarDecoration: (0, a.U)(t, e),
        localVideoDisabled: !1,
        isPoppedOut: !1
    };
    T.set(t.id, r)
}

function S(t) {
    let e = f.delete(t),
        n = T.delete(t),
        i = E.delete(t);
    return e || n || i
}

function _() {
    let t = c.A.getChannelId();
    if (null == t) return !1;
    let e = d.A.getChannel(t)?.getGuildId(),
        n = !1;
    return E.forEach(i => {
        if (null != A.A.getVoiceStateForChannel(t, i)) return void E.delete(i);
        let l = h.default.getUser(i);
        null != l && (n = !0, E.delete(i), C(l, e, t))
    }), n
}

function y() {
    f.clear(), T.clear(), E.clear()
}
class I extends i.Ay.Store {
    static displayName = "RTCConnectionDesyncStore";
    initialize() {
        this.waitFor(A.A, h.default, d.A, c.A), this.syncWith([h.default], _)
    }
    get desyncedVoiceStatesCount() {
        return f.size()
    }
    getDesyncedUserIds() {
        return f.keys()
    }
    getDesyncedVoiceStates() {
        return f.values()
    }
    getDesyncedParticipants() {
        return T.values()
    }
}
let N = new I(r.h, {
    CONNECTION_OPEN: function() {
        y()
    },
    VOICE_CHANNEL_SELECT: y,
    RTC_CONNECTION_STATE: function(t) {
        let {
            state: e,
            context: n
        } = t;
        if (n !== l.x.DEFAULT || e !== p.S7L.DISCONNECTED) return !1;
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
            return l === n && !!S(i) || t
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
            if (null != A.A.getVoiceStateForChannel(i, e)) return t;
            let l = h.default.getUser(e);
            return null == l ? (E.add(e), t) : (C(l, n, i), !0)
        }, !1)
    },
    RTC_CONNECTION_CLIENT_DISCONNECT: function(t) {
        let {
            userId: e,
            context: n
        } = t;
        return n === l.x.DEFAULT && S(e)
    }
})