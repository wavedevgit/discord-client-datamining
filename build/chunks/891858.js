/** Chunk was on web.js **/
/** chunk id: 891858, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => T
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(230109),
    c = n(397927),
    u = n(775602),
    d = n(793574),
    f = n(688810),
    p = n(531260),
    _ = n(954571),
    h = n(637073),
    m = n(278977),
    g = n(967196),
    E = n(907838),
    y = n(975662),
    b = n(322631),
    O = n(17307),
    v = n(652215),
    A = n(985018),
    I = n(70338),
    S = n(288894);
let T = e => {
    let t, n, {
            isAllPerksVisible: a,
            setIsAllPerksVisible: T,
            previousComponent: C,
            enablePremiumBrandRefresh: N
        } = e,
        w = i.useRef(null),
        R = i.useRef(null),
        P = Object.entries((0, y.A)()).reduce((e, t) => {
            let [n, r] = t;
            return !1 !== r.canReveal && "upcomingDropUntimed" !== r.name && (e[n] = r), e
        }, {}),
        {
            analyticsLocations: D
        } = (0, f.Ay)(d.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
        [x, L] = i.useState(!1),
        j = (0, o.bG)([u.A], () => u.A.useReducedMotion),
        M = (0, O.LQ)(),
        {
            fractionalState: k
        } = (0, p.A)(),
        U = (0, h.d)();
    M ? (t = A.intl.string(A.t["+vt7w9"]), n = A.intl.string(A.t.LgHbnL)) : (t = A.intl.string(A.t.LgHbnL), n = A.intl.string(A.t["+vt7w9"]));
    let G = () => {
        T(!1), _.default.track(v.HAw.NITRO_HOME_NAVIGATION, {
            current_component: b.A2.SEE_ALL,
            next_component: C,
            interaction_component: "Back Button"
        })
    };
    return (0, r.jsx)(c.GtU, {
        className: s()(I.NX, {
            [I.ho]: a,
            [I.LM]: j
        }),
        ref: w,
        children: (0, r.jsx)(c.hLv, {
            color: "nitro-pink",
            className: s()(I.kL, I.Gd, {
                [I.fv]: !N
            }),
            children: (0, r.jsxs)(f.f5, {
                value: D,
                children: [N ? (0, r.jsx)(g.A, {
                    onBackClick: G
                }) : (0, r.jsx)(m.A, {
                    className: I.v1,
                    onBackClick: G
                }), (0, r.jsxs)("div", {
                    className: s()(I.fi, {
                        [I._9]: N
                    }),
                    children: [(0, r.jsx)(c.Heading, {
                        variant: "heading-xxl/extrabold",
                        color: "text-strong",
                        className: I.R_,
                        children: t
                    }), (0, r.jsx)(E.A, {
                        className: I.Nm,
                        cards: (0, O.vx)({
                            perksCards: P,
                            variant: b.cJ.CARD_CAROUSEL_FIRST_ROW,
                            isPremiumSubscriber: M,
                            hideCardsOnNarrowScreen: !0,
                            fractionalState: k,
                            isInReverseTrial: U
                        }),
                        cardType: b.cJ.CARD_CAROUSEL_FIRST_ROW
                    }), (0, r.jsx)(c.Heading, {
                        variant: "heading-xxl/extrabold",
                        color: "text-strong",
                        className: I.R_,
                        children: n
                    }), (0, r.jsx)(E.A, {
                        className: I.Nm,
                        cards: (0, O.vx)({
                            perksCards: P,
                            variant: b.cJ.CARD_CAROUSEL_SECOND_ROW,
                            isPremiumSubscriber: M,
                            hideCardsOnNarrowScreen: !0,
                            fractionalState: k,
                            isInReverseTrial: U
                        }),
                        cardType: b.cJ.CARD_CAROUSEL_SECOND_ROW
                    }), (0, r.jsx)(c.Heading, {
                        variant: "heading-xxl/extrabold",
                        color: "text-strong",
                        className: I.R_,
                        children: A.intl.string(A.t.LTaxu9)
                    }), (0, r.jsx)(E.A, {
                        className: I.Nm,
                        cards: (0, O.vx)({
                            perksCards: P,
                            variant: b.cJ.CARD_CAROUSEL_THIRD_ROW,
                            isPremiumSubscriber: M,
                            hideCardsOnNarrowScreen: !0,
                            fractionalState: k,
                            isInReverseTrial: U
                        }),
                        cardType: b.cJ.CARD_CAROUSEL_THIRD_ROW
                    })]
                }), (0, r.jsx)("div", {
                    className: I.hz
                }), (0, r.jsx)(l.L, {
                    innerRef: R,
                    onChange: e => {
                        e && !x && (_.default.track(v.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                            location_stack: D
                        }), L(!0))
                    },
                    children: (0, r.jsx)("div", {
                        ref: R,
                        className: I._Z
                    })
                }), (0, r.jsx)("img", {
                    src: S,
                    className: I.Kw,
                    width: 112,
                    height: 85,
                    alt: A.intl.string(A.t.X4IxWL)
                })]
            })
        })
    })
}