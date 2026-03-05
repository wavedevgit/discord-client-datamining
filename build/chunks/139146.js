/** chunk id: 139146, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    R: () => x,
    _: () => T
});
var a = n(627968),
    l = n(64700),
    r = n(503698),
    s = n.n(r),
    i = n(575593),
    o = n(311907),
    c = n(554146),
    d = n(435371),
    u = n(397927),
    _ = n(932001),
    m = n(661492),
    h = n(287809),
    p = n(466459),
    b = n(620434),
    f = n(49999),
    g = n(985018),
    A = n(394236);
let C = {
        sm: "xs",
        md: "refresh_sm"
    },
    x = e => {
        let {
            product: t,
            selectedVariantIndex: n,
            ...r
        } = e, s = l.useMemo(() => t.type === i.R.VARIANTS_GROUP && null != n && t.variants?.[n] != null ? t.variants[n] : t, [t, n]), o = s.skuId, {
            isPurchased: c
        } = (0, p.h)(s), d = l.useMemo(() => {
            let e = "6/4";
            switch (t.type) {
                case i.R.NAMEPLATE:
                case i.R.AVATAR_DECORATION:
                    e = "16/9";
                    break;
                case i.R.BUNDLE:
                case i.R.PROFILE_EFFECT:
                default:
                    e = "6/4"
            }
            return {
                type: "dynamic",
                component: u.Oz7.COLLECTIBLES_PREVIEW,
                aspectRatio: e,
                props: {
                    product: t,
                    forCollectedModal: !0
                }
            }
        }, [t]);
        return c ? null : (0, m.q)(s) ? (0, a.jsx)(T, {
            skuId: o,
            productName: s.name,
            nuxGraphic: d,
            ...r
        }) : (0, a.jsx)(T, {
            skuId: o,
            productName: s.name,
            nuxGraphic: d,
            disabled: !0,
            ...r
        })
    };

function T(e) {
    let {
        skuId: t,
        productName: r,
        className: i,
        disabled: m,
        isCardHovered: p = !0,
        nuxGraphic: x,
        onClick: T,
        variant: I = "default",
        size: E = "md"
    } = e, v = C[E], [S, N] = (0, _.kn)([c.M.WISHLIST_NUX_TOOLTIP_AND_MODAL], void 0, !0), y = (0, o.bG)([h.default], () => h.default.getCurrentUser()), k = S === c.M.WISHLIST_NUX_TOOLTIP_AND_MODAL, {
        reducedMotion: j
    } = l.useContext(u.CZY), {
        isWishlisted: R,
        isBusy: O,
        handleToggle: P
    } = (0, b.c)({
        currentUser: y,
        skuId: t,
        onAddSuccess: () => {
            k && null != x && ((0, u.mMO)(async () => {
                let {
                    default: e
                } = await n.e("64581").then(n.bind(n, 38884));
                return t => (0, a.jsx)(e, {
                    ...t,
                    graphic: x
                })
            }), N(f.i.USER_DISMISS))
        },
        onError: () => {
            (0, u.showToast)((0, u.createToast)(g.intl.string(g.t.F8FvUy), u.ToastType.FAILURE)), u.ORC.announce(g.intl.string(g.t.F8FvUy))
        }
    }), U = l.useRef(null), [w, L] = l.useState(!1), D = R && !w, M = D ? u.C3E : u.yhu, F = s()(A.normalIconColor, D && A.wishlistedOrAnimating);
    l.useEffect(() => {
        L(!1)
    }, [t]);
    let B = l.useCallback(e => {
            e.stopPropagation(), m || (T?.(), R || j.enabled ? R && w && L(!1) : L(!0), P())
        }, [m, T, R, j.enabled, w, P]),
        H = R ? g.intl.string(g.t.yr9TTf) : g.intl.string(g.t["8DkMEQ"]),
        G = g.intl.formatToPlainString(g.t["7kFjeK"], {
            productName: r
        }),
        W = !m && !R && !w,
        V = l.useCallback(e => {
            e.target === e.currentTarget && w && requestAnimationFrame(() => L(!1))
        }, [w]),
        Y = () => {
            var e;
            return (0, a.jsx)(u.DUT, {
                className: s()(A.wishlistButton, A[E], {
                    [A.variantDefault]: "default" === I,
                    [A.variantSecondaryOverlay]: "overlay-secondary" === I,
                    [A.disabled]: m
                }, i),
                innerRef: U,
                onClick: B,
                "aria-label": G,
                "aria-pressed": R,
                "aria-busy": O,
                "aria-disabled": m,
                children: j.enabled ? (0, a.jsx)(M, {
                    colorClass: e ?? F,
                    size: v
                }) : (0, a.jsxs)("div", {
                    className: s()(A.iconContainer, W && A.canAnimate),
                    children: [(0, a.jsx)("span", {
                        className: s()(A.iconWrapper, W && A.canHover),
                        children: (0, a.jsx)(M, {
                            colorClass: e ?? F,
                            size: v
                        })
                    }), (0, a.jsx)("span", {
                        className: s()(A.animationOverlay, w && A.clickAnimation),
                        onAnimationEnd: V,
                        children: (0, a.jsx)(u.C3E, {
                            size: v
                        })
                    })]
                })
            })
        };
    return (p || R) && null != y ? k && !m ? (0, a.jsx)(d.un, {
        title: g.intl.string(g.t["47Rhc3"]),
        body: g.intl.string(g.t.PXjA0b),
        children: Y()
    }) : (0, a.jsx)(d.m_, {
        text: m ? g.intl.string(g.t["50TX9k"]) : H,
        ariaHidden: !m,
        children: Y()
    }) : null
}