/** chunk id: 961154, original params: e,t,n (module,exports,require) **/
n.d(t, {
    y: () => E
});
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(397927),
    s = n(964486),
    a = n(793574),
    o = n(688810),
    c = n(526162),
    d = n(848971),
    u = n(793943),
    _ = n(792656),
    p = n(954571),
    m = n(358776),
    g = n(12901),
    A = n(652215),
    f = n(788868),
    b = n(985018),
    h = n(567856);
let E = () => {
    let {
        analyticsLocations: e
    } = (0, o.Ay)(a.A.USER_SETTINGS), t = (0, i.bG)([c.A], () => c.A.isUpsellPreview), n = (0, m.dk)("UserSettingsAppearanceInAppIcon");
    return (0, s.Ay)(() => {
        t && p.default.track(A.HAw.PREMIUM_UPSELL_VIEWED, {
            type: f.e.APP_ICON_UPSELL,
            location_stack: e
        })
    }), (0, r.jsxs)("div", {
        className: h.Gg,
        children: [(0, r.jsx)(d.A, {
            disabled: t,
            renderCTAButtons: () => (0, r.jsxs)("div", {
                className: h.gY,
                children: [(0, r.jsx)(l.Button, {
                    variant: t ? "secondary" : "primary",
                    text: b.intl.string(b.t["hb/wE0"]),
                    onClick: () => void((0, u.nf)(u.HP.APP_ICON), (0, g.default)())
                }), t ? (0, r.jsx)(_.A, {
                    subscriptionTier: f.pe.TIER_2,
                    defaultTextOverride: b.intl.string(b.t.mr4K7D),
                    premiumModalAnalyticsLocation: {
                        object: A.ZSU.BUTTON_CTA,
                        objectType: A.AnalyticsObjectTypes.BUY
                    },
                    fullWidth: !0
                }) : null]
            })
        }), !n && (0, r.jsx)(l.cGx, {
            className: h.yF
        })]
    })
}