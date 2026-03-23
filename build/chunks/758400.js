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
    m = n(73153),
    _ = n(793574),
    g = n(688810),
    A = n(531260),
    x = n(235986),
    p = n(769015),
    h = n(532794),
    T = n(832946),
    E = n(287809),
    f = n(954571),
    S = n(975571),
    C = n(927578),
    b = n(83617),
    N = n(543767),
    I = n(526292),
    v = n(155984),
    j = n(131168),
    y = n(726532),
    O = n(947418),
    R = n(687944),
    L = n(972710),
    P = n(538511),
    D = n(420139),
    M = n(434395),
    G = n(788868),
    k = n(652215),
    U = n(985018),
    w = n(595654);

function V() {
    return s.useEffect(() => {
        f.default.track(k.HAw.TOOLTIP_VIEWED, {
            type: "subscription_settings_missing_payment_method"
        })
    }, []), (0, i.jsxs)("div", {
        className: w.Zz,
        children: [(0, i.jsx)(u.EpV, {
            size: "custom",
            width: 20,
            height: 20,
            className: w.Sh,
            color: c.A.unsafe_rawColors.YELLOW_260.css
        }), (0, i.jsx)(u.Text, {
            className: w.Cy,
            variant: "text-sm/normal",
            children: U.intl.string(U.t.xFHEMa)
        })]
    })
}

function B() {
    return s.useEffect(() => {
        f.default.track(k.HAw.TOOLTIP_VIEWED, {
            type: "subscription_settings_invalid_payment_method"
        })
    }, []), (0, i.jsxs)("div", {
        className: w.Zz,
        children: [(0, i.jsx)(u.EpV, {
            size: "custom",
            width: 20,
            height: 20,
            className: w.Sh,
            color: c.A.unsafe_rawColors.RED_360.css
        }), (0, i.jsx)(u.Text, {
            className: w.Cy,
            variant: "text-sm/normal",
            children: U.intl.string(U.t["j+nuQZ"])
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
    } = (0, g.Ay)(_.A.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER);
    return s.useEffect(() => {
        f.default.track(k.HAw.TOOLTIP_VIEWED, {
            type: "subscription_settings_invalid_payment_method"
        })
    }, []), (0, i.jsxs)("div", {
        className: w.Zz,
        children: [(0, i.jsx)(u.EpV, {
            size: "custom",
            width: 20,
            height: 20,
            className: w.Sh,
            color: c.A.unsafe_rawColors.YELLOW_260.css
        }), (0, i.jsx)(u.Text, {
            className: w.Cy,
            variant: "text-sm/normal",
            children: U.intl.format(U.t["0nbf/G"], {
                daysPastDue: t,
                paymentModalRedirect: () => {
                    (0, h.A)({
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
        className: a()(w.KF, l),
        children: [(0, i.jsx)(u.Heading, {
            variant: "heading-md/semibold",
            className: w.QL,
            children: U.intl.string(U.t.KXQjfc)
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
            className: w.Gf,
            children: U.intl.string(U.t["/gs+Pz"])
        }), (0, i.jsx)("p", {
            className: w.yV,
            children: U.intl.string(U.t.D8UpUo)
        }), !t && (0, i.jsx)(u.ZpM, {
            className: w.wb,
            type: u.ZpM.Types.CUSTOM,
            children: (0, i.jsxs)(x.A, {
                align: x.A.Align.CENTER,
                children: [(0, i.jsx)(p.A, {
                    game: null,
                    size: p.M.SMALL,
                    className: w.pV
                }), (0, i.jsx)("span", {
                    className: w.O,
                    children: U.intl.string(U.t.xCRgr1)
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
        fetchedRenewalInvoicePreview: m,
        fetchedOpenInvoice: x,
        isPremiumGroup: p
    } = e, {
        analyticsLocations: h
    } = (0, g.Ay)(_.A.SUBSCRIPTION_DETAILS), T = null != c ? {} : {
        subscriptionId: t.id,
        renewal: !0,
        analyticsLocations: h,
        analyticsLocation: n
    }, [E] = (0, N.Kq)(T);
    E = c ?? E;
    let f = null != m ? {} : {
            subscriptionId: t.id,
            renewal: !0,
            applyEntitlements: !0,
            analyticsLocations: h,
            analyticsLocation: n
        },
        [S] = (0, N.Kq)(f);
    S = m ?? S;
    let v = (0, A.A)(),
        y = (0, j.p)(),
        M = (0, I.nf)(),
        V = C.Ay.isBaseSubscriptionCanceled(t),
        B = (0, O.v)(t, s);
    if (null == E || null == S) return (0, i.jsx)(u.y$y, {});
    let H = B ? (0, I.Bv)(S) : null,
        Y = null != H || null != M && (M.discountId === G.q || M.discountId === G.EG),
        z = B && (V && null != y || !V && Y) ? (0, i.jsx)(R.A, {
            subscription: t,
            invoicePreview: S,
            paymentSource: s,
            discountOffer: y,
            renewalChurnDiscountInfo: H,
            discountInfo: M,
            isLoading: l,
            analyticsLocation: n
        }) : (0, i.jsx)(P.A, {
            subscription: t,
            currentInvoicePreview: E,
            renewalInvoicePreview: S,
            paymentSource: s,
            busy: l,
            analyticsLocation: n
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsxs)("div", {
            className: w.fj,
            children: [!p && z, (0, i.jsx)(L.C, {
                subscription: t,
                renewalInvoicePreview: E,
                fromStandaloneBillingPage: r,
                fractionalPremiumInfo: v,
                analyticsLocation: n
            })]
        }), (0, i.jsx)("div", {
            children: (0, i.jsx)(u.nVY, {
                label: U.intl.string(U.t.Sb6wI1),
                children: (0, i.jsxs)("div", {
                    className: w.zH,
                    children: [(0, i.jsx)(F, {
                        subscription: t,
                        renewalInvoicePreview: S,
                        className: w.g4,
                        fractionalPremiumInfo: v,
                        openInvoice: x
                    }), (0, i.jsx)("div", {
                        className: a()(w.g4, {
                            [w.sE]: o
                        }),
                        children: (0, i.jsx)(u.D0$, {
                            label: t.isPurchasedExternally && null != t.paymentGateway ? U.intl.formatToPlainString(U.t["rTk9v/"], {
                                paymentGatewayName: k.qmC[t.paymentGateway]
                            }) : U.intl.string(U.t.iRzXKd),
                            children: (0, i.jsx)(D.A, {
                                subscription: t,
                                onPaymentSourceAdded: b.c_,
                                highlightAddPaymentMethodButton: d || o,
                                analyticsLocation: n,
                                currentInvoicePreview: E,
                                dropdownClassName: w.sp
                            })
                        })
                    })]
                })
            })
        })]
    })
}
let X = new Set([k.Dmq.ACTIVE, k.Dmq.PAST_DUE, k.Dmq.CANCELED, k.Dmq.PAUSE_PENDING, k.Dmq.PAUSED]);

function W() {
    return s.useEffect(() => {
        f.default.track(k.HAw.TOOLTIP_VIEWED, {
            type: "subscription_settings_duplicate_subscriptions"
        })
    }, []), (0, i.jsxs)("div", {
        className: w.oU,
        children: [(0, i.jsx)(u.EpV, {
            size: "custom",
            width: 20,
            height: 20,
            color: c.A.unsafe_rawColors.RED_360.css
        }), (0, i.jsx)(u.Text, {
            className: w.dk,
            variant: "text-sm/normal",
            children: U.intl.format(U.t["6eXiiC"], {
                helpCenterLink: S.A.getArticleURL(k.MVz.NITRO)
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
    let p = (0, d.bG)([E.default], () => E.default.getCurrentUser()),
        {
            analyticsLocations: h
        } = (0, g.Ay)(_.A.SUBSCRIPTION_DETAILS),
        f = (0, j.p)(),
        S = null != l ? l.slice(1) : [],
        [C, b] = s.useState(0);
    s.useEffect(() => {
        if (!x) return;
        let e = e => {
            e.subscription.id === n.id && b(e => e + 1)
        };
        return m.h.subscribe("BILLING_SUBSCRIPTION_UPDATE_SUCCESS", e), () => {
            m.h.unsubscribe("BILLING_SUBSCRIPTION_UPDATE_SUCCESS", e)
        }
    }, [n.id, x]);
    let [I] = (0, N.Kq)({
        subscriptionId: n.id,
        renewal: !0,
        analyticsLocations: h,
        analyticsLocation: A,
        fetchKey: C
    }), [O] = (0, N.Kq)({
        subscriptionId: n.id,
        renewal: !0,
        applyEntitlements: !0,
        analyticsLocations: h,
        analyticsLocation: A,
        userDiscountOfferId: f?.id,
        fetchKey: C
    }), R = a?.invalid, L = (0, d.bG)([E.default], () => E.default.getCurrentUser()?.hasFreePremium()), P = o()(n.currentPeriodEnd), D = null != n.paymentSourceId, G = O?.total ?? 0, F = !D && G > 0 && (7 >= P.diff(o()(), "days") || n.status === k.Dmq.PAST_DUE) && !L && !n.isPurchasedExternally, Y = R && n.status === k.Dmq.PAST_DUE && !L && !n.isPurchasedExternally, X = (0, v.l)(), W = !L && X, K = n?.status === k.Dmq.PAST_DUE, Z = K ? o()().diff(o()(n.currentPeriodStart), "days") : 0, q = null != p && p.isPremiumGroupPrimary(), J = n.hasAnyPremiumGroup, [Q] = (0, N.C8)({
        subscriptionId: n.id,
        preventFetch: !(W || K)
    });
    return null == I || null == O ? (0, i.jsx)(u.y$y, {}) : (null != n.renewalMutations && (n.renewalMutations.planId !== n.planId && !(0, T.m1)(n.renewalMutations.planId) || n.hasExternalPlanChange) && (t = (0, i.jsx)(M.A, {
        subscription: n,
        renewalMutations: n.renewalMutations,
        className: w.Il,
        analyticsLocation: A
    })), (0, i.jsxs)(u.nVY, {
        label: U.intl.string(U.t["/gs+Pz"]),
        description: U.intl.string(U.t.D8UpUo),
        children: [F ? (0, i.jsx)(V, {}) : null, Y ? (0, i.jsx)(B, {}) : null, W && null != Q ? (0, i.jsx)(H, {
            daysPastDue: Z,
            subscription: n,
            openInvoiceId: Q.id
        }) : null, q && J && (0, i.jsx)(y.j, {
            subscription: n,
            analyticsLocations: h
        }), t, (0, i.jsxs)("div", {
            children: [(0, i.jsx)("div", {
                className: S.length > 0 ? w.HZ : w.__invalid_singleSubscription,
                children: (0, i.jsx)(z, {
                    subscription: n,
                    analyticsLocation: A,
                    paymentSource: a,
                    busy: r,
                    fromStandaloneBillingPage: c,
                    showNoPaymentMethod: F,
                    showInvalidPaymentMethod: Y,
                    fetchedCurrentInvoicePreview: I,
                    fetchedRenewalInvoicePreview: O,
                    fetchedOpenInvoice: Q,
                    isPremiumGroup: q
                })
            }), S.map((e, t) => (0, i.jsxs)("div", {
                className: w.HZ,
                children: [(0, i.jsx)(u.Heading, {
                    variant: "heading-md/semibold",
                    className: w.dd,
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