/** chunk id: 949350, original params: e,t,i (module,exports,require) **/
i.d(t, {
    Q: () => O
});
var n = i(934551),
    l = i(35587),
    s = i(419954),
    r = i(933297),
    a = i(780964),
    u = i(358776),
    o = i(586685),
    d = i(525707),
    T = i(9653),
    c = i(473146),
    A = i(709747),
    S = i(531525),
    _ = i(985018);
let E = (0, s.zZ)(a.X.GIFT_INVENTORY_CATEGORY, {
        buildLayout: () => [d.V, c.E, T.R, A.Y]
    }),
    g = (0, s.t_)(a.X.GIFT_PANEL, {
        usePredicate: () => !(0, u.dk)("LegacyGiftPanel"),
        useTitle: () => _.intl.string(_.t["jcSP+g"]),
        StronglyDiscouragedCustomComponent: o.Ay,
        buildLayout: () => []
    }),
    I = (0, s.t_)(a.X.GIFT_PANEL, {
        usePredicate: () => (0, u.dk)("GiftPanel"),
        useTitle: () => _.intl.string(_.t["jcSP+g"]),
        buildLayout: () => [E]
    }),
    O = (0, s.i4)(a.X.GIFT_SIDEBAR_ITEM, {
        useTitle: () => _.intl.string(_.t["jcSP+g"]),
        getLegacySearchKey: () => (0, u.WJ)("GiftPanel") ? void 0 : S.H.GIFT_INVENTORY,
        icon: n.GiftIcon,
        trailing: {
            type: r.S.BADGE_COUNT,
            useCount: () => (0, l.IO)().length
        },
        buildLayout: () => (0, u.WJ)("GiftPanel") ? [I] : [g]
    })