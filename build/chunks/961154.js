/** chunk id: 961154 params = (module,exports,require) **/
n.d(t, {
    U6: () => T,
    kp: () => E,
    yG: () => C
});
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(397927),
    r = n(964486),
    a = n(793574),
    o = n(688810),
    d = n(526162),
    c = n(848971),
    u = n(793943),
    _ = n(792656),
    m = n(954571),
    g = n(12901),
    A = n(652215),
    h = n(788868),
    x = n(985018),
    p = n(223354);
let T = () => {
    (0, u.nf)(u.HP.APP_ICON), (0, g.default)()
};

function E() {
    return (0, i.jsx)(_.A, {
        subscriptionTier: h.pe.TIER_2,
        defaultTextOverride: x.intl.string(x.t.mr4K7D),
        premiumModalAnalyticsLocation: {
            object: A.ZSU.BUTTON_CTA,
            objectType: A.AnalyticsObjectTypes.BUY
        },
        fullWidth: !0
    })
}
let C = () => {
    let {
        analyticsLocations: e
    } = (0, o.Ay)(a.A.USER_SETTINGS), t = (0, s.bG)([d.A], () => d.A.isUpsellPreview);
    return (0, r.Ay)(() => {
        t && m.default.track(A.HAw.PREMIUM_UPSELL_VIEWED, {
            type: h.e.APP_ICON_UPSELL,
            location_stack: e
        })
    }), (0, i.jsx)("div", {
        className: p.Gg,
        children: (0, i.jsx)(c.A, {
            disabled: t,
            renderCTAButtons: () => (0, i.jsxs)("div", {
                className: p.gY,
                children: [(0, i.jsx)(l.Button, {
                    variant: t ? "secondary" : "primary",
                    text: x.intl.string(x.t["hb/wE0"]),
                    onClick: () => T()
                }), t && (0, i.jsx)(E, {})]
            })
        })
    })
}