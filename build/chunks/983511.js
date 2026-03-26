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
    m = n(793574),
    _ = n(688810),
    g = n(531260),
    x = n(235986),
    A = n(543767),
    h = n(253390),
    p = n(735164),
    f = n(683433),
    T = n(692440),
    S = n(178368),
    E = n(97352),
    b = n(166403),
    C = n(473145),
    v = n(927578),
    N = n(580630),
    I = n(802790),
    j = n(788868),
    y = n(818348),
    O = n(985018),
    R = n(910200);

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
        subscriptionManagementLink: (0, v.tW)(t.paymentGateway, "SUBSCRIPTION_MANAGEMENT")
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
async function P(e, t, n, i) {
    let s, l, r = null != i ? i : (s = Object.values(S.A.boostSlots), null != (l = a().sortBy(s.filter(e => !(0, C.I5)(e)), e => [null != e.premiumGuildSubscription, null != e.cooldownEndsAt ? new Date(e.cooldownEndsAt) : null])[0]) ? l.id : null);
    if (null == r) throw Error("No slot to cancel");
    let o = (0, v.aE)(e, t);
    await (0, u.HJ)(r), await (0, c.nV)(e, {
        items: o
    }, {
        amount: 0,
        currency: e.currency
    }, (0, v.UC)(o, e.currency, e.paymentSourceId), n)
}

function D(e) {
    let {
        premiumSubscription: t,
        guildBoostSlotId: n,
        fractionalPremiumInfo: l,
        onBack: a,
        onNext: r,
        onClose: c
    } = e, [u, g] = s.useState(!1), [S, b] = s.useState(null), [C, y] = s.useMemo(() => {
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
        premiumSubscriptionPlan: D,
        premiumGuildPlan: G
    } = (0, o.cf)([E.A], () => {
        let e = E.A.get(t.planId);
        return {
            premiumSubscriptionPlan: e,
            premiumGuildPlan: null != e ? E.A.getForSkuAndInterval((0, v.mH)(j.pe.GUILD), e.interval, e.intervalCount) : null
        }
    }), {
        analyticsLocations: M
    } = (0, _.Ay)(), [k] = (0, A.Kq)({
        subscriptionId: t.id,
        renewal: !0,
        currency: t.currency,
        paymentSourceId: t.paymentSourceId,
        analyticsLocations: M,
        analyticsLocation: m.A.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW
    }), U = null != G ? (0, v.Om)(t, C[0]?.quantity ?? 0, G.id) : null, [w] = (0, A.Kq)({
        subscriptionId: t.id,
        items: U,
        renewal: !0,
        analyticsLocations: M,
        analyticsLocation: m.A.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW
    });
    if (null == w || null == D || null == G || null == k) return (0, i.jsx)(d.y$y, {});
    let V = t.items.some(e => {
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
        B = C.some(e => {
            let {
                planId: t
            } = e;
            return j.pW.has(t)
        }),
        F = V || B ? w.total - k.total : -k.total,
        {
            interval: H,
            intervalCount: z
        } = D,
        Y = O.intl.format(O.t["0W23cu"], {
            endDate: w.subscriptionPeriodStart
        });
    return t.isPausedForFractionalPremium && l.fetched && (Y = O.intl.format(O.t.eb0xgS, {
        expirationDate: l.endsAt.toDate()
    })), (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(I.A, {
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
                children: Y
            }), (0, i.jsxs)(p.Yx, {
                className: R.S,
                children: [(0, i.jsx)(p.Xd, {
                    children: O.intl.string(O.t.iqhIp4)
                }), (0, i.jsx)(p.oR, {
                    label: O.intl.format(O.t["Vg+LRr"], {
                        subscriptionCount: 1
                    }),
                    value: (0, N.CE)((0, N.$g)(F, t.currency), H, z),
                    className: R.Au
                }), null != U && U.length > 0 ? (0, i.jsxs)("div", {
                    children: [(0, i.jsx)(p.pK, {}), (0, i.jsx)(T.m0, {
                        premiumSubscription: t,
                        renewalInvoice: w,
                        isUpdate: !0
                    })]
                }) : null]
            })]
        }), (0, i.jsxs)(d.jlY, {
            "data-migration-pending": !0,
            align: x.A.Align.CENTER,
            justify: x.A.Justify.BETWEEN,
            children: [(0, i.jsx)(d.Button, {
                variant: "critical-primary",
                text: O.intl.string(O.t["/AS/gM"]),
                disabled: u,
                onClick: async () => {
                    try {
                        g(!0), b(null), await P(t, C, M, n), r()
                    } catch (e) {
                        b(O.intl.string(O.t["5mlOCW"])), g(!1)
                    }
                }
            }), (0, i.jsx)(f.A, {
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
        b.A.hasFetchedSubscriptions() || (0, c.hP)()
    }, []);
    let r = (0, o.bG)([b.A], () => b.A.getPremiumTypeSubscription()),
        u = (0, g.A)(),
        [x, A] = s.useState(1),
        {
            analyticsLocations: h
        } = (0, _.Ay)(m.A.GUILD_BOOST_CANCELLATION_MODAL);
    if (null == r) t = (0, i.jsx)(d.$mQ, {
        "data-migration-pending": !0,
        children: (0, i.jsx)(d.y$y, {})
    });
    else switch (x) {
        case 1:
            t = (0, i.jsx)(L, {
                premiumSubscription: r,
                fractionalPremiumInfo: u,
                isInventory: null == n.premiumGuildSubscription,
                onNext: () => A(2),
                onClose: a,
                transitionState: l
            });
            break;
        case 2:
            t = (0, i.jsx)(d.EOs, {
                "data-migration-pending": !0,
                transitionState: l,
                parentComponent: "GuildBoostSlotCancellationModal",
                children: (0, i.jsx)(D, {
                    premiumSubscription: r,
                    guildBoostSlotId: n.id,
                    fractionalPremiumInfo: u,
                    onBack: () => A(1),
                    onNext: () => A(3),
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
            throw Error(`Unexpected step: ${x}`)
    }
    return (0, i.jsx)(_.f5, {
        value: h,
        children: t
    })
}