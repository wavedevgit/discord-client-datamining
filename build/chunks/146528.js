/** chunk id: 146528 params = (module,exports,require) **/
n.d(t, {
    A: () => w
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
    m = n(793574),
    g = n(688810),
    A = n(178856),
    x = n(915089),
    h = n(465932),
    p = n(263063),
    T = n(543767),
    E = n(420139),
    S = n(790284),
    C = n(976860),
    f = n(780964),
    b = n(12901),
    N = n(840065),
    I = n(295405),
    v = n(379082),
    j = n(710144),
    y = n(815332),
    R = n(568286),
    O = n(638182),
    L = n(652215),
    D = n(746080),
    P = n(355097),
    M = n(985018),
    G = n(162580);
let U = e => {
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
    k = e => {
        let {
            subscription: t
        } = e, {
            analyticsLocations: n
        } = (0, g.Ay)(), [s] = (0, T.Kq)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: n,
            analyticsLocation: m.A.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE
        }), l = (0, r.bG)([I.A], () => I.A.hasFetchedPaymentSources);
        return null != s && l ? (0, i.jsx)(E.A, {
            subscription: t,
            currentInvoicePreview: s,
            dropdownClassName: G.Nw
        }) : (0, i.jsx)(c.y$y, {})
    },
    V = e => {
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
            label: M.intl.string(M.t["4neDM+"]),
            children: (0, i.jsx)("div", {
                className: G.__invalid_rowButtons,
                children: n ? (0, i.jsx)(c.Button, {
                    variant: "primary",
                    text: M.intl.string(M.t.y3mAE4),
                    onClick: r,
                    loading: s
                }) : (0, i.jsxs)(i.Fragment, {
                    children: [!t && !l && (0, i.jsx)(A.A, {
                        label: M.intl.string(M.t.FRbWR8),
                        onClick: o
                    }), (0, i.jsx)(A.A, {
                        label: M.intl.string(M.t.Dx0lF7),
                        onClick: a
                    })]
                })
            })
        })
    },
    w = e => {
        let {
            subscription: t
        } = e, {
            listing: n,
            groupListing: l,
            guild: r,
            expanded: m,
            handleToggleExpanded: A,
            subscriptionInfo: T
        } = (0, v.A)(t), [E, I] = s.useState(!1), w = (0, x.GV)(), {
            analyticsLocations: B
        } = (0, g.Ay)(), {
            shouldHideGuildPurchaseEntryPoints: H
        } = (0, h.MH)(r?.id), F = t?.isPurchasedViaAppleGeneric;
        if (null == l || null == n || null == T) return null;
        let Y = async () => {
            try {
                I(!0), await u.QP(t, B), (0, O.q)()
            } finally {
                I(!1)
            }
        }, {
            isCancelled: z,
            isPastDue: X,
            subscriptionPrice: W,
            memberSince: K,
            nextRenewalDate: Z,
            nextRenewalLabel: q,
            isTrial: J
        } = T, Q = n.soft_deleted || null == r || F;
        return (0, i.jsxs)("div", {
            className: G.kL,
            children: [(0, i.jsx)(j.A, {
                onClick: A,
                className: G.N1,
                children: e => {
                    let {
                        areaRef: t,
                        handleStopPropagation: s
                    } = e;
                    return (0, i.jsxs)(i.Fragment, {
                        children: [null != r && (0, i.jsx)(p.Ay, {
                            guild: r,
                            active: !0,
                            size: p.Ay.Sizes.MEDIUM
                        }), (0, i.jsxs)("div", {
                            className: G.if,
                            children: [(0, i.jsx)(c.Text, {
                                variant: "text-md/medium",
                                className: G.J5,
                                children: null != r ? r.name : M.intl.string(M.t["He+cmd"])
                            }), (0, i.jsxs)("div", {
                                className: G.xp,
                                children: [(0, i.jsx)(c.Text, {
                                    variant: "text-sm/normal",
                                    className: G.KR,
                                    children: n.name
                                }), z ? (0, i.jsx)(c.LpS, {
                                    text: M.intl.string(M.t["7uFZGt"])
                                }) : J ? (0, i.jsx)(c.LpS, {
                                    text: M.intl.string(M.t["6anton"]),
                                    color: o.A.unsafe_rawColors.BRAND_500.css
                                }) : X ? (0, i.jsx)(d.m, {
                                    text: M.intl.string(M.t.eSuJE2),
                                    children: (0, i.jsx)("div", {
                                        children: (0, i.jsx)(c.LpS, {
                                            className: G.qc,
                                            text: M.intl.string(M.t.NrRwIl),
                                            color: o.A.unsafe_rawColors.YELLOW_300.css
                                        })
                                    })
                                }) : null, F ? (0, i.jsx)(d.m, {
                                    text: M.intl.string(M.t.nv1IqK),
                                    children: (0, i.jsx)("div", {
                                        children: (0, i.jsx)(c.LpS, {
                                            text: M.intl.string(M.t["sBl3X/"]),
                                            color: o.A.colors.BACKGROUND_MOD_MUTED.css
                                        })
                                    })
                                }) : null]
                            })]
                        }), (0, i.jsx)(c.DUT, {
                            onClick: s(A),
                            "aria-label": M.intl.string(M.t.e5eQOy),
                            "aria-controls": w,
                            "aria-expanded": m,
                            focusProps: {
                                ringTarget: t
                            },
                            children: (0, i.jsx)(c.abt, {
                                size: "md",
                                color: "currentColor",
                                className: a()(G.D6, {
                                    [G.S7]: m
                                })
                            })
                        })]
                    })
                }
            }), m ? (0, i.jsxs)("div", {
                id: w,
                children: [(0, i.jsx)("div", {
                    className: G.yF
                }), (0, i.jsx)(y.A, {
                    groupListingId: l.id,
                    subscription: t,
                    className: G.kE
                }), (0, i.jsxs)("div", {
                    className: G.Zx,
                    children: [(0, i.jsx)(U, {
                        label: q,
                        value: Z
                    }), (0, i.jsx)(U, {
                        label: M.intl.string(M.t.dltUMH),
                        value: W,
                        showInfoIcon: J,
                        infoIconTooltipText: J ? M.intl.string(M.t["/q6fpa"]) : void 0
                    }), (0, i.jsx)(U, {
                        label: M.intl.string(M.t.AOcwWB),
                        value: K
                    })]
                }), (0, i.jsx)(c.hKd, {
                    size: 16
                }), !z && !F && (0, i.jsx)(c.D0$, {
                    label: M.intl.string(M.t.wmMFvA),
                    children: (0, i.jsx)(k, {
                        subscription: t
                    })
                }), !Q && (0, i.jsx)(V, {
                    isTrial: J,
                    isCancelled: z,
                    isResubscribing: E,
                    shouldHideRoleSubscriptionEntryPoints: H,
                    onCancelSubscriptionClick: () => {
                        null != r && (0, R.q)({
                            groupListing: l,
                            listing: n,
                            subscription: t
                        })
                    },
                    onChangePlanClick: () => {
                        null != r && ((0, C.pX)(L.BVt.CHANNEL(r.id, D.VV.ROLE_SUBSCRIPTIONS)), (0, b.default)(), _.A.show(L.kqX.BACK_TO_PREVIOUS_SCREEN, void 0, M.intl.string(M.t.DvbaM4), () => {
                            S.A.setState({
                                subsection: P.nR
                            }), (0, N.openUserSettings)(f.X.SUBSCRIPTIONS_PANEL)
                        }))
                    },
                    onResubscribeClick: Y
                })]
            }) : null]
        })
    }