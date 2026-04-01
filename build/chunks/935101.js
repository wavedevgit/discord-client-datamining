/** chunk id: 935101 params = (module,exports,require) **/
n.d(t, {
    A: () => g
});
var r = n(64700),
    a = n(311907),
    i = n(205693),
    l = n(451988),
    s = n(430452),
    o = n(383501),
    _ = n(485296),
    u = n(927813),
    c = n(499156),
    d = n(731854);
let p = 3 * u.A.Millis.SECOND,
    A = +u.A.Millis.DAY;

function g() {
    let {
        showPTTSpeakingIndicator: e
    } = c.A.useConfig({
        location: "useSpeakingWhilePTT"
    }), [t, n] = r.useState(!1), u = (0, a.bG)([s.Ay], () => s.Ay.getMode() === d.TB.PUSH_TO_TALK), g = (0, a.bG)([o.A], () => o.A.getRTCConnectionId()), f = (0, a.bG)([s.Ay], () => {
        let e = s.Ay.getModeOptions().updatedAt;
        return null != e && Date.now() - e < A
    }), b = r.useRef(new l.Ep);
    return r.useEffect(() => {
        n(!1)
    }, [g]), r.useEffect(() => {
        let t = 0,
            r = b.current;

        function a(e, a) {
            let i = (a & d.ME.VOICE) === d.ME.VOICE,
                l = _.A.isCurrentUserPTTActive();
            i && !l ? ++t >= 6 && (n(!0), r.start(p, () => {
                n(!1)
            })) : t = 0
        }
        return f && e && u && null != g && s.Ay.getMediaEngine().on(i.bg.VoiceActivity, a), () => {
            s.Ay.getMediaEngine().removeListener(i.bg.VoiceActivity, a), r.stop()
        }
    }, [e, u, f, g]), t
}