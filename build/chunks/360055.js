/** Chunk was on 4670 **/
/** chunk id: 360055, original params: e,t,i (module,exports,require) **/
i.d(t, {
    a: () => S
});
var n = i(64700),
    l = i(935649),
    s = i(847599),
    r = i(36149),
    a = i(323073),
    u = i(419954),
    o = i(264249),
    d = i(253932),
    T = i(780964),
    c = i(406274),
    A = i(985018);
let S = (0, u.zD)(T.X.CONTENT_AND_SOCIAL_AGE_RESTRICTED_IOS_SETTING, {
    useTitle: () => A.intl.string(A.t["L+yTsa"]),
    useSubtitle: () => A.intl.string(A.t.hiM8pU),
    useValue: o.tI,
    useDisabled: () => {
        var e;
        let t = null == (e = (0, c.A)()) || e,
            i = (0, a.sP)(),
            l = (0, r.yM)();
        return n.useMemo(() => (!i || !!l) && !t, [i, t, l])
    },
    setValue: e => {
        (0, a.p5)() && e ? l.A.showAgeVerificationGetStartedModal({
            entryPoint: s.q1.AGE_RESTRICTED_SERVERS_ACCESS_SETTINGS
        }) : d.Kg.updateSetting(e)
    }
})