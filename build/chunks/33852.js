/** chunk id: 33852 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var i = n(627968);
n(64700);
var l = n(311907),
    s = n(397927),
    a = n(882997),
    r = n(962173),
    o = n(985018);

function c(e) {
    let {
        platform: t,
        variant: n = "secondary",
        size: c = "sm",
        onAction: d,
        icon: u,
        ...h
    } = e;
    return (0, l.bG)([r.A], () => r.A.getAccounts().some(e => e.type === t.type)) ? null : (0, i.jsx)(s.Button, {
        onClick: () => {
            d?.(), (0, a.A)({
                platformType: t.type,
                location: "Activity Action"
            })
        },
        variant: n,
        size: c,
        icon: u,
        text: o.intl.format(o.t.XWSHTb, {
            platform: t.name
        }),
        fullWidth: !0,
        ...h
    })
}