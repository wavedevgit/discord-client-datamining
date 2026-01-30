/** chunk id: 881318, original params: e,t,i (module,exports,require) **/
i.d(t, {
    $: () => d
});
var n = i(311907),
    l = i(827343),
    s = i(419954),
    r = i(430452),
    a = i(780964),
    u = i(652215),
    o = i(985018);
let d = (0, s.zD)(a.X.ADVANCED_VOICE_ACTIVITY_PROCESSING_SETTING, {
    useTitle: () => o.intl.string(o.t.BbESsg),
    useSubtitle: () => o.intl.string(o.t.LoOB1F),
    useValue: function() {
        return (0, n.bG)([r.A], () => {
            let {
                vadUseKrisp: e
            } = r.A.getModeOptions();
            return e
        })
    },
    setValue: function(e) {
        let t = r.A.getMode();
        l.A.setMode(t, {
            vadUseKrisp: e
        })
    },
    useDisabled: function() {
        return (0, n.bG)([r.A], () => {
            let e = r.A.getMode(),
                t = r.A.getModeOptions().autoThreshold;
            return e === u.TBI.VOICE_ACTIVITY && t
        })
    },
    usePredicate: function() {
        return (0, n.bG)([r.A], () => r.A.isAdvancedVoiceActivitySupported() && r.A.isInputProfileCustom())
    }
})