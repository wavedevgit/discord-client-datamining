/** chunk id: 983511, original params: e,t,n (module,exports,require) **/
n.d(t, {
    default: () => G
});
var i = n(627968),
    s = n(64700),
    a = n(735438),
    l = n.n(a),
    r = n(158954),
    o = n(311907),
    c = n(397927),
    d = n(384904),
    u = n(923408),
    _ = n(793574),
    m = n(688810),
    A = n(531260),
    g = n(235986),
    h = n(543767),
    x = n(253390),
    p = n(735164),
    E = n(683433),
    C = n(692440),
    T = n(178368),
    S = n(97352),
    I = n(166403),
    f = n(473145),
    N = n(927578),
    b = n(580630),
    j = n(802790),
    v = n(788868),
    O = n(818348),
    R = n(985018),
    y = n(397415);

function P(e) {
    let {
        premiumSubscription: t,
        fractionalPremiumInfo: n,
        isInventory: s,
        onNext: a,
        onClose: l,
        transitionState: o
    } = e, c = R.intl.format(R.t.otHdfR, {
        endDate: t.currentPeriodEnd
    });
    t.isPurchasedExternally && null != t.paymentGateway ? c = R.intl.format(R.t.HbpFLg, {
        paymentGatewayName: O.qm[t.paymentGateway],
        subscriptionManagementLink: (0, N.tW)(t.paymentGateway, "SUBSCRIPTION_MANAGEMENT")
    }) : t.isPausedForFractionalPremium ? c = R.intl.format(R.t.Hzqe6y, {
        expirationDate: n.endsAt.toDate()
    }) : s && (c = R.intl.format(R.t.gXSnul, {
        endDate: t.currentPeriodEnd
    }));
    let d = s ? R.intl.string(R.t.iIoSd6) : R.intl.string(R.t.Skzv0u),
        u = t.isPurchasedExternally ? [] : [{
            variant: "secondary",
            text: R.intl.string(R.t["ETE/oC"]),
            onClick: l
        }, {
            variant: "primary",
            text: R.intl.string(R.t.PDTjLN),
            onClick: a
        }];
    return (0, i.jsx)(r.Modal, {
        transitionState: o,
        onClose: l,
        size: "sm",
        title: d,
        actions: u,
        children: (0, i.jsxs)("div", {
            className: y.rf,
            children: [(0, i.jsx)("div", {
                className: y.OC
            }), (0, i.jsx)("div", {
                children: c
            })]
        })
    })
}
async function L(e, t, n, i) {
    let s, a, r = null != i ? i : (s = Object.values(T.A.boostSlots), null != (a = l().sortBy(s.filter(e => !(0, f.I5)(e)), e => [null != e.premiumGuildSubscription, null != e.cooldownEndsAt ? new Date(e.cooldownEndsAt) : null])[0]) ? a.id : null);
    if (null == r) throw Error("No slot to cancel");
    let o = (0, N.aE)(e, t);
    await (0, u.HJ)(r), await (0, d.nV)(e, {
        items: o
    }, {
        amount: 0,
        currency: e.currency
    }, (0, N.UC)(o, e.currency, e.paymentSourceId), n)
}

function D(e) {
    let {
        premiumSubscription: t,
        guildBoostSlotId: n,
        fractionalPremiumInfo: a,
        onBack: l,
        onNext: r,
        onClose: d
    } = e, [u, A] = s.useState(!1), [T, I] = s.useState(null), [f, O] = s.useMemo(() => {
        try {
            return [(0, x.v)(t, -1), !1]
        } catch {
            return [
                [], !0
            ]
        }
    }, [t]), P = s.useRef(d);
    s.useEffect(() => {
        P.current = d
    }), s.useEffect(() => {
        O && P.current()
    }, [O]);
    let {
        premiumSubscriptionPlan: D,
        premiumGuildPlan: M
    } = (0, o.cf)([S.A], () => {
        let e = S.A.get(t.planId);
        return {
            premiumSubscriptionPlan: e,
            premiumGuildPlan: null != e ? S.A.getForSkuAndInterval((0, N.mH)(v.pe.GUILD), e.interval, e.intervalCount) : null
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
    }), k = null != M ? (0, N.Om)(t, f[0]?.quantity ?? 0, M.id) : null, [V] = (0, h.Kq)({
        subscriptionId: t.id,
        items: k,
        renewal: !0,
        analyticsLocations: G,
        analyticsLocation: _.A.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW
    });
    if (null == V || null == D || null == M || null == U) return (0, i.jsx)(c.y$y, {});
    let w = t.items.some(e => {
            let {
                planId: t
            } = e;
            return !v.pW.has(t)
        }) && null == t.renewalMutations || t.renewalMutations?.items.find(e => {
            let {
                planId: t
            } = e;
            return !v.pW.has(t)
        }) != null,
        H = f.some(e => {
            let {
                planId: t
            } = e;
            return v.pW.has(t)
        }),
        B = w || H ? V.total - U.total : -U.total,
        {
            interval: Y,
            intervalCount: F
        } = D,
        z = R.intl.format(R.t["0W23cu"], {
            endDate: V.subscriptionPeriodStart
        });
    return t.isPausedForFractionalPremium && a.fetched && (z = R.intl.format(R.t.eb0xgS, {
        expirationDate: a.endsAt.toDate()
    })), (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(j.A, {
            "data-migration-pending": !0,
            onClose: d
        }), (0, i.jsxs)(c.$mQ, {
            "data-migration-pending": !0,
            className: y.rf,
            children: [null !== T && (0, i.jsx)("div", {
                className: y.z3,
                children: (0, i.jsx)(c.wx6, {
                    type: "critical",
                    children: T
                })
            }), (0, i.jsx)("div", {
                children: z
            }), (0, i.jsxs)(p.Yx, {
                className: y.S,
                children: [(0, i.jsx)(p.Xd, {
                    children: R.intl.string(R.t.iqhIp4)
                }), (0, i.jsx)(p.oR, {
                    label: R.intl.format(R.t["Vg+LRr"], {
                        subscriptionCount: 1
                    }),
                    value: (0, b.CE)((0, b.$g)(B, t.currency), Y, F),
                    className: y.Au
                }), null != k && k.length > 0 ? (0, i.jsxs)("div", {
                    children: [(0, i.jsx)(p.pK, {}), (0, i.jsx)(C.m0, {
                        premiumSubscription: t,
                        renewalInvoice: V,
                        isUpdate: !0
                    })]
                }) : null]
            })]
        }), (0, i.jsxs)(c.jlY, {
            "data-migration-pending": !0,
            align: g.A.Align.CENTER,
            justify: g.A.Justify.BETWEEN,
            children: [(0, i.jsx)(c.Button, {
                variant: "critical-primary",
                text: R.intl.string(R.t["/AS/gM"]),
                disabled: u,
                onClick: async () => {
                    try {
                        A(!0), I(null), await L(t, f, G, n), r()
                    } catch (e) {
                        I(R.intl.string(R.t["5mlOCW"])), A(!1)
                    }
                }
            }), (0, i.jsx)(E.A, {
                onClick: l
            })]
        })]
    })
}

function M(e) {
    let {
        premiumSubscription: t,
        fractionalPremiumInfo: n,
        onClose: s,
        transitionState: a
    } = e, l = t.currentPeriodEnd;
    t.isPausedForFractionalPremium && (l = n.endsAt.toDate());
    let o = [{
        variant: "primary",
        text: R.intl.string(R.t.BddRzS),
        onClick: s
    }];
    return (0, i.jsx)(r.Modal, {
        transitionState: a,
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
                    endDate: l
                })
            })]
        })
    })
}

function G(e) {
    let t, {
        guildBoostSlot: n,
        transitionState: a,
        onClose: l
    } = e;
    s.useEffect(() => {
        I.A.hasFetchedSubscriptions() || (0, d.hP)()
    }, []);
    let r = (0, o.bG)([I.A], () => I.A.getPremiumTypeSubscription()),
        u = (0, A.A)(),
        [g, h] = s.useState(1),
        {
            analyticsLocations: x
        } = (0, m.Ay)(_.A.GUILD_BOOST_CANCELLATION_MODAL);
    if (null == r) t = (0, i.jsx)(c.$mQ, {
        "data-migration-pending": !0,
        children: (0, i.jsx)(c.y$y, {})
    });
    else switch (g) {
        case 1:
            t = (0, i.jsx)(P, {
                premiumSubscription: r,
                fractionalPremiumInfo: u,
                isInventory: null == n.premiumGuildSubscription,
                onNext: () => h(2),
                onClose: l,
                transitionState: a
            });
            break;
        case 2:
            t = (0, i.jsx)(c.EOs, {
                "data-migration-pending": !0,
                transitionState: a,
                parentComponent: "GuildBoostSlotCancellationModal",
                children: (0, i.jsx)(D, {
                    premiumSubscription: r,
                    guildBoostSlotId: n.id,
                    fractionalPremiumInfo: u,
                    onBack: () => h(1),
                    onNext: () => h(3),
                    onClose: l
                })
            });
            break;
        case 3:
            t = (0, i.jsx)(M, {
                premiumSubscription: r,
                fractionalPremiumInfo: u,
                onClose: l,
                transitionState: a
            });
            break;
        default:
            throw Error(`Unexpected step: ${g}`)
    }
    return (0, i.jsx)(m.f5, {
        value: x,
        children: t
    })
}