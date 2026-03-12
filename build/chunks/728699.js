/** chunk id: 728699 params = (module,exports,require) **/
n.d(t, {
    T: () => g
});
var i = n(64700),
    s = n(934551),
    l = n(554146),
    r = n(834981),
    a = n(419954),
    o = n(933297),
    d = n(780964),
    c = n(264474),
    u = n(985018),
    _ = n(870236);
let m = (0, a.t_)(d.X.FAMILY_CENTER_PANEL, {
        useTitle: () => u.intl.string(_.default.RZqaJn),
        buildLayout: () => [c.g]
    }),
    g = (0, a.i4)(d.X.FAMILY_CENTER_SIDEBAR_ITEM, {
        useTitle: () => u.intl.string(_.default.RZqaJn),
        icon: s.GroupIcon,
        usePersistentBadge: function() {
            return i.useMemo(() => ({
                badgeType: o.Xi.COUNT,
                useCount: r.VT
            }), [])
        },
        getDismissibleBadges: function() {
            return [{
                badgeType: o.Xi.NEW,
                dismissibleContent: l.M.FAMILY_CENTER_NEW_BADGE
            }]
        },
        buildLayout: () => [m]
    })