/** Chunk was on 5606 **/
/** chunk id: 658137, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => N
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
    p = n(688810),
    _ = n(607470),
    m = n(676279),
    g = n(560138),
    f = n(526292),
    b = n(89366),
    h = n(236834),
    A = n(194509),
    E = n(224850),
    x = n(797255),
    O = n(753894),
    C = n(288351),
    y = n(693591),
    j = n(985018),
    T = n(413515),
    v = n(182514),
    S = n(619947),
    I = n(733907);
let N = i.forwardRef((e, t) => {
    let {
        className: n,
        buttonClassName: i,
        subscriptionTier: l,
        isDarkMode: N,
        isEligibleForBogoPromotion: P,
        videoRef: R
    } = e, {
        analyticsLocations: D
    } = (0, p.Ay)(u.A.PREMIUM_MARKETING_HERO_CTA), w = (0, b.QQ)(), L = (0, f.ar)(), M = (0, a.bG)([g.A], () => g.A.affinities), G = (0, h.A)(), U = null != G, k = N ? o.XD.WHITE : o.XD.BRAND, H = M.length > 0, B = j.intl.string(j.t.YCZldK), V = (0, m.TM)(), F = (0, a.bG)([d.A], () => d.A.useReducedMotion);
    return (0, r.jsx)(p.f5, {
        value: D,
        children: (0, r.jsxs)("div", {
            className: s()(T.kL, T.qY, n),
            ref: t,
            "data-testid": "marketing-page-hero-header",
            children: [(0, r.jsx)("div", {
                className: T.kL,
                children: (0, r.jsxs)("div", {
                    className: T.s8,
                    children: [L && (0, r.jsx)(C.A, {}), (0, r.jsx)(c.Heading, {
                        className: T.WT,
                        variant: "display-sm",
                        color: "text-strong",
                        children: B
                    }), U ? (0, r.jsx)(x.A, {
                        referrer: G
                    }) : H && (0, r.jsx)("div", {
                        className: T.kb,
                        children: (0, r.jsx)(E.A, {
                            textColor: "text-default",
                            smallerText: !1,
                            isApplicationHome: !0
                        })
                    }), w ? (0, r.jsx)("div", {
                        className: s()(T.UD, T.$F, {
                            [T.In]: !(H || U)
                        }),
                        children: (0, r.jsx)(A.A, {
                            className: s()(T.x6, i),
                            color: k
                        })
                    }) : (0, r.jsx)(O.KN, {
                        subscriptionTier: l,
                        inOfferExperience: L,
                        containerClassName: s()(T.$F, {
                            [T.In]: !(H || U)
                        }),
                        buttonClassName: i,
                        isApplicationHome: !0,
                        isDarkMode: N,
                        isEligibleForBogoPromotion: P
                    }), (0, r.jsx)(O.U9, {
                        variant: "text-sm/normal",
                        withBottomMargin: !1,
                        isApplicationHome: !0
                    })]
                })
            }), (0, r.jsx)("div", {
                className: T.TT,
                children: (0, r.jsx)(_.A, {
                    autoPlay: !F,
                    playsInline: !0,
                    preload: F ? "none" : "auto",
                    poster: S.A,
                    loop: !0,
                    className: T.gm,
                    ref: R,
                    children: (0, r.jsx)("source", {
                        src: V ? v.A : I.A,
                        type: V ? y.a.MP4 : y.a.WEBM
                    })
                })
            })]
        })
    })
})