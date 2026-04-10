/** chunk id: 935101 params = (module,exports,require) **/
a.d(t, {
    A: () => g
});
var n = a(64700),
    r = a(311907),
    i = a(205693),
    l = a(451988),
    o = a(430452),
    s = a(383501),
    _ = a(485296),
    c = a(927813),
    d = a(499156),
    u = a(731854);
let p = 3 * c.A.Millis.SECOND,
    A = +c.A.Millis.DAY;

function g() {
    let {
        showPTTSpeakingIndicator: e
    } = d.A.useConfig({
        location: "useSpeakingWhilePTT"
    }), [t, a] = n.useState(!1), c = (0, r.bG)([o.Ay], () => o.Ay.getMode() === u.TB.PUSH_TO_TALK), g = (0, r.bG)([s.A], () => s.A.getRTCConnectionId()), m = (0, r.bG)([o.Ay], () => {
        let e = o.Ay.getModeOptions().updatedAt;
        return null != e && Date.now() - e < A
    }), b = n.useRef(new l.Ep);
    return n.useEffect(() => {
        a(!1)
    }, [g]), n.useEffect(() => {
        let t = 0,
            n = b.current;

        function r(e, r) {
            let i = (r & u.ME.VOICE) === u.ME.VOICE,
                l = _.A.isCurrentUserPTTActive();
            i && !l ? ++t >= 6 && (a(!0), n.start(p, () => {
                a(!1)
            })) : t = 0
        }
        return m && e && c && null != g && o.Ay.getMediaEngine().on(i.bg.VoiceActivity, r), () => {
            o.Ay.getMediaEngine().removeListener(i.bg.VoiceActivity, r), n.stop()
        }
    }, [e, c, m, g]), t
}