/** chunk id: 935101 params = (module,exports,require) **/
a.d(t, {
    A: () => f
});
var _ = a(64700),
    n = a(311907),
    o = a(205693),
    r = a(451988),
    i = a(430452),
    l = a(383501),
    s = a(485296),
    c = a(927813),
    u = a(340913),
    d = a(731854);
let p = 3 * c.A.Millis.SECOND,
    b = +c.A.Millis.DAY;

function f() {
    let {
        showPTTSpeakingIndicator: e
    } = u.A.useConfig({
        location: "useSpeakingWhilePTT"
    }), [t, a] = _.useState(!1), c = (0, n.bG)([i.Ay], () => i.Ay.getMode() === d.TB.PUSH_TO_TALK), f = (0, n.bG)([l.A], () => l.A.getRTCConnectionId()), g = (0, n.bG)([i.Ay], () => {
        let e = i.Ay.getModeOptions().updatedAt;
        return null != e && Date.now() - e < b
    }), x = _.useRef(new r.Ep);
    return _.useEffect(() => {
        a(!1)
    }, [f]), _.useEffect(() => {
        let t = 0,
            _ = x.current;

        function n(e, n) {
            let o = (n & d.ME.VOICE) === d.ME.VOICE,
                r = s.A.isCurrentUserPTTActive();
            o && !r ? ++t >= 6 && (a(!0), _.start(p, () => {
                a(!1)
            })) : t = 0
        }
        return g && e && c && null != f && i.Ay.getMediaEngine().on(o.bg.VoiceActivity, n), () => {
            i.Ay.getMediaEngine().removeListener(o.bg.VoiceActivity, n), _.stop()
        }
    }, [e, c, g, f]), t
}