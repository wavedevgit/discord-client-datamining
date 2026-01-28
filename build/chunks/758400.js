/** Chunk was on 5606 **/
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
    p = n(311907),
    _ = n(554146),
    m = n(827734),
    g = n(397927),
    f = n(73153),
    b = n(793574),
    h = n(688810),
    A = n(701273),
    E = n(531260),
    x = n(235986),
    O = n(826673),
    C = n(769015),
    y = n(532794),
    j = n(780964),
    T = n(840065),
    v = n(832946),
    S = n(287809),
    I = n(954571),
    N = n(975571),
    P = n(927578),
    R = n(83617),
    D = n(543767),
    w = n(526292),
    L = n(155984),
    M = n(131168),
    G = n(726532),
    U = n(947418),
    k = n(687944),
    H = n(327479),
    B = n(538511),
    V = n(420139),
    F = n(434395),
    Y = n(136787),
    W = n(788868),
    K = n(652215),
    z = n(601107),
    Z = n(49999),
    q = n(985018),
    X = n(595654);

function J(e) {
    let t, {
            subscription: n,
            renewalInvoicePreview: i,
            fractionalPremiumInfo: l,
            fromStandaloneBillingPage: a = !0,
            className: c
        } = e,
        d = (0, p.bG)([S.default], () => {
            let e = S.default.getCurrentUser();
            return o()(null != e, "GuildBoostingHeader: currentUser cannot be undefined"), e
        });
    if (0 === (0, P.bx)(n.additionalPlans)) return null;
    let {
        status: _
    } = n, m = (0, P.$k)(n);
    if (m) t = X.v2;
    else switch (_) {
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
                        [X.aD]: m
                    })
                }), (0, r.jsx)("div", {
                    children: (0, P.Uf)({
                        subscription: n,
                        renewalInvoicePreview: i,
                        user: d,
                        fractionalPremiumInfo: l
                    })
                })]
            }), a && (0, r.jsx)(H.A, {
                onClick: () => (0, T.openUserSettings)(j.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
                    section: K.nc_.GUILD_BOOSTING
                }),
                text: q.intl.string(q.t["NQ5g/U"])
            })]
        }), !a && (0, r.jsx)(g.Text, {
            className: X.yW,
            variant: "text-sm/normal",
            children: q.intl.format(u.Fr ? q.t.uxYBEa : q.t.k6haR9, {
                openAppHook: () => (0, A.A)("app")
            })
        })]
    })
}

function Q() {
    return i.useEffect(() => {
        I.default.track(K.HAw.TOOLTIP_VIEWED, {
            type: "subscription_settings_missing_payment_method"
        })
    }, []), (0, r.jsxs)("div", {
        className: X.Zz,
        children: [(0, r.jsx)(g.EpV, {
            size: "custom",
            width: 20,
            height: 20,
            className: X.Sh,
            color: m.A.unsafe_rawColors.YELLOW_260.css
        }), (0, r.jsx)(g.Text, {
            className: X.Cy,
            variant: "text-sm/normal",
            children: q.intl.string(q.t.xFHEMa)
        })]
    })
}

function $() {
    return i.useEffect(() => {
        I.default.track(K.HAw.TOOLTIP_VIEWED, {
            type: "subscription_settings_invalid_payment_method"
        })
    }, []), (0, r.jsxs)("div", {
        className: X.Zz,
        children: [(0, r.jsx)(g.EpV, {
            size: "custom",
            width: 20,
            height: 20,
            className: X.Sh,
            color: m.A.unsafe_rawColors.RED_360.css
        }), (0, r.jsx)(g.Text, {
            className: X.Cy,
            variant: "text-sm/normal",
            children: q.intl.string(q.t["j+nuQZ"])
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
    } = (0, h.Ay)(b.A.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER);
    return i.useEffect(() => {
        I.default.track(K.HAw.TOOLTIP_VIEWED, {
            type: "subscription_settings_invalid_payment_method"
        })
    }, []), (0, r.jsxs)("div", {
        className: X.Zz,
        children: [(0, r.jsx)(g.EpV, {
            size: "custom",
            width: 20,
            height: 20,
            className: X.Sh,
            color: m.A.unsafe_rawColors.YELLOW_260.css
        }), (0, r.jsx)(g.Text, {
            className: X.Cy,
            variant: "text-sm/normal",
            children: q.intl.format(q.t["0nbf/G"], {
                daysPastDue: t,
                paymentModalRedirect: () => {
                    (0, y.A)({
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
        className: s()(X.KF, l),
        children: [(0, r.jsx)(g.Heading, {
            variant: "heading-md/semibold",
            className: X.QL,
            children: q.intl.string(q.t.KXQjfc)
        }), (0, r.jsx)("div", {
            children: P.Ay.getBillingInformationString(t, n, i, !1, a)
        })]
    })
}

function en() {
    let e = (0, p.bG)([S.default], () => S.default.getCurrentUser()),
        t = null != e && e.isPremiumGroupMember();
    return (0, r.jsxs)("div", {
        children: [(0, r.jsx)(g.Heading, {
            variant: "heading-lg/semibold",
            className: X.Gf,
            children: q.intl.string(q.t["/gs+Pz"])
        }), (0, r.jsx)("p", {
            className: X.yV,
            children: q.intl.string(q.t.D8UpUo)
        }), !t && (0, r.jsx)(g.ZpM, {
            className: X.wb,
            type: g.ZpM.Types.CUSTOM,
            children: (0, r.jsxs)(x.A, {
                align: x.A.Align.CENTER,
                children: [(0, r.jsx)(C.A, {
                    game: null,
                    size: C.M.SMALL,
                    className: X.pV
                }), (0, r.jsx)("span", {
                    className: X.O,
                    children: q.intl.string(q.t.xCRgr1)
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
        fetchedOpenInvoice: p,
        isPremiumGroup: _
    } = e, {
        analyticsLocations: m
    } = (0, h.Ay)(b.A.SUBSCRIPTION_DETAILS), f = null != d ? {} : {
        subscriptionId: t.id,
        renewal: !0,
        analyticsLocations: m,
        analyticsLocation: n
    }, [A] = (0, D.Kq)(f);
    A = null != d ? d : A;
    let x = null != u ? {} : {
            subscriptionId: t.id,
            renewal: !0,
            applyEntitlements: !0,
            analyticsLocations: m,
            analyticsLocation: n
        },
        [O] = (0, D.Kq)(x);
    O = null != u ? u : O;
    let C = (0, E.A)(),
        y = (0, M.p)(),
        j = (0, w.nf)(),
        T = P.Ay.isBaseSubscriptionCanceled(t),
        v = (0, U.v)(t, i);
    if (null == A || null == O) return (0, r.jsx)(g.y$y, {});
    let S = v ? (0, w.Bv)(O) : null,
        I = null != S || null != j && (j.discountId === W.q || j.discountId === W.EG),
        N = v && (T && null != y || !T && I) ? (0, r.jsx)(k.A, {
            subscription: t,
            invoicePreview: O,
            paymentSource: i,
            discountOffer: y,
            renewalChurnDiscountInfo: S,
            discountInfo: j,
            isLoading: l,
            analyticsLocation: n
        }) : (0, r.jsx)(B.A, {
            subscription: t,
            currentInvoicePreview: A,
            renewalInvoicePreview: O,
            paymentSource: i,
            busy: l,
            analyticsLocation: n
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)("div", {
            className: X.fj,
            children: [!_ && N, (0, r.jsx)(J, {
                subscription: t,
                renewalInvoicePreview: A,
                fromStandaloneBillingPage: a,
                className: X.td,
                fractionalPremiumInfo: C
            })]
        }), (0, r.jsx)("div", {
            children: (0, r.jsx)(g.nVY, {
                label: q.intl.string(q.t.Sb6wI1),
                children: (0, r.jsxs)("div", {
                    className: X.zH,
                    children: [(0, r.jsx)(et, {
                        subscription: t,
                        renewalInvoicePreview: O,
                        className: X.g4,
                        fractionalPremiumInfo: C,
                        openInvoice: p
                    }), (0, r.jsx)("div", {
                        className: s()(X.g4, {
                            [X.sE]: o
                        }),
                        children: (0, r.jsx)(g.D0$, {
                            label: t.isPurchasedExternally && null != t.paymentGateway ? q.intl.formatToPlainString(q.t["rTk9v/"], {
                                paymentGatewayName: K.qmC[t.paymentGateway]
                            }) : q.intl.string(q.t.iRzXKd),
                            children: (0, r.jsx)(V.A, {
                                subscription: t,
                                onPaymentSourceAdded: R.c_,
                                highlightAddPaymentMethodButton: c || o,
                                analyticsLocation: n,
                                currentInvoicePreview: A,
                                dropdownClassName: X.sp
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
        I.default.track(K.HAw.TOOLTIP_VIEWED, {
            type: "subscription_settings_duplicate_subscriptions"
        })
    }, []), (0, r.jsxs)("div", {
        className: X.oU,
        children: [(0, r.jsx)(g.EpV, {
            size: "custom",
            width: 20,
            height: 20,
            color: m.A.unsafe_rawColors.RED_360.css
        }), (0, r.jsx)(g.Text, {
            className: X.dk,
            variant: "text-sm/normal",
            children: q.intl.format(q.t["6eXiiC"], {
                helpCenterLink: N.A.getArticleURL(K.MVz.NITRO)
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
        shouldRefetchInvoicesOnSubscriptionUpdate: A
    } = e;
    null != s && null != s[0] && (l = s[0]);
    let E = (0, p.bG)([S.default], () => S.default.getCurrentUser()),
        {
            analyticsLocations: x
        } = (0, h.Ay)(b.A.SUBSCRIPTION_DETAILS),
        C = (0, M.p)(),
        y = null != s ? s.slice(1) : [],
        [j, T] = i.useState(0);
    i.useEffect(() => {
        if (!A) return;
        let e = e => {
            e.subscription.id === l.id && T(e => e + 1)
        };
        return f.h.subscribe("BILLING_SUBSCRIPTION_UPDATE_SUCCESS", e), () => {
            f.h.unsubscribe("BILLING_SUBSCRIPTION_UPDATE_SUCCESS", e)
        }
    }, [l.id, A]);
    let [I] = (0, D.Kq)({
        subscriptionId: l.id,
        renewal: !0,
        analyticsLocations: x,
        analyticsLocation: u,
        fetchKey: j
    }), [P] = (0, D.Kq)({
        subscriptionId: l.id,
        renewal: !0,
        applyEntitlements: !0,
        analyticsLocations: x,
        analyticsLocation: u,
        userDiscountOfferId: null == C ? void 0 : C.id,
        fetchKey: j
    }), R = (0, Y.V)(), w = null == a ? void 0 : a.invalid, U = (0, p.bG)([S.default], () => {
        var e;
        return null == (e = S.default.getCurrentUser()) ? void 0 : e.hasFreePremium()
    }), k = d()(l.currentPeriodEnd), H = null != l.paymentSourceId, B = null != (t = null == P ? void 0 : P.total) ? t : 0, V = !H && B > 0 && (7 >= k.diff(d()(), "days") || l.status === K.Dmq.PAST_DUE) && !U && !l.isPurchasedExternally, W = w && l.status === K.Dmq.PAST_DUE && !U && !l.isPurchasedExternally, z = (0, L.l)(), J = !U && z, et = (null == l ? void 0 : l.status) === K.Dmq.PAST_DUE, en = et ? d()().diff(d()(l.currentPeriodStart), "days") : 0, ei = null != E && E.isPremiumGroupPrimary(), el = l.hasAnyPremiumGroup, [es] = (0, D.C8)({
        subscriptionId: l.id,
        preventFetch: !(J || et)
    });
    return null == I || null == P ? (0, r.jsx)(g.y$y, {}) : (null != l.renewalMutations && (l.renewalMutations.planId !== l.planId && !(0, v.m1)(l.renewalMutations.planId) || l.hasExternalPlanChange) && (n = (0, r.jsx)(F.A, {
        subscription: l,
        renewalMutations: l.renewalMutations,
        className: X.Il,
        analyticsLocation: u
    })), (0, r.jsxs)(g.nVY, {
        label: q.intl.string(q.t["/gs+Pz"]),
        description: q.intl.string(q.t.D8UpUo),
        children: [V ? (0, r.jsx)(Q, {}) : null, W ? (0, r.jsx)($, {}) : null, J && null != es ? (0, r.jsx)(ee, {
            daysPastDue: en,
            subscription: l,
            openInvoiceId: es.id
        }) : null, ei && el && (0, r.jsx)(G.j, {
            subscription: l,
            analyticsLocations: x
        }), n, R && (0, r.jsx)(g.po8, {
            messageType: g.YCn.INFO,
            action: (0, r.jsx)(g.DUT, {
                onClick: () => {
                    (0, O.Dr)(_.M.PREMIUM_SETTINGS_SUBSCRIPTION_INFO_NOTICE, {
                        dismissAction: Z.i.USER_DISMISS
                    })
                },
                className: X.dn,
                children: (0, r.jsx)(g.PGe, {
                    size: "sm",
                    color: m.A.colors.ICON_STRONG
                })
            }),
            children: q.intl.format(q.t.K4QorK, {
                helpdeskArticle: N.A.getArticleURL(K.MVz.BILLING)
            })
        }), (0, r.jsxs)("div", {
            children: [(0, r.jsx)("div", {
                className: y.length > 0 ? X.HZ : X.__invalid_singleSubscription,
                children: (0, r.jsx)(er, {
                    subscription: l,
                    analyticsLocation: u,
                    paymentSource: a,
                    busy: o,
                    fromStandaloneBillingPage: c,
                    showNoPaymentMethod: V,
                    showInvalidPaymentMethod: W,
                    fetchedCurrentInvoicePreview: I,
                    fetchedRenewalInvoicePreview: P,
                    fetchedOpenInvoice: es,
                    isPremiumGroup: ei
                })
            }), y.map((e, t) => (0, r.jsxs)("div", {
                className: X.HZ,
                children: [(0, r.jsx)(g.Heading, {
                    variant: "heading-md/semibold",
                    className: X.dd,
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