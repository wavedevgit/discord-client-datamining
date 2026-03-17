/** chunk id: 413201 params = (module,exports,require) **/
i.d(t, {
    default: () => m
});
var l = i(627968),
    s = i(64700),
    n = i(158954),
    a = i(397927),
    r = i(253932),
    c = i(365258),
    d = i(929120),
    o = i(481045),
    u = i(985018);

function m(e) {
    let {
        direction: t,
        affectedGuildIds: i,
        settingName: m,
        mappedActivityValue: x,
        onClose: h,
        transitionState: j
    } = e, T = t === c.AI.RESTRICTING, {
        title: I,
        subtitle: f,
        confirmText: v,
        toastContent: g
    } = (0, c.vz)(T, m), b = (0, s.useMemo)(() => () => {
        r._Z.updateSetting(x), (0, c.gF)(t, i), (0, a.showToast)((0, a.createToast)(g, a.ToastType.SUCCESS))
    }, [x, t, i, g]), p = (0, s.useCallback)(() => {
        h(), (0, o.L7)()
    }, [h]);
    return (0, l.jsx)(n.ConfirmModal, {
        title: I,
        subtitle: f,
        confirmText: v,
        cancelText: u.intl.string(u.t.X1rGEm),
        variant: "primary",
        onConfirm: b,
        onClose: h,
        transitionState: j,
        children: (0, l.jsx)(d.n, {
            guildIds: i,
            direction: t,
            onClick: p
        })
    })
}