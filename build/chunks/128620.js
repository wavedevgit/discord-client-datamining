/** chunk id: 128620 params = (module,exports,require) **/
n.d(t, {
    A: () => O
});
var s = n(627968),
    a = n(64700),
    r = n(503698),
    l = n.n(r),
    i = n(892227),
    d = n(732955),
    o = n(462887),
    c = n(397927),
    u = n(241524),
    m = n(736653),
    h = n(303136),
    x = n(649032),
    C = n(320118),
    _ = n(976860),
    p = n(780964),
    g = n(858897),
    f = n(975571),
    R = n(872725),
    b = n(566119),
    j = n(94264),
    v = n(652215),
    N = n(758836),
    E = n(901123),
    A = n(490285),
    D = n(985018),
    I = n(787413),
    P = n(909340),
    y = n(455482);
let T = f.A.getArticleURL(v.MVz.ORBS_REWARDS_FAQ);

function w(e) {
    (0, b.o8)(e), window.open(T, "_blank")
}
let O = e => {
    let {
        className: t
    } = e, {
        passesGeneralUIInvariant: n,
        programReward: r
    } = (0, C.F)({
        location: "PremiumTenureRewardsOrbsCard"
    }), f = (0, u.A)("(min-width: 720px)"), T = (0, m.DP)(), O = a.useMemo(() => ({
        hueRotate: 25,
        glowAmount: (0, o.M)(T) ? 2 : 8,
        blurAmount: 10
    }), [T]);
    if (!n || null == r) return null;
    let S = function(e, t) {
        let n = e.program_current_state,
            a = null != e.next_reward_date && "" !== e.next_reward_date ? (0, i.default)(new Date(e.next_reward_date), new Date) : null,
            r = e?.total_rewarded_from_program;
        switch (n) {
            case x.L.ACTIVE:
                if (null == a || a < 0) return null;
                return {
                    displayTotalLifetimeRewards: null != r, displayProgressBar: !0, actionButton: (0, s.jsx)(d.$nd, {
                        text: D.intl.string(A.default.BxjHiu),
                        variant: t ? "overlay-primary" : "secondary",
                        onClick: () => {
                            (0, b.WD)(n), (0, _.pX)(E.BV.COLLECTIBLES_SHOP_WITH_TAB(N.G2.ORBS))
                        }
                    }), headerText: D.intl.format(A.default.BxLJQL, {
                        days: Math.max(1, a),
                        orbsCount: e.reward_amount
                    }), subheaderText: D.intl.format(A.default.tUV1vV, {
                        helpdeskArticle: () => w(n)
                    })
                };
            case x.L.PAYMENT_PROCESSING:
                return {
                    displayTotalLifetimeRewards: !1, displayProgressBar: !1, actionButton: (0, s.jsx)(d.$nd, {
                        text: D.intl.string(A.default.KVCfnE),
                        variant: t ? "overlay-primary" : "secondary",
                        onClick: () => {
                            (0, b.CC)(n), (0, g.openUserSettings)(p.X.BILLING_PANEL)
                        }
                    }), headerText: D.intl.string(A.default.uuZJXR), subheaderText: D.intl.format(A.default.dkeEV7, {
                        helpdeskArticle: () => w(n)
                    })
                };
            case x.L.PAYMENT_ERROR:
                return {
                    displayTotalLifetimeRewards: null != r, displayProgressBar: !1, actionButton: (0, s.jsx)(d.NPJ, {
                        theme: t ? v.NJ8.DARKER : void 0,
                        children: e => (0, s.jsx)("span", {
                            className: e,
                            children: (0, s.jsx)(d.$nd, {
                                text: D.intl.string(A.default.KVCfnE),
                                variant: "critical-secondary",
                                onClick: () => {
                                    (0, b.ue)(n), (0, g.openUserSettings)(p.X.BILLING_PANEL)
                                }
                            })
                        })
                    }), headerText: D.intl.string(A.default["+O9Asn"]), subheaderText: D.intl.format(A.default.nWKEBZ, {
                        helpdeskArticle: () => w(n)
                    })
                };
            case x.L.PROGRAM_ROLLBACK:
                return {
                    displayTotalLifetimeRewards: null != r, displayProgressBar: null != a, actionButton: (0, s.jsx)(d.$nd, {
                        text: D.intl.string(A.default["wLAd/+"]),
                        variant: t ? "overlay-primary" : "secondary",
                        onClick: () => {
                            (0, b.WD)(n), (0, _.pX)(E.BV.COLLECTIBLES_SHOP_WITH_TAB(N.G2.ORBS))
                        }
                    }), headerText: D.intl.string(A.default.zF0HnJ), subheaderText: D.intl.format(A.default["5tzNTa"], {
                        helpdeskArticle: () => w(n)
                    })
                };
            case x.L.PREMIUM_CHURNING:
                return {
                    displayTotalLifetimeRewards: null != r, displayProgressBar: null != a, actionButton: (0, s.jsx)(d.$nd, {
                        text: D.intl.string(A.default.FToh6D),
                        variant: t ? "overlay-primary" : "secondary",
                        icon: d.tvc,
                        onClick: () => {
                            (0, b.Jv)(n), (0, g.openUserSettings)(p.X.SUBSCRIPTIONS_PANEL)
                        }
                    }), headerText: D.intl.string(A.default.ISnOet), subheaderText: D.intl.format(A.default["vjaRZ/"], {
                        helpdeskArticle: () => w(n)
                    })
                };
            default:
                return null
        }
    }(r, f);
    if (null == S) return null;
    let {
        displayTotalLifetimeRewards: M,
        displayProgressBar: L,
        actionButton: U,
        headerText: k,
        subheaderText: B
    } = S;
    return (0, s.jsx)("div", {
        className: l()(I.Hc, t),
        children: (0, s.jsxs)(R.A, {
            cardType: c.sl2.CUSTOM,
            cardClassName: I.Nr,
            glowing: !0,
            ...O,
            children: [(0, s.jsx)(h.A, {
                className: I.Ki,
                src: P.A
            }), (0, s.jsxs)("div", {
                className: I.zK,
                children: [(0, s.jsx)("img", {
                    src: y.A,
                    className: I._e,
                    alt: "",
                    "aria-hidden": !0
                }), (0, s.jsx)("div", {
                    className: I.mR
                })]
            }), (0, s.jsxs)("div", {
                className: I.FS,
                children: [(0, s.jsx)(d.NPJ, {
                    theme: f ? v.NJ8.DARKER : void 0,
                    children: e => (0, s.jsx)("div", {
                        className: l()(e, I.aZ),
                        children: (0, s.jsx)(d.Exy, {
                            type: "beta",
                            variant: "expressive"
                        })
                    })
                }), (0, s.jsx)(d.DZT, {
                    variant: "heading-xl/bold",
                    className: I.R_,
                    children: k
                }), (0, s.jsx)(d.EYj, {
                    variant: "text-md/medium",
                    className: I.G3,
                    children: B
                }), L && (0, s.jsx)(j.A, {
                    className: I.L$
                }), M && r.total_rewarded_from_program > 0 && (0, s.jsxs)("div", {
                    className: I.fB,
                    children: [(0, s.jsx)(d.EYj, {
                        variant: "text-md/medium",
                        className: I.G3,
                        children: D.intl.string(A.default["/1mWUn"])
                    }), (0, s.jsx)(d.Cp8, {
                        size: "sm",
                        color: "currentColor"
                    }), (0, s.jsx)(d.EYj, {
                        variant: "text-md/medium",
                        className: I.G3,
                        children: r.total_rewarded_from_program
                    })]
                }), (0, s.jsx)("div", {
                    className: I.WT,
                    children: (0, s.jsx)(d.e2v, {
                        children: U
                    })
                })]
            })]
        })
    })
}