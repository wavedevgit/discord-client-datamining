/** Chunk was on 92818 **/
/** chunk id: 483968, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => p
});
var n = r(627968),
    l = r(311907),
    i = r(827734),
    s = r(397927),
    o = r(590180),
    c = r(4227),
    a = r(993408),
    u = r(985018),
    d = r(616198);
let p = e => {
    let {
        skuId: t,
        canUsePremiumCollectibles: r,
        isPurchaseSection: p,
        isPremiumSection: f
    } = e, m = (0, a.aT)(t), g = (0, l.bG)([o.A, c.A], () => {
        let e = o.A.getProduct(t),
            r = c.A.getPurchase(t);
        return null != r ? (0, a.gA)(r) : (0, a.G0)(e)
    });
    return p || f && r ? null : m ? (0, n.jsx)(s.JIr, {
        className: d.Ad,
        text: (0, n.jsxs)("div", {
            className: d.rm,
            children: [(0, n.jsx)(s.XAi, {
                size: "xxs",
                color: "currentColor"
            }), u.intl.string(u.t.y2b7CA)]
        })
    }) : (0, n.jsx)(s.fkz, {
        icon: g ? () => (0, n.jsx)(s.tvc, {
            size: "custom",
            color: "currentColor",
            width: 14,
            height: 14
        }) : () => (0, n.jsx)(s.XAi, {
            size: "xxs",
            color: "currentColor"
        }),
        color: i.A.colors.BACKGROUND_MOD_STRONG.css,
        className: d.bG
    })
}