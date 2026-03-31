/** chunk id: 935101 params = (module,exports,require) **/
a.d(t, {
    A: () => b
});
var n = a(64700),
    r = a(311907),
    o = a(205693),
    i = a(451988),
    _ = a(430452),
    s = a(383501),
    l = a(485296),
    c = a(927813),
    u = a(499156),
    d = a(731854);
let p = 3 * c.A.Millis.SECOND,
    f = +c.A.Millis.DAY;

function b() {
    let {
        showPTTSpeakingIndicator: e
    } = u.A.useConfig({
        location: "useSpeakingWhilePTT"
    }), [t, a] = n.useState(!1), c = (0, r.bG)([_.Ay], () => _.Ay.getMode() === d.TB.PUSH_TO_TALK), b = (0, r.bG)([s.A], () => s.A.getRTCConnectionId()), g = (0, r.bG)([_.Ay], () => {
        let e = _.Ay.getModeOptions().updatedAt;
        return null != e && Date.now() - e < f
    }), A = n.useRef(new i.Ep);
    return n.useEffect(() => {
        a(!1)
    }, [b]), n.useEffect(() => {
        let t = 0,
            n = A.current;

        function r(e, r) {
            let o = (r & d.ME.VOICE) === d.ME.VOICE,
                i = l.A.isCurrentUserPTTActive();
            o && !i ? ++t >= 6 && (a(!0), n.start(p, () => {
                a(!1)
            })) : t = 0
        }
        return g && e && c && null != b && _.Ay.getMediaEngine().on(o.bg.VoiceActivity, r), () => {
            _.Ay.getMediaEngine().removeListener(o.bg.VoiceActivity, r), n.stop()
        }
    }, [e, c, g, b]), t
}