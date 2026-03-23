/** chunk id: 189024 params = (module,exports,require) **/
n.d(t, {
    A: () => k
});
var i = n(627968),
    s = n(64700),
    l = n(367622),
    a = n(311907),
    r = n(397927),
    o = n(975807),
    d = n(793574),
    c = n(688810),
    u = n(954921),
    m = n(793943),
    _ = n(259065),
    g = n(95035),
    A = n(532794),
    x = n(780964),
    p = n(358776),
    h = n(840065),
    T = n(166403),
    E = n(730784),
    f = n(398523),
    S = n(612669),
    C = n(161319),
    b = n(920050),
    N = n(9458),
    I = n(788868),
    v = n(88001),
    j = n(519412),
    y = n(985018),
    O = n(340091),
    R = n(998663),
    L = n(817577),
    P = n(419455),
    D = n(288604),
    M = n(893160),
    G = n(509442);

function k() {
    let {
        analyticsLocations: e
    } = (0, c.Ay)(d.A.PREMIUM_MARKETING_PERK_CARD), t = (0, S.O9)(), k = (0, E.R)({
        location: "PremiumWhatsNewSection"
    }), U = f.A.useExperiment({
        location: "PremiumWhatsNewSection"
    }).enabled, w = (0, a.bG)([T.A], () => T.A.getPremiumTypeSubscription()), V = w?.hasActiveTrial ?? !1, B = (0, s.useCallback)(() => {
        (0, h.openUserSettings)(x.X.PROFILE_PANEL, {
            analyticsLocations: e
        }, () => (0, _.L)({
            analyticsLocations: e
        }))
    }, [e]), H = (0, s.useCallback)(() => {
        (0, h.openUserSettings)(x.X.PROFILE_PANEL, {
            analyticsLocations: e
        }, () => (0, u.L)({
            analyticsLocations: e
        }))
    }, [e]), F = (0, s.useCallback)(() => {
        let e = (0, p.Ci)("openCustomAppSettings") ? x.X.DISPLAY_IN_APP_ICON_CATEGORY : x.X.APPEARANCE_IN_APP_ICON;
        (0, h.openUserSettings)(e)
    }, []), Y = () => {
        (0, o.A)(v.TE)
    }, z = (0, s.useCallback)(() => {
        if (k) {
            if (V) return void(0, r.mMO)(async () => {
                let {
                    default: e
                } = await n.e("99709").then(n.bind(n, 516044));
                return t => (0, i.jsx)(e, {
                    ...t
                })
            });
            (0, A.A)({
                subscriptionTier: I.pe.TIER_2,
                initialPlanId: I.gD.PREMIUM_GROUP_MONTH,
                analyticsLocations: e
            })
        } else(0, r.mMO)(async () => {
            let {
                default: e
            } = await n.e("69595").then(n.bind(n, 526710));
            return t => (0, i.jsx)(e, {
                ...t
            })
        })
    }, [k, e, V]), X = (0, N.A)(e), {
        currentDate: W,
        nDaysInMonth: K
    } = (0, s.useMemo)(() => {
        let e = new Date;
        return {
            currentDate: e,
            nDaysInMonth: new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate()
        }
    }, []);
    return (0, s.useMemo)(() => {
        let n = [t ? {
                id: b.PREMIUM_GROUP_CARD_ID,
                title: y.intl.string(j.default.YkvksF),
                description: (0, i.jsxs)(i.Fragment, {
                    children: [y.intl.formatToPlainString(j.default.JlyGQj, {
                        totalSeats: v.aw,
                        premiumGroupProductName: (0, v.DP)()
                    }), (0, i.jsx)("div", {
                        className: O.LF,
                        children: (0, i.jsx)(g.A, {
                            onClick: Y,
                            children: y.intl.string(j.default.yYyGJH)
                        })
                    })]
                }),
                pillText: y.intl.string(y.t.oW0eUd),
                primaryAsset: L,
                ...k ? {
                    ctaIcon: r.tvc,
                    ctaIconPosition: "start"
                } : {},
                ctaText: y.intl.string(k ? y.t.IJI7yk : y.t.jVcuVY),
                onCtaClick: z
            } : null, U ? {
                id: b.RECURRING_3P_PROMOTIONS_CARD_ID,
                title: y.intl.string(y.t.m7PucM),
                description: y.intl.format(y.t.zh1X7u, {}),
                subscriptionRequired: !0,
                pillText: y.intl.string(y.t.oW0eUd),
                caption: (0, i.jsx)("img", {
                    src: R,
                    alt: "SteelSeries"
                }),
                backgroundAssetUrl: M.A,
                progress: W.getDate() / K,
                ctaText: y.intl.string(y.t.w7s5Qr),
                onCtaClick: () => (0, C.uE)({
                    analyticsLocations: e
                }),
                blurTint: "#2E213D"
            } : null, {
                id: b.DISPLAY_NAME_STYLES_CARD_ID,
                title: y.intl.string(y.t.OLtTrt),
                description: y.intl.string(y.t["di/pXR"]),
                onCtaClick: B,
                primaryAsset: P.A,
                ctaText: y.intl.string(y.t.jVcuVY),
                pillText: y.intl.string(y.t.y2b7CA)
            }, {
                id: b.CLIENT_THEMES_CARD_ID,
                title: y.intl.string(y.t.acc6h6),
                description: y.intl.formatToPlainString(y.t.WQazjs, {
                    themeCount: 20
                }),
                primaryAsset: G.A,
                ctaText: y.intl.string(y.t.jVcuVY),
                onCtaClick: () => {
                    (0, m.nf)(m.HP.CUSTOM_THEME)
                }
            }, {
                id: b.PERMADECOS_CARD_ID,
                title: y.intl.string(y.t.L14NZN),
                description: y.intl.string(y.t.eCZkAI),
                primaryAsset: (0, i.jsx)(l.u7P, {
                    alt: "",
                    ariaHidden: !0
                }),
                ctaText: y.intl.string(y.t.jVcuVY),
                onCtaClick: H
            }, {
                id: b.CUSTOM_APP_ICONS_CARD_ID,
                title: y.intl.string(y.t["GU+wqh"]),
                description: y.intl.string(y.t["1uPk1Z"]),
                primaryAsset: D.A,
                ctaText: y.intl.string(y.t.y9TxXV),
                onCtaClick: F
            }],
            s = (n = n.filter(e => null != e))[0].featured,
            a = s ? 5 : 6;
        return n.splice(+!!s, 0, X), n.length > a && n.splice(a, n.length - a), n
    }, [X, t, k, U, K, W, e, B, F, H, z])
}