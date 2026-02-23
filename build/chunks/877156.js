/** chunk id: 877156, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
});
var l = n(627968),
    i = n(64700),
    s = n(311907),
    r = n(732955),
    a = n(397927),
    o = n(775602),
    u = n(688810),
    d = n(920064),
    c = n(674658),
    p = n(898461),
    m = n(837015),
    E = n(61750),
    _ = n(369496),
    h = n(550111),
    x = n(287809),
    P = n(482132),
    S = n(758836),
    T = n(985018),
    I = n(401506);

function g(e) {
    let {
        rewardSkuId: t,
        onClose: n
    } = e, g = (0, s.bG)([x.default], () => x.default.getCurrentUser()), A = (0, s.bG)([o.A], () => o.A.useReducedMotion), {
        analyticsLocations: j
    } = (0, u.Ay)(), f = a._3J.SIZE_32, {
        product: M,
        isFetching: R
    } = (0, c.q)(t), [C, y] = i.useState(!1), N = M?.items[0], {
        isNameplateReward: v,
        nameplateData: O,
        rewardDeco: b
    } = i.useMemo(() => null == N ? {
        isNameplateReward: !1,
        nameplateData: null,
        rewardDeco: void 0
    } : (0, m.F)(N) ? {
        isNameplateReward: !0,
        nameplateData: {
            skuId: N.skuId,
            src: N.asset,
            palette: (0, _.H6)(N.palette ?? "sky"),
            imgAlt: N.label
        },
        rewardDeco: void 0
    } : (0, p.T)(N) ? {
        isNameplateReward: !1,
        nameplateData: null,
        rewardDeco: (0, d.A)(N.asset, f, !A)
    } : {
        isNameplateReward: !1,
        nameplateData: null,
        rewardDeco: void 0
    }, [N, f, A]);
    return (0, l.jsx)(P.UX, {
        children: (0, l.jsx)(r.jlY, {
            children: (0, l.jsxs)("div", {
                className: I.W,
                children: [v && null != O ? (0, l.jsx)("div", {
                    className: I.D,
                    onMouseEnter: () => y(!0),
                    onMouseLeave: () => y(!1),
                    children: (0, l.jsx)(h.a, {
                        user: g,
                        nameplate: null,
                        nameplateData: O,
                        showPlaceholderUser: !0,
                        nameplatePreviewSize: "xsmall",
                        isHighlighted: C
                    })
                }) : (0, l.jsx)(a.JsQ, {
                    "aria-label": g?.username,
                    size: f,
                    src: g?.getAvatarURL(void 0, (0, a.FT9)(f), !A),
                    avatarDecoration: b
                }), (0, l.jsx)(r.$nd, {
                    variant: "primary",
                    text: T.intl.string(T.t.kMYVwv),
                    loading: R,
                    onClick: () => {
                        null != M && (n(), (0, E.A)({
                            product: M,
                            shouldShowPromotionalExperience: !0,
                            analyticsLocations: j,
                            purchaseType: S.gs.PROMOTIONAL
                        }))
                    }
                })]
            })
        })
    })
}