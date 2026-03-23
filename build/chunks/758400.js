/** chunk id: 758400 params = (module,exports,require) **/
n.d(t, {
    Ay: () => K,
    Hy: () => X,
    Sb: () => W,
    TC: () => Y
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
    m = n(793574),
    g = n(688810),
    A = n(531260),
    x = n(235986),
    h = n(769015),
    p = n(532794),
    T = n(832946),
    E = n(287809),
    S = n(954571),
    f = n(975571),
    C = n(927578),
    b = n(83617),
    N = n(543767),
    I = n(526292),
    v = n(155984),
    j = n(131168),
    y = n(726532),
    R = n(947418),
    O = n(687944),
    L = n(972710),
    D = n(538511),
    P = n(420139),
    M = n(434395),
    G = n(788868),
    U = n(652215),
    k = n(985018),
    V = n(595654);

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

function B() {
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

function H(e) {
    let {
        daysPastDue: t,
        subscription: n,
        openInvoiceId: l
    } = e, {
        analyticsLocations: a
    } = (0, g.Ay)(m.A.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER);
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
                    (0, p.A)({
                        initialPlanId: n.planIdFromItems,
                        openInvoiceId: l,
                        analyticsLocations: a
                    })
                }
            })
        })]
    })
}

function F(e) {
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
            children: C.Ay.getBillingInformationString(t, n, s, !1, r)
        })]
    })
}

function Y() {
    let e = (0, d.bG)([E.default], () => E.default.getCurrentUser()),
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
            children: (0, i.jsxs)(x.A, {
                align: x.A.Align.CENTER,
                children: [(0, i.jsx)(h.A, {
                    game: null,
                    size: h.M.SMALL,
                    className: V.pV
                }), (0, i.jsx)("span", {
                    className: V.O,
                    children: k.intl.string(k.t.xCRgr1)
                })]
            })
        }), t && (0, i.jsx)(y.i, {
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
        fetchedOpenInvoice: x,
        isPremiumGroup: h
    } = e, {
        analyticsLocations: p
    } = (0, g.Ay)(m.A.SUBSCRIPTION_DETAILS), T = null != c ? {} : {
        subscriptionId: t.id,
        renewal: !0,
        analyticsLocations: p,
        analyticsLocation: n
    }, [E] = (0, N.Kq)(T);
    E = c ?? E;
    let S = null != _ ? {} : {
            subscriptionId: t.id,
            renewal: !0,
            applyEntitlements: !0,
            analyticsLocations: p,
            analyticsLocation: n
        },
        [f] = (0, N.Kq)(S);
    f = _ ?? f;
    let v = (0, A.A)(),
        y = (0, j.p)(),
        M = (0, I.nf)(),
        w = C.Ay.isBaseSubscriptionCanceled(t),
        B = (0, R.v)(t, s);
    if (null == E || null == f) return (0, i.jsx)(u.y$y, {});
    let H = B ? (0, I.Bv)(f) : null,
        Y = null != H || null != M && (M.discountId === G.q || M.discountId === G.EG),
        z = B && (w && null != y || !w && Y) ? (0, i.jsx)(O.A, {
            subscription: t,
            invoicePreview: f,
            paymentSource: s,
            discountOffer: y,
            renewalChurnDiscountInfo: H,
            discountInfo: M,
            isLoading: l,
            analyticsLocation: n
        }) : (0, i.jsx)(D.A, {
            subscription: t,
            currentInvoicePreview: E,
            renewalInvoicePreview: f,
            paymentSource: s,
            busy: l,
            analyticsLocation: n
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsxs)("div", {
            className: V.fj,
            children: [!h && z, (0, i.jsx)(L.C, {
                subscription: t,
                renewalInvoicePreview: E,
                fromStandaloneBillingPage: r,
                fractionalPremiumInfo: v,
                analyticsLocation: n
            })]
        }), (0, i.jsx)("div", {
            children: (0, i.jsx)(u.nVY, {
                label: k.intl.string(k.t.Sb6wI1),
                children: (0, i.jsxs)("div", {
                    className: V.zH,
                    children: [(0, i.jsx)(F, {
                        subscription: t,
                        renewalInvoicePreview: f,
                        className: V.g4,
                        fractionalPremiumInfo: v,
                        openInvoice: x
                    }), (0, i.jsx)("div", {
                        className: a()(V.g4, {
                            [V.sE]: o
                        }),
                        children: (0, i.jsx)(u.D0$, {
                            label: t.isPurchasedExternally && null != t.paymentGateway ? k.intl.formatToPlainString(k.t["rTk9v/"], {
                                paymentGatewayName: U.qmC[t.paymentGateway]
                            }) : k.intl.string(k.t.iRzXKd),
                            children: (0, i.jsx)(P.A, {
                                subscription: t,
                                onPaymentSourceAdded: b.c_,
                                highlightAddPaymentMethodButton: d || o,
                                analyticsLocation: n,
                                currentInvoicePreview: E,
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
                helpCenterLink: f.A.getArticleURL(U.MVz.NITRO)
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
        shouldRefetchInvoicesOnSubscriptionUpdate: x
    } = e;
    null != l && null != l[0] && (n = l[0]);
    let h = (0, d.bG)([E.default], () => E.default.getCurrentUser()),
        {
            analyticsLocations: p
        } = (0, g.Ay)(m.A.SUBSCRIPTION_DETAILS),
        S = (0, j.p)(),
        f = null != l ? l.slice(1) : [],
        [C, b] = s.useState(0);
    s.useEffect(() => {
        if (!x) return;
        let e = e => {
            e.subscription.id === n.id && b(e => e + 1)
        };
        return _.h.subscribe("BILLING_SUBSCRIPTION_UPDATE_SUCCESS", e), () => {
            _.h.unsubscribe("BILLING_SUBSCRIPTION_UPDATE_SUCCESS", e)
        }
    }, [n.id, x]);
    let [I] = (0, N.Kq)({
        subscriptionId: n.id,
        renewal: !0,
        analyticsLocations: p,
        analyticsLocation: A,
        fetchKey: C
    }), [R] = (0, N.Kq)({
        subscriptionId: n.id,
        renewal: !0,
        applyEntitlements: !0,
        analyticsLocations: p,
        analyticsLocation: A,
        userDiscountOfferId: S?.id,
        fetchKey: C
    }), O = a?.invalid, L = (0, d.bG)([E.default], () => E.default.getCurrentUser()?.hasFreePremium()), D = o()(n.currentPeriodEnd), P = null != n.paymentSourceId, G = R?.total ?? 0, F = !P && G > 0 && (7 >= D.diff(o()(), "days") || n.status === U.Dmq.PAST_DUE) && !L && !n.isPurchasedExternally, Y = O && n.status === U.Dmq.PAST_DUE && !L && !n.isPurchasedExternally, X = (0, v.l)(), W = !L && X, K = n?.status === U.Dmq.PAST_DUE, Z = K ? o()().diff(o()(n.currentPeriodStart), "days") : 0, q = null != h && h.isPremiumGroupPrimary(), J = n.hasAnyPremiumGroup, [Q] = (0, N.C8)({
        subscriptionId: n.id,
        preventFetch: !(W || K)
    });
    return null == I || null == R ? (0, i.jsx)(u.y$y, {}) : (null != n.renewalMutations && (n.renewalMutations.planId !== n.planId && !(0, T.m1)(n.renewalMutations.planId) || n.hasExternalPlanChange) && (t = (0, i.jsx)(M.A, {
        subscription: n,
        renewalMutations: n.renewalMutations,
        className: V.Il,
        analyticsLocation: A
    })), (0, i.jsxs)(u.nVY, {
        label: k.intl.string(k.t["/gs+Pz"]),
        description: k.intl.string(k.t.D8UpUo),
        children: [F ? (0, i.jsx)(w, {}) : null, Y ? (0, i.jsx)(B, {}) : null, W && null != Q ? (0, i.jsx)(H, {
            daysPastDue: Z,
            subscription: n,
            openInvoiceId: Q.id
        }) : null, q && J && (0, i.jsx)(y.j, {
            subscription: n,
            analyticsLocations: p
        }), t, (0, i.jsxs)("div", {
            children: [(0, i.jsx)("div", {
                className: f.length > 0 ? V.HZ : V.__invalid_singleSubscription,
                children: (0, i.jsx)(z, {
                    subscription: n,
                    analyticsLocation: A,
                    paymentSource: a,
                    busy: r,
                    fromStandaloneBillingPage: c,
                    showNoPaymentMethod: F,
                    showInvalidPaymentMethod: Y,
                    fetchedCurrentInvoicePreview: I,
                    fetchedRenewalInvoicePreview: R,
                    fetchedOpenInvoice: Q,
                    isPremiumGroup: q
                })
            }), f.map((e, t) => (0, i.jsxs)("div", {
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
                    showNoPaymentMethod: F,
                    showInvalidPaymentMethod: Y,
                    fetchedCurrentInvoicePreview: null,
                    fetchedRenewalInvoicePreview: null,
                    fetchedOpenInvoice: null,
                    isPremiumGroup: !1
                })]
            }, t))]
        })]
    }))
}