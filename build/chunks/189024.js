/** chunk id: 189024 params = (module,exports,require) **/
n.d(t, {
    A: () => el
});
var i = n(627968),
    r = n(64700),
    a = n(367622),
    s = n(311907),
    l = n(582754),
    o = n(397927),
    c = n(157559),
    d = n(736653),
    u = n(975807),
    _ = n(793574),
    m = n(688810),
    p = n(562819),
    g = n(793943),
    A = n(259065),
    f = n(95035),
    h = n(532794),
    b = n(829219),
    x = n(859703),
    C = n(341915),
    N = n(245853),
    R = n(890687),
    v = n(590202),
    E = n(976860),
    I = n(591179),
    T = n(462463),
    j = n(780964),
    S = n(358776),
    M = n(858897),
    P = n(166403),
    y = n(975571),
    O = n(398523),
    D = n(881373),
    L = n(152815),
    U = n(612669),
    k = n(852218),
    B = n(161319),
    G = n(920050),
    w = n(9458),
    V = n(788868),
    H = n(88001),
    W = n(652215),
    F = n(654487),
    Y = n(962995),
    z = n(466919),
    X = n(365720),
    K = n(985018),
    q = n(555599),
    Z = n(998663),
    $ = n(817577),
    Q = n(419455),
    J = n(716925),
    ee = n(288604),
    et = n(223157),
    en = n(863882),
    ei = n(893160),
    er = n(384565),
    ea = n(365580),
    es = n(509442);

function el() {
    let {
        analyticsLocations: e
    } = (0, m.Ay)(_.A.PREMIUM_MARKETING_PERK_CARD), t = (0, I.X)("useWhatsNewPerkCards"), el = (0, d.Ay)(), eo = (0, U.O9)(), ec = (0, D.YS)({
        location: "useWhatsNewPerkCards"
    }).functionalityEnabled, ed = O.A.useConfig({
        location: "PremiumWhatsNewSection"
    }).enabled, eu = (0, s.bG)([P.A], () => P.A.getPremiumTypeSubscription()), e_ = eu?.hasActiveTrial ?? !1, em = (0, s.bG)([x.A], () => [...x.A.quests.values()].find(e => e.config.features.includes(F.Li.NITRO_CONTROL_CTA)) ?? null), ep = (0, T.A)({
        analyticsLocations: e
    }), {
        launchInGameActivity: eg
    } = (0, R.zW)(em), eA = (0, r.useCallback)(() => {
        (0, M.openUserSettings)(j.X.PROFILE_PANEL, {
            analyticsLocations: e
        }, () => (0, A.L)({
            analyticsLocations: e
        }))
    }, [e]), ef = (0, r.useCallback)(() => {
        (0, M.openUserSettings)(j.X.PROFILE_PANEL, {
            analyticsLocations: e
        }, () => (0, p.L)({
            analyticsLocations: e
        }))
    }, [e]), eh = (0, r.useCallback)(() => {
        let e = (0, S.Ci)("openCustomAppSettings") ? j.X.DISPLAY_IN_APP_ICON_CATEGORY : j.X.APPEARANCE_IN_APP_ICON;
        (0, M.openUserSettings)(e)
    }, []), eb = (0, r.useCallback)(() => {
        null != em && (em.userStatus?.enrolledAt == null ? (0, b.Oy)(em.id, {
            questContent: C.uF.NITRO_HOME_PERK_CARD,
            questContentCTA: v.Cy.START_QUEST,
            sourceQuestContent: C.uF.NITRO_HOME_PERK_CARD
        }).then(e => {
            switch (e.type) {
                case b.WM.SUCCESS:
                    eg();
                    break;
                case b.WM.CAPTCHA_FAILED:
                    c.A.show({
                        title: K.intl.string(K.t["/CidxO"]),
                        body: K.intl.string(K.t.HQdHg6)
                    });
                    break;
                case b.WM.UNKNOWN_ERROR:
                    c.A.show({
                        title: K.intl.string(K.t.R0RpRX),
                        body: K.intl.string(K.t.OXD41D)
                    })
            }
        }) : eg())
    }, [em, eg]), ex = () => {
        (0, u.A)(H.TE)
    }, eC = (0, r.useCallback)(() => {
        e_ ? (0, o.mMO)(async () => {
            let {
                default: e
            } = await n.e("99709").then(n.bind(n, 516044));
            return t => (0, i.jsx)(e, {
                ...t
            })
        }) : (0, h.A)({
            subscriptionTier: V.pe.TIER_2,
            initialPlanId: V.gD.PREMIUM_GROUP_MONTH,
            analyticsLocations: e
        })
    }, [e, e_]), eN = (0, w.A)(e), {
        shouldShowBonusOrbsUX: eR,
        multiplier: ev
    } = (0, N.Dl)(F.rE.NITRO_HOME_MARKETING), {
        currentDate: eE,
        nDaysInMonth: eI
    } = (0, r.useMemo)(() => {
        let e = new Date;
        return {
            currentDate: e,
            nDaysInMonth: new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate()
        }
    }, []);
    return (0, r.useMemo)(() => {
        let n = null;
        if (null != em) {
            let e = em.userStatus?.completedAt != null;
            n = {
                id: G.NITRO_CONTROL_QUEST_CARD_ID,
                title: K.intl.string(e ? X.default.S4okiP : X.default.lvidGa),
                description: K.intl.string(e ? X.default.JXidUB : X.default["VghrI/"]),
                pillText: K.intl.string(X.default["3rpSiP"]),
                primaryAsset: (0, l.Mw)(el) ? ea.A : er.A,
                ctaText: K.intl.string(e ? X.default.QBfwzW : X.default["1Ng1ci"]),
                onCtaClick: eb
            }
        }
        let r = [n, ec ? {
                id: G.LOGITECH_3PP_CARD_ID,
                title: K.intl.string(Y.default.OlObRa),
                description: K.intl.format(Y.default["/UNTlE"], {
                    discountPercent: D.aW,
                    termsUrl: y.A.getArticleURL(W.MVz.LOGITECH_PROMOTION)
                }),
                subscriptionRequired: !0,
                progress: eE.getDate() / eI,
                ctaText: K.intl.string(K.t.w7s5Qr),
                onCtaClick: () => (0, L.P)({
                    partnerId: k.XY
                }),
                blurTint: "#2E213D",
                backgroundAssetUrl: en.A,
                pillText: K.intl.string(K.t.y2b7CA),
                caption: (0, i.jsx)("img", {
                    src: et.A,
                    alt: "Logitech"
                })
            } : null, eo ? {
                id: G.PREMIUM_GROUP_CARD_ID,
                title: K.intl.string(z.default.YkvksF),
                description: (0, i.jsxs)(i.Fragment, {
                    children: [K.intl.formatToPlainString(z.default.JlyGQj, {
                        totalSeats: H.aw,
                        premiumGroupProductName: (0, H.DP)()
                    }), (0, i.jsx)("div", {
                        className: q.LF,
                        children: (0, i.jsx)(f.A, {
                            onClick: ex,
                            children: K.intl.string(z.default.yYyGJH)
                        })
                    })]
                }),
                pillText: K.intl.string(K.t.oW0eUd),
                primaryAsset: $,
                ctaIcon: o.tvc,
                ctaIconPosition: "start",
                ctaText: K.intl.string(K.t.IJI7yk),
                onCtaClick: eC
            } : null, ed ? {
                id: G.RECURRING_3P_PROMOTIONS_CARD_ID,
                title: K.intl.string(K.t.m7PucM),
                description: K.intl.format(K.t.zh1X7u, {}),
                subscriptionRequired: !0,
                pillText: K.intl.string(K.t.oW0eUd),
                caption: (0, i.jsx)("img", {
                    src: Z,
                    alt: "SteelSeries"
                }),
                backgroundAssetUrl: ei.A,
                progress: eE.getDate() / eI,
                ctaText: K.intl.string(K.t.w7s5Qr),
                onCtaClick: () => (0, B.u)({
                    analyticsLocations: e,
                    partnerIds: [k.KS, k.Cs]
                }),
                blurTint: "#2E213D"
            } : null, eR ? {
                id: G.QUEST_ORB_MULTIPLIER_CARD_ID,
                title: K.intl.string(K.t.F2MShO),
                description: K.intl.format(K.t.NpUfej, {
                    bonusOrbMultiplier: ev
                }),
                pillText: K.intl.string(K.t.oW0eUd),
                primaryAsset: J.A,
                ctaText: K.intl.string(K.t.jVcuVY),
                onCtaClick: () => (0, E.pX)(W.BVt.QUEST_HOME),
                primaryAssetClassName: q.Nf
            } : null, {
                id: G.DISPLAY_NAME_STYLES_CARD_ID,
                title: K.intl.string(K.t.OLtTrt),
                description: K.intl.string(K.t["di/pXR"]),
                onCtaClick: t ? ep : eA,
                ctaText: K.intl.string(K.t.jVcuVY),
                primaryAsset: Q.A,
                pillText: K.intl.string(K.t.y2b7CA)
            }, {
                id: G.CLIENT_THEMES_CARD_ID,
                title: K.intl.string(K.t.acc6h6),
                description: K.intl.formatToPlainString(K.t.WQazjs, {
                    themeCount: 20
                }),
                primaryAsset: es.A,
                ctaText: K.intl.string(K.t.jVcuVY),
                onCtaClick: () => {
                    (0, g.nf)(g.HP.CUSTOM_THEME)
                }
            }, {
                id: G.PERMADECOS_CARD_ID,
                title: K.intl.string(K.t.L14NZN),
                description: K.intl.string(K.t.eCZkAI),
                primaryAsset: (0, i.jsx)(a.u7P, {
                    alt: "",
                    ariaHidden: !0
                }),
                ctaText: K.intl.string(K.t.jVcuVY),
                onCtaClick: t ? ep : ef
            }, {
                id: G.CUSTOM_APP_ICONS_CARD_ID,
                title: K.intl.string(K.t["GU+wqh"]),
                description: K.intl.string(K.t["1uPk1Z"]),
                primaryAsset: ee.A,
                ctaText: K.intl.string(K.t.y9TxXV),
                onCtaClick: eh
            }],
            s = (r = r.filter(e => null != e))[0].featured,
            c = s ? 5 : 6;
        return r.splice(+!!s, 0, eN), r.length > c && r.splice(c, r.length - c), r
    }, [eN, em, el, eb, eo, ed, eR, ev, eI, eE, e, eA, eh, ef, eC, ep, t, ec])
}