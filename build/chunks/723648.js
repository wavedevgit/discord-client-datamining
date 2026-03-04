/** chunk id: 723648, original params: t,e,i (module,exports,require) **/
i.d(e, {
    I: () => o
});
var n = i(934551),
    l = i(314116),
    s = i(830215),
    a = i(419954),
    r = i(780964),
    u = i(985018);
let o = (0, a.i4)(r.X.LOGOUT_SIDEBAR_ITEM, {
    variant: "destructive",
    useTitle: () => u.intl.string(u.t["2jxGer"]),
    icon: n.DoorExitIcon,
    onClick: () => {
        (0, l.A)({
            title: u.intl.string(u.t["2jxGer"]),
            subtitle: u.intl.string(u.t.SUnWBB),
            confirmText: u.intl.string(u.t["2jxGer"]),
            onConfirm: () => {
                s.A.logout("settings")
            }
        })
    },
    buildLayout: () => []
})