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
    h = n(543767),
    x = n(253390),
    p = n(735164),
    T = n(683433),
    E = n(692440),
    S = n(178368),
    C = n(97352),
    f = n(166403),
    b = n(473145),
    N = n(927578),
    I = n(580630),
    v = n(802790),
    j = n(788868),
    y = n(818348),
    R = n(985018),
    O = n(397415);

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
        paymentGatewayName: y.qm[t.paymentGateway],
        subscriptionManagementLink: (0, N.tW)(t.paymentGateway, "SUBSCRIPTION_MANAGEMENT")
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
            className: O.rf,
            children: [(0, i.jsx)("div", {
                className: O.OC
            }), (0, i.jsx)("div", {
                children: d
            })]
        })
    })
}
async function D(e, t, n, i) {
    let s, l, r = null != i ? i : (s = Object.values(S.A.boostSlots), null != (l = a().sortBy(s.filter(e => !(0, b.I5)(e)), e => [null != e.premiumGuildSubscription, null != e.cooldownEndsAt ? new Date(e.cooldownEndsAt) : null])[0]) ? l.id : null);
    if (null == r) throw Error("No slot to cancel");
    let o = (0, N.aE)(e, t);
    await (0, u.HJ)(r), await (0, c.nV)(e, {
        items: o
    }, {
        amount: 0,
        currency: e.currency
    }, (0, N.UC)(o, e.currency, e.paymentSourceId), n)
}

function L(e) {
    let {
        premiumSubscription: t,
        guildBoostSlotId: n,
        fractionalPremiumInfo: l,
        onBack: a,
        onNext: r,
        onClose: c
    } = e, [u, g] = s.useState(!1), [S, f] = s.useState(null), [b, y] = s.useMemo(() => {
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
        y && P.current()
    }, [y]);
    let {
        premiumSubscriptionPlan: L,
        premiumGuildPlan: G
    } = (0, o.cf)([C.A], () => {
        let e = C.A.get(t.planId);
        return {
            premiumSubscriptionPlan: e,
            premiumGuildPlan: null != e ? C.A.getForSkuAndInterval((0, N.mH)(j.pe.GUILD), e.interval, e.intervalCount) : null
        }
    }), {
        analyticsLocations: M
    } = (0, m.Ay)(), [U] = (0, h.Kq)({
        subscriptionId: t.id,
        renewal: !0,
        currency: t.currency,
        paymentSourceId: t.paymentSourceId,
        analyticsLocations: M,
        analyticsLocation: _.A.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW
    }), k = null != G ? (0, N.Om)(t, b[0]?.quantity ?? 0, G.id) : null, [V] = (0, h.Kq)({
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
        B = b.some(e => {
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
            className: O.rf,
            children: [null !== S && (0, i.jsx)("div", {
                className: O.z3,
                children: (0, i.jsx)(d.wx6, {
                    type: "critical",
                    children: S
                })
            }), (0, i.jsx)("div", {
                children: z
            }), (0, i.jsxs)(p.Yx, {
                className: O.S,
                children: [(0, i.jsx)(p.Xd, {
                    children: R.intl.string(R.t.iqhIp4)
                }), (0, i.jsx)(p.oR, {
                    label: R.intl.format(R.t["Vg+LRr"], {
                        subscriptionCount: 1
                    }),
                    value: (0, I.CE)((0, I.$g)(H, t.currency), F, Y),
                    className: O.Au
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
                text: R.intl.string(R.t["/AS/gM"]),
                disabled: u,
                onClick: async () => {
                    try {
                        g(!0), f(null), await D(t, b, M, n), r()
                    } catch (e) {
                        f(R.intl.string(R.t["5mlOCW"])), g(!1)
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
            className: O.rf,
            children: [(0, i.jsx)("div", {
                className: O.OC
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
        u = (0, g.A)(),
        [A, h] = s.useState(1),
        {
            analyticsLocations: x
        } = (0, m.Ay)(_.A.GUILD_BOOST_CANCELLATION_MODAL);
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
    return (0, i.jsx)(m.f5, {
        value: x,
        children: t
    })
}