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
    c = r(287809),
    d = r(298072),
    h = r(466459),
    m = r(139136),
    x = r(623373),
    f = r(561769),
    p = r(846957),
    g = r(929283),
    v = r(245068),
    C = r(761365),
    A = r(550674),
    b = r(660598);
let k = e => {
        let {
            product: t,
            isCardHovered: r
        } = e, l = (0, x.YW)(t), {
            isPurchased: a,
            isPartiallyOwnedBundle: u
        } = (0, h.h)(t), o = l === s.R.PROFILE_EFFECT;
        return (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)("div", {
                className: i()(b.mA, {
                    [b.zj]: (a || u) && !r,
                    [b.Ge]: o
                }),
                children: (0, n.jsx)(I, {
                    product: t,
                    isCardHovered: r
                })
            }), a && (0, n.jsx)(y, {
                hidden: r
            })]
        })
    },
    I = e => {
        let {
            product: t,
            isCardHovered: r
        } = e, l = (0, u.bG)([c.default], () => c.default.getCurrentUser()), i = (0, x.YW)(t), a = (0, A.D)(t);
        switch (i) {
            case s.R.PROFILE_EFFECT:
                return (0, n.jsx)(m.A, {
                    skuId: a.skuId,
                    isHighlighted: r,
                    removeSetHeight: !0,
                    hideBackground: !0
                });
            case s.R.AVATAR_DECORATION:
                return (0, n.jsx)(g.i, {
                    item: a,
                    user: l,
                    isHighlighted: r,
                    avatarSize: o._3J.SIZE_120
                });
            case s.R.NAMEPLATE:
                return (0, n.jsx)(C.A, {
                    nameplate: a,
                    user: l,
                    isHighlighted: r
                });
            case s.R.BUNDLE:
                return (0, n.jsx)(v.X, {
                    product: t,
                    user: l,
                    isHighlighted: r
                });
            case s.R.EXTERNAL_SKU:
                return (0, n.jsx)(p.B, {
                    product: t,
                    animationState: r ? "on" : "off"
                });
            default:
                return null
        }
    },
    y = e => {
        let {
            hidden: t
        } = e;
        return (0, n.jsx)(a.rOg, {
            size: "custom",
            color: o.LU0.colors.INTERACTIVE_TEXT_ACTIVE,
            width: 40,
            height: 40,
            className: i()(b.zo, {
                [b.R]: t
            })
        })
    },
    E = e => {
        let {
            skuId: t,
            isCardHovered: r,
            overrideVariantIndex: l
        } = e, i = (0, f.Vm)(t), s = (0, d.Q)(i);
        if (null == i) return null;
        let a = (0, x.rb)(i, l ?? s);
        return (0, n.jsx)(k, {
            product: a,
            isCardHovered: r
        })
    }