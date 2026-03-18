/** chunk id: 60508 params = (module,exports,require) **/
n.d(t, {
    A: () => I
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
    m = n(531260),
    g = n(954571),
    A = n(637073),
    x = n(975662),
    h = n(322631),
    p = n(17307),
    T = n(652495),
    E = n(960005),
    S = n(992990),
    C = n(652215),
    f = n(985018),
    b = n(520089),
    N = n(288894);
let I = e => {
    let t, n, {
            isAllPerksVisible: l,
            setIsAllPerksVisible: I,
            previousComponent: v,
            enablePremiumBrandRefresh: j
        } = e,
        y = s.useRef(null),
        R = s.useRef(null),
        O = Object.entries((0, x.A)()).reduce((e, t) => {
            let [n, i] = t;
            return !1 !== i.canReveal && "upcomingDropUntimed" !== i.name && (e[n] = i), e
        }, {}),
        {
            analyticsLocations: D
        } = (0, _.Ay)(u.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
        [L, P] = s.useState(!1),
        G = (0, r.bG)([c.A], () => c.A.useReducedMotion),
        M = (0, p.LQ)(),
        {
            fractionalState: U
        } = (0, m.A)(),
        k = (0, A.d)();
    M ? (t = f.intl.string(f.t["+vt7w9"]), n = f.intl.string(f.t.LgHbnL)) : (t = f.intl.string(f.t.LgHbnL), n = f.intl.string(f.t["+vt7w9"]));
    let V = () => {
        I(!1), g.default.track(C.HAw.NITRO_HOME_NAVIGATION, {
            current_component: h.A2.SEE_ALL,
            next_component: v,
            interaction_component: "Back Button"
        })
    };
    return (0, i.jsx)(d.GtU, {
        className: a()(b.NX, {
            [b.ho]: l,
            [b.LM]: G
        }),
        inert: !l,
        ref: y,
        children: (0, i.jsx)(d.hLv, {
            color: "nitro-pink",
            className: a()(b.kL, b.Gd, {
                [b.fv]: !j
            }),
            children: (0, i.jsxs)(_.f5, {
                value: D,
                children: [j ? (0, i.jsx)(S.A, {
                    onBackClick: V
                }) : (0, i.jsx)(T.A, {
                    className: b.v1,
                    onBackClick: V
                }), (0, i.jsxs)("div", {
                    className: a()(b.fi, {
                        [b._9]: j
                    }),
                    children: [(0, i.jsx)(d.Heading, {
                        variant: "heading-xxl/extrabold",
                        color: "text-strong",
                        className: b.R_,
                        children: t
                    }), (0, i.jsx)(E.A, {
                        className: b.Nm,
                        cards: (0, p.vx)({
                            perksCards: O,
                            variant: h.cJ.CARD_CAROUSEL_FIRST_ROW,
                            isPremiumSubscriber: M,
                            hideCardsOnNarrowScreen: !0,
                            fractionalState: U,
                            isInReverseTrial: k
                        }),
                        cardType: h.cJ.CARD_CAROUSEL_FIRST_ROW
                    }), (0, i.jsx)(d.Heading, {
                        variant: "heading-xxl/extrabold",
                        color: "text-strong",
                        className: b.R_,
                        children: n
                    }), (0, i.jsx)(E.A, {
                        className: b.Nm,
                        cards: (0, p.vx)({
                            perksCards: O,
                            variant: h.cJ.CARD_CAROUSEL_SECOND_ROW,
                            isPremiumSubscriber: M,
                            hideCardsOnNarrowScreen: !0,
                            fractionalState: U,
                            isInReverseTrial: k
                        }),
                        cardType: h.cJ.CARD_CAROUSEL_SECOND_ROW
                    }), (0, i.jsx)(d.Heading, {
                        variant: "heading-xxl/extrabold",
                        color: "text-strong",
                        className: b.R_,
                        children: f.intl.string(f.t.LTaxu9)
                    }), (0, i.jsx)(E.A, {
                        className: b.Nm,
                        cards: (0, p.vx)({
                            perksCards: O,
                            variant: h.cJ.CARD_CAROUSEL_THIRD_ROW,
                            isPremiumSubscriber: M,
                            hideCardsOnNarrowScreen: !0,
                            fractionalState: U,
                            isInReverseTrial: k
                        }),
                        cardType: h.cJ.CARD_CAROUSEL_THIRD_ROW
                    })]
                }), (0, i.jsx)("div", {
                    className: b.hz
                }), (0, i.jsx)(o.L, {
                    innerRef: R,
                    onChange: e => {
                        e && !L && (g.default.track(C.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                            location_stack: D
                        }), P(!0))
                    },
                    children: (0, i.jsx)("div", {
                        ref: R,
                        className: b._Z
                    })
                }), (0, i.jsx)("img", {
                    src: N,
                    className: b.Kw,
                    width: 112,
                    height: 85,
                    alt: f.intl.string(f.t.X4IxWL)
                })]
            })
        })
    })
}