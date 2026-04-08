/** chunk id: 622501 params = (module,exports,require) **/
t.d(n, {
    A: () => T
});
var l = t(627968),
    i = t(64700),
    r = t(503698),
    s = t.n(r),
    a = t(311907),
    o = t(732955),
    c = t(397927),
    u = t(793574),
    p = t(688810),
    d = t(532794),
    _ = t(234419),
    m = t(811611),
    S = t(901017),
    E = t(773669),
    A = t(954571),
    P = t(252424),
    I = t(927578),
    b = t(580630),
    g = t(652215),
    f = t(788868),
    y = t(985018),
    x = t(156731);

function M(e) {
    let {
        shouldUpsellFromNoneTier: n
    } = e, t = (0, a.bG)([E.default], () => E.default.locale);
    return (0, l.jsxs)("div", {
        className: x.mH,
        children: [(0, l.jsx)(S.A, {
            icon: c._Jp,
            iconClassName: x.pl,
            description: y.intl.formatToPlainString(y.t.sQBgs2, {
                numFreeGuildSubscriptions: f.M4
            }),
            color: c.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK.css
        }), (0, l.jsx)(S.A, {
            icon: c._Jp,
            iconClassName: x.pl,
            description: y.intl.formatToPlainString(y.t["1A6vXi"], {
                percent: (0, P.l9)(t, f.oX / 100)
            }),
            color: c.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK.css
        }), n ? (0, l.jsx)(S.A, {
            icon: c.nm2,
            iconClassName: x.zO,
            description: y.intl.string(y.t.Z9b2x2)
        }) : null, (0, l.jsx)(S.A, {
            icon: c.Fzq,
            iconClassName: x.Kg,
            description: y.intl.string(y.t["8dqG5E"])
        }), (0, l.jsx)(S.A, {
            icon: c.JMY,
            iconClassName: x.$z,
            description: y.intl.string(y.t.cBorIy)
        })]
    })
}

function T(e) {
    let {
        premiumSubscriptionPlan: n,
        onClose: t,
        onBack: r,
        onSkip: a,
        onSubscriptionConfirmation: S,
        analyticsLocation: E,
        analyticsSourceLocation: P,
        priceOptions: T
    } = e, {
        analyticsLocations: h,
        sourceAnalyticsLocations: C
    } = (0, p.Ay)(u.A.GUILD_BOOSTING_PREMIUM_UPSELL), N = null == n || null == n.premiumSubscriptionType, L = I.Ay.getPrice(f.gD.PREMIUM_MONTH_TIER_2, !1, !1, T), R = (0, b.$g)(L.amount, L.currency), j = (0, _.V)(), D = j?.trial_id, k = j?.subscription_trial?.sku_id === f.pe.TIER_2;
    return i.useEffect(() => {
        A.default.track(g.HAw.PREMIUM_UPSELL_VIEWED, {
            type: f.e.GUILD_PREMIUM_UPSELL_MODAL,
            location_stack: C
        })
    }, [C]), (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(c.s_y, {
            "data-migration-pending": !0,
            onClick: t,
            className: x.b
        }), (0, l.jsxs)(c.cwr, {
            children: [k && (0, l.jsx)(m.Vq, {
                className: x.Fg
            }), (0, l.jsx)("div", {
                className: s()(x.Tn, {
                    [x.NH]: k
                })
            }), (0, l.jsx)("div", {
                className: x.G3,
                children: null != D ? y.intl.string(y.t.AoSzEr) : y.intl.format(y.t["7vePZb"], {
                    monthlyPrice: R
                })
            }), (0, l.jsx)(M, {
                shouldUpsellFromNoneTier: N
            })]
        }), (0, l.jsx)(o.jlY, {
            children: (0, l.jsxs)(c.BJc, {
                direction: "horizontal",
                align: "center",
                justify: "space-between",
                fullWidth: !0,
                children: [(0, l.jsx)(c.QWc, {
                    text: y.intl.string(y.t["13/7kX"]),
                    onClick: r,
                    variant: "secondary"
                }), (0, l.jsxs)(c.BJc, {
                    direction: "horizontal",
                    align: "center",
                    fullWidth: !1,
                    children: [(0, l.jsx)(c.QWc, {
                        text: y.intl.string(y.t["SI/adm"]),
                        onClick: a,
                        variant: "secondary"
                    }), (0, l.jsx)(c.Button, {
                        variant: "active",
                        text: null != D ? y.intl.string(y.t["Gd/XHF"]) : y.intl.string(y.t.p2moip),
                        type: "submit",
                        onClick: () => {
                            t(), (0, d.A)({
                                initialPlanId: null,
                                subscriptionTier: f.pe.TIER_2,
                                analyticsLocations: h,
                                analyticsObject: {
                                    ...E,
                                    section: g.JJy.PREMIUM_GUILD_PURCHASE_MODAL
                                },
                                analyticsSourceLocation: P,
                                onSubscriptionConfirmation: S,
                                trialId: D
                            })
                        }
                    })]
                })]
            })
        })]
    })
}