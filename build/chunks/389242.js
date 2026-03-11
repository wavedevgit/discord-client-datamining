/** chunk id: 389242 params = (module,exports,require) **/
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
    A = n(531525),
    m = n(985018);

function h() {
    let e = (0, u.A)() ?? !0,
        t = (0, d.tI)(),
        n = (0, o.sP)(),
        h = (0, r.yM)(),
        p = s.useMemo(() => (!n || !!h) && !e, [n, e, h]),
        x = s.useCallback(e => {
            n && e ? l.A.showAgeVerificationGetStartedModal({
                entryPoint: a.q1.AGE_RESTRICTED_SERVERS_ACCESS_SETTINGS
            }) : c.Kg.updateSetting(e)
        }, [n]);
    return (0, i.jsx)(_.h, {
        setting: A.H.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_IOS_V2,
        children: (0, i.jsx)(g.Ay, {
            title: m.intl.string(m.t["L+yTsa"]),
            value: t,
            onChange: x,
            disabled: p,
            note: m.intl.string(m.t.hiM8pU)
        })
    })
}