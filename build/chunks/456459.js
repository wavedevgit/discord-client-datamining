/** chunk id: 456459, original params: t,e,i (module,exports,require) **/
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
    f = i(211618),
    g = i(303930),
    p = i(938822);
let x = () => {
    let {
        transitionState: t,
        onClose: e,
        premiumType: i,
        confettiCanvas: x,
        churnUserDiscountOffer: h,
        discountedPrice: P
    } = (0, c.X)(), C = (0, r.useRef)(null), [y, v] = (0, r.useState)(!1), E = (0, a.bG)([s.A], () => s.A.useReducedMotion);
    if ((0, r.useEffect)(() => {
            null !== C.current && null !== P && v(!0)
        }, [C, P]), null === h) return null;
    let j = i === d.PremiumTypes.TIER_2;
    return (0, n.jsxs)("div", {
        ref: C,
        children: [(0, n.jsx)(l.ExpressiveModal, {
            graphic: {
                type: "image",
                src: j ? p.A : g
            },
            gradientColor: j ? "nitro-pink" : "nitro-green",
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
        }), !E && y && (0, n.jsx)(u.A, {
            confettiTarget: C.current,
            confettiCanvas: x,
            confettiVelocityMultiplier: .75
        })]
    })
}