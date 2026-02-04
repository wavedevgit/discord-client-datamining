/** chunk id: 877156, original params: e,n,t (module,exports,require) **/
t.d(n, {
    A: () => S
}), t(896048);
var r = t(627968),
    l = t(64700),
    i = t(311907),
    s = t(732955),
    a = t(397927),
    o = t(775602),
    u = t(688810),
    c = t(920064),
    d = t(674658),
    p = t(898461),
    m = t(837015),
    E = t(61750),
    g = t(235986),
    f = t(369496),
    P = t(550111),
    j = t(287809),
    h = t(482132),
    _ = t(758836),
    x = t(985018),
    T = t(401506);

function S(e) {
    let {
        rewardSkuId: n,
        onClose: t
    } = e, S = (0, i.bG)([j.default], () => j.default.getCurrentUser()), b = (0, i.bG)([o.A], () => o.A.useReducedMotion), {
        analyticsLocations: O
    } = (0, u.Ay)(), y = a._3J.SIZE_32, {
        product: A,
        isFetching: I
    } = (0, d.q)(n), [v, R] = l.useState(!1), C = null == A ? void 0 : A.items[0], {
        isNameplateReward: M,
        nameplateData: N,
        rewardDeco: k
    } = l.useMemo(() => {
        if (null == C) return {
            isNameplateReward: !1,
            nameplateData: null,
            rewardDeco: void 0
        };
        if ((0, m.F)(C)) {
            var e;
            return {
                isNameplateReward: !0,
                nameplateData: {
                    src: C.asset,
                    palette: (0, f.H6)(null != (e = C.palette) ? e : "sky"),
                    imgAlt: C.label
                },
                rewardDeco: void 0
            }
        }
        return (0, p.T)(C) ? {
            isNameplateReward: !1,
            nameplateData: null,
            rewardDeco: (0, c.A)(C.asset, y, !b)
        } : {
            isNameplateReward: !1,
            nameplateData: null,
            rewardDeco: void 0
        }
    }, [C, y, b]);
    return (0, r.jsx)(h.UX, {
        children: (0, r.jsx)(a.jlY, {
            align: g.A.Align.CENTER,
            "data-migration-pending": !0,
            children: (0, r.jsxs)("div", {
                className: T.W,
                children: [M && null != N ? (0, r.jsx)("div", {
                    className: T.D,
                    onMouseEnter: () => R(!0),
                    onMouseLeave: () => R(!1),
                    children: (0, r.jsx)(P.a, {
                        user: S,
                        nameplate: null,
                        nameplateData: N,
                        showPlaceholderUser: !0,
                        nameplatePreviewSize: "xsmall",
                        isHighlighted: v
                    })
                }) : (0, r.jsx)(a.JsQ, {
                    "aria-label": null == S ? void 0 : S.username,
                    size: y,
                    src: null == S ? void 0 : S.getAvatarURL(void 0, (0, a.FT9)(y), !b),
                    avatarDecoration: k
                }), (0, r.jsx)(s.$nd, {
                    variant: "primary",
                    text: x.intl.string(x.t.kMYVwv),
                    loading: I,
                    onClick: () => {
                        null != A && (t(), (0, E.A)({
                            product: A,
                            shouldShowPromotionalExperience: !0,
                            analyticsLocations: O,
                            purchaseType: _.gs.PROMOTIONAL
                        }))
                    }
                })]
            })
        })
    })
}