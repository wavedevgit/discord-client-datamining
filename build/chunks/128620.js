/** chunk id: 128620 params = (module,exports,require) **/
a.d(t, {
    A: () => U
});
var n = a(627968),
    r = a(64700),
    s = a(503698),
    i = a.n(s),
    d = a(892227),
    l = a(732955),
    o = a(462887),
    c = a(397927),
    u = a(241524),
    _ = a(736653),
    m = a(303136),
    p = a(649032),
    b = a(320118),
    f = a(976860),
    g = a(780964),
    A = a(840065),
    h = a(975571),
    x = a(872725),
    R = a(566119),
    C = a(94264),
    E = a(652215),
    v = a(758836),
    N = a(901123),
    I = a(49370),
    T = a(985018),
    S = a(327557),
    y = a(909340),
    P = a(455482);
let j = h.A.getArticleURL(E.MVz.ORBS_REWARDS_FAQ);

function D(e) {
    (0, R.o8)(e), window.open(j, "_blank")
}
let U = e => {
    let {
        className: t
    } = e, {
        passesGeneralUIInvariant: a,
        programReward: s
    } = (0, b.F)({
        location: "PremiumTenureRewardsOrbsCard"
    }), h = (0, u.A)("(min-width: 720px)"), j = (0, _.DP)(), U = r.useMemo(() => ({
        hueRotate: 25,
        glowAmount: (0, o.M)(j) ? 2 : 8,
        blurAmount: 10
    }), [j]);
    if (!a || null == s) return null;
    let O = function(e, t) {
        let a = e.program_current_state,
            r = null != e.next_reward_date && "" !== e.next_reward_date ? (0, d.default)(new Date(e.next_reward_date), new Date) : null,
            s = e?.total_rewarded_from_program;
        switch (a) {
            case p.L.ACTIVE:
                if (null == r || r < 0) return null;
                return {
                    displayTotalLifetimeRewards: null != s, displayProgressBar: !0, actionButton: (0, n.jsx)(l.$nd, {
                        text: T.intl.string(I.default.BxjHiu),
                        variant: t ? "overlay-primary" : "secondary",
                        onClick: () => {
                            (0, R.WD)(a), (0, f.pX)(N.BV.COLLECTIBLES_SHOP_WITH_TAB(v.G2.ORBS))
                        }
                    }), headerText: T.intl.format(I.default.BxLJQL, {
                        days: Math.max(1, r),
                        orbsCount: e.reward_amount
                    }), subheaderText: T.intl.format(I.default.tUV1vV, {
                        helpdeskArticle: () => D(a)
                    })
                };
            case p.L.PAYMENT_PROCESSING:
                return {
                    displayTotalLifetimeRewards: !1, displayProgressBar: !1, actionButton: (0, n.jsx)(l.$nd, {
                        text: T.intl.string(I.default.KVCfnE),
                        variant: t ? "overlay-primary" : "secondary",
                        onClick: () => {
                            (0, R.CC)(a), (0, A.openUserSettings)(g.X.BILLING_PANEL)
                        }
                    }), headerText: T.intl.string(I.default.uuZJXR), subheaderText: T.intl.format(I.default.dkeEV7, {
                        helpdeskArticle: () => D(a)
                    })
                };
            case p.L.PAYMENT_ERROR:
                return {
                    displayTotalLifetimeRewards: null != s, displayProgressBar: !1, actionButton: (0, n.jsx)(l.NPJ, {
                        theme: t ? E.NJ8.DARKER : void 0,
                        children: e => (0, n.jsx)("span", {
                            className: e,
                            children: (0, n.jsx)(l.$nd, {
                                text: T.intl.string(I.default.KVCfnE),
                                variant: "critical-secondary",
                                onClick: () => {
                                    (0, R.ue)(a), (0, A.openUserSettings)(g.X.BILLING_PANEL)
                                }
                            })
                        })
                    }), headerText: T.intl.string(I.default["+O9Asn"]), subheaderText: T.intl.format(I.default.nWKEBZ, {
                        helpdeskArticle: () => D(a)
                    })
                };
            case p.L.PROGRAM_ROLLBACK:
                return {
                    displayTotalLifetimeRewards: null != s, displayProgressBar: null != r, actionButton: (0, n.jsx)(l.$nd, {
                        text: T.intl.string(I.default["wLAd/+"]),
                        variant: t ? "overlay-primary" : "secondary",
                        onClick: () => {
                            (0, R.WD)(a), (0, f.pX)(N.BV.COLLECTIBLES_SHOP_WITH_TAB(v.G2.ORBS))
                        }
                    }), headerText: T.intl.string(I.default.zF0HnJ), subheaderText: T.intl.format(I.default["5tzNTa"], {
                        helpdeskArticle: () => D(a)
                    })
                };
            case p.L.PREMIUM_CHURNING:
                return {
                    displayTotalLifetimeRewards: null != s, displayProgressBar: null != r, actionButton: (0, n.jsx)(l.$nd, {
                        text: T.intl.string(I.default.FToh6D),
                        variant: t ? "overlay-primary" : "secondary",
                        icon: l.tvc,
                        onClick: () => {
                            (0, R.Jv)(a), (0, A.openUserSettings)(g.X.SUBSCRIPTIONS_PANEL)
                        }
                    }), headerText: T.intl.string(I.default.ISnOet), subheaderText: T.intl.format(I.default["vjaRZ/"], {
                        helpdeskArticle: () => D(a)
                    })
                };
            default:
                return null
        }
    }(s, h);
    if (null == O) return null;
    let {
        displayTotalLifetimeRewards: M,
        displayProgressBar: L,
        actionButton: w,
        headerText: B,
        subheaderText: k
    } = O;
    return (0, n.jsx)("div", {
        className: i()(S.Hc, t),
        children: (0, n.jsxs)(x.A, {
            cardType: c.sl2.CUSTOM,
            cardClassName: S.Nr,
            glowing: !0,
            ...U,
            children: [(0, n.jsx)(m.A, {
                className: S.Ki,
                src: y.A
            }), (0, n.jsxs)("div", {
                className: S.zK,
                children: [(0, n.jsx)("img", {
                    src: P.A,
                    className: S._e,
                    alt: "",
                    "aria-hidden": !0
                }), (0, n.jsx)("div", {
                    className: S.mR
                })]
            }), (0, n.jsxs)("div", {
                className: S.FS,
                children: [(0, n.jsx)(l.NPJ, {
                    theme: h ? E.NJ8.DARKER : void 0,
                    children: e => (0, n.jsx)("div", {
                        className: i()(e, S.aZ),
                        children: (0, n.jsx)(l.Exy, {
                            type: "beta",
                            variant: "expressive"
                        })
                    })
                }), (0, n.jsx)(l.DZT, {
                    variant: "heading-xl/bold",
                    className: S.R_,
                    children: B
                }), (0, n.jsx)(l.EYj, {
                    variant: "text-md/medium",
                    className: S.G3,
                    children: k
                }), L && (0, n.jsx)(C.A, {
                    className: S.L$
                }), M && s.total_rewarded_from_program > 0 && (0, n.jsxs)("div", {
                    className: S.fB,
                    children: [(0, n.jsx)(l.EYj, {
                        variant: "text-md/medium",
                        className: S.G3,
                        children: T.intl.string(I.default["/1mWUn"])
                    }), (0, n.jsx)(l.Cp8, {
                        size: "sm",
                        color: "currentColor"
                    }), (0, n.jsx)(l.EYj, {
                        variant: "text-md/medium",
                        className: S.G3,
                        children: s.total_rewarded_from_program
                    })]
                }), (0, n.jsx)("div", {
                    className: S.WT,
                    children: (0, n.jsx)(l.e2v, {
                        children: w
                    })
                })]
            })]
        })
    })
}