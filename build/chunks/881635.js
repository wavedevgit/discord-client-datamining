/** chunk id: 881635, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
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

function m(e) {
    let {
        guild: t,
        closeLayer: n
    } = e, [m, _] = l.useState(!1), {
        analyticsLocations: A
    } = (0, s.Ay)(), h = (0, a.bG)([o.default], () => o.default.getCurrentUser()), f = h?.isPremiumGroupMember();
    async function E() {
        _(!0), await (0, c.g)({
            analyticsLocations: A,
            analyticsLocation: {
                page: d.liQ.PREMIUM_GUILD_USER_MODAL,
                section: d.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                object: d.ZSU.BUTTON_CTA,
                objectType: d.AnalyticsObjectTypes.BUY
            },
            guild: t,
            closeLayer: n,
            onClose: () => {
                _(!1)
            }
        })
    }
    return (0, i.jsx)(r.Button, {
        variant: "expressive",
        size: "md",
        icon: r._Jp,
        text: u.intl.string(u.t.gKmQ1G),
        onClick: E,
        loading: m,
        disabled: f
    })
}