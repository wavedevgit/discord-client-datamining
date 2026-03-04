/** chunk id: 660353, original params: t,e,i (module,exports,require) **/
i.d(e, {
    u: () => S
});
var n = i(935649),
    l = i(847599),
    s = i(36149),
    a = i(323073),
    r = i(419954),
    u = i(264249),
    o = i(253932),
    d = i(780964),
    A = i(406274),
    T = i(985018);
let S = (0, r.zD)(d.X.CONTENT_AND_SOCIAL_AGE_RESTRICTED_DM_SETTING, {
    useTitle: () => T.intl.string(T.t.XahVjj),
    useSubtitle: () => T.intl.string(T.t.R9fXyS),
    useValue: u.hT,
    useDisabled: () => {
        let t = (0, A.A)() ?? !0,
            e = (0, a.sP)(),
            i = (0, s.yM)();
        return (!e || !!i) && !t
    },
    setValue: t => {
        (0, a.p5)() && t ? n.A.showAgeVerificationGetStartedModal({
            entryPoint: l.q1.AGE_RESTRICTED_DM_COMMANDS_SETTINGS
        }) : o.Qe.updateSetting(t)
    }
})