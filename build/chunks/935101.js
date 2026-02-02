/** chunk id: 935101, original params: e,t,_ (module,exports,require) **/
_.d(t, {
    A: () => b
}), _(896048);
var n = _(64700),
    a = _(311907),
    o = _(205693),
    c = _(451988),
    r = _(430452),
    i = _(383501),
    l = _(485296),
    s = _(927813),
    d = _(340913),
    u = _(731854);
let f = 3 * s.A.Millis.SECOND;

function b() {
    let {
        showPTTSpeakingIndicator: e
    } = d.A.useConfig({
        location: "useSpeakingWhilePTT"
    }), [t, _] = n.useState(!1), s = (0, a.bG)([r.A], () => r.A.getMode() === u.TB.PUSH_TO_TALK), b = (0, a.bG)([i.A], () => i.A.getRTCConnectionId()), p = n.useRef(new c.Ep);
    return n.useEffect(() => {
        _(!1)
    }, [b]), n.useEffect(() => {
        let t = 0,
            n = p.current;

        function a(e, a) {
            let o = (a & u.ME.VOICE) === u.ME.VOICE,
                c = l.A.isCurrentUserPTTActive();
            o && !c ? ++t >= 5 && (_(!0), n.start(f, () => {
                _(!1)
            })) : t = 0
        }
        return e && s && null != b && r.A.getMediaEngine().on(o.bg.VoiceActivity, a), () => {
            r.A.getMediaEngine().removeListener(o.bg.VoiceActivity, a), n.stop()
        }
    }, [e, s, b]), t
}