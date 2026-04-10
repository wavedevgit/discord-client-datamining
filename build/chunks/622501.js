/** chunk id: 622501 params = (module,exports,require) **/
t.d(n, {
    A: () => v
});
var i = t(627968),
    l = t(64700),
    r = t(503698),
    s = t.n(r),
    a = t(311907),
    o = t(732955),
    c = t(397927),
    u = t(793574),
    d = t(688810),
    p = t(532794),
    m = t(234419),
    _ = t(811611),
    x = t(901017),
    f = t(773669),
    h = t(954571),
    S = t(252424),
    g = t(927578),
    b = t(580630),
    I = t(652215),
    P = t(788868),
    E = t(985018),
    y = t(747114);

function A(e) {
    let {
        shouldUpsellFromNoneTier: n
    } = e, t = (0, a.bG)([f.default], () => f.default.locale);
    return (0, i.jsxs)("div", {
        className: y.mH,
        children: [(0, i.jsx)(x.A, {
            icon: c._Jp,
            iconClassName: y.pl,
            description: E.intl.formatToPlainString(E.t.sQBgs2, {
                numFreeGuildSubscriptions: P.M4
            }),
            color: c.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK.css
        }), (0, i.jsx)(x.A, {
            icon: c._Jp,
            iconClassName: y.pl,
            description: E.intl.formatToPlainString(E.t["1A6vXi"], {
                percent: (0, S.l9)(t, P.oX / 100)
            }),
            color: c.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK.css
        }), n ? (0, i.jsx)(x.A, {
            icon: c.nm2,
            iconClassName: y.zO,
            description: E.intl.string(E.t.Z9b2x2)
        }) : null, (0, i.jsx)(x.A, {
            icon: c.Fzq,
            iconClassName: y.Kg,
            description: E.intl.string(E.t["8dqG5E"])
        }), (0, i.jsx)(x.A, {
            icon: c.JMY,
            iconClassName: y.$z,
            description: E.intl.string(E.t.cBorIy)
        })]
    })
}

function v(e) {
    let {
        premiumSubscriptionPlan: n,
        onClose: t,
        onBack: r,
        onSkip: a,
        onSubscriptionConfirmation: x,
        analyticsLocation: f,
        analyticsSourceLocation: S,
        priceOptions: v
    } = e, {
        analyticsLocations: C,
        sourceAnalyticsLocations: N
    } = (0, d.Ay)(u.A.GUILD_BOOSTING_PREMIUM_UPSELL), j = null == n || null == n.premiumSubscriptionType, T = g.Ay.getPrice(P.gD.PREMIUM_MONTH_TIER_2, !1, !1, v), M = (0, b.$g)(T.amount, T.currency), L = (0, m.V)(), R = L?.trial_id, D = L?.subscription_trial?.sku_id === P.pe.TIER_2;
    return l.useEffect(() => {
        h.default.track(I.HAw.PREMIUM_UPSELL_VIEWED, {
            type: P.e.GUILD_PREMIUM_UPSELL_MODAL,
            location_stack: N
        })
    }, [N]), (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(c.s_y, {
            "data-migration-pending": !0,
            onClick: t,
            className: y.b
        }), (0, i.jsxs)(c.cwr, {
            children: [D && (0, i.jsx)(_.Vq, {
                className: y.Fg
            }), (0, i.jsx)("div", {
                className: s()(y.Tn, {
                    [y.NH]: D
                })
            }), (0, i.jsx)("div", {
                className: y.G3,
                children: null != R ? E.intl.string(E.t.AoSzEr) : E.intl.format(E.t["7vePZb"], {
                    monthlyPrice: M
                })
            }), (0, i.jsx)(A, {
                shouldUpsellFromNoneTier: j
            })]
        }), (0, i.jsx)(o.jlY, {
            children: (0, i.jsxs)(c.BJc, {
                direction: "horizontal",
                align: "center",
                justify: "space-between",
                fullWidth: !0,
                children: [(0, i.jsx)(c.QWc, {
                    text: E.intl.string(E.t["13/7kX"]),
                    onClick: r,
                    variant: "secondary"
                }), (0, i.jsxs)(c.BJc, {
                    direction: "horizontal",
                    align: "center",
                    fullWidth: !1,
                    children: [(0, i.jsx)(c.QWc, {
                        text: E.intl.string(E.t["SI/adm"]),
                        onClick: a,
                        variant: "secondary"
                    }), (0, i.jsx)(c.Button, {
                        variant: "active",
                        text: null != R ? E.intl.string(E.t["Gd/XHF"]) : E.intl.string(E.t.p2moip),
                        type: "submit",
                        onClick: () => {
                            t(), (0, p.A)({
                                initialPlanId: null,
                                subscriptionTier: P.pe.TIER_2,
                                analyticsLocations: C,
                                analyticsObject: {
                                    ...f,
                                    section: I.JJy.PREMIUM_GUILD_PURCHASE_MODAL
                                },
                                analyticsSourceLocation: S,
                                onSubscriptionConfirmation: x,
                                trialId: R
                            })
                        }
                    })]
                })]
            })
        })]
    })
}