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
    E = t(61750),
    g = t(235986),
    f = t(369496),
    P = t(550111),
    j = t(287809),
    h = t(482132),
    _ = t(758836),
    x = t(985018),
    T = t(401506);

function A(e) {
    let {
        rewardSkuId: n,
        onClose: t
    } = e, A = (0, i.bG)([j.default], () => j.default.getCurrentUser()), O = (0, i.bG)([o.A], () => o.A.useReducedMotion), {
        analyticsLocations: S
    } = (0, u.Ay)(), I = a._3J.SIZE_32, {
        product: b,
        isFetching: y
    } = (0, d.q)(n), [v, R] = r.useState(!1), C = null == b ? void 0 : b.items[0], {
        isNameplateReward: M,
        nameplateData: N,
        rewardDeco: k
    } = r.useMemo(() => {
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
            rewardDeco: (0, c.A)(C.asset, I, !O)
        } : {
            isNameplateReward: !1,
            nameplateData: null,
            rewardDeco: void 0
        }
    }, [C, I, O]);
    return (0, l.jsx)(h.UX, {
        children: (0, l.jsx)(a.jlY, {
            align: g.A.Align.CENTER,
            "data-migration-pending": !0,
            children: (0, l.jsxs)("div", {
                className: T.W,
                children: [M && null != N ? (0, l.jsx)("div", {
                    className: T.D,
                    onMouseEnter: () => R(!0),
                    onMouseLeave: () => R(!1),
                    children: (0, l.jsx)(P.a, {
                        user: A,
                        nameplate: null,
                        nameplateData: N,
                        showPlaceholderUser: !0,
                        nameplatePreviewSize: "xsmall",
                        isHighlighted: v
                    })
                }) : (0, l.jsx)(a.JsQ, {
                    "aria-label": null == A ? void 0 : A.username,
                    size: I,
                    src: null == A ? void 0 : A.getAvatarURL(void 0, (0, a.FT9)(I), !O),
                    avatarDecoration: k
                }), (0, l.jsx)(s.$nd, {
                    variant: "primary",
                    text: x.intl.string(x.t.kMYVwv),
                    loading: y,
                    onClick: () => {
                        null != b && (t(), (0, E.A)({
                            product: b,
                            shouldShowPromotionalExperience: !0,
                            analyticsLocations: S,
                            purchaseType: _.gs.PROMOTIONAL
                        }))
                    }
                })]
            })
        })
    })
}