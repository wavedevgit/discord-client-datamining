/** chunk id: 796497, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(627968);
n(64700);
var s = n(397927),
    a = n(954571),
    l = n(191627),
    r = n(652215),
    o = n(870236),
    c = n(985018);

function d() {
    let e = c.intl.string(o.default["8SLtqb"]);
    return (0, i.jsx)(s.Button, {
        icon: s.yVk,
        variant: "primary",
        text: e,
        onClick: () => {
            (0, s.mMO)(async () => {
                let {
                    default: e
                } = await Promise.all([n.e("45563"), n.e("84268")]).then(n.bind(n, 320742));
                return t => (0, i.jsx)(e, {
                    ...t
                })
            }), a.default.track(r.HAw.FAMILY_CENTER_ACTION, {
                action: l.qb.ShowQRCodeModal
            })
        }
    })
}