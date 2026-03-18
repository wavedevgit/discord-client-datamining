/** chunk id: 73028 params = (module,exports,require) **/
"use strict";
n.d(e, {
    U: () => o
});
var i = n(627968);
n(64700);
var r = n(397927),
    s = n(157559),
    l = n(818348),
    a = n(985018);
let o = (t, e) => {
    let o = `group-dm-edit-modal-${t}`,
        c = !1,
        u = t => {
            c = t
        },
        d = () => {
            c ? s.A.show({
                title: a.intl.string(a.t.pvRCSu),
                body: a.intl.string(a.t.DRi46S),
                confirmText: a.intl.string(a.t["6GQDFu"]),
                confirmVariant: "critical-primary",
                cancelText: a.intl.string(a.t.DmDzZB),
                onConfirm: () => (0, r.OoC)(o),
                onCancel: l.tE
            }) : (0, r.OoC)(o)
        };
    (0, r.mMO)(async () => {
        let {
            default: r
        } = await n.e("42455").then(n.bind(n, 66442));
        return n => (0, i.jsx)(r, {
            closeOrShowDiscardChangesAlert: d,
            setHasPendingChanges: u,
            channelId: t,
            location: e,
            ...n
        })
    }, {
        modalKey: o,
        onCloseRequest: d
    })
}