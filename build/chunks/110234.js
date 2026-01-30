/** chunk id: 110234, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => i
});
var r = n(51082),
    l = n(806931);

function i(e, t) {
    var n, i;
    let a = null,
        o = null,
        s = null,
        c = !1,
        u = !1,
        d = !1;
    switch (e.type) {
        case l.lp.ACTIVITY:
            break;
        case l.lp.USER:
            a = e.streamId, s = e.voiceState, c = e.speaking, u = e.latched, d = e.ringing;
            break;
        case l.lp.STREAM:
            a = e.streamId, o = e.stream
    }
    return {
        streamId: a,
        stream: o,
        speaking: c,
        latched: u,
        ringing: d,
        muted: null != (n = null == s ? void 0 : s.isVoiceMuted()) && n,
        deafen: null != (i = null == s ? void 0 : s.isVoiceDeafened()) && i,
        mirror: e.type === l.lp.USER && e.user.id === t,
        hasVideo: (0, r.Ay)(e)
    }
}