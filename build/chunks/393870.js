/** Chunk was on 92643 **/
/** chunk id: 393870, original params: t,e,n (module,exports,require) **/
n.d(e, {
    default: () => b
}), n(896048);
var i = n(627968);
n(64700);
var r = n(106778),
    l = n(575593),
    a = n(158954),
    s = n(397927),
    u = n(793574),
    d = n(688810),
    o = n(552736),
    p = n(206835),
    c = n(298072),
    f = n(993408),
    A = n(450481),
    E = n(645178),
    h = n(442759),
    R = n(306710),
    O = n(623373),
    C = n(660653),
    m = n(524246),
    T = n(14368),
    _ = n(213530),
    I = n(961883),
    L = n(758836),
    y = n(290964);
let b = t => {
    var e;
    let n, b, {
            transitionState: k,
            product: g,
            onClose: S,
            analyticsLocations: v,
            overrideTitle: P,
            overrideDescription: N,
            shouldShowPromotionalExperience: D,
            purchaseType: M = L.gs.FIAT,
            overrideGraphic: x,
            rentalDuration: B,
            rentalExpiresAt: U
        } = t,
        F = (0, c.Q)(g),
        j = (0, O.rb)(g, F),
        {
            analyticsLocations: w
        } = (0, d.Ay)([...v, u.A.COLLECTIBLES_COLLECTED_MODAL]),
        {
            hasRequiredProductItems: G
        } = (t => {
            let {
                firstProfileEffect: e,
                firstAvatarDecoration: n,
                firstNameplate: i
            } = (0, h.f5)(t), r = (0, f.aw)(t);
            return {
                firstAvatarDecoration: n,
                firstProfileEffect: e,
                firstNameplate: i,
                isBundle: r,
                hasRequiredProductItems: r ? (0, C.u)(t) : null != n || null != e || null != i
            }
        })(j),
        {
            promotionalRewardCollectedText: H,
            openProfileSettings: V
        } = (n = (0, o.A)(), b = (0, p.A)({
            analyticsLocations: w
        }), {
            giftingPromotionConfig: n,
            promotionalRewardCollectedText: null == n || null == (e = n.giftPurchaseConfirmation) ? void 0 : e.rewardCollectedText(),
            openProfileSettings: b
        }),
        {
            environment: W,
            modalRef: z,
            confettiCanvas: Q,
            setConfettiCanvas: J,
            customConfettiDisplayOptions: Y
        } = (0, I.mO)(j, M),
        q = (0, E.o7)(j);
    (0, I.$V)(j, w);
    let {
        handleUseNow: K,
        isApplying: $
    } = (0, A.p)({
        product: j,
        onSuccess: S,
        onError: S
    }), X = (0, I.$k)({
        product: j,
        overrideTitle: P,
        isVariantsGroupEnabled: !0,
        shouldShowPromotionalExperience: D,
        productName: q,
        rentalDuration: B
    }), Z = (0, I.v8)({
        product: j,
        overrideDescription: N,
        productName: q,
        shouldShowPromotionalExperience: D,
        promotionalRewardCollectedText: H,
        isRental: null != B,
        expiresAt: U
    }), tt = (0, I.aG)({
        product: j,
        onClose: S,
        analyticsLocations: w,
        hasRequiredProductItems: G,
        handleUseNow: K,
        isApplying: $,
        openProfileSettings: V
    }), te = "6/4";
    switch (j.type) {
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
    } = (0, R.A)(j.styles), ti = null != x ? x : {
        type: "dynamic",
        component: s.Oz7.COLLECTIBLES_PREVIEW,
        aspectRatio: te,
        props: {
            product: j,
            forCollectedModal: !0
        }
    };
    return (0, i.jsx)(d.f5, {
        value: w,
        children: (0, i.jsxs)("div", {
            ref: z,
            children: [(0, i.jsx)(r.Fk, {
                ref: J,
                className: y.L,
                environment: W
            }), (0, i.jsx)(a.ExpressiveModal, {
                graphic: ti,
                title: X,
                subtitle: null != Z ? Z : void 0,
                onClose: S,
                transitionState: k,
                actions: tt
            }), null != Y ? (0, i.jsx)(_.K, {
                options: Y
            }) : (0, i.jsx)(m.A, {
                confettiTarget: z.current,
                confettiCanvas: Q,
                sprites: (0, T.rA)(j.categorySkuId),
                colors: null == tn ? void 0 : tn.map(t => t.toHexString())
            })]
        })
    })
}