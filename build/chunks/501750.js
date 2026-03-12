/** chunk id: 501750 params = (module,exports,require) **/
n.d(t, {
    y: () => _
});
var i = n(64700),
    s = n(934551),
    l = n(419954),
    r = n(933297),
    a = n(780964),
    o = n(965304),
    d = n(485079),
    c = n(985018);
let u = (0, l.t_)(a.X.NITRO_PANEL, {
        useTitle: () => c.intl.string(c.t.Ipxkog),
        buildLayout: () => [d.r]
    }),
    _ = (0, l.i4)(a.X.NITRO_SIDEBAR_ITEM, {
        useTitle: () => c.intl.string(c.t.Ipxkog),
        icon: s.NitroWheelIcon,
        usePersistentBadge: function(e) {
            return i.useMemo(() => ({
                badgeType: r.Xi.STRONGLY_DISCOURAGED_CUSTOM,
                useCustomBadge: () => (0, o.e)(e)
            }), [e])
        },
        buildLayout: () => [u]
    })