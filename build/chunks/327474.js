/** chunk id: 327474 params = (module,exports,require) **/
n.d(t, {
    W: () => d
});
var i = n(311907),
    s = n(827343),
    l = n(419954),
    r = n(430452),
    a = n(780964),
    o = n(985018);
let d = (0, l.zD)(a.X.VOICE_AND_VIDEO_AUDIO_RECORDING, {
    useTitle: () => o.intl.string(o.t["r6K+TL"]),
    useSubtitle: () => o.intl.string(o.t["xl9+I6"]),
    useValue: function() {
        return (0, i.bG)([r.Ay], () => r.Ay.getAecDump())
    },
    setValue: s.A.setAecDump,
    usePredicate: function() {
        return (0, i.bG)([r.Ay], () => r.Ay.isAecDumpSupported())
    }
})