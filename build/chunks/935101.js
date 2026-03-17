/** chunk id: 935101 params = (module,exports,require) **/
a.d(t, {
    A: () => f
});
var _ = a(64700),
    n = a(311907),
    r = a(205693),
    o = a(451988),
    i = a(430452),
    l = a(383501),
    s = a(485296),
    c = a(927813),
    u = a(340913),
    p = a(731854);
let d = 3 * c.A.Millis.SECOND,
    b = +c.A.Millis.DAY;

function f() {
    let {
        showPTTSpeakingIndicator: e
    } = u.A.useConfig({
        location: "useSpeakingWhilePTT"
    }), [t, a] = _.useState(!1), c = (0, n.bG)([i.Ay], () => i.Ay.getMode() === p.TB.PUSH_TO_TALK), f = (0, n.bG)([l.A], () => l.A.getRTCConnectionId()), g = (0, n.bG)([i.Ay], () => {
        let e = i.Ay.getModeOptions().updatedAt;
        return null != e && Date.now() - e < b
    }), m = _.useRef(new o.Ep);
    return _.useEffect(() => {
        a(!1)
    }, [f]), _.useEffect(() => {
        let t = 0,
            _ = m.current;

        function n(e, n) {
            let r = (n & p.ME.VOICE) === p.ME.VOICE,
                o = s.A.isCurrentUserPTTActive();
            r && !o ? ++t >= 6 && (a(!0), _.start(d, () => {
                a(!1)
            })) : t = 0
        }
        return g && e && c && null != f && i.Ay.getMediaEngine().on(r.bg.VoiceActivity, n), () => {
            i.Ay.getMediaEngine().removeListener(r.bg.VoiceActivity, n), _.stop()
        }
    }, [e, c, g, f]), t
}