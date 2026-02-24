/** chunk id: 918873, original params: t,e,i (module,exports,require) **/
i.d(e, {
    W: () => T
}), i(321073);
var n = i(64700),
    l = i(311907),
    s = i(827343),
    r = i(419954),
    a = i(430452),
    u = i(780964),
    o = i(593942),
    d = i(731854),
    A = i(985018);
let T = (0, r.Hn)(u.X.VOICE_AUDIO_SUBSYSTEM_SETTING, {
    useTitle: () => A.intl.string(A.t.wVBHr0),
    useValue: function() {
        return (0, l.bG)([a.Ay], () => a.Ay.getAudioSubsystem())
    },
    setValue: function(t) {
        (0, o.A)(A.intl.string(A.t.uY7AcQ), A.intl.string(A.t.gBqik6), () => s.A.setAudioSubsystem(t))
    },
    useOptions: function() {
        let {
            legacyAudioSubsystemSupported: t,
            experimentalAudioSubsystemSupported: e,
            automaticAudioSubsystemSupported: i
        } = (0, l.cf)([a.Ay], () => ({
            legacyAudioSubsystemSupported: a.Ay.supports(d.O5.LEGACY_AUDIO_SUBSYSTEM),
            experimentalAudioSubsystemSupported: a.Ay.supports(d.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM),
            automaticAudioSubsystemSupported: a.Ay.supports(d.O5.AUTOMATIC_AUDIO_SUBSYSTEM)
        }));
        return n.useMemo(() => {
            let n;
            return n = [{
                id: d.rB.STANDARD,
                value: d.rB.STANDARD,
                label: A.intl.string(A.t.dqb2JZ)
            }], t && n.push({
                id: d.rB.LEGACY,
                value: d.rB.LEGACY,
                label: A.intl.string(A.t["TYfH+5"])
            }), e && n.push({
                id: d.rB.EXPERIMENTAL,
                value: d.rB.EXPERIMENTAL,
                label: A.intl.string(A.t.liQmtr)
            }), i && n.push({
                id: d.rB.AUTOMATIC,
                value: d.rB.AUTOMATIC,
                label: A.intl.string(A.t.qNgtO1)
            }), n
        }, [i, e, t])
    },
    usePredicate: function() {
        return (0, l.bG)([a.Ay], () => a.Ay.shouldOfferManualSubsystemSelection())
    }
})