/** chunk id: 317014 params = (module,exports,require) **/
n.d(t, {
    t: () => m
});
var i = n(945276),
    s = n(639555),
    l = n(617641),
    r = n(546140),
    a = n(776038),
    o = n(419954),
    d = n(975571),
    c = n(780964),
    u = n(652215),
    _ = n(985018);
let m = (0, o.zD)(c.X.CONTENT_AND_SOCIAL_DM_SAFETY_ALERTS_SETTING, {
    useTitle: () => _.intl.string(_.t.qFsx5q),
    useSubtitle: () => _.intl.format(_.t.lunaRv, {
        learnMoreLink: d.A.getArticleURL(u.MVz.SAFETY_ALERTS)
    }),
    useValue: r.L,
    setValue: a.a,
    usePredicate: function() {
        let e = (0, l.Lc)({
                location: "DMSafetyAlertsSetting"
            }),
            t = (0, s.Rv)({
                location: "DMSafetyAlertsSetting"
            }),
            n = (0, i.A)() ?? !0;
        return e && !n && !t
    }
})