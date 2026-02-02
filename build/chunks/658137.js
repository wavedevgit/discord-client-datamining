/** chunk id: 658137, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => v
});
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(311907),
    o = n(421380),
    c = n(397927),
    d = n(775602),
    u = n(793574),
    _ = n(688810),
    p = n(607470),
    m = n(676279),
    g = n(560138),
    A = n(526292),
    f = n(89366),
    b = n(236834),
    h = n(194509),
    E = n(224850),
    O = n(797255),
    x = n(753894),
    C = n(288351),
    S = n(693591),
    T = n(985018),
    I = n(413515),
    N = n(182514),
    j = n(619947),
    y = n(733907);
let v = i.forwardRef((e, t) => {
    let {
        className: n,
        buttonClassName: i,
        subscriptionTier: l,
        isDarkMode: v,
        isEligibleForBogoPromotion: P,
        videoRef: R
    } = e, {
        analyticsLocations: D
    } = (0, _.Ay)(u.A.PREMIUM_MARKETING_HERO_CTA), L = (0, f.QQ)(), w = (0, A.ar)(), M = (0, a.bG)([g.A], () => g.A.affinities), G = (0, b.A)(), U = null != G, k = v ? o.XD.WHITE : o.XD.BRAND, B = M.length > 0, H = T.intl.string(T.t.YCZldK), V = (0, m.TM)(), F = (0, a.bG)([d.A], () => d.A.useReducedMotion);
    return (0, r.jsx)(_.f5, {
        value: D,
        children: (0, r.jsxs)("div", {
            className: s()(I.kL, I.qY, n),
            ref: t,
            "data-testid": "marketing-page-hero-header",
            children: [(0, r.jsx)("div", {
                className: I.kL,
                children: (0, r.jsxs)("div", {
                    className: I.s8,
                    children: [w && (0, r.jsx)(C.A, {}), (0, r.jsx)(c.Heading, {
                        className: I.WT,
                        variant: "display-sm",
                        color: "text-strong",
                        children: H
                    }), U ? (0, r.jsx)(O.A, {
                        referrer: G
                    }) : B && (0, r.jsx)("div", {
                        className: I.kb,
                        children: (0, r.jsx)(E.A, {
                            textColor: "text-default",
                            smallerText: !1,
                            isApplicationHome: !0
                        })
                    }), L ? (0, r.jsx)("div", {
                        className: s()(I.UD, I.$F, {
                            [I.In]: !(B || U)
                        }),
                        children: (0, r.jsx)(h.A, {
                            className: s()(I.x6, i),
                            color: k
                        })
                    }) : (0, r.jsx)(x.KN, {
                        subscriptionTier: l,
                        inOfferExperience: w,
                        containerClassName: s()(I.$F, {
                            [I.In]: !(B || U)
                        }),
                        buttonClassName: i,
                        isApplicationHome: !0,
                        isDarkMode: v,
                        isEligibleForBogoPromotion: P
                    }), (0, r.jsx)(x.U9, {
                        variant: "text-sm/normal",
                        withBottomMargin: !1,
                        isApplicationHome: !0
                    })]
                })
            }), (0, r.jsx)("div", {
                className: I.TT,
                children: (0, r.jsx)(p.A, {
                    autoPlay: !F,
                    playsInline: !0,
                    preload: F ? "none" : "auto",
                    poster: j.A,
                    loop: !0,
                    className: I.gm,
                    ref: R,
                    children: (0, r.jsx)("source", {
                        src: V ? N.A : y.A,
                        type: V ? S.a.MP4 : S.a.WEBM
                    })
                })
            })]
        })
    })
})