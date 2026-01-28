/** Chunk was on 28979 **/
/** chunk id: 783440, original params: t,e,i (module,exports,require) **/
i.d(e, {
    n: () => d
});
var n = i(311907),
    l = i(827343),
    s = i(793574),
    r = i(419954),
    u = i(430452),
    a = i(780964),
    o = i(731854),
    T = i(985018);
let d = (0, r.zD)(a.X.STREAMING_STREAM_ATTENUATION, {
    useTitle: () => T.intl.string(T.t["/jwMtn"]),
    useSubtitle: () => T.intl.string(T.t.zlA23F),
    useValue: function() {
        return (0, n.bG)([u.A], () => u.A.getSidechainCompression())
    },
    setValue: function(t) {
        let e = [s.A.USER_SETTINGS_VOICE_AND_VIDEO];
        l.A.setSidechainCompression(t, {
            analyticsLocations: e
        })
    },
    usePredicate: function() {
        return u.A.supports(o.O5.SIDECHAIN_COMPRESSION)
    }
})