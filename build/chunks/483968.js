/** Chunk was on 92818 **/
/** chunk id: 483968, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
});
var r = n(627968),
    l = n(311907),
    i = n(827734),
    s = n(397927),
    o = n(590180),
    c = n(4227),
    a = n(993408),
    u = n(985018),
    d = n(616198);
let p = e => {
    let {
        skuId: t,
        canUsePremiumCollectibles: n,
        isPurchaseSection: p,
        isPremiumSection: m
    } = e, f = (0, a.aT)(t), g = (0, l.bG)([o.A, c.A], () => {
        let e = o.A.getProduct(t),
            n = c.A.getPurchase(t);
        return null != n ? (0, a.gA)(n) : (0, a.G0)(e)
    });
    return p || m && n ? null : f ? (0, r.jsx)(s.JIr, {
        className: d.Ad,
        text: (0, r.jsxs)("div", {
            className: d.rm,
            children: [(0, r.jsx)(s.XAi, {
                size: "xxs",
                color: "currentColor"
            }), u.intl.string(u.t.y2b7CA)]
        })
    }) : (0, r.jsx)(s.fkz, {
        icon: g ? () => (0, r.jsx)(s.tvc, {
            size: "custom",
            color: "currentColor",
            width: 14,
            height: 14
        }) : () => (0, r.jsx)(s.XAi, {
            size: "xxs",
            color: "currentColor"
        }),
        color: i.A.colors.BACKGROUND_MOD_STRONG.css,
        className: d.bG
    })
}