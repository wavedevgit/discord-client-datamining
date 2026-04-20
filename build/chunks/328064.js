/** chunk id: 328064 params = (module,exports,require) **/
n.d(e, {
    default: () => m
});
var i = n(627968),
    r = n(64700),
    a = n(106778),
    l = n(158954),
    s = n(397927),
    d = n(793574),
    u = n(688810),
    o = n(207803),
    c = n(298072),
    p = n(450481),
    E = n(623373),
    h = n(181774),
    O = n(536572),
    f = n(524246),
    A = n(14368),
    R = n(213530),
    I = n(132198),
    _ = n(961883),
    y = n(758836),
    L = n(700797);
let m = t => {
    let {
        transitionState: e,
        product: n,
        onClose: m,
        analyticsLocations: C,
        overrideTitle: b,
        overrideDescription: T,
        itemConsumed: S = !0,
        purchaseType: g = y.gs.ORB
    } = t, k = (0, c.Q)(n), M = (0, E.rb)(n, k), {
        analyticsLocations: v
    } = (0, u.Ay)([...C, d.A.COLLECTIBLES_COLLECTED_MODAL]);
    r.useEffect(() => {
        y.Dp.ORB_PROFILE_BADGE === M.skuId && (0, o.Gr)([(0, I._)()], 600)
    }, [M.skuId]);
    let {
        isLoading: P,
        isFractionalPremiumActive: x,
        expiresAt: B
    } = (0, h.EZ)(), {
        environment: N,
        modalRef: D,
        confettiCanvas: F,
        setConfettiCanvas: U,
        customConfettiDisplayOptions: j
    } = (0, _.mO)(M, g);
    (0, _.$V)(M, v);
    let w = (0, O.VG)(M),
        {
            handleUseNow: G,
            isApplying: V
        } = (0, p.p)({
            product: M,
            onSuccess: m,
            onError: m
        });
    if (P) return (0, i.jsx)(s.y$y, {
        type: s.y$y.Type.SPINNING_CIRCLE
    });
    let H = (0, _.$k)({
            product: M,
            overrideTitle: b,
            isVariantsGroupEnabled: !1,
            shouldShowPromotionalExperience: !1,
            productName: w,
            itemConsumed: S
        }),
        W = (0, _.v8)({
            product: M,
            overrideDescription: T,
            productName: w,
            itemConsumed: S,
            isFractionalPremiumActive: x,
            expiresAt: B
        }),
        z = (0, _.aG)({
            product: M,
            onClose: m,
            analyticsLocations: v,
            handleUseNow: G,
            isApplying: V,
            itemConsumed: S
        });
    return (0, i.jsx)(u.f5, {
        value: v,
        children: (0, i.jsxs)("div", {
            ref: D,
            children: [(0, i.jsx)(a.Fk, {
                ref: U,
                className: L.L,
                environment: N
            }), (0, i.jsx)(l.ExpressiveModal, {
                graphic: {
                    type: "dynamic",
                    component: s.Oz7.COLLECTIBLES_PREVIEW,
                    props: {
                        product: M,
                        itemConsumed: S
                    }
                },
                title: H,
                subtitle: W ?? void 0,
                onClose: m,
                transitionState: e,
                actions: z
            }), null != j ? (0, i.jsx)(R.K, {
                options: j
            }) : (0, i.jsx)(f.A, {
                confettiTarget: D.current,
                confettiCanvas: F,
                sprites: (0, A.rA)(M.categorySkuId)
            })]
        })
    })
}