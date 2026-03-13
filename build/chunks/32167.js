/** chunk id: 32167 params = (module,exports,require) **/
i.d(t, {
    default: () => o
});
var s = i(627968),
    l = i(64700),
    n = i(158954),
    a = i(397927),
    r = i(365258),
    c = i(929120),
    d = i(985018);

function o(e) {
    let {
        direction: t,
        affectedGuildIds: i,
        settingName: o,
        onClose: u,
        transitionState: m
    } = e, x = t === r.AI.RESTRICTING, {
        title: h,
        subtitle: j,
        confirmText: I,
        toastContent: T
    } = (0, r.ae)(x, o), f = (0, l.useMemo)(() => () => {
        (0, r.gF)(t, i), (0, a.showToast)((0, a.createToast)(T, a.ToastType.SUCCESS))
    }, [t, i, T]);
    return (0, s.jsx)(n.ConfirmModal, {
        title: h,
        subtitle: j,
        confirmText: I,
        cancelText: d.intl.string(d.t.X1rGEm),
        variant: "primary",
        onConfirm: f,
        onClose: u,
        transitionState: m,
        children: (0, s.jsx)(c.n, {
            guildIds: i,
            direction: t
        })
    })
}