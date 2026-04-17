/** chunk id: 935101 params = (module,exports,require) **/
a.d(t, {
    A: () => f
});
var _ = a(64700),
    r = a(311907),
    n = a(205693),
    s = a(451988),
    o = a(430452),
    l = a(383501),
    i = a(485296),
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
    }), [t, a] = _.useState(!1), c = (0, r.bG)([o.Ay], () => o.Ay.getMode() === u.TB.PUSH_TO_TALK), f = (0, r.bG)([l.A], () => l.A.getRTCConnectionId()), g = (0, r.bG)([o.Ay], () => {
        let e = o.Ay.getModeOptions().updatedAt;
        return null != e && Date.now() - e < b
    }), T = _.useRef(new s.Ep);
    return _.useEffect(() => {
        a(!1)
    }, [f]), _.useEffect(() => {
        let t = 0,
            _ = T.current;

        function r(e, r) {
            let n = (r & u.ME.VOICE) === u.ME.VOICE,
                s = i.A.isCurrentUserPTTActive();
            n && !s ? ++t >= 6 && (a(!0), _.start(d, () => {
                a(!1)
            })) : t = 0
        }
        return g && e && c && null != f && o.Ay.getMediaEngine().on(n.bg.VoiceActivity, r), () => {
            o.Ay.getMediaEngine().removeListener(n.bg.VoiceActivity, r), _.stop()
        }
    }, [e, c, g, f]), t
}