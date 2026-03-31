/** chunk id: 513963 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var l = n(627968),
    i = n(64700),
    r = n(732955),
    a = n(817281),
    s = n(951829),
    d = n(985018);

function o(e) {
    let {
        type: t,
        onConfirm: n,
        onClose: o,
        ...u
    } = e, [c, h] = i.useState(!1), _ = i.useCallback(() => {
        c && a.Ay.updatedUnsyncedSettings({
            disableHideSelfStreamAndVideoConfirmationAlert: !0
        }), n(), o()
    }, [n, c, o]), A = t === s.f.STREAM ? d.intl.string(d.t["/lFMWr"]) : d.intl.string(d.t.xzxhZS), g = t === s.f.STREAM ? d.intl.string(d.t.xaOX7d) : d.intl.string(d.t.oU1p9O);
    return (0, l.jsx)(r.aFV, {
        size: "md",
        actionBarInput: (0, l.jsx)(r.Sc0, {
            checked: c,
            onChange: e => h(e),
            label: d.intl.string(d.t["JdIQ/Y"]),
            labelType: "secondary"
        }),
        actions: [{
            variant: "secondary",
            text: d.intl.string(d.t["ETE/oC"]),
            onClick: o
        }, {
            variant: "primary",
            text: d.intl.string(d.t.BddRzS),
            onClick: _
        }],
        title: A,
        subtitle: g,
        onClose: o,
        ...u
    })
}