/** chunk id: 638006 params = (module,exports,require) **/
r.d(t, {
    A: () => j
});
var n = r(627968),
    l = r(503698),
    i = r.n(l),
    a = r(575593),
    s = r(158954),
    u = r(311907),
    o = r(397927),
    c = r(331402),
    d = r(287809),
    h = r(298072),
    m = r(400076),
    f = r(466459),
    x = r(623373),
    A = r(561769),
    p = r(846957),
    v = r(929283),
    g = r(245068),
    C = r(761365),
    b = r(550674),
    I = r(998918);
let k = e => {
        let {
            product: t,
            isCardHovered: r,
            showDefaultAvatar: l,
            disableAnimation: s
        } = e, u = (0, x.YW)(t), {
            isPurchased: o,
            isPartiallyOwnedBundle: c
        } = (0, f.h)(t), d = u === a.R.PROFILE_EFFECT;
        return (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)("div", {
                className: i()(I.mA, {
                    [I.zj]: (o || c) && !r,
                    [I.Ge]: d
                }),
                children: (0, n.jsx)(E, {
                    product: t,
                    isCardHovered: r,
                    showDefaultAvatar: l,
                    disableAnimation: s
                })
            }), o && (0, n.jsx)(y, {
                hidden: r
            })]
        })
    },
    E = e => {
        let {
            product: t,
            isCardHovered: r,
            showDefaultAvatar: l,
            disableAnimation: i
        } = e, s = (0, u.bG)([d.default], () => d.default.getCurrentUser()), h = (0, x.YW)(t), m = (0, b.D)(t), f = r && !i;
        switch (h) {
            case a.R.PROFILE_EFFECT:
                return (0, n.jsx)(c.A, {
                    skuId: m.skuId,
                    isHighlighted: f,
                    removeSetHeight: !0,
                    hideBackground: !0
                });
            case a.R.AVATAR_DECORATION:
                return (0, n.jsx)(v.i, {
                    item: m,
                    user: s,
                    isHighlighted: f,
                    showDefaultAvatar: l,
                    disableAnimation: i,
                    avatarSize: o._3J.SIZE_120
                });
            case a.R.NAMEPLATE:
                return (0, n.jsx)(C.A, {
                    nameplate: m,
                    user: s,
                    isHighlighted: f,
                    showDefaultAvatar: l
                });
            case a.R.BUNDLE:
                return (0, n.jsx)(g.X, {
                    product: t,
                    user: s,
                    isHighlighted: f,
                    showDefaultAvatar: l,
                    disableAnimation: i
                });
            case a.R.EXTERNAL_SKU:
                return (0, n.jsx)(p.B, {
                    product: t,
                    animationState: f ? "on" : "off"
                });
            default:
                return null
        }
    },
    y = e => {
        let {
            hidden: t
        } = e;
        return (0, n.jsx)(s.rOg, {
            size: "custom",
            color: o.LU0.colors.INTERACTIVE_TEXT_ACTIVE,
            width: 40,
            height: 40,
            className: i()(I.zo, {
                [I.R]: t
            })
        })
    },
    j = e => {
        let {
            skuId: t,
            isCardHovered: r,
            overrideVariantIndex: l
        } = e, i = (0, A.Vm)(t), a = (0, h.Q)(i), {
            variant: s
        } = (0, m.w)("ProductPreview"), u = s !== m.L.CONTROL, o = s === m.L.DEFAULT_AVATAR_NO_ANIMATION;
        if (null == i) return null;
        let c = (0, x.rb)(i, l ?? a);
        return (0, n.jsx)(k, {
            product: c,
            isCardHovered: r,
            showDefaultAvatar: u,
            disableAnimation: o
        })
    }