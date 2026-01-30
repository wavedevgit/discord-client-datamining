/** chunk id: 317014, original params: e,t,i (module,exports,require) **/
i.d(t, {
    t: () => A
});
var n = i(945276),
    l = i(639555),
    s = i(617641),
    r = i(546140),
    a = i(776038),
    u = i(419954),
    o = i(975571),
    d = i(780964),
    T = i(652215),
    c = i(985018);
let A = (0, u.zD)(d.X.CONTENT_AND_SOCIAL_DM_SAFETY_ALERTS_SETTING, {
    useTitle: () => c.intl.string(c.t.qFsx5q),
    useSubtitle: () => c.intl.format(c.t.lunaRv, {
        learnMoreLink: o.A.getArticleURL(T.MVz.SAFETY_ALERTS)
    }),
    useValue: r.L,
    setValue: a.a,
    usePredicate: function() {
        var e;
        let t = (0, s.Lc)({
                location: "DMSafetyAlertsSetting"
            }),
            i = (0, l.Rv)({
                location: "DMSafetyAlertsSetting"
            }),
            r = null == (e = (0, n.A)()) || e;
        return t && !r && !i
    }
})