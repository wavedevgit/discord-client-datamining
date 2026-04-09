/** chunk id: 638006 params = (module,exports,require) **/
r.d(t, {
    A: () => E
});
var n = r(627968),
    l = r(503698),
    i = r.n(l),
    s = r(575593),
    a = r(158954),
    u = r(311907),
    o = r(397927),
    d = r(287809),
    c = r(298072),
    p = r(320447),
    m = r(466459),
    x = r(139136),
    g = r(623373),
    h = r(561769),
    C = r(846957),
    A = r(929283),
    k = r(245068),
    I = r(761365),
    v = r(550674),
    f = r(797877);
let _ = e => {
        let {
            product: t,
            isCardHovered: r
        } = e, l = (0, g.YW)(t), {
            isPurchased: a,
            isPartiallyOwnedBundle: u
        } = (0, m.h)(t), {
            enabled: o
        } = (0, p.P)("ProductCardPreview"), d = l === s.R.PROFILE_EFFECT || l === s.R.BUNDLE && o;
        return (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)("div", {
                className: i()(f.mA, {
                    [f.zj]: (a || u) && !r,
                    [f.Ge]: d
                }),
                children: (0, n.jsx)(y, {
                    product: t,
                    isCardHovered: r
                })
            }), a && (0, n.jsx)(j, {
                hidden: r
            })]
        })
    },
    y = e => {
        let {
            product: t,
            isCardHovered: r
        } = e, l = (0, u.bG)([d.default], () => d.default.getCurrentUser()), i = (0, g.YW)(t), a = (0, v.D)(t);
        switch (i) {
            case s.R.PROFILE_EFFECT:
                return (0, n.jsx)(x.A, {
                    skuId: a.skuId,
                    isHighlighted: r,
                    removeSetHeight: !0,
                    hideBackground: !0
                });
            case s.R.AVATAR_DECORATION:
                return (0, n.jsx)(A.i, {
                    item: a,
                    user: l,
                    isHighlighted: r,
                    avatarSize: o._3J.SIZE_120
                });
            case s.R.NAMEPLATE:
                return (0, n.jsx)(I.A, {
                    nameplate: a,
                    user: l,
                    isHighlighted: r
                });
            case s.R.BUNDLE:
                return (0, n.jsx)(k.X, {
                    product: t,
                    user: l,
                    isHighlighted: r
                });
            case s.R.EXTERNAL_SKU:
                return (0, n.jsx)(C.B, {
                    product: t,
                    animationState: r ? "on" : "off"
                });
            default:
                return null
        }
    },
    j = e => {
        let {
            hidden: t
        } = e;
        return (0, n.jsx)(a.rOg, {
            size: "custom",
            color: o.LU0.colors.INTERACTIVE_TEXT_ACTIVE,
            width: 40,
            height: 40,
            className: i()(f.zo, {
                [f.R]: t
            })
        })
    },
    E = e => {
        let {
            skuId: t,
            isCardHovered: r,
            overrideVariantIndex: l
        } = e, i = (0, h.Vm)(t), s = (0, c.Q)(i);
        if (null == i) return null;
        let a = (0, g.rb)(i, l ?? s);
        return (0, n.jsx)(_, {
            product: a,
            isCardHovered: r
        })
    }