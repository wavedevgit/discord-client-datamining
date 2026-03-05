/** chunk id: 380083 params = (module,exports,require) **/
s.d(t, {
    Ay: () => v,
    Rs: () => b,
    fw: () => k
});
var n, l = s(627968),
    i = s(64700),
    a = s(284009),
    r = s.n(a),
    C = s(311907),
    c = s(397927),
    d = s(830382),
    L = s(937008),
    H = s(156312),
    M = s(972607),
    o = s(419212),
    u = s(97352),
    g = s(67480),
    h = s(975571),
    p = s(927578),
    N = s(615396),
    m = s(135088),
    A = s(659746),
    E = s(4471),
    f = s(788868),
    _ = s(88001),
    I = s(652215),
    x = s(26279),
    T = s(518582),
    P = s(985018),
    R = s(943165);

function Z(e) {
    let t, {
            planId: s,
            startingPremiumSubscriptionPlanId: n,
            paymentSourceType: i
        } = e,
        [a, c] = (0, C.yK)([u.A], () => [u.A.get(n), u.A.get(s)]);
    if (r()(null != a && null != c, "Missing startingPlan or newPlan"), f.LE.indexOf(n) < f.LE.indexOf(s)) switch (s) {
            case f.gD.PREMIUM_MONTH_TIER_1:
                t = P.intl.string(P.t.knvOVz), I.NcF.has(i ?? I.hes.UNKNOWN) && (t = P.intl.format(P.t.o6hBiR, {}));
                break;
            case f.gD.PREMIUM_MONTH_TIER_2:
                t = P.intl.string(P.t.f8Dquh), I.NcF.has(i ?? I.hes.UNKNOWN) && (t = P.intl.format(P.t.A4THYt, {}));
                break;
            case f.gD.PREMIUM_YEAR_TIER_1:
                t = P.intl.string(P.t.YZd5rw), I.NcF.has(i ?? I.hes.UNKNOWN) && (t = P.intl.format(P.t.MHAxpE, {}));
                break;
            case f.gD.PREMIUM_YEAR_TIER_2:
                t = P.intl.formatToPlainString(P.t["M/Lknl"], {
                    numFreeGuildSubscriptions: f.M4
                }), I.NcF.has(i ?? I.hes.UNKNOWN) && (t = P.intl.format(P.t.mULxLW, {
                    numFreeGuildSubscriptions: f.M4
                }));
                break;
            case f.gD.PREMIUM_3_MONTH_TIER_2:
            case f.gD.PREMIUM_6_MONTH_TIER_2:
                t = P.intl.string(P.t.aaCoW6);
                break;
            case f.gD.PREMIUM_MONTH_TIER_0:
            case f.gD.PREMIUM_YEAR_TIER_0:
                t = P.intl.string(P.t["XEoQ7+"]);
                break;
            case f.gD.PREMIUM_GROUP_MONTH:
                t = P.intl.formatToPlainString(T.default.pDiwHe, {
                    premiumGroupProductName: (0, _.DP)(),
                    totalSeats: _.LM
                });
                break;
            default:
                throw Error(`Unexpected planId: ${s}`)
        } else if (a.skuId === f.pe.TIER_2 && c.skuId === f.pe.TIER_1) t = P.intl.string(P.t.PNX4NM);
        else switch (c.skuId) {
            case f.pe.TIER_0:
                t = P.intl.string(P.t["XEoQ7+"]);
                break;
            case f.pe.TIER_1:
                t = P.intl.string(P.t.nLI1Kr);
                break;
            case f.pe.TIER_2:
                t = 1 !== a.intervalCount ? P.intl.string(P.t.qSZZVA) : P.intl.string(P.t.RNjcNg);
                break;
            default:
                throw Error(`Unexpected skuId: ${c.skuId}`)
        }
    return (0, l.jsx)("div", {
        className: R.Qq,
        children: t
    })
}
var b = ((n = {}).DEEPLINK_TO_DESKTOP_APP = "deeplink_to_desktop_app", n);

function v(e) {
    let t, s, {
            planId: n,
            startingPremiumSubscriptionPlanId: a,
            onClose: L,
            followupSKUInfo: M,
            isDowngrade: o,
            hideClose: b,
            postSuccessGuild: v,
            paymentSourceType: k,
            startingFractionalPremiumEndsAt: j,
            customCTAType: U
        } = e,
        {
            isDisplayingWowMomentConfirmation: w,
            customCheckoutFlow: O,
            isPremiumGroupPurchase: D
        } = (0, H.P5)(),
        {
            theme: S
        } = (0, c.wRf)(),
        y = (0, C.bG)([g.A], () => null != M ? g.A.get(M.id) : null),
        F = (0, N.b2)(j);
    i.useEffect(() => {
        if (null == M || null != y) return;
        let {
            applicationId: e,
            id: t
        } = M;
        (0, d.EX)(e, t).catch(I.FXj)
    }, [M, y]);
    let q = e => D ? P.intl.formatToPlainString(T.default.pDiwHe, {
        premiumGroupProductName: (0, _.DP)(),
        totalSeats: _.LM
    }) : e.skuId === f.pe.TIER_0 ? I.NcF.has(k ?? I.hes.UNKNOWN) ? P.intl.format(P.t.o6hBiR, {}) : P.intl.string(P.t["AGf/ye"]) : e.skuId === f.pe.TIER_1 ? I.NcF.has(k ?? I.hes.UNKNOWN) ? P.intl.format(P.t.o6hBiR, {}) : P.intl.string(P.t.knvOVz) : I.NcF.has(k ?? I.hes.UNKNOWN) ? P.intl.format(P.t.A4THYt, {}) : P.intl.string(P.t.aTUr3Z);
    if ("deeplink_to_desktop_app" === U) t = (0, l.jsx)("div", {
        className: R.Qq,
        children: (0, l.jsxs)("p", {
            children: [P.intl.string(P.t.bIVRSQ), " ", P.intl.string(P.t["0UJqOy"])]
        })
    });
    else if (null != y) t = (0, l.jsx)("div", {
        className: R.Qq,
        children: P.intl.format(P.t["tsQOs+"], {
            skuName: y.name
        })
    });
    else if (F && !o) {
        let e = u.A.get(n);
        r()(null != e, "Missing plan"), e.skuId === f.pe.TIER_0 ? t = (0, l.jsxs)("div", {
            className: R.Qq,
            children: [(0, l.jsx)("p", {
                children: P.intl.string(P.t["L9lcG/"])
            }), (0, l.jsx)("p", {
                children: P.intl.format(P.t.EoDFuN, {
                    helpCenterLink: h.A.getArticleURL(I.MVz.FRACTIONAL_PREMIUM_ABOUT)
                })
            })]
        }) : (e.skuId === f.pe.TIER_1 || e.skuId === f.pe.TIER_2) && (t = (0, l.jsxs)("div", {
            className: R.Qq,
            children: [(0, l.jsx)("p", {
                children: P.intl.string(P.t.UPpbP3)
            }), (0, l.jsx)("p", {
                children: P.intl.format(P.t.EoDFuN, {
                    helpCenterLink: h.A.getArticleURL(I.MVz.FRACTIONAL_PREMIUM_ABOUT)
                })
            })]
        }))
    } else if (null != a) t = (0, l.jsx)(Z, {
        planId: n,
        startingPremiumSubscriptionPlanId: a
    });
    else if (null != v) {
        let e = u.A.get(n);
        r()(null != e, "Missing plan"), t = (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)("div", {
                className: R.Qq,
                children: q(e)
            }), (0, l.jsx)("div", {
                className: R.Qq,
                children: P.intl.format(P.t["6aZ0NR"], {
                    guildName: v.name
                })
            })]
        })
    } else {
        let e = u.A.get(n);
        r()(null != e, "Missing plan"), t = (0, l.jsx)("div", {
            className: R.Qq,
            children: q(e)
        })
    }
    let G = p.Ay.getPremiumType(n);
    r()(null != G, "premium type should not be null in purchase confirmation");
    let [K, Q] = i.useState(!1), W = i.useCallback(() => {
        null != L && (L(), O === x.uH.APPLE_PAYMENT_LINK && Q(!0))
    }, [L, O]);
    s = D ? P.intl.string(T.default.clIveA) : "deeplink_to_desktop_app" === U || O === x.uH.APPLE_PAYMENT_LINK ? P.intl.string(P.t.qXV2XU) : null != y ? P.intl.formatToPlainString(P.t["1qGgm4"], {
        skuName: y.name
    }) : o ? P.intl.string(P.t.QJ9EyM) : null != v ? P.intl.string(P.t.ta3cXY) : P.intl.string(P.t.TkTvBz);
    let Y = () => I.NcF.has(k ?? I.hes.UNKNOWN) ? A.Ay.Types.PREMIUM_PAYMENT_STARTED : null != a ? A.Ay.Types.PREMIUM_UPDATED : A.Ay.Types.PREMIUM_ACTIVATED;
    return w ? (0, l.jsx)(E.A, {
        type: Y(),
        text: t,
        buttonText: s,
        hideClose: b,
        onClose: W,
        buttonLoading: K
    }) : (0, l.jsxs)("div", {
        className: R.EL,
        children: [(0, l.jsx)(m.A, {
            type: Y(),
            theme: S
        }), t, b ? null : (0, l.jsx)("div", {
            "data-button-hoisted-classname-wrapper": !0,
            className: R.x6,
            children: (0, l.jsx)(c.Button, {
                variant: "primary",
                text: s,
                onClick: W,
                loading: K
            })
        })]
    })
}

function k(e) {
    let {
        planId: t,
        onClose: s
    } = e, {
        giftRecipient: n,
        selectedGiftStyle: i,
        hasSentMessage: a,
        giftMessageError: c,
        isSendingMessage: d
    } = (0, L.Pv)(), H = (0, C.bG)([u.A], () => u.A.get(t));
    r()(null != H, "Missing plan");
    let g = (0, C.bG)([o.A], () => o.A.getGiftCode(H.skuId));
    return (0, l.jsx)(M.A, {
        giftCode: g,
        subscriptionPlan: H,
        onClose: s,
        selectedGiftStyle: i,
        hasSentMessage: a,
        giftRecipient: n,
        giftMessageError: c,
        isSendingMessage: d
    })
}