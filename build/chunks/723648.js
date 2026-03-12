/** chunk id: 723648 params = (module,exports,require) **/
n.d(t, {
    I: () => d
});
var i = n(934551),
    s = n(314116),
    l = n(830215),
    r = n(419954),
    a = n(780964),
    o = n(985018);
let d = (0, r.i4)(a.X.LOGOUT_SIDEBAR_ITEM, {
    variant: "destructive",
    useTitle: () => o.intl.string(o.t["2jxGer"]),
    icon: i.DoorExitIcon,
    onClick: () => {
        (0, s.A)({
            title: o.intl.string(o.t["2jxGer"]),
            subtitle: o.intl.string(o.t.SUnWBB),
            confirmText: o.intl.string(o.t["2jxGer"]),
            onConfirm: () => {
                l.A.logout("settings")
            }
        })
    },
    buildLayout: () => []
})