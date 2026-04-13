/** chunk id: 881635 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => _
});
var i = n(627968),
    r = n(64700),
    s = n(311907),
    a = n(397927),
    l = n(688810),
    o = n(287809),
    c = n(987144),
    u = n(652215),
    d = n(985018);

function _(e) {
    let {
        guild: t,
        analyticsLocation: n,
        analyticsLocations: _,
        closeLayer: E,
        variant: A = "expressive"
    } = e, [m, I] = r.useState(!1), {
        analyticsLocations: T
    } = (0, l.Ay)(_ ?? []), N = (0, s.bG)([o.default], () => o.default.getCurrentUser()), g = N?.isPremiumGroupMember();
    async function p() {
        I(!0), await (0, c.g)({
            analyticsLocations: T,
            analyticsLocation: {
                object: u.ZSU.BUTTON_CTA,
                objectType: u.AnalyticsObjectTypes.BUY,
                ...n
            },
            guild: t,
            closeLayer: E,
            onClose: () => {
                I(!1)
            }
        })
    }
    return (0, i.jsx)(a.Button, {
        variant: A,
        size: "md",
        icon: a._Jp,
        text: d.intl.string(d.t.gKmQ1G),
        onClick: p,
        loading: m,
        disabled: g
    })
}