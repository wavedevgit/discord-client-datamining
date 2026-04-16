/** chunk id: 513963 params = (module,exports,require) **/
n.d(e, {
    A: () => u
});
var i = n(627968),
    r = n(64700),
    l = n(732955),
    a = n(817281),
    o = n(951829),
    d = n(985018);

function u(t) {
    let {
        type: e,
        onConfirm: n,
        onClose: u,
        ...s
    } = t, [c, A] = r.useState(!1), E = r.useCallback(() => {
        c && a.Ay.updatedUnsyncedSettings({
            disableHideSelfStreamAndVideoConfirmationAlert: !0
        }), n(), u()
    }, [n, c, u]), f = e === o.f.STREAM ? d.intl.string(d.t["/lFMWr"]) : d.intl.string(d.t.xzxhZS), _ = e === o.f.STREAM ? d.intl.string(d.t.xaOX7d) : d.intl.string(d.t.oU1p9O);
    return (0, i.jsx)(l.aFV, {
        size: "md",
        actionBarInput: (0, i.jsx)(l.Sc0, {
            checked: c,
            onChange: t => A(t),
            label: d.intl.string(d.t["JdIQ/Y"]),
            labelType: "secondary"
        }),
        actions: [{
            variant: "secondary",
            text: d.intl.string(d.t["ETE/oC"]),
            onClick: u
        }, {
            variant: "primary",
            text: d.intl.string(d.t.BddRzS),
            onClick: E
        }],
        title: f,
        subtitle: _,
        onClose: u,
        ...s
    })
}