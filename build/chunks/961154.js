/** Chunk was on 5606 **/
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
    p = n(792656),
    _ = n(954571),
    m = n(358776),
    g = n(12901),
    f = n(652215),
    b = n(788868),
    h = n(985018),
    A = n(567856);
let E = () => {
    let {
        analyticsLocations: e
    } = (0, o.Ay)(a.A.USER_SETTINGS), t = (0, i.bG)([c.A], () => c.A.isUpsellPreview), n = (0, m.dk)("UserSettingsAppearanceInAppIcon");
    return (0, s.Ay)(() => {
        t && _.default.track(f.HAw.PREMIUM_UPSELL_VIEWED, {
            type: b.e.APP_ICON_UPSELL,
            location_stack: e
        })
    }), (0, r.jsxs)("div", {
        className: A.Gg,
        children: [(0, r.jsx)(d.A, {
            disabled: t,
            renderCTAButtons: () => (0, r.jsxs)("div", {
                className: A.gY,
                children: [(0, r.jsx)(l.Button, {
                    variant: t ? "secondary" : "primary",
                    text: h.intl.string(h.t["hb/wE0"]),
                    onClick: () => void((0, u.nf)(u.HP.APP_ICON), (0, g.default)())
                }), t ? (0, r.jsx)(p.A, {
                    subscriptionTier: b.pe.TIER_2,
                    defaultTextOverride: h.intl.string(h.t.mr4K7D),
                    premiumModalAnalyticsLocation: {
                        object: f.ZSU.BUTTON_CTA,
                        objectType: f.AnalyticsObjectTypes.BUY
                    },
                    fullWidth: !0
                }) : null]
            })
        }), !n && (0, r.jsx)(l.cGx, {
            className: A.yF
        })]
    })
}