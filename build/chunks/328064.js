/** chunk id: 328064 params = (module,exports,require) **/
n.d(e, {
    default: () => L
});
var i = n(627968),
    r = n(64700),
    a = n(106778),
    l = n(158954),
    s = n(397927),
    d = n(793574),
    u = n(688810),
    o = n(207803),
    p = n(298072),
    c = n(450481),
    E = n(623373),
    h = n(181774),
    O = n(536572),
    f = n(524246),
    A = n(14368),
    _ = n(213530),
    y = n(132198),
    R = n(961883),
    C = n(758836),
    I = n(570126);
let L = t => {
    let {
        transitionState: e,
        product: n,
        onClose: L,
        analyticsLocations: m,
        overrideTitle: T,
        overrideDescription: b,
        itemConsumed: k = !0,
        purchaseType: g = C.gs.ORB
    } = t, S = (0, p.Q)(n), v = (0, E.rb)(n, S), {
        analyticsLocations: N
    } = (0, u.Ay)([...m, d.A.COLLECTIBLES_COLLECTED_MODAL]);
    r.useEffect(() => {
        C.Dp.ORB_PROFILE_BADGE === v.skuId && (0, o.Gr)([(0, y._)()], 600)
    }, [v.skuId]);
    let {
        isLoading: P,
        isFractionalPremiumActive: B,
        expiresAt: M
    } = (0, h.EZ)(), {
        environment: D,
        modalRef: x,
        confettiCanvas: U,
        setConfettiCanvas: F,
        customConfettiDisplayOptions: j
    } = (0, R.mO)(v, g);
    (0, R.$V)(v, N);
    let G = (0, O.VG)(v),
        {
            handleUseNow: V,
            isApplying: w
        } = (0, c.p)({
            product: v,
            onSuccess: L,
            onError: L
        });
    if (P) return (0, i.jsx)(s.y$y, {
        type: s.y$y.Type.SPINNING_CIRCLE
    });
    let H = (0, R.$k)({
            product: v,
            overrideTitle: T,
            isVariantsGroupEnabled: !1,
            shouldShowPromotionalExperience: !1,
            productName: G,
            itemConsumed: k
        }),
        z = (0, R.v8)({
            product: v,
            overrideDescription: b,
            productName: G,
            itemConsumed: k,
            isFractionalPremiumActive: B,
            expiresAt: M
        }),
        W = (0, R.aG)({
            product: v,
            onClose: L,
            analyticsLocations: N,
            handleUseNow: V,
            isApplying: w,
            itemConsumed: k
        });
    return (0, i.jsx)(u.f5, {
        value: N,
        children: (0, i.jsxs)("div", {
            ref: x,
            children: [(0, i.jsx)(a.Fk, {
                ref: F,
                className: I.L,
                environment: D
            }), (0, i.jsx)(l.ExpressiveModal, {
                graphic: {
                    type: "dynamic",
                    component: s.Oz7.COLLECTIBLES_PREVIEW,
                    props: {
                        product: v,
                        itemConsumed: k
                    }
                },
                title: H,
                subtitle: z ?? void 0,
                onClose: L,
                transitionState: e,
                actions: W
            }), null != j ? (0, i.jsx)(_.K, {
                options: j
            }) : (0, i.jsx)(f.A, {
                confettiTarget: x.current,
                confettiCanvas: U,
                sprites: (0, A.rA)(v.categorySkuId)
            })]
        })
    })
}