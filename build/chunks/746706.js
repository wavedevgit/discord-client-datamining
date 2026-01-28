/** Chunk was on 5606 **/
/** chunk id: 746706, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => A
});
var r = n(627968),
    i = n(64700),
    l = n(421380),
    s = n(397927),
    a = n(736653),
    o = n(793574),
    c = n(688810),
    d = n(465794),
    u = n(954571),
    p = n(927578),
    _ = n(652215),
    m = n(788868),
    g = n(985018),
    f = n(547568),
    b = n(896237),
    h = n(448085);

function A(e) {
    let {
        user: t,
        showOverlay: n,
        children: A
    } = e, E = (0, a.Ay)(), {
        analyticsLocations: x
    } = (0, c.Ay)(o.A.PREMIUM_UPSELL_OVERLAY);
    return (i.useEffect(() => {
        n && u.default.track(_.HAw.PREMIUM_UPSELL_VIEWED, {
            location_stack: x,
            type: m.e.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE
        })
    }, [n, x]), n) ? (0, r.jsxs)("div", {
        className: f.ry,
        children: [(0, r.jsx)("div", {
            children: A
        }), (0, r.jsxs)("div", {
            className: f.Wc,
            children: [(0, r.jsx)("img", {
                className: f.Tn,
                alt: g.intl.string(g.t.LHFZQy),
                src: function(e) {
                    switch (e) {
                        case _.NJ8.DARK:
                        case _.NJ8.DARKER:
                        case _.NJ8.MIDNIGHT:
                            return b;
                        case _.NJ8.LIGHT:
                            return h;
                        default:
                            return b
                    }
                }(E)
            }), (0, r.jsxs)("div", {
                className: f._9,
                children: [(0, r.jsx)(s.Text, {
                    variant: "text-lg/semibold",
                    color: "always-white",
                    children: g.intl.string(g.t.dMaDFX)
                }), (0, r.jsx)(s.Text, {
                    variant: "text-sm/normal",
                    color: "always-white",
                    children: g.intl.string(g.t.F7sgFH)
                })]
            }), (0, r.jsx)(d.A, {
                size: l.$n.Sizes.LARGE,
                color: l.$n.Colors.GREEN,
                textOptions: {
                    textOverride: p.Ay.isPremium(t) ? g.intl.string(g.t.AfRWI8) : g.intl.string(g.t.nkdUym)
                },
                subscriptionTier: m.pe.TIER_2
            })]
        })]
    }) : A
}