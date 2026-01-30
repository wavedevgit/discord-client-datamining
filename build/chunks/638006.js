/** chunk id: 638006, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => S
});
var r = n(627968),
    i = n(503698),
    a = n.n(i),
    o = n(575593),
    s = n(158954),
    l = n(311907),
    c = n(397927),
    u = n(331402),
    d = n(287809),
    f = n(298072),
    p = n(466459),
    _ = n(623373),
    h = n(561769),
    m = n(846957),
    g = n(929283),
    E = n(245068),
    y = n(761365),
    b = n(550674),
    O = n(8056);
let v = e => {
        let {
            product: t,
            isCardHovered: n
        } = e, i = (0, _.YW)(t), {
            isPurchased: s,
            isPartiallyOwnedBundle: l
        } = (0, p.h)(t), c = i === o.R.PROFILE_EFFECT;
        return (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)("div", {
                className: a()(O.mA, {
                    [O.zj]: (s || l) && !n,
                    [O.Ge]: c
                }),
                children: (0, r.jsx)(A, {
                    product: t,
                    isCardHovered: n
                })
            }), s && (0, r.jsx)(I, {
                hidden: n
            })]
        })
    },
    A = e => {
        let {
            product: t,
            isCardHovered: n
        } = e, i = (0, l.bG)([d.default], () => d.default.getCurrentUser()), a = (0, _.YW)(t), s = (0, b.D)(t);
        switch (a) {
            case o.R.PROFILE_EFFECT:
                return (0, r.jsx)(u.A, {
                    skuId: s.skuId,
                    isHighlighted: n,
                    removeSetHeight: !0
                });
            case o.R.AVATAR_DECORATION:
                return (0, r.jsx)(g.i, {
                    item: s,
                    user: i,
                    isHighlighted: n,
                    avatarSize: c._3J.SIZE_120
                });
            case o.R.NAMEPLATE:
                return (0, r.jsx)(y.A, {
                    nameplate: s,
                    user: i,
                    isHighlighted: n
                });
            case o.R.BUNDLE:
                return (0, r.jsx)(E.X, {
                    product: t,
                    user: i,
                    isHighlighted: n
                });
            case o.R.EXTERNAL_SKU:
                return (0, r.jsx)(m.B, {
                    product: t,
                    animationState: n ? "on" : "off"
                });
            default:
                return null
        }
    },
    I = e => {
        let {
            hidden: t
        } = e;
        return (0, r.jsx)(s.rOg, {
            size: "custom",
            color: c.LU0.colors.INTERACTIVE_TEXT_ACTIVE,
            width: 40,
            height: 40,
            className: a()(O.zo, {
                [O.R]: t
            })
        })
    },
    S = e => {
        let {
            skuId: t,
            isCardHovered: n,
            overrideVariantIndex: i
        } = e, a = (0, h.Vm)(t), o = (0, f.Q)(a);
        if (null == a) return null;
        let s = (0, _.rb)(a, null != i ? i : o);
        return (0, r.jsx)(v, {
            product: s,
            isCardHovered: n
        })
    }