/** chunk id: 298481 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var i = n(627968),
    a = n(64700),
    l = n(397927),
    s = n(935649),
    r = n(847599),
    o = n(36149),
    d = n(985018);

function c(e) {
    let {
        channelId: t
    } = e, n = (0, o.b8)(), c = (0, o.i2)(), u = d.intl.string(d.t["9KiIz6"]), _ = d.intl.string(d.t["/nicWo"]), m = a.useCallback(() => {
        s.A.showAgeVerificationGetStartedModal({
            entryPoint: r.q1.SYSTEM_DM_RETRY_BUTTON
        }), (0, r.UT)(r.Im.RETRY, t)
    }, [t]);
    return (0, i.jsx)(l.Button, {
        variant: "primary",
        text: n ? u : _,
        onClick: m,
        disabled: !c
    })
}