/** Chunk was on web.js **/
/** chunk id: 456459, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    V: () => m
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(158954),
    o = n(311907),
    s = n(775602),
    l = n(524246),
    c = n(816252),
    u = n(916974),
    d = n(788868),
    f = n(985018),
    p = n(333291),
    _ = n(303930),
    h = n(938822);
let m = () => {
    let {
        transitionState: e,
        onClose: t,
        premiumType: n,
        confettiCanvas: m,
        churnUserDiscountOffer: g,
        discountedPrice: E
    } = (0, u.X)(), y = (0, i.useRef)(null), [b, O] = (0, i.useState)(!1), v = (0, o.bG)([s.A], () => s.A.useReducedMotion);
    if ((0, i.useEffect)(() => {
            null !== y.current && null !== E && O(!0)
        }, [y, E]), null === g) return null;
    let A = n === d.PremiumTypes.TIER_2;
    return (0, r.jsxs)("div", {
        ref: y,
        children: [(0, r.jsx)(a.ExpressiveModal, {
            graphic: {
                type: "image",
                src: A ? h.A : _
            },
            gradientColor: A ? "nitro-pink" : "nitro-green",
            transitionState: e,
            title: f.intl.string(f.t.PZSyRk),
            onClose: async () => t(),
            children: (0, r.jsx)("div", {
                className: p.TA,
                children: (0, r.jsx)(c._, {
                    offerState: c.b.APPLIED,
                    userDiscountOffer: g
                })
            })
        }), !v && b && (0, r.jsx)(l.A, {
            confettiTarget: y.current,
            confettiCanvas: m,
            confettiVelocityMultiplier: .75
        })]
    })
}