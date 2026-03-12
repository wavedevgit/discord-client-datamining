/** chunk id: 378631 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var i = n(627968),
    s = n(64700),
    l = n(935649),
    r = n(847599),
    a = n(36149),
    o = n(323073),
    d = n(264249),
    c = n(253932),
    u = n(406274),
    _ = n(871930),
    m = n(578746),
    g = n(531525),
    A = n(985018);

function h() {
    let e = (0, d.hT)(),
        t = (0, u.A)() ?? !0,
        n = (0, o.sP)(),
        h = (0, a.yM)(),
        x = s.useMemo(() => (!n || !!h) && !t, [n, t, h]),
        p = s.useCallback(e => {
            n && e ? l.A.showAgeVerificationGetStartedModal({
                entryPoint: r.q1.AGE_RESTRICTED_DM_COMMANDS_SETTINGS
            }) : c.Qe.updateSetting(e)
        }, [n]);
    return (0, i.jsx)(_.h, {
        setting: g.H.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_APPS_V2,
        children: (0, i.jsx)(m.Ay, {
            value: e,
            onChange: p,
            title: A.intl.string(A.t.XahVjj),
            note: A.intl.string(A.t.R9fXyS),
            disabled: x
        })
    })
}