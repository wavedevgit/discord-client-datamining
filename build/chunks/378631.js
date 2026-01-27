/** Chunk was on 60667 **/
/** chunk id: 378631, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => A
});
var r = n(627968),
    i = n(64700),
    l = n(935649),
    s = n(847599),
    a = n(36149),
    o = n(323073),
    c = n(264249),
    d = n(253932),
    u = n(406274),
    _ = n(871930),
    p = n(578746),
    m = n(531525),
    g = n(985018);

function A() {
    var e;
    let t = (0, c.hT)(),
        n = null == (e = (0, u.A)()) || e,
        A = (0, o.sP)(),
        f = (0, a.yM)(),
        h = i.useMemo(() => (!A || !!f) && !n, [A, n, f]),
        b = i.useCallback(e => {
            A && e ? l.A.showAgeVerificationGetStartedModal({
                entryPoint: s.q1.AGE_RESTRICTED_DM_COMMANDS_SETTINGS
            }) : d.Qe.updateSetting(e)
        }, [A]);
    return (0, r.jsx)(_.h, {
        setting: m.H.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_APPS_V2,
        children: (0, r.jsx)(p.Ay, {
            value: t,
            onChange: b,
            title: g.intl.string(g.t.XahVjj),
            note: g.intl.string(g.t.R9fXyS),
            disabled: h
        })
    })
}