/** chunk id: 949350, original params: t,e,i (module,exports,require) **/
i.d(e, {
    Q: () => O
});
var n = i(934551),
    l = i(35587),
    s = i(419954),
    r = i(933297),
    u = i(780964),
    a = i(358776),
    o = i(586685),
    d = i(525707),
    T = i(9653),
    A = i(473146),
    S = i(932128),
    c = i(531525),
    E = i(985018);
let g = (0, s.zZ)(u.X.GIFT_INVENTORY_CATEGORY, {
        buildLayout: () => [d.V, A.E, T.R, S.Y]
    }),
    _ = (0, s.t_)(u.X.GIFT_PANEL, {
        usePredicate: () => !(0, a.dk)("LegacyGiftPanel"),
        useTitle: () => E.intl.string(E.t["jcSP+g"]),
        StronglyDiscouragedCustomComponent: o.Ay,
        buildLayout: () => []
    }),
    I = (0, s.t_)(u.X.GIFT_PANEL, {
        usePredicate: () => (0, a.dk)("GiftPanel"),
        useTitle: () => E.intl.string(E.t["jcSP+g"]),
        buildLayout: () => [g]
    }),
    O = (0, s.i4)(u.X.GIFT_SIDEBAR_ITEM, {
        useTitle: () => E.intl.string(E.t["jcSP+g"]),
        getLegacySearchKey: () => (0, a.WJ)("GiftPanel") ? void 0 : c.H.GIFT_INVENTORY,
        icon: n.GiftIcon,
        trailing: {
            type: r.S.BADGE_COUNT,
            useCount: () => (0, l.IO)().length
        },
        buildLayout: () => (0, a.WJ)("GiftPanel") ? [I] : [_]
    })