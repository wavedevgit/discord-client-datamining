/** chunk id: 317014, original params: t,e,i (module,exports,require) **/
i.d(e, {
    t: () => S
});
var n = i(945276),
    l = i(639555),
    s = i(617641),
    a = i(546140),
    r = i(776038),
    u = i(419954),
    o = i(975571),
    d = i(780964),
    A = i(652215),
    T = i(985018);
let S = (0, u.zD)(d.X.CONTENT_AND_SOCIAL_DM_SAFETY_ALERTS_SETTING, {
    useTitle: () => T.intl.string(T.t.qFsx5q),
    useSubtitle: () => T.intl.format(T.t.lunaRv, {
        learnMoreLink: o.A.getArticleURL(A.MVz.SAFETY_ALERTS)
    }),
    useValue: a.L,
    setValue: r.a,
    usePredicate: function() {
        let t = (0, s.Lc)({
                location: "DMSafetyAlertsSetting"
            }),
            e = (0, l.Rv)({
                location: "DMSafetyAlertsSetting"
            }),
            i = (0, n.A)() ?? !0;
        return t && !i && !e
    }
})