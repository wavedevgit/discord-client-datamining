/** Chunk was on 95481 **/
/** chunk id: 328064, original params: t,e,n (module,exports,require) **/
n.d(e, {
    default: () => L
}), n(896048);
var i = n(627968),
    r = n(64700),
    l = n(106778),
    s = n(158954),
    a = n(397927),
    d = n(793574),
    u = n(688810),
    p = n(207803),
    o = n(298072),
    c = n(450481),
    h = n(645178),
    E = n(623373),
    O = n(181774),
    A = n(524246),
    f = n(14368),
    _ = n(213530),
    I = n(132198),
    R = n(961883),
    C = n(758836),
    y = n(290964);
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
    } = t, S = (0, o.Q)(n), N = (0, E.rb)(n, S), {
        analyticsLocations: P
    } = (0, u.Ay)([...m, d.A.COLLECTIBLES_COLLECTED_MODAL]);
    r.useEffect(() => {
        C.Dp.ORB_PROFILE_BADGE === N.skuId && (0, p.Gr)([(0, I._)()], 600)
    }, [N.skuId]);
    let {
        isLoading: B,
        isFractionalPremiumActive: v,
        expiresAt: D
    } = (0, O.EZ)(), {
        environment: M,
        modalRef: x,
        confettiCanvas: U,
        setConfettiCanvas: F,
        customConfettiDisplayOptions: j
    } = (0, R.mO)(N, g);
    (0, R.$V)(N, P);
    let G = (0, h.o7)(N),
        {
            handleUseNow: H,
            isApplying: V
        } = (0, c.p)({
            product: N,
            onSuccess: L,
            onError: L
        });
    if (B) return (0, i.jsx)(a.y$y, {
        type: a.y$y.Type.SPINNING_CIRCLE
    });
    let w = (0, R.$k)({
            product: N,
            overrideTitle: T,
            isVariantsGroupEnabled: !1,
            shouldShowPromotionalExperience: !1,
            productName: G,
            itemConsumed: k
        }),
        z = (0, R.v8)({
            product: N,
            overrideDescription: b,
            productName: G,
            itemConsumed: k,
            isFractionalPremiumActive: v,
            expiresAt: D
        }),
        Q = (0, R.aG)({
            product: N,
            onClose: L,
            analyticsLocations: P,
            handleUseNow: H,
            isApplying: V,
            itemConsumed: k
        });
    return (0, i.jsx)(u.f5, {
        value: P,
        children: (0, i.jsxs)("div", {
            ref: x,
            children: [(0, i.jsx)(l.Fk, {
                ref: F,
                className: y.L,
                environment: M
            }), (0, i.jsx)(s.ExpressiveModal, {
                graphic: {
                    type: "dynamic",
                    component: a.Oz7.COLLECTIBLES_PREVIEW,
                    props: {
                        product: N,
                        itemConsumed: k
                    }
                },
                title: w,
                subtitle: null != z ? z : void 0,
                onClose: L,
                transitionState: e,
                actions: Q
            }), null != j ? (0, i.jsx)(_.K, {
                options: j
            }) : (0, i.jsx)(A.A, {
                confettiTarget: x.current,
                confettiCanvas: U,
                sprites: (0, f.rA)(N.categorySkuId)
            })]
        })
    })
}