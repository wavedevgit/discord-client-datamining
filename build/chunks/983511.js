/** Chunk was on 5606 **/
/** chunk id: 983511, original params: e,t,n (module,exports,require) **/
n.d(t, {
    default: () => M
}), n(65821), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(735438),
    s = n.n(l),
    a = n(158954),
    o = n(311907),
    c = n(397927),
    d = n(384904),
    u = n(923408),
    p = n(793574),
    _ = n(688810),
    m = n(531260),
    g = n(235986),
    f = n(543767),
    b = n(253390),
    h = n(735164),
    A = n(683433),
    E = n(692440),
    x = n(178368),
    O = n(97352),
    C = n(166403),
    y = n(473145),
    j = n(927578),
    T = n(580630),
    v = n(802790),
    S = n(788868),
    I = n(818348),
    N = n(985018),
    P = n(397415);

function R(e) {
    let {
        premiumSubscription: t,
        fractionalPremiumInfo: n,
        isInventory: i,
        onNext: l,
        onClose: s,
        transitionState: o
    } = e, c = N.intl.format(N.t.otHdfR, {
        endDate: t.currentPeriodEnd
    });
    t.isPurchasedExternally && null != t.paymentGateway ? c = N.intl.format(N.t.HbpFLg, {
        paymentGatewayName: I.qm[t.paymentGateway],
        subscriptionManagementLink: (0, j.tW)(t.paymentGateway, "SUBSCRIPTION_MANAGEMENT")
    }) : t.isPausedForFractionalPremium ? c = N.intl.format(N.t.Hzqe6y, {
        expirationDate: n.endsAt.toDate()
    }) : i && (c = N.intl.format(N.t.gXSnul, {
        endDate: t.currentPeriodEnd
    }));
    let d = i ? N.intl.string(N.t.iIoSd6) : N.intl.string(N.t.Skzv0u),
        u = t.isPurchasedExternally ? [] : [{
            variant: "secondary",
            text: N.intl.string(N.t["ETE/oC"]),
            onClick: s
        }, {
            variant: "primary",
            text: N.intl.string(N.t.PDTjLN),
            onClick: l
        }];
    return (0, r.jsx)(a.Modal, {
        transitionState: o,
        onClose: s,
        size: "sm",
        title: d,
        actions: u,
        children: (0, r.jsxs)("div", {
            className: P.rf,
            children: [(0, r.jsx)("div", {
                className: P.OC
            }), (0, r.jsx)("div", {
                children: c
            })]
        })
    })
}
async function D(e, t, n, r) {
    let i, l, a = null != r ? r : (i = Object.values(x.A.boostSlots), null != (l = s().sortBy(i.filter(e => !(0, y.I5)(e)), e => [null != e.premiumGuildSubscription, null != e.cooldownEndsAt ? new Date(e.cooldownEndsAt) : null])[0]) ? l.id : null);
    if (null == a) throw Error("No slot to cancel");
    let o = (0, j.aE)(e, t);
    await (0, u.HJ)(a), await (0, d.nV)(e, {
        items: o
    }, {
        amount: 0,
        currency: e.currency
    }, (0, j.UC)(o, e.currency, e.paymentSourceId), n)
}

function w(e) {
    var t, n, l;
    let {
        premiumSubscription: s,
        guildBoostSlotId: a,
        fractionalPremiumInfo: d,
        onBack: u,
        onNext: m,
        onClose: x
    } = e, [C, y] = i.useState(!1), [I, R] = i.useState(null), [w, L] = i.useMemo(() => {
        try {
            return [(0, b.v)(s, -1), !1]
        } catch (e) {
            return [
                [], !0
            ]
        }
    }, [s]), M = i.useRef(x);
    i.useEffect(() => {
        M.current = x
    }), i.useEffect(() => {
        L && M.current()
    }, [L]);
    let {
        premiumSubscriptionPlan: G,
        premiumGuildPlan: U
    } = (0, o.cf)([O.A], () => {
        let e = O.A.get(s.planId);
        return {
            premiumSubscriptionPlan: e,
            premiumGuildPlan: null != e ? O.A.getForSkuAndInterval((0, j.mH)(S.pe.GUILD), e.interval, e.intervalCount) : null
        }
    }), {
        analyticsLocations: k
    } = (0, _.Ay)(), [H] = (0, f.Kq)({
        subscriptionId: s.id,
        renewal: !0,
        currency: s.currency,
        paymentSourceId: s.paymentSourceId,
        analyticsLocations: k,
        analyticsLocation: p.A.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW
    }), B = null != U ? (0, j.Om)(s, null != (t = null == (n = w[0]) ? void 0 : n.quantity) ? t : 0, U.id) : null, [V] = (0, f.Kq)({
        subscriptionId: s.id,
        items: B,
        renewal: !0,
        analyticsLocations: k,
        analyticsLocation: p.A.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW
    });
    if (null == V || null == G || null == U || null == H) return (0, r.jsx)(c.y$y, {});
    let F = s.items.some(e => {
            let {
                planId: t
            } = e;
            return !S.pW.has(t)
        }) && null == s.renewalMutations || (null == (l = s.renewalMutations) ? void 0 : l.items.find(e => {
            let {
                planId: t
            } = e;
            return !S.pW.has(t)
        })) != null,
        Y = w.some(e => {
            let {
                planId: t
            } = e;
            return S.pW.has(t)
        }),
        W = F || Y ? V.total - H.total : -H.total,
        {
            interval: K,
            intervalCount: z
        } = G,
        Z = N.intl.format(N.t["0W23cu"], {
            endDate: V.subscriptionPeriodStart
        });
    return s.isPausedForFractionalPremium && d.fetched && (Z = N.intl.format(N.t.eb0xgS, {
        expirationDate: d.endsAt.toDate()
    })), (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(v.A, {
            "data-migration-pending": !0,
            onClose: x
        }), (0, r.jsxs)(c.$mQ, {
            "data-migration-pending": !0,
            className: P.rf,
            children: [null !== I && (0, r.jsx)("div", {
                className: P.z3,
                children: (0, r.jsx)(c.wx6, {
                    type: "critical",
                    children: I
                })
            }), (0, r.jsx)("div", {
                children: Z
            }), (0, r.jsxs)(h.Yx, {
                className: P.S,
                children: [(0, r.jsx)(h.Xd, {
                    children: N.intl.string(N.t.iqhIp4)
                }), (0, r.jsx)(h.oR, {
                    label: N.intl.format(N.t["Vg+LRr"], {
                        subscriptionCount: 1
                    }),
                    value: (0, T.CE)((0, T.$g)(W, s.currency), K, z),
                    className: P.Au
                }), null != B && B.length > 0 ? (0, r.jsxs)("div", {
                    children: [(0, r.jsx)(h.pK, {}), (0, r.jsx)(E.m0, {
                        premiumSubscription: s,
                        renewalInvoice: V,
                        isUpdate: !0
                    })]
                }) : null]
            })]
        }), (0, r.jsxs)(c.jlY, {
            "data-migration-pending": !0,
            align: g.A.Align.CENTER,
            justify: g.A.Justify.BETWEEN,
            children: [(0, r.jsx)(c.Button, {
                variant: "critical-primary",
                text: N.intl.string(N.t["/AS/gM"]),
                disabled: C,
                onClick: async () => {
                    try {
                        y(!0), R(null), await D(s, w, k, a), m()
                    } catch (e) {
                        R(N.intl.string(N.t["5mlOCW"])), y(!1)
                    }
                }
            }), (0, r.jsx)(A.A, {
                onClick: u
            })]
        })]
    })
}

function L(e) {
    let {
        premiumSubscription: t,
        fractionalPremiumInfo: n,
        onClose: i,
        transitionState: l
    } = e, s = t.currentPeriodEnd;
    t.isPausedForFractionalPremium && (s = n.endsAt.toDate());
    let o = [{
        variant: "primary",
        text: N.intl.string(N.t.BddRzS),
        onClick: i
    }];
    return (0, r.jsx)(a.Modal, {
        transitionState: l,
        onClose: i,
        size: "sm",
        title: N.intl.string(N.t["fZzV/B"]),
        actions: o,
        children: (0, r.jsxs)("div", {
            className: P.rf,
            children: [(0, r.jsx)("div", {
                className: P.OC
            }), (0, r.jsx)("div", {
                children: N.intl.format(N.t["H+z0ns"], {
                    endDate: s
                })
            })]
        })
    })
}

function M(e) {
    let t, {
        guildBoostSlot: n,
        transitionState: l,
        onClose: s
    } = e;
    i.useEffect(() => {
        C.A.hasFetchedSubscriptions() || (0, d.hP)()
    }, []);
    let a = (0, o.bG)([C.A], () => C.A.getPremiumTypeSubscription()),
        u = (0, m.A)(),
        [g, f] = i.useState(1),
        {
            analyticsLocations: b
        } = (0, _.Ay)(p.A.GUILD_BOOST_CANCELLATION_MODAL);
    if (null == a) t = (0, r.jsx)(c.$mQ, {
        "data-migration-pending": !0,
        children: (0, r.jsx)(c.y$y, {})
    });
    else switch (g) {
        case 1:
            t = (0, r.jsx)(R, {
                premiumSubscription: a,
                fractionalPremiumInfo: u,
                isInventory: null == n.premiumGuildSubscription,
                onNext: () => f(2),
                onClose: s,
                transitionState: l
            });
            break;
        case 2:
            t = (0, r.jsx)(c.EOs, {
                "data-migration-pending": !0,
                transitionState: l,
                parentComponent: "GuildBoostSlotCancellationModal",
                children: (0, r.jsx)(w, {
                    premiumSubscription: a,
                    guildBoostSlotId: n.id,
                    fractionalPremiumInfo: u,
                    onBack: () => f(1),
                    onNext: () => f(3),
                    onClose: s
                })
            });
            break;
        case 3:
            t = (0, r.jsx)(L, {
                premiumSubscription: a,
                fractionalPremiumInfo: u,
                onClose: s,
                transitionState: l
            });
            break;
        default:
            throw Error("Unexpected step: ".concat(g))
    }
    return (0, r.jsx)(_.f5, {
        value: b,
        children: t
    })
}