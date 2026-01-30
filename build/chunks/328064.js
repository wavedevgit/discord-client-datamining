/** chunk id: 328064, original params: t,e,n (module,exports,require) **/
n.d(e, {
    default: () => I
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(106778),
    l = n(158954),
    s = n(397927),
    o = n(793574),
    c = n(688810),
    u = n(207803),
    p = n(298072),
    d = n(450481),
    O = n(645178),
    f = n(623373),
    y = n(181774),
    b = n(524246),
    h = n(14368),
    E = n(213530),
    m = n(132198),
    g = n(961883),
    A = n(758836),
    P = n(290964);
let I = t => {
    let {
        transitionState: e,
        product: n,
        onClose: I,
        analyticsLocations: _,
        overrideTitle: R,
        overrideDescription: C,
        itemConsumed: L = !0,
        purchaseType: j = A.gs.ORB
    } = t, S = (0, p.Q)(n), k = (0, f.rb)(n, S), {
        analyticsLocations: v
    } = (0, c.Ay)([..._, o.A.COLLECTIBLES_COLLECTED_MODAL]);
    i.useEffect(() => {
        A.Dp.ORB_PROFILE_BADGE === k.skuId && (0, u.Gr)([(0, m._)()], 600)
    }, [k.skuId]);
    let {
        isLoading: T,
        isFractionalPremiumActive: D,
        expiresAt: N
    } = (0, y.EZ)(), {
        environment: w,
        modalRef: B,
        confettiCanvas: M,
        setConfettiCanvas: x,
        customConfettiDisplayOptions: U
    } = (0, g.mO)(k, j);
    (0, g.$V)(k, v);
    let F = (0, O.o7)(k),
        {
            handleUseNow: G,
            isApplying: H
        } = (0, d.p)({
            product: k,
            onSuccess: I,
            onError: I
        });
    if (T) return (0, r.jsx)(s.y$y, {
        type: s.y$y.Type.SPINNING_CIRCLE
    });
    let V = (0, g.$k)({
            product: k,
            overrideTitle: R,
            isVariantsGroupEnabled: !1,
            shouldShowPromotionalExperience: !1,
            productName: F,
            itemConsumed: L
        }),
        W = (0, g.v8)({
            product: k,
            overrideDescription: C,
            productName: F,
            itemConsumed: L,
            isFractionalPremiumActive: D,
            expiresAt: N
        }),
        z = (0, g.aG)({
            product: k,
            onClose: I,
            analyticsLocations: v,
            handleUseNow: G,
            isApplying: H,
            itemConsumed: L
        });
    return (0, r.jsx)(c.f5, {
        value: v,
        children: (0, r.jsxs)("div", {
            ref: B,
            children: [(0, r.jsx)(a.Fk, {
                ref: x,
                className: P.L,
                environment: w
            }), (0, r.jsx)(l.ExpressiveModal, {
                graphic: {
                    type: "dynamic",
                    component: s.Oz7.COLLECTIBLES_PREVIEW,
                    props: {
                        product: k,
                        itemConsumed: L
                    }
                },
                title: V,
                subtitle: null != W ? W : void 0,
                onClose: I,
                transitionState: e,
                actions: z
            }), null != U ? (0, r.jsx)(E.K, {
                options: U
            }) : (0, r.jsx)(b.A, {
                confettiTarget: B.current,
                confettiCanvas: M,
                sprites: (0, h.rA)(k.categorySkuId)
            })]
        })
    })
}