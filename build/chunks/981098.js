/** chunk id: 981098 params = (module,exports,require) **/
n.d(t, {
    y: () => g
});
var i = n(64700),
    s = n(934551),
    l = n(974544),
    r = n(419954),
    a = n(933297),
    o = n(780964),
    d = n(949302),
    c = n(389307),
    u = n(985018);
let m = (0, r.t_)(o.X.NITRO_PANEL, {
        useTitle: () => u.intl.string(u.t.Ipxkog),
        useObscuredNotice: l.L,
        buildLayout: () => [c.r]
    }),
    g = (0, r.i4)(o.X.NITRO_SIDEBAR_ITEM, {
        useTitle: () => u.intl.string(u.t.Ipxkog),
        icon: s.NitroWheelIcon,
        usePersistentBadge: function(e) {
            return i.useMemo(() => ({
                badgeType: a.Xi.STRONGLY_DISCOURAGED_CUSTOM,
                useCustomBadge: () => (0, d.e)(e)
            }), [e])
        },
        buildLayout: () => [m]
    })