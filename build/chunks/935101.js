/** chunk id: 935101 params = (module,exports,require) **/
n.d(t, {
    A: () => p
});
var r = n(64700),
    a = n(311907),
    i = n(205693),
    l = n(451988),
    o = n(430452),
    s = n(383501),
    _ = n(485296),
    u = n(927813),
    d = n(499156),
    c = n(731854);
let A = 3 * u.A.Millis.SECOND,
    g = +u.A.Millis.DAY;

function p() {
    let {
        showPTTSpeakingIndicator: e
    } = d.A.useConfig({
        location: "useSpeakingWhilePTT"
    }), [t, n] = r.useState(!1), u = (0, a.bG)([o.Ay], () => o.Ay.getMode() === c.TB.PUSH_TO_TALK), p = (0, a.bG)([s.A], () => s.A.getRTCConnectionId()), b = (0, a.bG)([o.Ay], () => {
        let e = o.Ay.getModeOptions().updatedAt;
        return null != e && Date.now() - e < g
    }), m = r.useRef(new l.Ep);
    return r.useEffect(() => {
        n(!1)
    }, [p]), r.useEffect(() => {
        let t = 0,
            r = m.current;

        function a(e, a) {
            let i = (a & c.ME.VOICE) === c.ME.VOICE,
                l = _.A.isCurrentUserPTTActive();
            i && !l ? ++t >= 6 && (n(!0), r.start(A, () => {
                n(!1)
            })) : t = 0
        }
        return b && e && u && null != p && o.Ay.getMediaEngine().on(i.bg.VoiceActivity, a), () => {
            o.Ay.getMediaEngine().removeListener(i.bg.VoiceActivity, a), r.stop()
        }
    }, [e, u, b, p]), t
}