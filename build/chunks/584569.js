/** Chunk was on 78572 **/
/** chunk id: 584569, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => T
}), n(896048);
var r, i, l = n(311907),
    a = n(205693),
    s = n(73153),
    o = n(194862),
    c = n(357046),
    u = n(288737),
    d = n(562153),
    p = n(734057),
    f = n(383501),
    m = n(287809),
    g = n(977997),
    y = n(607567),
    b = n(652215),
    _ = n(806931);
let h = new o.A,
    A = new o.A,
    v = new Set;

function O(e, t, n) {
    let r = new u.A({
            userId: e.id,
            channelId: n
        }),
        i = (0, y.RQ)(r, null != t ? t : b.ME, e.id);
    h.set(e.id, i);
    let l = {
        type: _.lp.USER,
        user: e,
        id: e.id,
        streamId: null,
        voiceState: r,
        voicePlatform: null,
        speaking: !1,
        latched: !1,
        lastSpoke: 0,
        soundsharing: !1,
        ringing: !1,
        userNick: d.Ay.getName(t, n, e),
        userAvatarDecoration: (0, c.U)(e, t),
        localVideoDisabled: !1,
        isPoppedOut: !1
    };
    A.set(e.id, l)
}

function S(e) {
    let t = h.delete(e),
        n = A.delete(e),
        r = v.delete(e);
    return t || n || r
}

function j() {
    var e;
    let t = f.A.getChannelId();
    if (null == t) return !1;
    let n = null == (e = p.A.getChannel(t)) ? void 0 : e.getGuildId(),
        r = !1;
    return v.forEach(e => {
        if (null != g.A.getVoiceStateForChannel(t, e)) return void v.delete(e);
        let i = m.default.getUser(e);
        null != i && (r = !0, v.delete(e), O(i, n, t))
    }), r
}

function x() {
    h.clear(), A.clear(), v.clear()
}
class I extends(r = l.Ay.Store) {
    initialize() {
        this.waitFor(g.A, m.default, p.A, f.A), this.syncWith([m.default], j)
    }
    get desyncedVoiceStatesCount() {
        return h.size()
    }
    getDesyncedUserIds() {
        return h.keys()
    }
    getDesyncedVoiceStates() {
        return h.values()
    }
    getDesyncedParticipants() {
        return A.values()
    }
}(i = "displayName") in I ? Object.defineProperty(I, i, {
    value: "RTCConnectionDesyncStore",
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : I[i] = "RTCConnectionDesyncStore";
let T = new I(s.h, {
    CONNECTION_OPEN: function() {
        x()
    },
    VOICE_CHANNEL_SELECT: x,
    RTC_CONNECTION_STATE: function(e) {
        let {
            state: t,
            context: n
        } = e;
        if (n !== a.x.DEFAULT || t !== b.S7L.DISCONNECTED) return !1;
        x()
    },
    VOICE_STATE_UPDATES: function(e) {
        let {
            voiceStates: t
        } = e, n = f.A.getChannelId();
        return null != n && t.reduce((e, t) => {
            let {
                userId: r,
                channelId: i
            } = t;
            return i === n && !!S(r) || e
        }, !1)
    },
    RTC_CONNECTION_CLIENT_CONNECT: function(e) {
        let {
            userIds: t,
            guildId: n,
            channelId: r,
            context: i
        } = e;
        return i === a.x.DEFAULT && t.reduce((e, t) => {
            if (null != g.A.getVoiceStateForChannel(r, t)) return e;
            let i = m.default.getUser(t);
            return null == i ? (v.add(t), e) : (O(i, n, r), !0)
        }, !1)
    },
    RTC_CONNECTION_CLIENT_DISCONNECT: function(e) {
        let {
            userId: t,
            context: n
        } = e;
        return n === a.x.DEFAULT && S(t)
    }
})