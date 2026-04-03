/** chunk id: 298481 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var i = n(627968),
    l = n(64700),
    r = n(397927),
    s = n(935649),
    a = n(847599),
    o = n(36149),
    d = n(985018);

function c(e) {
    let {
        channelId: t
    } = e, n = (0, o.b8)(), c = (0, o.i2)(), u = d.intl.string(d.t["9KiIz6"]), m = d.intl.string(d.t["/nicWo"]), _ = l.useCallback(() => {
        s.A.showAgeVerificationGetStartedModal({
            entryPoint: a.q1.SYSTEM_DM_RETRY_BUTTON
        }), (0, a.UT)(a.Im.RETRY, t)
    }, [t]);
    return (0, i.jsx)(r.Button, {
        variant: "primary",
        text: n ? u : m,
        onClick: _,
        disabled: !c
    })
}