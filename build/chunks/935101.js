/** chunk id: 935101 params = (module,exports,require) **/
a.d(t, {
    A: () => f
});
var _ = a(64700),
    n = a(311907),
    o = a(205693),
    r = a(451988),
    i = a(430452),
    c = a(383501),
    s = a(485296),
    l = a(927813),
    d = a(340913),
    b = a(731854);
let u = 3 * l.A.Millis.SECOND,
    p = +l.A.Millis.DAY;

function f() {
    let {
        showPTTSpeakingIndicator: e
    } = d.A.useConfig({
        location: "useSpeakingWhilePTT"
    }), [t, a] = _.useState(!1), l = (0, n.bG)([i.Ay], () => i.Ay.getMode() === b.TB.PUSH_TO_TALK), f = (0, n.bG)([c.A], () => c.A.getRTCConnectionId()), g = (0, n.bG)([i.Ay], () => {
        let e = i.Ay.getModeOptions().updatedAt;
        return null != e && Date.now() - e < p
    }), x = _.useRef(new r.Ep);
    return _.useEffect(() => {
        a(!1)
    }, [f]), _.useEffect(() => {
        let t = 0,
            _ = x.current;

        function n(e, n) {
            let o = (n & b.ME.VOICE) === b.ME.VOICE,
                r = s.A.isCurrentUserPTTActive();
            o && !r ? ++t >= 6 && (a(!0), _.start(u, () => {
                a(!1)
            })) : t = 0
        }
        return g && e && l && null != f && i.Ay.getMediaEngine().on(o.bg.VoiceActivity, n), () => {
            i.Ay.getMediaEngine().removeListener(o.bg.VoiceActivity, n), _.stop()
        }
    }, [e, l, g, f]), t
}