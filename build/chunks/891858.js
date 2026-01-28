/** Chunk was on 5606 **/
/** chunk id: 891858, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => T
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
    p = n(688810),
    _ = n(531260),
    m = n(954571),
    g = n(637073),
    f = n(278977),
    b = n(967196),
    h = n(907838),
    A = n(975662),
    E = n(322631),
    x = n(17307),
    O = n(652215),
    C = n(985018),
    y = n(70338),
    j = n(288894);
let T = e => {
    let t, n, {
            isAllPerksVisible: l,
            setIsAllPerksVisible: T,
            previousComponent: v,
            enablePremiumBrandRefresh: S
        } = e,
        I = i.useRef(null),
        N = i.useRef(null),
        P = Object.entries((0, A.A)()).reduce((e, t) => {
            let [n, r] = t;
            return !1 !== r.canReveal && "upcomingDropUntimed" !== r.name && (e[n] = r), e
        }, {}),
        {
            analyticsLocations: R
        } = (0, p.Ay)(u.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
        [D, w] = i.useState(!1),
        L = (0, a.bG)([d.A], () => d.A.useReducedMotion),
        M = (0, x.LQ)(),
        {
            fractionalState: G
        } = (0, _.A)(),
        U = (0, g.d)();
    M ? (t = C.intl.string(C.t["+vt7w9"]), n = C.intl.string(C.t.LgHbnL)) : (t = C.intl.string(C.t.LgHbnL), n = C.intl.string(C.t["+vt7w9"]));
    let k = () => {
        T(!1), m.default.track(O.HAw.NITRO_HOME_NAVIGATION, {
            current_component: E.A2.SEE_ALL,
            next_component: v,
            interaction_component: "Back Button"
        })
    };
    return (0, r.jsx)(c.GtU, {
        className: s()(y.NX, {
            [y.ho]: l,
            [y.LM]: L
        }),
        ref: I,
        children: (0, r.jsx)(c.hLv, {
            color: "nitro-pink",
            className: s()(y.kL, y.Gd, {
                [y.fv]: !S
            }),
            children: (0, r.jsxs)(p.f5, {
                value: R,
                children: [S ? (0, r.jsx)(b.A, {
                    onBackClick: k
                }) : (0, r.jsx)(f.A, {
                    className: y.v1,
                    onBackClick: k
                }), (0, r.jsxs)("div", {
                    className: s()(y.fi, {
                        [y._9]: S
                    }),
                    children: [(0, r.jsx)(c.Heading, {
                        variant: "heading-xxl/extrabold",
                        color: "text-strong",
                        className: y.R_,
                        children: t
                    }), (0, r.jsx)(h.A, {
                        className: y.Nm,
                        cards: (0, x.vx)({
                            perksCards: P,
                            variant: E.cJ.CARD_CAROUSEL_FIRST_ROW,
                            isPremiumSubscriber: M,
                            hideCardsOnNarrowScreen: !0,
                            fractionalState: G,
                            isInReverseTrial: U
                        }),
                        cardType: E.cJ.CARD_CAROUSEL_FIRST_ROW
                    }), (0, r.jsx)(c.Heading, {
                        variant: "heading-xxl/extrabold",
                        color: "text-strong",
                        className: y.R_,
                        children: n
                    }), (0, r.jsx)(h.A, {
                        className: y.Nm,
                        cards: (0, x.vx)({
                            perksCards: P,
                            variant: E.cJ.CARD_CAROUSEL_SECOND_ROW,
                            isPremiumSubscriber: M,
                            hideCardsOnNarrowScreen: !0,
                            fractionalState: G,
                            isInReverseTrial: U
                        }),
                        cardType: E.cJ.CARD_CAROUSEL_SECOND_ROW
                    }), (0, r.jsx)(c.Heading, {
                        variant: "heading-xxl/extrabold",
                        color: "text-strong",
                        className: y.R_,
                        children: C.intl.string(C.t.LTaxu9)
                    }), (0, r.jsx)(h.A, {
                        className: y.Nm,
                        cards: (0, x.vx)({
                            perksCards: P,
                            variant: E.cJ.CARD_CAROUSEL_THIRD_ROW,
                            isPremiumSubscriber: M,
                            hideCardsOnNarrowScreen: !0,
                            fractionalState: G,
                            isInReverseTrial: U
                        }),
                        cardType: E.cJ.CARD_CAROUSEL_THIRD_ROW
                    })]
                }), (0, r.jsx)("div", {
                    className: y.hz
                }), (0, r.jsx)(o.L, {
                    innerRef: N,
                    onChange: e => {
                        e && !D && (m.default.track(O.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                            location_stack: R
                        }), w(!0))
                    },
                    children: (0, r.jsx)("div", {
                        ref: N,
                        className: y._Z
                    })
                }), (0, r.jsx)("img", {
                    src: j,
                    className: y.Kw,
                    width: 112,
                    height: 85,
                    alt: C.intl.string(C.t.X4IxWL)
                })]
            })
        })
    })
}