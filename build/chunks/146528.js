/** chunk id: 146528, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => k
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(311907),
    o = n(827734),
    c = n(990078),
    d = n(397927),
    u = n(384904),
    _ = n(912851),
    p = n(793574),
    m = n(688810),
    g = n(178856),
    A = n(915089),
    f = n(465932),
    b = n(263063),
    h = n(543767),
    E = n(420139),
    O = n(976860),
    x = n(780964),
    C = n(12901),
    S = n(840065),
    T = n(295405),
    I = n(379082),
    N = n(710144),
    j = n(815332),
    y = n(568286),
    v = n(638182),
    P = n(652215),
    R = n(746080),
    D = n(355097),
    L = n(985018),
    w = n(185814);
let M = e => {
        let {
            label: t,
            value: n,
            showInfoIcon: i,
            infoIconTooltipText: l
        } = e;
        return (0, r.jsxs)("div", {
            className: w.L0,
            children: [(0, r.jsxs)("div", {
                className: w.a5,
                children: [(0, r.jsx)(d.Heading, {
                    variant: "heading-deprecated-12/semibold",
                    className: w.HU,
                    children: t
                }), i && (0, r.jsx)(c.m, {
                    text: l,
                    children: (0, r.jsx)(d.mir, {
                        size: "xs",
                        color: "currentColor",
                        className: w.Mo
                    })
                })]
            }), (0, r.jsx)(d.Heading, {
                variant: "heading-xl/semibold",
                className: w.sx,
                children: n
            })]
        })
    },
    G = e => {
        let {
            subscription: t
        } = e, {
            analyticsLocations: n
        } = (0, m.Ay)(), [i] = (0, h.Kq)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: n,
            analyticsLocation: p.A.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE
        }), l = (0, a.bG)([T.A], () => T.A.hasFetchedPaymentSources);
        return null != i && l ? (0, r.jsx)(E.A, {
            subscription: t,
            currentInvoicePreview: i,
            dropdownClassName: w.Nw
        }) : (0, r.jsx)(d.y$y, {})
    },
    U = e => {
        let {
            isTrial: t,
            isCancelled: n,
            isResubscribing: i,
            shouldHideRoleSubscriptionEntryPoints: l,
            onCancelSubscriptionClick: s,
            onResubscribeClick: a,
            onChangePlanClick: o
        } = e;
        return n && (t || l) ? null : (0, r.jsx)(d.D0$, {
            label: L.intl.string(L.t["4neDM+"]),
            children: (0, r.jsx)("div", {
                className: w.__invalid_rowButtons,
                children: n ? (0, r.jsx)(d.Button, {
                    variant: "primary",
                    text: L.intl.string(L.t.y3mAE4),
                    onClick: a,
                    loading: i
                }) : (0, r.jsxs)(r.Fragment, {
                    children: [!t && !l && (0, r.jsx)(g.A, {
                        label: L.intl.string(L.t.FRbWR8),
                        onClick: o
                    }), (0, r.jsx)(g.A, {
                        label: L.intl.string(L.t.Dx0lF7),
                        onClick: s
                    })]
                })
            })
        })
    },
    k = e => {
        let {
            subscription: t
        } = e, {
            listing: n,
            groupListing: l,
            guild: a,
            expanded: p,
            handleToggleExpanded: g,
            subscriptionInfo: h
        } = (0, I.A)(t), [E, T] = i.useState(!1), k = (0, A.GV)(), {
            analyticsLocations: B
        } = (0, m.Ay)(), {
            shouldHideGuildPurchaseEntryPoints: H
        } = (0, f.MH)(null == a ? void 0 : a.id), V = null == t ? void 0 : t.isPurchasedViaAppleGeneric;
        if (null == l || null == n || null == h) return null;
        let F = async () => {
            try {
                T(!0), await u.QP(t, B), (0, v.q)()
            } finally {
                T(!1)
            }
        }, {
            isCancelled: Y,
            isPastDue: W,
            subscriptionPrice: K,
            memberSince: z,
            nextRenewalDate: Z,
            nextRenewalLabel: X,
            isTrial: q
        } = h, J = n.soft_deleted || null == a || V;
        return (0, r.jsxs)("div", {
            className: w.kL,
            children: [(0, r.jsx)(N.A, {
                onClick: g,
                className: w.N1,
                children: e => {
                    let {
                        areaRef: t,
                        handleStopPropagation: i
                    } = e;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [null != a && (0, r.jsx)(b.A, {
                            guild: a,
                            active: !0,
                            size: b.A.Sizes.MEDIUM
                        }), (0, r.jsxs)("div", {
                            className: w.if,
                            children: [(0, r.jsx)(d.Text, {
                                variant: "text-md/medium",
                                className: w.J5,
                                children: null != a ? a.name : L.intl.string(L.t["He+cmd"])
                            }), (0, r.jsxs)("div", {
                                className: w.xp,
                                children: [(0, r.jsx)(d.Text, {
                                    variant: "text-sm/normal",
                                    className: w.KR,
                                    children: n.name
                                }), Y ? (0, r.jsx)(d.LpS, {
                                    text: L.intl.string(L.t["7uFZGt"])
                                }) : q ? (0, r.jsx)(d.LpS, {
                                    text: L.intl.string(L.t["6anton"]),
                                    color: o.A.unsafe_rawColors.BRAND_500.css
                                }) : W ? (0, r.jsx)(c.m, {
                                    text: L.intl.string(L.t.eSuJE2),
                                    children: (0, r.jsx)("div", {
                                        children: (0, r.jsx)(d.LpS, {
                                            className: w.qc,
                                            text: L.intl.string(L.t.NrRwIl),
                                            color: o.A.unsafe_rawColors.YELLOW_300.css
                                        })
                                    })
                                }) : null, V ? (0, r.jsx)(c.m, {
                                    text: L.intl.string(L.t.nv1IqK),
                                    children: (0, r.jsx)("div", {
                                        children: (0, r.jsx)(d.LpS, {
                                            text: L.intl.string(L.t["sBl3X/"]),
                                            color: o.A.colors.BACKGROUND_MOD_MUTED.css
                                        })
                                    })
                                }) : null]
                            })]
                        }), (0, r.jsx)(d.DUT, {
                            onClick: i(g),
                            "aria-label": L.intl.string(L.t.e5eQOy),
                            "aria-controls": k,
                            "aria-expanded": p,
                            focusProps: {
                                ringTarget: t
                            },
                            children: (0, r.jsx)(d.abt, {
                                size: "md",
                                color: "currentColor",
                                className: s()(w.D6, {
                                    [w.S7]: p
                                })
                            })
                        })]
                    })
                }
            }), p ? (0, r.jsxs)("div", {
                id: k,
                children: [(0, r.jsx)("div", {
                    className: w.yF
                }), (0, r.jsx)(j.A, {
                    groupListingId: l.id,
                    subscription: t,
                    className: w.kE
                }), (0, r.jsxs)("div", {
                    className: w.Zx,
                    children: [(0, r.jsx)(M, {
                        label: X,
                        value: Z
                    }), (0, r.jsx)(M, {
                        label: L.intl.string(L.t.dltUMH),
                        value: K,
                        showInfoIcon: q,
                        infoIconTooltipText: q ? L.intl.string(L.t["/q6fpa"]) : void 0
                    }), (0, r.jsx)(M, {
                        label: L.intl.string(L.t.AOcwWB),
                        value: z
                    })]
                }), (0, r.jsx)(d.hKd, {
                    size: 16
                }), !Y && !V && (0, r.jsx)(d.D0$, {
                    label: L.intl.string(L.t.wmMFvA),
                    children: (0, r.jsx)(G, {
                        subscription: t
                    })
                }), !J && (0, r.jsx)(U, {
                    isTrial: q,
                    isCancelled: Y,
                    isResubscribing: E,
                    shouldHideRoleSubscriptionEntryPoints: H,
                    onCancelSubscriptionClick: () => {
                        null != a && (0, y.q)({
                            groupListing: l,
                            listing: n,
                            subscription: t
                        })
                    },
                    onChangePlanClick: () => {
                        null != a && ((0, O.pX)(P.BVt.CHANNEL(a.id, R.VV.ROLE_SUBSCRIPTIONS)), (0, C.default)(), _.A.show(P.kqX.BACK_TO_PREVIOUS_SCREEN, void 0, L.intl.string(L.t.DvbaM4), () => (0, S.openUserSettings)(x.X.SUBSCRIPTIONS_PANEL, {
                            section: P.nc_.SUBSCRIPTIONS,
                            subsection: D.nR
                        })))
                    },
                    onResubscribeClick: F
                })]
            }) : null]
        })
    }