/** Chunk was on 5606 **/
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
    p = n(912851),
    _ = n(793574),
    m = n(688810),
    g = n(178856),
    f = n(915089),
    b = n(465932),
    h = n(263063),
    A = n(543767),
    E = n(420139),
    x = n(976860),
    O = n(780964),
    C = n(12901),
    y = n(840065),
    j = n(295405),
    T = n(379082),
    v = n(710144),
    S = n(815332),
    I = n(568286),
    N = n(638182),
    P = n(652215),
    R = n(746080),
    D = n(355097),
    w = n(985018),
    L = n(185814);
let M = e => {
        let {
            label: t,
            value: n,
            showInfoIcon: i,
            infoIconTooltipText: l
        } = e;
        return (0, r.jsxs)("div", {
            className: L.L0,
            children: [(0, r.jsxs)("div", {
                className: L.a5,
                children: [(0, r.jsx)(d.Heading, {
                    variant: "heading-deprecated-12/semibold",
                    className: L.HU,
                    children: t
                }), i && (0, r.jsx)(c.m, {
                    text: l,
                    children: (0, r.jsx)(d.mir, {
                        size: "xs",
                        color: "currentColor",
                        className: L.Mo
                    })
                })]
            }), (0, r.jsx)(d.Heading, {
                variant: "heading-xl/semibold",
                className: L.sx,
                children: n
            })]
        })
    },
    G = e => {
        let {
            subscription: t
        } = e, {
            analyticsLocations: n
        } = (0, m.Ay)(), [i] = (0, A.Kq)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: n,
            analyticsLocation: _.A.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE
        }), l = (0, a.bG)([j.A], () => j.A.hasFetchedPaymentSources);
        return null != i && l ? (0, r.jsx)(E.A, {
            subscription: t,
            currentInvoicePreview: i,
            dropdownClassName: L.Nw
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
            label: w.intl.string(w.t["4neDM+"]),
            children: (0, r.jsx)("div", {
                className: L.__invalid_rowButtons,
                children: n ? (0, r.jsx)(d.Button, {
                    variant: "primary",
                    text: w.intl.string(w.t.y3mAE4),
                    onClick: a,
                    loading: i
                }) : (0, r.jsxs)(r.Fragment, {
                    children: [!t && !l && (0, r.jsx)(g.A, {
                        label: w.intl.string(w.t.FRbWR8),
                        onClick: o
                    }), (0, r.jsx)(g.A, {
                        label: w.intl.string(w.t.Dx0lF7),
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
            expanded: _,
            handleToggleExpanded: g,
            subscriptionInfo: A
        } = (0, T.A)(t), [E, j] = i.useState(!1), k = (0, f.GV)(), {
            analyticsLocations: H
        } = (0, m.Ay)(), {
            shouldHideGuildPurchaseEntryPoints: B
        } = (0, b.MH)(null == a ? void 0 : a.id), V = null == t ? void 0 : t.isPurchasedViaAppleGeneric;
        if (null == l || null == n || null == A) return null;
        let F = async () => {
            try {
                j(!0), await u.QP(t, H), (0, N.q)()
            } finally {
                j(!1)
            }
        }, {
            isCancelled: Y,
            isPastDue: W,
            subscriptionPrice: K,
            memberSince: z,
            nextRenewalDate: Z,
            nextRenewalLabel: q,
            isTrial: X
        } = A, J = n.soft_deleted || null == a || V;
        return (0, r.jsxs)("div", {
            className: L.kL,
            children: [(0, r.jsx)(v.A, {
                onClick: g,
                className: L.N1,
                children: e => {
                    let {
                        areaRef: t,
                        handleStopPropagation: i
                    } = e;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [null != a && (0, r.jsx)(h.A, {
                            guild: a,
                            active: !0,
                            size: h.A.Sizes.MEDIUM
                        }), (0, r.jsxs)("div", {
                            className: L.if,
                            children: [(0, r.jsx)(d.Text, {
                                variant: "text-md/medium",
                                className: L.J5,
                                children: null != a ? a.name : w.intl.string(w.t["He+cmd"])
                            }), (0, r.jsxs)("div", {
                                className: L.xp,
                                children: [(0, r.jsx)(d.Text, {
                                    variant: "text-sm/normal",
                                    className: L.KR,
                                    children: n.name
                                }), Y ? (0, r.jsx)(d.LpS, {
                                    text: w.intl.string(w.t["7uFZGt"])
                                }) : X ? (0, r.jsx)(d.LpS, {
                                    text: w.intl.string(w.t["6anton"]),
                                    color: o.A.unsafe_rawColors.BRAND_500.css
                                }) : W ? (0, r.jsx)(c.m, {
                                    text: w.intl.string(w.t.eSuJE2),
                                    children: (0, r.jsx)("div", {
                                        children: (0, r.jsx)(d.LpS, {
                                            className: L.qc,
                                            text: w.intl.string(w.t.NrRwIl),
                                            color: o.A.unsafe_rawColors.YELLOW_300.css
                                        })
                                    })
                                }) : null, V ? (0, r.jsx)(c.m, {
                                    text: w.intl.string(w.t.nv1IqK),
                                    children: (0, r.jsx)("div", {
                                        children: (0, r.jsx)(d.LpS, {
                                            text: w.intl.string(w.t["sBl3X/"]),
                                            color: o.A.colors.BACKGROUND_MOD_MUTED.css
                                        })
                                    })
                                }) : null]
                            })]
                        }), (0, r.jsx)(d.DUT, {
                            onClick: i(g),
                            "aria-label": w.intl.string(w.t.e5eQOy),
                            "aria-controls": k,
                            "aria-expanded": _,
                            focusProps: {
                                ringTarget: t
                            },
                            children: (0, r.jsx)(d.abt, {
                                size: "md",
                                color: "currentColor",
                                className: s()(L.D6, {
                                    [L.S7]: _
                                })
                            })
                        })]
                    })
                }
            }), _ ? (0, r.jsxs)("div", {
                id: k,
                children: [(0, r.jsx)("div", {
                    className: L.yF
                }), (0, r.jsx)(S.A, {
                    groupListingId: l.id,
                    subscription: t,
                    className: L.kE
                }), (0, r.jsxs)("div", {
                    className: L.Zx,
                    children: [(0, r.jsx)(M, {
                        label: q,
                        value: Z
                    }), (0, r.jsx)(M, {
                        label: w.intl.string(w.t.dltUMH),
                        value: K,
                        showInfoIcon: X,
                        infoIconTooltipText: X ? w.intl.string(w.t["/q6fpa"]) : void 0
                    }), (0, r.jsx)(M, {
                        label: w.intl.string(w.t.AOcwWB),
                        value: z
                    })]
                }), (0, r.jsx)(d.hKd, {
                    size: 16
                }), !Y && !V && (0, r.jsx)(d.D0$, {
                    label: w.intl.string(w.t.wmMFvA),
                    children: (0, r.jsx)(G, {
                        subscription: t
                    })
                }), !J && (0, r.jsx)(U, {
                    isTrial: X,
                    isCancelled: Y,
                    isResubscribing: E,
                    shouldHideRoleSubscriptionEntryPoints: B,
                    onCancelSubscriptionClick: () => {
                        null != a && (0, I.q)({
                            groupListing: l,
                            listing: n,
                            subscription: t
                        })
                    },
                    onChangePlanClick: () => {
                        null != a && ((0, x.pX)(P.BVt.CHANNEL(a.id, R.VV.ROLE_SUBSCRIPTIONS)), (0, C.default)(), p.A.show(P.kqX.BACK_TO_PREVIOUS_SCREEN, void 0, w.intl.string(w.t.DvbaM4), () => (0, y.openUserSettings)(O.X.SUBSCRIPTIONS_PANEL, {
                            section: P.nc_.SUBSCRIPTIONS,
                            subsection: D.nR
                        })))
                    },
                    onResubscribeClick: F
                })]
            }) : null]
        })
    }