/** chunk id: 935101, original params: e,t,_ (module,exports,require) **/
_.d(t, {
    A: () => f
}), _(896048);
var o = _(64700),
    a = _(311907),
    n = _(205693),
    c = _(451988),
    r = _(430452),
    i = _(383501),
    s = _(485296),
    d = _(927813),
    l = _(340913),
    u = _(731854);
let p = 3 * d.A.Millis.SECOND;

function f() {
    let {
        showPTTSpeakingIndicator: e
    } = l.A.useConfig({
        location: "useSpeakingWhilePTT"
    }), [t, _] = o.useState(!1), d = (0, a.bG)([r.A], () => r.A.getMode() === u.TB.PUSH_TO_TALK), f = (0, a.bG)([i.A], () => i.A.getRTCConnectionId()), b = o.useRef(new c.Ep);
    return o.useEffect(() => {
        _(!1)
    }, [f]), o.useEffect(() => {
        let t = 0,
            o = b.current;

        function a(e, a) {
            let n = (a & u.ME.VOICE) === u.ME.VOICE,
                c = s.A.isCurrentUserPTTActive();
            n && !c ? ++t >= 5 && (_(!0), o.start(p, () => {
                _(!1)
            })) : t = 0
        }
        return e && d && null != f && r.A.getMediaEngine().on(n.bg.VoiceActivity, a), () => {
            r.A.getMediaEngine().removeListener(n.bg.VoiceActivity, a), o.stop()
        }
    }, [e, d, f]), t
}