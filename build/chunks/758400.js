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
    r = n.n(l),
    a = n(989349),
    o = n.n(a),
    d = n(311907),
    c = n(827734),
    u = n(397927),
    _ = n(73153),
    m = n(793574),
    g = n(688810),
    A = n(531260),
    h = n(235986),
    x = n(769015),
    p = n(532794),
    T = n(832946),
    E = n(287809),
    C = n(954571),
    S = n(975571),
    f = n(927578),
    N = n(83617),
    b = n(543767),
    I = n(526292),
    v = n(155984),
    j = n(131168),
    O = n(726532),
    y = n(947418),
    R = n(687944),
    P = n(972710),
    D = n(538511),
    L = n(420139),
    M = n(434395),
    G = n(788868),
    U = n(652215),
    k = n(985018),
    V = n(380596);

function w() {
    return s.useEffect(() => {
        C.default.track(U.HAw.TOOLTIP_VIEWED, {
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
        C.default.track(U.HAw.TOOLTIP_VIEWED, {
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
        analyticsLocations: r
    } = (0, g.Ay)(m.A.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER);
    return s.useEffect(() => {
        C.default.track(U.HAw.TOOLTIP_VIEWED, {
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
                        analyticsLocations: r
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
        fractionalPremiumInfo: a
    } = e;
    return (0, i.jsxs)("div", {
        className: r()(V.KF, l),
        children: [(0, i.jsx)(u.Heading, {
            variant: "heading-md/semibold",
            className: V.QL,
            children: k.intl.string(k.t.KXQjfc)
        }), (0, i.jsx)("div", {
            children: f.Ay.getBillingInformationString(t, n, s, !1, a)
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
            children: (0, i.jsxs)(h.A, {
                align: h.A.Align.CENTER,
                children: [(0, i.jsx)(x.A, {
                    game: null,
                    size: x.M.SMALL,
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
        fromStandaloneBillingPage: a,
        showInvalidPaymentMethod: o,
        showNoPaymentMethod: d,
        fetchedCurrentInvoicePreview: c,
        fetchedRenewalInvoicePreview: _,
        fetchedOpenInvoice: h,
        isPremiumGroup: x
    } = e, {
        analyticsLocations: p
    } = (0, g.Ay)(m.A.SUBSCRIPTION_DETAILS), T = null != c ? {} : {
        subscriptionId: t.id,
        renewal: !0,
        analyticsLocations: p,
        analyticsLocation: n
    }, [E] = (0, b.Kq)(T);
    E = c ?? E;
    let C = null != _ ? {} : {
            subscriptionId: t.id,
            renewal: !0,
            applyEntitlements: !0,
            analyticsLocations: p,
            analyticsLocation: n
        },
        [S] = (0, b.Kq)(C);
    S = _ ?? S;
    let v = (0, A.A)(),
        O = (0, j.p)(),
        M = (0, I.nf)(),
        w = f.Ay.isBaseSubscriptionCanceled(t),
        B = (0, y.v)(t, s);
    if (null == E || null == S) return (0, i.jsx)(u.y$y, {});
    let H = B ? (0, I.Bv)(S) : null,
        Y = null != H || null != M && (M.discountId === G.q || M.discountId === G.EG),
        z = B && (w && null != O || !w && Y) ? (0, i.jsx)(R.A, {
            subscription: t,
            invoicePreview: S,
            paymentSource: s,
            discountOffer: O,
            renewalChurnDiscountInfo: H,
            discountInfo: M,
            isLoading: l,
            analyticsLocation: n
        }) : (0, i.jsx)(D.A, {
            subscription: t,
            currentInvoicePreview: E,
            renewalInvoicePreview: S,
            paymentSource: s,
            busy: l,
            analyticsLocation: n
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsxs)("div", {
            className: V.fj,
            children: [!x && z, (0, i.jsx)(P.C, {
                subscription: t,
                renewalInvoicePreview: E,
                fromStandaloneBillingPage: a,
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
                        renewalInvoicePreview: S,
                        className: V.g4,
                        fractionalPremiumInfo: v,
                        openInvoice: h
                    }), (0, i.jsx)("div", {
                        className: r()(V.g4, {
                            [V.sE]: o
                        }),
                        children: (0, i.jsx)(u.D0$, {
                            label: t.isPurchasedExternally && null != t.paymentGateway ? k.intl.formatToPlainString(k.t["rTk9v/"], {
                                paymentGatewayName: U.qmC[t.paymentGateway]
                            }) : k.intl.string(k.t.iRzXKd),
                            children: (0, i.jsx)(L.A, {
                                subscription: t,
                                onPaymentSourceAdded: N.c_,
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
        C.default.track(U.HAw.TOOLTIP_VIEWED, {
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
                helpCenterLink: S.A.getArticleURL(U.MVz.NITRO)
            })
        })]
    })
}

function K(e) {
    let t, {
        subscription: n,
        subscriptions: l,
        paymentSource: r,
        busy: a,
        fromStandaloneBillingPage: c = !0,
        analyticsLocation: A,
        shouldRefetchInvoicesOnSubscriptionUpdate: h
    } = e;
    null != l && null != l[0] && (n = l[0]);
    let x = (0, d.bG)([E.default], () => E.default.getCurrentUser()),
        {
            analyticsLocations: p
        } = (0, g.Ay)(m.A.SUBSCRIPTION_DETAILS),
        C = (0, j.p)(),
        S = null != l ? l.slice(1) : [],
        [f, N] = s.useState(0);
    s.useEffect(() => {
        if (!h) return;
        let e = e => {
            e.subscription.id === n.id && N(e => e + 1)
        };
        return _.h.subscribe("BILLING_SUBSCRIPTION_UPDATE_SUCCESS", e), () => {
            _.h.unsubscribe("BILLING_SUBSCRIPTION_UPDATE_SUCCESS", e)
        }
    }, [n.id, h]);
    let [I] = (0, b.Kq)({
        subscriptionId: n.id,
        renewal: !0,
        analyticsLocations: p,
        analyticsLocation: A,
        fetchKey: f
    }), [y] = (0, b.Kq)({
        subscriptionId: n.id,
        renewal: !0,
        applyEntitlements: !0,
        analyticsLocations: p,
        analyticsLocation: A,
        userDiscountOfferId: C?.id,
        fetchKey: f
    }), R = r?.invalid, P = (0, d.bG)([E.default], () => E.default.getCurrentUser()?.hasFreePremium()), D = o()(n.currentPeriodEnd), L = null != n.paymentSourceId, G = y?.total ?? 0, F = !L && G > 0 && (7 >= D.diff(o()(), "days") || n.status === U.Dmq.PAST_DUE) && !P && !n.isPurchasedExternally, Y = R && n.status === U.Dmq.PAST_DUE && !P && !n.isPurchasedExternally, X = (0, v.l)(), W = !P && X, K = n?.status === U.Dmq.PAST_DUE, Z = K ? o()().diff(o()(n.currentPeriodStart), "days") : 0, q = null != x && x.isPremiumGroupPrimary(), J = n.hasAnyPremiumGroup, [Q] = (0, b.C8)({
        subscriptionId: n.id,
        preventFetch: !(W || K)
    });
    return null == I || null == y ? (0, i.jsx)(u.y$y, {}) : (null != n.renewalMutations && (n.renewalMutations.planId !== n.planId && !(0, T.m1)(n.renewalMutations.planId) || n.hasExternalPlanChange) && (t = (0, i.jsx)(M.A, {
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
        }) : null, q && J && (0, i.jsx)(O.j, {
            subscription: n,
            analyticsLocations: p
        }), t, (0, i.jsxs)("div", {
            children: [(0, i.jsx)("div", {
                className: S.length > 0 ? V.HZ : V.__invalid_singleSubscription,
                children: (0, i.jsx)(z, {
                    subscription: n,
                    analyticsLocation: A,
                    paymentSource: r,
                    busy: a,
                    fromStandaloneBillingPage: c,
                    showNoPaymentMethod: F,
                    showInvalidPaymentMethod: Y,
                    fetchedCurrentInvoicePreview: I,
                    fetchedRenewalInvoicePreview: y,
                    fetchedOpenInvoice: Q,
                    isPremiumGroup: q
                })
            }), S.map((e, t) => (0, i.jsxs)("div", {
                className: V.HZ,
                children: [(0, i.jsx)(u.Heading, {
                    variant: "heading-md/semibold",
                    className: V.dd,
                    children: "Duplicate Subscriptions"
                }), (0, i.jsx)(z, {
                    subscription: e,
                    analyticsLocation: A,
                    paymentSource: r,
                    busy: a,
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