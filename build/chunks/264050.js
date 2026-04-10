/** chunk id: 264050 params = (module,exports,require) **/
n.d(t, {
    $: () => c
});
var i = n(311907),
    s = n(827343),
    l = n(419954),
    r = n(430452),
    a = n(780964),
    o = n(652215),
    d = n(985018);
let c = (0, l.zD)(a.X.ADVANCED_VOICE_ACTIVITY_PROCESSING_SETTING, {
    useTitle: () => d.intl.string(d.t.BbESsg),
    useSubtitle: () => d.intl.string(d.t.LoOB1F),
    useValue: function() {
        return (0, i.bG)([r.Ay], () => {
            let {
                vadUseKrisp: e
            } = r.Ay.getModeOptions();
            return e
        })
    },
    setValue: function(e) {
        let t = r.Ay.getMode();
        s.A.setMode(t, {
            vadUseKrisp: e
        })
    },
    useDisabled: function() {
        return (0, i.bG)([r.Ay], () => {
            let e = r.Ay.getMode(),
                t = r.Ay.getModeOptions().autoThreshold;
            return e === o.TBI.VOICE_ACTIVITY && t
        })
    },
    usePredicate: function() {
        return (0, i.bG)([r.Ay], () => r.Ay.isAdvancedVoiceActivitySupported() && r.Ay.isInputProfileCustom())
    }
})