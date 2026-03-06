/** chunk id: 877156 params = (module,exports,require) **/
t.d(n, {
    A: () => g
});
var i = t(627968),
    l = t(64700),
    r = t(311907),
    s = t(732955),
    a = t(397927),
    o = t(775602),
    u = t(688810),
    d = t(580314),
    c = t(674658),
    p = t(898461),
    m = t(837015),
    E = t(61750),
    _ = t(369496),
    x = t(550111),
    P = t(287809),
    T = t(482132),
    S = t(758836),
    I = t(985018),
    h = t(920144);

function g(e) {
    let {
        rewardSkuId: n,
        onClose: t
    } = e, g = (0, r.bG)([P.default], () => P.default.getCurrentUser()), A = (0, r.bG)([o.A], () => o.A.useReducedMotion), {
        analyticsLocations: f
    } = (0, u.Ay)(), j = a._3J.SIZE_32, {
        product: M,
        isFetching: R
    } = (0, c.q)(n), [C, y] = l.useState(!1), N = M?.items[0], {
        isNameplateReward: O,
        nameplateData: v,
        rewardAvatarDecorationSrc: b
    } = l.useMemo(() => null == N ? {
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
    return (0, i.jsx)(T.UX, {
        children: (0, i.jsx)(s.jlY, {
            children: (0, i.jsxs)("div", {
                className: h.W,
                children: [O && null != v ? (0, i.jsx)("div", {
                    className: h.D,
                    onMouseEnter: () => y(!0),
                    onMouseLeave: () => y(!1),
                    children: (0, i.jsx)(x.a, {
                        user: g,
                        nameplate: null,
                        nameplateData: v,
                        showPlaceholderUser: !0,
                        nameplatePreviewSize: "xsmall",
                        isHighlighted: C
                    })
                }) : (0, i.jsx)(a.JsQ, {
                    "aria-label": g?.username,
                    size: j,
                    src: g?.getAvatarURL(void 0, (0, a.FT9)(j), !A),
                    avatarDecoration: b
                }), (0, i.jsx)(s.$nd, {
                    variant: "primary",
                    text: I.intl.string(I.t.kMYVwv),
                    loading: R,
                    onClick: () => {
                        null != M && (t(), (0, E.A)({
                            product: M,
                            shouldShowPromotionalExperience: !0,
                            analyticsLocations: f,
                            purchaseType: S.gs.PROMOTIONAL
                        }))
                    }
                })]
            })
        })
    })
}