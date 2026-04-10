/** chunk id: 819046 params = (module,exports,require) **/
n.d(t, {
    r: () => c
});
var i = n(311907),
    s = n(936388),
    l = n(714763),
    r = n(814278),
    a = n(419954),
    o = n(780964),
    d = n(985018);
let c = (0, a.zD)(o.X.PERSISTENT_VERIFICATION_CODES_SETTING, {
    useTitle: () => d.intl.string(d.t["opi/XK"]),
    useSubtitle: () => d.intl.format(d.t["/T+ZlP"], {
        helpArticle: (0, r.Lu)()
    }),
    useValue: function() {
        return (0, i.bG)([l.A], () => l.A.getPersistentCodesEnabled())
    },
    setValue: function(e) {
        s.A.updatePersistentCodesEnabled(e)
    }
})