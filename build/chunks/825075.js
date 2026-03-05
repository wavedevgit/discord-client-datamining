/** chunk id: 825075, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => R
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(421380),
    d = n(397927),
    c = n(775602),
    u = n(793574),
    _ = n(688810),
    g = n(607470),
    m = n(676279),
    A = n(560138),
    h = n(526292),
    p = n(89366),
    x = n(236834),
    E = n(194509),
    T = n(224850),
    S = n(797255),
    C = n(288351),
    f = n(320908),
    I = n(693591),
    b = n(985018),
    N = n(986970),
    v = n(182514),
    j = n(619947),
    O = n(733907);
let R = s.forwardRef((e, t) => {
    let {
        className: n,
        buttonClassName: s,
        subscriptionTier: l,
        isDarkMode: R,
        isEligibleForBogoPromotion: y,
        videoRef: P
    } = e, {
        analyticsLocations: L
    } = (0, _.Ay)(u.A.PREMIUM_MARKETING_HERO_CTA), D = (0, p.QQ)(), G = (0, h.ar)(), M = (0, r.bG)([A.A], () => A.A.affinities), U = (0, x.A)(), k = null != U, V = R ? o.XD.WHITE : o.XD.BRAND, w = M.length > 0, H = b.intl.string(b.t.YCZldK), B = (0, m.TM)(), Y = (0, r.bG)([c.A], () => c.A.useReducedMotion);
    return (0, i.jsx)(_.f5, {
        value: L,
        children: (0, i.jsxs)("div", {
            className: a()(N.kL, N.qY, n),
            ref: t,
            "data-testid": "marketing-page-hero-header",
            children: [(0, i.jsx)("div", {
                className: N.kL,
                children: (0, i.jsxs)("div", {
                    className: N.s8,
                    children: [G && (0, i.jsx)(C.A, {}), (0, i.jsx)(d.Heading, {
                        className: N.WT,
                        variant: "display-sm",
                        color: "text-strong",
                        children: H
                    }), k ? (0, i.jsx)(S.A, {
                        referrer: U
                    }) : w && (0, i.jsx)("div", {
                        className: N.kb,
                        children: (0, i.jsx)(T.A, {
                            textColor: "text-default",
                            smallerText: !1,
                            isApplicationHome: !0
                        })
                    }), D ? (0, i.jsx)("div", {
                        className: a()(N.UD, N.$F, {
                            [N.In]: !(w || k)
                        }),
                        children: (0, i.jsx)(E.A, {
                            className: a()(N.x6, s),
                            color: V
                        })
                    }) : (0, i.jsx)(f.KN, {
                        subscriptionTier: l,
                        inOfferExperience: G,
                        containerClassName: a()(N.$F, {
                            [N.In]: !(w || k)
                        }),
                        buttonClassName: s,
                        isApplicationHome: !0,
                        isDarkMode: R,
                        isEligibleForBogoPromotion: y
                    }), (0, i.jsx)(f.U9, {
                        variant: "text-sm/normal",
                        withBottomMargin: !1,
                        isApplicationHome: !0
                    })]
                })
            }), (0, i.jsx)("div", {
                className: N.TT,
                children: (0, i.jsx)(g.A, {
                    autoPlay: !Y,
                    playsInline: !0,
                    preload: Y ? "none" : "auto",
                    poster: j.A,
                    loop: !0,
                    className: N.gm,
                    ref: P,
                    children: (0, i.jsx)("source", {
                        src: B ? v.A : O.A,
                        type: B ? I.a.MP4 : I.a.WEBM
                    })
                })
            })]
        })
    })
})