/** chunk id: 456503 params = (module,exports,require) **/
n.d(t, {
    f: () => c
});
var i = n(827343),
    s = n(793574),
    l = n(419954),
    r = n(430452),
    a = n(824744),
    o = n(780964),
    d = n(985018);
let c = (0, l.sN)(o.X.VOICE_INPUT_VOLUME_SETTING, {
    useTitle: () => d.intl.string(d.t.Rtsr6w),
    useSearchTerms: () => [d.intl.string(d.t.eATD2B), d.intl.string(d.t["3182VD"]), d.intl.string(d.t["DGq/PR"])],
    minValue: 0,
    maxValue: 100,
    getInitialValue: function() {
        let e = r.Ay.getInputVolume();
        return (0, a.M)(e)
    },
    asValueChanges: function(e) {
        let t = [s.A.USER_SETTINGS_VOICE_AND_VIDEO],
            n = (0, a.w)(e);
        i.A.setInputVolume(n, {
            analyticsLocations: t
        })
    }
})