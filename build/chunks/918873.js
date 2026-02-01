/** chunk id: 918873, original params: t,e,i (module,exports,require) **/
i.d(e, {
    W: () => A
}), i(321073);
var n = i(64700),
    l = i(311907),
    s = i(827343),
    r = i(419954),
    u = i(430452),
    a = i(780964),
    o = i(593942),
    d = i(731854),
    T = i(985018);
let A = (0, r.Hn)(a.X.VOICE_AUDIO_SUBSYSTEM_SETTING, {
    useTitle: () => T.intl.string(T.t.wVBHr0),
    useValue: function() {
        return (0, l.bG)([u.A], () => u.A.getAudioSubsystem())
    },
    setValue: function(t) {
        (0, o.A)(T.intl.string(T.t.uY7AcQ), T.intl.string(T.t.gBqik6), () => s.A.setAudioSubsystem(t))
    },
    useOptions: function() {
        let {
            legacyAudioSubsystemSupported: t,
            experimentalAudioSubsystemSupported: e,
            automaticAudioSubsystemSupported: i
        } = (0, l.cf)([u.A], () => ({
            legacyAudioSubsystemSupported: u.A.supports(d.O5.LEGACY_AUDIO_SUBSYSTEM),
            experimentalAudioSubsystemSupported: u.A.supports(d.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM),
            automaticAudioSubsystemSupported: u.A.supports(d.O5.AUTOMATIC_AUDIO_SUBSYSTEM)
        }));
        return n.useMemo(() => {
            let n;
            return n = [{
                id: d.rB.STANDARD,
                value: d.rB.STANDARD,
                label: T.intl.string(T.t.dqb2JZ)
            }], t && n.push({
                id: d.rB.LEGACY,
                value: d.rB.LEGACY,
                label: T.intl.string(T.t["TYfH+5"])
            }), e && n.push({
                id: d.rB.EXPERIMENTAL,
                value: d.rB.EXPERIMENTAL,
                label: T.intl.string(T.t.liQmtr)
            }), i && n.push({
                id: d.rB.AUTOMATIC,
                value: d.rB.AUTOMATIC,
                label: T.intl.string(T.t.qNgtO1)
            }), n
        }, [i, e, t])
    },
    usePredicate: function() {
        return (0, l.bG)([u.A], () => u.A.shouldOfferManualSubsystemSelection())
    }
})