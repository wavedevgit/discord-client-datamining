/** chunk id: 584569 params = (module,exports,require) **/
i.d(t, {
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
    A = i(287809),
    h = i(977997),
    m = i(607567),
    p = i(652215),
    g = i(806931);
let f = new s.A,
    T = new s.A,
    S = new Set;

function E(e, t, i) {
    let n = new o.A({
            userId: e.id,
            channelId: i
        }),
        l = (0, m.RQ)(n, t ?? p.ME, e.id);
    f.set(e.id, l);
    let r = {
        type: g.lp.USER,
        user: e,
        id: e.id,
        streamId: null,
        voiceState: n,
        voicePlatform: null,
        speaking: !1,
        lastSpoke: 0,
        soundsharing: !1,
        ringing: !1,
        userNick: d.Ay.getName(t, i, e),
        userAvatarDecoration: (0, a.U)(e, t),
        localVideoDisabled: !1,
        isPoppedOut: !1
    };
    T.set(e.id, r)
}

function C(e) {
    let t = f.delete(e),
        i = T.delete(e),
        n = S.delete(e);
    return t || i || n
}

function v() {
    let e = c.A.getChannelId();
    if (null == e) return !1;
    let t = u.A.getChannel(e)?.getGuildId(),
        i = !1;
    return S.forEach(n => {
        if (null != h.A.getVoiceStateForChannel(e, n)) return void S.delete(n);
        let l = A.default.getUser(n);
        null != l && (i = !0, S.delete(n), E(l, t, e))
    }), i
}

function _() {
    f.clear(), T.clear(), S.clear()
}
class y extends n.Ay.Store {
    static displayName = "RTCConnectionDesyncStore";
    initialize() {
        this.waitFor(h.A, A.default, u.A, c.A), this.syncWith([A.default], v)
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
let x = new y(r.h, {
    CONNECTION_OPEN: function() {
        _()
    },
    VOICE_CHANNEL_SELECT: _,
    RTC_CONNECTION_STATE: function(e) {
        let {
            state: t,
            context: i
        } = e;
        if (i !== l.x.DEFAULT || t !== p.S7L.DISCONNECTED) return !1;
        _()
    },
    VOICE_STATE_UPDATES: function(e) {
        let {
            voiceStates: t
        } = e, i = c.A.getChannelId();
        return null != i && t.reduce((e, t) => {
            let {
                userId: n,
                channelId: l
            } = t;
            return l === i && !!C(n) || e
        }, !1)
    },
    RTC_CONNECTION_CLIENT_CONNECT: function(e) {
        let {
            userIds: t,
            guildId: i,
            channelId: n,
            context: r
        } = e;
        return r === l.x.DEFAULT && t.reduce((e, t) => {
            if (null != h.A.getVoiceStateForChannel(n, t)) return e;
            let l = A.default.getUser(t);
            return null == l ? (S.add(t), e) : (E(l, i, n), !0)
        }, !1)
    },
    RTC_CONNECTION_CLIENT_DISCONNECT: function(e) {
        let {
            userId: t,
            context: i
        } = e;
        return i === l.x.DEFAULT && C(t)
    }
})