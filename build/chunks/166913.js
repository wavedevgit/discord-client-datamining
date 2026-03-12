/** chunk id: 166913 params = (module,exports,require) **/
n.d(t, {
    A: () => w
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(877624),
    o = n(311907),
    d = n(230109),
    c = n(582754),
    u = n(421380),
    _ = n(736653),
    m = n(793574),
    g = n(688810),
    A = n(726649),
    h = n(611924),
    x = n(166403),
    p = n(954571),
    T = n(927578),
    E = n(40185),
    C = n(526292),
    S = n(234419),
    f = n(690737),
    N = n(320908),
    b = n(412260),
    I = n(396375),
    v = n(106922),
    j = n(501007),
    O = n(901125),
    y = n(729230),
    R = n(227273),
    P = n(244778),
    D = n(788868),
    L = n(652215),
    M = n(985018),
    G = n(443137),
    U = n(552559),
    k = n(288894);
let V = e => {
        let {
            inOfferExperience: t
        } = e;
        return t ? (0, i.jsx)(y.A, {
            lifted: t
        }) : null
    },
    w = () => {
        (0, h.P)(A.b);
        let e = s.useRef(null),
            t = s.useRef(null),
            n = s.useRef(null),
            l = (0, _.Ay)(),
            y = (0, c.Mw)(l),
            [w, B] = s.useState(!1),
            [H, F] = s.useState(!1),
            [Y, z] = s.useState(!1),
            [X, W] = s.useState(!1),
            K = (0, o.bG)([x.A], () => x.A.getPremiumTypeSubscription()),
            Z = null != K ? (0, T.EL)(K) : null,
            q = null != Z ? T.Ay.getSkuIdForPlan(Z.planId) : null,
            J = null !== q && q !== D.pe.TIER_2 ? D.pe.TIER_2 : null,
            Q = (0, S.V)(),
            $ = Q?.subscription_trial?.sku_id,
            ee = (0, C.ar)(),
            et = (0, E.cg)(),
            en = et ?? !1,
            ei = (0, o.bG)([b.A], () => {
                let e = b.A.getMarketingComponentByType(a.C.BILLING_SETTINGS_NITRO_GIFT_BANNER);
                return null == e || "billingSettingsNitroGiftBanner" !== e.properties.properties.oneofKind ? null : e.properties.properties.billingSettingsNitroGiftBanner
            }),
            {
                analyticsLocations: es
            } = (0, g.Ay)(m.A.PREMIUM_MARKETING);
        s.useEffect(() => {
            W(!0)
        }, []);
        let el = (0, i.jsx)("div", {
            className: U.dY,
            children: (0, i.jsx)(d.L, {
                innerRef: e,
                onChange: e => F(e),
                threshold: .1,
                active: !0,
                children: (0, i.jsx)(j.NB, {
                    innerRef: e,
                    tier0CTAButton: (0, i.jsx)(I.A, {
                        showIcon: !1,
                        subscriptionTier: D.pe.TIER_0,
                        className: G.Ph,
                        look: u.pR.OUTLINED,
                        color: u.XD.WHITE,
                        buttonShineClassName: G.Qr
                    }),
                    tier2CTAButton: $ === D.pe.TIER_0 ? (0, i.jsx)(I.A, {
                        showIcon: !1,
                        subscriptionTier: D.pe.TIER_2,
                        className: G.Ph,
                        look: u.pR.OUTLINED,
                        color: u.XD.WHITE,
                        buttonShineClassName: G.Qr
                    }) : (0, i.jsx)(I.A, {
                        color: u.XD.BRAND_INVERTED,
                        showIcon: !1,
                        subscriptionTier: D.pe.TIER_2,
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
            className: U.kL,
            "data-cy": "tier-0-marketing-page",
            children: [(0, i.jsx)(O.A, {
                premiumSubscription: K,
                className: r()(U.R3, {
                    [U.aZ]: ee
                })
            }), (0, i.jsx)(V, {
                inOfferExperience: ee
            }), (0, i.jsxs)("div", {
                className: r()({
                    [U.V1]: !ee
                }),
                children: [null != ei && (0, i.jsx)(v.c, {
                    className: U.w$,
                    config: ei
                }), (0, i.jsx)(d.L, {
                    innerRef: t,
                    onChange: e => B(e),
                    threshold: 0,
                    active: !0,
                    children: (0, i.jsx)(N.Ay, {
                        ref: t,
                        subscriptionTier: J,
                        className: r()({
                            [U.p7]: ee,
                            [U.Pw]: ee,
                            [U.AG]: et,
                            [U.Cv]: null != K
                        }),
                        isDarkMode: y
                    })
                })]
            }), el, (0, i.jsx)(R.A, {
                className: U.B_
            }), (0, i.jsx)("div", {
                className: U.aC,
                children: (0, i.jsx)(P.A, {
                    className: U.JQ,
                    hideCTAs: !0
                })
            }), (0, i.jsx)("div", {
                className: U.hz
            }), (0, i.jsx)(f.A, {
                isVisible: !w && !H && X,
                subscriptionTier: J,
                isApplicationHome: !1,
                isEligibleForBogoPromotion: et
            }), (0, i.jsx)(d.L, {
                innerRef: n,
                onChange: e => {
                    e && !Y && (p.default.track(L.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                        location_stack: es
                    }), z(!0))
                },
                children: (0, i.jsx)("div", {
                    ref: n,
                    className: U._Z
                })
            }), (0, i.jsx)("img", {
                src: k,
                className: U.Kw,
                width: 112,
                height: 85,
                alt: M.intl.string(M.t.X4IxWL)
            })]
        })
    }