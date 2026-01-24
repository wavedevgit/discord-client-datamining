/** Chunk was on 28979 **/
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
    T = i(525707),
    A = i(9653),
    d = i(473146),
    S = i(709747),
    E = i(531525),
    _ = i(985018);
let g = (0, s.zZ)(u.X.GIFT_INVENTORY_CATEGORY, {
        buildLayout: () => [T.V, d.E, A.R, S.Y]
    }),
    c = (0, s.t_)(u.X.GIFT_PANEL, {
        usePredicate: () => !(0, a.dk)("LegacyGiftPanel"),
        useTitle: () => _.intl.string(_.t["jcSP+g"]),
        StronglyDiscouragedCustomComponent: o.Ay,
        buildLayout: () => []
    }),
    I = (0, s.t_)(u.X.GIFT_PANEL, {
        usePredicate: () => (0, a.dk)("GiftPanel"),
        useTitle: () => _.intl.string(_.t["jcSP+g"]),
        buildLayout: () => [g]
    }),
    O = (0, s.i4)(u.X.GIFT_SIDEBAR_ITEM, {
        useTitle: () => _.intl.string(_.t["jcSP+g"]),
        getLegacySearchKey: () => (0, a.WJ)("GiftPanel") ? void 0 : E.H.GIFT_INVENTORY,
        icon: n.GiftIcon,
        trailing: {
            type: r.S.BADGE_COUNT,
            useCount: () => (0, l.IO)().length
        },
        buildLayout: () => (0, a.WJ)("GiftPanel") ? [I] : [c]
    })