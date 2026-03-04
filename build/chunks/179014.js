/** chunk id: 179014, original params: t,e,i (module,exports,require) **/
i.d(e, {
    r: () => d
});
var n = i(311907),
    l = i(936388),
    s = i(714763),
    a = i(814278),
    r = i(419954),
    u = i(780964),
    o = i(985018);
let d = (0, r.zD)(u.X.PERSISTENT_VERIFICATION_CODES_SETTING, {
    useTitle: () => o.intl.string(o.t["opi/XK"]),
    useSubtitle: () => o.intl.format(o.t["/T+ZlP"], {
        helpArticle: (0, a.Lu)()
    }),
    useValue: function() {
        return (0, n.bG)([s.A], () => s.A.getPersistentCodesEnabled())
    },
    setValue: function(t) {
        l.A.updatePersistentCodesEnabled(t)
    }
})