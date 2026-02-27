/** chunk id: 935101, original params: e,t,a (module,exports,require) **/
a.d(t, {
    A: () => b
});
var n = a(64700),
    r = a(311907),
    i = a(205693),
    o = a(451988),
    _ = a(430452),
    c = a(383501),
    l = a(485296),
    s = a(927813),
    d = a(340913),
    u = a(731854);
let p = 3 * s.A.Millis.SECOND,
    g = +s.A.Millis.DAY;

function b() {
    let {
        showPTTSpeakingIndicator: e
    } = d.A.useConfig({
        location: "useSpeakingWhilePTT"
    }), [t, a] = n.useState(!1), s = (0, r.bG)([_.Ay], () => _.Ay.getMode() === u.TB.PUSH_TO_TALK), b = (0, r.bG)([c.A], () => c.A.getRTCConnectionId()), m = (0, r.bG)([_.Ay], () => {
        let e = _.Ay.getModeOptions().updatedAt;
        return null != e && Date.now() - e < g
    }), f = n.useRef(new o.Ep);
    return n.useEffect(() => {
        a(!1)
    }, [b]), n.useEffect(() => {
        let t = 0,
            n = f.current;

        function r(e, r) {
            let i = (r & u.ME.VOICE) === u.ME.VOICE,
                o = l.A.isCurrentUserPTTActive();
            i && !o ? ++t >= 6 && (a(!0), n.start(p, () => {
                a(!1)
            })) : t = 0
        }
        return m && e && s && null != b && _.Ay.getMediaEngine().on(i.bg.VoiceActivity, r), () => {
            _.Ay.getMediaEngine().removeListener(i.bg.VoiceActivity, r), n.stop()
        }
    }, [e, s, m, b]), t
}