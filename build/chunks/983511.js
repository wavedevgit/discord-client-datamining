/** chunk id: 983511 params = (module,exports,require) **/
n.d(t, {
    default: () => G
});
var i = n(627968),
    s = n(64700),
    l = n(735438),
    r = n.n(l),
    a = n(158954),
    o = n(311907),
    d = n(397927),
    c = n(384904),
    u = n(923408),
    _ = n(793574),
    m = n(688810),
    g = n(531260),
    A = n(235986),
    h = n(543767),
    x = n(253390),
    p = n(735164),
    T = n(683433),
    E = n(692440),
    C = n(178368),
    S = n(97352),
    f = n(166403),
    N = n(473145),
    b = n(927578),
    I = n(580630),
    v = n(802790),
    j = n(788868),
    O = n(818348),
    y = n(985018),
    R = n(673977);

function P(e) {
    let {
        premiumSubscription: t,
        fractionalPremiumInfo: n,
        isInventory: s,
        onNext: l,
        onClose: r,
        transitionState: o
    } = e, d = y.intl.format(y.t.otHdfR, {
        endDate: t.currentPeriodEnd
    });
    t.isPurchasedExternally && null != t.paymentGateway ? d = y.intl.format(y.t.HbpFLg, {
        paymentGatewayName: O.qm[t.paymentGateway],
        subscriptionManagementLink: (0, b.tW)(t.paymentGateway, "SUBSCRIPTION_MANAGEMENT")
    }) : t.isPausedForFractionalPremium ? d = y.intl.format(y.t.Hzqe6y, {
        expirationDate: n.endsAt.toDate()
    }) : s && (d = y.intl.format(y.t.gXSnul, {
        endDate: t.currentPeriodEnd
    }));
    let c = s ? y.intl.string(y.t.iIoSd6) : y.intl.string(y.t.Skzv0u),
        u = t.isPurchasedExternally ? [] : [{
            variant: "secondary",
            text: y.intl.string(y.t["ETE/oC"]),
            onClick: r
        }, {
            variant: "primary",
            text: y.intl.string(y.t.PDTjLN),
            onClick: l
        }];
    return (0, i.jsx)(a.Modal, {
        transitionState: o,
        onClose: r,
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
    let s, l, a = null != i ? i : (s = Object.values(C.A.boostSlots), null != (l = r().sortBy(s.filter(e => !(0, N.I5)(e)), e => [null != e.premiumGuildSubscription, null != e.cooldownEndsAt ? new Date(e.cooldownEndsAt) : null])[0]) ? l.id : null);
    if (null == a) throw Error("No slot to cancel");
    let o = (0, b.aE)(e, t);
    await (0, u.HJ)(a), await (0, c.nV)(e, {
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
        onBack: r,
        onNext: a,
        onClose: c
    } = e, [u, g] = s.useState(!1), [C, f] = s.useState(null), [N, O] = s.useMemo(() => {
        try {
            return [(0, x.v)(t, -1), !1]
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
        premiumGuildPlan: M
    } = (0, o.cf)([S.A], () => {
        let e = S.A.get(t.planId);
        return {
            premiumSubscriptionPlan: e,
            premiumGuildPlan: null != e ? S.A.getForSkuAndInterval((0, b.mH)(j.pe.GUILD), e.interval, e.intervalCount) : null
        }
    }), {
        analyticsLocations: G
    } = (0, m.Ay)(), [U] = (0, h.Kq)({
        subscriptionId: t.id,
        renewal: !0,
        currency: t.currency,
        paymentSourceId: t.paymentSourceId,
        analyticsLocations: G,
        analyticsLocation: _.A.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW
    }), k = null != M ? (0, b.Om)(t, N[0]?.quantity ?? 0, M.id) : null, [V] = (0, h.Kq)({
        subscriptionId: t.id,
        items: k,
        renewal: !0,
        analyticsLocations: G,
        analyticsLocation: _.A.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW
    });
    if (null == V || null == L || null == M || null == U) return (0, i.jsx)(d.y$y, {});
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
        } = L,
        z = y.intl.format(y.t["0W23cu"], {
            endDate: V.subscriptionPeriodStart
        });
    return t.isPausedForFractionalPremium && l.fetched && (z = y.intl.format(y.t.eb0xgS, {
        expirationDate: l.endsAt.toDate()
    })), (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(v.A, {
            "data-migration-pending": !0,
            onClose: c
        }), (0, i.jsxs)(d.$mQ, {
            "data-migration-pending": !0,
            className: R.rf,
            children: [null !== C && (0, i.jsx)("div", {
                className: R.z3,
                children: (0, i.jsx)(d.wx6, {
                    type: "critical",
                    children: C
                })
            }), (0, i.jsx)("div", {
                children: z
            }), (0, i.jsxs)(p.Yx, {
                className: R.S,
                children: [(0, i.jsx)(p.Xd, {
                    children: y.intl.string(y.t.iqhIp4)
                }), (0, i.jsx)(p.oR, {
                    label: y.intl.format(y.t["Vg+LRr"], {
                        subscriptionCount: 1
                    }),
                    value: (0, I.CE)((0, I.$g)(H, t.currency), F, Y),
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
                text: y.intl.string(y.t["/AS/gM"]),
                disabled: u,
                onClick: async () => {
                    try {
                        g(!0), f(null), await D(t, N, G, n), a()
                    } catch (e) {
                        f(y.intl.string(y.t["5mlOCW"])), g(!1)
                    }
                }
            }), (0, i.jsx)(T.A, {
                onClick: r
            })]
        })]
    })
}

function M(e) {
    let {
        premiumSubscription: t,
        fractionalPremiumInfo: n,
        onClose: s,
        transitionState: l
    } = e, r = t.currentPeriodEnd;
    t.isPausedForFractionalPremium && (r = n.endsAt.toDate());
    let o = [{
        variant: "primary",
        text: y.intl.string(y.t.BddRzS),
        onClick: s
    }];
    return (0, i.jsx)(a.Modal, {
        transitionState: l,
        onClose: s,
        size: "sm",
        title: y.intl.string(y.t["fZzV/B"]),
        actions: o,
        children: (0, i.jsxs)("div", {
            className: R.rf,
            children: [(0, i.jsx)("div", {
                className: R.OC
            }), (0, i.jsx)("div", {
                children: y.intl.format(y.t["H+z0ns"], {
                    endDate: r
                })
            })]
        })
    })
}

function G(e) {
    let t, {
        guildBoostSlot: n,
        transitionState: l,
        onClose: r
    } = e;
    s.useEffect(() => {
        f.A.hasFetchedSubscriptions() || (0, c.hP)()
    }, []);
    let a = (0, o.bG)([f.A], () => f.A.getPremiumTypeSubscription()),
        u = (0, g.A)(),
        [A, h] = s.useState(1),
        {
            analyticsLocations: x
        } = (0, m.Ay)(_.A.GUILD_BOOST_CANCELLATION_MODAL);
    if (null == a) t = (0, i.jsx)(d.$mQ, {
        "data-migration-pending": !0,
        children: (0, i.jsx)(d.y$y, {})
    });
    else switch (A) {
        case 1:
            t = (0, i.jsx)(P, {
                premiumSubscription: a,
                fractionalPremiumInfo: u,
                isInventory: null == n.premiumGuildSubscription,
                onNext: () => h(2),
                onClose: r,
                transitionState: l
            });
            break;
        case 2:
            t = (0, i.jsx)(d.EOs, {
                "data-migration-pending": !0,
                transitionState: l,
                parentComponent: "GuildBoostSlotCancellationModal",
                children: (0, i.jsx)(L, {
                    premiumSubscription: a,
                    guildBoostSlotId: n.id,
                    fractionalPremiumInfo: u,
                    onBack: () => h(1),
                    onNext: () => h(3),
                    onClose: r
                })
            });
            break;
        case 3:
            t = (0, i.jsx)(M, {
                premiumSubscription: a,
                fractionalPremiumInfo: u,
                onClose: r,
                transitionState: l
            });
            break;
        default:
            throw Error(`Unexpected step: ${A}`)
    }
    return (0, i.jsx)(m.f5, {
        value: x,
        children: t
    })
}