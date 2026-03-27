/** chunk id: 513963 params = (module,exports,require) **/
i.d(e, {
    A: () => s
});
var n = i(627968),
    a = i(64700),
    l = i(732955),
    r = i(817281),
    o = i(951829),
    d = i(985018);

function s(t) {
    let {
        type: e,
        onConfirm: i,
        onClose: s,
        ...c
    } = t, [u, A] = a.useState(!1), f = a.useCallback(() => {
        u && r.Ay.updatedUnsyncedSettings({
            disableHideSelfStreamAndVideoConfirmationAlert: !0
        }), i(), s()
    }, [i, u, s]), b = e === o.f.STREAM ? d.intl.string(d.t["/lFMWr"]) : d.intl.string(d.t.xzxhZS), p = e === o.f.STREAM ? d.intl.string(d.t.xaOX7d) : d.intl.string(d.t.oU1p9O);
    return (0, n.jsx)(l.aFV, {
        size: "md",
        actionBarInput: (0, n.jsx)(l.Sc0, {
            checked: u,
            onChange: t => A(t),
            label: d.intl.string(d.t["JdIQ/Y"]),
            labelType: "secondary"
        }),
        actions: [{
            variant: "secondary",
            text: d.intl.string(d.t["ETE/oC"]),
            onClick: s
        }, {
            variant: "primary",
            text: d.intl.string(d.t.BddRzS),
            onClick: f
        }],
        title: b,
        subtitle: p,
        onClose: s,
        ...c
    })
}