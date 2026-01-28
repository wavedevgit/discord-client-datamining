/** Chunk was on 28979 **/
/** chunk id: 660353, original params: t,e,i (module,exports,require) **/
i.d(e, {
    u: () => S
});
var n = i(935649),
    l = i(847599),
    s = i(36149),
    r = i(323073),
    u = i(419954),
    a = i(264249),
    o = i(253932),
    T = i(780964),
    d = i(406274),
    A = i(985018);
let S = (0, u.zD)(T.X.CONTENT_AND_SOCIAL_AGE_RESTRICTED_DM_SETTING, {
    useTitle: () => A.intl.string(A.t.XahVjj),
    useSubtitle: () => A.intl.string(A.t.R9fXyS),
    useValue: a.hT,
    useDisabled: () => {
        var t;
        let e = null == (t = (0, d.A)()) || t,
            i = (0, r.sP)(),
            n = (0, s.yM)();
        return (!i || !!n) && !e
    },
    setValue: t => {
        (0, r.p5)() && t ? n.A.showAgeVerificationGetStartedModal({
            entryPoint: l.q1.AGE_RESTRICTED_DM_COMMANDS_SETTINGS
        }) : o.Qe.updateSetting(t)
    }
})