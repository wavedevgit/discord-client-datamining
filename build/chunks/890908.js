/** chunk id: 890908 params = (module,exports,require) **/
l.r(t), l.d(t, {
    RevenuePlaygroundCollectionId: () => f,
    nitroCollection: () => j,
    paymentsCollection: () => E,
    playgroundConfig: () => T,
    virtualCurrencyCollection: () => S
});
var a, n = l(397927),
    r = l(777595),
    i = l(527518),
    s = l(270727),
    o = l(473106),
    u = l(423396),
    c = l(309706),
    d = l(987274),
    p = l(886532),
    m = l(135791),
    h = l(931433),
    x = l(391622),
    b = l(203484),
    g = l(445736),
    y = l(504312),
    f = ((a = {}).PAYMENTS = "payments", a.VIRTUAL_CURRENCY = "virtual-currency", a.NITRO = "nitro", a);
let v = ["Revenue Storybook", "Revenue Playground"],
    E = {
        id: "payments",
        name: "Payments",
        groups: [o._, y.Y, c.U, g.Wo, r.v, u.Gu, b.O],
        tags: v,
        IconComponent: n.d2Y
    },
    S = {
        id: "virtual-currency",
        name: "Virtual Currency",
        groups: [s.h2, i.c$, h.V, x.e],
        tags: v,
        IconComponent: n.Cp8
    },
    j = {
        id: "nitro",
        name: "Nitro",
        groups: [d.I7, p.H, m.E],
        tags: v,
        IconComponent: n.tvc
    },
    T = {
        playgroundBaseUrl: "revenue",
        collections: [E, S, j]
    }