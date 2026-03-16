/** chunk id: 877156 params = (module,exports,require) **/
n.d(t, {
    A: () => g
});
var l = n(627968),
    i = n(64700),
    r = n(311907),
    s = n(732955),
    a = n(397927),
    o = n(775602),
    u = n(688810),
    d = n(580314),
    c = n(674658),
    p = n(898461),
    m = n(837015),
    E = n(61750),
    _ = n(369496),
    x = n(550111),
    S = n(287809),
    P = n(482132),
    T = n(758836),
    I = n(985018),
    h = n(401506);

function g(e) {
    let {
        rewardSkuId: t,
        onClose: n
    } = e, g = (0, r.bG)([S.default], () => S.default.getCurrentUser()), A = (0, r.bG)([o.A], () => o.A.useReducedMotion), {
        analyticsLocations: f
    } = (0, u.Ay)(), j = a._3J.SIZE_32, {
        product: R,
        isFetching: M
    } = (0, c.q)(t), [C, y] = i.useState(!1), N = R?.items[0], {
        isNameplateReward: O,
        nameplateData: v,
        rewardAvatarDecorationSrc: b
    } = i.useMemo(() => null == N ? {
        isNameplateReward: !1,
        nameplateData: null,
        rewardAvatarDecorationSrc: null
    } : (0, m.F)(N) ? {
        isNameplateReward: !0,
        nameplateData: {
            skuId: N.skuId,
            src: N.asset,
            palette: (0, _.H6)(N.palette ?? "sky"),
            imgAlt: N.label
        },
        rewardAvatarDecorationSrc: null
    } : (0, p.T)(N) ? {
        isNameplateReward: !1,
        nameplateData: null,
        rewardAvatarDecorationSrc: (0, d.A)({
            legacyAssetId: N.asset,
            skuId: N.skuId,
            size: j,
            canAnimate: !A
        })
    } : {
        isNameplateReward: !1,
        nameplateData: null,
        rewardAvatarDecorationSrc: null
    }, [N, j, A]);
    return (0, l.jsx)(P.UX, {
        children: (0, l.jsx)(s.jlY, {
            children: (0, l.jsxs)("div", {
                className: h.W,
                children: [O && null != v ? (0, l.jsx)("div", {
                    className: h.D,
                    onMouseEnter: () => y(!0),
                    onMouseLeave: () => y(!1),
                    children: (0, l.jsx)(x.a, {
                        user: g,
                        nameplate: null,
                        nameplateData: v,
                        showPlaceholderUser: !0,
                        nameplatePreviewSize: "xsmall",
                        isHighlighted: C
                    })
                }) : (0, l.jsx)(a.JsQ, {
                    "aria-label": g?.username,
                    size: j,
                    src: g?.getAvatarURL(void 0, (0, a.FT9)(j), !A),
                    avatarDecoration: b
                }), (0, l.jsx)(s.$nd, {
                    variant: "primary",
                    text: I.intl.string(I.t.kMYVwv),
                    loading: M,
                    onClick: () => {
                        null != R && (n(), (0, E.A)({
                            product: R,
                            shouldShowPromotionalExperience: !0,
                            analyticsLocations: f,
                            purchaseType: T.gs.PROMOTIONAL
                        }))
                    }
                })]
            })
        })
    })
}