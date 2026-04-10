/** chunk id: 513963 params = (module,exports,require) **/
n.d(e, {
    A: () => d
});
var i = n(627968),
    l = n(64700),
    r = n(732955),
    a = n(817281),
    o = n(951829),
    u = n(985018);

function d(t) {
    let {
        type: e,
        onConfirm: n,
        onClose: d,
        ...s
    } = t, [c, A] = l.useState(!1), g = l.useCallback(() => {
        c && a.Ay.updatedUnsyncedSettings({
            disableHideSelfStreamAndVideoConfirmationAlert: !0
        }), n(), d()
    }, [n, c, d]), h = e === o.f.STREAM ? u.intl.string(u.t["/lFMWr"]) : u.intl.string(u.t.xzxhZS), E = e === o.f.STREAM ? u.intl.string(u.t.xaOX7d) : u.intl.string(u.t.oU1p9O);
    return (0, i.jsx)(r.aFV, {
        size: "md",
        actionBarInput: (0, i.jsx)(r.Sc0, {
            checked: c,
            onChange: t => A(t),
            label: u.intl.string(u.t["JdIQ/Y"]),
            labelType: "secondary"
        }),
        actions: [{
            variant: "secondary",
            text: u.intl.string(u.t["ETE/oC"]),
            onClick: d
        }, {
            variant: "primary",
            text: u.intl.string(u.t.BddRzS),
            onClick: g
        }],
        title: h,
        subtitle: E,
        onClose: d,
        ...s
    })
}