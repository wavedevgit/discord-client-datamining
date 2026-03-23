/** chunk id: 166913 params = (module,exports,require) **/
n.d(t, {
    A: () => V
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(877624),
    o = n(311907),
    d = n(230109),
    c = n(582754),
    u = n(421380),
    m = n(736653),
    _ = n(793574),
    g = n(688810),
    A = n(726649),
    x = n(611924),
    p = n(166403),
    h = n(954571),
    f = n(927578),
    T = n(40185),
    E = n(526292),
    S = n(234419),
    b = n(690737),
    C = n(320908),
    N = n(412260),
    v = n(396375),
    I = n(106922),
    j = n(501007),
    y = n(901125),
    O = n(729230),
    R = n(227273),
    L = n(244778),
    P = n(788868),
    D = n(652215),
    M = n(985018),
    G = n(639179),
    k = n(432221),
    U = n(288894);
let w = e => {
        let {
            inOfferExperience: t
        } = e;
        return t ? (0, i.jsx)(O.A, {
            lifted: t
        }) : null
    },
    V = () => {
        (0, x.P)(A.b);
        let e = s.useRef(null),
            t = s.useRef(null),
            n = s.useRef(null),
            l = (0, m.Ay)(),
            O = (0, c.Mw)(l),
            [V, B] = s.useState(!1),
            [F, H] = s.useState(!1),
            [Y, z] = s.useState(!1),
            [X, W] = s.useState(!1),
            K = (0, o.bG)([p.A], () => p.A.getPremiumTypeSubscription()),
            Z = null != K ? (0, f.EL)(K) : null,
            q = null != Z ? f.Ay.getSkuIdForPlan(Z.planId) : null,
            J = null !== q && q !== P.pe.TIER_2 ? P.pe.TIER_2 : null,
            Q = (0, S.V)(),
            $ = Q?.subscription_trial?.sku_id,
            ee = (0, E.ar)(),
            et = (0, T.cg)(),
            en = et ?? !1,
            ei = (0, o.bG)([N.A], () => {
                let e = N.A.getMarketingComponentByType(r.C.BILLING_SETTINGS_NITRO_GIFT_BANNER);
                return null == e || "billingSettingsNitroGiftBanner" !== e.properties.properties.oneofKind ? null : e.properties.properties.billingSettingsNitroGiftBanner
            }),
            {
                analyticsLocations: es
            } = (0, g.Ay)(_.A.PREMIUM_MARKETING);
        s.useEffect(() => {
            W(!0)
        }, []);
        let el = (0, i.jsx)("div", {
            className: k.dY,
            children: (0, i.jsx)(d.L, {
                innerRef: e,
                onChange: e => H(e),
                threshold: .1,
                active: !0,
                children: (0, i.jsx)(j.NB, {
                    innerRef: e,
                    tier0CTAButton: (0, i.jsx)(v.A, {
                        showIcon: !1,
                        subscriptionTier: P.pe.TIER_0,
                        className: G.Ph,
                        look: u.pR.OUTLINED,
                        color: u.XD.WHITE,
                        buttonShineClassName: G.Qr
                    }),
                    tier2CTAButton: $ === P.pe.TIER_0 ? (0, i.jsx)(v.A, {
                        showIcon: !1,
                        subscriptionTier: P.pe.TIER_2,
                        className: G.Ph,
                        look: u.pR.OUTLINED,
                        color: u.XD.WHITE,
                        buttonShineClassName: G.Qr
                    }) : (0, i.jsx)(v.A, {
                        color: u.XD.BRAND_INVERTED,
                        showIcon: !1,
                        subscriptionTier: P.pe.TIER_2,
                        className: G.Ph,
                        hasActivePromotion: en,
                        textOptions: {
                            textClassName: G.Ac
                        },
                        buttonShineClassName: G.Qr
                    })
                })
            })
        });
        return (0, i.jsxs)("div", {
            className: k.kL,
            "data-cy": "tier-0-marketing-page",
            children: [(0, i.jsx)(y.A, {
                premiumSubscription: K,
                className: a()(k.R3, {
                    [k.aZ]: ee
                })
            }), (0, i.jsx)(w, {
                inOfferExperience: ee
            }), (0, i.jsxs)("div", {
                className: a()({
                    [k.V1]: !ee
                }),
                children: [null != ei && (0, i.jsx)(I.c, {
                    className: k.w$,
                    config: ei
                }), (0, i.jsx)(d.L, {
                    innerRef: t,
                    onChange: e => B(e),
                    threshold: 0,
                    active: !0,
                    children: (0, i.jsx)(C.Ay, {
                        ref: t,
                        subscriptionTier: J,
                        className: a()({
                            [k.p7]: ee,
                            [k.Pw]: ee,
                            [k.AG]: et,
                            [k.Cv]: null != K
                        }),
                        isDarkMode: O
                    })
                })]
            }), el, (0, i.jsx)(R.A, {
                className: k.B_
            }), (0, i.jsx)("div", {
                className: k.aC,
                children: (0, i.jsx)(L.A, {
                    className: k.JQ,
                    hideCTAs: !0
                })
            }), (0, i.jsx)("div", {
                className: k.hz
            }), (0, i.jsx)(b.A, {
                isVisible: !V && !F && X,
                subscriptionTier: J,
                isApplicationHome: !1,
                isEligibleForBogoPromotion: et
            }), (0, i.jsx)(d.L, {
                innerRef: n,
                onChange: e => {
                    e && !Y && (h.default.track(D.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                        location_stack: es
                    }), z(!0))
                },
                children: (0, i.jsx)("div", {
                    ref: n,
                    className: k._Z
                })
            }), (0, i.jsx)("img", {
                src: U,
                className: k.Kw,
                width: 112,
                height: 85,
                alt: M.intl.string(M.t.X4IxWL)
            })]
        })
    }