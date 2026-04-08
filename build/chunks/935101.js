/** chunk id: 935101 params = (module,exports,require) **/
n.d(t, {
    A: () => f
});
var a = n(64700),
    r = n(311907),
    i = n(205693),
    l = n(451988),
    o = n(430452),
    s = n(383501),
    _ = n(485296),
    u = n(927813),
    c = n(499156),
    d = n(731854);
let p = 3 * u.A.Millis.SECOND,
    A = +u.A.Millis.DAY;

function f() {
    let {
        showPTTSpeakingIndicator: e
    } = c.A.useConfig({
        location: "useSpeakingWhilePTT"
    }), [t, n] = a.useState(!1), u = (0, r.bG)([o.Ay], () => o.Ay.getMode() === d.TB.PUSH_TO_TALK), f = (0, r.bG)([s.A], () => s.A.getRTCConnectionId()), g = (0, r.bG)([o.Ay], () => {
        let e = o.Ay.getModeOptions().updatedAt;
        return null != e && Date.now() - e < A
    }), m = a.useRef(new l.Ep);
    return a.useEffect(() => {
        n(!1)
    }, [f]), a.useEffect(() => {
        let t = 0,
            a = m.current;

        function r(e, r) {
            let i = (r & d.ME.VOICE) === d.ME.VOICE,
                l = _.A.isCurrentUserPTTActive();
            i && !l ? ++t >= 6 && (n(!0), a.start(p, () => {
                n(!1)
            })) : t = 0
        }
        return g && e && u && null != f && o.Ay.getMediaEngine().on(i.bg.VoiceActivity, r), () => {
            o.Ay.getMediaEngine().removeListener(i.bg.VoiceActivity, r), a.stop()
        }
    }, [e, u, g, f]), t
}