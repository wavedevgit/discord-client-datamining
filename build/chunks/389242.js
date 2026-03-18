/** chunk id: 389242 params = (module,exports,require) **/
n.d(t, {
    A: () => x
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
    m = n(578746),
    g = n(531525),
    A = n(985018);

function x() {
    let e = (0, u.A)() ?? !0,
        t = (0, d.tI)(),
        n = (0, o.sP)(),
        x = (0, r.yM)(),
        h = s.useMemo(() => (!n || !!x) && !e, [n, e, x]),
        p = s.useCallback(e => {
            n && e ? l.A.showAgeVerificationGetStartedModal({
                entryPoint: a.q1.AGE_RESTRICTED_SERVERS_ACCESS_SETTINGS
            }) : c.Kg.updateSetting(e)
        }, [n]);
    return (0, i.jsx)(_.h, {
        setting: g.H.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_IOS_V2,
        children: (0, i.jsx)(m.Ay, {
            title: A.intl.string(A.t["L+yTsa"]),
            value: t,
            onChange: p,
            disabled: h,
            note: A.intl.string(A.t.hiM8pU)
        })
    })
}