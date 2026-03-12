/** chunk id: 790337 params = (module,exports,require) **/
n.d(t, {
    K: () => c
});
var i = n(827343),
    s = n(793574),
    l = n(419954),
    r = n(430452),
    a = n(780964),
    o = n(731854),
    d = n(985018);
let c = (0, l.sN)(a.X.STREAMING_STREAM_ATTENUATION_STRENGTH, {
    useTitle: () => d.intl.string(d.t.fhEzfj),
    setValue: function(e) {
        let t = [s.A.USER_SETTINGS_VOICE_AND_VIDEO];
        i.A.setSidechainCompressionStrength(e, {
            analyticsLocations: t
        })
    },
    minValue: 1,
    maxValue: 100,
    getInitialValue: r.Ay.getSidechainCompressionStrength,
    usePredicate: function() {
        return r.Ay.supports(o.O5.SIDECHAIN_COMPRESSION)
    }
})