/** chunk id: 128620, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => D
});
var n = r(627968),
    a = r(64700),
    l = r(503698),
    s = r.n(l),
    i = r(892227),
    d = r(732955),
    u = r(462887),
    o = r(397927),
    c = r(241524),
    m = r(736653),
    h = r(607470),
    x = r(649032),
    p = r(320118),
    _ = r(976860),
    f = r(780964),
    g = r(840065),
    N = r(975571),
    b = r(872725),
    R = r(566119),
    v = r(570627),
    E = r(94264),
    A = r(652215),
    C = r(758836),
    T = r(901123),
    j = r(723468),
    P = r(985018),
    I = r(306776),
    y = r(909340),
    S = r(455482);
let O = N.A.getArticleURL(A.MVz.ORBS_REWARDS_FAQ);

function w(e) {
    (0, R.o8)(e), window.open(O, "_blank")
}
let D = e => {
    let {
        className: t
    } = e, {
        passesGeneralUIInvariant: r,
        programReward: l
    } = (0, p.F)({
        location: "PremiumTenureRewardsOrbsCard"
    }), N = v.m.useConfig({
        location: "PremiumTenureRewardsOrbsCard"
    }).enabled, O = (0, c.A)("(min-width: 720px)"), D = (0, m.DP)(), L = a.useMemo(() => ({
        hueRotate: 25,
        glowAmount: (0, u.M)(D) ? 2 : 8,
        blurAmount: N ? 10 : 20
    }), [D, N]);
    if (!r || null == l) return null;
    let U = function(e, t) {
        let r = e.program_current_state,
            a = null != e.next_reward_date && "" !== e.next_reward_date ? (0, i.default)(new Date(e.next_reward_date), new Date) : null,
            l = e?.total_rewarded_from_program;
        switch (r) {
            case x.L.ACTIVE:
                if (null == a || a < 0) return null;
                return {
                    displayTotalLifetimeRewards: null != l, displayProgressBar: !0, actionButton: (0, n.jsx)(d.$nd, {
                        text: P.intl.string(j.default.BxjHiu),
                        variant: t ? "overlay-primary" : "secondary",
                        onClick: () => {
                            (0, R.WD)(r), (0, _.pX)(T.BV.COLLECTIBLES_SHOP_WITH_TAB(C.G2.ORBS))
                        }
                    }), headerText: P.intl.format(j.default.BxLJQL, {
                        days: Math.max(1, a),
                        orbsCount: e.reward_amount
                    }), subheaderText: P.intl.format(j.default.tUV1vV, {
                        helpdeskArticle: () => w(r)
                    })
                };
            case x.L.PAYMENT_PROCESSING:
                return {
                    displayTotalLifetimeRewards: !1, displayProgressBar: !1, actionButton: (0, n.jsx)(d.$nd, {
                        text: P.intl.string(j.default.KVCfnE),
                        variant: t ? "overlay-primary" : "secondary",
                        onClick: () => {
                            (0, R.CC)(r), (0, g.openUserSettings)(f.X.BILLING_PANEL, {
                                section: A.nc_.BILLING
                            })
                        }
                    }), headerText: P.intl.string(j.default.uuZJXR), subheaderText: P.intl.format(j.default.dkeEV7, {
                        helpdeskArticle: () => w(r)
                    })
                };
            case x.L.PAYMENT_ERROR:
                return {
                    displayTotalLifetimeRewards: null != l, displayProgressBar: !1, actionButton: (0, n.jsx)(d.NPJ, {
                        theme: t ? A.NJ8.DARKER : void 0,
                        children: e => (0, n.jsx)("span", {
                            className: e,
                            children: (0, n.jsx)(d.$nd, {
                                text: P.intl.string(j.default.KVCfnE),
                                variant: "critical-secondary",
                                onClick: () => {
                                    (0, R.ue)(r), (0, g.openUserSettings)(f.X.BILLING_PANEL, {
                                        section: A.nc_.BILLING
                                    })
                                }
                            })
                        })
                    }), headerText: P.intl.string(j.default["+O9Asn"]), subheaderText: P.intl.format(j.default.nWKEBZ, {
                        helpdeskArticle: () => w(r)
                    })
                };
            case x.L.PROGRAM_ROLLBACK:
                return {
                    displayTotalLifetimeRewards: null != l, displayProgressBar: null != a, actionButton: (0, n.jsx)(d.$nd, {
                        text: P.intl.string(j.default["wLAd/+"]),
                        variant: t ? "overlay-primary" : "secondary",
                        onClick: () => {
                            (0, R.WD)(r), (0, _.pX)(T.BV.COLLECTIBLES_SHOP_WITH_TAB(C.G2.ORBS))
                        }
                    }), headerText: P.intl.string(j.default.zF0HnJ), subheaderText: P.intl.format(j.default["5tzNTa"], {
                        helpdeskArticle: () => w(r)
                    })
                };
            case x.L.PREMIUM_CHURNING:
                return {
                    displayTotalLifetimeRewards: null != l, displayProgressBar: null != a, actionButton: (0, n.jsx)(d.$nd, {
                        text: P.intl.string(j.default.FToh6D),
                        variant: t ? "overlay-primary" : "secondary",
                        icon: d.tvc,
                        onClick: () => {
                            (0, R.Jv)(r), (0, g.openUserSettings)(f.X.SUBSCRIPTIONS_PANEL, {
                                section: A.nc_.SUBSCRIPTIONS
                            })
                        }
                    }), headerText: P.intl.string(j.default.ISnOet), subheaderText: P.intl.format(j.default["vjaRZ/"], {
                        helpdeskArticle: () => w(r)
                    })
                };
            default:
                return null
        }
    }(l, O);
    if (null == U) return null;
    let {
        displayTotalLifetimeRewards: M,
        displayProgressBar: B,
        actionButton: k,
        headerText: G,
        subheaderText: W
    } = U;
    return (0, n.jsx)("div", {
        className: s()(I.Hc, t),
        children: (0, n.jsxs)(b.A, {
            cardType: o.sl2.CUSTOM,
            cardClassName: I.Nr,
            ...L,
            children: [(0, n.jsx)(h.A, {
                muted: !0,
                autoPlay: !0,
                playsInline: !0,
                loop: !0,
                className: I.Ki,
                src: y.A
            }), (0, n.jsxs)("div", {
                className: I.zK,
                children: [(0, n.jsx)("img", {
                    src: S.A,
                    className: I._e,
                    alt: "",
                    "aria-hidden": !0
                }), (0, n.jsx)("div", {
                    className: I.mR
                })]
            }), (0, n.jsxs)("div", {
                className: I.FS,
                children: [(0, n.jsx)(d.NPJ, {
                    theme: O ? A.NJ8.DARKER : void 0,
                    children: e => (0, n.jsx)("div", {
                        className: s()(e, I.aZ),
                        children: (0, n.jsx)(d.Exy, {
                            type: "beta",
                            variant: "expressive"
                        })
                    })
                }), (0, n.jsx)(d.DZT, {
                    variant: "heading-xl/bold",
                    className: I.R_,
                    children: G
                }), (0, n.jsx)(d.EYj, {
                    variant: "text-md/medium",
                    className: I.G3,
                    children: W
                }), B && (0, n.jsx)(E.A, {
                    className: I.L$
                }), M && l.total_rewarded_from_program > 0 && (0, n.jsxs)("div", {
                    className: I.fB,
                    children: [(0, n.jsx)(d.EYj, {
                        variant: "text-md/medium",
                        className: I.G3,
                        children: P.intl.string(j.default["/1mWUn"])
                    }), (0, n.jsx)(d.Cp8, {
                        size: "sm",
                        color: "currentColor"
                    }), (0, n.jsx)(d.EYj, {
                        variant: "text-md/medium",
                        className: I.G3,
                        children: l.total_rewarded_from_program
                    })]
                }), (0, n.jsx)("div", {
                    className: I.WT,
                    children: (0, n.jsx)(d.e2v, {
                        children: k
                    })
                })]
            })]
        })
    })
}