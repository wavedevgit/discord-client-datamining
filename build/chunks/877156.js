/** chunk id: 877156 params = (module,exports,require) **/
t.d(n, {
    A: () => A
});
var i = t(627968),
    l = t(64700),
    r = t(311907),
    s = t(732955),
    a = t(397927),
    o = t(775602),
    u = t(688810),
    d = t(912140),
    c = t(674658),
    p = t(780898),
    m = t(512213),
    E = t(898461),
    _ = t(837015),
    S = t(61750),
    x = t(287809),
    T = t(482132),
    I = t(758836),
    P = t(985018),
    h = t(527667);

function A(e) {
    let {
        rewardSkuId: n,
        onClose: t
    } = e, A = (0, r.bG)([x.default], () => x.default.getCurrentUser()), g = (0, r.bG)([o.A], () => o.A.useReducedMotion), {
        analyticsLocations: f
    } = (0, u.Ay)(), j = a._3J.SIZE_32, {
        product: R,
        isFetching: M
    } = (0, c.q)(n), [C, N] = l.useState(!1), O = R?.items[0], {
        isNameplateReward: y,
        nameplateData: v,
        rewardAvatarDecorationSrc: b
    } = l.useMemo(() => null == O ? {
        isNameplateReward: !1,
        nameplateData: null,
        rewardAvatarDecorationSrc: null
    } : (0, _.F)(O) ? {
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
    return (0, i.jsx)(T.UX, {
        children: (0, i.jsx)(s.jlY, {
            children: (0, i.jsxs)("div", {
                className: h.W,
                children: [y && null != v ? (0, i.jsx)("div", {
                    className: h.D,
                    onMouseEnter: () => N(!0),
                    onMouseLeave: () => N(!1),
                    children: (0, i.jsx)(m.a, {
                        user: A,
                        nameplate: null,
                        nameplateData: v,
                        showPlaceholderUser: !0,
                        nameplatePreviewSize: "xsmall",
                        isHighlighted: C
                    })
                }) : (0, i.jsx)(a.JsQ, {
                    "aria-label": A?.username,
                    size: j,
                    src: A?.getAvatarURL(void 0, (0, a.FT9)(j), !g),
                    avatarDecoration: b
                }), (0, i.jsx)(s.$nd, {
                    variant: "primary",
                    text: P.intl.string(P.t.kMYVwv),
                    loading: M,
                    onClick: () => {
                        null != R && (t(), (0, S.A)({
                            product: R,
                            shouldShowPromotionalExperience: !0,
                            analyticsLocations: f,
                            purchaseType: I.gs.PROMOTIONAL
                        }))
                    }
                })]
            })
        })
    })
}