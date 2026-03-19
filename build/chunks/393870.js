/** chunk id: 393870 params = (module,exports,require) **/
n.d(e, {
    default: () => k
});
var i = n(627968);
n(64700);
var r = n(106778),
    a = n(575593),
    l = n(158954),
    s = n(397927),
    u = n(793574),
    d = n(688810),
    o = n(206835),
    c = n(298072),
    p = n(993408),
    f = n(320447),
    E = n(450481),
    h = n(442759),
    A = n(306710),
    O = n(623373),
    R = n(660653),
    _ = n(536572),
    C = n(524246),
    L = n(14368),
    b = n(213530),
    m = n(961883),
    I = n(758836),
    T = n(985018),
    y = n(570126);
let k = t => {
    let {
        transitionState: e,
        product: n,
        onClose: k,
        analyticsLocations: g,
        overrideTitle: v,
        overrideDescription: S,
        shouldShowPromotionalExperience: P,
        purchaseType: N = I.gs.FIAT,
        overrideGraphic: M
    } = t, D = (0, c.Q)(n), B = (0, O.rb)(n, D), {
        analyticsLocations: x
    } = (0, d.Ay)([...g, u.A.COLLECTIBLES_COLLECTED_MODAL]), {
        hasRequiredProductItems: U
    } = (t => {
        let {
            firstProfileEffect: e,
            firstAvatarDecoration: n,
            firstNameplate: i
        } = (0, h.f5)(t), r = (0, p.aw)(t);
        return {
            firstAvatarDecoration: n,
            firstProfileEffect: e,
            firstNameplate: i,
            isBundle: r,
            hasRequiredProductItems: r ? (0, R.uh)(t) : null != n || null != e || null != i
        }
    })(B), F = (0, o.A)({
        analyticsLocations: x
    }), j = T.intl.string(T.t.eZrmtq), {
        environment: w,
        modalRef: V,
        confettiCanvas: G,
        setConfettiCanvas: H,
        customConfettiDisplayOptions: W
    } = (0, m.mO)(B, N), z = (0, _.VG)(B);
    (0, m.$V)(B, x);
    let {
        handleUseNow: Y,
        isApplying: q
    } = (0, E.p)({
        product: B,
        onSuccess: k,
        onError: k
    }), J = (0, m.$k)({
        product: B,
        overrideTitle: v,
        isVariantsGroupEnabled: !0,
        shouldShowPromotionalExperience: P,
        productName: z
    }), K = (0, m.v8)({
        product: B,
        overrideDescription: S,
        productName: z,
        shouldShowPromotionalExperience: P,
        promotionalRewardCollectedText: j
    }), Q = (0, m.aG)({
        product: B,
        onClose: k,
        analyticsLocations: x,
        hasRequiredProductItems: U,
        handleUseNow: Y,
        isApplying: q,
        openProfileSettings: F
    }), {
        enabled: Z
    } = (0, f.P)("CollectiblesCollectedModal"), $ = "6/4";
    switch (B.type) {
        case a.R.NAMEPLATE:
        case a.R.AVATAR_DECORATION:
            $ = "16/9";
            break;
        case a.R.BUNDLE:
            $ = Z ? "16/9" : "6/4";
            break;
        case a.R.PROFILE_EFFECT:
        default:
            $ = "6/4"
    }
    let {
        confettiColors: X
    } = (0, A.A)(B.styles), tt = M ?? {
        type: "dynamic",
        component: s.Oz7.COLLECTIBLES_PREVIEW,
        aspectRatio: $,
        props: {
            product: B,
            forCollectedModal: !0
        }
    };
    return (0, i.jsx)(d.f5, {
        value: x,
        children: (0, i.jsxs)("div", {
            ref: V,
            children: [(0, i.jsx)(r.Fk, {
                ref: H,
                className: y.L,
                environment: w
            }), (0, i.jsx)(l.ExpressiveModal, {
                graphic: tt,
                title: J,
                subtitle: K ?? void 0,
                onClose: k,
                transitionState: e,
                actions: Q
            }), null != W ? (0, i.jsx)(b.K, {
                options: W
            }) : (0, i.jsx)(C.A, {
                confettiTarget: V.current,
                confettiCanvas: G,
                sprites: (0, L.rA)(B.categorySkuId),
                colors: X?.map(t => t.toHexString())
            })]
        })
    })
}