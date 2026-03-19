/** chunk id: 935101 params = (module,exports,require) **/
_.d(t, {
    A: () => f
});
var a = _(64700),
    o = _(311907),
    n = _(205693),
    r = _(451988),
    i = _(430452),
    c = _(383501),
    l = _(485296),
    s = _(927813),
    u = _(340913),
    p = _(731854);
let d = 3 * s.A.Millis.SECOND,
    b = +s.A.Millis.DAY;

function f() {
    let {
        showPTTSpeakingIndicator: e
    } = u.A.useConfig({
        location: "useSpeakingWhilePTT"
    }), [t, _] = a.useState(!1), s = (0, o.bG)([i.Ay], () => i.Ay.getMode() === p.TB.PUSH_TO_TALK), f = (0, o.bG)([c.A], () => c.A.getRTCConnectionId()), g = (0, o.bG)([i.Ay], () => {
        let e = i.Ay.getModeOptions().updatedAt;
        return null != e && Date.now() - e < b
    }), m = a.useRef(new r.Ep);
    return a.useEffect(() => {
        _(!1)
    }, [f]), a.useEffect(() => {
        let t = 0,
            a = m.current;

        function o(e, o) {
            let n = (o & p.ME.VOICE) === p.ME.VOICE,
                r = l.A.isCurrentUserPTTActive();
            n && !r ? ++t >= 6 && (_(!0), a.start(d, () => {
                _(!1)
            })) : t = 0
        }
        return g && e && s && null != f && i.Ay.getMediaEngine().on(n.bg.VoiceActivity, o), () => {
            i.Ay.getMediaEngine().removeListener(n.bg.VoiceActivity, o), a.stop()
        }
    }, [e, s, g, f]), t
}