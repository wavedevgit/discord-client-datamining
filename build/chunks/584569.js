/** chunk id: 584569 params = (module,exports,require) **/
i.d(t, {
    A: () => y
});
var n = i(311907),
    a = i(205693),
    l = i(73153),
    s = i(194862),
    r = i(259464),
    o = i(288737),
    c = i(562153),
    d = i(734057),
    u = i(383501),
    m = i(287809),
    _ = i(977997),
    p = i(607567),
    h = i(652215),
    A = i(806931);
let g = new s.A,
    f = new s.A,
    v = new Set;

function S(e, t, i) {
    let n = new o.A({
            userId: e.id,
            channelId: i
        }),
        a = (0, p.RQ)(n, t ?? h.ME, e.id);
    g.set(e.id, a);
    let l = {
        type: A.lp.USER,
        user: e,
        id: e.id,
        streamId: null,
        voiceState: n,
        voicePlatform: null,
        speaking: !1,
        lastSpoke: 0,
        soundsharing: !1,
        ringing: !1,
        userNick: c.Ay.getName(t, i, e),
        userAvatarDecoration: (0, r.U)(e, t),
        localVideoDisabled: !1,
        isPoppedOut: !1
    };
    f.set(e.id, l)
}

function I(e) {
    let t = g.delete(e),
        i = f.delete(e),
        n = v.delete(e);
    return t || i || n
}

function T() {
    let e = u.A.getChannelId();
    if (null == e) return !1;
    let t = d.A.getChannel(e)?.getGuildId(),
        i = !1;
    return v.forEach(n => {
        if (null != _.A.getVoiceStateForChannel(e, n)) return void v.delete(n);
        let a = m.default.getUser(n);
        null != a && (i = !0, v.delete(n), S(a, t, e))
    }), i
}

function C() {
    g.clear(), f.clear(), v.clear()
}
class E extends n.Ay.Store {
    static displayName = "RTCConnectionDesyncStore";
    initialize() {
        this.waitFor(_.A, m.default, d.A, u.A), this.syncWith([m.default], T)
    }
    get desyncedVoiceStatesCount() {
        return g.size()
    }
    getDesyncedUserIds() {
        return g.keys()
    }
    getDesyncedVoiceStates() {
        return g.values()
    }
    getDesyncedParticipants() {
        return f.values()
    }
}
let y = new E(l.h, {
    CONNECTION_OPEN: function() {
        C()
    },
    VOICE_CHANNEL_SELECT: C,
    RTC_CONNECTION_STATE: function(e) {
        let {
            state: t,
            context: i
        } = e;
        if (i !== a.x.DEFAULT || t !== h.S7L.DISCONNECTED) return !1;
        C()
    },
    VOICE_STATE_UPDATES: function(e) {
        let {
            voiceStates: t
        } = e, i = u.A.getChannelId();
        return null != i && t.reduce((e, t) => {
            let {
                userId: n,
                channelId: a
            } = t;
            return a === i && !!I(n) || e
        }, !1)
    },
    RTC_CONNECTION_CLIENT_CONNECT: function(e) {
        let {
            userIds: t,
            guildId: i,
            channelId: n,
            context: l
        } = e;
        return l === a.x.DEFAULT && t.reduce((e, t) => {
            if (null != _.A.getVoiceStateForChannel(n, t)) return e;
            let a = m.default.getUser(t);
            return null == a ? (v.add(t), e) : (S(a, i, n), !0)
        }, !1)
    },
    RTC_CONNECTION_CLIENT_DISCONNECT: function(e) {
        let {
            userId: t,
            context: i
        } = e;
        return i === a.x.DEFAULT && I(t)
    }
})