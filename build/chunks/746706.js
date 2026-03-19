/** chunk id: 746706 params = (module,exports,require) **/
n.d(t, {
    A: () => T
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
    m = n(652215),
    g = n(788868),
    A = n(985018),
    x = n(834058),
    h = n(896237),
    p = n(448085);

function T(e) {
    let {
        user: t,
        showOverlay: n,
        children: T
    } = e, E = (0, r.Ay)(), {
        analyticsLocations: S
    } = (0, d.Ay)(o.A.PREMIUM_UPSELL_OVERLAY);
    return (s.useEffect(() => {
        n && u.default.track(m.HAw.PREMIUM_UPSELL_VIEWED, {
            location_stack: S,
            type: g.e.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE
        })
    }, [n, S]), n) ? (0, i.jsxs)("div", {
        className: x.ry,
        children: [(0, i.jsx)("div", {
            children: T
        }), (0, i.jsxs)("div", {
            className: x.Wc,
            children: [(0, i.jsx)("img", {
                className: x.Tn,
                alt: A.intl.string(A.t.LHFZQy),
                src: function(e) {
                    switch (e) {
                        case m.NJ8.DARK:
                        case m.NJ8.DARKER:
                        case m.NJ8.MIDNIGHT:
                            return h;
                        case m.NJ8.LIGHT:
                            return p;
                        default:
                            return h
                    }
                }(E)
            }), (0, i.jsxs)("div", {
                className: x._9,
                children: [(0, i.jsx)(a.Text, {
                    variant: "text-lg/semibold",
                    color: "always-white",
                    children: A.intl.string(A.t.dMaDFX)
                }), (0, i.jsx)(a.Text, {
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