/** chunk id: 638006 params = (module,exports,require) **/
r.d(t, {
    A: () => y
});
var n = r(627968),
    l = r(503698),
    i = r.n(l),
    s = r(575593),
    a = r(158954),
    o = r(311907),
    u = r(397927),
    c = r(287809),
    d = r(298072),
    p = r(320447),
    k = r(466459),
    C = r(139136),
    m = r(623373),
    x = r(561769),
    g = r(846957),
    h = r(929283),
    A = r(245068),
    I = r(761365),
    v = r(550674),
    _ = r(797877);
let T = e => {
        let {
            product: t,
            isCardHovered: r
        } = e, l = (0, m.YW)(t), {
            isPurchased: a,
            isPartiallyOwnedBundle: o
        } = (0, k.h)(t), {
            enabled: u
        } = (0, p.P)("ProductCardPreview"), c = l === s.R.PROFILE_EFFECT || l === s.R.BUNDLE && u;
        return (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)("div", {
                className: i()(_.mA, {
                    [_.zj]: (a || o) && !r,
                    [_.Ge]: c
                }),
                children: (0, n.jsx)(f, {
                    product: t,
                    isCardHovered: r
                })
            }), a && (0, n.jsx)(E, {
                hidden: r
            })]
        })
    },
    f = e => {
        let {
            product: t,
            isCardHovered: r
        } = e, l = (0, o.bG)([c.default], () => c.default.getCurrentUser()), i = (0, m.YW)(t), a = (0, v.D)(t);
        switch (i) {
            case s.R.PROFILE_EFFECT:
                return (0, n.jsx)(C.A, {
                    skuId: a.skuId,
                    isHighlighted: r,
                    removeSetHeight: !0,
                    hideBackground: !0
                });
            case s.R.AVATAR_DECORATION:
                return (0, n.jsx)(h.i, {
                    item: a,
                    user: l,
                    isHighlighted: r,
                    avatarSize: u._3J.SIZE_120
                });
            case s.R.NAMEPLATE:
                return (0, n.jsx)(I.A, {
                    nameplate: a,
                    user: l,
                    isHighlighted: r
                });
            case s.R.BUNDLE:
                return (0, n.jsx)(A.X, {
                    product: t,
                    user: l,
                    isHighlighted: r
                });
            case s.R.EXTERNAL_SKU:
                return (0, n.jsx)(g.B, {
                    product: t,
                    animationState: r ? "on" : "off"
                });
            default:
                return null
        }
    },
    E = e => {
        let {
            hidden: t
        } = e;
        return (0, n.jsx)(a.rOg, {
            size: "custom",
            color: u.LU0.colors.INTERACTIVE_TEXT_ACTIVE,
            width: 40,
            height: 40,
            className: i()(_.zo, {
                [_.R]: t
            })
        })
    },
    y = e => {
        let {
            skuId: t,
            isCardHovered: r,
            overrideVariantIndex: l
        } = e, i = (0, x.Vm)(t), s = (0, d.Q)(i);
        if (null == i) return null;
        let a = (0, m.rb)(i, l ?? s);
        return (0, n.jsx)(T, {
            product: a,
            isCardHovered: r
        })
    }