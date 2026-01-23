/** Chunk was on 28979 **/
/** chunk id: 360055, original params: t,e,i (module,exports,require) **/
i.d(e, {
    a: () => E
});
var n = i(64700),
    l = i(935649),
    s = i(847599),
    r = i(36149),
    u = i(323073),
    a = i(419954),
    o = i(264249),
    T = i(253932),
    A = i(780964),
    d = i(406274),
    S = i(985018);
let E = (0, a.zD)(A.X.CONTENT_AND_SOCIAL_AGE_RESTRICTED_IOS_SETTING, {
    useTitle: () => S.intl.string(S.t["L+yTsa"]),
    useSubtitle: () => S.intl.string(S.t.hiM8pU),
    useValue: o.tI,
    useDisabled: () => {
        var t;
        let e = null == (t = (0, d.A)()) || t,
            i = (0, u.sP)(),
            l = (0, r.yM)();
        return n.useMemo(() => (!i || !!l) && !e, [i, e, l])
    },
    setValue: t => {
        (0, u.p5)() && t ? l.A.showAgeVerificationGetStartedModal({
            entryPoint: s.q1.AGE_RESTRICTED_SERVERS_ACCESS_SETTINGS
        }) : T.Kg.updateSetting(t)
    }
})