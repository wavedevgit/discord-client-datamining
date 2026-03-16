/** chunk id: 949350 params = (module,exports,require) **/
n.d(t, {
    Q: () => h
});
var i = n(64700),
    s = n(934551),
    l = n(35587),
    a = n(419954),
    r = n(933297),
    o = n(780964),
    d = n(525707),
    c = n(9653),
    u = n(473146),
    _ = n(709747),
    m = n(985018);
let g = (0, a.zZ)(o.X.GIFT_INVENTORY_CATEGORY, {
        buildLayout: () => [d.V, u.E, c.R, _.Y]
    }),
    A = (0, a.t_)(o.X.GIFT_PANEL, {
        useTitle: () => m.intl.string(m.t["jcSP+g"]),
        buildLayout: () => [g]
    }),
    h = (0, a.i4)(o.X.GIFT_SIDEBAR_ITEM, {
        useTitle: () => m.intl.string(m.t["jcSP+g"]),
        icon: s.GiftIcon,
        usePersistentBadge: function() {
            return i.useMemo(() => ({
                badgeType: r.Xi.COUNT,
                useCount: () => (0, l.IO)().length
            }), [])
        },
        buildLayout: () => [A]
    })