/** chunk id: 363384, original params: t,e,i (module,exports,require) **/
i.d(e, {
    f: () => d
});
var n = i(827343),
    l = i(793574),
    s = i(419954),
    a = i(430452),
    r = i(824744),
    u = i(780964),
    o = i(985018);
let d = (0, s.sN)(u.X.VOICE_INPUT_VOLUME_SETTING, {
    useTitle: () => o.intl.string(o.t.Rtsr6w),
    useSearchTerms: () => [o.intl.string(o.t.eATD2B), o.intl.string(o.t["3182VD"]), o.intl.string(o.t["DGq/PR"])],
    minValue: 0,
    maxValue: 100,
    getInitialValue: function() {
        let t = a.Ay.getInputVolume();
        return (0, r.M)(t)
    },
    asValueChanges: function(t) {
        let e = [l.A.USER_SETTINGS_VOICE_AND_VIDEO],
            i = (0, r.w)(t);
        n.A.setInputVolume(i, {
            analyticsLocations: e
        })
    }
})