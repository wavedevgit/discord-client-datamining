/** chunk id: 935101 params = (module,exports,require) **/
a.d(t, {
    A: () => f
});
var n = a(64700),
    _ = a(311907),
    r = a(205693),
    o = a(451988),
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
    }), [t, a] = n.useState(!1), c = (0, _.bG)([i.Ay], () => i.Ay.getMode() === d.TB.PUSH_TO_TALK), f = (0, _.bG)([l.A], () => l.A.getRTCConnectionId()), g = (0, _.bG)([i.Ay], () => {
        let e = i.Ay.getModeOptions().updatedAt;
        return null != e && Date.now() - e < b
    }), m = n.useRef(new o.Ep);
    return n.useEffect(() => {
        a(!1)
    }, [f]), n.useEffect(() => {
        let t = 0,
            n = m.current;

        function _(e, _) {
            let r = (_ & d.ME.VOICE) === d.ME.VOICE,
                o = s.A.isCurrentUserPTTActive();
            r && !o ? ++t >= 6 && (a(!0), n.start(p, () => {
                a(!1)
            })) : t = 0
        }
        return g && e && c && null != f && i.Ay.getMediaEngine().on(r.bg.VoiceActivity, _), () => {
            i.Ay.getMediaEngine().removeListener(r.bg.VoiceActivity, _), n.stop()
        }
    }, [e, c, g, f]), t
}