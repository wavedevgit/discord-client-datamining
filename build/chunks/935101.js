/** Chunk was on 31294 **/
/** chunk id: 935101, original params: e,t,a (module,exports,require) **/
a.d(t, {
    A: () => b
}), a(896048);
var o = a(64700),
    _ = a(311907),
    n = a(205693),
    c = a(451988),
    r = a(430452),
    i = a(383501),
    l = a(485296),
    d = a(927813),
    s = a(340913),
    u = a(731854);
let p = 3 * d.A.Millis.SECOND;

function b() {
    let {
        showPTTSpeakingIndicator: e
    } = s.A.useConfig({
        location: "useSpeakingWhilePTT"
    }), [t, a] = o.useState(!1), d = (0, _.bG)([r.A], () => r.A.getMode() === u.TB.PUSH_TO_TALK), b = (0, _.bG)([i.A], () => i.A.getRTCConnectionId()), f = o.useRef(new c.Ep);
    return o.useEffect(() => {
        a(!1)
    }, [b]), o.useEffect(() => {
        let t = 0,
            o = f.current;

        function _(e, _) {
            let n = (_ & u.ME.VOICE) === u.ME.VOICE,
                c = l.A.isCurrentUserPTTActive();
            n && !c ? ++t >= 5 && (a(!0), o.start(p, () => {
                a(!1)
            })) : t = 0
        }
        return e && d && null != b && r.A.getMediaEngine().on(n.bg.VoiceActivity, _), () => {
            r.A.getMediaEngine().removeListener(n.bg.VoiceActivity, _), o.stop()
        }
    }, [e, d, b]), t
}