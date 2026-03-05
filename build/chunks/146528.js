/** chunk id: 146528, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => V
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(827734),
    d = n(990078),
    c = n(397927),
    u = n(384904),
    _ = n(912851),
    g = n(793574),
    m = n(688810),
    A = n(178856),
    h = n(915089),
    p = n(465932),
    x = n(263063),
    E = n(543767),
    T = n(420139),
    S = n(976860),
    C = n(780964),
    I = n(12901),
    f = n(840065),
    b = n(295405),
    N = n(379082),
    v = n(710144),
    j = n(815332),
    O = n(568286),
    R = n(638182),
    y = n(652215),
    P = n(746080),
    L = n(355097),
    D = n(985018),
    G = n(185814);
let M = e => {
        let {
            label: t,
            value: n,
            showInfoIcon: s,
            infoIconTooltipText: l
        } = e;
        return (0, i.jsxs)("div", {
            className: G.L0,
            children: [(0, i.jsxs)("div", {
                className: G.a5,
                children: [(0, i.jsx)(c.Heading, {
                    variant: "heading-deprecated-12/semibold",
                    className: G.HU,
                    children: t
                }), s && (0, i.jsx)(d.m, {
                    text: l,
                    children: (0, i.jsx)(c.mir, {
                        size: "xs",
                        color: "currentColor",
                        className: G.Mo
                    })
                })]
            }), (0, i.jsx)(c.Heading, {
                variant: "heading-xl/semibold",
                className: G.sx,
                children: n
            })]
        })
    },
    U = e => {
        let {
            subscription: t
        } = e, {
            analyticsLocations: n
        } = (0, m.Ay)(), [s] = (0, E.Kq)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: n,
            analyticsLocation: g.A.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE
        }), l = (0, r.bG)([b.A], () => b.A.hasFetchedPaymentSources);
        return null != s && l ? (0, i.jsx)(T.A, {
            subscription: t,
            currentInvoicePreview: s,
            dropdownClassName: G.Nw
        }) : (0, i.jsx)(c.y$y, {})
    },
    k = e => {
        let {
            isTrial: t,
            isCancelled: n,
            isResubscribing: s,
            shouldHideRoleSubscriptionEntryPoints: l,
            onCancelSubscriptionClick: a,
            onResubscribeClick: r,
            onChangePlanClick: o
        } = e;
        return n && (t || l) ? null : (0, i.jsx)(c.D0$, {
            label: D.intl.string(D.t["4neDM+"]),
            children: (0, i.jsx)("div", {
                className: G.__invalid_rowButtons,
                children: n ? (0, i.jsx)(c.Button, {
                    variant: "primary",
                    text: D.intl.string(D.t.y3mAE4),
                    onClick: r,
                    loading: s
                }) : (0, i.jsxs)(i.Fragment, {
                    children: [!t && !l && (0, i.jsx)(A.A, {
                        label: D.intl.string(D.t.FRbWR8),
                        onClick: o
                    }), (0, i.jsx)(A.A, {
                        label: D.intl.string(D.t.Dx0lF7),
                        onClick: a
                    })]
                })
            })
        })
    },
    V = e => {
        let {
            subscription: t
        } = e, {
            listing: n,
            groupListing: l,
            guild: r,
            expanded: g,
            handleToggleExpanded: A,
            subscriptionInfo: E
        } = (0, N.A)(t), [T, b] = s.useState(!1), V = (0, h.GV)(), {
            analyticsLocations: w
        } = (0, m.Ay)(), {
            shouldHideGuildPurchaseEntryPoints: H
        } = (0, p.MH)(r?.id), B = t?.isPurchasedViaAppleGeneric;
        if (null == l || null == n || null == E) return null;
        let Y = async () => {
            try {
                b(!0), await u.QP(t, w), (0, R.q)()
            } finally {
                b(!1)
            }
        }, {
            isCancelled: F,
            isPastDue: z,
            subscriptionPrice: X,
            memberSince: W,
            nextRenewalDate: K,
            nextRenewalLabel: Z,
            isTrial: q
        } = E, J = n.soft_deleted || null == r || B;
        return (0, i.jsxs)("div", {
            className: G.kL,
            children: [(0, i.jsx)(v.A, {
                onClick: A,
                className: G.N1,
                children: e => {
                    let {
                        areaRef: t,
                        handleStopPropagation: s
                    } = e;
                    return (0, i.jsxs)(i.Fragment, {
                        children: [null != r && (0, i.jsx)(x.Ay, {
                            guild: r,
                            active: !0,
                            size: x.Ay.Sizes.MEDIUM
                        }), (0, i.jsxs)("div", {
                            className: G.if,
                            children: [(0, i.jsx)(c.Text, {
                                variant: "text-md/medium",
                                className: G.J5,
                                children: null != r ? r.name : D.intl.string(D.t["He+cmd"])
                            }), (0, i.jsxs)("div", {
                                className: G.xp,
                                children: [(0, i.jsx)(c.Text, {
                                    variant: "text-sm/normal",
                                    className: G.KR,
                                    children: n.name
                                }), F ? (0, i.jsx)(c.LpS, {
                                    text: D.intl.string(D.t["7uFZGt"])
                                }) : q ? (0, i.jsx)(c.LpS, {
                                    text: D.intl.string(D.t["6anton"]),
                                    color: o.A.unsafe_rawColors.BRAND_500.css
                                }) : z ? (0, i.jsx)(d.m, {
                                    text: D.intl.string(D.t.eSuJE2),
                                    children: (0, i.jsx)("div", {
                                        children: (0, i.jsx)(c.LpS, {
                                            className: G.qc,
                                            text: D.intl.string(D.t.NrRwIl),
                                            color: o.A.unsafe_rawColors.YELLOW_300.css
                                        })
                                    })
                                }) : null, B ? (0, i.jsx)(d.m, {
                                    text: D.intl.string(D.t.nv1IqK),
                                    children: (0, i.jsx)("div", {
                                        children: (0, i.jsx)(c.LpS, {
                                            text: D.intl.string(D.t["sBl3X/"]),
                                            color: o.A.colors.BACKGROUND_MOD_MUTED.css
                                        })
                                    })
                                }) : null]
                            })]
                        }), (0, i.jsx)(c.DUT, {
                            onClick: s(A),
                            "aria-label": D.intl.string(D.t.e5eQOy),
                            "aria-controls": V,
                            "aria-expanded": g,
                            focusProps: {
                                ringTarget: t
                            },
                            children: (0, i.jsx)(c.abt, {
                                size: "md",
                                color: "currentColor",
                                className: a()(G.D6, {
                                    [G.S7]: g
                                })
                            })
                        })]
                    })
                }
            }), g ? (0, i.jsxs)("div", {
                id: V,
                children: [(0, i.jsx)("div", {
                    className: G.yF
                }), (0, i.jsx)(j.A, {
                    groupListingId: l.id,
                    subscription: t,
                    className: G.kE
                }), (0, i.jsxs)("div", {
                    className: G.Zx,
                    children: [(0, i.jsx)(M, {
                        label: Z,
                        value: K
                    }), (0, i.jsx)(M, {
                        label: D.intl.string(D.t.dltUMH),
                        value: X,
                        showInfoIcon: q,
                        infoIconTooltipText: q ? D.intl.string(D.t["/q6fpa"]) : void 0
                    }), (0, i.jsx)(M, {
                        label: D.intl.string(D.t.AOcwWB),
                        value: W
                    })]
                }), (0, i.jsx)(c.hKd, {
                    size: 16
                }), !F && !B && (0, i.jsx)(c.D0$, {
                    label: D.intl.string(D.t.wmMFvA),
                    children: (0, i.jsx)(U, {
                        subscription: t
                    })
                }), !J && (0, i.jsx)(k, {
                    isTrial: q,
                    isCancelled: F,
                    isResubscribing: T,
                    shouldHideRoleSubscriptionEntryPoints: H,
                    onCancelSubscriptionClick: () => {
                        null != r && (0, O.q)({
                            groupListing: l,
                            listing: n,
                            subscription: t
                        })
                    },
                    onChangePlanClick: () => {
                        null != r && ((0, S.pX)(y.BVt.CHANNEL(r.id, P.VV.ROLE_SUBSCRIPTIONS)), (0, I.default)(), _.A.show(y.kqX.BACK_TO_PREVIOUS_SCREEN, void 0, D.intl.string(D.t.DvbaM4), () => (0, f.openUserSettings)(C.X.SUBSCRIPTIONS_PANEL, {
                            section: y.nc_.SUBSCRIPTIONS,
                            subsection: L.nR
                        })))
                    },
                    onResubscribeClick: Y
                })]
            }) : null]
        })
    }