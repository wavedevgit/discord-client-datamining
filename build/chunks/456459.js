/** chunk id: 456459 params = (module,exports,require) **/
i.d(e, {
    V: () => x
});
var n = i(627968),
    r = i(64700),
    l = i(158954),
    a = i(311907),
    s = i(775602),
    u = i(524246),
    o = i(816252),
    c = i(916974),
    d = i(788868),
    m = i(985018),
    f = i(476791),
    p = i(303930),
    g = i(938822);
let x = () => {
    let {
        transitionState: t,
        onClose: e,
        premiumType: i,
        confettiCanvas: x,
        churnUserDiscountOffer: h,
        discountedPrice: C
    } = (0, c.X)(), P = (0, r.useRef)(null), [y, v] = (0, r.useState)(!1), j = (0, a.bG)([s.A], () => s.A.useReducedMotion);
    if ((0, r.useEffect)(() => {
            null !== P.current && null !== C && v(!0)
        }, [P, C]), null === h) return null;
    let E = i === d.PremiumTypes.TIER_2;
    return (0, n.jsxs)("div", {
        ref: P,
        children: [(0, n.jsx)(l.ExpressiveModal, {
            graphic: {
                type: "image",
                src: E ? g.A : p
            },
            gradientColor: E ? "nitro-pink" : "nitro-green",
            transitionState: t,
            title: m.intl.string(m.t.PZSyRk),
            onClose: async () => e(),
            children: (0, n.jsx)("div", {
                className: f.TA,
                children: (0, n.jsx)(o._, {
                    offerState: o.b.APPLIED,
                    userDiscountOffer: h
                })
            })
        }), !j && y && (0, n.jsx)(u.A, {
            confettiTarget: P.current,
            confettiCanvas: x,
            confettiVelocityMultiplier: .75
        })]
    })
}