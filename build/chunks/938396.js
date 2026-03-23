/** chunk id: 938396 params = (module,exports,require) **/
l.d(t, {
    A: () => O
});
var a = l(627968),
    n = l(64700),
    r = l(503698),
    i = l.n(r),
    o = l(892227),
    s = l(311907),
    c = l(964892),
    u = l(916845),
    d = l(732955),
    p = l(303136),
    m = l(320118),
    h = l(976860),
    b = l(309954),
    x = l(287809),
    y = l(975571),
    f = l(474090),
    g = l(94264),
    v = l(235365),
    _ = l(566119),
    E = l(788868),
    C = l(652215),
    S = l(901123),
    j = l(49370),
    T = l(985018),
    A = l(125634),
    P = l(268920),
    k = l(633217),
    R = l(909340);
let I = () => (0, a.jsx)("div", {
    className: A.s,
    children: (0, a.jsx)(p.A, {
        src: k.A,
        fallbackImage: P.A,
        className: A.Cb
    })
});

function N() {
    (0, _.RQ)(), (0, h.pX)(`${S.BV.NITRO_HOME}?section=${v.L}`)
}

function M() {
    (0, _.gP)(), (0, h.pX)(`${S.BV.NITRO_HOME}?section=${v.L}`)
}

function D() {
    (0, _.b)(), window.open(y.A.getArticleURL(C.MVz.ORBS_FAQ), "_blank")
}

function O(e) {
    let {
        targetElementRef: t,
        shouldShow: l,
        onRequestClose: r,
        ctaText: h,
        ctaOnClick: y
    } = e, {
        passesGeneralUIInvariant: v,
        programReward: _
    } = (0, m.F)({
        location: "PremiumTenureRewardsOrbsBalancePopover"
    }), S = (0, s.bG)([x.default], () => x.default.getCurrentUser()), {
        balance: P
    } = (0, b.W)(), k = !(0, f.ki)(S), O = n.useMemo(() => {
        let e = (0, f.YE)(S, E.PremiumTypes.TIER_2);
        if (!v || k) return null;
        if (e && null != _) {
            let e = (0, o.default)(new Date(_.next_reward_date), new Date);
            return (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(d.EYj, {
                    variant: "text-xs/normal",
                    color: "text-default",
                    children: T.intl.format(j.default["AvL/At"], {
                        days: Math.max(1, e),
                        deepLinkToNitroOrbs: N
                    })
                }), (0, a.jsx)(g.A, {})]
            })
        }
        return null
    }, [S, k, _, v]), L = (P ?? 0) >= 4100;
    return (0, a.jsx)(c.x, {
        targetElementRef: t,
        shouldShow: l,
        onRequestClose: r,
        position: "bottom",
        gradientColor: "blue",
        modal: !0,
        closeOnClickOutside: !0,
        children: (0, a.jsx)(d.NPJ, {
            theme: L ? C.NJ8.DARKER : void 0,
            children: e => (0, a.jsxs)("div", {
                className: i()(e, A.j),
                children: [L && (0, a.jsx)(p.A, {
                    src: R.A,
                    className: A.yG
                }), (0, a.jsxs)("div", {
                    className: A.Qs,
                    children: [(0, a.jsx)(u.q, {
                        onClick: r
                    }), (0, a.jsxs)("div", {
                        className: A.hQ,
                        children: [(0, a.jsx)(I, {}), (0, a.jsxs)("div", {
                            className: A.y$,
                            children: [(P ?? 0) > 0 && (0, a.jsxs)("div", {
                                className: A.E2,
                                children: [(0, a.jsx)(d.EYj, {
                                    variant: "display-lg",
                                    className: A.K,
                                    children: P ?? 0
                                }), (0, a.jsx)(d.EYj, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: T.intl.string(j.default.KclK9z)
                                })]
                            }), O]
                        }), (0, a.jsx)(d.$nd, {
                            text: h,
                            variant: "primary",
                            size: "sm",
                            onClick: y,
                            fullWidth: !0
                        }), (0, a.jsx)(d.EYj, {
                            variant: "text-xs/normal",
                            color: k ? "text-default" : "text-muted",
                            className: A.CU,
                            children: k ? T.intl.format(j.default.juvXqj, {
                                deepLinkToNitroOrbs: M
                            }) : T.intl.format(j.default.fhAVek, {
                                helpdeskArticle: D
                            })
                        })]
                    })]
                })]
            })
        })
    })
}