/** Chunk was on 5606 **/
/** chunk id: 389242, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f
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
    p = n(871930),
    _ = n(578746),
    m = n(531525),
    g = n(985018);

function f() {
    var e;
    let t = null == (e = (0, u.A)()) || e,
        n = (0, c.tI)(),
        f = (0, o.sP)(),
        b = (0, a.yM)(),
        h = i.useMemo(() => (!f || !!b) && !t, [f, t, b]),
        A = i.useCallback(e => {
            f && e ? l.A.showAgeVerificationGetStartedModal({
                entryPoint: s.q1.AGE_RESTRICTED_SERVERS_ACCESS_SETTINGS
            }) : d.Kg.updateSetting(e)
        }, [f]);
    return (0, r.jsx)(p.h, {
        setting: m.H.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_IOS_V2,
        children: (0, r.jsx)(_.Ay, {
            title: g.intl.string(g.t["L+yTsa"]),
            value: n,
            onChange: A,
            disabled: h,
            note: g.intl.string(g.t.hiM8pU)
        })
    })
}