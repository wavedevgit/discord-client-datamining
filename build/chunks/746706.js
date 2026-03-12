/** chunk id: 746706 params = (module,exports,require) **/
n.d(t, {
    A: () => T
});
var i = n(627968),
    s = n(64700),
    l = n(421380),
    r = n(397927),
    a = n(736653),
    o = n(793574),
    d = n(688810),
    c = n(465794),
    u = n(954571),
    _ = n(927578),
    m = n(652215),
    g = n(788868),
    A = n(985018),
    h = n(834058),
    x = n(896237),
    p = n(448085);

function T(e) {
    let {
        user: t,
        showOverlay: n,
        children: T
    } = e, E = (0, a.Ay)(), {
        analyticsLocations: C
    } = (0, d.Ay)(o.A.PREMIUM_UPSELL_OVERLAY);
    return (s.useEffect(() => {
        n && u.default.track(m.HAw.PREMIUM_UPSELL_VIEWED, {
            location_stack: C,
            type: g.e.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE
        })
    }, [n, C]), n) ? (0, i.jsxs)("div", {
        className: h.ry,
        children: [(0, i.jsx)("div", {
            children: T
        }), (0, i.jsxs)("div", {
            className: h.Wc,
            children: [(0, i.jsx)("img", {
                className: h.Tn,
                alt: A.intl.string(A.t.LHFZQy),
                src: function(e) {
                    switch (e) {
                        case m.NJ8.DARK:
                        case m.NJ8.DARKER:
                        case m.NJ8.MIDNIGHT:
                            return x;
                        case m.NJ8.LIGHT:
                            return p;
                        default:
                            return x
                    }
                }(E)
            }), (0, i.jsxs)("div", {
                className: h._9,
                children: [(0, i.jsx)(r.Text, {
                    variant: "text-lg/semibold",
                    color: "always-white",
                    children: A.intl.string(A.t.dMaDFX)
                }), (0, i.jsx)(r.Text, {
                    variant: "text-sm/normal",
                    color: "always-white",
                    children: A.intl.string(A.t.F7sgFH)
                })]
            }), (0, i.jsx)(c.A, {
                size: l.$n.Sizes.LARGE,
                color: l.$n.Colors.GREEN,
                textOptions: {
                    textOverride: _.Ay.isPremium(t) ? A.intl.string(A.t.AfRWI8) : A.intl.string(A.t.nkdUym)
                },
                subscriptionTier: g.pe.TIER_2
            })]
        })]
    }) : T
}