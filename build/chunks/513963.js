/** chunk id: 513963 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var l = n(627968),
    i = n(64700),
    r = n(732955),
    a = n(817281),
    o = n(951829),
    s = n(985018);

function u(e) {
    let {
        type: t,
        onConfirm: n,
        onClose: u,
        ...d
    } = e, [c, A] = i.useState(!1), h = i.useCallback(() => {
        c && a.Ay.updatedUnsyncedSettings({
            disableHideSelfStreamAndVideoConfirmationAlert: !0
        }), n(), u()
    }, [n, c, u]), g = t === o.f.STREAM ? s.intl.string(s.t["/lFMWr"]) : s.intl.string(s.t.xzxhZS), f = t === o.f.STREAM ? s.intl.string(s.t.xaOX7d) : s.intl.string(s.t.oU1p9O);
    return (0, l.jsx)(r.aFV, {
        size: "md",
        actionBarInput: (0, l.jsx)(r.Sc0, {
            checked: c,
            onChange: e => A(e),
            label: s.intl.string(s.t["JdIQ/Y"]),
            labelType: "secondary"
        }),
        actions: [{
            variant: "secondary",
            text: s.intl.string(s.t["ETE/oC"]),
            onClick: u
        }, {
            variant: "primary",
            text: s.intl.string(s.t.BddRzS),
            onClick: h
        }],
        title: g,
        subtitle: f,
        onClose: u,
        ...d
    })
}