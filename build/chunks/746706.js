/** chunk id: 746706 params = (module,exports,require) **/
n.d(t, {
    A: () => E
});
var i = n(627968),
    s = n(64700),
    l = n(421380),
    a = n(397927),
    r = n(736653),
    o = n(793574),
    d = n(688810),
    c = n(465794),
    u = n(954571),
    _ = n(927578),
    g = n(652215),
    A = n(788868),
    m = n(985018),
    h = n(834058),
    p = n(896237),
    x = n(448085);

function E(e) {
    let {
        user: t,
        showOverlay: n,
        children: E
    } = e, T = (0, r.Ay)(), {
        analyticsLocations: S
    } = (0, d.Ay)(o.A.PREMIUM_UPSELL_OVERLAY);
    return (s.useEffect(() => {
        n && u.default.track(g.HAw.PREMIUM_UPSELL_VIEWED, {
            location_stack: S,
            type: A.e.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE
        })
    }, [n, S]), n) ? (0, i.jsxs)("div", {
        className: h.ry,
        children: [(0, i.jsx)("div", {
            children: E
        }), (0, i.jsxs)("div", {
            className: h.Wc,
            children: [(0, i.jsx)("img", {
                className: h.Tn,
                alt: m.intl.string(m.t.LHFZQy),
                src: function(e) {
                    switch (e) {
                        case g.NJ8.DARK:
                        case g.NJ8.DARKER:
                        case g.NJ8.MIDNIGHT:
                            return p;
                        case g.NJ8.LIGHT:
                            return x;
                        default:
                            return p
                    }
                }(T)
            }), (0, i.jsxs)("div", {
                className: h._9,
                children: [(0, i.jsx)(a.Text, {
                    variant: "text-lg/semibold",
                    color: "always-white",
                    children: m.intl.string(m.t.dMaDFX)
                }), (0, i.jsx)(a.Text, {
                    variant: "text-sm/normal",
                    color: "always-white",
                    children: m.intl.string(m.t.F7sgFH)
                })]
            }), (0, i.jsx)(c.A, {
                size: l.$n.Sizes.LARGE,
                color: l.$n.Colors.GREEN,
                textOptions: {
                    textOverride: _.Ay.isPremium(t) ? m.intl.string(m.t.AfRWI8) : m.intl.string(m.t.nkdUym)
                },
                subscriptionTier: A.pe.TIER_2
            })]
        })]
    }) : E
}