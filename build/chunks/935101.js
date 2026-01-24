/** Chunk was on 31294 **/
/** chunk id: 935101, original params: e,t,_ (module,exports,require) **/
_.d(t, {
    A: () => b
}), _(896048);
var a = _(64700),
    o = _(311907),
    r = _(205693),
    n = _(451988),
    i = _(430452),
    l = _(383501),
    s = _(485296),
    c = _(927813),
    u = _(340913),
    p = _(731854);
let d = 3 * c.A.Millis.SECOND;

function b() {
    let {
        showPTTSpeakingIndicator: e
    } = u.A.useConfig({
        location: "useSpeakingWhilePTT"
    }), [t, _] = a.useState(!1), c = (0, o.bG)([i.A], () => i.A.getMode() === p.TB.PUSH_TO_TALK), b = (0, o.bG)([l.A], () => l.A.getRTCConnectionId()), f = a.useRef(new n.Ep);
    return a.useEffect(() => {
        _(!1)
    }, [b]), a.useEffect(() => {
        let t = 0,
            a = f.current;

        function o(e, o) {
            let r = (o & p.ME.VOICE) === p.ME.VOICE,
                n = s.A.isCurrentUserPTTActive();
            r && !n ? ++t >= 5 && (_(!0), a.start(d, () => {
                _(!1)
            })) : t = 0
        }
        return e && c && null != b && i.A.getMediaEngine().on(r.bg.VoiceActivity, o), () => {
            i.A.getMediaEngine().removeListener(r.bg.VoiceActivity, o), a.stop()
        }
    }, [e, c, b]), t
}