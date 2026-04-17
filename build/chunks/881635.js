/** chunk id: 881635 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => _
});
var i = n(627968),
    r = n(64700),
    l = n(311907),
    s = n(397927),
    a = n(688810),
    o = n(287809),
    c = n(987144),
    u = n(652215),
    d = n(985018);

function _(e) {
    let {
        guild: t,
        analyticsLocation: n,
        analyticsLocations: _,
        closeLayer: A,
        variant: E = "expressive"
    } = e, [m, I] = r.useState(!1), {
        analyticsLocations: T
    } = (0, a.Ay)(_ ?? []), g = (0, l.bG)([o.default], () => o.default.getCurrentUser()), N = g?.isPremiumGroupMember();
    async function f() {
        I(!0), await (0, c.g)({
            analyticsLocations: T,
            analyticsLocation: {
                object: u.ZSU.BUTTON_CTA,
                objectType: u.AnalyticsObjectTypes.BUY,
                ...n
            },
            guild: t,
            closeLayer: A,
            onClose: () => {
                I(!1)
            }
        })
    }
    return (0, i.jsx)(s.Button, {
        variant: E,
        size: "md",
        icon: s._Jp,
        text: d.intl.string(d.t.gKmQ1G),
        onClick: f,
        loading: m,
        disabled: N
    })
}