/** chunk id: 584569 params = (module,exports,require) **/
i.d(e, {
    A: () => _
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
    p = i(287809),
    m = i(977997),
    A = i(607567),
    h = i(652215),
    g = i(806931);
let f = new s.A,
    S = new s.A,
    T = new Set;

function E(t, e, i) {
    let n = new o.A({
            userId: t.id,
            channelId: i
        }),
        l = (0, A.RQ)(n, e ?? h.ME, t.id);
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
    S.set(t.id, r)
}

function C(t) {
    let e = f.delete(t),
        i = S.delete(t),
        n = T.delete(t);
    return e || i || n
}

function v() {
    let t = c.A.getChannelId();
    if (null == t) return !1;
    let e = u.A.getChannel(t)?.getGuildId(),
        i = !1;
    return T.forEach(n => {
        if (null != m.A.getVoiceStateForChannel(t, n)) return void T.delete(n);
        let l = p.default.getUser(n);
        null != l && (i = !0, T.delete(n), E(l, e, t))
    }), i
}

function y() {
    f.clear(), S.clear(), T.clear()
}
class I extends n.Ay.Store {
    static displayName = "RTCConnectionDesyncStore";
    initialize() {
        this.waitFor(m.A, p.default, u.A, c.A), this.syncWith([p.default], v)
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
        return S.values()
    }
}
let _ = new I(r.h, {
    CONNECTION_OPEN: function() {
        y()
    },
    VOICE_CHANNEL_SELECT: y,
    RTC_CONNECTION_STATE: function(t) {
        let {
            state: e,
            context: i
        } = t;
        if (i !== l.x.DEFAULT || e !== h.S7L.DISCONNECTED) return !1;
        y()
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
            if (null != m.A.getVoiceStateForChannel(n, e)) return t;
            let l = p.default.getUser(e);
            return null == l ? (T.add(e), t) : (E(l, i, n), !0)
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