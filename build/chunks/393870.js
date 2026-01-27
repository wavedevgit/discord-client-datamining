/** Chunk was on 92643 **/
/** chunk id: 393870, original params: t,e,n (module,exports,require) **/
n.d(e, {
    default: () => L
}), n(896048);
var r = n(627968);
n(64700);
var i = n(106778),
    l = n(575593),
    a = n(158954),
    s = n(397927),
    o = n(793574),
    u = n(688810),
    c = n(552736),
    p = n(206835),
    d = n(298072),
    f = n(993408),
    O = n(450481),
    b = n(645178),
    y = n(442759),
    h = n(306710),
    E = n(623373),
    A = n(660653),
    m = n(524246),
    g = n(14368),
    R = n(213530),
    P = n(961883),
    C = n(758836),
    v = n(290964);
let L = t => {
    var e;
    let n, L, {
            transitionState: I,
            product: T,
            onClose: _,
            analyticsLocations: j,
            overrideTitle: S,
            overrideDescription: k,
            shouldShowPromotionalExperience: D,
            purchaseType: w = C.gs.FIAT,
            overrideGraphic: N,
            rentalDuration: M,
            rentalExpiresAt: x
        } = t,
        B = (0, d.Q)(T),
        U = (0, E.rb)(T, B),
        {
            analyticsLocations: F
        } = (0, u.Ay)([...j, o.A.COLLECTIBLES_COLLECTED_MODAL]),
        {
            hasRequiredProductItems: G
        } = (t => {
            let {
                firstProfileEffect: e,
                firstAvatarDecoration: n,
                firstNameplate: r
            } = (0, y.f5)(t), i = (0, f.aw)(t);
            return {
                firstAvatarDecoration: n,
                firstProfileEffect: e,
                firstNameplate: r,
                isBundle: i,
                hasRequiredProductItems: i ? (0, A.u)(t) : null != n || null != e || null != r
            }
        })(U),
        {
            promotionalRewardCollectedText: H,
            openProfileSettings: V
        } = (n = (0, c.A)(), L = (0, p.A)({
            analyticsLocations: F
        }), {
            giftingPromotionConfig: n,
            promotionalRewardCollectedText: null == n || null == (e = n.giftPurchaseConfirmation) ? void 0 : e.rewardCollectedText(),
            openProfileSettings: L
        }),
        {
            environment: W,
            modalRef: z,
            confettiCanvas: Q,
            setConfettiCanvas: J,
            customConfettiDisplayOptions: Y
        } = (0, P.mO)(U, w),
        q = (0, b.o7)(U);
    (0, P.$V)(U, F);
    let {
        handleUseNow: K,
        isApplying: $
    } = (0, O.p)({
        product: U,
        onSuccess: _,
        onError: _
    }), X = (0, P.$k)({
        product: U,
        overrideTitle: S,
        isVariantsGroupEnabled: !0,
        shouldShowPromotionalExperience: D,
        productName: q,
        rentalDuration: M
    }), Z = (0, P.v8)({
        product: U,
        overrideDescription: k,
        productName: q,
        shouldShowPromotionalExperience: D,
        promotionalRewardCollectedText: H,
        isRental: null != M,
        expiresAt: x
    }), tt = (0, P.aG)({
        product: U,
        onClose: _,
        analyticsLocations: F,
        hasRequiredProductItems: G,
        handleUseNow: K,
        isApplying: $,
        openProfileSettings: V
    }), te = "6/4";
    switch (U.type) {
        case l.R.NAMEPLATE:
        case l.R.AVATAR_DECORATION:
            te = "16/9";
            break;
        case l.R.BUNDLE:
        case l.R.PROFILE_EFFECT:
        default:
            te = "6/4"
    }
    let {
        confettiColors: tn
    } = (0, h.A)(U.styles), tr = null != N ? N : {
        type: "dynamic",
        component: s.Oz7.COLLECTIBLES_PREVIEW,
        aspectRatio: te,
        props: {
            product: U,
            forCollectedModal: !0
        }
    };
    return (0, r.jsx)(u.f5, {
        value: F,
        children: (0, r.jsxs)("div", {
            ref: z,
            children: [(0, r.jsx)(i.Fk, {
                ref: J,
                className: v.L,
                environment: W
            }), (0, r.jsx)(a.ExpressiveModal, {
                graphic: tr,
                title: X,
                subtitle: null != Z ? Z : void 0,
                onClose: _,
                transitionState: I,
                actions: tt
            }), null != Y ? (0, r.jsx)(R.K, {
                options: Y
            }) : (0, r.jsx)(m.A, {
                confettiTarget: z.current,
                confettiCanvas: Q,
                sprites: (0, g.rA)(U.categorySkuId),
                colors: null == tn ? void 0 : tn.map(t => t.toHexString())
            })]
        })
    })
}