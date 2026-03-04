/** chunk id: 580997, original params: t,e,i (module,exports,require) **/
i.d(e, {
    A: () => d
});
var n = i(311907),
    l = i(827343),
    s = i(419954),
    a = i(430452),
    r = i(723702),
    u = i(780964),
    o = i(985018);
let d = (0, s.zD)(u.X.VOICE_SILENCE_WARNING_SETTING, {
    useTitle: () => o.intl.string(o.t["4rsOPQ"]),
    useSubtitle: () => o.intl.string(o.t.jtiiCw),
    useValue: function() {
        return (0, n.bG)([a.Ay], () => a.Ay.getEnableSilenceWarning())
    },
    setValue: function(t) {
        l.A.setSilenceWarning(t)
    },
    usePredicate: function() {
        return r.isPlatformEmbedded
    }
})