/** chunk id: 877156, original params: e,n,t (module,exports,require) **/
t.d(n, {
    A: () => A
}), t(896048);
var l = t(627968),
    r = t(64700),
    i = t(311907),
    s = t(732955),
    a = t(397927),
    o = t(775602),
    u = t(688810),
    c = t(920064),
    d = t(674658),
    p = t(898461),
    m = t(837015),
    g = t(61750),
    E = t(235986),
    f = t(369496),
    j = t(550111),
    h = t(287809),
    x = t(482132),
    P = t(758836),
    T = t(985018),
    S = t(401506);

function A(e) {
    let {
        rewardSkuId: n,
        onClose: t
    } = e, A = (0, i.bG)([h.default], () => h.default.getCurrentUser()), O = (0, i.bG)([o.A], () => o.A.useReducedMotion), {
        analyticsLocations: b
    } = (0, u.Ay)(), y = a._3J.SIZE_32, {
        product: I,
        isFetching: _
    } = (0, d.q)(n), [v, C] = r.useState(!1), N = null == I ? void 0 : I.items[0], {
        isNameplateReward: M,
        nameplateData: R,
        rewardDeco: k
    } = r.useMemo(() => {
        if (null == N) return {
            isNameplateReward: !1,
            nameplateData: null,
            rewardDeco: void 0
        };
        if ((0, m.F)(N)) {
            var e;
            return {
                isNameplateReward: !0,
                nameplateData: {
                    src: N.asset,
                    palette: (0, f.H6)(null != (e = N.palette) ? e : "sky"),
                    imgAlt: N.label
                },
                rewardDeco: void 0
            }
        }
        return (0, p.T)(N) ? {
            isNameplateReward: !1,
            nameplateData: null,
            rewardDeco: (0, c.A)(N.asset, y, !O)
        } : {
            isNameplateReward: !1,
            nameplateData: null,
            rewardDeco: void 0
        }
    }, [N, y, O]);
    return (0, l.jsx)(x.UX, {
        children: (0, l.jsx)(a.jlY, {
            align: E.A.Align.CENTER,
            "data-migration-pending": !0,
            children: (0, l.jsxs)("div", {
                className: S.W,
                children: [M && null != R ? (0, l.jsx)("div", {
                    className: S.D,
                    onMouseEnter: () => C(!0),
                    onMouseLeave: () => C(!1),
                    children: (0, l.jsx)(j.a, {
                        user: A,
                        nameplate: null,
                        nameplateData: R,
                        showPlaceholderUser: !0,
                        nameplatePreviewSize: "xsmall",
                        isHighlighted: v
                    })
                }) : (0, l.jsx)(a.JsQ, {
                    "aria-label": null == A ? void 0 : A.username,
                    size: y,
                    src: null == A ? void 0 : A.getAvatarURL(void 0, (0, a.FT9)(y), !O),
                    avatarDecoration: k
                }), (0, l.jsx)(s.$nd, {
                    variant: "primary",
                    text: T.intl.string(T.t.kMYVwv),
                    loading: _,
                    onClick: () => {
                        null != I && (t(), (0, g.A)({
                            product: I,
                            shouldShowPromotionalExperience: !0,
                            analyticsLocations: b,
                            purchaseType: P.gs.PROMOTIONAL
                        }))
                    }
                })]
            })
        })
    })
}