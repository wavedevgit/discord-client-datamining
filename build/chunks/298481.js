/** chunk id: 298481, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(627968),
    l = n(64700),
    r = n(397927),
    a = n(935649),
    s = n(847599),
    o = n(870383),
    d = n(36149),
    c = n(985018);

function u(e) {
    let {
        channelId: t
    } = e, n = (0, d.b8)(), u = (0, d.i2)(), _ = (0, o.W)(c.intl.string(c.t.KPGVWl), c.intl.string(c.t["9KiIz6"])), m = c.intl.string(c.t["/nicWo"]), h = l.useCallback(() => {
        a.A.showAgeVerificationGetStartedModal({
            entryPoint: s.q1.SYSTEM_DM_RETRY_BUTTON
        }), (0, s.UT)(s.Im.RETRY, t)
    }, [t]);
    return (0, i.jsx)(r.Button, {
        variant: "primary",
        text: n ? _ : m,
        onClick: h,
        disabled: !u
    })
}