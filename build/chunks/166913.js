/** chunk id: 166913, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => B
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(877624),
    o = n(311907),
    c = n(230109),
    d = n(582754),
    u = n(421380),
    _ = n(736653),
    p = n(793574),
    m = n(688810),
    g = n(726649),
    A = n(611924),
    f = n(166403),
    b = n(954571),
    h = n(927578),
    E = n(40185),
    O = n(526292),
    x = n(234419),
    C = n(412260),
    S = n(396375),
    T = n(106922),
    I = n(501007),
    N = n(901125),
    j = n(729230),
    y = n(753894),
    v = n(227273),
    P = n(252711),
    R = n(244778),
    D = n(788868),
    L = n(652215),
    w = n(985018),
    M = n(639179),
    G = n(432221),
    U = n(288894);
let k = e => {
        let {
            inOfferExperience: t
        } = e;
        return t ? (0, r.jsx)(j.A, {
            lifted: t
        }) : null
    },
    B = () => {
        var e;
        (0, A.P)(g.b);
        let t = i.useRef(null),
            n = i.useRef(null),
            l = i.useRef(null),
            j = (0, _.Ay)(),
            B = (0, d.Mw)(j),
            [H, V] = i.useState(!1),
            [F, Y] = i.useState(!1),
            [W, K] = i.useState(!1),
            [z, Z] = i.useState(!1),
            X = (0, o.bG)([f.A], () => f.A.getPremiumTypeSubscription()),
            q = null != X ? (0, h.EL)(X) : null,
            J = null != q ? h.Ay.getSkuIdForPlan(q.planId) : null,
            Q = null !== J && J !== D.pe.TIER_2 ? D.pe.TIER_2 : null,
            $ = (0, x.V)(),
            ee = null == $ || null == (e = $.subscription_trial) ? void 0 : e.sku_id,
            et = (0, O.ar)(),
            en = (0, E.cg)(),
            er = null != en && en,
            ei = (0, o.bG)([C.A], () => {
                let e = C.A.getMarketingComponentByType(a.C.BILLING_SETTINGS_NITRO_GIFT_BANNER);
                return null == e || "billingSettingsNitroGiftBanner" !== e.properties.properties.oneofKind ? null : e.properties.properties.billingSettingsNitroGiftBanner
            }),
            {
                analyticsLocations: el
            } = (0, m.Ay)(p.A.PREMIUM_MARKETING);
        i.useEffect(() => {
            Z(!0)
        }, []);
        let es = (0, r.jsx)("div", {
            className: G.dY,
            children: (0, r.jsx)(c.L, {
                innerRef: t,
                onChange: e => Y(e),
                threshold: .1,
                active: !0,
                children: (0, r.jsx)(I.NB, {
                    innerRef: t,
                    tier0CTAButton: (0, r.jsx)(S.A, {
                        showIcon: !1,
                        subscriptionTier: D.pe.TIER_0,
                        className: M.Ph,
                        look: u.pR.OUTLINED,
                        color: u.XD.WHITE,
                        buttonShineClassName: M.Qr
                    }),
                    tier2CTAButton: ee === D.pe.TIER_0 ? (0, r.jsx)(S.A, {
                        showIcon: !1,
                        subscriptionTier: D.pe.TIER_2,
                        className: M.Ph,
                        look: u.pR.OUTLINED,
                        color: u.XD.WHITE,
                        buttonShineClassName: M.Qr
                    }) : (0, r.jsx)(S.A, {
                        color: u.XD.BRAND_INVERTED,
                        showIcon: !1,
                        subscriptionTier: D.pe.TIER_2,
                        className: M.Ph,
                        hasActivePromotion: er,
                        textOptions: {
                            textClassName: M.Ac
                        },
                        buttonShineClassName: M.Qr
                    })
                })
            })
        });
        return (0, r.jsxs)("div", {
            className: G.kL,
            "data-cy": "tier-0-marketing-page",
            children: [(0, r.jsx)(N.A, {
                premiumSubscription: X,
                className: s()(G.R3, {
                    [G.aZ]: et
                })
            }), (0, r.jsx)(k, {
                inOfferExperience: et
            }), (0, r.jsxs)("div", {
                className: s()({
                    [G.V1]: !et
                }),
                children: [null != ei && (0, r.jsx)(T.c, {
                    className: G.w$,
                    config: ei
                }), (0, r.jsx)(c.L, {
                    innerRef: n,
                    onChange: e => V(e),
                    threshold: 0,
                    active: !0,
                    children: (0, r.jsx)(y.Ay, {
                        ref: n,
                        subscriptionTier: Q,
                        className: s()({
                            [G.p7]: et,
                            [G.Pw]: et,
                            [G.AG]: en,
                            [G.Cv]: null != X
                        }),
                        isDarkMode: B
                    })
                })]
            }), es, (0, r.jsx)(v.A, {
                className: G.B_
            }), (0, r.jsx)("div", {
                className: G.aC,
                children: (0, r.jsx)(R.A, {
                    className: G.JQ,
                    hideCTAs: !0
                })
            }), (0, r.jsx)("div", {
                className: G.hz
            }), (0, r.jsx)(P.A, {
                isVisible: !H && !F && z,
                subscriptionTier: Q,
                isApplicationHome: !1,
                isEligibleForBogoPromotion: en
            }), (0, r.jsx)(c.L, {
                innerRef: l,
                onChange: e => {
                    e && !W && (b.default.track(L.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                        location_stack: el
                    }), K(!0))
                },
                children: (0, r.jsx)("div", {
                    ref: l,
                    className: G._Z
                })
            }), (0, r.jsx)("img", {
                src: U,
                className: G.Kw,
                width: 112,
                height: 85,
                alt: w.intl.string(w.t.X4IxWL)
            })]
        })
    }