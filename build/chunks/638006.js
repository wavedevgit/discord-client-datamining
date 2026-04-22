/** chunk id: 638006 params = (module,exports,require) **/
r.d(e, {
    A: () => j
});
var n = r(627968),
    i = r(503698),
    l = r.n(i),
    s = r(575593),
    a = r(158954),
    u = r(311907),
    o = r(397927),
    c = r(287809),
    d = r(298072),
    k = r(320447),
    p = r(466459),
    C = r(139136),
    m = r(623373),
    x = r(561769),
    I = r(846957),
    A = r(929283),
    g = r(245068),
    h = r(761365),
    _ = r(550674),
    f = r(721861);
let T = t => {
        let {
            product: e,
            isCardHovered: r
        } = t, i = (0, m.YW)(e), {
            isPurchased: a,
            isPartiallyOwnedBundle: u
        } = (0, p.h)(e), {
            enabled: o
        } = (0, k.P)("ProductCardPreview"), c = i === s.R.PROFILE_EFFECT || i === s.R.BUNDLE && o;
        return (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)("div", {
                className: l()(f.mA, {
                    [f.zj]: (a || u) && !r,
                    [f.Ge]: c
                }),
                children: (0, n.jsx)(v, {
                    product: e,
                    isCardHovered: r
                })
            }), a && (0, n.jsx)(E, {
                hidden: r
            })]
        })
    },
    v = t => {
        let {
            product: e,
            isCardHovered: r
        } = t, i = (0, u.bG)([c.default], () => c.default.getCurrentUser()), l = (0, m.YW)(e), a = (0, _.D)(e);
        switch (l) {
            case s.R.PROFILE_EFFECT:
                return (0, n.jsx)(C.A, {
                    skuId: a.skuId,
                    isHighlighted: r,
                    removeSetHeight: !0,
                    hideBackground: !0
                });
            case s.R.AVATAR_DECORATION:
                return (0, n.jsx)(A.i, {
                    item: a,
                    user: i,
                    isHighlighted: r,
                    avatarSize: o._3J.SIZE_120
                });
            case s.R.NAMEPLATE:
                return (0, n.jsx)(h.A, {
                    nameplate: a,
                    user: i,
                    isHighlighted: r
                });
            case s.R.BUNDLE:
                return (0, n.jsx)(g.X, {
                    product: e,
                    user: i,
                    isHighlighted: r
                });
            case s.R.EXTERNAL_SKU:
                return (0, n.jsx)(I.B, {
                    product: e,
                    animationState: r ? "on" : "off"
                });
            default:
                return null
        }
    },
    E = t => {
        let {
            hidden: e
        } = t;
        return (0, n.jsx)(a.rOg, {
            size: "custom",
            color: o.LU0.colors.INTERACTIVE_TEXT_ACTIVE,
            width: 40,
            height: 40,
            className: l()(f.zo, {
                [f.R]: e
            })
        })
    },
    j = t => {
        let {
            skuId: e,
            isCardHovered: r,
            overrideVariantIndex: i
        } = t, l = (0, x.Vm)(e), s = (0, d.Q)(l);
        if (null == l) return null;
        let a = (0, m.rb)(l, i ?? s);
        return (0, n.jsx)(T, {
            product: a,
            isCardHovered: r
        })
    }