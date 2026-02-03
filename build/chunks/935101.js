/** chunk id: 935101, original params: e,t,_ (module,exports,require) **/
_.d(t, {
    A: () => p
}), _(896048);
var n = _(64700),
    a = _(311907),
    o = _(205693),
    r = _(451988),
    c = _(430452),
    i = _(383501),
    l = _(485296),
    s = _(927813),
    d = _(340913),
    u = _(731854);
let f = 3 * s.A.Millis.SECOND;

function p() {
    let {
        showPTTSpeakingIndicator: e
    } = d.A.useConfig({
        location: "useSpeakingWhilePTT"
    }), [t, _] = n.useState(!1), s = (0, a.bG)([c.A], () => c.A.getMode() === u.TB.PUSH_TO_TALK), p = (0, a.bG)([i.A], () => i.A.getRTCConnectionId()), b = n.useRef(new r.Ep);
    return n.useEffect(() => {
        _(!1)
    }, [p]), n.useEffect(() => {
        let t = 0,
            n = b.current;

        function a(e, a) {
            let o = (a & u.ME.VOICE) === u.ME.VOICE,
                r = l.A.isCurrentUserPTTActive();
            o && !r ? ++t >= 5 && (_(!0), n.start(f, () => {
                _(!1)
            })) : t = 0
        }
        return e && s && null != p && c.A.getMediaEngine().on(o.bg.VoiceActivity, a), () => {
            c.A.getMediaEngine().removeListener(o.bg.VoiceActivity, a), n.stop()
        }
    }, [e, s, p]), t
}