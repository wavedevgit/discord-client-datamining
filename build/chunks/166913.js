/** chunk id: 166913, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => w
});
var i = n(627968),
    s = n(64700),
    a = n(503698),
    l = n.n(a),
    r = n(877624),
    o = n(311907),
    c = n(230109),
    d = n(582754),
    u = n(421380),
    _ = n(736653),
    m = n(793574),
    A = n(688810),
    g = n(726649),
    h = n(611924),
    x = n(166403),
    p = n(954571),
    E = n(927578),
    C = n(40185),
    T = n(526292),
    S = n(234419),
    I = n(690737),
    f = n(320908),
    N = n(412260),
    b = n(396375),
    j = n(106922),
    v = n(501007),
    O = n(901125),
    R = n(729230),
    y = n(227273),
    P = n(244778),
    L = n(788868),
    D = n(652215),
    G = n(985018),
    M = n(639179),
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
        (0, h.P)(g.b);
        let e = s.useRef(null),
            t = s.useRef(null),
            n = s.useRef(null),
            a = (0, _.Ay)(),
            R = (0, d.Mw)(a),
            [w, H] = s.useState(!1),
            [B, Y] = s.useState(!1),
            [F, z] = s.useState(!1),
            [W, K] = s.useState(!1),
            Z = (0, o.bG)([x.A], () => x.A.getPremiumTypeSubscription()),
            q = null != Z ? (0, E.EL)(Z) : null,
            X = null != q ? E.Ay.getSkuIdForPlan(q.planId) : null,
            Q = null !== X && X !== L.pe.TIER_2 ? L.pe.TIER_2 : null,
            J = (0, S.V)(),
            $ = J?.subscription_trial?.sku_id,
            ee = (0, T.ar)(),
            et = (0, C.cg)(),
            en = et ?? !1,
            ei = (0, o.bG)([N.A], () => {
                let e = N.A.getMarketingComponentByType(r.C.BILLING_SETTINGS_NITRO_GIFT_BANNER);
                return null == e || "billingSettingsNitroGiftBanner" !== e.properties.properties.oneofKind ? null : e.properties.properties.billingSettingsNitroGiftBanner
            }),
            {
                analyticsLocations: es
            } = (0, A.Ay)(m.A.PREMIUM_MARKETING);
        s.useEffect(() => {
            K(!0)
        }, []);
        let ea = (0, i.jsx)("div", {
            className: U.dY,
            children: (0, i.jsx)(c.L, {
                innerRef: e,
                onChange: e => Y(e),
                threshold: .1,
                active: !0,
                children: (0, i.jsx)(v.NB, {
                    innerRef: e,
                    tier0CTAButton: (0, i.jsx)(b.A, {
                        showIcon: !1,
                        subscriptionTier: L.pe.TIER_0,
                        className: M.Ph,
                        look: u.pR.OUTLINED,
                        color: u.XD.WHITE,
                        buttonShineClassName: M.Qr
                    }),
                    tier2CTAButton: $ === L.pe.TIER_0 ? (0, i.jsx)(b.A, {
                        showIcon: !1,
                        subscriptionTier: L.pe.TIER_2,
                        className: M.Ph,
                        look: u.pR.OUTLINED,
                        color: u.XD.WHITE,
                        buttonShineClassName: M.Qr
                    }) : (0, i.jsx)(b.A, {
                        color: u.XD.BRAND_INVERTED,
                        showIcon: !1,
                        subscriptionTier: L.pe.TIER_2,
                        className: M.Ph,
                        hasActivePromotion: en,
                        textOptions: {
                            textClassName: M.Ac
                        },
                        buttonShineClassName: M.Qr
                    })
                })
            })
        });
        return (0, i.jsxs)("div", {
            className: U.kL,
            "data-cy": "tier-0-marketing-page",
            children: [(0, i.jsx)(O.A, {
                premiumSubscription: Z,
                className: l()(U.R3, {
                    [U.aZ]: ee
                })
            }), (0, i.jsx)(V, {
                inOfferExperience: ee
            }), (0, i.jsxs)("div", {
                className: l()({
                    [U.V1]: !ee
                }),
                children: [null != ei && (0, i.jsx)(j.c, {
                    className: U.w$,
                    config: ei
                }), (0, i.jsx)(c.L, {
                    innerRef: t,
                    onChange: e => H(e),
                    threshold: 0,
                    active: !0,
                    children: (0, i.jsx)(f.Ay, {
                        ref: t,
                        subscriptionTier: Q,
                        className: l()({
                            [U.p7]: ee,
                            [U.Pw]: ee,
                            [U.AG]: et,
                            [U.Cv]: null != Z
                        }),
                        isDarkMode: R
                    })
                })]
            }), ea, (0, i.jsx)(y.A, {
                className: U.B_
            }), (0, i.jsx)("div", {
                className: U.aC,
                children: (0, i.jsx)(P.A, {
                    className: U.JQ,
                    hideCTAs: !0
                })
            }), (0, i.jsx)("div", {
                className: U.hz
            }), (0, i.jsx)(I.A, {
                isVisible: !w && !B && W,
                subscriptionTier: Q,
                isApplicationHome: !1,
                isEligibleForBogoPromotion: et
            }), (0, i.jsx)(c.L, {
                innerRef: n,
                onChange: e => {
                    e && !F && (p.default.track(D.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
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
                alt: G.intl.string(G.t.X4IxWL)
            })]
        })
    }