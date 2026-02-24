/** chunk id: 783440, original params: t,e,i (module,exports,require) **/
i.d(e, {
    n: () => A
});
var n = i(311907),
    l = i(827343),
    s = i(793574),
    r = i(419954),
    a = i(430452),
    u = i(780964),
    o = i(731854),
    d = i(985018);
let A = (0, r.zD)(u.X.STREAMING_STREAM_ATTENUATION, {
    useTitle: () => d.intl.string(d.t["/jwMtn"]),
    useSubtitle: () => d.intl.string(d.t.zlA23F),
    useValue: function() {
        return (0, n.bG)([a.Ay], () => a.Ay.getSidechainCompression())
    },
    setValue: function(t) {
        let e = [s.A.USER_SETTINGS_VOICE_AND_VIDEO];
        l.A.setSidechainCompression(t, {
            analyticsLocations: e
        })
    },
    usePredicate: function() {
        return a.Ay.supports(o.O5.SIDECHAIN_COMPRESSION)
    }
})