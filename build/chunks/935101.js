/** chunk id: 935101 params = (module,exports,require) **/
n.d(t, {
    A: () => g
});
var r = n(64700),
    a = n(311907),
    i = n(205693),
    l = n(451988),
    o = n(430452),
    s = n(383501),
    u = n(485296),
    _ = n(927813),
    c = n(499156),
    d = n(731854);
let p = 3 * _.A.Millis.SECOND,
    A = +_.A.Millis.DAY;

function g() {
    let {
        showPTTSpeakingIndicator: e
    } = c.A.useConfig({
        location: "useSpeakingWhilePTT"
    }), [t, n] = r.useState(!1), _ = (0, a.bG)([o.Ay], () => o.Ay.getMode() === d.TB.PUSH_TO_TALK), g = (0, a.bG)([s.A], () => s.A.getRTCConnectionId()), f = (0, a.bG)([o.Ay], () => {
        let e = o.Ay.getModeOptions().updatedAt;
        return null != e && Date.now() - e < A
    }), m = r.useRef(new l.Ep);
    return r.useEffect(() => {
        n(!1)
    }, [g]), r.useEffect(() => {
        let t = 0,
            r = m.current;

        function a(e, a) {
            let i = (a & d.ME.VOICE) === d.ME.VOICE,
                l = u.A.isCurrentUserPTTActive();
            i && !l ? ++t >= 6 && (n(!0), r.start(p, () => {
                n(!1)
            })) : t = 0
        }
        return f && e && _ && null != g && o.Ay.getMediaEngine().on(i.bg.VoiceActivity, a), () => {
            o.Ay.getMediaEngine().removeListener(i.bg.VoiceActivity, a), r.stop()
        }
    }, [e, _, f, g]), t
}