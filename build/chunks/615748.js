/** chunk id: 615748 params = (module,exports,require) **/
n.d(t, {
    S: () => c
});
var i = n(827343),
    s = n(793574),
    l = n(419954),
    r = n(430452),
    a = n(824744),
    o = n(780964),
    d = n(985018);
let c = (0, l.sN)(o.X.VOICE_OUTPUT_VOLUME_SETTING, {
    useTitle: () => d.intl.string(d.t.aUJ062),
    useSearchTerms: () => [d.intl.string(d.t.eATD2B), d.intl.string(d.t["3182VD"]), d.intl.string(d.t["DGq/PR"])],
    minValue: 0,
    maxValue: 200,
    getInitialValue: function() {
        let e = r.Ay.getOutputVolume();
        return (0, a.M)(e)
    },
    onValueRender: function(e) {
        return `${e.toFixed(0)}%`
    },
    asValueChanges: function(e) {
        let t = [s.A.USER_SETTINGS_VOICE_AND_VIDEO],
            n = (0, a.w)(e);
        i.A.setOutputVolume(n, {
            analyticsLocations: t
        })
    }
})