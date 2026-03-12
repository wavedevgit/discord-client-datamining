/** chunk id: 513963 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => c
});
var i = n(627968),
    s = n(64700),
    l = n(732955),
    a = n(817281),
    r = n(951829),
    o = n(985018);

function c(e) {
    let {
        type: t,
        onConfirm: n,
        onClose: c,
        ...d
    } = e, [u, h] = s.useState(!1), A = s.useCallback(() => {
        u && a.Ay.updatedUnsyncedSettings({
            disableHideSelfStreamAndVideoConfirmationAlert: !0
        }), n(), c()
    }, [n, u, c]), m = t === r.f.STREAM ? o.intl.string(o.t["/lFMWr"]) : o.intl.string(o.t.xzxhZS), p = t === r.f.STREAM ? o.intl.string(o.t.xaOX7d) : o.intl.string(o.t.oU1p9O);
    return (0, i.jsx)(l.aFV, {
        size: "md",
        actionBarInput: (0, i.jsx)(l.Sc0, {
            checked: u,
            onChange: e => h(e),
            label: o.intl.string(o.t["JdIQ/Y"]),
            labelType: "secondary"
        }),
        actions: [{
            variant: "secondary",
            text: o.intl.string(o.t["ETE/oC"]),
            onClick: c
        }, {
            variant: "primary",
            text: o.intl.string(o.t.BddRzS),
            onClick: A
        }],
        title: m,
        subtitle: p,
        onClose: c,
        ...d
    })
}