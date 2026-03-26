/** chunk id: 483968 params = (module,exports,require) **/
n.d(t, {
    A: () => m
});
var r = n(627968),
    i = n(311907),
    s = n(827734),
    l = n(397927),
    a = n(590180),
    o = n(4227),
    c = n(993408),
    d = n(985018),
    u = n(672947);
let m = e => {
    let {
        skuId: t,
        canUsePremiumCollectibles: n,
        isPurchaseSection: m,
        isPremiumSection: p
    } = e, g = (0, c.aT)(t), x = (0, i.bG)([a.A, o.A], () => {
        let e = a.A.getProduct(t),
            n = o.A.getPurchase(t);
        return null != n ? (0, c.gA)(n) : (0, c.G0)(e)
    });
    return m || p && n ? null : g ? (0, r.jsx)(l.JIr, {
        className: u.Ad,
        text: (0, r.jsxs)("div", {
            className: u.rm,
            children: [(0, r.jsx)(l.XAi, {
                size: "xxs",
                color: "currentColor"
            }), d.intl.string(d.t.y2b7CA)]
        })
    }) : (0, r.jsx)(l.fkz, {
        icon: x ? () => (0, r.jsx)(l.tvc, {
            size: "custom",
            color: "currentColor",
            width: 14,
            height: 14
        }) : () => (0, r.jsx)(l.XAi, {
            size: "xxs",
            color: "currentColor"
        }),
        color: s.A.colors.BACKGROUND_MOD_STRONG.css,
        className: u.bG
    })
}