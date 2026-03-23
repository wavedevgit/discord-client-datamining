/** chunk id: 166913 params = (module,exports,require) **/
n.d(t, {
    A: () => w
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
    _ = n(736653),
    m = n(793574),
    g = n(688810),
    A = n(726649),
    x = n(611924),
    h = n(166403),
    p = n(954571),
    T = n(927578),
    E = n(40185),
    S = n(526292),
    f = n(234419),
    C = n(690737),
    b = n(320908),
    N = n(412260),
    I = n(396375),
    v = n(106922),
    j = n(501007),
    y = n(901125),
    R = n(729230),
    O = n(227273),
    L = n(244778),
    D = n(788868),
    P = n(652215),
    M = n(985018),
    G = n(639179),
    U = n(432221),
    k = n(288894);
let V = e => {
        let {
            inOfferExperience: t
        } = e;
        return t ? (0, i.jsx)(R.A, {
            lifted: t
        }) : null
    },
    w = () => {
        (0, x.P)(A.b);
        let e = s.useRef(null),
            t = s.useRef(null),
            n = s.useRef(null),
            l = (0, _.Ay)(),
            R = (0, c.Mw)(l),
            [w, B] = s.useState(!1),
            [H, F] = s.useState(!1),
            [Y, z] = s.useState(!1),
            [X, W] = s.useState(!1),
            K = (0, o.bG)([h.A], () => h.A.getPremiumTypeSubscription()),
            Z = null != K ? (0, T.EL)(K) : null,
            q = null != Z ? T.Ay.getSkuIdForPlan(Z.planId) : null,
            J = null !== q && q !== D.pe.TIER_2 ? D.pe.TIER_2 : null,
            Q = (0, f.V)(),
            $ = Q?.subscription_trial?.sku_id,
            ee = (0, S.ar)(),
            et = (0, E.cg)(),
            en = et ?? !1,
            ei = (0, o.bG)([N.A], () => {
                let e = N.A.getMarketingComponentByType(r.C.BILLING_SETTINGS_NITRO_GIFT_BANNER);
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
            children: [(0, i.jsx)(y.A, {
                premiumSubscription: K,
                className: a()(U.R3, {
                    [U.aZ]: ee
                })
            }), (0, i.jsx)(V, {
                inOfferExperience: ee
            }), (0, i.jsxs)("div", {
                className: a()({
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
                    children: (0, i.jsx)(b.Ay, {
                        ref: t,
                        subscriptionTier: J,
                        className: a()({
                            [U.p7]: ee,
                            [U.Pw]: ee,
                            [U.AG]: et,
                            [U.Cv]: null != K
                        }),
                        isDarkMode: R
                    })
                })]
            }), el, (0, i.jsx)(O.A, {
                className: U.B_
            }), (0, i.jsx)("div", {
                className: U.aC,
                children: (0, i.jsx)(L.A, {
                    className: U.JQ,
                    hideCTAs: !0
                })
            }), (0, i.jsx)("div", {
                className: U.hz
            }), (0, i.jsx)(C.A, {
                isVisible: !w && !H && X,
                subscriptionTier: J,
                isApplicationHome: !1,
                isEligibleForBogoPromotion: et
            }), (0, i.jsx)(d.L, {
                innerRef: n,
                onChange: e => {
                    e && !Y && (p.default.track(P.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
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