/** chunk id: 378631 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var i = n(627968),
    s = n(64700),
    l = n(935649),
    a = n(847599),
    r = n(36149),
    o = n(323073),
    d = n(264249),
    c = n(253932),
    u = n(406274),
    _ = n(871930),
    g = n(578746),
    m = n(531525),
    A = n(985018);

function h() {
    let e = (0, d.hT)(),
        t = (0, u.A)() ?? !0,
        n = (0, o.sP)(),
        h = (0, r.yM)(),
        p = s.useMemo(() => (!n || !!h) && !t, [n, t, h]),
        x = s.useCallback(e => {
            n && e ? l.A.showAgeVerificationGetStartedModal({
                entryPoint: a.q1.AGE_RESTRICTED_DM_COMMANDS_SETTINGS
            }) : c.Qe.updateSetting(e)
        }, [n]);
    return (0, i.jsx)(_.h, {
        setting: m.H.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_APPS_V2,
        children: (0, i.jsx)(g.Ay, {
            value: e,
            onChange: x,
            title: A.intl.string(A.t.XahVjj),
            note: A.intl.string(A.t.R9fXyS),
            disabled: p
        })
    })
}