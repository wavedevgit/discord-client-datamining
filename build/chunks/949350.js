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
    d = i(9653),
    A = i(473146),
    S = i(709747),
    E = i(531525),
    g = i(985018);
let _ = (0, s.zZ)(u.X.GIFT_INVENTORY_CATEGORY, {
        buildLayout: () => [T.V, A.E, d.R, S.Y]
    }),
    c = (0, s.t_)(u.X.GIFT_PANEL, {
        usePredicate: () => !(0, a.dk)("LegacyGiftPanel"),
        useTitle: () => g.intl.string(g.t["jcSP+g"]),
        StronglyDiscouragedCustomComponent: o.Ay,
        buildLayout: () => []
    }),
    I = (0, s.t_)(u.X.GIFT_PANEL, {
        usePredicate: () => (0, a.dk)("GiftPanel"),
        useTitle: () => g.intl.string(g.t["jcSP+g"]),
        buildLayout: () => [_]
    }),
    O = (0, s.i4)(u.X.GIFT_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t["jcSP+g"]),
        getLegacySearchKey: () => (0, a.WJ)("GiftPanel") ? void 0 : E.H.GIFT_INVENTORY,
        icon: n.GiftIcon,
        trailing: {
            type: r.S.BADGE_COUNT,
            useCount: () => (0, l.IO)().length
        },
        buildLayout: () => (0, a.WJ)("GiftPanel") ? [I] : [c]
    })