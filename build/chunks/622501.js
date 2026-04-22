/** chunk id: 622501 params = (module,exports,require) **/
t.d(n, {
    A: () => N
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
    S = t(901017),
    f = t(773669),
    x = t(954571),
    g = t(252424),
    b = t(927578),
    h = t(580630),
    I = t(652215),
    y = t(788868),
    E = t(985018),
    P = t(213178);

function A(e) {
    let {
        shouldUpsellFromNoneTier: n
    } = e, t = (0, a.bG)([f.default], () => f.default.locale);
    return (0, i.jsxs)("div", {
        className: P.mH,
        children: [(0, i.jsx)(S.A, {
            icon: c._Jp,
            iconClassName: P.pl,
            description: E.intl.formatToPlainString(E.t.sQBgs2, {
                numFreeGuildSubscriptions: y.M4
            }),
            color: c.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK.css
        }), (0, i.jsx)(S.A, {
            icon: c._Jp,
            iconClassName: P.pl,
            description: E.intl.formatToPlainString(E.t["1A6vXi"], {
                percent: (0, g.l9)(t, y.oX / 100)
            }),
            color: c.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK.css
        }), n ? (0, i.jsx)(S.A, {
            icon: c.nm2,
            iconClassName: P.zO,
            description: E.intl.string(E.t.Z9b2x2)
        }) : null, (0, i.jsx)(S.A, {
            icon: c.Fzq,
            iconClassName: P.Kg,
            description: E.intl.string(E.t["8dqG5E"])
        }), (0, i.jsx)(S.A, {
            icon: c.JMY,
            iconClassName: P.$z,
            description: E.intl.string(E.t.cBorIy)
        })]
    })
}

function N(e) {
    let {
        premiumSubscriptionPlan: n,
        onClose: t,
        onBack: r,
        onSkip: a,
        onSubscriptionConfirmation: S,
        analyticsLocation: f,
        analyticsSourceLocation: g,
        priceOptions: N
    } = e, {
        analyticsLocations: C,
        sourceAnalyticsLocations: v
    } = (0, d.Ay)(u.A.GUILD_BOOSTING_PREMIUM_UPSELL), T = null == n || null == n.premiumSubscriptionType, j = b.Ay.getPrice(y.gD.PREMIUM_MONTH_TIER_2, !1, !1, N), M = (0, h.$g)(j.amount, j.currency), L = (0, m.V)(), R = L?.trial_id, D = L?.subscription_trial?.sku_id === y.pe.TIER_2;
    return l.useEffect(() => {
        x.default.track(I.HAw.PREMIUM_UPSELL_VIEWED, {
            type: y.e.GUILD_PREMIUM_UPSELL_MODAL,
            location_stack: v
        })
    }, [v]), (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(c.s_y, {
            "data-migration-pending": !0,
            onClick: t,
            className: P.b
        }), (0, i.jsxs)(c.cwr, {
            children: [D && (0, i.jsx)(_.Vq, {
                className: P.Fg
            }), (0, i.jsx)("div", {
                className: s()(P.Tn, {
                    [P.NH]: D
                })
            }), (0, i.jsx)("div", {
                className: P.G3,
                children: null != R ? E.intl.string(E.t.AoSzEr) : E.intl.format(E.t["7vePZb"], {
                    monthlyPrice: M
                })
            }), (0, i.jsx)(A, {
                shouldUpsellFromNoneTier: T
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
                                subscriptionTier: y.pe.TIER_2,
                                analyticsLocations: C,
                                analyticsObject: {
                                    ...f,
                                    section: I.JJy.PREMIUM_GUILD_PURCHASE_MODAL
                                },
                                analyticsSourceLocation: g,
                                onSubscriptionConfirmation: S,
                                trialId: R
                            })
                        }
                    })]
                })]
            })
        })]
    })
}