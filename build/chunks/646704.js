/** chunk id: 646704 params = (module,exports,require) **/
n.d(t, {
    i: () => A
});
var i = n(627968),
    s = n(64700),
    l = n(934551),
    a = n(158954),
    r = n(827734),
    o = n(155984),
    d = n(419954),
    c = n(933297),
    u = n(780964),
    m = n(616415),
    _ = n(985018);
let g = (0, d.t_)(u.X.SUBSCRIPTIONS_PANEL, {
        useTitle: () => _.intl.string(_.t.trSpHX),
        buildLayout: () => [m.J]
    }),
    A = (0, d.i4)(u.X.SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => _.intl.string(_.t.trSpHX),
        icon: l.SubscriptionIcon,
        usePersistentBadge: function() {
            return s.useMemo(() => ({
                badgeType: c.Xi.STRONGLY_DISCOURAGED_CUSTOM,
                useCustomBadge: () => (0, o.l)() ? (0, i.jsx)(a.EpV, {
                    size: "xs",
                    color: r.A.unsafe_rawColors.YELLOW_300
                }) : null
            }), [])
        },
        buildLayout: () => [g]
    })