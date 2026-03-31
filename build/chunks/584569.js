/** chunk id: 584569 params = (module,exports,require) **/
i.d(e, {
    A: () => x
});
var n = i(311907),
    l = i(205693),
    r = i(73153),
    s = i(194862),
    a = i(259464),
    o = i(288737),
    d = i(562153),
    u = i(734057),
    c = i(383501),
    m = i(287809),
    A = i(977997),
    h = i(607567),
    p = i(652215),
    g = i(806931);
let f = new s.A,
    T = new s.A,
    S = new Set;

function E(t, e, i) {
    let n = new o.A({
            userId: t.id,
            channelId: i
        }),
        l = (0, h.RQ)(n, e ?? p.ME, t.id);
    f.set(t.id, l);
    let r = {
        type: g.lp.USER,
        user: t,
        id: t.id,
        streamId: null,
        voiceState: n,
        voicePlatform: null,
        speaking: !1,
        lastSpoke: 0,
        soundsharing: !1,
        ringing: !1,
        userNick: d.Ay.getName(e, i, t),
        userAvatarDecoration: (0, a.U)(t, e),
        localVideoDisabled: !1,
        isPoppedOut: !1
    };
    T.set(t.id, r)
}

function C(t) {
    let e = f.delete(t),
        i = T.delete(t),
        n = S.delete(t);
    return e || i || n
}

function v() {
    let t = c.A.getChannelId();
    if (null == t) return !1;
    let e = u.A.getChannel(t)?.getGuildId(),
        i = !1;
    return S.forEach(n => {
        if (null != A.A.getVoiceStateForChannel(t, n)) return void S.delete(n);
        let l = m.default.getUser(n);
        null != l && (i = !0, S.delete(n), E(l, e, t))
    }), i
}

function I() {
    f.clear(), T.clear(), S.clear()
}
class _ extends n.Ay.Store {
    static displayName = "RTCConnectionDesyncStore";
    initialize() {
        this.waitFor(A.A, m.default, u.A, c.A), this.syncWith([m.default], v)
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
let x = new _(r.h, {
    CONNECTION_OPEN: function() {
        I()
    },
    VOICE_CHANNEL_SELECT: I,
    RTC_CONNECTION_STATE: function(t) {
        let {
            state: e,
            context: i
        } = t;
        if (i !== l.x.DEFAULT || e !== p.S7L.DISCONNECTED) return !1;
        I()
    },
    VOICE_STATE_UPDATES: function(t) {
        let {
            voiceStates: e
        } = t, i = c.A.getChannelId();
        return null != i && e.reduce((t, e) => {
            let {
                userId: n,
                channelId: l
            } = e;
            return l === i && !!C(n) || t
        }, !1)
    },
    RTC_CONNECTION_CLIENT_CONNECT: function(t) {
        let {
            userIds: e,
            guildId: i,
            channelId: n,
            context: r
        } = t;
        return r === l.x.DEFAULT && e.reduce((t, e) => {
            if (null != A.A.getVoiceStateForChannel(n, e)) return t;
            let l = m.default.getUser(e);
            return null == l ? (S.add(e), t) : (E(l, i, n), !0)
        }, !1)
    },
    RTC_CONNECTION_CLIENT_DISCONNECT: function(t) {
        let {
            userId: e,
            context: i
        } = t;
        return i === l.x.DEFAULT && C(e)
    }
})