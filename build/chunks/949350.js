/** chunk id: 949350 params = (module,exports,require) **/
n.d(t, {
    Q: () => h
});
var i = n(64700),
    s = n(934551),
    l = n(35587),
    r = n(419954),
    a = n(933297),
    o = n(780964),
    d = n(525707),
    c = n(9653),
    u = n(473146),
    _ = n(709747),
    m = n(985018);
let g = (0, r.zZ)(o.X.GIFT_INVENTORY_CATEGORY, {
        buildLayout: () => [d.V, u.E, c.R, _.Y]
    }),
    A = (0, r.t_)(o.X.GIFT_PANEL, {
        useTitle: () => m.intl.string(m.t["jcSP+g"]),
        buildLayout: () => [g]
    }),
    h = (0, r.i4)(o.X.GIFT_SIDEBAR_ITEM, {
        useTitle: () => m.intl.string(m.t["jcSP+g"]),
        icon: s.GiftIcon,
        usePersistentBadge: function() {
            return i.useMemo(() => ({
                badgeType: a.Xi.COUNT,
                useCount: () => (0, l.IO)().length
            }), [])
        },
        buildLayout: () => [A]
    })