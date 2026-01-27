/** Chunk was on web.js **/
/** chunk id: 732755, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => C
});
var r, i = n(812729),
    a = n.n(i),
    o = n(311907),
    s = n(73153),
    l = n(734057),
    c = n(71393),
    u = n(383501),
    d = n(309010),
    f = n(488926),
    p = n(63995),
    _ = n(69407),
    h = n(82149),
    m = n(446600),
    g = n(96566),
    E = n(516607),
    y = n(652215);

function b(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let O = null;

function v() {
    var e, t, n, r, i, a, o;
    let s = d.A.getVoiceChannelId();
    if (null == s) return null;
    let u = m.A.getStageInstanceByChannel(s);
    if (null == u) return null;
    let b = l.A.getChannel(s);
    if (null == b || !f.Ib(y.xBc.VIEW_CHANNEL, b)) return null;
    let v = c.A.getGuild(b.getGuildId());
    if (null == v || !v.features.has(y.GuildFeatures.DISCOVERABLE)) return null;
    let A = (0, h.eL)(b, u),
        I = (null == O || null == (i = O.party) ? void 0 : i.id) === A ? O : null,
        S = p.A.getMutableParticipants(b.id, _.ip.SPEAKER),
        T = S.filter(e => e.type === _.wY.STREAM).length,
        C = S.length - T,
        N = p.A.getParticipantCount(s) - T,
        w = (null == I || null == (a = I.party) ? void 0 : a.size) != null ? I.party.size[1] : 0;
    return {
        application_id: E.SS,
        name: null != (e = null != (t = u.topic) ? t : b.topic) ? e : b.name,
        type: (0, g.xn)(b.id) ? y.$pd.WATCHING : y.$pd.LISTENING,
        timestamps: {
            start: null != (n = null == I || null == (o = I.timestamps) ? void 0 : o.start) ? n : new Date().getTime()
        },
        assets: {
            small_image: null != (r = v.icon) ? r : void 0,
            small_text: v.name
        },
        party: {
            id: A,
            size: [C, Math.max(N, w)]
        }
    }
}

function A() {
    let e = v();
    return !a()(e, O) && (O = e, !0)
}

function I(e) {
    let {
        voiceStates: t
    } = e;
    if (null == O) return;
    let n = (0, h.UW)(O);
    null != n && null != t.find(e => e.channelId === n.channelId) && A()
}

function S(e) {
    var t, n, r;
    let {
        state: i
    } = e, a = null != (t = null == O || null == (r = O.party) || null == (n = r.size) ? void 0 : n[1]) ? t : 0;
    return i === y.S7L.RTC_CONNECTED && !(a > 0) && A()
}
class T extends(r = o.Ay.Store) {
    initialize() {
        this.waitFor(l.A, c.A, u.A, d.A, p.A, m.A)
    }
    getActivity() {
        return O
    }
}
b(T, "displayName", "StageChannelSelfRichPresenceStore");
let C = new T(s.h, {
    CONNECTION_OPEN: A,
    STAGE_INSTANCE_CREATE: A,
    STAGE_INSTANCE_UPDATE: A,
    STAGE_INSTANCE_DELETE: A,
    VOICE_CHANNEL_SELECT: A,
    RTC_CONNECTION_STATE: S,
    VOICE_STATE_UPDATES: I
})