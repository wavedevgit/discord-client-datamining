/** chunk id: 877156 params = (module,exports,require) **/
t.d(n, {
    A: () => I
});
var l = t(627968),
    i = t(64700),
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
    P = t(758836),
    h = t(985018),
    A = t(527667);

function I(e) {
    let {
        rewardSkuId: n,
        onClose: t
    } = e, I = (0, r.bG)([x.default], () => x.default.getCurrentUser()), g = (0, r.bG)([o.A], () => o.A.useReducedMotion), {
        analyticsLocations: f
    } = (0, u.Ay)(), j = a._3J.SIZE_32, {
        product: R,
        isFetching: M
    } = (0, c.q)(n), [C, N] = i.useState(!1), O = R?.items[0], {
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
            canAnimate: !g
        })
    } : {
        isNameplateReward: !1,
        nameplateData: null,
        rewardAvatarDecorationSrc: null
    }, [O, j, g]);
    return (0, l.jsx)(T.UX, {
        children: (0, l.jsx)(s.jlY, {
            children: (0, l.jsxs)("div", {
                className: A.W,
                children: [y && null != b ? (0, l.jsx)("div", {
                    className: A.D,
                    onMouseEnter: () => N(!0),
                    onMouseLeave: () => N(!1),
                    children: (0, l.jsx)(m.a, {
                        user: I,
                        nameplate: null,
                        nameplateData: b,
                        showPlaceholderUser: !0,
                        nameplatePreviewSize: "xsmall",
                        isHighlighted: C
                    })
                }) : (0, l.jsx)(a.JsQ, {
                    "aria-label": I?.username,
                    size: j,
                    src: I?.getAvatarURL(void 0, (0, a.FT9)(j), !g),
                    avatarDecoration: v
                }), (0, l.jsx)(s.$nd, {
                    variant: "primary",
                    text: h.intl.string(h.t.kMYVwv),
                    loading: M,
                    onClick: () => {
                        null != R && (t(), (0, S.A)({
                            product: R,
                            shouldShowPromotionalExperience: !0,
                            analyticsLocations: f,
                            purchaseType: P.gs.PROMOTIONAL
                        }))
                    }
                })]
            })
        })
    })
}