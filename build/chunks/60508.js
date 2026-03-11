/** chunk id: 60508 params = (module,exports,require) **/
n.d(t, {
    A: () => b
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(230109),
    d = n(397927),
    c = n(775602),
    u = n(793574),
    _ = n(688810),
    g = n(531260),
    A = n(954571),
    m = n(637073),
    h = n(975662),
    p = n(322631),
    x = n(17307),
    E = n(652495),
    T = n(960005),
    S = n(992990),
    C = n(652215),
    I = n(985018),
    f = n(520089),
    N = n(288894);
let b = e => {
    let t, n, {
            isAllPerksVisible: l,
            setIsAllPerksVisible: b,
            previousComponent: v,
            enablePremiumBrandRefresh: O
        } = e,
        j = s.useRef(null),
        R = s.useRef(null),
        y = Object.entries((0, h.A)()).reduce((e, t) => {
            let [n, i] = t;
            return !1 !== i.canReveal && "upcomingDropUntimed" !== i.name && (e[n] = i), e
        }, {}),
        {
            analyticsLocations: P
        } = (0, _.Ay)(u.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
        [D, L] = s.useState(!1),
        G = (0, r.bG)([c.A], () => c.A.useReducedMotion),
        M = (0, x.LQ)(),
        {
            fractionalState: U
        } = (0, g.A)(),
        k = (0, m.d)();
    M ? (t = I.intl.string(I.t["+vt7w9"]), n = I.intl.string(I.t.LgHbnL)) : (t = I.intl.string(I.t.LgHbnL), n = I.intl.string(I.t["+vt7w9"]));
    let V = () => {
        b(!1), A.default.track(C.HAw.NITRO_HOME_NAVIGATION, {
            current_component: p.A2.SEE_ALL,
            next_component: v,
            interaction_component: "Back Button"
        })
    };
    return (0, i.jsx)(d.GtU, {
        className: a()(f.NX, {
            [f.ho]: l,
            [f.LM]: G
        }),
        inert: !l,
        ref: j,
        children: (0, i.jsx)(d.hLv, {
            color: "nitro-pink",
            className: a()(f.kL, f.Gd, {
                [f.fv]: !O
            }),
            children: (0, i.jsxs)(_.f5, {
                value: P,
                children: [O ? (0, i.jsx)(S.A, {
                    onBackClick: V
                }) : (0, i.jsx)(E.A, {
                    className: f.v1,
                    onBackClick: V
                }), (0, i.jsxs)("div", {
                    className: a()(f.fi, {
                        [f._9]: O
                    }),
                    children: [(0, i.jsx)(d.Heading, {
                        variant: "heading-xxl/extrabold",
                        color: "text-strong",
                        className: f.R_,
                        children: t
                    }), (0, i.jsx)(T.A, {
                        className: f.Nm,
                        cards: (0, x.vx)({
                            perksCards: y,
                            variant: p.cJ.CARD_CAROUSEL_FIRST_ROW,
                            isPremiumSubscriber: M,
                            hideCardsOnNarrowScreen: !0,
                            fractionalState: U,
                            isInReverseTrial: k
                        }),
                        cardType: p.cJ.CARD_CAROUSEL_FIRST_ROW
                    }), (0, i.jsx)(d.Heading, {
                        variant: "heading-xxl/extrabold",
                        color: "text-strong",
                        className: f.R_,
                        children: n
                    }), (0, i.jsx)(T.A, {
                        className: f.Nm,
                        cards: (0, x.vx)({
                            perksCards: y,
                            variant: p.cJ.CARD_CAROUSEL_SECOND_ROW,
                            isPremiumSubscriber: M,
                            hideCardsOnNarrowScreen: !0,
                            fractionalState: U,
                            isInReverseTrial: k
                        }),
                        cardType: p.cJ.CARD_CAROUSEL_SECOND_ROW
                    }), (0, i.jsx)(d.Heading, {
                        variant: "heading-xxl/extrabold",
                        color: "text-strong",
                        className: f.R_,
                        children: I.intl.string(I.t.LTaxu9)
                    }), (0, i.jsx)(T.A, {
                        className: f.Nm,
                        cards: (0, x.vx)({
                            perksCards: y,
                            variant: p.cJ.CARD_CAROUSEL_THIRD_ROW,
                            isPremiumSubscriber: M,
                            hideCardsOnNarrowScreen: !0,
                            fractionalState: U,
                            isInReverseTrial: k
                        }),
                        cardType: p.cJ.CARD_CAROUSEL_THIRD_ROW
                    })]
                }), (0, i.jsx)("div", {
                    className: f.hz
                }), (0, i.jsx)(o.L, {
                    innerRef: R,
                    onChange: e => {
                        e && !D && (A.default.track(C.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                            location_stack: P
                        }), L(!0))
                    },
                    children: (0, i.jsx)("div", {
                        ref: R,
                        className: f._Z
                    })
                }), (0, i.jsx)("img", {
                    src: N,
                    className: f.Kw,
                    width: 112,
                    height: 85,
                    alt: I.intl.string(I.t.X4IxWL)
                })]
            })
        })
    })
}