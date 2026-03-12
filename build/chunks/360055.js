/** chunk id: 360055 params = (module,exports,require) **/
n.d(t, {
    a: () => g
});
var i = n(64700),
    s = n(935649),
    l = n(847599),
    r = n(36149),
    a = n(323073),
    o = n(419954),
    d = n(264249),
    c = n(253932),
    u = n(780964),
    _ = n(406274),
    m = n(985018);
let g = (0, o.zD)(u.X.CONTENT_AND_SOCIAL_AGE_RESTRICTED_IOS_SETTING, {
    useTitle: () => m.intl.string(m.t["L+yTsa"]),
    useSubtitle: () => m.intl.string(m.t.hiM8pU),
    useValue: d.tI,
    useDisabled: () => {
        let e = (0, _.A)() ?? !0,
            t = (0, a.sP)(),
            n = (0, r.yM)();
        return i.useMemo(() => (!t || !!n) && !e, [t, e, n])
    },
    setValue: e => {
        (0, a.p5)() && e ? s.A.showAgeVerificationGetStartedModal({
            entryPoint: l.q1.AGE_RESTRICTED_SERVERS_ACCESS_SETTINGS
        }) : c.Kg.updateSetting(e)
    }
})