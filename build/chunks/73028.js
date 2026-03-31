/** chunk id: 73028 params = (module,exports,require) **/
n.d(e, {
    U: () => u
});
var i = n(627968);
n(64700);
var l = n(397927),
    r = n(157559),
    a = n(818348),
    d = n(985018);
let u = (t, e) => {
    let u = `group-dm-edit-modal-${t}`,
        s = !1,
        o = t => {
            s = t
        },
        c = () => {
            s ? r.A.show({
                title: d.intl.string(d.t.pvRCSu),
                body: d.intl.string(d.t.DRi46S),
                confirmText: d.intl.string(d.t["6GQDFu"]),
                confirmVariant: "critical-primary",
                cancelText: d.intl.string(d.t.DmDzZB),
                onConfirm: () => (0, l.OoC)(u),
                onCancel: a.tE
            }) : (0, l.OoC)(u)
        };
    (0, l.mMO)(async () => {
        let {
            default: l
        } = await n.e("42455").then(n.bind(n, 66442));
        return n => (0, i.jsx)(l, {
            closeOrShowDiscardChangesAlert: c,
            setHasPendingChanges: o,
            channelId: t,
            location: e,
            ...n
        })
    }, {
        modalKey: u,
        onCloseRequest: c
    })
}