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
    d = n(912140),
    c = n(674658),
    p = n(780898),
    m = n(512213),
    E = n(898461),
    _ = n(837015),
    S = n(61750),
    x = n(287809),
    P = n(482132),
    T = n(758836),
    A = n(985018),
    h = n(527667);

function g(e) {
    let {
        rewardSkuId: t,
        onClose: n
    } = e, g = (0, r.bG)([x.default], () => x.default.getCurrentUser()), I = (0, r.bG)([o.A], () => o.A.useReducedMotion), {
        analyticsLocations: f
    } = (0, u.Ay)(), j = a._3J.SIZE_32, {
        product: R,
        isFetching: M
    } = (0, c.q)(t), [C, N] = i.useState(!1), O = R?.items[0], {
        isNameplateReward: y,
        nameplateData: b,
        rewardAvatarDecorationSrc: v
    } = i.useMemo(() => null == O ? {
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
            canAnimate: !I
        })
    } : {
        isNameplateReward: !1,
        nameplateData: null,
        rewardAvatarDecorationSrc: null
    }, [O, j, I]);
    return (0, l.jsx)(P.UX, {
        children: (0, l.jsx)(s.jlY, {
            children: (0, l.jsxs)("div", {
                className: h.W,
                children: [y && null != b ? (0, l.jsx)("div", {
                    className: h.D,
                    onMouseEnter: () => N(!0),
                    onMouseLeave: () => N(!1),
                    children: (0, l.jsx)(m.a, {
                        user: g,
                        nameplate: null,
                        nameplateData: b,
                        showPlaceholderUser: !0,
                        nameplatePreviewSize: "xsmall",
                        isHighlighted: C
                    })
                }) : (0, l.jsx)(a.JsQ, {
                    "aria-label": g?.username,
                    size: j,
                    src: g?.getAvatarURL(void 0, (0, a.FT9)(j), !I),
                    avatarDecoration: v
                }), (0, l.jsx)(s.$nd, {
                    variant: "primary",
                    text: A.intl.string(A.t.kMYVwv),
                    loading: M,
                    onClick: () => {
                        null != R && (n(), (0, S.A)({
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