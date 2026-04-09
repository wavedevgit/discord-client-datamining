/** chunk id: 935101 params = (module,exports,require) **/
n.d(t, {
    A: () => m
});
var a = n(64700),
    r = n(311907),
    l = n(205693),
    i = n(451988),
    s = n(430452),
    o = n(383501),
    _ = n(485296),
    u = n(927813),
    c = n(499156),
    d = n(731854);
let p = 3 * u.A.Millis.SECOND,
    A = +u.A.Millis.DAY;

function m() {
    let {
        showPTTSpeakingIndicator: e
    } = c.A.useConfig({
        location: "useSpeakingWhilePTT"
    }), [t, n] = a.useState(!1), u = (0, r.bG)([s.Ay], () => s.Ay.getMode() === d.TB.PUSH_TO_TALK), m = (0, r.bG)([o.A], () => o.A.getRTCConnectionId()), f = (0, r.bG)([s.Ay], () => {
        let e = s.Ay.getModeOptions().updatedAt;
        return null != e && Date.now() - e < A
    }), b = a.useRef(new i.Ep);
    return a.useEffect(() => {
        n(!1)
    }, [m]), a.useEffect(() => {
        let t = 0,
            a = b.current;

        function r(e, r) {
            let l = (r & d.ME.VOICE) === d.ME.VOICE,
                i = _.A.isCurrentUserPTTActive();
            l && !i ? ++t >= 6 && (n(!0), a.start(p, () => {
                n(!1)
            })) : t = 0
        }
        return f && e && u && null != m && s.Ay.getMediaEngine().on(l.bg.VoiceActivity, r), () => {
            s.Ay.getMediaEngine().removeListener(l.bg.VoiceActivity, r), a.stop()
        }
    }, [e, u, f, m]), t
}