/** chunk id: 87203, original params: e,t,n (module,exports,require) **/
n.d(t, {
    s: () => A
});
var r = n(827343),
    i = n(168943),
    l = n(63995),
    a = n(69407),
    s = n(96566),
    o = n(405018),
    c = n(222692),
    u = n(442353),
    d = n(734057),
    p = n(430452),
    h = n(383501),
    g = n(287809),
    f = n(652215),
    m = n(731854);

function A() {
    var e, t;
    if (!(0, i.L)()) return;
    let n = p.A.isVideoEnabled(),
        A = Object.values(p.A.getVideoDevices())[0],
        _ = !1 === (null == (e = null == A ? void 0 : A.disabled) || e),
        b = p.A.supportsInApp(m.O5.VIDEO) && p.A.supportsInApp(m.O5.DESKTOP_CAPTURE),
        E = d.A.getChannel(h.A.getChannelId()),
        O = null == (t = g.default.getCurrentUser()) ? void 0 : t.id;
    if (null == E || null == O) return;
    let {
        reachedLimit: y
    } = (0, o.M)(E);
    if (!y) {
        if (E.isGuildStageVoice()) {
            let e = l.A.getMutableParticipants(E.id, a.ip.SPEAKER),
                t = null == e ? void 0 : e.find(e => {
                    let {
                        user: t
                    } = e;
                    return t.id === O
                });
            if (!(0, s.Bw)(E.guild_id) || !b || null == t || t.voiceState.suppress) return
        }
        return n ? r.A.setVideoEnabled(!1) : !n && _ ? (0, u.A)(() => {
            r.A.setVideoEnabled(!0)
        }, f.BRT.APP, !0) : _ || (0, c.A)(), !1
    }
}