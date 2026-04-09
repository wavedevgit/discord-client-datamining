/** chunk id: 935101 params = (module,exports,require) **/
n.d(t, {
    A: () => g
});
var a = n(64700),
    r = n(311907),
    l = n(205693),
    i = n(451988),
    o = n(430452),
    s = n(383501),
    _ = n(485296),
    c = n(927813),
    u = n(499156),
    d = n(731854);
let p = 3 * c.A.Millis.SECOND,
    A = +c.A.Millis.DAY;

function g() {
    let {
        showPTTSpeakingIndicator: e
    } = u.A.useConfig({
        location: "useSpeakingWhilePTT"
    }), [t, n] = a.useState(!1), c = (0, r.bG)([o.Ay], () => o.Ay.getMode() === d.TB.PUSH_TO_TALK), g = (0, r.bG)([s.A], () => s.A.getRTCConnectionId()), f = (0, r.bG)([o.Ay], () => {
        let e = o.Ay.getModeOptions().updatedAt;
        return null != e && Date.now() - e < A
    }), m = a.useRef(new i.Ep);
    return a.useEffect(() => {
        n(!1)
    }, [g]), a.useEffect(() => {
        let t = 0,
            a = m.current;

        function r(e, r) {
            let l = (r & d.ME.VOICE) === d.ME.VOICE,
                i = _.A.isCurrentUserPTTActive();
            l && !i ? ++t >= 6 && (n(!0), a.start(p, () => {
                n(!1)
            })) : t = 0
        }
        return f && e && c && null != g && o.Ay.getMediaEngine().on(l.bg.VoiceActivity, r), () => {
            o.Ay.getMediaEngine().removeListener(l.bg.VoiceActivity, r), a.stop()
        }
    }, [e, c, f, g]), t
}