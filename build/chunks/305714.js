/** chunk id: 305714, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => E
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(397927),
    o = n(793574),
    c = n(688810),
    d = n(607470),
    u = n(676279),
    _ = n(526292),
    p = n(753894),
    m = n(693591),
    g = n(985018),
    A = n(942916),
    f = n(635736),
    b = n(917025),
    h = n(707621);
let E = i.forwardRef((e, t) => {
    let {
        className: n,
        isFooterVisible: l,
        isDarkMode: E,
        isReducedMotion: O,
        subscriptionTier: C
    } = e, {
        analyticsLocations: x
    } = (0, c.Ay)(o.A.PREMIUM_MARKETING_FOOTER_CTA), S = (0, _.ar)(), T = (0, u.TM)(), I = i.useRef(null), [y, N] = i.useState(!1);
    return i.useEffect(() => {
        !l || O || y || null == I.current || I.current.play()
    }, [l, O, y]), (0, r.jsx)(c.f5, {
        value: x,
        children: (0, r.jsxs)("div", {
            ref: t,
            className: s()(A.kL, n),
            children: [(0, r.jsx)(a.Heading, {
                className: A.RH,
                variant: "display-md",
                color: "text-strong",
                children: g.intl.string(g.t.lEw32m)
            }), (0, r.jsx)(p.KN, {
                subscriptionTier: C,
                inOfferExperience: S,
                containerClassName: A.Z5,
                isApplicationHome: !0,
                isDarkMode: E
            }), (0, r.jsx)("div", {
                className: A.av,
                children: (0, r.jsx)(d.A, {
                    playsInline: !0,
                    muted: !0,
                    preload: "auto",
                    poster: b.A,
                    className: A.dV,
                    onEnded: () => {
                        N(!0)
                    },
                    ref: I,
                    children: (0, r.jsx)("source", {
                        src: T ? f.A : h.A,
                        type: T ? m.a.MP4 : m.a.WEBM
                    })
                })
            }), (0, r.jsx)("div", {
                className: A.es
            }), (0, r.jsx)("div", {
                className: A.fF
            })]
        })
    })
})