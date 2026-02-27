/** chunk id: 393870, original params: t,e,r (module,exports,require) **/
r.d(e, {
    default: () => k
});
var n = r(627968);
r(64700);
var s = r(106778),
    a = r(575593),
    l = r(158954),
    i = r(397927),
    o = r(793574),
    c = r(688810),
    u = r(206835),
    f = r(298072),
    p = r(993408),
    d = r(450481),
    E = r(442759),
    A = r(306710),
    L = r(623373),
    v = r(660653),
    C = r(536572),
    h = r(524246),
    m = r(14368),
    R = r(213530),
    x = r(961883),
    O = r(758836),
    T = r(985018),
    _ = r(290964);
let k = t => {
    let {
        transitionState: e,
        product: r,
        onClose: k,
        analyticsLocations: I,
        overrideTitle: b,
        overrideDescription: y,
        shouldShowPromotionalExperience: g,
        purchaseType: j = O.gs.FIAT,
        overrideGraphic: w
    } = t, D = (0, f.Q)(r), N = (0, L.rb)(r, D), {
        analyticsLocations: P
    } = (0, c.Ay)([...I, o.A.COLLECTIBLES_COLLECTED_MODAL]), {
        hasRequiredProductItems: S
    } = (t => {
        let {
            firstProfileEffect: e,
            firstAvatarDecoration: r,
            firstNameplate: n
        } = (0, E.f5)(t), s = (0, p.aw)(t);
        return {
            firstAvatarDecoration: r,
            firstProfileEffect: e,
            firstNameplate: n,
            isBundle: s,
            hasRequiredProductItems: s ? (0, v.uh)(t) : null != r || null != e || null != n
        }
    })(N), F = (0, u.A)({
        analyticsLocations: P
    }), V = T.intl.string(T.t.eZrmtq), {
        environment: M,
        modalRef: B,
        confettiCanvas: G,
        setConfettiCanvas: q,
        customConfettiDisplayOptions: W
    } = (0, x.mO)(N, j), $ = (0, C.VG)(N);
    (0, x.$V)(N, P);
    let {
        handleUseNow: z,
        isApplying: H
    } = (0, d.p)({
        product: N,
        onSuccess: k,
        onError: k
    }), K = (0, x.$k)({
        product: N,
        overrideTitle: b,
        isVariantsGroupEnabled: !0,
        shouldShowPromotionalExperience: g,
        productName: $
    }), Q = (0, x.v8)({
        product: N,
        overrideDescription: y,
        productName: $,
        shouldShowPromotionalExperience: g,
        promotionalRewardCollectedText: V
    }), U = (0, x.aG)({
        product: N,
        onClose: k,
        analyticsLocations: P,
        hasRequiredProductItems: S,
        handleUseNow: z,
        isApplying: H,
        openProfileSettings: F
    }), Y = "6/4";
    switch (N.type) {
        case a.R.NAMEPLATE:
        case a.R.AVATAR_DECORATION:
            Y = "16/9";
            break;
        case a.R.BUNDLE:
        case a.R.PROFILE_EFFECT:
        default:
            Y = "6/4"
    }
    let {
        confettiColors: Z
    } = (0, A.A)(N.styles), J = w ?? {
        type: "dynamic",
        component: i.Oz7.COLLECTIBLES_PREVIEW,
        aspectRatio: Y,
        props: {
            product: N,
            forCollectedModal: !0
        }
    };
    return (0, n.jsx)(c.f5, {
        value: P,
        children: (0, n.jsxs)("div", {
            ref: B,
            children: [(0, n.jsx)(s.Fk, {
                ref: q,
                className: _.L,
                environment: M
            }), (0, n.jsx)(l.ExpressiveModal, {
                graphic: J,
                title: K,
                subtitle: Q ?? void 0,
                onClose: k,
                transitionState: e,
                actions: U
            }), null != W ? (0, n.jsx)(R.K, {
                options: W
            }) : (0, n.jsx)(h.A, {
                confettiTarget: B.current,
                confettiCanvas: G,
                sprites: (0, m.rA)(N.categorySkuId),
                colors: Z?.map(t => t.toHexString())
            })]
        })
    })
}