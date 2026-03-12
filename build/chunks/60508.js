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
    g = n(531260),
    m = n(954571),
    A = n(637073),
    h = n(975662),
    p = n(322631),
    x = n(17307),
    E = n(652495),
    T = n(960005),
    S = n(992990),
    C = n(652215),
    f = n(985018),
    N = n(865047),
    b = n(288894);
let I = e => {
    let t, n, {
            isAllPerksVisible: l,
            setIsAllPerksVisible: I,
            previousComponent: v,
            enablePremiumBrandRefresh: j
        } = e,
        O = s.useRef(null),
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
        k = (0, A.d)();
    M ? (t = f.intl.string(f.t["+vt7w9"]), n = f.intl.string(f.t.LgHbnL)) : (t = f.intl.string(f.t.LgHbnL), n = f.intl.string(f.t["+vt7w9"]));
    let V = () => {
        I(!1), m.default.track(C.HAw.NITRO_HOME_NAVIGATION, {
            current_component: p.A2.SEE_ALL,
            next_component: v,
            interaction_component: "Back Button"
        })
    };
    return (0, i.jsx)(d.GtU, {
        className: a()(N.NX, {
            [N.ho]: l,
            [N.LM]: G
        }),
        inert: !l,
        ref: O,
        children: (0, i.jsx)(d.hLv, {
            color: "nitro-pink",
            className: a()(N.kL, N.Gd, {
                [N.fv]: !j
            }),
            children: (0, i.jsxs)(_.f5, {
                value: P,
                children: [j ? (0, i.jsx)(S.A, {
                    onBackClick: V
                }) : (0, i.jsx)(E.A, {
                    className: N.v1,
                    onBackClick: V
                }), (0, i.jsxs)("div", {
                    className: a()(N.fi, {
                        [N._9]: j
                    }),
                    children: [(0, i.jsx)(d.Heading, {
                        variant: "heading-xxl/extrabold",
                        color: "text-strong",
                        className: N.R_,
                        children: t
                    }), (0, i.jsx)(T.A, {
                        className: N.Nm,
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
                        className: N.R_,
                        children: n
                    }), (0, i.jsx)(T.A, {
                        className: N.Nm,
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
                        className: N.R_,
                        children: f.intl.string(f.t.LTaxu9)
                    }), (0, i.jsx)(T.A, {
                        className: N.Nm,
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
                    className: N.hz
                }), (0, i.jsx)(o.L, {
                    innerRef: R,
                    onChange: e => {
                        e && !D && (m.default.track(C.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                            location_stack: P
                        }), L(!0))
                    },
                    children: (0, i.jsx)("div", {
                        ref: R,
                        className: N._Z
                    })
                }), (0, i.jsx)("img", {
                    src: b,
                    className: N.Kw,
                    width: 112,
                    height: 85,
                    alt: f.intl.string(f.t.X4IxWL)
                })]
            })
        })
    })
}