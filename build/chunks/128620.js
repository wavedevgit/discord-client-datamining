/** chunk id: 128620, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => D
});
var r = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l),
    i = n(892227),
    d = n(732955),
    u = n(462887),
    o = n(397927),
    c = n(241524),
    m = n(736653),
    h = n(607470),
    x = n(649032),
    p = n(320118),
    _ = n(976860),
    f = n(780964),
    g = n(840065),
    N = n(975571),
    b = n(872725),
    R = n(566119),
    E = n(570627),
    v = n(94264),
    A = n(652215),
    C = n(758836),
    T = n(901123),
    j = n(723468),
    y = n(985018),
    P = n(306776),
    I = n(909340),
    S = n(455482);
let O = N.A.getArticleURL(A.MVz.ORBS_REWARDS_FAQ);

function w(e) {
    (0, R.o8)(e), window.open(O, "_blank")
}
let D = e => {
    let {
        className: t
    } = e, {
        passesGeneralUIInvariant: n,
        programReward: l
    } = (0, p.F)({
        location: "PremiumTenureRewardsOrbsCard"
    }), N = E.m.useConfig({
        location: "PremiumTenureRewardsOrbsCard"
    }).enabled, O = (0, c.A)("(min-width: 720px)"), D = (0, m.DP)(), L = a.useMemo(() => ({
        hueRotate: 25,
        glowAmount: (0, u.M)(D) ? 2 : 8,
        blurAmount: N ? 10 : 20
    }), [D, N]);
    if (!n || null == l) return null;
    let U = function(e, t) {
        let n = e.program_current_state,
            a = null != e.next_reward_date && "" !== e.next_reward_date ? (0, i.default)(new Date(e.next_reward_date), new Date) : null,
            l = e?.total_rewarded_from_program;
        switch (n) {
            case x.L.ACTIVE:
                if (null == a || a < 0) return null;
                return {
                    displayTotalLifetimeRewards: null != l, displayProgressBar: !0, actionButton: (0, r.jsx)(d.$nd, {
                        text: y.intl.string(j.default.BxjHiu),
                        variant: t ? "overlay-primary" : "secondary",
                        onClick: () => {
                            (0, R.WD)(n), (0, _.pX)(T.BV.COLLECTIBLES_SHOP_WITH_TAB(C.G2.ORBS))
                        }
                    }), headerText: y.intl.format(j.default.BxLJQL, {
                        days: Math.max(1, a),
                        orbsCount: e.reward_amount
                    }), subheaderText: y.intl.format(j.default.tUV1vV, {
                        helpdeskArticle: () => w(n)
                    })
                };
            case x.L.PAYMENT_PROCESSING:
                return {
                    displayTotalLifetimeRewards: !1, displayProgressBar: !1, actionButton: (0, r.jsx)(d.$nd, {
                        text: y.intl.string(j.default.KVCfnE),
                        variant: t ? "overlay-primary" : "secondary",
                        onClick: () => {
                            (0, R.CC)(n), (0, g.openUserSettings)(f.X.BILLING_PANEL, {
                                section: A.nc_.BILLING
                            })
                        }
                    }), headerText: y.intl.string(j.default.uuZJXR), subheaderText: y.intl.format(j.default.dkeEV7, {
                        helpdeskArticle: () => w(n)
                    })
                };
            case x.L.PAYMENT_ERROR:
                return {
                    displayTotalLifetimeRewards: null != l, displayProgressBar: !1, actionButton: (0, r.jsx)(d.NPJ, {
                        theme: t ? A.NJ8.DARKER : void 0,
                        children: e => (0, r.jsx)("span", {
                            className: e,
                            children: (0, r.jsx)(d.$nd, {
                                text: y.intl.string(j.default.KVCfnE),
                                variant: "critical-secondary",
                                onClick: () => {
                                    (0, R.ue)(n), (0, g.openUserSettings)(f.X.BILLING_PANEL, {
                                        section: A.nc_.BILLING
                                    })
                                }
                            })
                        })
                    }), headerText: y.intl.string(j.default["+O9Asn"]), subheaderText: y.intl.format(j.default.nWKEBZ, {
                        helpdeskArticle: () => w(n)
                    })
                };
            case x.L.PROGRAM_ROLLBACK:
                return {
                    displayTotalLifetimeRewards: null != l, displayProgressBar: null != a, actionButton: (0, r.jsx)(d.$nd, {
                        text: y.intl.string(j.default["wLAd/+"]),
                        variant: t ? "overlay-primary" : "secondary",
                        onClick: () => {
                            (0, R.WD)(n), (0, _.pX)(T.BV.COLLECTIBLES_SHOP_WITH_TAB(C.G2.ORBS))
                        }
                    }), headerText: y.intl.string(j.default.zF0HnJ), subheaderText: y.intl.format(j.default["5tzNTa"], {
                        helpdeskArticle: () => w(n)
                    })
                };
            case x.L.PREMIUM_CHURNING:
                return {
                    displayTotalLifetimeRewards: null != l, displayProgressBar: null != a, actionButton: (0, r.jsx)(d.$nd, {
                        text: y.intl.string(j.default.FToh6D),
                        variant: t ? "overlay-primary" : "secondary",
                        icon: d.tvc,
                        onClick: () => {
                            (0, R.Jv)(n), (0, g.openUserSettings)(f.X.SUBSCRIPTIONS_PANEL, {
                                section: A.nc_.SUBSCRIPTIONS
                            })
                        }
                    }), headerText: y.intl.string(j.default.ISnOet), subheaderText: y.intl.format(j.default["vjaRZ/"], {
                        helpdeskArticle: () => w(n)
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
    return (0, r.jsx)("div", {
        className: s()(P.Hc, t),
        children: (0, r.jsxs)(b.A, {
            cardType: o.sl2.CUSTOM,
            cardClassName: P.Nr,
            ...L,
            children: [(0, r.jsx)(h.A, {
                muted: !0,
                autoPlay: !0,
                playsInline: !0,
                loop: !0,
                className: P.Ki,
                src: I.A
            }), (0, r.jsxs)("div", {
                className: P.zK,
                children: [(0, r.jsx)("img", {
                    src: S.A,
                    className: P._e,
                    alt: "",
                    "aria-hidden": !0
                }), (0, r.jsx)("div", {
                    className: P.mR
                })]
            }), (0, r.jsxs)("div", {
                className: P.FS,
                children: [(0, r.jsx)(d.NPJ, {
                    theme: O ? A.NJ8.DARKER : void 0,
                    children: e => (0, r.jsx)("div", {
                        className: s()(e, P.aZ),
                        children: (0, r.jsx)(d.Exy, {
                            type: "beta",
                            variant: "expressive"
                        })
                    })
                }), (0, r.jsx)(d.DZT, {
                    variant: "heading-xl/bold",
                    className: P.R_,
                    children: G
                }), (0, r.jsx)(d.EYj, {
                    variant: "text-md/medium",
                    className: P.G3,
                    children: W
                }), B && (0, r.jsx)(v.A, {
                    className: P.L$
                }), M && l.total_rewarded_from_program > 0 && (0, r.jsxs)("div", {
                    className: P.fB,
                    children: [(0, r.jsx)(d.EYj, {
                        variant: "text-md/medium",
                        className: P.G3,
                        children: y.intl.string(j.default["/1mWUn"])
                    }), (0, r.jsx)(d.Cp8, {
                        size: "sm",
                        color: "currentColor"
                    }), (0, r.jsx)(d.EYj, {
                        variant: "text-md/medium",
                        className: P.G3,
                        children: l.total_rewarded_from_program
                    })]
                }), (0, r.jsx)("div", {
                    className: P.WT,
                    children: (0, r.jsx)(d.e2v, {
                        children: k
                    })
                })]
            })]
        })
    })
}