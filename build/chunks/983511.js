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
    g = n(688810),
    m = n(531260),
    A = n(235986),
    h = n(543767),
    p = n(253390),
    x = n(735164),
    E = n(683433),
    T = n(692440),
    S = n(178368),
    C = n(97352),
    f = n(166403),
    I = n(473145),
    b = n(927578),
    N = n(580630),
    v = n(802790),
    j = n(788868),
    O = n(818348),
    R = n(985018),
    y = n(673977);

function P(e) {
    let {
        premiumSubscription: t,
        fractionalPremiumInfo: n,
        isInventory: s,
        onNext: l,
        onClose: a,
        transitionState: o
    } = e, d = R.intl.format(R.t.otHdfR, {
        endDate: t.currentPeriodEnd
    });
    t.isPurchasedExternally && null != t.paymentGateway ? d = R.intl.format(R.t.HbpFLg, {
        paymentGatewayName: O.qm[t.paymentGateway],
        subscriptionManagementLink: (0, b.tW)(t.paymentGateway, "SUBSCRIPTION_MANAGEMENT")
    }) : t.isPausedForFractionalPremium ? d = R.intl.format(R.t.Hzqe6y, {
        expirationDate: n.endsAt.toDate()
    }) : s && (d = R.intl.format(R.t.gXSnul, {
        endDate: t.currentPeriodEnd
    }));
    let c = s ? R.intl.string(R.t.iIoSd6) : R.intl.string(R.t.Skzv0u),
        u = t.isPurchasedExternally ? [] : [{
            variant: "secondary",
            text: R.intl.string(R.t["ETE/oC"]),
            onClick: a
        }, {
            variant: "primary",
            text: R.intl.string(R.t.PDTjLN),
            onClick: l
        }];
    return (0, i.jsx)(r.Modal, {
        transitionState: o,
        onClose: a,
        size: "sm",
        title: c,
        actions: u,
        children: (0, i.jsxs)("div", {
            className: y.rf,
            children: [(0, i.jsx)("div", {
                className: y.OC
            }), (0, i.jsx)("div", {
                children: d
            })]
        })
    })
}
async function D(e, t, n, i) {
    let s, l, r = null != i ? i : (s = Object.values(S.A.boostSlots), null != (l = a().sortBy(s.filter(e => !(0, I.I5)(e)), e => [null != e.premiumGuildSubscription, null != e.cooldownEndsAt ? new Date(e.cooldownEndsAt) : null])[0]) ? l.id : null);
    if (null == r) throw Error("No slot to cancel");
    let o = (0, b.aE)(e, t);
    await (0, u.HJ)(r), await (0, c.nV)(e, {
        items: o
    }, {
        amount: 0,
        currency: e.currency
    }, (0, b.UC)(o, e.currency, e.paymentSourceId), n)
}

function L(e) {
    let {
        premiumSubscription: t,
        guildBoostSlotId: n,
        fractionalPremiumInfo: l,
        onBack: a,
        onNext: r,
        onClose: c
    } = e, [u, m] = s.useState(!1), [S, f] = s.useState(null), [I, O] = s.useMemo(() => {
        try {
            return [(0, p.v)(t, -1), !1]
        } catch {
            return [
                [], !0
            ]
        }
    }, [t]), P = s.useRef(c);
    s.useEffect(() => {
        P.current = c
    }), s.useEffect(() => {
        O && P.current()
    }, [O]);
    let {
        premiumSubscriptionPlan: L,
        premiumGuildPlan: G
    } = (0, o.cf)([C.A], () => {
        let e = C.A.get(t.planId);
        return {
            premiumSubscriptionPlan: e,
            premiumGuildPlan: null != e ? C.A.getForSkuAndInterval((0, b.mH)(j.pe.GUILD), e.interval, e.intervalCount) : null
        }
    }), {
        analyticsLocations: M
    } = (0, g.Ay)(), [U] = (0, h.Kq)({
        subscriptionId: t.id,
        renewal: !0,
        currency: t.currency,
        paymentSourceId: t.paymentSourceId,
        analyticsLocations: M,
        analyticsLocation: _.A.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW
    }), k = null != G ? (0, b.Om)(t, I[0]?.quantity ?? 0, G.id) : null, [V] = (0, h.Kq)({
        subscriptionId: t.id,
        items: k,
        renewal: !0,
        analyticsLocations: M,
        analyticsLocation: _.A.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW
    });
    if (null == V || null == L || null == G || null == U) return (0, i.jsx)(d.y$y, {});
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
        H = I.some(e => {
            let {
                planId: t
            } = e;
            return j.pW.has(t)
        }),
        B = w || H ? V.total - U.total : -U.total,
        {
            interval: F,
            intervalCount: Y
        } = L,
        z = R.intl.format(R.t["0W23cu"], {
            endDate: V.subscriptionPeriodStart
        });
    return t.isPausedForFractionalPremium && l.fetched && (z = R.intl.format(R.t.eb0xgS, {
        expirationDate: l.endsAt.toDate()
    })), (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(v.A, {
            "data-migration-pending": !0,
            onClose: c
        }), (0, i.jsxs)(d.$mQ, {
            "data-migration-pending": !0,
            className: y.rf,
            children: [null !== S && (0, i.jsx)("div", {
                className: y.z3,
                children: (0, i.jsx)(d.wx6, {
                    type: "critical",
                    children: S
                })
            }), (0, i.jsx)("div", {
                children: z
            }), (0, i.jsxs)(x.Yx, {
                className: y.S,
                children: [(0, i.jsx)(x.Xd, {
                    children: R.intl.string(R.t.iqhIp4)
                }), (0, i.jsx)(x.oR, {
                    label: R.intl.format(R.t["Vg+LRr"], {
                        subscriptionCount: 1
                    }),
                    value: (0, N.CE)((0, N.$g)(B, t.currency), F, Y),
                    className: y.Au
                }), null != k && k.length > 0 ? (0, i.jsxs)("div", {
                    children: [(0, i.jsx)(x.pK, {}), (0, i.jsx)(T.m0, {
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
                text: R.intl.string(R.t["/AS/gM"]),
                disabled: u,
                onClick: async () => {
                    try {
                        m(!0), f(null), await D(t, I, M, n), r()
                    } catch (e) {
                        f(R.intl.string(R.t["5mlOCW"])), m(!1)
                    }
                }
            }), (0, i.jsx)(E.A, {
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
        text: R.intl.string(R.t.BddRzS),
        onClick: s
    }];
    return (0, i.jsx)(r.Modal, {
        transitionState: l,
        onClose: s,
        size: "sm",
        title: R.intl.string(R.t["fZzV/B"]),
        actions: o,
        children: (0, i.jsxs)("div", {
            className: y.rf,
            children: [(0, i.jsx)("div", {
                className: y.OC
            }), (0, i.jsx)("div", {
                children: R.intl.format(R.t["H+z0ns"], {
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
        u = (0, m.A)(),
        [A, h] = s.useState(1),
        {
            analyticsLocations: p
        } = (0, g.Ay)(_.A.GUILD_BOOST_CANCELLATION_MODAL);
    if (null == r) t = (0, i.jsx)(d.$mQ, {
        "data-migration-pending": !0,
        children: (0, i.jsx)(d.y$y, {})
    });
    else switch (A) {
        case 1:
            t = (0, i.jsx)(P, {
                premiumSubscription: r,
                fractionalPremiumInfo: u,
                isInventory: null == n.premiumGuildSubscription,
                onNext: () => h(2),
                onClose: a,
                transitionState: l
            });
            break;
        case 2:
            t = (0, i.jsx)(d.EOs, {
                "data-migration-pending": !0,
                transitionState: l,
                parentComponent: "GuildBoostSlotCancellationModal",
                children: (0, i.jsx)(L, {
                    premiumSubscription: r,
                    guildBoostSlotId: n.id,
                    fractionalPremiumInfo: u,
                    onBack: () => h(1),
                    onNext: () => h(3),
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
    return (0, i.jsx)(g.f5, {
        value: p,
        children: t
    })
}