/** Chunk was on 28979 **/
/** chunk id: 918873, original params: t,e,i (module,exports,require) **/
i.d(e, {
    W: () => S
});
var n = i(64700),
    l = i(311907),
    s = i(827343),
    r = i(419954),
    u = i(430452),
    a = i(780964),
    o = i(204318),
    T = i(593942),
    d = i(731854),
    A = i(985018);
let S = (0, r.Hn)(a.X.VOICE_AUDIO_SUBSYSTEM_SETTING, {
    useTitle: () => A.intl.string(A.t.wVBHr0),
    useValue: function() {
        return (0, l.bG)([u.A], () => u.A.getAudioSubsystem())
    },
    setValue: function(t) {
        (0, T.A)(A.intl.string(A.t.uY7AcQ), A.intl.string(A.t.gBqik6), () => s.A.setAudioSubsystem(t))
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
        return n.useMemo(() => (0, o.g)(t, e, i), [i, e, t])
    },
    usePredicate: function() {
        return (0, l.bG)([u.A], () => u.A.shouldOfferManualSubsystemSelection())
    }
})