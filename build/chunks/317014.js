/** chunk id: 317014, original params: t,e,i (module,exports,require) **/
i.d(e, {
    t: () => S
});
var n = i(945276),
    l = i(639555),
    s = i(617641),
    r = i(546140),
    u = i(776038),
    a = i(419954),
    o = i(975571),
    d = i(780964),
    T = i(652215),
    A = i(985018);
let S = (0, a.zD)(d.X.CONTENT_AND_SOCIAL_DM_SAFETY_ALERTS_SETTING, {
    useTitle: () => A.intl.string(A.t.qFsx5q),
    useSubtitle: () => A.intl.format(A.t.lunaRv, {
        learnMoreLink: o.A.getArticleURL(T.MVz.SAFETY_ALERTS)
    }),
    useValue: r.L,
    setValue: u.a,
    usePredicate: function() {
        var t;
        let e = (0, s.Lc)({
                location: "DMSafetyAlertsSetting"
            }),
            i = (0, l.Rv)({
                location: "DMSafetyAlertsSetting"
            }),
            r = null == (t = (0, n.A)()) || t;
        return e && !r && !i
    }
})