/** chunk id: 513963, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(627968),
    r = n(64700),
    l = n(732955),
    a = n(817281),
    o = n(951829),
    s = n(985018);

function d(e) {
    let {
        type: t,
        onConfirm: n,
        onClose: d,
        ...u
    } = e, [c, A] = r.useState(!1), f = r.useCallback(() => {
        c && a.Ay.updatedUnsyncedSettings({
            disableHideSelfStreamAndVideoConfirmationAlert: !0
        }), n(), d()
    }, [n, c, d]), E = t === o.f.STREAM ? s.intl.string(s.t["/lFMWr"]) : s.intl.string(s.t.xzxhZS), h = t === o.f.STREAM ? s.intl.string(s.t.xaOX7d) : s.intl.string(s.t.oU1p9O);
    return (0, i.jsx)(l.aFV, {
        size: "md",
        actionBarInput: (0, i.jsx)(l.Sc0, {
            checked: c,
            onChange: e => A(e),
            label: s.intl.string(s.t["JdIQ/Y"]),
            labelType: "secondary"
        }),
        actions: [{
            variant: "secondary",
            text: s.intl.string(s.t["ETE/oC"]),
            onClick: d
        }, {
            variant: "primary",
            text: s.intl.string(s.t.BddRzS),
            onClick: f
        }],
        title: E,
        subtitle: h,
        onClose: d,
        ...u
    })
}