/** chunk id: 883967 params = (module,exports,require) **/
n.d(t, {
    J: () => _
});
var i = n(934551),
    s = n(824552),
    l = n(419954),
    r = n(780964),
    a = n(630457),
    o = n(993470),
    d = n(985018);
let c = (0, l.zZ)(r.X.AUTHORIZED_APPS_CATEGORY, {
        buildLayout: () => [o._],
        initialize: () => (s.A.fetch(), () => {
            a.i.setState({
                searchQuery: ""
            })
        })
    }),
    u = (0, l.t_)(r.X.AUTHORIZED_APPS_PANEL, {
        useTitle: () => d.intl.string(d.t["f6kk+r"]),
        hideInStreamerMode: !0,
        buildLayout: () => [c]
    }),
    _ = (0, l.i4)(r.X.AUTHORIZED_APPS_SIDEBAR_ITEM, {
        useTitle: () => d.intl.string(d.t["f6kk+r"]),
        icon: i.AppsIcon,
        buildLayout: () => [u]
    })