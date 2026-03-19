/** chunk id: 983511 params = (module,exports,require) **/
n.d(t, {
    default: () => M
});
var i = n(627968),
    s = n(64700),
    l = n(735438),
    a = n.n(l),
    r = n(158954),
    o = n(311907),
    d = n(397927),
    c = n(384904),
    u = n(923408),
    _ = n(793574),
    m = n(688810),
    g = n(531260),
    A = n(235986),
    x = n(543767),
    h = n(253390),
    p = n(735164),
    T = n(683433),
    E = n(692440),
    S = n(178368),
    C = n(97352),
    f = n(166403),
    N = n(473145),
    I = n(927578),
    b = n(580630),
    v = n(802790),
    j = n(788868),
    y = n(818348),
    O = n(985018),
    R = n(397415);

function L(e) {
    let {
        premiumSubscription: t,
        fractionalPremiumInfo: n,
        isInventory: s,
        onNext: l,
        onClose: a,
        transitionState: o
    } = e, d = O.intl.format(O.t.otHdfR, {
        endDate: t.currentPeriodEnd
    });
    t.isPurchasedExternally && null != t.paymentGateway ? d = O.intl.format(O.t.HbpFLg, {
        paymentGatewayName: y.qm[t.paymentGateway],
        subscriptionManagementLink: (0, I.tW)(t.paymentGateway, "SUBSCRIPTION_MANAGEMENT")
    }) : t.isPausedForFractionalPremium ? d = O.intl.format(O.t.Hzqe6y, {
        expirationDate: n.endsAt.toDate()
    }) : s && (d = O.intl.format(O.t.gXSnul, {
        endDate: t.currentPeriodEnd
    }));
    let c = s ? O.intl.string(O.t.iIoSd6) : O.intl.string(O.t.Skzv0u),
        u = t.isPurchasedExternally ? [] : [{
            variant: "secondary",
            text: O.intl.string(O.t["ETE/oC"]),
            onClick: a
        }, {
            variant: "primary",
            text: O.intl.string(O.t.PDTjLN),
            onClick: l
        }];
    return (0, i.jsx)(r.Modal, {
        transitionState: o,
        onClose: a,
        size: "sm",
        title: c,
        actions: u,
        children: (0, i.jsxs)("div", {
            className: R.rf,
            children: [(0, i.jsx)("div", {
                className: R.OC
            }), (0, i.jsx)("div", {
                children: d
            })]
        })
    })
}
async function D(e, t, n, i) {
    let s, l, r = null != i ? i : (s = Object.values(S.A.boostSlots), null != (l = a().sortBy(s.filter(e => !(0, N.I5)(e)), e => [null != e.premiumGuildSubscription, null != e.cooldownEndsAt ? new Date(e.cooldownEndsAt) : null])[0]) ? l.id : null);
    if (null == r) throw Error("No slot to cancel");
    let o = (0, I.aE)(e, t);
    await (0, u.HJ)(r), await (0, c.nV)(e, {
        items: o
    }, {
        amount: 0,
        currency: e.currency
    }, (0, I.UC)(o, e.currency, e.paymentSourceId), n)
}

function P(e) {
    let {
        premiumSubscription: t,
        guildBoostSlotId: n,
        fractionalPremiumInfo: l,
        onBack: a,
        onNext: r,
        onClose: c
    } = e, [u, g] = s.useState(!1), [S, f] = s.useState(null), [N, y] = s.useMemo(() => {
        try {
            return [(0, h.v)(t, -1), !1]
        } catch {
            return [
                [], !0
            ]
        }
    }, [t]), L = s.useRef(c);
    s.useEffect(() => {
        L.current = c
    }), s.useEffect(() => {
        y && L.current()
    }, [y]);
    let {
        premiumSubscriptionPlan: P,
        premiumGuildPlan: G
    } = (0, o.cf)([C.A], () => {
        let e = C.A.get(t.planId);
        return {
            premiumSubscriptionPlan: e,
            premiumGuildPlan: null != e ? C.A.getForSkuAndInterval((0, I.mH)(j.pe.GUILD), e.interval, e.intervalCount) : null
        }
    }), {
        analyticsLocations: M
    } = (0, m.Ay)(), [U] = (0, x.Kq)({
        subscriptionId: t.id,
        renewal: !0,
        currency: t.currency,
        paymentSourceId: t.paymentSourceId,
        analyticsLocations: M,
        analyticsLocation: _.A.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW
    }), k = null != G ? (0, I.Om)(t, N[0]?.quantity ?? 0, G.id) : null, [V] = (0, x.Kq)({
        subscriptionId: t.id,
        items: k,
        renewal: !0,
        analyticsLocations: M,
        analyticsLocation: _.A.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW
    });
    if (null == V || null == P || null == G || null == U) return (0, i.jsx)(d.y$y, {});
    let w = t.items.some(e => {
            let {
                planId: t
            } = e;
            return !j.pW.has(t)
        }) && null == t.renewalMutations || t.renewalMutations?.items.find(e => {
            let {
                planId: t
            } = e;
            return !j.pW.has(t)
        }) != null,
        B = N.some(e => {
            let {
                planId: t
            } = e;
            return j.pW.has(t)
        }),
        H = w || B ? V.total - U.total : -U.total,
        {
            interval: F,
            intervalCount: Y
        } = P,
        z = O.intl.format(O.t["0W23cu"], {
            endDate: V.subscriptionPeriodStart
        });
    return t.isPausedForFractionalPremium && l.fetched && (z = O.intl.format(O.t.eb0xgS, {
        expirationDate: l.endsAt.toDate()
    })), (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(v.A, {
            "data-migration-pending": !0,
            onClose: c
        }), (0, i.jsxs)(d.$mQ, {
            "data-migration-pending": !0,
            className: R.rf,
            children: [null !== S && (0, i.jsx)("div", {
                className: R.z3,
                children: (0, i.jsx)(d.wx6, {
                    type: "critical",
                    children: S
                })
            }), (0, i.jsx)("div", {
                children: z
            }), (0, i.jsxs)(p.Yx, {
                className: R.S,
                children: [(0, i.jsx)(p.Xd, {
                    children: O.intl.string(O.t.iqhIp4)
                }), (0, i.jsx)(p.oR, {
                    label: O.intl.format(O.t["Vg+LRr"], {
                        subscriptionCount: 1
                    }),
                    value: (0, b.CE)((0, b.$g)(H, t.currency), F, Y),
                    className: R.Au
                }), null != k && k.length > 0 ? (0, i.jsxs)("div", {
                    children: [(0, i.jsx)(p.pK, {}), (0, i.jsx)(E.m0, {
                        premiumSubscription: t,
                        renewalInvoice: V,
                        isUpdate: !0
                    })]
                }) : null]
            })]
        }), (0, i.jsxs)(d.jlY, {
            "data-migration-pending": !0,
            align: A.A.Align.CENTER,
            justify: A.A.Justify.BETWEEN,
            children: [(0, i.jsx)(d.Button, {
                variant: "critical-primary",
                text: O.intl.string(O.t["/AS/gM"]),
                disabled: u,
                onClick: async () => {
                    try {
                        g(!0), f(null), await D(t, N, M, n), r()
                    } catch (e) {
                        f(O.intl.string(O.t["5mlOCW"])), g(!1)
                    }
                }
            }), (0, i.jsx)(T.A, {
                onClick: a
            })]
        })]
    })
}

function G(e) {
    let {
        premiumSubscription: t,
        fractionalPremiumInfo: n,
        onClose: s,
        transitionState: l
    } = e, a = t.currentPeriodEnd;
    t.isPausedForFractionalPremium && (a = n.endsAt.toDate());
    let o = [{
        variant: "primary",
        text: O.intl.string(O.t.BddRzS),
        onClick: s
    }];
    return (0, i.jsx)(r.Modal, {
        transitionState: l,
        onClose: s,
        size: "sm",
        title: O.intl.string(O.t["fZzV/B"]),
        actions: o,
        children: (0, i.jsxs)("div", {
            className: R.rf,
            children: [(0, i.jsx)("div", {
                className: R.OC
            }), (0, i.jsx)("div", {
                children: O.intl.format(O.t["H+z0ns"], {
                    endDate: a
                })
            })]
        })
    })
}

function M(e) {
    let t, {
        guildBoostSlot: n,
        transitionState: l,
        onClose: a
    } = e;
    s.useEffect(() => {
        f.A.hasFetchedSubscriptions() || (0, c.hP)()
    }, []);
    let r = (0, o.bG)([f.A], () => f.A.getPremiumTypeSubscription()),
        u = (0, g.A)(),
        [A, x] = s.useState(1),
        {
            analyticsLocations: h
        } = (0, m.Ay)(_.A.GUILD_BOOST_CANCELLATION_MODAL);
    if (null == r) t = (0, i.jsx)(d.$mQ, {
        "data-migration-pending": !0,
        children: (0, i.jsx)(d.y$y, {})
    });
    else switch (A) {
        case 1:
            t = (0, i.jsx)(L, {
                premiumSubscription: r,
                fractionalPremiumInfo: u,
                isInventory: null == n.premiumGuildSubscription,
                onNext: () => x(2),
                onClose: a,
                transitionState: l
            });
            break;
        case 2:
            t = (0, i.jsx)(d.EOs, {
                "data-migration-pending": !0,
                transitionState: l,
                parentComponent: "GuildBoostSlotCancellationModal",
                children: (0, i.jsx)(P, {
                    premiumSubscription: r,
                    guildBoostSlotId: n.id,
                    fractionalPremiumInfo: u,
                    onBack: () => x(1),
                    onNext: () => x(3),
                    onClose: a
                })
            });
            break;
        case 3:
            t = (0, i.jsx)(G, {
                premiumSubscription: r,
                fractionalPremiumInfo: u,
                onClose: a,
                transitionState: l
            });
            break;
        default:
            throw Error(`Unexpected step: ${A}`)
    }
    return (0, i.jsx)(m.f5, {
        value: h,
        children: t
    })
}