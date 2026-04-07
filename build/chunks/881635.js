/** chunk id: 881635 params = (module,exports,require) **/
n.d(t, {
    A: () => _
});
var i = n(627968),
    l = n(64700),
    a = n(311907),
    r = n(397927),
    s = n(688810),
    o = n(287809),
    c = n(987144),
    d = n(652215),
    u = n(985018);

function _(e) {
    let {
        guild: t,
        analyticsLocation: n,
        analyticsLocations: _,
        closeLayer: A,
        variant: m = "expressive"
    } = e, [E, T] = l.useState(!1), {
        analyticsLocations: I
    } = (0, s.Ay)(_ ?? []), N = (0, a.bG)([o.default], () => o.default.getCurrentUser()), g = N?.isPremiumGroupMember();
    async function f() {
        T(!0), await (0, c.g)({
            analyticsLocations: I,
            analyticsLocation: {
                object: d.ZSU.BUTTON_CTA,
                objectType: d.AnalyticsObjectTypes.BUY,
                ...n
            },
            guild: t,
            closeLayer: A,
            onClose: () => {
                T(!1)
            }
        })
    }
    return (0, i.jsx)(r.Button, {
        variant: m,
        size: "md",
        icon: r._Jp,
        text: u.intl.string(u.t.gKmQ1G),
        onClick: f,
        loading: E,
        disabled: g
    })
}