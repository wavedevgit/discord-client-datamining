/** chunk id: 935101 params = (module,exports,require) **/
a.d(t, {
    A: () => f
});
var _ = a(64700),
    n = a(311907),
    r = a(205693),
    s = a(451988),
    o = a(430452),
    i = a(383501),
    l = a(485296),
    c = a(927813),
    p = a(499156),
    u = a(731854);
let d = 3 * c.A.Millis.SECOND,
    b = +c.A.Millis.DAY;

function f() {
    let {
        showPTTSpeakingIndicator: e
    } = p.A.useConfig({
        location: "useSpeakingWhilePTT"
    }), [t, a] = _.useState(!1), c = (0, n.bG)([o.Ay], () => o.Ay.getMode() === u.TB.PUSH_TO_TALK), f = (0, n.bG)([i.A], () => i.A.getRTCConnectionId()), g = (0, n.bG)([o.Ay], () => {
        let e = o.Ay.getModeOptions().updatedAt;
        return null != e && Date.now() - e < b
    }), T = _.useRef(new s.Ep);
    return _.useEffect(() => {
        a(!1)
    }, [f]), _.useEffect(() => {
        let t = 0,
            _ = T.current;

        function n(e, n) {
            let r = (n & u.ME.VOICE) === u.ME.VOICE,
                s = l.A.isCurrentUserPTTActive();
            r && !s ? ++t >= 6 && (a(!0), _.start(d, () => {
                a(!1)
            })) : t = 0
        }
        return g && e && c && null != f && o.Ay.getMediaEngine().on(r.bg.VoiceActivity, n), () => {
            o.Ay.getMediaEngine().removeListener(r.bg.VoiceActivity, n), _.stop()
        }
    }, [e, c, g, f]), t
}