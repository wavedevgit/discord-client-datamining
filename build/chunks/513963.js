/** chunk id: 513963 params = (module,exports,require) **/
t.d(n, {
    A: () => o
});
var i = t(627968),
    l = t(64700),
    r = t(732955),
    a = t(817281),
    s = t(951829),
    d = t(985018);

function o(e) {
    let {
        type: n,
        onConfirm: t,
        onClose: o,
        ...c
    } = e, [u, h] = l.useState(!1), A = l.useCallback(() => {
        u && a.Ay.updatedUnsyncedSettings({
            disableHideSelfStreamAndVideoConfirmationAlert: !0
        }), t(), o()
    }, [t, u, o]), g = n === s.f.STREAM ? d.intl.string(d.t["/lFMWr"]) : d.intl.string(d.t.xzxhZS), m = n === s.f.STREAM ? d.intl.string(d.t.xaOX7d) : d.intl.string(d.t.oU1p9O);
    return (0, i.jsx)(r.aFV, {
        size: "md",
        actionBarInput: (0, i.jsx)(r.Sc0, {
            checked: u,
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
            onClick: A
        }],
        title: g,
        subtitle: m,
        onClose: o,
        ...c
    })
}