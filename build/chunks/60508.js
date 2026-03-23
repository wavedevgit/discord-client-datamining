/** chunk id: 60508 params = (module,exports,require) **/
n.d(t, {
    A: () => v
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
    m = n(688810),
    _ = n(531260),
    g = n(954571),
    A = n(637073),
    x = n(975662),
    p = n(322631),
    h = n(17307),
    f = n(652495),
    T = n(960005),
    E = n(992990),
    S = n(652215),
    b = n(985018),
    C = n(520089),
    N = n(288894);
let v = e => {
    let t, n, {
            isAllPerksVisible: l,
            setIsAllPerksVisible: v,
            previousComponent: I,
            enablePremiumBrandRefresh: j
        } = e,
        y = s.useRef(null),
        O = s.useRef(null),
        R = Object.entries((0, x.A)()).reduce((e, t) => {
            let [n, i] = t;
            return !1 !== i.canReveal && "upcomingDropUntimed" !== i.name && (e[n] = i), e
        }, {}),
        {
            analyticsLocations: L
        } = (0, m.Ay)(u.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
        [P, D] = s.useState(!1),
        M = (0, r.bG)([c.A], () => c.A.useReducedMotion),
        G = (0, h.LQ)(),
        {
            fractionalState: k
        } = (0, _.A)(),
        U = (0, A.d)();
    G ? (t = b.intl.string(b.t["+vt7w9"]), n = b.intl.string(b.t.LgHbnL)) : (t = b.intl.string(b.t.LgHbnL), n = b.intl.string(b.t["+vt7w9"]));
    let w = () => {
        v(!1), g.default.track(S.HAw.NITRO_HOME_NAVIGATION, {
            current_component: p.A2.SEE_ALL,
            next_component: I,
            interaction_component: "Back Button"
        })
    };
    return (0, i.jsx)(d.GtU, {
        className: a()(C.NX, {
            [C.ho]: l,
            [C.LM]: M
        }),
        inert: !l,
        ref: y,
        children: (0, i.jsx)(d.hLv, {
            color: "nitro-pink",
            className: a()(C.kL, C.Gd, {
                [C.fv]: !j
            }),
            children: (0, i.jsxs)(m.f5, {
                value: L,
                children: [j ? (0, i.jsx)(E.A, {
                    onBackClick: w
                }) : (0, i.jsx)(f.A, {
                    className: C.v1,
                    onBackClick: w
                }), (0, i.jsxs)("div", {
                    className: a()(C.fi, {
                        [C._9]: j
                    }),
                    children: [(0, i.jsx)(d.Heading, {
                        variant: "heading-xxl/extrabold",
                        color: "text-strong",
                        className: C.R_,
                        children: t
                    }), (0, i.jsx)(T.A, {
                        className: C.Nm,
                        cards: (0, h.vx)({
                            perksCards: R,
                            variant: p.cJ.CARD_CAROUSEL_FIRST_ROW,
                            isPremiumSubscriber: G,
                            hideCardsOnNarrowScreen: !0,
                            fractionalState: k,
                            isInReverseTrial: U
                        }),
                        cardType: p.cJ.CARD_CAROUSEL_FIRST_ROW
                    }), (0, i.jsx)(d.Heading, {
                        variant: "heading-xxl/extrabold",
                        color: "text-strong",
                        className: C.R_,
                        children: n
                    }), (0, i.jsx)(T.A, {
                        className: C.Nm,
                        cards: (0, h.vx)({
                            perksCards: R,
                            variant: p.cJ.CARD_CAROUSEL_SECOND_ROW,
                            isPremiumSubscriber: G,
                            hideCardsOnNarrowScreen: !0,
                            fractionalState: k,
                            isInReverseTrial: U
                        }),
                        cardType: p.cJ.CARD_CAROUSEL_SECOND_ROW
                    }), (0, i.jsx)(d.Heading, {
                        variant: "heading-xxl/extrabold",
                        color: "text-strong",
                        className: C.R_,
                        children: b.intl.string(b.t.LTaxu9)
                    }), (0, i.jsx)(T.A, {
                        className: C.Nm,
                        cards: (0, h.vx)({
                            perksCards: R,
                            variant: p.cJ.CARD_CAROUSEL_THIRD_ROW,
                            isPremiumSubscriber: G,
                            hideCardsOnNarrowScreen: !0,
                            fractionalState: k,
                            isInReverseTrial: U
                        }),
                        cardType: p.cJ.CARD_CAROUSEL_THIRD_ROW
                    })]
                }), (0, i.jsx)("div", {
                    className: C.hz
                }), (0, i.jsx)(o.L, {
                    innerRef: O,
                    onChange: e => {
                        e && !P && (g.default.track(S.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                            location_stack: L
                        }), D(!0))
                    },
                    children: (0, i.jsx)("div", {
                        ref: O,
                        className: C._Z
                    })
                }), (0, i.jsx)("img", {
                    src: N,
                    className: C.Kw,
                    width: 112,
                    height: 85,
                    alt: b.intl.string(b.t.X4IxWL)
                })]
            })
        })
    })
}