/** chunk id: 758400 params = (module,exports,require) **/
n.d(t, {
    Ay: () => K,
    Hy: () => X,
    Sb: () => W,
    TC: () => F
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(989349),
    o = n.n(r),
    d = n(311907),
    c = n(827734),
    u = n(397927),
    _ = n(73153),
    g = n(793574),
    m = n(688810),
    A = n(531260),
    h = n(235986),
    p = n(769015),
    x = n(532794),
    E = n(832946),
    T = n(287809),
    S = n(954571),
    C = n(975571),
    f = n(927578),
    I = n(83617),
    b = n(543767),
    N = n(526292),
    v = n(155984),
    j = n(131168),
    O = n(726532),
    R = n(947418),
    y = n(687944),
    P = n(972710),
    L = n(538511),
    D = n(420139),
    G = n(434395),
    M = n(788868),
    U = n(652215),
    k = n(985018),
    V = n(380596);

function w() {
    return s.useEffect(() => {
        S.default.track(U.HAw.TOOLTIP_VIEWED, {
            type: "subscription_settings_missing_payment_method"
        })
    }, []), (0, i.jsxs)("div", {
        className: V.Zz,
        children: [(0, i.jsx)(u.EpV, {
            size: "custom",
            width: 20,
            height: 20,
            className: V.Sh,
            color: c.A.unsafe_rawColors.YELLOW_260.css
        }), (0, i.jsx)(u.Text, {
            className: V.Cy,
            variant: "text-sm/normal",
            children: k.intl.string(k.t.xFHEMa)
        })]
    })
}

function H() {
    return s.useEffect(() => {
        S.default.track(U.HAw.TOOLTIP_VIEWED, {
            type: "subscription_settings_invalid_payment_method"
        })
    }, []), (0, i.jsxs)("div", {
        className: V.Zz,
        children: [(0, i.jsx)(u.EpV, {
            size: "custom",
            width: 20,
            height: 20,
            className: V.Sh,
            color: c.A.unsafe_rawColors.RED_360.css
        }), (0, i.jsx)(u.Text, {
            className: V.Cy,
            variant: "text-sm/normal",
            children: k.intl.string(k.t["j+nuQZ"])
        })]
    })
}

function B(e) {
    let {
        daysPastDue: t,
        subscription: n,
        openInvoiceId: l
    } = e, {
        analyticsLocations: a
    } = (0, m.Ay)(g.A.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER);
    return s.useEffect(() => {
        S.default.track(U.HAw.TOOLTIP_VIEWED, {
            type: "subscription_settings_invalid_payment_method"
        })
    }, []), (0, i.jsxs)("div", {
        className: V.Zz,
        children: [(0, i.jsx)(u.EpV, {
            size: "custom",
            width: 20,
            height: 20,
            className: V.Sh,
            color: c.A.unsafe_rawColors.YELLOW_260.css
        }), (0, i.jsx)(u.Text, {
            className: V.Cy,
            variant: "text-sm/normal",
            children: k.intl.format(k.t["0nbf/G"], {
                daysPastDue: t,
                paymentModalRedirect: () => {
                    (0, x.A)({
                        initialPlanId: n.planIdFromItems,
                        openInvoiceId: l,
                        analyticsLocations: a
                    })
                }
            })
        })]
    })
}

function Y(e) {
    let {
        subscription: t,
        renewalInvoicePreview: n,
        openInvoice: s,
        className: l,
        fractionalPremiumInfo: r
    } = e;
    return (0, i.jsxs)("div", {
        className: a()(V.KF, l),
        children: [(0, i.jsx)(u.Heading, {
            variant: "heading-md/semibold",
            className: V.QL,
            children: k.intl.string(k.t.KXQjfc)
        }), (0, i.jsx)("div", {
            children: f.Ay.getBillingInformationString(t, n, s, !1, r)
        })]
    })
}

function F() {
    let e = (0, d.bG)([T.default], () => T.default.getCurrentUser()),
        t = null != e && e.isPremiumGroupMember();
    return (0, i.jsxs)("div", {
        children: [(0, i.jsx)(u.Heading, {
            variant: "heading-lg/semibold",
            className: V.Gf,
            children: k.intl.string(k.t["/gs+Pz"])
        }), (0, i.jsx)("p", {
            className: V.yV,
            children: k.intl.string(k.t.D8UpUo)
        }), !t && (0, i.jsx)(u.ZpM, {
            className: V.wb,
            type: u.ZpM.Types.CUSTOM,
            children: (0, i.jsxs)(h.A, {
                align: h.A.Align.CENTER,
                children: [(0, i.jsx)(p.A, {
                    game: null,
                    size: p.M.SMALL,
                    className: V.pV
                }), (0, i.jsx)("span", {
                    className: V.O,
                    children: k.intl.string(k.t.xCRgr1)
                })]
            })
        }), t && (0, i.jsx)(O.i, {
            currentUser: e
        })]
    })
}

function z(e) {
    let {
        subscription: t,
        analyticsLocation: n,
        paymentSource: s,
        busy: l,
        fromStandaloneBillingPage: r,
        showInvalidPaymentMethod: o,
        showNoPaymentMethod: d,
        fetchedCurrentInvoicePreview: c,
        fetchedRenewalInvoicePreview: _,
        fetchedOpenInvoice: h,
        isPremiumGroup: p
    } = e, {
        analyticsLocations: x
    } = (0, m.Ay)(g.A.SUBSCRIPTION_DETAILS), E = null != c ? {} : {
        subscriptionId: t.id,
        renewal: !0,
        analyticsLocations: x,
        analyticsLocation: n
    }, [T] = (0, b.Kq)(E);
    T = c ?? T;
    let S = null != _ ? {} : {
            subscriptionId: t.id,
            renewal: !0,
            applyEntitlements: !0,
            analyticsLocations: x,
            analyticsLocation: n
        },
        [C] = (0, b.Kq)(S);
    C = _ ?? C;
    let v = (0, A.A)(),
        O = (0, j.p)(),
        G = (0, N.nf)(),
        w = f.Ay.isBaseSubscriptionCanceled(t),
        H = (0, R.v)(t, s);
    if (null == T || null == C) return (0, i.jsx)(u.y$y, {});
    let B = H ? (0, N.Bv)(C) : null,
        F = null != B || null != G && (G.discountId === M.q || G.discountId === M.EG),
        z = H && (w && null != O || !w && F) ? (0, i.jsx)(y.A, {
            subscription: t,
            invoicePreview: C,
            paymentSource: s,
            discountOffer: O,
            renewalChurnDiscountInfo: B,
            discountInfo: G,
            isLoading: l,
            analyticsLocation: n
        }) : (0, i.jsx)(L.A, {
            subscription: t,
            currentInvoicePreview: T,
            renewalInvoicePreview: C,
            paymentSource: s,
            busy: l,
            analyticsLocation: n
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsxs)("div", {
            className: V.fj,
            children: [!p && z, (0, i.jsx)(P.C, {
                subscription: t,
                renewalInvoicePreview: T,
                fromStandaloneBillingPage: r,
                fractionalPremiumInfo: v,
                analyticsLocation: n
            })]
        }), (0, i.jsx)("div", {
            children: (0, i.jsx)(u.nVY, {
                label: k.intl.string(k.t.Sb6wI1),
                children: (0, i.jsxs)("div", {
                    className: V.zH,
                    children: [(0, i.jsx)(Y, {
                        subscription: t,
                        renewalInvoicePreview: C,
                        className: V.g4,
                        fractionalPremiumInfo: v,
                        openInvoice: h
                    }), (0, i.jsx)("div", {
                        className: a()(V.g4, {
                            [V.sE]: o
                        }),
                        children: (0, i.jsx)(u.D0$, {
                            label: t.isPurchasedExternally && null != t.paymentGateway ? k.intl.formatToPlainString(k.t["rTk9v/"], {
                                paymentGatewayName: U.qmC[t.paymentGateway]
                            }) : k.intl.string(k.t.iRzXKd),
                            children: (0, i.jsx)(D.A, {
                                subscription: t,
                                onPaymentSourceAdded: I.c_,
                                highlightAddPaymentMethodButton: d || o,
                                analyticsLocation: n,
                                currentInvoicePreview: T,
                                dropdownClassName: V.sp
                            })
                        })
                    })]
                })
            })
        })]
    })
}
let X = new Set([U.Dmq.ACTIVE, U.Dmq.PAST_DUE, U.Dmq.CANCELED, U.Dmq.PAUSE_PENDING, U.Dmq.PAUSED]);

function W() {
    return s.useEffect(() => {
        S.default.track(U.HAw.TOOLTIP_VIEWED, {
            type: "subscription_settings_duplicate_subscriptions"
        })
    }, []), (0, i.jsxs)("div", {
        className: V.oU,
        children: [(0, i.jsx)(u.EpV, {
            size: "custom",
            width: 20,
            height: 20,
            color: c.A.unsafe_rawColors.RED_360.css
        }), (0, i.jsx)(u.Text, {
            className: V.dk,
            variant: "text-sm/normal",
            children: k.intl.format(k.t["6eXiiC"], {
                helpCenterLink: C.A.getArticleURL(U.MVz.NITRO)
            })
        })]
    })
}

function K(e) {
    let t, {
        subscription: n,
        subscriptions: l,
        paymentSource: a,
        busy: r,
        fromStandaloneBillingPage: c = !0,
        analyticsLocation: A,
        shouldRefetchInvoicesOnSubscriptionUpdate: h
    } = e;
    null != l && null != l[0] && (n = l[0]);
    let p = (0, d.bG)([T.default], () => T.default.getCurrentUser()),
        {
            analyticsLocations: x
        } = (0, m.Ay)(g.A.SUBSCRIPTION_DETAILS),
        S = (0, j.p)(),
        C = null != l ? l.slice(1) : [],
        [f, I] = s.useState(0);
    s.useEffect(() => {
        if (!h) return;
        let e = e => {
            e.subscription.id === n.id && I(e => e + 1)
        };
        return _.h.subscribe("BILLING_SUBSCRIPTION_UPDATE_SUCCESS", e), () => {
            _.h.unsubscribe("BILLING_SUBSCRIPTION_UPDATE_SUCCESS", e)
        }
    }, [n.id, h]);
    let [N] = (0, b.Kq)({
        subscriptionId: n.id,
        renewal: !0,
        analyticsLocations: x,
        analyticsLocation: A,
        fetchKey: f
    }), [R] = (0, b.Kq)({
        subscriptionId: n.id,
        renewal: !0,
        applyEntitlements: !0,
        analyticsLocations: x,
        analyticsLocation: A,
        userDiscountOfferId: S?.id,
        fetchKey: f
    }), y = a?.invalid, P = (0, d.bG)([T.default], () => T.default.getCurrentUser()?.hasFreePremium()), L = o()(n.currentPeriodEnd), D = null != n.paymentSourceId, M = R?.total ?? 0, Y = !D && M > 0 && (7 >= L.diff(o()(), "days") || n.status === U.Dmq.PAST_DUE) && !P && !n.isPurchasedExternally, F = y && n.status === U.Dmq.PAST_DUE && !P && !n.isPurchasedExternally, X = (0, v.l)(), W = !P && X, K = n?.status === U.Dmq.PAST_DUE, Z = K ? o()().diff(o()(n.currentPeriodStart), "days") : 0, q = null != p && p.isPremiumGroupPrimary(), J = n.hasAnyPremiumGroup, [Q] = (0, b.C8)({
        subscriptionId: n.id,
        preventFetch: !(W || K)
    });
    return null == N || null == R ? (0, i.jsx)(u.y$y, {}) : (null != n.renewalMutations && (n.renewalMutations.planId !== n.planId && !(0, E.m1)(n.renewalMutations.planId) || n.hasExternalPlanChange) && (t = (0, i.jsx)(G.A, {
        subscription: n,
        renewalMutations: n.renewalMutations,
        className: V.Il,
        analyticsLocation: A
    })), (0, i.jsxs)(u.nVY, {
        label: k.intl.string(k.t["/gs+Pz"]),
        description: k.intl.string(k.t.D8UpUo),
        children: [Y ? (0, i.jsx)(w, {}) : null, F ? (0, i.jsx)(H, {}) : null, W && null != Q ? (0, i.jsx)(B, {
            daysPastDue: Z,
            subscription: n,
            openInvoiceId: Q.id
        }) : null, q && J && (0, i.jsx)(O.j, {
            subscription: n,
            analyticsLocations: x
        }), t, (0, i.jsxs)("div", {
            children: [(0, i.jsx)("div", {
                className: C.length > 0 ? V.HZ : V.__invalid_singleSubscription,
                children: (0, i.jsx)(z, {
                    subscription: n,
                    analyticsLocation: A,
                    paymentSource: a,
                    busy: r,
                    fromStandaloneBillingPage: c,
                    showNoPaymentMethod: Y,
                    showInvalidPaymentMethod: F,
                    fetchedCurrentInvoicePreview: N,
                    fetchedRenewalInvoicePreview: R,
                    fetchedOpenInvoice: Q,
                    isPremiumGroup: q
                })
            }), C.map((e, t) => (0, i.jsxs)("div", {
                className: V.HZ,
                children: [(0, i.jsx)(u.Heading, {
                    variant: "heading-md/semibold",
                    className: V.dd,
                    children: "Duplicate Subscriptions"
                }), (0, i.jsx)(z, {
                    subscription: e,
                    analyticsLocation: A,
                    paymentSource: a,
                    busy: r,
                    fromStandaloneBillingPage: c,
                    showNoPaymentMethod: Y,
                    showInvalidPaymentMethod: F,
                    fetchedCurrentInvoicePreview: null,
                    fetchedRenewalInvoicePreview: null,
                    fetchedOpenInvoice: null,
                    isPremiumGroup: !1
                })]
            }, t))]
        })]
    }))
}