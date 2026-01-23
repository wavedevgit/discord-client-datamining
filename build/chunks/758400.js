/** Chunk was on web.js **/
/** chunk id: 758400, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => eo,
    Hy: () => ea,
    Sb: () => es,
    TC: () => er
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(284009),
    l = n.n(o),
    c = n(989349),
    u = n.n(c),
    d = n(607399),
    f = n(311907),
    p = n(554146),
    _ = n(827734),
    h = n(397927),
    m = n(73153),
    g = n(793574),
    E = n(688810),
    y = n(701273),
    b = n(531260),
    O = n(235986),
    v = n(826673),
    A = n(769015),
    I = n(532794),
    S = n(780964),
    T = n(840065),
    C = n(832946),
    N = n(287809),
    w = n(954571),
    R = n(975571),
    P = n(927578),
    D = n(83617),
    x = n(543767),
    L = n(526292),
    j = n(155984),
    M = n(131168),
    k = n(726532),
    U = n(947418),
    G = n(687944),
    V = n(327479),
    F = n(538511),
    B = n(420139),
    H = n(434395),
    Y = n(136787),
    W = n(788868),
    K = n(652215),
    z = n(601107),
    q = n(49999),
    Z = n(985018),
    X = n(595654);
let Q = "app";

function J(e) {
    let t, {
            subscription: n,
            renewalInvoicePreview: i,
            fractionalPremiumInfo: a,
            fromStandaloneBillingPage: o = !0,
            className: c
        } = e,
        u = (0, f.bG)([N.default], () => {
            let e = N.default.getCurrentUser();
            return l()(null != e, "GuildBoostingHeader: currentUser cannot be undefined"), e
        });
    if (0 === (0, P.bx)(n.additionalPlans)) return null;
    let {
        status: p
    } = n, _ = (0, P.$k)(n);
    if (_) t = X.v2;
    else switch (p) {
        case K.Dmq.PAST_DUE:
        case K.Dmq.ACCOUNT_HOLD:
        case K.Dmq.BILLING_RETRY:
            t = X.P7;
            break;
        case K.Dmq.PAUSE_PENDING:
        case K.Dmq.PAUSED:
            t = n.pauseReason !== z.qf.FRACTIONAL_PREMIUM ? X.C7 : X.wG;
            break;
        default:
            t = X.wG
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)("div", {
            className: s()(t, c),
            children: [(0, r.jsx)("div", {
                className: X.Kq
            }), (0, r.jsx)("div", {
                className: X.OL
            }), (0, r.jsxs)("div", {
                className: X.eC,
                children: [(0, r.jsx)("div", {
                    className: s()(X.Ab, {
                        [X.aD]: _
                    })
                }), (0, r.jsx)("div", {
                    children: (0, P.Uf)({
                        subscription: n,
                        renewalInvoicePreview: i,
                        user: u,
                        fractionalPremiumInfo: a
                    })
                })]
            }), o && (0, r.jsx)(V.A, {
                onClick: () => (0, T.openUserSettings)(S.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
                    section: K.nc_.GUILD_BOOSTING
                }),
                text: Z.intl.string(Z.t["NQ5g/U"])
            })]
        }), !o && (0, r.jsx)(h.Text, {
            className: X.yW,
            variant: "text-sm/normal",
            children: Z.intl.format(d.Fr ? Z.t.uxYBEa : Z.t.k6haR9, {
                openAppHook: () => (0, y.A)(Q)
            })
        })]
    })
}

function $() {
    return i.useEffect(() => {
        w.default.track(K.HAw.TOOLTIP_VIEWED, {
            type: "subscription_settings_missing_payment_method"
        })
    }, []), (0, r.jsxs)("div", {
        className: X.Zz,
        children: [(0, r.jsx)(h.EpV, {
            size: "custom",
            width: 20,
            height: 20,
            className: X.Sh,
            color: _.A.unsafe_rawColors.YELLOW_260.css
        }), (0, r.jsx)(h.Text, {
            className: X.Cy,
            variant: "text-sm/normal",
            children: Z.intl.string(Z.t.xFHEMa)
        })]
    })
}

function ee() {
    return i.useEffect(() => {
        w.default.track(K.HAw.TOOLTIP_VIEWED, {
            type: "subscription_settings_invalid_payment_method"
        })
    }, []), (0, r.jsxs)("div", {
        className: X.Zz,
        children: [(0, r.jsx)(h.EpV, {
            size: "custom",
            width: 20,
            height: 20,
            className: X.Sh,
            color: _.A.unsafe_rawColors.RED_360.css
        }), (0, r.jsx)(h.Text, {
            className: X.Cy,
            variant: "text-sm/normal",
            children: Z.intl.string(Z.t["j+nuQZ"])
        })]
    })
}

function et(e) {
    let {
        daysPastDue: t,
        subscription: n,
        openInvoiceId: a
    } = e, {
        analyticsLocations: s
    } = (0, E.Ay)(g.A.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER);
    return i.useEffect(() => {
        w.default.track(K.HAw.TOOLTIP_VIEWED, {
            type: "subscription_settings_invalid_payment_method"
        })
    }, []), (0, r.jsxs)("div", {
        className: X.Zz,
        children: [(0, r.jsx)(h.EpV, {
            size: "custom",
            width: 20,
            height: 20,
            className: X.Sh,
            color: _.A.unsafe_rawColors.YELLOW_260.css
        }), (0, r.jsx)(h.Text, {
            className: X.Cy,
            variant: "text-sm/normal",
            children: Z.intl.format(Z.t["0nbf/G"], {
                daysPastDue: t,
                paymentModalRedirect: () => {
                    (0, I.A)({
                        initialPlanId: n.planIdFromItems,
                        openInvoiceId: a,
                        analyticsLocations: s
                    })
                }
            })
        })]
    })
}

function en(e) {
    let {
        subscription: t,
        renewalInvoicePreview: n,
        openInvoice: i,
        className: a,
        fractionalPremiumInfo: o
    } = e;
    return (0, r.jsxs)("div", {
        className: s()(X.KF, a),
        children: [(0, r.jsx)(h.Heading, {
            variant: "heading-md/semibold",
            className: X.QL,
            children: Z.intl.string(Z.t.KXQjfc)
        }), (0, r.jsx)("div", {
            children: P.Ay.getBillingInformationString(t, n, i, !1, o)
        })]
    })
}

function er() {
    let e = (0, f.bG)([N.default], () => N.default.getCurrentUser()),
        t = null != e && e.isPremiumGroupMember();
    return (0, r.jsxs)("div", {
        children: [(0, r.jsx)(h.Heading, {
            variant: "heading-lg/semibold",
            className: X.Gf,
            children: Z.intl.string(Z.t["/gs+Pz"])
        }), (0, r.jsx)("p", {
            className: X.yV,
            children: Z.intl.string(Z.t.D8UpUo)
        }), !t && (0, r.jsx)(h.ZpM, {
            className: X.wb,
            type: h.ZpM.Types.CUSTOM,
            children: (0, r.jsxs)(O.A, {
                align: O.A.Align.CENTER,
                children: [(0, r.jsx)(A.A, {
                    game: null,
                    size: A.M.SMALL,
                    className: X.pV
                }), (0, r.jsx)("span", {
                    className: X.O,
                    children: Z.intl.string(Z.t.xCRgr1)
                })]
            })
        }), t && (0, r.jsx)(k.i, {
            currentUser: e
        })]
    })
}

function ei(e) {
    let {
        subscription: t,
        analyticsLocation: n,
        paymentSource: i,
        busy: a,
        fromStandaloneBillingPage: o,
        showInvalidPaymentMethod: l,
        showNoPaymentMethod: c,
        fetchedCurrentInvoicePreview: u,
        fetchedRenewalInvoicePreview: d,
        fetchedOpenInvoice: f,
        isPremiumGroup: p
    } = e, {
        analyticsLocations: _
    } = (0, E.Ay)(g.A.SUBSCRIPTION_DETAILS), m = null != u ? {} : {
        subscriptionId: t.id,
        renewal: !0,
        analyticsLocations: _,
        analyticsLocation: n
    }, [y] = (0, x.Kq)(m);
    y = null != u ? u : y;
    let O = null != d ? {} : {
            subscriptionId: t.id,
            renewal: !0,
            applyEntitlements: !0,
            analyticsLocations: _,
            analyticsLocation: n
        },
        [v] = (0, x.Kq)(O);
    v = null != d ? d : v;
    let A = (0, b.A)(),
        I = (0, M.p)(),
        S = (0, L.nf)(),
        T = P.Ay.isBaseSubscriptionCanceled(t),
        C = (0, U.v)(t, i);
    if (null == y || null == v) return (0, r.jsx)(h.y$y, {});
    let N = C ? (0, L.Bv)(v) : null,
        w = null != N || null != S && (S.discountId === W.q || S.discountId === W.EG),
        R = C && (T && null != I || !T && w) ? (0, r.jsx)(G.A, {
            subscription: t,
            invoicePreview: v,
            paymentSource: i,
            discountOffer: I,
            renewalChurnDiscountInfo: N,
            discountInfo: S,
            isLoading: a,
            analyticsLocation: n
        }) : (0, r.jsx)(F.A, {
            subscription: t,
            currentInvoicePreview: y,
            renewalInvoicePreview: v,
            paymentSource: i,
            busy: a,
            analyticsLocation: n
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)("div", {
            className: X.fj,
            children: [!p && R, (0, r.jsx)(J, {
                subscription: t,
                renewalInvoicePreview: y,
                fromStandaloneBillingPage: o,
                className: X.td,
                fractionalPremiumInfo: A
            })]
        }), (0, r.jsx)("div", {
            children: (0, r.jsx)(h.nVY, {
                label: Z.intl.string(Z.t.Sb6wI1),
                children: (0, r.jsxs)("div", {
                    className: X.zH,
                    children: [(0, r.jsx)(en, {
                        subscription: t,
                        renewalInvoicePreview: v,
                        className: X.g4,
                        fractionalPremiumInfo: A,
                        openInvoice: f
                    }), (0, r.jsx)("div", {
                        className: s()(X.g4, {
                            [X.sE]: l
                        }),
                        children: (0, r.jsx)(h.D0$, {
                            label: t.isPurchasedExternally && null != t.paymentGateway ? Z.intl.formatToPlainString(Z.t["rTk9v/"], {
                                paymentGatewayName: K.qmC[t.paymentGateway]
                            }) : Z.intl.string(Z.t.iRzXKd),
                            children: (0, r.jsx)(B.A, {
                                subscription: t,
                                onPaymentSourceAdded: D.c_,
                                highlightAddPaymentMethodButton: c || l,
                                analyticsLocation: n,
                                currentInvoicePreview: y,
                                dropdownClassName: X.sp
                            })
                        })
                    })]
                })
            })
        })]
    })
}
let ea = new Set([K.Dmq.ACTIVE, K.Dmq.PAST_DUE, K.Dmq.CANCELED, K.Dmq.PAUSE_PENDING, K.Dmq.PAUSED]);

function es() {
    return i.useEffect(() => {
        w.default.track(K.HAw.TOOLTIP_VIEWED, {
            type: "subscription_settings_duplicate_subscriptions"
        })
    }, []), (0, r.jsxs)("div", {
        className: X.oU,
        children: [(0, r.jsx)(h.EpV, {
            size: "custom",
            width: 20,
            height: 20,
            color: _.A.unsafe_rawColors.RED_360.css
        }), (0, r.jsx)(h.Text, {
            className: X.dk,
            variant: "text-sm/normal",
            children: Z.intl.format(Z.t["6eXiiC"], {
                helpCenterLink: R.A.getArticleURL(K.MVz.NITRO)
            })
        })]
    })
}

function eo(e) {
    var t;
    let n, {
        subscription: a,
        subscriptions: s,
        paymentSource: o,
        busy: l,
        fromStandaloneBillingPage: c = !0,
        analyticsLocation: d,
        shouldRefetchInvoicesOnSubscriptionUpdate: y
    } = e;
    null != s && null != s[0] && (a = s[0]);
    let b = (0, f.bG)([N.default], () => N.default.getCurrentUser()),
        {
            analyticsLocations: O
        } = (0, E.Ay)(g.A.SUBSCRIPTION_DETAILS),
        A = (0, M.p)(),
        I = null != s ? s.slice(1) : [],
        [S, T] = i.useState(0);
    i.useEffect(() => {
        if (!y) return;
        let e = e => {
            e.subscription.id === a.id && T(e => e + 1)
        };
        return m.h.subscribe("BILLING_SUBSCRIPTION_UPDATE_SUCCESS", e), () => {
            m.h.unsubscribe("BILLING_SUBSCRIPTION_UPDATE_SUCCESS", e)
        }
    }, [a.id, y]);
    let [w] = (0, x.Kq)({
        subscriptionId: a.id,
        renewal: !0,
        analyticsLocations: O,
        analyticsLocation: d,
        fetchKey: S
    }), [P] = (0, x.Kq)({
        subscriptionId: a.id,
        renewal: !0,
        applyEntitlements: !0,
        analyticsLocations: O,
        analyticsLocation: d,
        userDiscountOfferId: null == A ? void 0 : A.id,
        fetchKey: S
    }), D = (0, Y.V)(), L = null == o ? void 0 : o.invalid, U = (0, f.bG)([N.default], () => {
        var e;
        return null == (e = N.default.getCurrentUser()) ? void 0 : e.hasFreePremium()
    }), G = u()(a.currentPeriodEnd), V = null != a.paymentSourceId, F = null != (t = null == P ? void 0 : P.total) ? t : 0, B = !V && F > 0 && (7 >= G.diff(u()(), "days") || a.status === K.Dmq.PAST_DUE) && !U && !a.isPurchasedExternally, W = L && a.status === K.Dmq.PAST_DUE && !U && !a.isPurchasedExternally, z = (0, j.l)(), Q = !U && z, J = (null == a ? void 0 : a.status) === K.Dmq.PAST_DUE, en = J ? u()().diff(u()(a.currentPeriodStart), "days") : 0, er = null != b && b.isPremiumGroupPrimary(), ea = a.hasAnyPremiumGroup, [es] = (0, x.C8)({
        subscriptionId: a.id,
        preventFetch: !(Q || J)
    });
    return null == w || null == P ? (0, r.jsx)(h.y$y, {}) : (null != a.renewalMutations && (a.renewalMutations.planId !== a.planId && !(0, C.m1)(a.renewalMutations.planId) || a.hasExternalPlanChange) && (n = (0, r.jsx)(H.A, {
        subscription: a,
        renewalMutations: a.renewalMutations,
        className: X.Il,
        analyticsLocation: d
    })), (0, r.jsxs)(h.nVY, {
        label: Z.intl.string(Z.t["/gs+Pz"]),
        description: Z.intl.string(Z.t.D8UpUo),
        children: [B ? (0, r.jsx)($, {}) : null, W ? (0, r.jsx)(ee, {}) : null, Q && null != es ? (0, r.jsx)(et, {
            daysPastDue: en,
            subscription: a,
            openInvoiceId: es.id
        }) : null, er && ea && (0, r.jsx)(k.j, {
            subscription: a,
            analyticsLocations: O
        }), n, D && (0, r.jsx)(h.po8, {
            messageType: h.YCn.INFO,
            action: (0, r.jsx)(h.DUT, {
                onClick: () => {
                    (0, v.Dr)(p.M.PREMIUM_SETTINGS_SUBSCRIPTION_INFO_NOTICE, {
                        dismissAction: q.i.USER_DISMISS
                    })
                },
                className: X.dn,
                children: (0, r.jsx)(h.PGe, {
                    size: "sm",
                    color: _.A.colors.ICON_STRONG
                })
            }),
            children: Z.intl.format(Z.t.K4QorK, {
                helpdeskArticle: R.A.getArticleURL(K.MVz.BILLING)
            })
        }), (0, r.jsxs)("div", {
            children: [(0, r.jsx)("div", {
                className: I.length > 0 ? X.HZ : X.__invalid_singleSubscription,
                children: (0, r.jsx)(ei, {
                    subscription: a,
                    analyticsLocation: d,
                    paymentSource: o,
                    busy: l,
                    fromStandaloneBillingPage: c,
                    showNoPaymentMethod: B,
                    showInvalidPaymentMethod: W,
                    fetchedCurrentInvoicePreview: w,
                    fetchedRenewalInvoicePreview: P,
                    fetchedOpenInvoice: es,
                    isPremiumGroup: er
                })
            }), I.map((e, t) => (0, r.jsxs)("div", {
                className: X.HZ,
                children: [(0, r.jsx)(h.Heading, {
                    variant: "heading-md/semibold",
                    className: X.dd,
                    children: "Duplicate Subscriptions"
                }), (0, r.jsx)(ei, {
                    subscription: e,
                    analyticsLocation: d,
                    paymentSource: o,
                    busy: l,
                    fromStandaloneBillingPage: c,
                    showNoPaymentMethod: B,
                    showInvalidPaymentMethod: W,
                    fetchedCurrentInvoicePreview: null,
                    fetchedRenewalInvoicePreview: null,
                    fetchedOpenInvoice: null,
                    isPremiumGroup: !1
                })]
            }, t))]
        })]
    }))
}