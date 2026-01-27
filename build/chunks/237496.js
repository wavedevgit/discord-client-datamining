/** Chunk was on web.js **/
/** chunk id: 237496, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => I
});
var r, i = n(311907),
    a = n(73153),
    o = n(555444),
    s = n(961350),
    l = n(734057),
    c = n(430452),
    u = n(576705),
    d = n(383501),
    f = n(977997),
    p = n(652215);

function _(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let h = !0,
    m = !0,
    g = !0;

function E(e) {
    return null == e || !!e.suppress || null != e.requestToSpeakTimestamp
}

function y() {
    let e, t = d.A.getChannelId(),
        n = !1;
    if (null == t) e = !0;
    else {
        let r = l.A.getChannel(t),
            i = f.A.getVoiceState(null == r ? void 0 : r.getGuildId(), s.default.getId());
        n = c.A.getMode() === p.TBI.VOICE_ACTIVITY;
        let a = (0, o.H)({
            location: "doPTT",
            autoTrackExposure: !1
        }).enableLatching && c.A.getModeOptions().pttLatchingEnabled;
        e = !(n || a) || null == r || r.isPrivate() || r.isGuildStageVoice() || u.A.can(p.xBc.USE_VAD, r) || E(i)
    }
    let r = e || !n,
        i = e || n;
    if (h === e && m === i) return !1;
    g = r, h = r, m = i, a.h.dispatch({
        type: "SET_VAD_PERMISSION",
        hasPermission: h,
        hasLatchPermission: m
    })
}

function b(e) {
    let {
        voiceStates: t
    } = e;
    return t.some(e => {
        let {
            userId: t
        } = e;
        return t === s.default.getId() && y()
    })
}

function O() {
    g = !0
}

function v() {
    g = h
}
class A extends(r = i.Ay.Store) {
    initialize() {
        this.waitFor(s.default, l.A, c.A, u.A, d.A, f.A)
    }
    shouldShowWarning() {
        return !g
    }
    canUseVoiceActivity() {
        return h
    }
    canUseLatching() {
        return m
    }
}
_(A, "displayName", "PermissionVADStore");
let I = new A(a.h, {
    RTC_CONNECTION_STATE: y,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: y,
    AUDIO_SET_MODE: y,
    CHANNEL_UPDATES: y,
    THREAD_UPDATE: y,
    GUILD_ROLE_UPDATE: y,
    GUILD_MEMBER_UPDATE: y,
    IMPERSONATE_UPDATE: y,
    IMPERSONATE_STOP: y,
    VOICE_STATE_UPDATES: b,
    AUDIO_TOGGLE_SELF_MUTE: v,
    PERMISSION_CLEAR_VAD_WARNING: O
})