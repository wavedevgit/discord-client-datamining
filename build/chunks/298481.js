/** chunk id: 298481, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
});
var r = n(627968),
    i = n(64700),
    l = n(397927),
    a = n(935649),
    s = n(847599),
    o = n(870383),
    c = n(36149),
    u = n(985018);

function d(e) {
    let {
        channelId: t
    } = e, n = (0, c.b8)(), d = (0, c.i2)(), p = (0, o.W)(u.intl.string(u.t.KPGVWl), u.intl.string(u.t["9KiIz6"])), m = u.intl.string(u.t["/nicWo"]), f = i.useCallback(() => {
        a.A.showAgeVerificationGetStartedModal({
            entryPoint: s.q1.SYSTEM_DM_RETRY_BUTTON
        }), (0, s.UT)(s.Im.RETRY, t)
    }, [t]);
    return (0, r.jsx)(l.Button, {
        variant: "primary",
        text: n ? p : m,
        onClick: f,
        disabled: !d
    })
}