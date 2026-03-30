/** chunk id: 758400 params = (module,exports,require) **/
n.d(t, {
    Ay: () => W,
    Hy: () => X,
    Sb: () => K,
    TC: () => z
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
    x = n(531260),
    A = n(235986),
    h = n(769015),
    p = n(532794),
    T = n(832946),
    f = n(287809),
    S = n(954571),
    E = n(975571),
    b = n(927578),
    C = n(83617),
    v = n(543767),
    N = n(526292),
    I = n(155984),
    j = n(131168),
    y = n(726532),
    O = n(947418),
    R = n(687944),
    L = n(972710),
    P = n(538511),
    D = n(420139),
    G = n(434395),
    M = n(788868),
    k = n(652215),
    U = n(985018),
    w = n(639268);

function V() {
    return s.useEffect(() => {
        S.default.track(k.HAw.TOOLTIP_VIEWED, {
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
        S.default.track(k.HAw.TOOLTIP_VIEWED, {
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

function F(e) {
    let {
        daysPastDue: t,
        subscription: n,
        openInvoiceId: l
    } = e, {
        analyticsLocations: a
    } = (0, g.Ay)(_.A.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER);
    return s.useEffect(() => {
        S.default.track(k.HAw.TOOLTIP_VIEWED, {
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

function H(e) {
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
            children: b.Ay.getBillingInformationString(t, n, s, !1, r)
        })]
    })
}

function z() {
    let e = (0, d.bG)([f.default], () => f.default.getCurrentUser()),
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
            children: (0, i.jsxs)(A.A, {
                align: A.A.Align.CENTER,
                children: [(0, i.jsx)(h.A, {
                    game: null,
                    size: h.M.SMALL,
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

function Y(e) {
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
        fetchedOpenInvoice: A,
        isPremiumGroup: h
    } = e, {
        analyticsLocations: p
    } = (0, g.Ay)(_.A.SUBSCRIPTION_DETAILS), T = null != c ? {} : {
        subscriptionId: t.id,
        renewal: !0,
        analyticsLocations: p,
        analyticsLocation: n
    }, [f] = (0, v.Kq)(T);
    f = c ?? f;
    let S = null != m ? {} : {
            subscriptionId: t.id,
            renewal: !0,
            applyEntitlements: !0,
            analyticsLocations: p,
            analyticsLocation: n
        },
        [E] = (0, v.Kq)(S);
    E = m ?? E;
    let I = (0, x.A)(),
        y = (0, j.p)(),
        G = (0, N.nf)(),
        V = b.Ay.isBaseSubscriptionCanceled(t),
        B = (0, O.v)(t, s);
    if (null == f || null == E) return (0, i.jsx)(u.y$y, {});
    let F = B ? (0, N.Bv)(E) : null,
        z = null != F || null != G && (G.discountId === M.q || G.discountId === M.EG),
        Y = B && (V && null != y || !V && z) ? (0, i.jsx)(R.A, {
            subscription: t,
            invoicePreview: E,
            paymentSource: s,
            discountOffer: y,
            renewalChurnDiscountInfo: F,
            discountInfo: G,
            isLoading: l,
            analyticsLocation: n
        }) : (0, i.jsx)(P.A, {
            subscription: t,
            currentInvoicePreview: f,
            renewalInvoicePreview: E,
            paymentSource: s,
            busy: l,
            analyticsLocation: n
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsxs)("div", {
            className: w.fj,
            children: [!h && Y, (0, i.jsx)(L.C, {
                subscription: t,
                renewalInvoicePreview: f,
                fromStandaloneBillingPage: r,
                fractionalPremiumInfo: I,
                analyticsLocation: n
            })]
        }), (0, i.jsx)("div", {
            children: (0, i.jsx)(u.nVY, {
                label: U.intl.string(U.t.Sb6wI1),
                children: (0, i.jsxs)("div", {
                    className: w.zH,
                    children: [(0, i.jsx)(H, {
                        subscription: t,
                        renewalInvoicePreview: E,
                        className: w.g4,
                        fractionalPremiumInfo: I,
                        openInvoice: A
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
                                onPaymentSourceAdded: C.c_,
                                highlightAddPaymentMethodButton: d || o,
                                analyticsLocation: n,
                                currentInvoicePreview: f,
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

function K() {
    return s.useEffect(() => {
        S.default.track(k.HAw.TOOLTIP_VIEWED, {
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
                helpCenterLink: E.A.getArticleURL(k.MVz.NITRO)
            })
        })]
    })
}

function W(e) {
    let t, {
        subscription: n,
        subscriptions: l,
        paymentSource: a,
        busy: r,
        fromStandaloneBillingPage: c = !0,
        analyticsLocation: x,
        shouldRefetchInvoicesOnSubscriptionUpdate: A
    } = e;
    null != l && null != l[0] && (n = l[0]);
    let h = (0, d.bG)([f.default], () => f.default.getCurrentUser()),
        {
            analyticsLocations: p
        } = (0, g.Ay)(_.A.SUBSCRIPTION_DETAILS),
        S = (0, j.p)(),
        E = null != l ? l.slice(1) : [],
        [b, C] = s.useState(0);
    s.useEffect(() => {
        if (!A) return;
        let e = e => {
            e.subscription.id === n.id && C(e => e + 1)
        };
        return m.h.subscribe("BILLING_SUBSCRIPTION_UPDATE_SUCCESS", e), () => {
            m.h.unsubscribe("BILLING_SUBSCRIPTION_UPDATE_SUCCESS", e)
        }
    }, [n.id, A]);
    let [N] = (0, v.Kq)({
        subscriptionId: n.id,
        renewal: !0,
        analyticsLocations: p,
        analyticsLocation: x,
        fetchKey: b
    }), [O] = (0, v.Kq)({
        subscriptionId: n.id,
        renewal: !0,
        applyEntitlements: !0,
        analyticsLocations: p,
        analyticsLocation: x,
        userDiscountOfferId: S?.id,
        fetchKey: b
    }), R = a?.invalid, L = (0, d.bG)([f.default], () => f.default.getCurrentUser()?.hasFreePremium()), P = o()(n.currentPeriodEnd), D = null != n.paymentSourceId, M = O?.total ?? 0, H = !D && M > 0 && (7 >= P.diff(o()(), "days") || n.status === k.Dmq.PAST_DUE) && !L && !n.isPurchasedExternally, z = R && n.status === k.Dmq.PAST_DUE && !L && !n.isPurchasedExternally, X = (0, I.l)(), K = !L && X, W = n?.status === k.Dmq.PAST_DUE, Z = W ? o()().diff(o()(n.currentPeriodStart), "days") : 0, q = null != h && h.isPremiumGroupPrimary(), Q = n.hasAnyPremiumGroup, [J] = (0, v.C8)({
        subscriptionId: n.id,
        preventFetch: !(K || W)
    });
    return null == N || null == O ? (0, i.jsx)(u.y$y, {}) : (null != n.renewalMutations && (n.renewalMutations.planId !== n.planId && !(0, T.m1)(n.renewalMutations.planId) || n.hasExternalPlanChange) && (t = (0, i.jsx)(G.A, {
        subscription: n,
        renewalMutations: n.renewalMutations,
        className: w.Il,
        analyticsLocation: x
    })), (0, i.jsxs)(u.nVY, {
        label: U.intl.string(U.t["/gs+Pz"]),
        description: U.intl.string(U.t.D8UpUo),
        children: [H ? (0, i.jsx)(V, {}) : null, z ? (0, i.jsx)(B, {}) : null, K && null != J ? (0, i.jsx)(F, {
            daysPastDue: Z,
            subscription: n,
            openInvoiceId: J.id
        }) : null, q && Q && (0, i.jsx)(y.j, {
            subscription: n,
            analyticsLocations: p
        }), t, (0, i.jsxs)("div", {
            children: [(0, i.jsx)("div", {
                className: E.length > 0 ? w.HZ : w.__invalid_singleSubscription,
                children: (0, i.jsx)(Y, {
                    subscription: n,
                    analyticsLocation: x,
                    paymentSource: a,
                    busy: r,
                    fromStandaloneBillingPage: c,
                    showNoPaymentMethod: H,
                    showInvalidPaymentMethod: z,
                    fetchedCurrentInvoicePreview: N,
                    fetchedRenewalInvoicePreview: O,
                    fetchedOpenInvoice: J,
                    isPremiumGroup: q
                })
            }), E.map((e, t) => (0, i.jsxs)("div", {
                className: w.HZ,
                children: [(0, i.jsx)(u.Heading, {
                    variant: "heading-md/semibold",
                    className: w.dd,
                    children: "Duplicate Subscriptions"
                }), (0, i.jsx)(Y, {
                    subscription: e,
                    analyticsLocation: x,
                    paymentSource: a,
                    busy: r,
                    fromStandaloneBillingPage: c,
                    showNoPaymentMethod: H,
                    showInvalidPaymentMethod: z,
                    fetchedCurrentInvoicePreview: null,
                    fetchedRenewalInvoicePreview: null,
                    fetchedOpenInvoice: null,
                    isPremiumGroup: !1
                })]
            }, t))]
        })]
    }))
}