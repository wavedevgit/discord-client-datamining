/** chunk id: 881318, original params: t,e,i (module,exports,require) **/
i.d(e, {
    $: () => d
});
var n = i(311907),
    l = i(827343),
    s = i(419954),
    a = i(430452),
    r = i(780964),
    u = i(652215),
    o = i(985018);
let d = (0, s.zD)(r.X.ADVANCED_VOICE_ACTIVITY_PROCESSING_SETTING, {
    useTitle: () => o.intl.string(o.t.BbESsg),
    useSubtitle: () => o.intl.string(o.t.LoOB1F),
    useValue: function() {
        return (0, n.bG)([a.Ay], () => {
            let {
                vadUseKrisp: t
            } = a.Ay.getModeOptions();
            return t
        })
    },
    setValue: function(t) {
        let e = a.Ay.getMode();
        l.A.setMode(e, {
            vadUseKrisp: t
        })
    },
    useDisabled: function() {
        return (0, n.bG)([a.Ay], () => {
            let t = a.Ay.getMode(),
                e = a.Ay.getModeOptions().autoThreshold;
            return t === u.TBI.VOICE_ACTIVITY && e
        })
    },
    usePredicate: function() {
        return (0, n.bG)([a.Ay], () => a.Ay.isAdvancedVoiceActivitySupported() && a.Ay.isInputProfileCustom())
    }
})