/** chunk id: 935101, original params: e,_,t (module,exports,require) **/
t.d(_, {
    A: () => u
}), t(896048);
var a = t(64700),
    o = t(311907),
    n = t(205693),
    r = t(451988),
    i = t(430452),
    c = t(383501),
    l = t(485296),
    s = t(927813),
    p = t(340913),
    d = t(731854);
let b = 3 * s.A.Millis.SECOND;

function u() {
    let {
        showPTTSpeakingIndicator: e
    } = p.A.useConfig({
        location: "useSpeakingWhilePTT"
    }), [_, t] = a.useState(!1), s = (0, o.bG)([i.A], () => i.A.getMode() === d.TB.PUSH_TO_TALK), u = (0, o.bG)([c.A], () => c.A.getRTCConnectionId()), f = a.useRef(new r.Ep);
    return a.useEffect(() => {
        t(!1)
    }, [u]), a.useEffect(() => {
        let _ = 0,
            a = f.current;

        function o(e, o) {
            let n = (o & d.ME.VOICE) === d.ME.VOICE,
                r = l.A.isCurrentUserPTTActive();
            n && !r ? ++_ >= 5 && (t(!0), a.start(b, () => {
                t(!1)
            })) : _ = 0
        }
        return e && s && null != u && i.A.getMediaEngine().on(n.bg.VoiceActivity, o), () => {
            i.A.getMediaEngine().removeListener(n.bg.VoiceActivity, o), a.stop()
        }
    }, [e, s, u]), _
}