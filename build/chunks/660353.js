/** Chunk was on 4670 **/
/** chunk id: 660353, original params: e,t,i (module,exports,require) **/
i.d(t, {
    u: () => A
});
var n = i(935649),
    l = i(847599),
    s = i(36149),
    r = i(323073),
    a = i(419954),
    u = i(264249),
    o = i(253932),
    d = i(780964),
    T = i(406274),
    c = i(985018);
let A = (0, a.zD)(d.X.CONTENT_AND_SOCIAL_AGE_RESTRICTED_DM_SETTING, {
    useTitle: () => c.intl.string(c.t.XahVjj),
    useSubtitle: () => c.intl.string(c.t.R9fXyS),
    useValue: u.hT,
    useDisabled: () => {
        var e;
        let t = null == (e = (0, T.A)()) || e,
            i = (0, r.sP)(),
            n = (0, s.yM)();
        return (!i || !!n) && !t
    },
    setValue: e => {
        (0, r.p5)() && e ? n.A.showAgeVerificationGetStartedModal({
            entryPoint: l.q1.AGE_RESTRICTED_DM_COMMANDS_SETTINGS
        }) : o.Qe.updateSetting(e)
    }
})