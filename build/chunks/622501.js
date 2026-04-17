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
    f = t(901017),
    S = t(773669),
    x = t(954571),
    g = t(252424),
    b = t(927578),
    h = t(580630),
    I = t(652215),
    E = t(788868),
    y = t(985018),
    P = t(213178);

function A(e) {
    let {
        shouldUpsellFromNoneTier: n
    } = e, t = (0, a.bG)([S.default], () => S.default.locale);
    return (0, i.jsxs)("div", {
        className: P.mH,
        children: [(0, i.jsx)(f.A, {
            icon: c._Jp,
            iconClassName: P.pl,
            description: y.intl.formatToPlainString(y.t.sQBgs2, {
                numFreeGuildSubscriptions: E.M4
            }),
            color: c.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK.css
        }), (0, i.jsx)(f.A, {
            icon: c._Jp,
            iconClassName: P.pl,
            description: y.intl.formatToPlainString(y.t["1A6vXi"], {
                percent: (0, g.l9)(t, E.oX / 100)
            }),
            color: c.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK.css
        }), n ? (0, i.jsx)(f.A, {
            icon: c.nm2,
            iconClassName: P.zO,
            description: y.intl.string(y.t.Z9b2x2)
        }) : null, (0, i.jsx)(f.A, {
            icon: c.Fzq,
            iconClassName: P.Kg,
            description: y.intl.string(y.t["8dqG5E"])
        }), (0, i.jsx)(f.A, {
            icon: c.JMY,
            iconClassName: P.$z,
            description: y.intl.string(y.t.cBorIy)
        })]
    })
}

function N(e) {
    let {
        premiumSubscriptionPlan: n,
        onClose: t,
        onBack: r,
        onSkip: a,
        onSubscriptionConfirmation: f,
        analyticsLocation: S,
        analyticsSourceLocation: g,
        priceOptions: N
    } = e, {
        analyticsLocations: C,
        sourceAnalyticsLocations: v
    } = (0, d.Ay)(u.A.GUILD_BOOSTING_PREMIUM_UPSELL), T = null == n || null == n.premiumSubscriptionType, j = b.Ay.getPrice(E.gD.PREMIUM_MONTH_TIER_2, !1, !1, N), M = (0, h.$g)(j.amount, j.currency), L = (0, m.V)(), R = L?.trial_id, D = L?.subscription_trial?.sku_id === E.pe.TIER_2;
    return l.useEffect(() => {
        x.default.track(I.HAw.PREMIUM_UPSELL_VIEWED, {
            type: E.e.GUILD_PREMIUM_UPSELL_MODAL,
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
                children: null != R ? y.intl.string(y.t.AoSzEr) : y.intl.format(y.t["7vePZb"], {
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
                    text: y.intl.string(y.t["13/7kX"]),
                    onClick: r,
                    variant: "secondary"
                }), (0, i.jsxs)(c.BJc, {
                    direction: "horizontal",
                    align: "center",
                    fullWidth: !1,
                    children: [(0, i.jsx)(c.QWc, {
                        text: y.intl.string(y.t["SI/adm"]),
                        onClick: a,
                        variant: "secondary"
                    }), (0, i.jsx)(c.Button, {
                        variant: "active",
                        text: null != R ? y.intl.string(y.t["Gd/XHF"]) : y.intl.string(y.t.p2moip),
                        type: "submit",
                        onClick: () => {
                            t(), (0, p.A)({
                                initialPlanId: null,
                                subscriptionTier: E.pe.TIER_2,
                                analyticsLocations: C,
                                analyticsObject: {
                                    ...S,
                                    section: I.JJy.PREMIUM_GUILD_PURCHASE_MODAL
                                },
                                analyticsSourceLocation: g,
                                onSubscriptionConfirmation: f,
                                trialId: R
                            })
                        }
                    })]
                })]
            })
        })]
    })
}