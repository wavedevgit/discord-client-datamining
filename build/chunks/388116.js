/** chunk id: 388116, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => T
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(397927),
    o = n(793574),
    d = n(688810),
    c = n(607470),
    u = n(676279),
    _ = n(526292),
    g = n(320908),
    m = n(693591),
    A = n(985018),
    h = n(615744),
    p = n(635736),
    x = n(917025),
    E = n(707621);
let T = s.forwardRef((e, t) => {
    let {
        className: n,
        isFooterVisible: l,
        isDarkMode: T,
        isReducedMotion: S,
        subscriptionTier: C
    } = e, {
        analyticsLocations: f
    } = (0, d.Ay)(o.A.PREMIUM_MARKETING_FOOTER_CTA), I = (0, _.ar)(), b = (0, u.TM)(), N = s.useRef(null), [v, j] = s.useState(!1);
    return s.useEffect(() => {
        !l || S || v || null == N.current || N.current.play()
    }, [l, S, v]), (0, i.jsx)(d.f5, {
        value: f,
        children: (0, i.jsxs)("div", {
            ref: t,
            className: a()(h.kL, n),
            children: [(0, i.jsx)(r.Heading, {
                className: h.RH,
                variant: "display-md",
                color: "text-strong",
                children: A.intl.string(A.t.lEw32m)
            }), (0, i.jsx)(g.KN, {
                subscriptionTier: C,
                inOfferExperience: I,
                containerClassName: h.Z5,
                isApplicationHome: !0,
                isDarkMode: T
            }), (0, i.jsx)("div", {
                className: h.av,
                children: (0, i.jsx)(c.A, {
                    playsInline: !0,
                    muted: !0,
                    preload: "auto",
                    poster: x.A,
                    className: h.dV,
                    onEnded: () => {
                        j(!0)
                    },
                    ref: N,
                    children: (0, i.jsx)("source", {
                        src: b ? p.A : E.A,
                        type: b ? m.a.MP4 : m.a.WEBM
                    })
                })
            }), (0, i.jsx)("div", {
                className: h.es
            }), (0, i.jsx)("div", {
                className: h.fF
            })]
        })
    })
})