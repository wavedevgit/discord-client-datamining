/** chunk id: 146528 params = (module,exports,require) **/
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
    m = n(912851),
    _ = n(793574),
    g = n(688810),
    A = n(178856),
    x = n(915089),
    p = n(465932),
    h = n(263063),
    f = n(543767),
    T = n(420139),
    E = n(790284),
    S = n(976860),
    b = n(780964),
    C = n(12901),
    N = n(840065),
    v = n(295405),
    I = n(379082),
    j = n(710144),
    y = n(815332),
    O = n(568286),
    R = n(638182),
    L = n(652215),
    P = n(746080),
    D = n(355097),
    M = n(985018),
    G = n(185814);
let k = e => {
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
        } = (0, g.Ay)(), [s] = (0, f.Kq)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: n,
            analyticsLocation: _.A.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE
        }), l = (0, r.bG)([v.A], () => v.A.hasFetchedPaymentSources);
        return null != s && l ? (0, i.jsx)(T.A, {
            subscription: t,
            currentInvoicePreview: s,
            dropdownClassName: G.Nw
        }) : (0, i.jsx)(c.y$y, {})
    },
    w = e => {
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
    V = e => {
        let {
            subscription: t
        } = e, {
            listing: n,
            groupListing: l,
            guild: r,
            expanded: _,
            handleToggleExpanded: A,
            subscriptionInfo: f
        } = (0, I.A)(t), [T, v] = s.useState(!1), V = (0, x.GV)(), {
            analyticsLocations: B
        } = (0, g.Ay)(), {
            shouldHideGuildPurchaseEntryPoints: F
        } = (0, p.MH)(r?.id), H = t?.isPurchasedViaAppleGeneric;
        if (null == l || null == n || null == f) return null;
        let Y = async () => {
            try {
                v(!0), await u.QP(t, B), (0, R.q)()
            } finally {
                v(!1)
            }
        }, {
            isCancelled: z,
            isPastDue: X,
            subscriptionPrice: W,
            memberSince: K,
            nextRenewalDate: Z,
            nextRenewalLabel: q,
            isTrial: J
        } = f, Q = n.soft_deleted || null == r || H;
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
                        children: [null != r && (0, i.jsx)(h.Ay, {
                            guild: r,
                            active: !0,
                            size: h.Ay.Sizes.MEDIUM
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
                                }) : null, H ? (0, i.jsx)(d.m, {
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
                            "aria-controls": V,
                            "aria-expanded": _,
                            focusProps: {
                                ringTarget: t
                            },
                            children: (0, i.jsx)(c.abt, {
                                size: "md",
                                color: "currentColor",
                                className: a()(G.D6, {
                                    [G.S7]: _
                                })
                            })
                        })]
                    })
                }
            }), _ ? (0, i.jsxs)("div", {
                id: V,
                children: [(0, i.jsx)("div", {
                    className: G.yF
                }), (0, i.jsx)(y.A, {
                    groupListingId: l.id,
                    subscription: t,
                    className: G.kE
                }), (0, i.jsxs)("div", {
                    className: G.Zx,
                    children: [(0, i.jsx)(k, {
                        label: q,
                        value: Z
                    }), (0, i.jsx)(k, {
                        label: M.intl.string(M.t.dltUMH),
                        value: W,
                        showInfoIcon: J,
                        infoIconTooltipText: J ? M.intl.string(M.t["/q6fpa"]) : void 0
                    }), (0, i.jsx)(k, {
                        label: M.intl.string(M.t.AOcwWB),
                        value: K
                    })]
                }), (0, i.jsx)(c.hKd, {
                    size: 16
                }), !z && !H && (0, i.jsx)(c.D0$, {
                    label: M.intl.string(M.t.wmMFvA),
                    children: (0, i.jsx)(U, {
                        subscription: t
                    })
                }), !Q && (0, i.jsx)(w, {
                    isTrial: J,
                    isCancelled: z,
                    isResubscribing: T,
                    shouldHideRoleSubscriptionEntryPoints: F,
                    onCancelSubscriptionClick: () => {
                        null != r && (0, O.q)({
                            groupListing: l,
                            listing: n,
                            subscription: t
                        })
                    },
                    onChangePlanClick: () => {
                        null != r && ((0, S.pX)(L.BVt.CHANNEL(r.id, P.VV.ROLE_SUBSCRIPTIONS)), (0, C.default)(), m.A.show(L.kqX.BACK_TO_PREVIOUS_SCREEN, void 0, M.intl.string(M.t.DvbaM4), () => {
                            E.A.setState({
                                subsection: D.nR
                            }), (0, N.openUserSettings)(b.X.SUBSCRIPTIONS_PANEL)
                        }))
                    },
                    onResubscribeClick: Y
                })]
            }) : null]
        })
    }