/** chunk id: 790337, original params: t,e,i (module,exports,require) **/
i.d(e, {
    K: () => d
});
var n = i(827343),
    l = i(793574),
    s = i(419954),
    a = i(430452),
    r = i(780964),
    u = i(731854),
    o = i(985018);
let d = (0, s.sN)(r.X.STREAMING_STREAM_ATTENUATION_STRENGTH, {
    useTitle: () => o.intl.string(o.t.fhEzfj),
    setValue: function(t) {
        let e = [l.A.USER_SETTINGS_VOICE_AND_VIDEO];
        n.A.setSidechainCompressionStrength(t, {
            analyticsLocations: e
        })
    },
    minValue: 1,
    maxValue: 100,
    getInitialValue: a.Ay.getSidechainCompressionStrength,
    usePredicate: function() {
        return a.Ay.supports(u.O5.SIDECHAIN_COMPRESSION)
    }
})