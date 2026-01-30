/** chunk id: 389242, original params: e,t,n (module,exports,require) **/
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
    let t = null == (e = (0, u.A)()) || e,
        n = (0, c.tI)(),
        A = (0, o.sP)(),
        f = (0, a.yM)(),
        b = i.useMemo(() => (!A || !!f) && !t, [A, t, f]),
        h = i.useCallback(e => {
            A && e ? l.A.showAgeVerificationGetStartedModal({
                entryPoint: s.q1.AGE_RESTRICTED_SERVERS_ACCESS_SETTINGS
            }) : d.Kg.updateSetting(e)
        }, [A]);
    return (0, r.jsx)(_.h, {
        setting: m.H.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_IOS_V2,
        children: (0, r.jsx)(p.Ay, {
            title: g.intl.string(g.t["L+yTsa"]),
            value: n,
            onChange: h,
            disabled: b,
            note: g.intl.string(g.t.hiM8pU)
        })
    })
}