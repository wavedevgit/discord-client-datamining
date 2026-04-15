/** chunk id: 796497 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(954571),
    r = n(191627),
    a = n(652215),
    o = n(221425),
    d = n(985018);

function c() {
    let e = d.intl.string(o.default["8SLtqb"]);
    return (0, i.jsx)(s.Button, {
        icon: s.yVk,
        variant: "primary",
        text: e,
        onClick: () => {
            (0, s.mMO)(async () => {
                let {
                    default: e
                } = await Promise.all([n.e("48159"), n.e("84268")]).then(n.bind(n, 320742));
                return t => (0, i.jsx)(e, {
                    ...t
                })
            }), l.default.track(a.HAw.FAMILY_CENTER_ACTION, {
                action: r.qb.ShowQRCodeModal
            })
        }
    })
}