/** chunk id: 758400, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ay: () => es,
    Hy: () => ei,
    Sb: () => el,
    TC: () => en
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(284009),
    o = n.n(a),
    c = n(989349),
    d = n.n(c),
    u = n(607399),
    _ = n(311907),
    p = n(554146),
    m = n(827734),
    g = n(397927),
    A = n(73153),
    f = n(793574),
    b = n(688810),
    h = n(701273),
    E = n(531260),
    O = n(235986),
    x = n(826673),
    C = n(769015),
    S = n(532794),
    T = n(780964),
    I = n(840065),
    N = n(832946),
    j = n(287809),
    y = n(954571),
    v = n(975571),
    P = n(927578),
    R = n(83617),
    D = n(543767),
    L = n(526292),
    w = n(155984),
    M = n(131168),
    G = n(726532),
    U = n(947418),
    k = n(687944),
    B = n(327479),
    H = n(538511),
    V = n(420139),
    F = n(434395),
    Y = n(136787),
    W = n(788868),
    K = n(652215),
    z = n(601107),
    Z = n(49999),
    X = n(985018),
    q = n(595654);

function J(e) {
    let t, {
            subscription: n,
            renewalInvoicePreview: i,
            fractionalPremiumInfo: l,
            fromStandaloneBillingPage: a = !0,
            className: c
        } = e,
        d = (0, _.bG)([j.default], () => {
            let e = j.default.getCurrentUser();
            return o()(null != e, "GuildBoostingHeader: currentUser cannot be undefined"), e
        });
    if (0 === (0, P.bx)(n.additionalPlans)) return null;
    let {
        status: p
    } = n, m = (0, P.$k)(n);
    if (m) t = q.v2;
    else switch (p) {
        case K.Dmq.PAST_DUE:
        case K.Dmq.ACCOUNT_HOLD:
        case K.Dmq.BILLING_RETRY:
            t = q.P7;
            break;
        case K.Dmq.PAUSE_PENDING:
        case K.Dmq.PAUSED:
            t = n.pauseReason !== z.qf.FRACTIONAL_PREMIUM ? q.C7 : q.wG;
            break;
        default:
            t = q.wG
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)("div", {
            className: s()(t, c),
            children: [(0, r.jsx)("div", {
                className: q.Kq
            }), (0, r.jsx)("div", {
                className: q.OL
            }), (0, r.jsxs)("div", {
                className: q.eC,
                children: [(0, r.jsx)("div", {
                    className: s()(q.Ab, {
                        [q.aD]: m
                    })
                }), (0, r.jsx)("div", {
                    children: (0, P.Uf)({
                        subscription: n,
                        renewalInvoicePreview: i,
                        user: d,
                        fractionalPremiumInfo: l
                    })
                })]
            }), a && (0, r.jsx)(B.A, {
                onClick: () => (0, I.openUserSettings)(T.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
                    section: K.nc_.GUILD_BOOSTING
                }),
                text: X.intl.string(X.t["NQ5g/U"])
            })]
        }), !a && (0, r.jsx)(g.Text, {
            className: q.yW,
            variant: "text-sm/normal",
            children: X.intl.format(u.Fr ? X.t.uxYBEa : X.t.k6haR9, {
                openAppHook: () => (0, h.A)("app")
            })
        })]
    })
}

function Q() {
    return i.useEffect(() => {
        y.default.track(K.HAw.TOOLTIP_VIEWED, {
            type: "subscription_settings_missing_payment_method"
        })
    }, []), (0, r.jsxs)("div", {
        className: q.Zz,
        children: [(0, r.jsx)(g.EpV, {
            size: "custom",
            width: 20,
            height: 20,
            className: q.Sh,
            color: m.A.unsafe_rawColors.YELLOW_260.css
        }), (0, r.jsx)(g.Text, {
            className: q.Cy,
            variant: "text-sm/normal",
            children: X.intl.string(X.t.xFHEMa)
        })]
    })
}

function $() {
    return i.useEffect(() => {
        y.default.track(K.HAw.TOOLTIP_VIEWED, {
            type: "subscription_settings_invalid_payment_method"
        })
    }, []), (0, r.jsxs)("div", {
        className: q.Zz,
        children: [(0, r.jsx)(g.EpV, {
            size: "custom",
            width: 20,
            height: 20,
            className: q.Sh,
            color: m.A.unsafe_rawColors.RED_360.css
        }), (0, r.jsx)(g.Text, {
            className: q.Cy,
            variant: "text-sm/normal",
            children: X.intl.string(X.t["j+nuQZ"])
        })]
    })
}

function ee(e) {
    let {
        daysPastDue: t,
        subscription: n,
        openInvoiceId: l
    } = e, {
        analyticsLocations: s
    } = (0, b.Ay)(f.A.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER);
    return i.useEffect(() => {
        y.default.track(K.HAw.TOOLTIP_VIEWED, {
            type: "subscription_settings_invalid_payment_method"
        })
    }, []), (0, r.jsxs)("div", {
        className: q.Zz,
        children: [(0, r.jsx)(g.EpV, {
            size: "custom",
            width: 20,
            height: 20,
            className: q.Sh,
            color: m.A.unsafe_rawColors.YELLOW_260.css
        }), (0, r.jsx)(g.Text, {
            className: q.Cy,
            variant: "text-sm/normal",
            children: X.intl.format(X.t["0nbf/G"], {
                daysPastDue: t,
                paymentModalRedirect: () => {
                    (0, S.A)({
                        initialPlanId: n.planIdFromItems,
                        openInvoiceId: l,
                        analyticsLocations: s
                    })
                }
            })
        })]
    })
}

function et(e) {
    let {
        subscription: t,
        renewalInvoicePreview: n,
        openInvoice: i,
        className: l,
        fractionalPremiumInfo: a
    } = e;
    return (0, r.jsxs)("div", {
        className: s()(q.KF, l),
        children: [(0, r.jsx)(g.Heading, {
            variant: "heading-md/semibold",
            className: q.QL,
            children: X.intl.string(X.t.KXQjfc)
        }), (0, r.jsx)("div", {
            children: P.Ay.getBillingInformationString(t, n, i, !1, a)
        })]
    })
}

function en() {
    let e = (0, _.bG)([j.default], () => j.default.getCurrentUser()),
        t = null != e && e.isPremiumGroupMember();
    return (0, r.jsxs)("div", {
        children: [(0, r.jsx)(g.Heading, {
            variant: "heading-lg/semibold",
            className: q.Gf,
            children: X.intl.string(X.t["/gs+Pz"])
        }), (0, r.jsx)("p", {
            className: q.yV,
            children: X.intl.string(X.t.D8UpUo)
        }), !t && (0, r.jsx)(g.ZpM, {
            className: q.wb,
            type: g.ZpM.Types.CUSTOM,
            children: (0, r.jsxs)(O.A, {
                align: O.A.Align.CENTER,
                children: [(0, r.jsx)(C.A, {
                    game: null,
                    size: C.M.SMALL,
                    className: q.pV
                }), (0, r.jsx)("span", {
                    className: q.O,
                    children: X.intl.string(X.t.xCRgr1)
                })]
            })
        }), t && (0, r.jsx)(G.i, {
            currentUser: e
        })]
    })
}

function er(e) {
    let {
        subscription: t,
        analyticsLocation: n,
        paymentSource: i,
        busy: l,
        fromStandaloneBillingPage: a,
        showInvalidPaymentMethod: o,
        showNoPaymentMethod: c,
        fetchedCurrentInvoicePreview: d,
        fetchedRenewalInvoicePreview: u,
        fetchedOpenInvoice: _,
        isPremiumGroup: p
    } = e, {
        analyticsLocations: m
    } = (0, b.Ay)(f.A.SUBSCRIPTION_DETAILS), A = null != d ? {} : {
        subscriptionId: t.id,
        renewal: !0,
        analyticsLocations: m,
        analyticsLocation: n
    }, [h] = (0, D.Kq)(A);
    h = null != d ? d : h;
    let O = null != u ? {} : {
            subscriptionId: t.id,
            renewal: !0,
            applyEntitlements: !0,
            analyticsLocations: m,
            analyticsLocation: n
        },
        [x] = (0, D.Kq)(O);
    x = null != u ? u : x;
    let C = (0, E.A)(),
        S = (0, M.p)(),
        T = (0, L.nf)(),
        I = P.Ay.isBaseSubscriptionCanceled(t),
        N = (0, U.v)(t, i);
    if (null == h || null == x) return (0, r.jsx)(g.y$y, {});
    let j = N ? (0, L.Bv)(x) : null,
        y = null != j || null != T && (T.discountId === W.q || T.discountId === W.EG),
        v = N && (I && null != S || !I && y) ? (0, r.jsx)(k.A, {
            subscription: t,
            invoicePreview: x,
            paymentSource: i,
            discountOffer: S,
            renewalChurnDiscountInfo: j,
            discountInfo: T,
            isLoading: l,
            analyticsLocation: n
        }) : (0, r.jsx)(H.A, {
            subscription: t,
            currentInvoicePreview: h,
            renewalInvoicePreview: x,
            paymentSource: i,
            busy: l,
            analyticsLocation: n
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)("div", {
            className: q.fj,
            children: [!p && v, (0, r.jsx)(J, {
                subscription: t,
                renewalInvoicePreview: h,
                fromStandaloneBillingPage: a,
                className: q.td,
                fractionalPremiumInfo: C
            })]
        }), (0, r.jsx)("div", {
            children: (0, r.jsx)(g.nVY, {
                label: X.intl.string(X.t.Sb6wI1),
                children: (0, r.jsxs)("div", {
                    className: q.zH,
                    children: [(0, r.jsx)(et, {
                        subscription: t,
                        renewalInvoicePreview: x,
                        className: q.g4,
                        fractionalPremiumInfo: C,
                        openInvoice: _
                    }), (0, r.jsx)("div", {
                        className: s()(q.g4, {
                            [q.sE]: o
                        }),
                        children: (0, r.jsx)(g.D0$, {
                            label: t.isPurchasedExternally && null != t.paymentGateway ? X.intl.formatToPlainString(X.t["rTk9v/"], {
                                paymentGatewayName: K.qmC[t.paymentGateway]
                            }) : X.intl.string(X.t.iRzXKd),
                            children: (0, r.jsx)(V.A, {
                                subscription: t,
                                onPaymentSourceAdded: R.c_,
                                highlightAddPaymentMethodButton: c || o,
                                analyticsLocation: n,
                                currentInvoicePreview: h,
                                dropdownClassName: q.sp
                            })
                        })
                    })]
                })
            })
        })]
    })
}
let ei = new Set([K.Dmq.ACTIVE, K.Dmq.PAST_DUE, K.Dmq.CANCELED, K.Dmq.PAUSE_PENDING, K.Dmq.PAUSED]);

function el() {
    return i.useEffect(() => {
        y.default.track(K.HAw.TOOLTIP_VIEWED, {
            type: "subscription_settings_duplicate_subscriptions"
        })
    }, []), (0, r.jsxs)("div", {
        className: q.oU,
        children: [(0, r.jsx)(g.EpV, {
            size: "custom",
            width: 20,
            height: 20,
            color: m.A.unsafe_rawColors.RED_360.css
        }), (0, r.jsx)(g.Text, {
            className: q.dk,
            variant: "text-sm/normal",
            children: X.intl.format(X.t["6eXiiC"], {
                helpCenterLink: v.A.getArticleURL(K.MVz.NITRO)
            })
        })]
    })
}

function es(e) {
    var t;
    let n, {
        subscription: l,
        subscriptions: s,
        paymentSource: a,
        busy: o,
        fromStandaloneBillingPage: c = !0,
        analyticsLocation: u,
        shouldRefetchInvoicesOnSubscriptionUpdate: h
    } = e;
    null != s && null != s[0] && (l = s[0]);
    let E = (0, _.bG)([j.default], () => j.default.getCurrentUser()),
        {
            analyticsLocations: O
        } = (0, b.Ay)(f.A.SUBSCRIPTION_DETAILS),
        C = (0, M.p)(),
        S = null != s ? s.slice(1) : [],
        [T, I] = i.useState(0);
    i.useEffect(() => {
        if (!h) return;
        let e = e => {
            e.subscription.id === l.id && I(e => e + 1)
        };
        return A.h.subscribe("BILLING_SUBSCRIPTION_UPDATE_SUCCESS", e), () => {
            A.h.unsubscribe("BILLING_SUBSCRIPTION_UPDATE_SUCCESS", e)
        }
    }, [l.id, h]);
    let [y] = (0, D.Kq)({
        subscriptionId: l.id,
        renewal: !0,
        analyticsLocations: O,
        analyticsLocation: u,
        fetchKey: T
    }), [P] = (0, D.Kq)({
        subscriptionId: l.id,
        renewal: !0,
        applyEntitlements: !0,
        analyticsLocations: O,
        analyticsLocation: u,
        userDiscountOfferId: null == C ? void 0 : C.id,
        fetchKey: T
    }), R = (0, Y.V)(), L = null == a ? void 0 : a.invalid, U = (0, _.bG)([j.default], () => {
        var e;
        return null == (e = j.default.getCurrentUser()) ? void 0 : e.hasFreePremium()
    }), k = d()(l.currentPeriodEnd), B = null != l.paymentSourceId, H = null != (t = null == P ? void 0 : P.total) ? t : 0, V = !B && H > 0 && (7 >= k.diff(d()(), "days") || l.status === K.Dmq.PAST_DUE) && !U && !l.isPurchasedExternally, W = L && l.status === K.Dmq.PAST_DUE && !U && !l.isPurchasedExternally, z = (0, w.l)(), J = !U && z, et = (null == l ? void 0 : l.status) === K.Dmq.PAST_DUE, en = et ? d()().diff(d()(l.currentPeriodStart), "days") : 0, ei = null != E && E.isPremiumGroupPrimary(), el = l.hasAnyPremiumGroup, [es] = (0, D.C8)({
        subscriptionId: l.id,
        preventFetch: !(J || et)
    });
    return null == y || null == P ? (0, r.jsx)(g.y$y, {}) : (null != l.renewalMutations && (l.renewalMutations.planId !== l.planId && !(0, N.m1)(l.renewalMutations.planId) || l.hasExternalPlanChange) && (n = (0, r.jsx)(F.A, {
        subscription: l,
        renewalMutations: l.renewalMutations,
        className: q.Il,
        analyticsLocation: u
    })), (0, r.jsxs)(g.nVY, {
        label: X.intl.string(X.t["/gs+Pz"]),
        description: X.intl.string(X.t.D8UpUo),
        children: [V ? (0, r.jsx)(Q, {}) : null, W ? (0, r.jsx)($, {}) : null, J && null != es ? (0, r.jsx)(ee, {
            daysPastDue: en,
            subscription: l,
            openInvoiceId: es.id
        }) : null, ei && el && (0, r.jsx)(G.j, {
            subscription: l,
            analyticsLocations: O
        }), n, R && (0, r.jsx)(g.po8, {
            messageType: g.YCn.INFO,
            action: (0, r.jsx)(g.DUT, {
                onClick: () => {
                    (0, x.Dr)(p.M.PREMIUM_SETTINGS_SUBSCRIPTION_INFO_NOTICE, {
                        dismissAction: Z.i.USER_DISMISS
                    })
                },
                className: q.dn,
                children: (0, r.jsx)(g.PGe, {
                    size: "sm",
                    color: m.A.colors.ICON_STRONG
                })
            }),
            children: X.intl.format(X.t.K4QorK, {
                helpdeskArticle: v.A.getArticleURL(K.MVz.BILLING)
            })
        }), (0, r.jsxs)("div", {
            children: [(0, r.jsx)("div", {
                className: S.length > 0 ? q.HZ : q.__invalid_singleSubscription,
                children: (0, r.jsx)(er, {
                    subscription: l,
                    analyticsLocation: u,
                    paymentSource: a,
                    busy: o,
                    fromStandaloneBillingPage: c,
                    showNoPaymentMethod: V,
                    showInvalidPaymentMethod: W,
                    fetchedCurrentInvoicePreview: y,
                    fetchedRenewalInvoicePreview: P,
                    fetchedOpenInvoice: es,
                    isPremiumGroup: ei
                })
            }), S.map((e, t) => (0, r.jsxs)("div", {
                className: q.HZ,
                children: [(0, r.jsx)(g.Heading, {
                    variant: "heading-md/semibold",
                    className: q.dd,
                    children: "Duplicate Subscriptions"
                }), (0, r.jsx)(er, {
                    subscription: e,
                    analyticsLocation: u,
                    paymentSource: a,
                    busy: o,
                    fromStandaloneBillingPage: c,
                    showNoPaymentMethod: V,
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