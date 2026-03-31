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
        closeLayer: m,
        variant: A = "expressive"
    } = e, [E, I] = l.useState(!1), {
        analyticsLocations: T
    } = (0, s.Ay)(_ ?? []), f = (0, a.bG)([o.default], () => o.default.getCurrentUser()), N = f?.isPremiumGroupMember();
    async function g() {
        I(!0), await (0, c.g)({
            analyticsLocations: T,
            analyticsLocation: {
                object: d.ZSU.BUTTON_CTA,
                objectType: d.AnalyticsObjectTypes.BUY,
                ...n
            },
            guild: t,
            closeLayer: m,
            onClose: () => {
                I(!1)
            }
        })
    }
    return (0, i.jsx)(r.Button, {
        variant: A,
        size: "md",
        icon: r._Jp,
        text: u.intl.string(u.t.gKmQ1G),
        onClick: g,
        loading: E,
        disabled: N
    })
}