/** Chunk was on 60667 **/
/** chunk id: 891858, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => S
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(311907),
    o = n(230109),
    c = n(397927),
    d = n(775602),
    u = n(793574),
    _ = n(688810),
    p = n(531260),
    m = n(954571),
    g = n(637073),
    A = n(278977),
    f = n(967196),
    h = n(907838),
    b = n(975662),
    E = n(322631),
    x = n(17307),
    O = n(652215),
    C = n(985018),
    T = n(70338),
    I = n(288894);
let S = e => {
    let t, n, {
            isAllPerksVisible: l,
            setIsAllPerksVisible: S,
            previousComponent: j,
            enablePremiumBrandRefresh: v
        } = e,
        N = i.useRef(null),
        y = i.useRef(null),
        P = Object.entries((0, b.A)()).reduce((e, t) => {
            let [n, r] = t;
            return !1 !== r.canReveal && "upcomingDropUntimed" !== r.name && (e[n] = r), e
        }, {}),
        {
            analyticsLocations: R
        } = (0, _.Ay)(u.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
        [D, w] = i.useState(!1),
        L = (0, a.bG)([d.A], () => d.A.useReducedMotion),
        M = (0, x.LQ)(),
        {
            fractionalState: U
        } = (0, p.A)(),
        G = (0, g.d)();
    M ? (t = C.intl.string(C.t["+vt7w9"]), n = C.intl.string(C.t.LgHbnL)) : (t = C.intl.string(C.t.LgHbnL), n = C.intl.string(C.t["+vt7w9"]));
    let k = () => {
        S(!1), m.default.track(O.HAw.NITRO_HOME_NAVIGATION, {
            current_component: E.A2.SEE_ALL,
            next_component: j,
            interaction_component: "Back Button"
        })
    };
    return (0, r.jsx)(c.GtU, {
        className: s()(T.NX, {
            [T.ho]: l,
            [T.LM]: L
        }),
        ref: N,
        children: (0, r.jsx)(c.hLv, {
            color: "nitro-pink",
            className: s()(T.kL, T.Gd, {
                [T.fv]: !v
            }),
            children: (0, r.jsxs)(_.f5, {
                value: R,
                children: [v ? (0, r.jsx)(f.A, {
                    onBackClick: k
                }) : (0, r.jsx)(A.A, {
                    className: T.v1,
                    onBackClick: k
                }), (0, r.jsxs)("div", {
                    className: s()(T.fi, {
                        [T._9]: v
                    }),
                    children: [(0, r.jsx)(c.Heading, {
                        variant: "heading-xxl/extrabold",
                        color: "text-strong",
                        className: T.R_,
                        children: t
                    }), (0, r.jsx)(h.A, {
                        className: T.Nm,
                        cards: (0, x.vx)({
                            perksCards: P,
                            variant: E.cJ.CARD_CAROUSEL_FIRST_ROW,
                            isPremiumSubscriber: M,
                            hideCardsOnNarrowScreen: !0,
                            fractionalState: U,
                            isInReverseTrial: G
                        }),
                        cardType: E.cJ.CARD_CAROUSEL_FIRST_ROW
                    }), (0, r.jsx)(c.Heading, {
                        variant: "heading-xxl/extrabold",
                        color: "text-strong",
                        className: T.R_,
                        children: n
                    }), (0, r.jsx)(h.A, {
                        className: T.Nm,
                        cards: (0, x.vx)({
                            perksCards: P,
                            variant: E.cJ.CARD_CAROUSEL_SECOND_ROW,
                            isPremiumSubscriber: M,
                            hideCardsOnNarrowScreen: !0,
                            fractionalState: U,
                            isInReverseTrial: G
                        }),
                        cardType: E.cJ.CARD_CAROUSEL_SECOND_ROW
                    }), (0, r.jsx)(c.Heading, {
                        variant: "heading-xxl/extrabold",
                        color: "text-strong",
                        className: T.R_,
                        children: C.intl.string(C.t.LTaxu9)
                    }), (0, r.jsx)(h.A, {
                        className: T.Nm,
                        cards: (0, x.vx)({
                            perksCards: P,
                            variant: E.cJ.CARD_CAROUSEL_THIRD_ROW,
                            isPremiumSubscriber: M,
                            hideCardsOnNarrowScreen: !0,
                            fractionalState: U,
                            isInReverseTrial: G
                        }),
                        cardType: E.cJ.CARD_CAROUSEL_THIRD_ROW
                    })]
                }), (0, r.jsx)("div", {
                    className: T.hz
                }), (0, r.jsx)(o.L, {
                    innerRef: y,
                    onChange: e => {
                        e && !D && (m.default.track(O.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                            location_stack: R
                        }), w(!0))
                    },
                    children: (0, r.jsx)("div", {
                        ref: y,
                        className: T._Z
                    })
                }), (0, r.jsx)("img", {
                    src: I,
                    className: T.Kw,
                    width: 112,
                    height: 85,
                    alt: C.intl.string(C.t.X4IxWL)
                })]
            })
        })
    })
}