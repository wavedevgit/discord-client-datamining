/** chunk id: 513963 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(627968),
    l = n(64700),
    r = n(732955),
    a = n(817281),
    s = n(951829),
    o = n(985018);

function d(e) {
    let {
        type: t,
        onConfirm: n,
        onClose: d,
        ...c
    } = e, [u, h] = l.useState(!1), A = l.useCallback(() => {
        u && a.Ay.updatedUnsyncedSettings({
            disableHideSelfStreamAndVideoConfirmationAlert: !0
        }), n(), d()
    }, [n, u, d]), _ = t === s.f.STREAM ? o.intl.string(o.t["/lFMWr"]) : o.intl.string(o.t.xzxhZS), g = t === s.f.STREAM ? o.intl.string(o.t.xaOX7d) : o.intl.string(o.t.oU1p9O);
    return (0, i.jsx)(r.aFV, {
        size: "md",
        actionBarInput: (0, i.jsx)(r.Sc0, {
            checked: u,
            onChange: e => h(e),
            label: o.intl.string(o.t["JdIQ/Y"]),
            labelType: "secondary"
        }),
        actions: [{
            variant: "secondary",
            text: o.intl.string(o.t["ETE/oC"]),
            onClick: d
        }, {
            variant: "primary",
            text: o.intl.string(o.t.BddRzS),
            onClick: A
        }],
        title: _,
        subtitle: g,
        onClose: d,
        ...c
    })
}