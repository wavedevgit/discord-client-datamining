/** chunk id: 935101 params = (module,exports,require) **/
a.d(t, {
    A: () => b
});
var r = a(64700),
    n = a(311907),
    _ = a(205693),
    o = a(451988),
    i = a(430452),
    s = a(383501),
    l = a(485296),
    u = a(927813),
    c = a(340913),
    d = a(731854);
let p = 3 * u.A.Millis.SECOND,
    f = +u.A.Millis.DAY;

function b() {
    let {
        showPTTSpeakingIndicator: e
    } = c.A.useConfig({
        location: "useSpeakingWhilePTT"
    }), [t, a] = r.useState(!1), u = (0, n.bG)([i.Ay], () => i.Ay.getMode() === d.TB.PUSH_TO_TALK), b = (0, n.bG)([s.A], () => s.A.getRTCConnectionId()), g = (0, n.bG)([i.Ay], () => {
        let e = i.Ay.getModeOptions().updatedAt;
        return null != e && Date.now() - e < f
    }), A = r.useRef(new o.Ep);
    return r.useEffect(() => {
        a(!1)
    }, [b]), r.useEffect(() => {
        let t = 0,
            r = A.current;

        function n(e, n) {
            let _ = (n & d.ME.VOICE) === d.ME.VOICE,
                o = l.A.isCurrentUserPTTActive();
            _ && !o ? ++t >= 6 && (a(!0), r.start(p, () => {
                a(!1)
            })) : t = 0
        }
        return g && e && u && null != b && i.Ay.getMediaEngine().on(_.bg.VoiceActivity, n), () => {
            i.Ay.getMediaEngine().removeListener(_.bg.VoiceActivity, n), r.stop()
        }
    }, [e, u, g, b]), t
}