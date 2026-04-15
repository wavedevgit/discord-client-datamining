/** chunk id: 877156 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var l = n(627968),
    i = n(64700),
    r = n(311907),
    s = n(732955),
    a = n(397927),
    o = n(775602),
    u = n(688810),
    d = n(912140),
    c = n(674658),
    p = n(780898),
    m = n(512213),
    E = n(898461),
    S = n(837015),
    _ = n(61750),
    I = n(287809),
    P = n(482132),
    x = n(758836),
    T = n(985018),
    A = n(527667);

function h(e) {
    let {
        rewardSkuId: t,
        onClose: n
    } = e, h = (0, r.bG)([I.default], () => I.default.getCurrentUser()), g = (0, r.bG)([o.A], () => o.A.useReducedMotion), {
        analyticsLocations: f
    } = (0, u.Ay)(), j = a._3J.SIZE_32, {
        product: R,
        isFetching: M
    } = (0, c.q)(t), [C, N] = i.useState(!1), O = R?.items[0], {
        isNameplateReward: k,
        nameplateData: y,
        rewardAvatarDecorationSrc: b
    } = i.useMemo(() => null == O ? {
        isNameplateReward: !1,
        nameplateData: null,
        rewardAvatarDecorationSrc: null
    } : (0, S.F)(O) ? {
        isNameplateReward: !0,
        nameplateData: {
            skuId: O.skuId,
            src: O.asset,
            palette: (0, p.H6)(O.palette ?? "sky"),
            imgAlt: O.label
        },
        rewardAvatarDecorationSrc: null
    } : (0, E.T)(O) ? {
        isNameplateReward: !1,
        nameplateData: null,
        rewardAvatarDecorationSrc: (0, d.A)({
            legacyAssetId: O.asset,
            skuId: O.skuId,
            size: j,
            canAnimate: !g
        })
    } : {
        isNameplateReward: !1,
        nameplateData: null,
        rewardAvatarDecorationSrc: null
    }, [O, j, g]);
    return (0, l.jsx)(P.UX, {
        children: (0, l.jsx)(s.jlY, {
            children: (0, l.jsxs)("div", {
                className: A.W,
                children: [k && null != y ? (0, l.jsx)("div", {
                    className: A.D,
                    onMouseEnter: () => N(!0),
                    onMouseLeave: () => N(!1),
                    children: (0, l.jsx)(m.a, {
                        user: h,
                        nameplate: null,
                        nameplateData: y,
                        showPlaceholderUser: !0,
                        nameplatePreviewSize: "xsmall",
                        isHighlighted: C
                    })
                }) : (0, l.jsx)(a.JsQ, {
                    "aria-label": h?.username,
                    size: j,
                    src: h?.getAvatarURL(void 0, (0, a.FT9)(j), !g),
                    avatarDecoration: b
                }), (0, l.jsx)(s.$nd, {
                    variant: "primary",
                    text: T.intl.string(T.t.kMYVwv),
                    loading: M,
                    onClick: () => {
                        null != R && (n(), (0, _.A)({
                            product: R,
                            shouldShowPromotionalExperience: !0,
                            analyticsLocations: f,
                            purchaseType: x.gs.PROMOTIONAL
                        }))
                    }
                })]
            })
        })
    })
}